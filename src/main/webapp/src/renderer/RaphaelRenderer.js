/**
 * Raphael 라이브러리를 이용하여 구현한 랜더러 캔버스 클래스
 * - 노드에 추가되는 속성 : _type, _shape, _selected, _from, _to, _fromedge, _toedge
 * - 노드에 저장되는 값 : shape : { geom, angle, image, text }, data : 커스텀 Object
 *
 * @class
 * @extends OG.renderer.IRenderer
 * @requires OG.common.*
 * @requires OG.geometry.*
 * @requires OG.shape.*
 * @requires raphael-2.1.0
 *
 * @param {HTMLElement|String} container 컨테이너 DOM element or ID
 * @param {Number[]} containerSize 컨테이너 Width, Height
 * @param {String} backgroundColor 캔버스 배경색
 * @param {String} backgroundImage 캔버스 배경이미지
 * @param {Object} config Configuration
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.renderer.RaphaelRenderer = function (container, containerSize, backgroundColor, backgroundImage, config) {
    OG.renderer.RaphaelRenderer.superclass.call(this, arguments);

    this._CONFIG = config;
    this._PAPER = new Raphael(container, containerSize ? containerSize[0] : null, containerSize ? containerSize[1] : null);

    // 최상위 그룹 엘리먼트 초기화
    this._ROOT_GROUP = this._add(this._PAPER.group(), null, OG.Constants.NODE_TYPE.ROOT);
    this._ETC_GROUP = this._add(this._PAPER.group(), null, OG.Constants.NODE_TYPE.ETC);
    this._PAPER.id = "OG_" + this._ID_PREFIX;
    this._PAPER.canvas.id = "OG_" + this._ID_PREFIX;
    this._CANVAS_COLOR = backgroundColor || this._CONFIG.CANVAS_BACKGROUND;

    $(this._PAPER.canvas).css({
        "background-color": this._CANVAS_COLOR,
        "user-select": "none",
        "-o-user-select": "none",
        "-moz-user-select": "none",
        "-khtml-user-select": "none",
        "-webkit-user-select": "none"
    });
    if (backgroundImage) {
        $(this._PAPER.canvas).css({"background-image": backgroundImage});
    }

    // container 에 keydown 이벤트 가능하도록
    $(this._PAPER.canvas.parentNode).attr("tabindex", "0");
    $(this._PAPER.canvas.parentNode).css({"outline": "none"});

    // container 의 position 을 static 인 경우 offset 이 깨지므로 relative 로 보정
    if ($(this._PAPER.canvas.parentNode).css('position') === 'static') {
        $(this._PAPER.canvas.parentNode).css({
            position: 'relative',
            left: '0',
            top: '0'
        });
    }
};
OG.renderer.RaphaelRenderer.prototype = new OG.renderer.IRenderer();
OG.renderer.RaphaelRenderer.superclass = OG.renderer.IRenderer;
OG.renderer.RaphaelRenderer.prototype.constructor = OG.renderer.RaphaelRenderer;
OG.RaphaelRenderer = OG.renderer.RaphaelRenderer;

/**
 * ID를 발급하고 ID:rElement 해쉬맵에 추가한다.
 *
 * @param {Raphael.Element} rElement 라파엘 엘리먼트
 * @param {String} id 지정ID
 * @param {String} nodeType Node 유형(ROOT, SHAPE ...)
 * @param {String} shapeType Shape 유형(GEOM, TEXT, IMAGE, EDGE, GROUP ...)
 * @return {Raphael.Element} rElement 라파엘 엘리먼트
 * @private
 */
OG.renderer.RaphaelRenderer.prototype._add = function (rElement, id, nodeType, shapeType) {
    rElement.id = id || this._genId();
    rElement.node.id = rElement.id;
    rElement.node.raphaelid = rElement.id;
    if (nodeType) {
        $(rElement.node).attr("_type", nodeType);
    }
    if (shapeType) {
        $(rElement.node).attr("_shape", shapeType);
    }
    this._ELE_MAP.put(rElement.id, rElement);

    return rElement;
};

OG.renderer.RaphaelRenderer.prototype.setCanvas = function (canvas) {
    this._CANVAS = canvas;
};

/**
 * 라파엘 엘리먼트를 하위 엘리먼트 포함하여 제거한다.
 *
 * @param {Raphael.Element} rElement 라파엘 엘리먼트
 * @private
 */
OG.renderer.RaphaelRenderer.prototype._remove = function (rElement) {
    var childNodes, i;
    if (rElement) {
        childNodes = rElement.node.childNodes;
        for (i = childNodes.length - 1; i >= 0; i--) {
            this._remove(this._getREleById(childNodes[i].id));
        }
        this._ELE_MAP.remove(rElement.id);
        rElement.remove();
    }
};

/**
 * 하위 엘리먼트만 제거한다.
 *
 * @param {Raphael.Element} rElement 라파엘 엘리먼트
 * @private
 */
OG.renderer.RaphaelRenderer.prototype._removeChild = function (rElement) {
    var childNodes, i;
    if (rElement) {
        childNodes = rElement.node.childNodes;
        for (i = childNodes.length - 1; i >= 0; i--) {
            if (childNodes[i].tagName == 'svg') {
                childNodes[i].parentNode.removeChild(childNodes[i]);
            } else {
                this._remove(this._getREleById(childNodes[i].id));
            }
        }
    }
};

/**
 * ID에 해당하는 RaphaelElement 를 반환한다.
 *
 * @param {String} id ID
 * @return {Raphael.Element} RaphaelElement
 * @private
 */
OG.renderer.RaphaelRenderer.prototype._getREleById = function (id) {
    return this._ELE_MAP.get(id);
};

OG.renderer.RaphaelRenderer.prototype._drawSubShape = function (groupElement) {
    //그룹 엘리먼트에 createSubShape 메소드를 확인한다.
    var me = this, subShapeNodes, subShapeNode, width, height,
        left, top, right, bottom, align, verticalAlign,
        subVertices, subStyle, subShape, subShapeId, tempNode, zIndex,
        boundary, bW, bH, bT, bL, tempNodes = [];
    if (!groupElement.shape.createSubShape) {
        return;
    }

    subShapeNodes = groupElement.shape.createSubShape();
    if (!subShapeNodes || !subShapeNodes.length) {
        return;
    }
    for (var i = 0, leni = subShapeNodes.length; i < leni; i++) {
        subShapeNode = subShapeNodes[i];
        width = subShapeNode.width;
        height = subShapeNode.height;
        left = subShapeNode.left;
        top = subShapeNode.top;
        right = subShapeNode.right;
        bottom = subShapeNode.bottom;
        align = subShapeNode.align;
        zIndex = subShapeNode['z-index'];
        verticalAlign = subShapeNode['vertical-align'];
        subVertices = subShapeNode.vertices ? JSON.parse(JSON.stringify(subShapeNode.vertices)) : null;
        subStyle = subShapeNode.style ? subShapeNode.style : {};
        subShape = subShapeNode.shape;

        //지정된 subShape 이 없다면 리턴한다.
        if (!subShape) {
            continue;
        }

        //subShapeId 를 구한다.
        subShapeId = groupElement.id + '_sub_' + i;

        //groupElement 의 바운더리에 따라 위치값들을 정한다.
        boundary = me.getBoundary(groupElement);
        bW = boundary.getWidth();
        bH = boundary.getHeight();
        bL = boundary.getUpperLeft().x;
        bT = boundary.getUpperLeft().y;

        var getLength = function (standard, value) {
            var length;

            //값이 없고, 0 이 아닐경우
            if (!value && value != 0) {
                length = undefined;
            }
            //숫자 형태인 경우
            else if (typeof value == 'number') {
                length = value;
            } else if (typeof value == 'string') {
                //픽셀인 경우
                if (value.indexOf('px') != -1) {
                    length = parseFloat(value.replace('px', ''));
                }
                //퍼센테이지 경우
                else if (value.indexOf('%') != -1) {
                    value = parseFloat(value.replace('%', ''));
                    length = standard * (value / 100);
                }
                //그외에는 숫자취급
                else {
                    length = parseFloat(value);
                }
            }
            return length;
        };

        //Edge 가 아닌 일반 도형의 위치값을 구한다.
        width = getLength(bW, width);
        height = getLength(bH, height);
        left = getLength(bW, left) + bL;
        right = bL + bW - getLength(bW, right) - width;
        top = getLength(bH, top) + bT;
        bottom = bT + bH - getLength(bH, bottom) - height;

        //right 가 있다면 left 보다 우선하고, bottom 이 있다면 top 보다 우선한다.
        //최종 위치 계산은 top 과 left 로 한다.
        if (!right && right != 0) {

        } else {
            left = right;
        }
        if (!bottom && bottom != 0) {

        } else {
            top = bottom;
        }

        //align 이나 vertice-algin 값이 있을 경우 left 와 top 값을 오버라이드 한다.
        if (align == 'left') {
            left = bL;
        } else if (align == 'center') {
            left = bL + (bW / 2) - (width / 2);
        } else if (align == 'right') {
            left = bL + bW - width;
        }

        if (verticalAlign == 'top') {
            top = bT;
        } else if (verticalAlign == 'middle') {
            top = bT + (bH / 2) - (height / 2);
        } else if (verticalAlign == 'bottom') {
            top = bT + bH - height;
        }

        //Edge 인 도형의 위치값을 구한다. subVertices 의 (left,right),(top,bottom) 기준값으로 정한다.
        if (subShape instanceof OG.shape.EdgeShape) {
            if (subVertices && subVertices.length) {
                for (var v = 0, lenv = subVertices.length; v < lenv; v++) {
                    //x 축이 left 기준인 경우
                    if (typeof subVertices[v][0] == 'string' && subVertices[v][0].indexOf('left') != -1) {
                        subVertices[v][0] = subVertices[v][0].replace('left', '');
                        subVertices[v][0] = getLength(bW, subVertices[v][0]) + bL;
                    }
                    //x 축이 right 기준인 경우
                    else if (typeof subVertices[v][0] == 'string' && subVertices[v][0].indexOf('right') != -1) {
                        subVertices[v][0] = subVertices[v][0].replace('right', '');
                        subVertices[v][0] = bL + bW - getLength(bW, subVertices[v][0]);
                    }
                    //그 외의 경우는 left 처리
                    else {
                        subVertices[v][0] = getLength(bW, subVertices[v][0]) + bL;
                    }

                    //y 축이 top 기준인 경우
                    if (typeof subVertices[v][1] == 'string' && subVertices[v][1].indexOf('top') != -1) {
                        subVertices[v][1] = subVertices[v][1].replace('top', '');
                        subVertices[v][1] = getLength(bH, subVertices[v][1]) + bT;
                    }
                    //y 축이 bottom 기준인 경우
                    else if (typeof subVertices[v][1] == 'string' && subVertices[v][1].indexOf('bottom') != -1) {
                        subVertices[v][1] = subVertices[v][1].replace('bottom', '');
                        subVertices[v][1] = bT + bH - getLength(bH, subVertices[v][1]);
                    }
                    //그 외의 경우는 top 처리
                    else {
                        subVertices[v][1] = getLength(bH, subVertices[v][1]) + bT;
                    }
                }
            } else {
                subVertices = [[bL, bT], [bL + bW, bT]];
            }
            subShape.geom = new OG.PolyLine(subVertices);
        }

        //노드 복사를 위한 가상의 그룹노드
        if (subShape instanceof OG.shape.EdgeShape) {
            tempNode = me.drawShape(null, subShape, null, subStyle, subShapeId, true);
        } else {
            tempNode = me.drawShape([left + width / 2, top + height / 2], subShape, [width, height], subStyle, subShapeId, true);
        }

        //z-index 에 따라 tempNodes 에 인서트한다.
        //zIndex 가 없거나 0 이면 0 이다.
        if (!zIndex || zIndex == 0) {
            zIndex = 0;
        }
        tempNodes.push({
            index: zIndex,
            node: tempNode
        });
    }

    //tempNodes 를 인덱스에 따라 소팅한다.
    tempNodes.sort(
        function (a, b) {
            return a['index'] - b['index']
        }
    );

    var index, node, standardChild;
    for (var i = 0, leni = tempNodes.length; i < leni; i++) {
        //groupElement 내부의 가장 첫 자식을 기준으로 삼는다.
        standardChild = groupElement.firstChild;
        index = tempNodes[i].index;
        node = $(tempNodes[i].node);
        $(node).children().each(function (childIndex, child) {
            $(child).removeAttr('_type');
            $(child).removeAttr('_shape');
            $(child).attr('_index', index);

            //0 보다 큰 인덱스는 groupElement 에 순서대로 인서트한다.
            if (index >= 0) {
                groupElement.appendChild(child);
            }

            else {
                //기준이 없다면 순서대로 인서트한다.
                if (!standardChild) {
                    groupElement.appendChild(child);
                }
                //기준이 있다면 기준 앞에 인서트한다.
                else {
                    groupElement.insertBefore(child, standardChild);
                }
            }
        });

        //가상의 그룹노드를 삭제한다.
        me._remove(me._getREleById($(node).attr('id')));
    }
};

/**
 * Geometry 를 캔버스에 드로잉한다.(Recursive)
 *
 * @param {Element} groupElement Group DOM Element
 * @param {OG.geometry.Geometry} geometry 기하 객체
 * @param {OG.geometry.Style|Object} style 스타일
 * @param {Object} parentStyle Geometry Collection 인 경우 상위 Geometry 스타일
 * @return {Element}
 * @private
 */
OG.renderer.RaphaelRenderer.prototype._drawGeometry = function (groupElement, geometry, style, parentStyle, isEdge) {
    //이곳에, 패턴에 관한 데이터를 추가해야 한다.
    //패턴에 따라 주어진 vertices 를 따라 패턴을 추가해준다.
    //패턴 두께. 패턴 내용물. 패턴 특이점. => 패턴의 일정거리까지는 무엇. 일정거리까지는 무엇. 디폴트는 무엇.
    //패턴이 있다면 패턴 이외의 실제 라인은 투명처리.
    //OG.Constants.ORIGINAL_NODE

    var me = this, i = 0, pathStr = "", vertices, element, geomObj, _style = {}, connectGuideElement;
    var svg = me.getRootElement();
    var getRoundedPath = function (rectangle, radius) {
        var rectObj, rectVert, offset1, offset2, angle, array = [],
            getRoundedOffset = function (coord, dist, deg) {
                var theta = Math.PI / 180 * deg;
                return new OG.geometry.Coordinate(
                    OG.Util.round(coord.x + dist * Math.cos(theta)),
                    OG.Util.round(coord.y + dist * Math.sin(theta))
                );
            };

        rectObj = OG.JSON.decode(rectangle.toString());
        rectVert = rectangle.getVertices();
        angle = rectObj.angle;

        offset1 = getRoundedOffset(rectVert[0], radius, 90 + angle);
        offset2 = getRoundedOffset(rectVert[0], radius, angle);
        array = array.concat(["M", offset1.x, offset1.y, "Q", rectVert[0].x, rectVert[0].y, offset2.x, offset2.y]);

        offset1 = getRoundedOffset(rectVert[1], radius, 180 + angle);
        offset2 = getRoundedOffset(rectVert[1], radius, 90 + angle);
        array = array.concat(["L", offset1.x, offset1.y, "Q", rectVert[1].x, rectVert[1].y, offset2.x, offset2.y]);

        offset1 = getRoundedOffset(rectVert[2], radius, 270 + angle);
        offset2 = getRoundedOffset(rectVert[2], radius, 180 + angle);
        array = array.concat(["L", offset1.x, offset1.y, "Q", rectVert[2].x, rectVert[2].y, offset2.x, offset2.y]);

        offset1 = getRoundedOffset(rectVert[3], radius, angle);
        offset2 = getRoundedOffset(rectVert[3], radius, 270 + angle);
        array = array.concat(["L", offset1.x, offset1.y, "Q", rectVert[3].x, rectVert[3].y, offset2.x, offset2.y, "Z"]);

        return array.toString();
    }, getConnectGuideStyle = function () {
        return me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_EVENT_AREA
    }, setConnectGuideAttr = function (ele) {
        ele.attr(getConnectGuideStyle());
    };

    if (parentStyle) {
        OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {},
            OG.Util.apply({}, geometry.style.map, OG.Util.apply({}, parentStyle, me._CONFIG.DEFAULT_STYLE.GEOM)));
    } else {
        OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {},
            OG.Util.apply({}, geometry.style.map, me._CONFIG.DEFAULT_STYLE.GEOM));
    }

    var multi = _style['multi'];
    var rootMarker = _style['marker'];
    var rootPattern = _style['pattern'];
    var rootAnimation = _style['animation'];
    var marker, pattern;


    //기초 선분의 vertices 를 중심으로, top,from,to 에 따른 가상 선분을 그린다.
    var drawMulti = function (vertices) {
        var multiData, top, from, to, nodeId, multiStyle;

        /**
         * nodePath 스트링으로부터 distance 표현식 만큼의 거리를 반환한다.
         * distance 는 start,center,end, percentage, number, end- 형태로 올 수 있다.
         * @param nodePath 선분 노드 패스
         * @param distance 거리 표현식
         * @returns {Number} 선분 길이 대비 거리
         */
        var getSubDistance = function (nodePath, distance) {
            var totalLenth = Raphael.getTotalLength(nodePath);
            var length;
            //넘버 형태일 경우
            if (typeof distance == 'number') {
                length = distance;
            } else if (typeof distance == 'string') {
                //픽셀일 경우
                if (distance.indexOf('px') != -1) {
                    length = parseInt(distance.replace('px', ''));
                }
                //퍼센테이지 일 경우
                if (distance.indexOf('%') != -1) {
                    distance = parseInt(distance.replace('%', ''));
                    length = totalLenth * (distance / 100);
                }
                else if (distance == 'start') {
                    length = 0;
                }
                else if (distance == 'center') {
                    length = totalLenth / 2;
                }
                else if (distance == 'end') {
                    length = totalLenth;
                }
                else if (distance.indexOf('end-') != -1) {
                    length = totalLenth - getSubDistance(nodePath, distance.replace('end-', ''));
                }
                else {
                    distance = parseInt(distance);
                    length = distance;
                }
            }
            return length;
        };

        for (var m = 0, lenm = multi.length; m < lenm; m++) {
            multiData = multi[m];
            top = multiData['top'];
            from = multiData['from'];
            to = multiData['to'];

            multiStyle = OG.Util.apply(JSON.parse(JSON.stringify(_style)), multiData['style']);
            if (!top || !from || !to) {
                if (top != 0) {
                    continue;
                }
            }
            //노드 아이디는 도형아이디 + 멀티 선분의 인덱스이다.
            nodeId = groupElement.id + m;

            //top 만큼 평행한 라인을 구한다.
            var pathStr;
            var newVertices = [];
            if (top == 0) {
                newVertices = vertices;
            } else {
                newVertices = geometry.getParallelPath(vertices, top);
            }
            for (var l = 0, lenl = newVertices.length; l < lenl; l++) {
                if (l === 0) {
                    pathStr = "M" + newVertices[l].x + " " + newVertices[l].y;
                } else {
                    pathStr += "L" + newVertices[l].x + " " + newVertices[l].y;
                }
            }

            //getSubDistance
            var subPath = Raphael.getSubpath(pathStr, getSubDistance(pathStr, from), getSubDistance(pathStr, to));
            var path = me._PAPER.path(subPath);

            //마커 정보가 있을 경우는 arrow 스타일을 제거해주도록 한다.
            if (multiStyle['marker']) {
                delete multiStyle['arrow-end'];
                delete multiStyle['arrow-start'];
            }

            path.attr(multiStyle);
            me._add(path);
            groupElement.appendChild(path.node);

            if (multiStyle['marker']) {
                drawMarker(path, multiStyle, subPath, m);
            }
            if (multiStyle['pattern']) {
                drawPattern(path, multiStyle, subPath, m);
            }
            if (multiStyle['animation']) {
                drawAnimation(path, multiStyle);
            }
        }
    };

    var drawPattern = function (rElement, nodeStyle, nodePath, nodeIndex) {
        var patternShapeId = nodeStyle['pattern']['id'];
        var thickness = nodeStyle['pattern']['thickness'];
        var unitWidth = nodeStyle['pattern']['unit-width'];
        var unitHeight = nodeStyle['pattern']['unit-height'];
        var patternWidth = nodeStyle['pattern']['pattern-width'];
        var patternHeight = nodeStyle['pattern']['pattern-height'];
        var patternTransform = nodeStyle['pattern']['patternTransform'];
        var patternStyle = nodeStyle['pattern']['style'] ? nodeStyle['pattern']['style'] : {};

        patternWidth = patternWidth ? patternWidth : 20;
        patternHeight = patternHeight ? patternHeight : 20;
        unitWidth = unitWidth ? unitWidth : patternWidth;
        unitHeight = unitHeight ? unitHeight : patternHeight;
        thickness = thickness ? thickness : 20;

        //지정한 마커 shape 이 없다면 리턴한다.
        var patternShape;
        eval('patternShape = ' + patternShapeId);
        if (!patternShape) {
            return;
        }
        //Def 에 들어갈 마커 id 를 구한다.
        var split = patternShapeId.split('.');
        var patternId = groupElement.id + nodeIndex + split[split.length - 1];

        //기존 def 에 존재하는 마커 삭제
        var existMarkerDef = $(svg).find('#' + patternId);
        existMarkerDef.remove();

        patternShape = eval('new ' + patternShapeId + '()');
        var geometry = patternShape.createPattern();

        // 좌상단으로 이동 및 크기 조정
        geometry.moveCentroid([unitWidth / 2, unitHeight / 2]);
        geometry.resizeBox(unitWidth, unitHeight);

        //패턴 스타일링. geometry < nodeOverrideStyle < patternStyle
        var nodeOverrideStyle = {
            'stroke': nodeStyle['stroke']
        };
        OG.Util.apply(geometry.style.map, nodeOverrideStyle);
        OG.Util.apply(geometry.style.map, patternStyle);

        //노드 복사를 위한 가상의 그룹노드
        var tempNode = me.drawGeom(geometry, null, OG.Constants.PATTERN_TEMP_NODE);
        var cloneNode = $(tempNode).clone().wrapAll("<div/>");

        //가상의 그룹노드를 삭제한다.
        me._remove(me._getREleById(tempNode.id));

        cloneNode.removeAttr('_type');
        cloneNode.removeAttr('_shape');
        cloneNode.removeAttr('id');
        cloneNode.children().each(function () {
            $(this).removeAttr('_type');
            $(this).removeAttr('_shape');
            $(this).removeAttr('id');
            $(this).removeAttr('marker-end');
            $(this).removeAttr('marker-start');
            $(this).removeAttr('marker-mid');
        });

        var data = {
            id: patternId,
            x: 0,
            y: 0,
            width: patternWidth,
            height: patternHeight,
            patternUnits: 'userSpaceOnUse'
        };
        if (patternTransform) {
            data.patternTransform = patternTransform;
        }

        var el = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
        el.appendChild(cloneNode.get(0));
        for (var k in data) {
            el.setAttribute(k, data[k]);
        }

        $(svg).find('defs').get(0).appendChild(el);

        //edge 일 경우 thickness 두께 만큼 새로운 패스를 생성한다.
        if (isEdge) {
            if (!thickness || thickness == 0) {
                return;
            }
            //thickness +- 만큼 평행한 라인을 구한다.
            var pathStr;
            var topVertices = geometry.getParallelPath(vertices, thickness);
            var bottomVertices = geometry.getParallelPath(vertices, -thickness);

            //bottomVertices 의 순서를 리버스한다.
            bottomVertices = bottomVertices.reverse();

            //두 vertices 를 결합하여 Rectangle 형태의 polyline 을 생성한다.
            var newVertices = topVertices.concat(bottomVertices);

            for (var l = 0, lenl = newVertices.length; l < lenl; l++) {
                if (l === 0) {
                    pathStr = "M" + newVertices[l].x + " " + newVertices[l].y;
                } else {
                    pathStr += "L" + newVertices[l].x + " " + newVertices[l].y;
                }
            }
            var path = me._PAPER.path(pathStr);

            //새 패스에 적용할 스타일은 nodeStyle 의 fill-opacity 이다.
            //만일 없다면 1로 적용한다.
            var newPathStyle = {
                'fill-opacity': nodeStyle['fill-opacity'] ? nodeStyle['fill-opacity'] : 1,
                'stroke': 'none'
            };
            path.attr(newPathStyle);
            me._add(path);
            groupElement.appendChild(path.node);
            $(path.node).attr('fill', 'url(#' + patternId + ')');
        }
        //edge 가 아닐경우 fill 에 바로 마커를 입힌다.
        else {
            $(rElement.node).attr('fill', 'url(#' + patternId + ')');
        }
    };

    /**
     * Path 선분에 마커를 적용한다.
     * @param rElement 라파엘 엘리먼트
     * @param nodeStyle 패스 스타일
     * @param nodePath 패스 스트링
     * @param nodeIndex 그룹 엘리먼트(g) 내부의 엘리먼트 인덱스
     */
    var drawMarker = function (rElement, nodeStyle, nodePath, nodeIndex) {
        var makerData = {};
        for (var key in nodeStyle['marker']) {
            if (key != 'start' && key != 'end' && key != 'mid') {
                continue;
            }
            var markerShapeId = nodeStyle['marker'][key]['id'];
            var size = nodeStyle['marker'][key]['size'];
            var ref = nodeStyle['marker'][key]['ref'];
            var makerStyle = nodeStyle['marker'][key]['style'] ? nodeStyle['marker'][key]['style'] : {};

            //지정한 마커 shape 이 없다면 리턴한다.
            var makerShape;
            eval('makerShape = ' + markerShapeId);
            if (!makerShape) {
                continue;
            }
            //Def 에 들어갈 마커 id 를 구한다.
            var split = markerShapeId.split('.');
            var markerId = groupElement.id + nodeIndex + key + split[split.length - 1];

            //기존 def 에 존재하는 마커 삭제
            var existMarkerDef = $(svg).find('#' + markerId);
            existMarkerDef.remove();

            makerShape = eval('new ' + markerShapeId + '()');
            var geometry = makerShape.createMarker();

            // 좌상단으로 이동 및 크기 조정
            geometry.moveCentroid([size[0] / 2, size[1] / 2]);
            geometry.resizeBox(size[0], size[1]);

            //ref 값이 없을 시 값 보정
            if (!ref) {
                ref = [0, 0];
                if (key == 'start') {
                    ref[0] = size[0];
                    ref[1] = size[1] / 2;
                } else if (key == 'end') {
                    ref[0] = 0;
                    ref[1] = size[1] / 2;
                } else if (key == 'mid') {
                    ref[0] = size[0] / 2;
                    ref[1] = size[1] / 2;
                }
            }

            //마커 스타일링. geometry < nodeOverrideStyle < makerStyle
            var nodeOverrideStyle = {
                'stroke': nodeStyle['stroke'],
                'fill': nodeStyle['stroke']
            };
            OG.Util.apply(geometry.style.map, nodeOverrideStyle);
            OG.Util.apply(geometry.style.map, makerStyle);

            //노드 복사를 위한 가상의 그룹노드
            var tempNode = me.drawGeom(geometry, null, OG.Constants.MARKER_TEMP_NODE);
            var cloneNode = $(tempNode).clone().wrapAll("<div/>");

            //가상의 그룹노드를 삭제한다.
            me._remove(me._getREleById(tempNode.id));

            //시작 키일때는 g 태그를 180도 회전시킨다.
            if (key == 'start') {
                cloneNode.attr('transform', 'rotate(180,' + size[0] / 2 + ',' + size[1] / 2 + ')');
            }

            cloneNode.removeAttr('_type');
            cloneNode.removeAttr('_shape');
            cloneNode.removeAttr('id');
            cloneNode.children().each(function () {
                $(this).removeAttr('_type');
                $(this).removeAttr('_shape');
                $(this).removeAttr('id');
                $(this).removeAttr('marker-end');
                $(this).removeAttr('marker-start');
                $(this).removeAttr('marker-mid');
            });

            var data = {
                id: markerId,
                refX: ref[0],
                refY: ref[1],
                markerWidth: size[0],
                markerHeight: size[1],
                orient: 'auto'
            };
            var el = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
            el.appendChild(cloneNode.get(0));
            for (var k in data) {
                el.setAttribute(k, data[k]);
            }

            $(svg).find('defs').get(0).appendChild(el);
            makerData[key] = data;
        }

        //기존 노드는 투명처리한다.
        rElement.attr('stroke-opacity', '0');

        //기존 노드의 패스를 마커의 영역만큼 뺀 새로운 패스를 생성한다.
        var totalLenth = Raphael.getTotalLength(nodePath);
        var from, to;
        if (makerData['start'] && makerData['end']) {
            from = makerData['start']['markerWidth'] * 1.5;
            to = totalLenth - makerData['end']['markerWidth'] * 1.5;
        }
        else if (makerData['start'] && !makerData['end']) {
            from = makerData['start']['markerWidth'] * 1.5;
            to = totalLenth;
        }
        else if (!makerData['start'] && makerData['end']) {
            from = 0;
            to = totalLenth - makerData['end']['markerWidth'] * 1.5;
        } else {
            from = 0;
            to = totalLenth;
        }

        var subPath = Raphael.getSubpath(nodePath, from, to);
        var virtualNode = me._PAPER.path(subPath);
        virtualNode.attr(nodeStyle);

        //virtualNode 에 마커 스타일 적용
        for (var key in makerData) {
            $(virtualNode.node).attr('marker-' + key, 'url(#' + makerData[key].id + ')');
        }

        me._add(virtualNode);
        groupElement.appendChild(virtualNode.node);
    };

    var drawAnimation = function (rElement, nodeStyle) {
        var animationData = nodeStyle['animation'];
        var animationRepeat = nodeStyle['animation-repeat'];
        var maxDuration = 0;
        var monitorAnimationIndex;
        var delay, ms;
        for (var i = 0, leni = animationData.length; i < leni; i++) {
            ms = animationData[i].ms ? animationData[i].ms : 0;
            delay = animationData[i].delay ? animationData[i].delay : 0;
            if (maxDuration < ms + delay) {
                maxDuration = ms + delay;
                monitorAnimationIndex = i;
            }
        }

        var startAnimation = function () {
            for (var i = 0, leni = animationData.length; i < leni; i++) {
                var ani;
                if (i == monitorAnimationIndex && animationRepeat) {
                    ani = Raphael.animation(animationData[i].to, animationData[i].ms, startAnimation);
                    rElement.attr(animationData[i].start).animate(ani.delay(animationData[i].delay));
                } else {
                    ani = Raphael.animation(animationData[i].to, animationData[i].ms);
                    rElement.attr(animationData[i].start).animate(ani.delay(animationData[i].delay));
                }
            }
        };
        startAnimation();
    };

    geometry.style.map = _style;

    // 타입에 따라 드로잉
    switch (geometry.TYPE) {
        case OG.Constants.GEOM_TYPE.POINT:
            element = this._PAPER.circle(geometry.coordinate.x, geometry.coordinate.y, 0.5);
            element.attr(_style);

            //패턴정보가 있을 경우
            if (rootPattern) {
                drawPattern(element, _style, null, 0);
            }

            // connectGuideElement = this._PAPER.circle(geometry.coordinate.x, geometry.coordinate.y, 0.5);
            // setConnectGuideAttr(connectGuideElement);
            break;

        case OG.Constants.GEOM_TYPE.LINE:
        case OG.Constants.GEOM_TYPE.POLYLINE:
        case OG.Constants.GEOM_TYPE.POLYGON:
            pathStr = "";
            vertices = geometry.getVertices();
            for (var i = 0, leni = vertices.length; i < leni; i++) {
                if (i === 0) {
                    pathStr = "M" + vertices[i].x + " " + vertices[i].y;
                } else {
                    pathStr += "L" + vertices[i].x + " " + vertices[i].y;
                }
            }

            if (isEdge) {
                //연결선이면서 마커정보가 있거나 멀티라인인 경우는 arrow 스타일을 제거하도록 한다.
                if (rootMarker || multi) {
                    delete _style['arrow-end'];
                    delete _style['arrow-start'];
                }
                element = this._PAPER.path(pathStr);
                element.attr(_style);

                //멀티 라인 정보가 있을 경우
                if (multi) {
                    drawMulti(vertices);
                    element.attr('stroke-opacity', '0');
                }
                //멀티 라인 정보가 없고, 마커정보가 있을 경우
                else if (!multi && rootMarker) {
                    drawMarker(element, _style, pathStr, 0);
                }
                //멀티 라인 정보가 없고, 패턴정보가 있을 경우
                else if (!multi && rootPattern) {
                    drawPattern(element, _style, pathStr, 0);
                }
                //애니메이션 정보가 있을 경우
                else if (!multi && rootAnimation) {
                    drawAnimation(element, _style);
                }

                connectGuideElement = this._PAPER.path(pathStr);
                setConnectGuideAttr(connectGuideElement);

            } else {
                element = this._PAPER.path(pathStr);
                element.attr(_style);

                //패턴정보가 있을 경우
                if (rootPattern) {
                    drawPattern(element, _style, pathStr, 0);
                }

                //애니메이션 정보가 있을 경우
                if (rootAnimation) {
                    drawAnimation(element, _style);
                }
            }

            break;
        case OG.Constants.GEOM_TYPE.RECTANGLE:
            if ((_style.r || 0) === 0) {
                pathStr = "";
                vertices = geometry.getVertices();
                for (var i = 0, leni = vertices.length; i < leni; i++) {
                    if (i === 0) {
                        pathStr = "M" + vertices[i].x + " " + vertices[i].y;
                    } else {
                        pathStr += "L" + vertices[i].x + " " + vertices[i].y;
                    }
                }
            } else {
                pathStr = getRoundedPath(geometry, _style.r || 0);
            }

            element = this._PAPER.path(pathStr);
            element.attr(_style);

            //패턴정보가 있을 경우
            if (rootPattern) {
                drawPattern(element, _style, pathStr, 0);
            }
            //애니메이션 정보가 있을 경우
            if (rootAnimation) {
                drawAnimation(element, _style);
            }

            break;

        case OG.Constants.GEOM_TYPE.CIRCLE:
            geomObj = OG.JSON.decode(geometry.toString());
            if (geomObj.type === OG.Constants.GEOM_NAME[OG.Constants.GEOM_TYPE.CIRCLE]) {
                element = this._PAPER.circle(geomObj.center[0], geomObj.center[1], geomObj.radius);
                //connectGuideElement = this._PAPER.circle(geomObj.center[0], geomObj.center[1], geomObj.radius);
            } else if (geomObj.type === OG.Constants.GEOM_NAME[OG.Constants.GEOM_TYPE.ELLIPSE]) {
                if (geomObj.angle === 0) {
                    element = this._PAPER.ellipse(geomObj.center[0], geomObj.center[1], geomObj.radiusX, geomObj.radiusY);
                } else {
                    pathStr = "";
                    vertices = geometry.getControlPoints();
                    pathStr = "M" + vertices[1].x + " " + vertices[1].y + "A" + geomObj.radiusX + " " + geomObj.radiusY
                        + " " + geomObj.angle + " 1 0 " + vertices[5].x + " " + vertices[5].y;
                    pathStr += "M" + vertices[1].x + " " + vertices[1].y + "A" + geomObj.radiusX + " " + geomObj.radiusY
                        + " " + geomObj.angle + " 1 1 " + vertices[5].x + " " + vertices[5].y;
                    element = this._PAPER.path(pathStr);
                }
            }
            element.attr(_style);

            //패턴정보가 있을 경우
            if (rootPattern) {
                drawPattern(element, _style, pathStr, 0);
            }

            //애니메이션 정보가 있을 경우
            if (rootAnimation) {
                drawAnimation(element, _style);
            }

            break;

        case OG.Constants.GEOM_TYPE.ELLIPSE:
            geomObj = OG.JSON.decode(geometry.toString());
            if (geomObj.angle === 0) {
                element = this._PAPER.ellipse(geomObj.center[0], geomObj.center[1], geomObj.radiusX, geomObj.radiusY);
            } else {
                pathStr = "";
                vertices = geometry.getControlPoints();
                pathStr = "M" + vertices[1].x + " " + vertices[1].y + "A" + geomObj.radiusX + " " + geomObj.radiusY
                    + " " + geomObj.angle + " 1 0 " + vertices[5].x + " " + vertices[5].y;
                pathStr += "M" + vertices[1].x + " " + vertices[1].y + "A" + geomObj.radiusX + " " + geomObj.radiusY
                    + " " + geomObj.angle + " 1 1 " + vertices[5].x + " " + vertices[5].y;
                element = this._PAPER.path(pathStr);
            }
            element.attr(_style);
            //패턴정보가 있을 경우
            if (rootPattern) {
                drawPattern(element, _style, pathStr, 0);
            }

            //애니메이션 정보가 있을 경우
            if (rootAnimation) {
                drawAnimation(element, _style);
            }
            break;

        case OG.Constants.GEOM_TYPE.CURVE:
            pathStr = "";
            vertices = geometry.getControlPoints();
            for (var i = 0, leni = vertices.length; i < leni; i++) {
                if (i === 0) {
                    pathStr = "M" + vertices[i].x + " " + vertices[i].y;
                } else if (i === 1) {
                    pathStr += "R" + vertices[i].x + " " + vertices[i].y;
                } else {
                    pathStr += " " + vertices[i].x + " " + vertices[i].y;
                }
            }
            element = this._PAPER.path(pathStr);
            element.attr(_style);
            //패턴정보가 있을 경우
            if (rootPattern) {
                drawPattern(element, _style, pathStr, 0);
            }

            //애니메이션 정보가 있을 경우
            if (rootAnimation) {
                drawAnimation(element, _style);
            }

            if (isEdge) {
                connectGuideElement = this._PAPER.path(pathStr);
                setConnectGuideAttr(connectGuideElement);
            }
            break;

        case OG.Constants.GEOM_TYPE.BEZIER_CURVE:
            pathStr = "";
            vertices = geometry.getControlPoints();
            for (var i = 0, leni = vertices.length; i < leni; i++) {
                if (i === 0) {
                    pathStr = "M" + vertices[i].x + " " + vertices[i].y;
                } else if (i === 1) {
                    pathStr += "C" + vertices[i].x + " " + vertices[i].y;
                } else {
                    pathStr += " " + vertices[i].x + " " + vertices[i].y;
                }
            }
            element = this._PAPER.path(pathStr);
            element.attr(_style);

            //패턴정보가 있을 경우
            if (rootPattern) {
                drawPattern(element, _style, pathStr, 0);
            }

            //애니메이션 정보가 있을 경우
            if (rootAnimation) {
                drawAnimation(element, _style);
            }

            if (isEdge) {
                connectGuideElement = this._PAPER.path(pathStr);
                setConnectGuideAttr(connectGuideElement);
            }
            break;

        case OG.Constants.GEOM_TYPE.COLLECTION:
            for (var i = 0, leni = geometry.geometries.length; i < leni; i++) {
                // recursive call
                this._drawGeometry(groupElement, geometry.geometries[i], style, geometry.style.map);
            }
            break;
    }

    if (element) {
        this._add(element);

        groupElement.appendChild(element.node);
        $(element.node).attr('name', OG.Constants.ORIGINAL_NODE);
        if (connectGuideElement) {
            this._add(connectGuideElement);
            groupElement.appendChild(connectGuideElement.node);
            $('#' + connectGuideElement.node.id).attr('name', OG.Constants.CONNECT_GUIDE_EVENT_AREA.NAME);
        }

        return element.node;
    } else {
        return groupElement;
    }
};

/**
 * Shape 의 Label 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
 *
 * @param {Number[]} position 드로잉할 위치 좌표(중앙 기준)
 * @param {String} text 텍스트
 * @param {Number[]} size Text Width, Height, Angle
 * @param {OG.geometry.Style|Object} style 스타일
 * @param {String} id Element ID 지정
 * @param {Boolean} isEdge 라인여부(라인인 경우 라벨이 가려지지 않도록)
 * @return {Element} DOM Element
 * @private
 */
OG.renderer.RaphaelRenderer.prototype._drawLabel = function (position, text, size, style, id, isEdge) {
    var me = this, LABEL_PADDING = me._CONFIG.LABEL_PADDING,
        width = size ? size[0] - LABEL_PADDING * 2 : null,
        height = size ? size[1] - LABEL_PADDING * 2 : null,
        angle = size ? size[2] || 0 : 0,
        group, element, rect, _style = {}, text_anchor, geom,
        bBox, left, top, x, y;
    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {}, me._CONFIG.DEFAULT_STYLE.TEXT);

    // ID 지정된 경우 존재하면 하위 노드 제거
    if (id === 0 || id) {
        group = this._getREleById(id);
        if (group) {
            this._removeChild(group);
        } else {
            group = this._PAPER.group();
            this._add(group, id);
        }
    } else {
        group = this._PAPER.group();
        this._add(group, id);
    }

    // text-anchor 리셋
    text_anchor = _style["text-anchor"] || 'middle';
    _style["text-anchor"] = 'middle';

    //라벨 width 스타일 적용
    size[0] = style.map['label-width'] ? style.map['label-width'] : size[0];

    //라벨 최대,최소 적용
    if (me._CONFIG.LABEL_MIN_SIZE && size[0]) {
        if (size[0] < me._CONFIG.LABEL_MIN_SIZE) {
            size[0] = me._CONFIG.LABEL_MIN_SIZE;
        }
    }
    if (me._CONFIG.LABEL_MAX_SIZE && size[0]) {
        if (size[0] > me._CONFIG.LABEL_MAX_SIZE) {
            size[0] = me._CONFIG.LABEL_MAX_SIZE;
        }
    }

    //라벨 draw
    element = this._PAPER.text(position[0], position[1], text, size);
    element.attr(_style);

    // real size
    bBox = element.getBBox();

    // calculate width, height, left, top
    width = width ? (width > bBox.width ? width : bBox.width) : bBox.width;
    height = height ? (height > bBox.height ? height : bBox.height) : bBox.height;
    left = OG.Util.round(position[0] - width / 2);
    top = OG.Util.round(position[1] - height / 2);

    // Boundary Box
    geom = new OG.Rectangle([left, top], width, height);

    if (_style["label-direction"] === 'vertical') {
        // Text Horizontal Align
        switch (text_anchor) {
            case "start":
                y = geom.getBoundary().getLowerCenter().y;
                break;
            case "end":
                y = geom.getBoundary().getUpperCenter().y;
                break;
            case "middle":
                y = geom.getBoundary().getCentroid().y;
                break;
            default:
                y = geom.getBoundary().getCentroid().y;
                break;
        }

        // Text Vertical Align
        switch (_style["vertical-align"]) {
            case "top":
                x = OG.Util.round(geom.getBoundary().getLeftCenter().x + bBox.height / 2);
                break;
            case "bottom":
                x = OG.Util.round(geom.getBoundary().getRightCenter().x - bBox.height / 2);
                break;
            case "middle":
                x = geom.getBoundary().getCentroid().x;
                break;
            default:
                x = geom.getBoundary().getCentroid().x;
                break;
        }

        angle = -90;
    } else {
        // Text Horizontal Align
        switch (text_anchor) {
            case "start":
                x = geom.getBoundary().getLeftCenter().x;
                break;
            case "end":
                x = geom.getBoundary().getRightCenter().x;
                break;
            case "middle":
                x = geom.getBoundary().getCentroid().x;
                break;
            default:
                x = geom.getBoundary().getCentroid().x;
                break;
        }

        // Text Vertical Align
        switch (_style["vertical-align"]) {
            case "top":
                y = OG.Util.round(geom.getBoundary().getUpperCenter().y + bBox.height / 2);
                break;
            case "bottom":
                y = OG.Util.round(geom.getBoundary().getLowerCenter().y - bBox.height / 2);
                break;
            case "middle":
                y = geom.getBoundary().getCentroid().y;
                break;
            default:
                y = geom.getBoundary().getCentroid().y;
                break;
        }
    }

    // text align, font-color, font-size 적용
    element.attr({
        x: x,
        y: y,
        stroke: "none",
        fill: _style["font-color"] || me._CONFIG.DEFAULT_STYLE.LABEL["font-color"],
        "font-size": _style["font-size"] || me._CONFIG.DEFAULT_STYLE.LABEL["font-size"],
        "fill-opacity": 1
    });

    if (text != "") {
        $(element.node).css({
            "background-color": _style["fill"] || me._CONFIG.DEFAULT_STYLE.LABEL["fill"]
        });
    }

    $(element.node).css({
        "cursor": "move"
    });

    // angle 적용
    if (angle || _style["label-angle"]) {
        if (angle === 0) {
            angle = parseInt(_style["label-angle"], 10);
        }
        element.rotate(angle);
    }

    // text-anchor 적용
    element.attr({
        'text-anchor': text_anchor
    });

    // 라인인 경우 overwrap 용 rectangle
    if (isEdge && text) {
        // real size
        bBox = element.getBBox();

        rect = this._PAPER.rect(bBox.x - LABEL_PADDING / 2, bBox.y - LABEL_PADDING / 2,
            bBox.width + LABEL_PADDING, bBox.height + LABEL_PADDING);
        var rectFill = this._CANVAS_COLOR;
        if (rectFill == 'transparent') {
            rectFill = 'white';
        }
        rect.attr({stroke: "none", fill: rectFill, 'fill-opacity': 1});
        this._add(rect);
        group.node.appendChild(rect.node);
    }

    // Add to group
    this._add(element, id + "FO");
    group.node.appendChild(element.node);

    return group.node;
};

/**
 * Shape 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
 *
 * @example
 * renderer.drawShape([100, 100], new OG.CircleShape(), [50, 50], {stroke:'red'});
 *
 * @param {Number[]} position 드로잉할 위치 좌표(중앙 기준)
 * @param {OG.shape.IShape} shape Shape
 * @param {Number[]} size Shape Width, Height
 * @param {OG.geometry.Style|Object} style 스타일
 * @param {String} id Element ID 지정
 * @param {Boolean} preventEvent 이벤트 방지
 * @return {Element} Group DOM Element with geometry
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawShape = function (position, shape, size, style, id, preventEvent) {
    var width = size ? size[0] : 100,
        height = size ? size[1] : 100,
        groupNode, geometry, text, image, html, xml,
        me = this;

    if (shape instanceof OG.shape.GeomShape) {
        geometry = shape.createShape();

        // 좌상단으로 이동 및 크기 조정
        geometry.moveCentroid(position);
        geometry.resizeBox(width, height);

        groupNode = this.drawGeom(geometry, style, id);
        shape.geom = groupNode.geom;


    } else if (shape instanceof OG.shape.TextShape) {
        text = shape.createShape();

        groupNode = this.drawText(position, text, size, style, id);
        shape.text = groupNode.text;
        shape.angle = groupNode.angle;
        shape.geom = groupNode.geom;
    } else if (shape instanceof OG.shape.ImageShape) {
        image = shape.createShape();

        groupNode = this.drawImage(position, image, size, style, id);
        shape.image = groupNode.image;
        shape.angle = groupNode.angle;
        shape.geom = groupNode.geom;
    } else if (shape instanceof OG.shape.SvgShape) {
        xml = shape.createShape();

        groupNode = this.drawSvg(position, xml, size, style, id);
        shape.xml = groupNode.xml;
        shape.angle = groupNode.angle;
        shape.geom = groupNode.geom;
    } else if (shape instanceof OG.shape.HtmlShape) {
        html = shape.createShape();

        groupNode = this.drawHtml(position, html, size, style, id);
        shape.html = groupNode.html;
        shape.angle = groupNode.angle;
        shape.geom = groupNode.geom;
    } else if (shape instanceof OG.shape.EdgeShape) {
        geometry = shape.geom || shape.createShape();

        groupNode = this.drawEdge(geometry, style, id);
        shape.geom = groupNode.geom;
    } else if (shape instanceof OG.shape.GroupShape) {
        geometry = shape.createShape();

        // 좌상단으로 이동 및 크기 조정
        geometry.moveCentroid(position);
        geometry.resizeBox(width, height);

        groupNode = this.drawGroup(geometry, style, id);
        shape.geom = groupNode.geom;
    }

    if (shape.geom) {
        groupNode.shape = shape;
    }
    groupNode.shapeStyle = (style instanceof OG.geometry.Style) ? style.map : style;
    $(groupNode).attr("_shape_id", shape.SHAPE_ID);

    // 서브 shape 드로잉
    me._drawSubShape(groupNode);

    // Draw Label
    if (!(shape instanceof OG.shape.TextShape)) {
        this.drawLabel(groupNode);

        if (shape instanceof OG.shape.EdgeShape) {
            this.drawEdgeLabel(groupNode, null, 'FROM');
            this.drawEdgeLabel(groupNode, null, 'TO');
        }
    }
    if (groupNode.geom) {
        if (OG.Util.isIE7()) {
            groupNode.removeAttribute("geom");
        } else {
            delete groupNode.geom;
        }
    }
    if (groupNode.text) {
        if (OG.Util.isIE7()) {
            groupNode.removeAttribute("text");
        } else {
            delete groupNode.text;
        }
    }
    if (groupNode.image) {
        if (OG.Util.isIE7()) {
            groupNode.removeAttribute("image");
        } else {
            delete groupNode.image;
        }
    }
    if (groupNode.angle) {
        if (OG.Util.isIE7()) {
            groupNode.removeAttribute("angle");
        } else {
            delete groupNode.angle;
        }
    }

    //TODO 이 구간에서 성능저하가 있으므로 신규 shape 이며 그룹위에 떨어졌을 경우 바로 그룹처리 하는 로직을 잠시 보류.
    //신규 shape 이면 그룹위에 그려졌을 경우 그룹처리
    // var setGroup = function () {
    //     var frontGroup = me.getFrontForBoundary(me.getBoundary(groupNode));
    //
    //     if (!frontGroup) {
    //         return;
    //     }
    //     //draw 대상이 Edge 이면 리턴.
    //     if (me.isEdge(groupNode)) {
    //         return;
    //     }
    //     //draw 대상이 Lane 인 경우 리턴.
    //     if (me.isLane(groupNode)) {
    //         return;
    //     }
    //     //그룹이 Lane 인 경우 RootLane 으로 변경
    //     if (me.isLane(frontGroup)) {
    //         frontGroup = me.getRootLane(frontGroup);
    //     }
    //     if (!me._CONFIG.GROUP_DROPABLE || !frontGroup.shape.GROUP_DROPABLE) {
    //         return;
    //     }
    //
    //     //자신일 경우 반응하지 않는다.
    //     if (frontGroup.id === groupNode.id) {
    //         return;
    //     }
    //     frontGroup.appendChild(groupNode);
    // };
    // if (!id) {
    //     setGroup();
    // }

    //신규 Lane 또는 Pool 이 그려졌을 경우 처리
    // if (!id && (me.isLane(groupNode) || me.isPool(groupNode))) {
    //     me.putInnerShapeToPool(groupNode);
    // }

    //shape 에 현재 캔버스,엘리먼트 등록
    shape.currentElement = groupNode;
    shape.currentCanvas = this._CANVAS;

    // drawShape event fire
    if (!preventEvent) {
        shape.onDrawShape();
        $(this._PAPER.canvas).trigger('drawShape', [groupNode]);
    }

    return groupNode;
};

/**
 * Geometry 를 캔버스에 드로잉한다.
 *
 * @param {OG.geometry.Geometry} geometry 기하 객체
 * @param {OG.geometry.Style|Object} style 스타일
 * @return {Element} Group DOM Element with geometry
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawGeom = function (geometry, style, id) {
    var me = this, group, _style = {};

    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {});

    // ID 지정된 경우 존재하면 하위 노드 제거
    if (id === 0 || id) {
        group = this._getREleById(id);
        if (group) {
            this._removeChild(group);
        } else {
            group = this._PAPER.group();
            this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.GEOM);
            this._ROOT_GROUP.node.appendChild(group.node);
        }
    } else {
        group = this._PAPER.group();
        this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.GEOM);
        this._ROOT_GROUP.node.appendChild(group.node);
    }
    // Draw geometry
    this._drawGeometry(group.node, geometry, _style);
    group.node.geom = geometry;
    group.attr(me._CONFIG.DEFAULT_STYLE.SHAPE);

    if (group.node.shape) {
        group.node.shape.geom = geometry;

        if (group.node.geom) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("geom");
            } else {
                delete group.node.geom;
            }
        }
    }

    return group.node;
};

/**
 * Text 를 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
 *
 * @param {Number[]} position 드로잉할 위치 좌표(중앙 기준)
 * @param {String} text 텍스트
 * @param {Number[]} size Text Width, Height, Angle
 * @param {OG.geometry.Style|Object} style 스타일
 * @param {String} id Element ID 지정
 * @return {Element} DOM Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawText = function (position, text, size, style, id) {
    var me = this, width = size ? size[0] : null,
        height = size ? size[1] : null,
        angle = size ? size[2] || 0 : 0,
        group, element, _style = {}, geom,
        bBox, left, top, x, y;
    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {}, me._CONFIG.DEFAULT_STYLE.TEXT);

    // ID 지정된 경우 존재하면 하위 노드 제거
    if (id === 0 || id) {
        group = this._getREleById(id);
        if (group) {
            this._removeChild(group);
        } else {
            group = this._PAPER.group();
            this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.TEXT);
            this._ROOT_GROUP.node.appendChild(group.node);
        }
    } else {
        group = this._PAPER.group();
        this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.TEXT);
        this._ROOT_GROUP.node.appendChild(group.node);
    }

    // Draw text
    element = this._PAPER.text(position[0], position[1], text, size);
    element.attr(_style);

    // real size
    bBox = element.getBBox();

    // calculate width, height, left, top
    width = width ? (width > bBox.width ? width : bBox.width) : bBox.width;
    height = height ? (height > bBox.height ? height : bBox.height) : bBox.height;
    left = OG.Util.round(position[0] - width / 2);
    top = OG.Util.round(position[1] - height / 2);

    // Boundary Box
    geom = new OG.Rectangle([left, top], width, height);
    geom.style.map = _style;

    // Text Horizontal Align
    switch (_style["text-anchor"]) {
        case "start":
            x = geom.getBoundary().getLeftCenter().x;
            break;
        case "end":
            x = geom.getBoundary().getRightCenter().x;
            break;
        case "middle":
            x = geom.getBoundary().getCentroid().x;
            break;
        default:
            x = geom.getBoundary().getCentroid().x;
            break;
    }

    // Text Vertical Align
    switch (_style["vertical-align"]) {
        case "top":
            y = OG.Util.round(geom.getBoundary().getUpperCenter().y + bBox.height / 2);
            break;
        case "bottom":
            y = OG.Util.round(geom.getBoundary().getLowerCenter().y - bBox.height / 2);
            break;
        case "middle":
            y = geom.getBoundary().getCentroid().y;
            break;
        default:
            y = geom.getBoundary().getCentroid().y;
            break;
    }

    // text align 적용
    element.attr({x: x, y: y});

    // font-color, font-size 적용
    element.attr({
        stroke: "none",
        fill: _style["font-color"] || me._CONFIG.DEFAULT_STYLE.LABEL["font-color"],
        "font-size": _style["font-size"] || me._CONFIG.DEFAULT_STYLE.LABEL["font-size"]
    });

    // angle 적용
    if (angle) {
        element.rotate(angle);
    }

    // Add to group
    this._add(element);
    group.node.appendChild(element.node);
    group.node.text = text;
    group.node.angle = angle;
    group.node.geom = geom;
    group.attr(me._CONFIG.DEFAULT_STYLE.SHAPE);

    if (group.node.shape) {
        group.node.shape.text = text;
        group.node.shape.angle = angle;
        group.node.shape.geom = geom;

        if (group.node.text) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("text");
            } else {
                delete group.node.text;
            }
        }
        if (group.node.angle) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("angle");
            } else {
                delete group.node.angle;
            }
        }
        if (group.node.geom) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("geom");
            } else {
                delete group.node.geom;
            }
        }
    }

    return group.node;
};

/**
 * 임베드 HTML String 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
 *
 * @param {Number[]} position 드로잉할 위치 좌표(중앙 기준)
 * @param {String} html 임베드 HTML String
 * @param {Number[]} size Image Width, Height, Angle
 * @param {OG.geometry.Style|Object} style 스타일
 * @param {String} id Element ID 지정
 * @return {Element} DOM Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawHtml = function (position, html, size, style, id) {
    var me = this, width = size ? size[0] : null,
        height = size ? size[1] : null,
        angle = size ? size[2] || 0 : 0,
        group, element, _style = {}, bBox, geom, left, top;
    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {}, me._CONFIG.DEFAULT_STYLE.HTML);

    // ID 지정된 경우 존재하면 하위 노드 제거
    if (id === 0 || id) {
        group = this._getREleById(id);
        if (group) {
            this._removeChild(group);
        } else {
            group = this._PAPER.group();
            this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.HTML);
            this._ROOT_GROUP.node.appendChild(group.node);
        }
    } else {
        group = this._PAPER.group();
        this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.HTML);
        this._ROOT_GROUP.node.appendChild(group.node);
    }

    // Draw foreign object
    element = this._PAPER.foreignObject(html, position[0], position[1], width, height);
    element.attr(_style);

    // real size
    bBox = element.getBBox();

    // calculate width, height, left, top
    width = width || bBox.width;
    height = height || bBox.height;
    left = OG.Util.round(position[0] - width / 2);
    top = OG.Util.round(position[1] - height / 2);

    // text align 적용
    element.attr({x: left, y: top});

    geom = new OG.Rectangle([left, top], width, height);
    if (angle) {
        element.rotate(angle);
    }
    geom.style.map = _style;

    // Add to group
    this._add(element);
    group.node.appendChild(element.node);
    group.node.html = html;
    group.node.angle = angle;
    group.node.geom = geom;
    group.attr(me._CONFIG.DEFAULT_STYLE.SHAPE);

    if (group.node.shape) {
        group.node.shape.html = html;
        group.node.shape.angle = angle;
        group.node.shape.geom = geom;

        if (group.node.html) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("html");
            } else {
                delete group.node.html;
            }
        }
        if (group.node.angle) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("angle");
            } else {
                delete group.node.angle;
            }
        }
        if (group.node.geom) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("geom");
            } else {
                delete group.node.geom;
            }
        }
    }

    return group.node;
};

/**
 * Image 를 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
 *
 * @param {Number[]} position 드로잉할 위치 좌표(중앙 기준)
 * @param {String} imgSrc 이미지경로
 * @param {Number[]} size Image Width, Height, Angle
 * @param {OG.geometry.Style|Object} style 스타일
 * @param {String} id Element ID 지정
 * @return {Element} DOM Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawImage = function (position, imgSrc, size, style, id) {
    var me = this, width = size ? size[0] : null,
        height = size ? size[1] : null,
        angle = size ? size[2] || 0 : 0,
        group, element, _style = {}, bBox, geom, left, top;
    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {}, me._CONFIG.DEFAULT_STYLE.IMAGE);

    // ID 지정된 경우 존재하면 하위 노드 제거
    if (id === 0 || id) {
        group = this._getREleById(id);
        if (group) {
            this._removeChild(group);
        } else {
            group = this._PAPER.group();
            this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.IMAGE);
            this._ROOT_GROUP.node.appendChild(group.node);
        }
    } else {
        group = this._PAPER.group();
        this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.IMAGE);
        this._ROOT_GROUP.node.appendChild(group.node);
    }

    // Draw image
    element = this._PAPER.image(imgSrc, position[0], position[1], width, height);
    element.attr(_style);

    // real size
    bBox = element.getBBox();

    // calculate width, height, left, top
    width = width || bBox.width;
    height = height || bBox.height;
    left = OG.Util.round(position[0] - width / 2);
    top = OG.Util.round(position[1] - height / 2);

    // text align 적용
    element.attr({x: left, y: top});

    geom = new OG.Rectangle([left, top], width, height);
    if (angle) {
        element.rotate(angle);
    }
    geom.style.map = _style;

    // Add to group
    this._add(element);
    group.node.appendChild(element.node);
    group.node.image = imgSrc;
    group.node.angle = angle;
    group.node.geom = geom;
    group.attr(me._CONFIG.DEFAULT_STYLE.SHAPE);

    if (group.node.shape) {
        group.node.shape.image = imgSrc;
        group.node.shape.angle = angle;
        group.node.shape.geom = geom;

        if (group.node.image) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("image");
            } else {
                delete group.node.image;
            }
        }
        if (group.node.angle) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("angle");
            } else {
                delete group.node.angle;
            }
        }
        if (group.node.geom) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("geom");
            } else {
                delete group.node.geom;
            }
        }
    }

    return group.node;
};

/**
 * Svg 를 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
 *
 * @param {Number[]} position 드로잉할 위치 좌표(중앙 기준)
 * @param {String} xml 드로잉할 xml
 * @param {Number[]} size Image Width, Height, Angle
 * @param {OG.geometry.Style|Object} style 스타일
 * @param {String} id Element ID 지정
 * @return {Element} DOM Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawSvg = function (position, xml, size, style, id) {
    var me = this, width = size ? size[0] : null,
        height = size ? size[1] : null,
        angle = size ? size[2] || 0 : 0,
        group, element, _style = {}, bBox, geom, left, top;
    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {}, me._CONFIG.DEFAULT_STYLE.SVG);

    // ID 지정된 경우 존재하면 하위 노드 제거
    if (id === 0 || id) {
        group = this._getREleById(id);
        if (group) {
            this._removeChild(group);
        } else {
            group = this._PAPER.group();
            this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.SVG);
            this._ROOT_GROUP.node.appendChild(group.node);
        }
    } else {
        group = this._PAPER.group();
        this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.SVG);
        this._ROOT_GROUP.node.appendChild(group.node);
    }

    // Draw xml
    element = $(xml); //this._PAPER.image(imgSrc, position[0], position[1], width, height);
    for (var key in _style) {
        element.attr(key, _style[key]);
    }

    left = OG.Util.round(position[0] - width / 2);
    top = OG.Util.round(position[1] - height / 2);

    // text align 적용
    element.attr('x', left + 'px');
    element.attr('y', top + 'px');
    element.attr('width', width + 'px');
    element.attr('height', height + 'px');

    geom = new OG.Rectangle([left, top], width, height);
    if (angle) {
        element.rotate(angle);
    }
    geom.style.map = _style;

    $(group.node).append(element);
    group.node.xml = xml;
    group.node.angle = angle;
    group.node.geom = geom;
    group.attr(me._CONFIG.DEFAULT_STYLE.SHAPE);

    if (group.node.shape) {
        group.node.shape.xml = xml;
        group.node.shape.angle = angle;
        group.node.shape.geom = geom;

        if (group.node.image) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("image");
            } else {
                delete group.node.image;
            }
        }
        if (group.node.angle) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("angle");
            } else {
                delete group.node.angle;
            }
        }
        if (group.node.geom) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("geom");
            } else {
                delete group.node.geom;
            }
        }
    }

    return group.node;
};

/**
 * 사용자가 지정한 변곡점을 반환
 * - 조건:
 *   오직 4개의 점을 가지고있는 다각선에서
 *   변곡점이 자동으로 그려진 점의 위치가 아닐 때
 *
 * - issue: 사용자가 지정한 변곡점(?)은 유지되어야 함
 **/
OG.renderer.RaphaelRenderer.prototype._getPointOfInflectionFromEdge = function (line) {
    var offset = null, _startV, _endV, _centerV, _vertices, _ax, _ay;
    if (line instanceof OG.geometry.PolyLine) {
        _vertices = line.getVertices();
        //한개의 변곡점 일 때 처리하도록 함
        if (_vertices.length != 4) {
            return offset;
        }

        _startV = _vertices[0];
        _endV = _vertices[_vertices.length - 1];
        _centerV = _vertices[1];

        offset = {
            "x": _centerV["x"] - _startV["x"]
            , "y": _centerV["y"] - _startV["y"]
        };

        _ax = OG.Util.round((_endV["x"] - _startV["x"]) / 2);
        _ay = OG.Util.round((_endV["y"] - _startV["y"]) / 2);

        offset["x"] = (offset["x"] == _ax) ? 0 : offset["x"];
        offset["y"] = (offset["y"] == _ay) ? 0 : offset["y"];
    }

    return offset;
};

/**
 * 라인을 캔버스에 드로잉한다.
 * OG.geometry.Line 타입인 경우 EdgeType 에 따라 Path 를 자동으로 계산하며,
 * OG.geometry.PolyLine 인 경우는 주어진 Path 그대로 drawing 한다.
 *
 * @param {OG.geometry.Line|OG.geometry.PolyLine} line 또는 polyLine
 * @param {OG.geometry.Style|Object} style 스타일
 * @param {String} id Element ID 지정
 * @param {Boolean} isSelf 셀프 연결 여부
 * @return {Element} Group DOM Element with geometry
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawEdge = function (line, style, id, isSelf, pointOfInflection) {
    var me = this, group, _style = {},
        vertices = line.getVertices(),
        from = vertices[0], to = vertices[vertices.length - 1],
        points = [], edge, edge_direction;

    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {},
        OG.Util.apply({}, line.style.map, me._CONFIG.DEFAULT_STYLE.EDGE));

    // ID 지정된 경우 존재하면 하위 노드 제거
    if (id === 0 || id) {
        group = this._getREleById(id);
        if (group) {
            this._removeEdgeChild(group);
        } else {
            group = this._PAPER.group();
            this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.EDGE);
            this._ROOT_GROUP.node.appendChild(group.node);
        }
    } else {
        group = this._PAPER.group();
        this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.EDGE);
        this._ROOT_GROUP.node.appendChild(group.node);
    }

    if (isSelf) {
        points = [
            [from.x, from.y - me._CONFIG.GUIDE_RECT_SIZE / 2],
            [from.x + me._CONFIG.GUIDE_RECT_SIZE * 2, from.y - me._CONFIG.GUIDE_RECT_SIZE],
            [from.x + me._CONFIG.GUIDE_RECT_SIZE * 2, from.y + me._CONFIG.GUIDE_RECT_SIZE],
            [from.x, from.y + me._CONFIG.GUIDE_RECT_SIZE / 2]
        ];
    } else if (line instanceof OG.geometry.Line) {
        // edgeType
        switch (_style["edge-type"].toLowerCase()) {
            case OG.Constants.EDGE_TYPE.STRAIGHT:
                points = [from, to];
                break;
            case OG.Constants.EDGE_TYPE.PLAIN:
                edge_direction = this._adjustEdgeDirection([from.x, from.y], [to.x, to.y]);
                points = [from, to];
                break;
            case OG.Constants.EDGE_TYPE.BEZIER:

                edge_direction = this._adjustEdgeDirection([from.x, from.y], [to.x, to.y]);
                points = this._bezierCurve([from.x, from.y], [to.x, to.y], edge_direction[0], edge_direction[1]);
                break;
        }
    } else if (line instanceof OG.geometry.Curve) {
        points = line.getControlPoints();
    } else if (line instanceof OG.geometry.BezierCurve) {
        points = line.getControlPoints();
    } else {
        points = vertices;
    }

    // Draw geometry
    if (isSelf) {
        edge = new OG.Curve(points);
    } else if (line instanceof OG.geometry.Curve) {
        edge = new OG.Curve(points);
    } else if (line instanceof OG.geometry.BezierCurve) {
        edge = new OG.BezierCurve(points);
    } else {
        if (_style["edge-type"].toLowerCase() === OG.Constants.EDGE_TYPE.BEZIER) {
            edge = new OG.BezierCurve(points);
        } else {
            edge = new OG.PolyLine(points);
        }
    }

    // draw Edge
    this._drawGeometry(group.node, edge, _style, null, true);

    group.node.geom = edge;
    group.attr(me._CONFIG.DEFAULT_STYLE.SHAPE);

    if (group.node.shape) {
        group.node.shape.geom = edge;

        if (group.node.geom) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("geom");
            } else {
                delete group.node.geom;
            }
        }
    }

    return group.node;
};

OG.renderer.RaphaelRenderer.prototype.drawGroup = function (geometry, style, id) {
    var me = this, group, geomElement, _style = {}, childNodes, i, boundary, titleLine, group_hidden, _tempStyle = {}, geom_shadow;

    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {});

    // ID 지정된 경우 존재하면 하위 노드 제거, 하위에 Shape 은 삭제하지 않도록
    if (id === 0 || id) {
        group = this._getREleById(id);
        if (group) {
            childNodes = group.node.childNodes;
            for (i = childNodes.length - 1; i >= 0; i--) {
                if ($(childNodes[i]).attr("_type") !== OG.Constants.NODE_TYPE.SHAPE) {
                    this._remove(this._getREleById(childNodes[i].id));
                }
            }
        } else {
            group = this._PAPER.group();
            this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.GROUP);
            this._ROOT_GROUP.node.appendChild(group.node);
        }
    } else {
        group = this._PAPER.group();
        this._add(group, id, OG.Constants.NODE_TYPE.SHAPE, OG.Constants.SHAPE_TYPE.GROUP);
        this._ROOT_GROUP.node.appendChild(group.node);
    }

    // Draw geometry
    geomElement = this._drawGeometry(group.node, geometry, _style);
    group.node.geom = geometry;
    group.attr(me._CONFIG.DEFAULT_STYLE.SHAPE);

    // // Draw Hidden Shadow
    boundary = geometry.getBoundary();
    group_hidden = new OG.geometry.Rectangle(boundary.getUpperLeft()
        , (boundary.getUpperRight().x - boundary.getUpperLeft().x)
        , (boundary.getLowerLeft().y - boundary.getUpperLeft().y));

    // 타이틀 라인 Drawing
    OG.Util.apply(_tempStyle, geometry.style.map, _style);
    if (_tempStyle['label-direction'] && _tempStyle['vertical-align'] === 'top') {
        if (_tempStyle['label-direction'] === 'vertical') {
            if (_tempStyle['title-size']) {
                titleLine = new OG.geometry.Line(
                    [boundary.getUpperLeft().x + _tempStyle['title-size'], boundary.getUpperLeft().y],
                    [boundary.getLowerLeft().x + _tempStyle['title-size'], boundary.getLowerLeft().y]
                );
                group_hidden = new OG.geometry.Rectangle(boundary.getUpperLeft(), _tempStyle['title-size'], (boundary.getLowerLeft().y - boundary.getUpperLeft().y));
            } else {
                titleLine = new OG.geometry.Line(
                    [boundary.getUpperLeft().x + 20, boundary.getUpperLeft().y],
                    [boundary.getLowerLeft().x + 20, boundary.getLowerLeft().y]
                );
                group_hidden = new OG.geometry.Rectangle(boundary.getUpperLeft(), 20, (boundary.getLowerLeft().y - boundary.getUpperLeft().y));
            }
        } else {
            if (_tempStyle['title-size']) {
                titleLine = new OG.geometry.Line(
                    [boundary.getUpperLeft().x, boundary.getUpperLeft().y + _tempStyle['title-size']],
                    [boundary.getUpperRight().x, boundary.getUpperRight().y + _tempStyle['title-size']]
                );
                group_hidden = new OG.geometry.Rectangle(boundary.getUpperLeft(), (boundary.getUpperRight().x - boundary.getUpperLeft().x), _tempStyle['title-size']);
            } else {
                titleLine = new OG.geometry.Line(
                    [boundary.getUpperLeft().x, boundary.getUpperLeft().y + 20],
                    [boundary.getUpperRight().x, boundary.getUpperRight().y + 20]
                );
                group_hidden = new OG.geometry.Rectangle(boundary.getUpperLeft(), (boundary.getUpperRight().x - boundary.getUpperLeft().x), 20);
            }
        }
        this._drawGeometry(group.node, titleLine, _style);

        //label-fill 어트리뷰트 적용
        var groupHiddenStyle = JSON.parse(JSON.stringify(me._CONFIG.DEFAULT_STYLE.GROUP_HIDDEN));
        if (_tempStyle['label-fill']) {
            groupHiddenStyle['fill'] = _tempStyle['label-fill'];
        }
        if (_tempStyle['label-fill-opacity']) {
            groupHiddenStyle['fill-opacity'] = _tempStyle['label-fill-opacity'];
        }
        this._drawGeometry(group.node, group_hidden, groupHiddenStyle);
    }

    // 위치조정
    if (geomElement.id !== group.node.firstChild.id) {
        group.node.insertBefore(geomElement, group.node.firstChild);
    }

    if (group.node.shape) {
        if (!group.node.shape.isCollapsed || group.node.shape.isCollapsed === false) {
            group.node.shape.geom = geometry;
        }

        if (group.node.geom) {
            if (OG.Util.isIE7()) {
                group.node.removeAttribute("geom");
            } else {
                delete group.node.geom;
            }
        }
    }
    return group.node;
};

/**
 * Shape 의 Label 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
 *
 * @param {Element|String} shapeElement Shape DOM element or ID
 * @param {String} text 텍스트
 * @param {OG.geometry.Style|Object} style 스타일
 * @return {Element} DOM Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawLabel = function (shapeElement, text, style) {
    var rElement = this._getREleById(OG.Util.isElement(shapeElement) ? shapeElement.id : shapeElement),
        element, labelElement, envelope, _style = {}, size, beforeText, beforeEvent, position,
        /**
         * 라인(꺽은선)의 중심위치를 반환한다.
         *
         * @param {Element} element Edge 엘리먼트
         * @return {OG.Coordinate}
         */
        getCenterOfEdge = function (element) {
            var vertices, from, to, lineLength, distance = 0, i, intersectArray;

            if (element.shape.geom.style.get("edge-type") === OG.Constants.EDGE_TYPE.BEZIER) {
                vertices = element.shape.geom.getControlPoints();
                from = vertices[0];
                to = vertices[vertices.length - 1];
                return new OG.geometry.Coordinate(OG.Util.round((from.x + to.x) / 2), OG.Util.round((from.y + to.y) / 2));
            } else {
                // Edge Shape 인 경우 라인의 중간 지점 찾기
                vertices = element.shape.geom.getVertices();
                lineLength = element.shape.geom.getLength();

                for (var i = 0, leni = vertices.length - 1; i < leni; i++) {
                    distance += vertices[i].distance(vertices[i + 1]);
                    if (distance > lineLength / 2) {
                        intersectArray = element.shape.geom.intersectCircleToLine(
                            vertices[i + 1], distance - lineLength / 2, vertices[i + 1], vertices[i]
                        );
                        break;
                    }
                }
                return intersectArray[0];
            }
        };

    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {});

    if (rElement && rElement.node.shape) {
        text = OG.Util.trim(text);
        element = rElement.node;
        envelope = element.shape.geom.getBoundary();
        beforeText = element.shape.label;

        // beforeLabelChange event fire
        if (text !== undefined && text !== beforeText) {
            var onBeforeLabelChange = element.shape.onBeforeLabelChange(text, beforeText);
            if (typeof onBeforeLabelChange == 'boolean' && !onBeforeLabelChange) {
                return false;
            }
            beforeEvent = jQuery.Event("beforeLabelChange", {
                element: element,
                afterText: text,
                beforeText: beforeText
            });

            $(this._PAPER.canvas).trigger(beforeEvent);
            if (beforeEvent.isPropagationStopped()) {
                return false;
            }
            text = beforeEvent.afterText;
        }

        OG.Util.apply(element.shape.geom.style.map, _style);
        element.shape.label = text === undefined ? element.shape.label : text;

        if (element.shape.label !== undefined) {

            // label-position 에 따라 위치 조정
            switch (element.shape.geom.style.get("label-position")) {
                case "left":
                    position = [envelope.getCentroid().x - envelope.getWidth(), envelope.getCentroid().y];
                    break;
                case "right":
                    position = [envelope.getCentroid().x + envelope.getWidth(), envelope.getCentroid().y];
                    break;
                case "top":
                    position = [envelope.getCentroid().x, envelope.getCentroid().y - envelope.getHeight()];
                    break;
                case "bottom":
                    position = [envelope.getCentroid().x, envelope.getCentroid().y + envelope.getHeight()];
                    break;
                default:
                    position = [envelope.getCentroid().x, envelope.getCentroid().y];
                    break;
            }
            size = [envelope.getWidth(), envelope.getHeight()];

            if (element.shape instanceof OG.shape.EdgeShape) {
                var centerOfEdge = getCenterOfEdge(element);
                position = [centerOfEdge.x, centerOfEdge.y];
            }

            labelElement = this._drawLabel(
                position,
                element.shape.label,
                size,
                element.shape.geom.style,
                element.id + OG.Constants.LABEL_SUFFIX,
                element.shape instanceof OG.shape.EdgeShape
            );
            element.appendChild(labelElement);

            // drawLabel event fire
            if (text !== undefined) {
                element.shape.onDrawLabel(text);
                $(this._PAPER.canvas).trigger('drawLabel', [element, text]);

            }

            if (text !== undefined && beforeText !== undefined && text !== beforeText) {
                // labelChanged event fire
                element.shape.onLabelChanged(text, beforeText);
                $(this._PAPER.canvas).trigger('labelChanged', [element, text, beforeText]);
            }
        }
    }

    return labelElement;
};

/**
 * Edge 의 from, to Label 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
 *
 * @param {Element|String} shapeElement Shape DOM element or ID
 * @param {String} text 텍스트
 * @param {String} type 유형(FROM or TO)
 * @return {Element} DOM Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawEdgeLabel = function (shapeElement, text, type) {
    var me = this, rElement = this._getREleById(OG.Util.isElement(shapeElement) ? shapeElement.id : shapeElement),
        element, vertices, labelElement, position, edgeLabel, suffix;

    if (rElement && rElement.node.shape) {
        text = OG.Util.trim(text);
        element = rElement.node;

        if (element.shape instanceof OG.shape.EdgeShape) {
            vertices = element.shape.geom.getVertices();
            if (type === 'FROM') {
                position = [vertices[0].x, vertices[0].y + me._CONFIG.FROMTO_LABEL_OFFSET_TOP];
                element.shape.fromLabel = text || element.shape.fromLabel;
                edgeLabel = element.shape.fromLabel;
                suffix = OG.Constants.FROM_LABEL_SUFFIX;
            } else {
                position = [vertices[vertices.length - 1].x, vertices[vertices.length - 1].y + me._CONFIG.FROMTO_LABEL_OFFSET_TOP];
                element.shape.toLabel = text || element.shape.toLabel;
                edgeLabel = element.shape.toLabel;
                suffix = OG.Constants.TO_LABEL_SUFFIX;
            }

            if (edgeLabel) {
                labelElement = this._drawLabel(
                    position,
                    edgeLabel,
                    [0, 0],
                    element.shape.geom.style,
                    element.id + suffix,
                    false
                );
                element.appendChild(labelElement);
            }
        }
    }

    return labelElement;
};

/**
 * Element 에 저장된 geom, angle, image, text 정보로 shape 을 redraw 한다.
 *
 * @param {Element} element Shape 엘리먼트
 * @param {String[]} excludeEdgeId redraw 제외할 Edge ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.redrawShape = function (element, excludeEdgeId, inclusion) {
    var me = this, envelope, center, width, height, upperLeft;

    var redrawChildConnectedEdge = function (_collapseRootElement, _element) {
        var edgeIdArray, fromEdge, toEdge, _childNodes = _element.childNodes, otherShape, i, j, isNeedToRedraw;
        for (i = _childNodes.length - 1; i >= 0; i--) {

            if (!me.isShape(_element)) {
                return;
            }
            redrawChildConnectedEdge(_collapseRootElement, _childNodes[i]);

            isNeedToRedraw = false;
            edgeIdArray = $(_childNodes[i]).attr("_fromedge");
            if (edgeIdArray) {
                edgeIdArray = edgeIdArray.split(",");
                for (var j = 0, lenj = edgeIdArray.length; j < lenj; j++) {
                    fromEdge = me.getElementById(edgeIdArray[j]);
                    if (fromEdge) {
                        otherShape = me._getShapeFromTerminal($(fromEdge).attr("_from"));

                        // otherShape 이 같은 collapse 범위내에 있는지 체크
                        if ($(otherShape).parents("#" + _collapseRootElement.id).length === 0) {
                            isNeedToRedraw = true;
                        }
                    }
                }
            }

            edgeIdArray = $(_childNodes[i]).attr("_toedge");
            if (edgeIdArray) {
                edgeIdArray = edgeIdArray.split(",");
                for (var j = 0, lenj = edgeIdArray.length; j < lenj; j++) {
                    toEdge = me.getElementById(edgeIdArray[j]);
                    if (toEdge) {
                        otherShape = me._getShapeFromTerminal($(toEdge).attr("_to"));

                        // otherShape 이 같은 collapse 범위내에 있는지 체크
                        if ($(otherShape).parents("#" + _collapseRootElement.id).length === 0) {
                            isNeedToRedraw = true;
                        }
                    }
                }
            }

            // group 영역 밖의 연결된 otherShape 이 있는 경우 redrawConnectedEdge
            if (isNeedToRedraw === true) {
                me.redrawConnectedEdge(_childNodes[i], excludeEdgeId);
            }
        }
    };

    if (element && element.shape.geom) {
        if (element.shape.redrawShape) {
            element.shape.redrawShape();
        }

        switch ($(element).attr("_shape")) {
            case OG.Constants.SHAPE_TYPE.GEOM:
                element = this.drawGeom(element.shape.geom, {}, element.id);
                this.redrawConnectedEdge(element, excludeEdgeId);
                this.drawLabel(element);
                break;
            case OG.Constants.SHAPE_TYPE.TEXT:
                envelope = element.shape.geom.getBoundary();
                center = envelope.getCentroid();
                width = envelope.getWidth();
                height = envelope.getHeight();
                element = this.drawText([center.x, center.y], element.shape.text,
                    [width, height, element.shape.angle], element.shape.geom.style, element.id);
                this.redrawConnectedEdge(element, excludeEdgeId);
                break;
            case OG.Constants.SHAPE_TYPE.SVG:
                envelope = element.shape.geom.getBoundary();
                center = envelope.getCentroid();
                width = envelope.getWidth();
                height = envelope.getHeight();
                element = this.drawSvg([center.x, center.y], element.shape.xml,
                    [width, height, element.shape.angle], element.shape.geom.style, element.id);
                this.redrawConnectedEdge(element, excludeEdgeId);
                this.drawLabel(element);
                break;
            case OG.Constants.SHAPE_TYPE.IMAGE:
                envelope = element.shape.geom.getBoundary();
                center = envelope.getCentroid();
                width = envelope.getWidth();
                height = envelope.getHeight();
                element = this.drawImage([center.x, center.y], element.shape.image,
                    [width, height, element.shape.angle], element.shape.geom.style, element.id);
                this.redrawConnectedEdge(element, excludeEdgeId);
                this.drawLabel(element);
                break;
            case OG.Constants.SHAPE_TYPE.HTML:
                envelope = element.shape.geom.getBoundary();
                center = envelope.getCentroid();
                width = envelope.getWidth();
                height = envelope.getHeight();
                element = this.drawHtml([center.x, center.y], element.shape.html,
                    [width, height, element.shape.angle], element.shape.geom.style, element.id);
                this.redrawConnectedEdge(element, excludeEdgeId);
                this.drawLabel(element);
                break;
            case OG.Constants.SHAPE_TYPE.EDGE:
                element = this.drawEdge(element.shape.geom, element.shape.geom.style, element.id);
                this.drawLabel(element);
                this.drawEdgeLabel(element, null, 'FROM');
                this.drawEdgeLabel(element, null, 'TO');
                break;
            case OG.Constants.SHAPE_TYPE.GROUP:
                if (element.shape.isCollapsed === true) {
                    envelope = element.shape.geom.getBoundary();
                    upperLeft = envelope.getUpperLeft();
                    element = this.drawGroup(new OG.geometry.Rectangle(
                        upperLeft, me._CONFIG.COLLAPSE_SIZE * 3, me._CONFIG.COLLAPSE_SIZE * 2),
                        element.shape.geom.style, element.id);
                    redrawChildConnectedEdge(element, element);
                    this.redrawConnectedEdge(element, excludeEdgeId);
                } else {
                    element = this.drawGroup(element.shape.geom, element.shape.geom.style, element.id);
                    this.redrawConnectedEdge(element, excludeEdgeId);
                    this.drawLabel(element);
                }
                break;
        }

        //서브 도형 그리기
        me._drawSubShape(element);

        //shape 에 현재 캔버스,엘리먼트 등록
        element.shape.currentElement = element;
        element.shape.currentCanvas = this._CANVAS;
    }

    // redrawShape event fire
    element.shape.onRedrawShape();
    $(this._PAPER.canvas).trigger('redrawShape', [element]);

    return element;
};

/**
 * Shape 의 연결된 Edge 를 redraw 한다.(이동 또는 리사이즈시)
 *
 * @param {Element} element
 * @param {String[]} excludeEdgeId redraw 제외할 Edge ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.redrawConnectedEdge = function (element, excludeEdgeId) {
    var me = this, edgeId,
        rightAngleCalibration = function (edgeId) {
            //리드로우 하기 전에 shape과의 연결점과 연결점 이전의 라인이 수평 또는 수직인지 살피고
            //만약 그렇다면 수평 또는 수직의 형태를 그대로 보전하는 작업을 한다.
            var rEdge = me._getREleById(edgeId);
            var vertices, from, to, edge, geometry, fromXY, toXY;

            if (!rEdge) {
                return edgeId;
            }

            edge = rEdge.node;
            geometry = rEdge.node.shape.geom;

            if (!geometry) {
                return edgeId;
            }

            vertices = geometry.getVertices();
            from = $(edge).attr("_from");
            to = $(edge).attr("_to");

            //두 점만으로 이루어진 엣지일 경우는 해당하지 않는다.
            if (vertices.length <= 2) {
                return edgeId;
            }

            if (from) {
                fromXY = me._getPositionFromTerminal(from);
            }

            if (to) {
                toXY = me._getPositionFromTerminal(to);
            }

            if (from) {
                if (vertices[0].x === vertices[1].x) {
                    vertices[1].x = fromXY.x;
                }
                if (vertices[0].y === vertices[1].y) {
                    vertices[1].y = fromXY.y;
                }
            }

            if (to) {
                if (vertices[vertices.length - 1].x === vertices[vertices.length - 2].x) {
                    vertices[vertices.length - 2].x = toXY.x;
                }
                if (vertices[vertices.length - 1].y === vertices[vertices.length - 2].y) {
                    vertices[vertices.length - 2].y = toXY.y;
                }
            }
            edge.shape.geom.setVertices(vertices);
            return edge;
        };

    var edgeToReconnect;
    edgeId = $(element).attr("_fromedge");
    if (edgeId) {
        $.each(edgeId.split(","), function (idx, item) {
            if (!excludeEdgeId || excludeEdgeId.toString().indexOf(item) < 0) {
                edgeToReconnect = rightAngleCalibration(item);
                me.connect($(edgeToReconnect).attr('_from'), $(edgeToReconnect).attr('_to'), edgeToReconnect, null, null, true);
            }
        });
    }

    edgeId = $(element).attr("_toedge");
    if (edgeId) {
        $.each(edgeId.split(","), function (idx, item) {
            if (!excludeEdgeId || excludeEdgeId.toString().indexOf(item) < 0) {
                edgeToReconnect = rightAngleCalibration(item);
                me.connect($(edgeToReconnect).attr('_from'), $(edgeToReconnect).attr('_to'), edgeToReconnect, null, null, true);
            }
        });
    }
};


/**
 * 연결된 터미널의 vertices 를 초기화하여 재연결한다.
 *
 * @param {Element} edge Edge Shape
 * @return {Element} 연결된 Edge 엘리먼트
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.reconnect = function (edge) {

    var rEdge = this._getREleById(OG.Util.isElement(edge) ? edge.id : edge);
    if (rEdge) {
        edge = rEdge.node;
    } else {
        return null;
    }

    var from, to;
    var me = this, fromShape, toShape, fromXY, toXY,
        isSelf;

    from = $(edge).attr("_from");
    to = $(edge).attr("_to");
    if (from) {
        fromShape = this._getShapeFromTerminal(from);
    }
    if (to) {
        toShape = this._getShapeFromTerminal(to);
    }
    if (!fromShape || !toShape) {
        return edge;
    }

    // 연결 포지션 초기화
    from = this.createDefaultTerminalString(fromShape);
    to = this.createDefaultTerminalString(toShape);

    fromXY = this._getPositionFromTerminal(from);
    toXY = this._getPositionFromTerminal(to);

    // 연결 노드 정보 설정
    $(edge).attr("_from", from);
    $(edge).attr("_to", to);


    var geometry = edge.shape.geom;
    var vertices = geometry.getVertices();
    var newVertieces = [vertices[0], vertices[vertices.length - 1]];

    newVertieces[0].x = fromXY.x;
    newVertieces[0].y = fromXY.y;

    newVertieces[1].x = toXY.x;
    newVertieces[1].y = toXY.y;


    // 라인 드로잉
    edge = this.drawEdge(new OG.PolyLine(newVertieces), edge.shape.geom.style, edge ? edge.id : null);

    me.trimConnectInnerVertice(edge);
    me.trimConnectIntersection(edge);
    me.trimEdge(edge);
    me.checkBridgeEdge(edge);

    return edge;
};

/**
 * 두개의 터미널을 연결하고, 속성정보에 추가한다.
 * @param {Element|Number[]} fromTerminal 시작점 (fromTerminal)
 * @param {Element|Number[]} toTerminal 끝점 (toTerminal)
 * @param {Element} edge Edge Shape
 * @param {OG.geometry.Style|Object} style 스타일
 * @param {String} label Label
 * @param {Boolean} preventTrigger 이벤트 트리거 발생 막기
 * @returns {Element} 연결된 Edge 엘리먼트
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.connect = function (fromTerminal, toTerminal, edge, style, label, preventTrigger) {
    var isEssensia;
    var rEdge = this._getREleById(OG.Util.isElement(edge) ? edge.id : edge);
    if (rEdge) {
        edge = rEdge.node;
    } else {
        return null;
    }

    //if label null, convert undefined
    label = label ? label : undefined;

    var me = this, _style = {}, fromShape, toShape, fromXY, toXY,
        isSelf, beforeEvent,
        addAttrValues = function (element, name, value) {
            var attrValue = $(element).attr(name),
                array = attrValue ? attrValue.split(",") : [],
                newArray = [];
            $.each(array, function (idx, item) {
                if (item !== value) {
                    newArray.push(item);
                }
            });
            newArray.push(value);

            $(element).attr(name, newArray.toString());
            return element;
        };

    // edge 의 style 도 검색하여 존재한다면 style 에 set
    if (edge.shape.geom.style instanceof OG.geometry.Style) {
        style = edge.shape.geom.style;
    }
    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {}, me._CONFIG.DEFAULT_STYLE.EDGE);


    if (!fromTerminal) {
        fromTerminal = $(edge).attr("_from");
    }
    if (!toTerminal) {
        toTerminal = $(edge).attr("_to");
    }

    if (fromTerminal) {
        fromShape = this._getShapeFromTerminal(fromTerminal);
        fromXY = this._getPositionFromTerminal(fromTerminal);
    }

    if (toTerminal) {
        toShape = this._getShapeFromTerminal(toTerminal);
        toXY = this._getPositionFromTerminal(toTerminal);
    }

    //셀프 커넥션 처리
    isSelf = fromShape && toShape && fromShape.id === toShape.id;
    if (isSelf) {
        fromXY = toXY = fromShape.shape.geom.getBoundary().getRightCenter();
    }

    if (fromShape && toShape) {
        if (fromShape.attributes._shape_id.value == "OG.shape.bpmn.Value_Chain" || toShape.attributes._shape_id.value == "OG.shape.bpmn.Value_Chain") {
            _style["arrow-end"] = "none";
        } else if (fromShape.attributes._shape_id.value == "OG.shape.bpmn.Value_Chain_Module" || toShape.attributes._shape_id.value == "OG.shape.bpmn.Value_Chain_Module") {
            _style["arrow-end"] = "none";
        } else if (fromShape.attributes._shape_id.value == "OG.shape.bpmn.A_HumanTask" || toShape.attributes._shape_id.value == "OG.shape.bpmn.A_HumanTask") {
            _style["edge-type"] = "plain";
            _style["arrow-start"] = "none";
            _style["arrow-end"] = "block-wide-long";
        }

        var onBeforeConnectShapeFrom = fromShape.shape.onBeforeConnectShape(edge, fromShape, toShape);
        if (typeof onBeforeConnectShapeFrom == 'boolean' && !onBeforeConnectShapeFrom) {
            this.remove(edge);
            return null;
        }
        var onBeforeConnectShapeTo = toShape.shape.onBeforeConnectShape(edge, fromShape, toShape);
        if (typeof onBeforeConnectShapeTo == 'boolean' && !onBeforeConnectShapeTo) {
            this.remove(edge);
            return null;
        }
        beforeEvent = jQuery.Event("beforeConnectShape", {edge: edge, fromShape: fromShape, toShape: toShape});
        $(this._PAPER.canvas).trigger(beforeEvent);
        if (beforeEvent.isPropagationStopped()) {
            this.remove(edge);
            return null;
        }
    }

    var geometry = edge.shape.geom;
    var vertices = geometry.getVertices();

    if (fromTerminal) {
        vertices[0].x = fromXY.x
        vertices[0].y = fromXY.y
    }

    if (toTerminal) {
        vertices[vertices.length - 1].x = toXY.x
        vertices[vertices.length - 1].y = toXY.y
    }

    // 라인 드로잉
    if (fromShape) {
        isEssensia = $(fromShape).attr("_shape_id").indexOf('OG.shape.essencia') !== -1;
    }
    if (!isEssensia) {
        // 디폴트 스타일이 정해져 있지 않다면 화살표로 그린다.
        if (typeof style == 'undefined' || style == null || style.length == 0 || style == '') {
            edge.shape.geom.style.map['arrow-start'] = 'none';
            edge.shape.geom.style.map['arrow-end'] = 'block';
        }
        edge = this.drawEdge(new OG.PolyLine(vertices), edge.shape.geom.style, edge ? edge.id : null, isSelf);
    }
    if (isEssensia) {
        edge.shape.geom.style.map['arrow-start'] = 'diamond';
        edge.shape.geom.style.map['arrow-end'] = 'none';
        edge = this.drawEdge(new OG.PolyLine(vertices), edge.shape.geom.style, edge ? edge.id : null, isSelf);
    }

    // Draw Label
    this.drawLabel(edge, label);
    this.drawEdgeLabel(edge, null, 'FROM');
    this.drawEdgeLabel(edge, null, 'TO');


    // 이전 연결속성정보 삭제
    this.disconnect(edge);

    // 연결 노드 정보 설정
    if (fromTerminal) {
        $(edge).attr("_from", fromTerminal);
        addAttrValues(fromShape, "_toedge", edge.id);
    }
    if (toTerminal) {
        $(edge).attr("_to", toTerminal);
        addAttrValues(toShape, "_fromedge", edge.id);
    }

    if (fromShape && toShape) {
        // connectShape event fire
        if (!preventTrigger) {
            fromShape.shape.onConnectShape(edge, fromShape, toShape);
            toShape.shape.onConnectShape(edge, fromShape, toShape);
            $(this._PAPER.canvas).trigger('connectShape', [edge, fromShape, toShape]);
        }
    }
    me.trimConnectInnerVertice(edge);
    me.trimConnectIntersection(edge);
    me.trimEdge(edge);
    me.checkBridgeEdge(edge);

    return edge;
};


/**
 * 단방향 연결속성정보를 삭제한다. Edge 인 경우에만 해당한다.
 *
 * @param {Element} element
 * @param {String} connectDirection 연결방향 'from' or 'to'
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.disconnectOneWay = function (element, connectDirection) {
    var me = this, fromShape, toShape,
        removeAttrValue = function (element, name, value) {
            var attrValue = $(element).attr(name),
                array = attrValue ? attrValue.split(",") : [],
                newArray = [];
            $.each(array, function (idx, item) {
                if (item !== value) {
                    newArray.push(item);
                }
            });

            $(element).attr(name, newArray.toString());
            return element;
        };

    var isEdge = $(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE;
    if (!element || !isEdge) {
        return;
    }

    // Edge 인 경우 연결된 Shape 의 연결 속성 정보를 삭제
    var fromTerminal = $(element).attr("_from");
    var toTerminal = $(element).attr("_to");

    if (fromTerminal && connectDirection === 'from') {
        fromShape = this._getShapeFromTerminal(fromTerminal);
        removeAttrValue(fromShape, "_toedge", element.id);
        $(element).removeAttr("_from");
    }

    if (toTerminal && connectDirection === 'to') {
        toShape = this._getShapeFromTerminal(toTerminal);
        removeAttrValue(toShape, "_fromedge", element.id);
        $(element).removeAttr("_to");
    }

    // disconnectShape event fire
    if (fromShape && toShape) {
        fromShape.shape.onDisconnectShape(element, fromShape, toShape);
        toShape.shape.onDisconnectShape(element, fromShape, toShape);
        $(this._PAPER.canvas).trigger('disconnectShape', [element, fromShape, toShape]);
    }
};

/**
 * 연결속성정보를 삭제한다. Edge 인 경우는 연결 속성정보만 삭제하고, 일반 Shape 인 경우는 연결된 모든 Edge 를 삭제한다.
 *
 * @param {Element} element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.disconnect = function (element) {
    var me = this, fromTerminalId, toTerminalId, fromShape, toShape, fromEdgeId, toEdgeId, fromEdge, toEdge,
        removeAttrValue = function (element, name, value) {
            var attrValue = $(element).attr(name),
                array = attrValue ? attrValue.split(",") : [],
                newArray = [];
            $.each(array, function (idx, item) {
                if (item !== value) {
                    newArray.push(item);
                }
            });

            $(element).attr(name, newArray.toString());
            return element;
        };

    if (element) {
        if ($(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE) {
            // Edge 인 경우 연결된 Shape 의 연결 속성 정보를 삭제
            var fromTerminal = $(element).attr("_from");
            var toTerminal = $(element).attr("_to");

            if (fromTerminal) {
                fromShape = this._getShapeFromTerminal(fromTerminal);
                removeAttrValue(fromShape, "_toedge", element.id);
                $(element).removeAttr("_from");
            }

            if (toTerminal) {
                toShape = this._getShapeFromTerminal(toTerminal);
                removeAttrValue(toShape, "_fromedge", element.id);
                $(element).removeAttr("_to");
            }

            // disconnectShape event fire
            if (fromShape && toShape) {
                fromShape.shape.onDisconnectShape(element, fromShape, toShape);
                toShape.shape.onDisconnectShape(element, fromShape, toShape);
                $(this._PAPER.canvas).trigger('disconnectShape', [element, fromShape, toShape]);
            }
        } else {
            // 일반 Shape 인 경우 연결된 모든 Edge 와 속성 정보를 삭제
            fromEdgeId = $(element).attr("_fromedge");
            toEdgeId = $(element).attr("_toedge");

            if (fromEdgeId) {
                $.each(fromEdgeId.split(","), function (idx, item) {
                    fromEdge = me.getElementById(item);

                    fromTerminalId = $(fromEdge).attr("_from");
                    if (fromTerminalId) {
                        fromShape = me._getShapeFromTerminal(fromTerminalId);
                        removeAttrValue(fromShape, "_toedge", item);
                    }

                    // disconnectShape event fire
                    if (fromShape && element) {
                        fromShape.shape.onDisconnectShape(fromEdge, fromShape, element);
                        element.shape.onDisconnectShape(fromEdge, fromShape, element);
                        $(me._PAPER.canvas).trigger('disconnectShape', [fromEdge, fromShape, element]);
                    }

                    me.removeShape(fromEdge);
                });
            }

            if (toEdgeId) {
                $.each(toEdgeId.split(","), function (idx, item) {
                    toEdge = me.getElementById(item);

                    toTerminalId = $(toEdge).attr("_to");
                    if (toTerminalId) {
                        toShape = me._getShapeFromTerminal(toTerminalId);
                        removeAttrValue(toShape, "_fromedge", item);
                    }

                    // disconnectShape event fire
                    if (element && toShape) {
                        element.shape.onDisconnectShape(toEdge, element, toShape);
                        toShape.shape.onDisconnectShape(toEdge, element, toShape);
                        $(me._PAPER.canvas).trigger('disconnectShape', [toEdge, element, toShape]);
                    }

                    me.removeShape(toEdge);
                });
            }
        }
    }
};

/**
 * ID에 해당하는 Element 의 Drop Over 가이드를 드로잉한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawDropOverGuide = function (element) {
    var me = this, rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        geometry = rElement ? rElement.node.shape.geom : null,
        envelope, _upperLeft, _bBoxRect,
        _size = me._CONFIG.GUIDE_RECT_SIZE / 2,
        _hSize = _size / 2;

    if (rElement && geometry && $(element).attr("_shape") !== OG.Constants.SHAPE_TYPE.EDGE && !this._getREleById(rElement.id + OG.Constants.DROP_OVER_BBOX_SUFFIX)) {
        envelope = geometry.getBoundary();
        _upperLeft = envelope.getUpperLeft();

        // guide line 랜더링
        _bBoxRect = this._PAPER.rect(_upperLeft.x - _hSize, _upperLeft.y - _hSize, envelope.getWidth() + _size, envelope.getHeight() + _size);
        _bBoxRect.attr(OG.Util.apply({'stroke-width': _size}, me._CONFIG.DEFAULT_STYLE.DROP_OVER_BBOX));
        this._add(_bBoxRect, rElement.id + OG.Constants.DROP_OVER_BBOX_SUFFIX);

        // layer 위치 조정
        _bBoxRect.insertAfter(rElement);
    }
};

OG.renderer.RaphaelRenderer.prototype.drawGuide = function (element) {

    var me = this, rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        geometry = rElement ? rElement.node.shape.geom : null,
        envelope,
        group, guide,
        _bBoxRect, _line, _linePath1, _linePath2, _rect,
        _upperLeft, _upperRight, _lowerLeft, _lowerRight, _leftCenter, _upperCenter, _rightCenter, _lowerCenter,
        _ulRect, _urRect, _lwlRect, _lwrRect, _lcRect, _ucRect, _rcRect, _lwcRect,
        _size = me._CONFIG.GUIDE_RECT_SIZE, _hSize = OG.Util.round(_size / 2),
        _ctrlSize = me._CONFIG.GUIDE_LINE_SIZE,
        _ctrlMargin = me._CONFIG.GUIDE_LINE_MARGIN,
        _trash, isEdge, isEssensia, controllers = [], isLane,
        _qUpper, _qLow, _qBisector, _qThirds;


    var _isConnectable = rElement && me._CANVAS._HANDLER._isConnectable(element.shape);
    var _isConnectCloneable = rElement && me._CANVAS._HANDLER._isConnectCloneable(element.shape);
    var _isDeletable = rElement && me._CANVAS._HANDLER._isDeletable(element.shape);
    var _isResizable = rElement && me._CANVAS._HANDLER._isResizable(element.shape);


    var createLinePath = function (x, y, marginTop, diff) {
        var marginTop = marginTop ? marginTop : 0;
        var from = [x, (y + _ctrlSize - diff) + marginTop];
        var to = [x + _ctrlSize, y + marginTop];
        var path = 'M' + from[0] + ' ' + from[1] + 'L' + to[0] + ' ' + to[1];
        return path;
    };

    var createTextLinePath = function (x, y) {
        var from = [x, (y + 4)];
        var to = [x + _ctrlSize, (y + 4)];
        var path = 'M' + from[0] + ' ' + from[1] + 'L' + to[0] + ' ' + to[1];
        return path;
    };

    isEssensia = $(element).attr("_shape_id").indexOf('OG.shape.essencia') === -1 ? false : true;
    isEdge = $(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE;

    if (element.shape instanceof OG.shape.HorizontalLaneShape
        || element.shape instanceof OG.shape.VerticalLaneShape) {
        isLane = true;
    }

    if (!rElement) {
        return null;
    }

    if (!geometry) {
        return null;
    }

    envelope = geometry.getBoundary();
    _upperLeft = envelope.getUpperLeft();
    _upperRight = envelope.getUpperRight();
    _lowerLeft = envelope.getLowerLeft();
    _lowerRight = envelope.getLowerRight();
    _leftCenter = envelope.getLeftCenter();
    _upperCenter = envelope.getUpperCenter();
    _rightCenter = envelope.getRightCenter();
    _lowerCenter = envelope.getLowerCenter();


    function _drawGroup() {
        // group
        group = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.GUIDE);
        if (group) {
            me._remove(group);
            me._remove(me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.BBOX));
        }

        group = me._PAPER.group();
        guide = {
            group: group.node
        };
        me._add(group, rElement.id + OG.Constants.GUIDE_SUFFIX.GUIDE);
    }

    function _drawBbox() {
        if (!isEdge) {
            _bBoxRect = me._PAPER.rect(_upperLeft.x, _upperLeft.y, envelope.getWidth(), envelope.getHeight());
        }
        if (isEdge) {
            _bBoxRect = me._PAPER.rect(_upperLeft.x - 10, _upperLeft.y - 10, envelope.getWidth() + 20, envelope.getHeight() + 20);
        }
        _bBoxRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_BBOX);
        me._add(_bBoxRect, rElement.id + OG.Constants.GUIDE_SUFFIX.BBOX);
        guide.bBox = _bBoxRect.node;
    }

    function _redrawBbox() {
        me._remove(me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.BBOX));
        if (!isEdge) {
            _bBoxRect = me._PAPER.rect(_upperLeft.x, _upperLeft.y, envelope.getWidth(), envelope.getHeight());
        }
        if (isEdge) {
            _bBoxRect = me._PAPER.rect(_upperLeft.x - 10, _upperLeft.y - 10, envelope.getWidth() + 20, envelope.getHeight() + 20);
        }
        _bBoxRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_BBOX);
        me._add(_bBoxRect, rElement.id + OG.Constants.GUIDE_SUFFIX.BBOX);
    }

    function _drawGuide() {
        if (!_isResizable) {
            return;
        }
        _ulRect = me._PAPER.rect(_upperLeft.x - _hSize, _upperLeft.y - _hSize, _size, _size);
        _urRect = me._PAPER.rect(_upperRight.x - _hSize, _upperRight.y - _hSize, _size, _size);
        _lwlRect = me._PAPER.rect(_lowerLeft.x - _hSize, _lowerLeft.y - _hSize, _size, _size);
        _lwrRect = me._PAPER.rect(_lowerRight.x - _hSize, _lowerRight.y - _hSize, _size, _size);
        _lcRect = me._PAPER.rect(_leftCenter.x - _hSize, _leftCenter.y - _hSize, _size, _size);
        _ucRect = me._PAPER.rect(_upperCenter.x - _hSize, _upperCenter.y - _hSize, _size, _size);
        _rcRect = me._PAPER.rect(_rightCenter.x - _hSize, _rightCenter.y - _hSize, _size, _size);
        _lwcRect = me._PAPER.rect(_lowerCenter.x - _hSize, _lowerCenter.y - _hSize, _size, _size);

        _ulRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_UL);
        _urRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_UR);
        _lwlRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LL);
        _lwrRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LR);
        _lcRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LC);
        _ucRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_UC);
        _rcRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_RC);
        _lwcRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LWC);

        group.appendChild(_ulRect);
        group.appendChild(_urRect);
        group.appendChild(_lwlRect);
        group.appendChild(_lwrRect);
        group.appendChild(_lcRect);
        group.appendChild(_ucRect);
        group.appendChild(_rcRect);
        group.appendChild(_lwcRect);

        me._add(_ulRect, rElement.id + OG.Constants.GUIDE_SUFFIX.UL);
        me._add(_urRect, rElement.id + OG.Constants.GUIDE_SUFFIX.UR);
        me._add(_lwlRect, rElement.id + OG.Constants.GUIDE_SUFFIX.LWL);
        me._add(_lwrRect, rElement.id + OG.Constants.GUIDE_SUFFIX.LWR);
        me._add(_lcRect, rElement.id + OG.Constants.GUIDE_SUFFIX.LC);
        me._add(_ucRect, rElement.id + OG.Constants.GUIDE_SUFFIX.UC);
        me._add(_rcRect, rElement.id + OG.Constants.GUIDE_SUFFIX.RC);
        me._add(_lwcRect, rElement.id + OG.Constants.GUIDE_SUFFIX.LWC);

        guide.ul = _ulRect.node;
        guide.ur = _urRect.node;
        guide.lwl = _lwlRect.node;
        guide.lwr = _lwrRect.node;
        guide.lc = _lcRect.node;
        guide.uc = _ucRect.node;
        guide.rc = _rcRect.node;
        guide.lwc = _lwcRect.node;
    }

    function _redrawGuide() {
        if (!_isResizable) {
            return;
        }
        _ulRect = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.UL);
        _urRect = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.UR);
        _lwlRect = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.LWL);
        _lwrRect = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.LWR);
        _lcRect = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.LC);
        _ucRect = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.UC);
        _rcRect = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.RC);
        _lwcRect = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.LWC);

        _ulRect.attr({x: _upperLeft.x - _hSize, y: _upperLeft.y - _hSize});
        _urRect.attr({x: _upperRight.x - _hSize, y: _upperRight.y - _hSize});
        _lwlRect.attr({x: _lowerLeft.x - _hSize, y: _lowerLeft.y - _hSize});
        _lwrRect.attr({x: _lowerRight.x - _hSize, y: _lowerRight.y - _hSize});
        _lcRect.attr({x: _leftCenter.x - _hSize, y: _leftCenter.y - _hSize});
        _ucRect.attr({x: _upperCenter.x - _hSize, y: _upperCenter.y - _hSize});
        _rcRect.attr({x: _rightCenter.x - _hSize, y: _rightCenter.y - _hSize});
        _lwcRect.attr({x: _lowerCenter.x - _hSize, y: _lowerCenter.y - _hSize});
    }

    function _drawTrash() {
        if (!_isDeletable) {
            return;
        }
        _trash = me._PAPER.image("resources/images/symbol/trash.png", 0, 0, _ctrlSize, _ctrlSize);
        _trash.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE_AREA);
        group.appendChild(_trash);
        me._add(_trash, rElement.id + OG.Constants.GUIDE_SUFFIX.TRASH);
        guide.trash = _trash.node;

        $(_trash.node).click(function () {
            if (me.isLane(element)) {
                me.removeLaneShape(element);
                me.addHistory();
            } else {
                me.removeShape(element);
                me.addHistory();
            }
        })
        controllers.push(_trash);
    }

    function _redrawTrash() {
        if (!_isDeletable) {
            return;
        }
        _trash = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.TRASH);
        controllers.push(_trash);
    }

    function _drawLine() {
        if (!_isConnectable) {
            return;
        }
        _line = me._PAPER.rect(_upperRight.x + _ctrlMargin, _upperRight.y, _ctrlSize, _ctrlSize);
        if (me._CONFIG.GUIDE_CONTROL_LINE_NUM == 2) {
            _linePath1 = me._PAPER.path(createLinePath(0, 0, 0, 8));
            _linePath2 = me._PAPER.path(createLinePath(0, 0, 8, 8));
        } else {
            _linePath1 = me._PAPER.path(createLinePath(0, 0, 0, 4));
        }
        _line.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE_AREA);

        if (!isEssensia) {
            _linePath1.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE);
            if (_linePath2) {
                _linePath2.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE);
            }
        }
        if (isEssensia) {
            _linePath1.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE_ESSENSIA);
            if (_linePath2) {
                _linePath2.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE_ESSENSIA);
            }
        }

        group.appendChild(_linePath1);
        group.appendChild(_line);

        me._add(_line, rElement.id + OG.Constants.GUIDE_SUFFIX.LINE);
        me._add(_linePath1, rElement.id + OG.Constants.GUIDE_SUFFIX.LINE + '1');


        if (_linePath2) {
            _linePath2.attr({'stroke-dasharray': '-'});
            group.appendChild(_linePath2);
            me._add(_linePath2, rElement.id + OG.Constants.GUIDE_SUFFIX.LINE + '2');
        }

        if (!guide.line) {
            guide.line = [];
        }
        guide.line.push({
            node: _line.node,
            text: ''
        });
        controllers.push(_line);
    }

    function _redrawLine() {
        if (!_isConnectable) {
            return;
        }
        _line = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.LINE);
        _linePath1 = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.LINE + '1');
        _linePath2 = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.LINE + '2');
        controllers.push(_line);
    }

    function _drawTextLine(i, text) {
        if (!_isConnectable) {
            return;
        }
        var displayText;
        var shapeId;
        var shapeLabel;
        //텍스트 형태가 스트링일 경우, 디폴트 선도형은 OG.EdgeShape
        if (typeof text == 'string') {
            displayText = text;
            shapeLabel = text;
            shapeId = 'OG.EdgeShape';
        }
        //오브젝트 형태일 경우 text 파라미터와 shape 파라미터를 얻는다.
        else {
            displayText = text.text;
            shapeLabel = text.label;
            shapeId = text.shape;
        }
        var minText = displayText;
        if (displayText.length > 3) {
            minText = displayText.substring(0, 3) + '..';
        }
        _line = me._PAPER.rect(_upperRight.x + _ctrlMargin, _upperRight.y, _ctrlSize, _ctrlSize);
        _linePath1 = me._PAPER.path(createTextLinePath(0, 0));
        _linePath2 = me._PAPER.text(0, 0, minText, _ctrlSize);
        _line.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE_AREA);

        if (!isEssensia) {
            _linePath1.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE);
        }
        if (isEssensia) {
            _linePath1.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE_ESSENSIA);
        }

        group.appendChild(_linePath1);
        group.appendChild(_linePath2);
        group.appendChild(_line);

        me._add(_line, rElement.id + OG.Constants.GUIDE_SUFFIX.LINE_TEXT + i);
        me._add(_linePath1, rElement.id + OG.Constants.GUIDE_SUFFIX.LINE_TEXT + i + '1');
        me._add(_linePath2, rElement.id + OG.Constants.GUIDE_SUFFIX.LINE_TEXT + i + '2');

        if (!guide.line) {
            guide.line = [];
        }
        guide.line.push({
            node: _line.node,
            text: displayText,
            label: shapeLabel ? shapeLabel : '',
            shape: shapeId
        });
        controllers.push(_line);
    }

    function _redrawTextLine(i, text) {
        if (!_isConnectable) {
            return;
        }
        _line = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.LINE_TEXT + i);
        _linePath1 = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.LINE_TEXT + i + '1');
        _linePath2 = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.LINE_TEXT + i + '2');
        controllers.push(_line);
    }

    function _drawRect() {
        if (!_isConnectCloneable) {
            return;
        }
        _rect = me._PAPER.rect(_upperRight.x + _ctrlMargin, _upperRight.y, _ctrlSize, _ctrlSize);
        _rect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_RECT_AREA);

        group.appendChild(_rect);

        me._add(_rect, rElement.id + OG.Constants.GUIDE_SUFFIX.RECT);

        guide.rect = _rect.node;
        controllers.push(_rect);
    }

    function _redrawRect() {
        if (!_isConnectCloneable) {
            return;
        }
        _rect = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.RECT);
        controllers.push(_rect);
    }

    function _drawLaneQuarter(divideCount) {
        _qUpper = me._PAPER.image("resources/images/symbol/quarter-upper.png", 0, 0, _ctrlSize, _ctrlSize);
        _qUpper.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE_AREA);
        group.appendChild(_qUpper);
        me._add(_qUpper, rElement.id + OG.Constants.GUIDE_SUFFIX.QUARTER_UPPER);
        guide.qUpper = _qUpper.node;
        $(_qUpper.node).click(function () {
            me.divideLane(element, OG.Constants.GUIDE_SUFFIX.QUARTER_UPPER);
        });

        _qBisector = me._PAPER.image("resources/images/symbol/quarter-bisector.png", 0, 0, _ctrlSize, _ctrlSize);
        _qBisector.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE_AREA);
        group.appendChild(_qBisector);
        me._add(_qBisector, rElement.id + OG.Constants.GUIDE_SUFFIX.QUARTER_BISECTOR);
        guide.qBisector = _qBisector.node;
        $(_qBisector.node).click(function () {
            me.divideLane(element, OG.Constants.GUIDE_SUFFIX.QUARTER_BISECTOR);
        });

        _qThirds = me._PAPER.image("resources/images/symbol/quarter-thirds.png", 0, 0, _ctrlSize, _ctrlSize);
        _qThirds.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE_AREA);
        group.appendChild(_qThirds);
        me._add(_qThirds, rElement.id + OG.Constants.GUIDE_SUFFIX.QUARTER_THIRDS);
        guide.qThirds = _qThirds.node;
        $(_qThirds.node).click(function () {
            me.divideLane(element, OG.Constants.GUIDE_SUFFIX.QUARTER_THIRDS);
        });

        _qLow = me._PAPER.image("resources/images/symbol/quarter-low.png", 0, 0, _ctrlSize, _ctrlSize);
        _qLow.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_LINE_AREA);
        group.appendChild(_qLow);
        me._add(_qLow, rElement.id + OG.Constants.GUIDE_SUFFIX.QUARTER_LOW);
        guide.qLow = _qLow.node;
        $(_qLow.node).click(function () {
            me.divideLane(element, OG.Constants.GUIDE_SUFFIX.QUARTER_LOW);
        });

        if (divideCount === 0) {
            _hide(_qBisector);
            _hide(_qThirds);

            controllers.push(_qUpper);
            controllers.push(_qLow);
        }
        if (divideCount === 1) {
            _hide(_qThirds);

            controllers.push(_qUpper);
            controllers.push(_qBisector);
            controllers.push(_qLow);
        }

        if (divideCount === 2) {
            controllers.push(_qUpper);
            controllers.push(_qBisector);
            controllers.push(_qThirds);
            controllers.push(_qLow);
        }
    }

    function _redrawLaneQuarter(divideCount) {
        _qUpper = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.QUARTER_UPPER);
        _qBisector = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.QUARTER_BISECTOR);
        _qThirds = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.QUARTER_THIRDS);
        _qLow = me._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.QUARTER_LOW);

        if (divideCount === 0) {
            _hide(_qBisector);
            _hide(_qThirds);
            controllers.push(_qUpper);
            controllers.push(_qLow);
        }

        if (divideCount === 1) {
            _hide(_qThirds);
            controllers.push(_qUpper);
            controllers.push(_qBisector);
            controllers.push(_qLow);
        }

        if (divideCount === 2) {
            controllers.push(_qUpper);
            controllers.push(_qBisector);
            controllers.push(_qThirds);
            controllers.push(_qLow);
        }

        $.each(controllers, function (idx, controller) {
            _show(controller);
        })
    }

    function _hide(controller) {
        //일시적으로 숨기고 캔버스 외각처리.
        controller.attr({opacity: '0', x: -100, y: -100});
    }

    function _show(controller) {
        controller.attr({opacity: '1'});
    }

    //화면에 보여질 컨트롤러들을 정렬한다.
    function _setControllerPosition() {
        var maxIconPerLine = 4, x, y, divide, rest;

        $.each(controllers, function (index, controller) {
            divide = parseInt(index / maxIconPerLine);
            rest = parseInt(index % maxIconPerLine);
            x = _upperRight.x + ((divide + 1) * (_ctrlMargin + _ctrlSize) - _ctrlSize);
            y = _upperRight.y + (rest * (_ctrlMargin + _ctrlSize));

            controller.attr({x: x, y: y});
            //라인일경우 하위 라인까지 함께 재배치
            if (controller.id === rElement.id + OG.Constants.GUIDE_SUFFIX.LINE) {
                if (me._CONFIG.GUIDE_CONTROL_LINE_NUM == 2) {
                    me._getREleById(controller.id + '1').attr({'path': createLinePath(x, y, 0, 8)});
                    me._getREleById(controller.id + '2').attr({'path': createLinePath(x, y, 8, 8)});
                } else {
                    me._getREleById(controller.id + '1').attr({'path': createLinePath(x, y, 0, 4)});
                }
            }

            //텍스트 라인일경우 하위 라인까지 함께 재배치
            if (controller.id.indexOf(rElement.id + OG.Constants.GUIDE_SUFFIX.LINE_TEXT) != -1) {
                var index = controller.id.replace(rElement.id + OG.Constants.GUIDE_SUFFIX.LINE_TEXT, '');
                me._getREleById(controller.id + '1').attr({'path': createTextLinePath(x, y)});
                me._getREleById(controller.id + '2').attr({x: x + 10, y: y + 16});
            }
        });
    }

    var textList = me.getTextListInController(element);
    if (!textList) {
        textList = [];
    }

    //기존에 가이드가 있을 경우
    if (this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.GUIDE)) {
        if (!isEdge) {
            _redrawBbox();
            _redrawGuide();

            if (isLane) {
                _redrawLaneQuarter(me.enableDivideCount(element));
            }
            if (!isLane) {
                _redrawRect();
                if (textList.length) {
                    $.each(textList, function (i, text) {
                        _redrawTextLine(i, text);
                    })
                } else {
                    _redrawLine();
                }
            }
            _redrawTrash();
        }
        if (isEdge) {
            _redrawBbox();
            _redrawTrash();
        }

        _setControllerPosition();
        return null;
    }
    //기존에 가이드가 없을 경우
    else {
        if (isEdge) {
            _drawGroup();
            _drawBbox();
            _drawTrash();
        }
        if (!isEdge) {
            _drawGroup();
            _drawBbox();
            _drawGuide();

            if (isLane) {
                _drawLaneQuarter(me.enableDivideCount(element));
            }
            if (!isLane) {
                _drawRect();
                if (textList.length) {
                    $.each(textList, function (i, text) {
                        _drawTextLine(i, text);
                    })
                } else {
                    _drawLine();
                }
            }
            _drawTrash();
        }
        _setControllerPosition();

        // layer 위치 조정
        if (_bBoxRect) {
            _bBoxRect.insertBefore(rElement);
        }
        if (group) {
            me.getRootGroup().appendChild(group.node);
        }
        // selected 속성값 설정
        $(rElement.node).attr("_selected", "true");
        return guide;
    }
};

/**
 * ID에 해당하는 Element 의 Stick 용 가이드를 드로잉한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Object} position
 */
OG.renderer.RaphaelRenderer.prototype.drawStickGuide = function (position) {
    if (!this._CONFIG.STICK_GUIDE) {
        return;
    }
    var me = this, path, pathX, pathY;

    if (!position) {
        return;
    }
    if (position.x) {
        pathX = position.x * me._CONFIG.SCALE;
        this.removeStickGuide('vertical');
        path = this._PAPER.path("M" + pathX + ",0L" + pathX + ",10000");
        this._stickGuideX = path;
    }
    if (position.y) {
        pathY = position.y * me._CONFIG.SCALE;
        this.removeStickGuide('horizontal');
        path = this._PAPER.path("M0," + pathY + "L10000," + pathY);
        this._stickGuideY = path;
    }
    if (path) {
        path.attr("stroke-width", "2");
        path.attr("stroke", "#FFCC50");
        path.attr("opacity", "0.7");
    }
};

OG.renderer.RaphaelRenderer.prototype.removeStickGuide = function (direction) {
    if (!this._CONFIG.STICK_GUIDE) {
        return;
    }
    if (!direction) {
        return;
    }
    if (direction === 'vertical') {
        if (this._stickGuideX) {
            this._remove(this._stickGuideX);
            this._stickGuideX = null;
        }
    }
    if (direction === 'horizontal') {
        if (this._stickGuideY) {
            this._remove(this._stickGuideY);
            this._stickGuideY = null;
        }
    }
};

OG.renderer.RaphaelRenderer.prototype.removeAllStickGuide = function () {
    if (!this._CONFIG.STICK_GUIDE) {
        return;
    }
    this.removeStickGuide('vertical');
    this.removeStickGuide('horizontal');
};

/**
 * ID에 해당하는 Element 의 Move & Resize 용 가이드를 제거한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.removeGuide = function (element) {

    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        guide, bBox;
    if (rElement) {
        guide = this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.GUIDE);
        bBox = this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.BBOX);

        rElement.node.removeAttribute("_selected");
        this._remove(guide);
        this._remove(bBox);
        this.removeAllStickGuide();
    }
};

/**
 * 모든 Move & Resize 용 가이드를 제거한다.
 *
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.removeAllGuide = function () {
    var me = this;
    $(me.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (index, item) {
        if (OG.Util.isElement(item) && item.id) {
            me.removeGuide(item);
        }
    });
};

/**
 * ID에 해당하는 Edge Element 의 Move & Resize 용 가이드를 드로잉한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @return {Object}
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawEdgeGuide = function (element) {
    return null;

    var me = this, rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        geometry = rElement ? rElement.node.shape.geom : null,
        vertices, isSelf,
        group, guide, pathStr,
        _bBoxLine, _fromRect, _toRect, _controlRect, controlNode = [],
        _size = me._CONFIG.GUIDE_RECT_SIZE, _hSize = OG.Util.round(_size / 2), _style = {},
        i;

    if (rElement && geometry) {
        OG.Util.apply(_style, geometry.style.map, me._CONFIG.DEFAULT_STYLE.EDGE);

        vertices = _style["edge-type"] === OG.Constants.EDGE_TYPE.BEZIER ? geometry.getControlPoints() : geometry.getVertices();

        isSelf = $(element).attr("_from") && $(element).attr("_to") && $(element).attr("_from") === $(element).attr("_to");

        if (this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.GUIDE)) {
            // 가이드가 이미 존재하는 경우에는 bBoxLine 만 삭제후 새로 draw 하고 나머지 guide 는 Update 한다.
            // bBoxLine remove -> redraw
            this._remove(this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.BBOX));
            pathStr = "";
            if (_style["edge-type"] === OG.Constants.EDGE_TYPE.BEZIER) {
                for (var i = 0, leni = vertices.length; i < leni; i++) {
                    if (i === 0) {
                        pathStr = "M" + vertices[i].x + " " + vertices[i].y;
                    } else if (i === 1) {
                        pathStr += "C" + vertices[i].x + " " + vertices[i].y;
                    } else {
                        pathStr += " " + vertices[i].x + " " + vertices[i].y;
                    }
                }
            } else {
                for (var i = 0, leni = vertices.length; i < leni; i++) {
                    if (i === 0) {
                        pathStr = "M" + vertices[i].x + " " + vertices[i].y;
                    } else {
                        pathStr += "L" + vertices[i].x + " " + vertices[i].y;
                    }
                }
            }

            _bBoxLine = this._PAPER.path(pathStr);
            _bBoxLine.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_BBOX);
            this._add(_bBoxLine, rElement.id + OG.Constants.GUIDE_SUFFIX.BBOX);
            _bBoxLine.insertBefore(rElement);

            // 시작지점 가이드 Update
            _fromRect = this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.FROM);
            _fromRect.attr({x: vertices[0].x - _hSize, y: vertices[0].y - _hSize});

            // 종료지점 가이드 Update
            _toRect = this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.TO);
            _toRect.attr({x: vertices[vertices.length - 1].x - _hSize, y: vertices[vertices.length - 1].y - _hSize});

            // 콘트롤 가이드 Update
            if (!isSelf && _style["edge-type"] !== OG.Constants.EDGE_TYPE.BEZIER) {
                for (var i = 1, leni = vertices.length - 2; i < leni; i++) {
                    if (vertices[i].x === vertices[i + 1].x) {
                        _controlRect = this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.CTL_H + i);
                        if (_controlRect) {
                            _controlRect.attr({
                                x: vertices[i].x - _hSize,
                                y: OG.Util.round((vertices[i].y + vertices[i + 1].y) / 2) - _hSize
                            });
                        }
                    } else {
                        _controlRect = this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.CTL_V + i);
                        if (_controlRect) {
                            _controlRect.attr({
                                x: OG.Util.round((vertices[i].x + vertices[i + 1].x) / 2) - _hSize,
                                y: vertices[i].y - _hSize
                            });
                        }
                    }
                }
            }

            return null;
        }

        // group
        group = this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.GUIDE);
        if (group) {
            this._remove(group);
            this._remove(this._getREleById(rElement.id + OG.Constants.GUIDE_SUFFIX.BBOX));
        }
        group = this._PAPER.group();

        // 쉐도우 가이드
        pathStr = "";
        if (_style["edge-type"] === OG.Constants.EDGE_TYPE.BEZIER) {
            for (var i = 0, leni = vertices.length; i < leni; i++) {
                if (i === 0) {
                    pathStr = "M" + vertices[i].x + " " + vertices[i].y;
                } else if (i === 1) {
                    pathStr += "C" + vertices[i].x + " " + vertices[i].y;
                } else {
                    pathStr += " " + vertices[i].x + " " + vertices[i].y;
                }
            }
        } else {
            for (var i = 0, leni = vertices.length; i < leni; i++) {
                if (i === 0) {
                    pathStr = "M" + vertices[i].x + " " + vertices[i].y;
                } else {
                    pathStr += "L" + vertices[i].x + " " + vertices[i].y;
                }
            }
        }
        _bBoxLine = this._PAPER.path(pathStr);
        _bBoxLine.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_BBOX);

        // 시작지점 가이드
        _fromRect = this._PAPER.rect(vertices[0].x - _hSize, vertices[0].y - _hSize, _size, _size);
        _fromRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_FROM);
        group.appendChild(_fromRect);
        this._add(_fromRect, rElement.id + OG.Constants.GUIDE_SUFFIX.FROM);

        // 종료지점 가이드
        _toRect = this._PAPER.rect(vertices[vertices.length - 1].x - _hSize, vertices[vertices.length - 1].y - _hSize, _size, _size);
        _toRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_TO);
        group.appendChild(_toRect);
        this._add(_toRect, rElement.id + OG.Constants.GUIDE_SUFFIX.TO);

        // 콘트롤 가이드
        if (!isSelf && _style["edge-type"] !== OG.Constants.EDGE_TYPE.BEZIER) {
            for (var i = 1, leni = vertices.length - 2; i < leni; i++) {
                if (vertices[i].x === vertices[i + 1].x) {
                    _controlRect = this._PAPER.rect(vertices[i].x - _hSize,
                        OG.Util.round((vertices[i].y + vertices[i + 1].y) / 2) - _hSize, _size, _size);
                    _controlRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_CTL_H);
                    this._add(_controlRect, rElement.id + OG.Constants.GUIDE_SUFFIX.CTL_H + i);
                } else {
                    _controlRect = this._PAPER.rect(OG.Util.round((vertices[i].x + vertices[i + 1].x) / 2) - _hSize,
                        vertices[i].y - _hSize, _size, _size);
                    _controlRect.attr(me._CONFIG.DEFAULT_STYLE.GUIDE_CTL_V);
                    this._add(_controlRect, rElement.id + OG.Constants.GUIDE_SUFFIX.CTL_V + i);
                }
                group.appendChild(_controlRect);
                controlNode.push(_controlRect.node);
            }
        }
        this._add(_bBoxLine, rElement.id + OG.Constants.GUIDE_SUFFIX.BBOX);
        this._add(group, rElement.id + OG.Constants.GUIDE_SUFFIX.GUIDE);

        // guide 정의
        guide = {
            bBox: _bBoxLine.node,
            group: group.node,
            from: _fromRect.node,
            to: _toRect.node,
            controls: controlNode
        };

        // layer 위치 조정
        _bBoxLine.insertBefore(rElement);
        group.insertAfter(rElement);

        // selected 속성값 설정
        $(rElement.node).attr("_selected", "true");

        return guide;
    }

    return null;
};

/**
 * Rectangle 모양의 마우스 드래그 선택 박스 영역을 드로잉한다.
 *
 * @param {Number[]} position 드로잉할 위치 좌표(좌상단)
 * @param {Number[]} size Text Width, Height, Angle
 * @param {OG.geometry.Style|Object} style 스타일
 * @return {Element} DOM Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.drawRubberBand = function (position, size, style) {
    var me = this, x = position ? position[0] : 0,
        y = position ? position[1] : 0,
        width = size ? size[0] : 0,
        height = size ? size[1] : 0,
        rect = this._getREleById(OG.Constants.RUBBER_BAND_ID),
        _style = {};
    if (rect) {
        rect.attr({
            x: x,
            y: y,
            width: Math.abs(width),
            height: Math.abs(height)
        });
        return rect;
    }
    OG.Util.apply(_style, (style instanceof OG.geometry.Style) ? style.map : style || {}, me._CONFIG.DEFAULT_STYLE.RUBBER_BAND);
    rect = this._PAPER.rect(x, y, width, height).attr(_style);
    this._add(rect, OG.Constants.RUBBER_BAND_ID);
    this._ETC_GROUP.node.appendChild(rect.node);

    return rect.node;
};

/**
 * Rectangle 모양의 마우스 드래그 선택 박스 영역을 제거한다.
 *
 * @param {Element} root first, rubberBand 정보를 저장한 엘리먼트
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.removeRubberBand = function (root) {
    this.setAttr(OG.Constants.RUBBER_BAND_ID, {x: 0, y: 0, width: 0, height: 0});
    $(root).removeData("dragBox_first");
    $(root).removeData("rubberBand");
};

/**
 * ID에 해당하는 Element 의 Collapse 가이드를 제거한다.
 *
 * @param {Element} element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.removeCollapseGuide = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        _bBoxRect, _rect;

    if (rElement) {
        _bBoxRect = this._getREleById(rElement.id + OG.Constants.COLLAPSE_BBOX_SUFFIX);
        if (_bBoxRect) {
            this._remove(_bBoxRect);
        }
        _rect = this._getREleById(rElement.id + OG.Constants.COLLAPSE_SUFFIX);
        if (_rect) {
            this._remove(_rect);
        }
    }
};

/**
 * 주어진 Shape 들을 그룹핑한다.
 *
 * @param {Element[]} elements
 * @return {Element} Group Shape Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.group = function (elements) {
    var groupShapeEle, geometryArray = [], geometryCollection, envelope, position, shape, size, i;

    if (elements && elements.length > 1) {
        // 그룹핑할 Shape 의 전체 영역 계산
        for (var i = 0, leni = elements.length; i < leni; i++) {
            geometryArray.push(elements[i].shape.geom);
        }
        geometryCollection = new OG.GeometryCollection(geometryArray);
        envelope = geometryCollection.getBoundary();

        // 위치 및 사이즈 설정
        position = [envelope.getCentroid().x, envelope.getCentroid().y];
        shape = new OG.GroupShape();
        size = [envelope.getWidth(), envelope.getHeight()];

        // draw group
        groupShapeEle = this.drawShape(position, shape, size);

        // append child
        for (var i = 0, leni = elements.length; i < leni; i++) {
            groupShapeEle.appendChild(elements[i]);
        }

        // group event fire
        for (var c = 0, lenc = elements.length; c < lenc; c++) {
            elements[c].shape.onGroup(groupShapeEle);
        }
        $(this._PAPER.canvas).trigger('group', [groupShapeEle]);
    }

    return groupShapeEle;
};

/**
 * 주어진 그룹들을 그룹해제한다.
 *
 * @param {Element[]} groupElements
 * @return {Element[]} ungrouped Elements
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.ungroup = function (groupElements) {
    var ungroupElements = [], children, i, j;
    if (groupElements && groupElements.length > 0) {
        for (var i = 0, leni = groupElements.length; i < leni; i++) {
            children = $(groupElements[i]).children("[_type='" + OG.Constants.NODE_TYPE.SHAPE + "']");
            for (var j = 0, lenj = children.length; j < lenj; j++) {
                groupElements[i].parentNode.appendChild(children[j]);
                ungroupElements.push(children[j]);
            }
            this.removeShape(groupElements[i]);
        }

        // ungroup event fire
        for (var c = 0, lenc = ungroupElements.length; c < lenc; c++) {
            ungroupElements[c].shape.onUnGroup();
        }
        $(this._PAPER.canvas).trigger('ungroup', [ungroupElements]);
    }

    return ungroupElements;
};

/**
 * 주어진 Shape 들을 그룹에 추가한다.
 *
 * @param {Element} groupElement
 * @param {Element[]} elements
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.addToGroup = function (groupElement, elements, eventOffset) {
    for (var i = 0, leni = elements.length; i < leni; i++) {
        groupElement.appendChild(elements[i]);
        elements[i].shape.onAddedToGroup(groupElement, elements[i], eventOffset);
    }
    if (groupElement.shape && groupElement.shape.onAddToGroup) {
        groupElement.shape.onAddToGroup(groupElement, elements, eventOffset);
    }
};

/**
 * 드로잉된 모든 오브젝트를 클리어한다.
 *
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.clear = function () {
    this._PAPER.clear();
    this._ELE_MAP.clear();
    this._ID_PREFIX = Math.round(Math.random() * 10000);
    this._LAST_ID = 0;
    this._ROOT_GROUP = this._add(this._PAPER.group(), null, OG.Constants.NODE_TYPE.ROOT);
    this._ETC_GROUP = this._add(this._PAPER.group(), null, OG.Constants.NODE_TYPE.ETC);
};

OG.renderer.RaphaelRenderer.prototype.alignLeft = function () {
    var minX = 0, me = this;
    $(me.getRootElement()).find("[_selected=true]").each(function (idx, item) {
        if (item.shape.TYPE == 'EDGE')
            return;

        if (minX == 0) {
            minX = item.shape.geom.boundary._leftCenter.x;
        } else {
            minX = minX > item.shape.geom.boundary._leftCenter.x ? item.shape.geom.boundary._leftCenter.x : minX;
        }
    });
    $(me.getRootElement()).find("[_selected=true]").each(function (idx, item) {
        if (item.shape.TYPE == 'EDGE')
            return;

        me.move(item, [minX - item.shape.geom.boundary._leftCenter.x, 0]);
        me.drawGuide(item);
    });

    me._CANVAS._HANDLER.selectShapes(me._CANVAS._HANDLER._getSelectedElement());
};

OG.renderer.RaphaelRenderer.prototype.alignRight = function () {
    var maxX = 0, me = this;
    $(me.getRootElement()).find("[_selected=true]").each(function (idx, item) {
        if (item.shape.TYPE == 'EDGE')
            return;

        if (maxX == 0) {
            maxX = item.shape.geom.boundary._rightCenter.x;
        } else {
            maxX = maxX < item.shape.geom.boundary._rightCenter.x ? item.shape.geom.boundary._rightCenter.x : maxX;
        }
    });

    $(me.getRootElement()).find("[_selected=true]").each(function (idx, item) {
        if (item.shape.TYPE == 'EDGE')
            return;

        me.move(item, [maxX - item.shape.geom.boundary._rightCenter.x, 0]);
        me.drawGuide(item);
    });

    me._CANVAS._HANDLER.selectShapes(me._CANVAS._HANDLER._getSelectedElement());
};

OG.renderer.RaphaelRenderer.prototype.alignBottom = function () {
    var maxY = 0, me = this;
    $(me.getRootElement()).find("[_selected=true]").each(function (idx, item) {
        if (item.shape.TYPE == 'EDGE')
            return;

        if (maxY == 0) {
            maxY = item.shape.geom.boundary._leftCenter.y;
        } else {
            maxY = maxY < item.shape.geom.boundary._leftCenter.y ? item.shape.geom.boundary._leftCenter.y : maxY;
        }
    });

    $(me.getRootElement()).find("[_selected=true]").each(function (idx, item) {
        if (item.shape.TYPE == 'EDGE')
            return;

        me.move(item, [0, maxY - item.shape.geom.boundary._leftCenter.y]);
        me.drawGuide(item);
    });

    me._CANVAS._HANDLER.selectShapes(me._CANVAS._HANDLER._getSelectedElement());
};

OG.renderer.RaphaelRenderer.prototype.alignTop = function () {
    var minY = 0, me = this;
    $(me.getRootElement()).find("[_selected=true]").each(function (idx, item) {
        if (item.shape.TYPE == 'EDGE')
            return;

        if (minY == 0) {
            minY = item.shape.geom.boundary._rightCenter.y;
        } else {
            minY = minY > item.shape.geom.boundary._rightCenter.y ? item.shape.geom.boundary._rightCenter.y : minY;
        }
    });

    $(me.getRootElement()).find("[_selected=true]").each(function (idx, item) {
        if (item.shape.TYPE == 'EDGE')
            return;

        me.move(item, [0, minY - item.shape.geom.boundary._rightCenter.y]);
        me.drawGuide(item);
    });

    me._CANVAS._HANDLER.selectShapes(me._CANVAS._HANDLER._getSelectedElement());
};

/**
 * Shape 을 캔버스에서 관련된 모두를 삭제한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.removeShape = function (element, preventEvent) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        childNodes, beforeEvent, i, removedElement;
    childNodes = rElement.node.childNodes;

    beforeEvent = jQuery.Event("beforeRemoveShape", {element: rElement.node});

    if (!preventEvent) {
        if (element.shape) {
            var onBeforeRemoveShape = element.shape.onBeforeRemoveShape();
            if (typeof onBeforeRemoveShape == 'boolean' && !onBeforeRemoveShape) {
                return false;
            }
        }
        $(this._PAPER.canvas).trigger(beforeEvent);
        if (beforeEvent.isPropagationStopped()) {
            return false;
        }
    }

    this.removeAllConnectGuide();

    for (i = childNodes.length - 1; i >= 0; i--) {
        if (childNodes[i].tagName == 'svg') {
            childNodes[i].parentNode.removeChild(childNodes[i]);
        } else if ($(childNodes[i]).attr("_type") === OG.Constants.NODE_TYPE.SHAPE) {
            this.removeShape(childNodes[i]);
        }
    }

    this.disconnect(rElement.node);
    this.removeGuide(rElement.node);
    this.removeCollapseGuide(rElement.node);

    removedElement = OG.Util.clone(rElement.node);

    if (!preventEvent) {
        if (element.shape) {
            element.shape.onRemoveShape();
        }
    }
    this.remove(rElement.node);

    // removeShape event fire
    if (!preventEvent) {
        $(this._PAPER.canvas).trigger('removeShape', [removedElement]);
    }
};

/**
 * ID에 해당하는 Element 를 캔버스에서 제거한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.remove = function (element) {
    var id = OG.Util.isElement(element) ? element.id : element,
        rElement = this._getREleById(id);
    this._remove(rElement);
};

/**
 * 하위 엘리먼트만 제거한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.removeChild = function (element) {
    var id = OG.Util.isElement(element) ? element.id : element,
        rElement = this._getREleById(id);
    this._removeChild(rElement);
};

/**
 * 랜더러 캔버스 Root Element 를 반환한다.
 *
 * @return {Element} Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.getRootElement = function () {
    return this._PAPER.canvas;
};

/**
 * 주어진 지점을 포함하는 Top Element 를 반환한다.
 *
 * @param {Number[]} position 위치 좌표
 * @return {Element} Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.getElementByPoint = function (position) {
    var element = this._PAPER.getElementByPoint(position[0], position[1]);
    return element ? element.node.parentNode : null;
};


/**
 * 엘리먼트에 속성값을 설정한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Object} attribute 속성값
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.setAttr = function (element, attribute) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement) {
        rElement.attr(attribute);
    }
};

/**
 * 엘리먼트 속성값을 반환한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {String} attrName 속성이름
 * @return {Object} attribute 속성값
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.getAttr = function (element, attrName) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement) {
        return rElement.attr(attrName);
    }
    return null;
};

/**
 * Shape 의 스타일을 변경한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Object} style 스타일
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.setShapeStyle = function (element, style) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement && element.shape && element.shape.geom) {
        OG.Util.apply(element.shape.geom.style.map, style || {});
        element.shapeStyle = element.shapeStyle || {};
        OG.Util.apply(element.shapeStyle, style || {});
        this.redrawShape(element);
    }
};

/**
 * Shape 의 선 연결 커스텀 컨트롤러를 설정한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Array} textList 텍스트 리스트
 * @override
 */

OG.renderer.RaphaelRenderer.prototype.setTextListInController = function (element, textList) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement && element.shape && element.shape.geom) {
        element.shape.textList = textList;
    }
};

/**
 * Shape 의 선 연결 커스텀 컨트롤러를 가져온다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */

OG.renderer.RaphaelRenderer.prototype.getTextListInController = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement && element.shape && element.shape.geom) {
        return element.shape.textList;
    }
};

/**
 * ID에 해당하는 Element 를 최상단 레이어로 이동한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.toFront = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement) {
        rElement.toFront();
    }
};

/**
 * ID에 해당하는 Element 를 최하단 레이어로 이동한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.toBack = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement) {
        rElement.toBack();
    }
};

/**
 * ID에 해당하는 Element 를 앞으로 한단계 이동한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.bringForward = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return;
    }
    element = rElement.node;
    var me = this, root = $(me.getRootGroup());
    if (me.isLane(element)) {
        element = me._RENDERER.getRootLane(element);
    }
    var length = $(element).prevAll().length;
    root[0].insertBefore(element, OG.Util.isIE() ? root[0].childNodes[length + 1] : root[0].children[length + 1]);
};

/**
 * ID에 해당하는 Element 를 뒤로 한단계 이동한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.sendBackward = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return;
    }
    element = rElement.node;
    var me = this, root = $(me.getRootGroup());
    if (me.isLane(element)) {
        element = me.getRootLane(element);
    }
    var length = $(element).prevAll().length;
    var depth = length - 2;
    if (depth < 0) {
        depth = 0;
    }
    root[0].insertBefore(element, OG.Util.isIE() ? root[0].childNodes[depth] : root[0].children[depth]);
};

/**
 * 랜더러 캔버스의 사이즈(Width, Height)를 반환한다.
 *
 * @return {Number[]} Canvas Width, Height
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.getCanvasSize = function () {
    return [this._PAPER.width, this._PAPER.height];
};

/**
 * 랜더러 캔버스의 사이즈(Width, Height)를 변경한다.
 *
 * @param {Number[]} size Canvas Width, Height
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.setCanvasSize = function (size) {
    this._PAPER.setSize(size[0], size[1]);
};

/**
 * 랜더러 캔버스의 사이즈(Width, Height)를 실제 존재하는 Shape 의 영역에 맞게 변경한다.
 *
 * @param {Number[]} minSize Canvas 최소 Width, Height
 * @param {Boolean} fitScale 주어진 minSize 에 맞게 fit 여부(Default:false)
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.fitCanvasSize = function (minSize, fitScale) {
    var me = this, realRootBBox = this.getRealRootBBox(), offsetX, offsetY, scale = 1,
        width = realRootBBox.width + me._CONFIG.FIT_CANVAS_PADDING * 2,
        height = realRootBBox.height + me._CONFIG.FIT_CANVAS_PADDING * 2;
    if (realRootBBox.width !== 0 && realRootBBox.height !== 0) {
        offsetX = realRootBBox.x > me._CONFIG.FIT_CANVAS_PADDING ?
            -1 * (realRootBBox.x - me._CONFIG.FIT_CANVAS_PADDING) : me._CONFIG.FIT_CANVAS_PADDING - realRootBBox.x;
        offsetY = realRootBBox.y > me._CONFIG.FIT_CANVAS_PADDING ?
            -1 * (realRootBBox.y - me._CONFIG.FIT_CANVAS_PADDING) : me._CONFIG.FIT_CANVAS_PADDING - realRootBBox.y;

        this.move(this.getRootGroup(), [offsetX, offsetY]);
        this.removeAllGuide();

        if (minSize && minSize.length === 2) {
            if (OG.Util.isDefined(fitScale) && fitScale === true) {
                scale = minSize[0] / width > minSize[1] / height ? minSize[1] / height : minSize[0] / width;
            }

            width = width < minSize[0] ? minSize[0] : width;
            height = height < minSize[1] ? minSize[1] : height;
        }
        this.setScale(OG.Util.roundPrecision(scale, 1));
        this.setCanvasSize([width, height]);
    }
};

/**
 * 새로운 View Box 영역을 설정한다. (ZoomIn & ZoomOut 가능)
 *
 * @param {Number[]} position 위치 좌표(좌상단 기준)
 * @param {Number[]} size Canvas Width, Height
 * @param {Boolean} isFit Fit 여부
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.setViewBox = function (position, size, isFit) {
    this._PAPER.setViewBox(position[0], position[1], size[0], size[1], isFit);
};

/**
 * Scale 을 반환한다. (리얼 사이즈 : Scale = 1)
 *
 * @return {Number} 스케일값
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.getScale = function (scale) {
    var me = this;
    return me._CONFIG.SCALE;
};

/**
 * Scale 을 설정한다. (리얼 사이즈 : Scale = 1)
 *
 * @param {Number} scale 스케일값
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.setScale = function (scale) {
    var me = this;
    if (me._CONFIG.SCALE_MIN <= scale && scale <= me._CONFIG.SCALE_MAX) {
        if (this.isVML()) {
            // TODO : VML 인 경우 처리
            $(this._ROOT_GROUP.node).css({
                'width': 21600 / scale,
                'height': 21600 / scale
            });

            $(this._ROOT_GROUP.node).find('[_type=SHAPE]').each(function (idx, item) {
                $(item).css({
                    'width': 21600,
                    'height': 21600
                });
            });
        } else {
            $(this._ROOT_GROUP.node).attr('transform', 'scale(' + scale + ')');
            $(this._ETC_GROUP.node).attr('transform', 'scale(' + scale + ')');
        }

        this._PAPER.setSize(
            OG.Util.roundGrid(this._PAPER.width / me._CONFIG.SCALE * scale, me._CONFIG.MOVE_SNAP_SIZE),
            OG.Util.roundGrid(this._PAPER.height / me._CONFIG.SCALE * scale, me._CONFIG.MOVE_SNAP_SIZE)
        );

        me._CONFIG.SCALE = scale;

        me._CANVAS.updateBackDoor();
    }
};

/**
 * ID에 해당하는 Element 를 캔버스에서 show 한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.show = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement) {
        rElement.show();
    }
};

/**
 * ID에 해당하는 Element 를 캔버스에서 hide 한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.hide = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement) {
        rElement.hide();
    }
};

/**
 * Source Element 를 Target Element 아래에 append 한다.
 *
 * @param {Element|String} srcElement Element 또는 ID
 * @param {Element|String} targetElement Element 또는 ID
 * @return {Element} Source Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.appendChild = function (srcElement, targetElement) {
    var srcRElement = this._getREleById(OG.Util.isElement(srcElement) ? srcElement.id : srcElement),
        targetRElement = this._getREleById(OG.Util.isElement(targetElement) ? targetElement.id : targetElement);

    targetRElement.appendChild(srcRElement);

    return srcRElement;
};

/**
 * Source Element 를 Target Element 이후에 insert 한다.
 *
 * @param {Element|String} srcElement Element 또는 ID
 * @param {Element|String} targetElement Element 또는 ID
 * @return {Element} Source Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.insertAfter = function (srcElement, targetElement) {
    var srcRElement = this._getREleById(OG.Util.isElement(srcElement) ? srcElement.id : srcElement),
        targetRElement = this._getREleById(OG.Util.isElement(targetElement) ? targetElement.id : targetElement);

    srcRElement.insertAfter(targetRElement);

    return srcRElement;
};

/**
 * Source Element 를 Target Element 이전에 insert 한다.
 *
 * @param {Element|String} srcElement Element 또는 ID
 * @param {Element|String} targetElement Element 또는 ID
 * @return {Element} Source Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.insertBefore = function (srcElement, targetElement) {
    var srcRElement = this._getREleById(OG.Util.isElement(srcElement) ? srcElement.id : srcElement),
        targetRElement = this._getREleById(OG.Util.isElement(targetElement) ? targetElement.id : targetElement);

    srcRElement.insertBefore(targetRElement);

    return srcRElement;
};

/**
 * 해당 Element 를 가로, 세로 Offset 만큼 이동한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Number[]} offset [가로, 세로]
 * @param {String[]} excludeEdgeId redraw 제외할 Edge ID
 * @return {Element} Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.move = function (element, offset, excludeEdgeId) {
    var me = this, rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        type = rElement ? rElement.node.getAttribute("_type") : null,
        geometry;

    this.removeCollapseGuide(element);
    if (rElement && type) {
        $(rElement.node).children("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_shape=EDGE]").each(function (idx, item) {
            // recursive
            me.move(item, offset, excludeEdgeId);
        });
        $(rElement.node).children("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_shape!=EDGE]").each(function (idx, item) {
            // recursive
            me.move(item, offset, excludeEdgeId);
        });

        if (type !== OG.Constants.NODE_TYPE.ROOT && rElement.node.shape) {
            geometry = rElement.node.shape.geom;
            geometry.move(offset[0], offset[1]);

            this.redrawShape(rElement.node, excludeEdgeId);

            // moveShape event fire
            rElement.node.shape.onMoveShape(offset);
            $(this._PAPER.canvas).trigger('moveShape', [rElement.node, offset]);

            return rElement.node;
        } else {
            return element;
        }
    } else if (rElement) {
        rElement.transform("...t" + offset[0] + "," + offset[1]);

        // moveShape event fire
        rElement.node.shape.onMoveShape(offset);
        $(this._PAPER.canvas).trigger('moveShape', [rElement.node, offset]);

        return rElement.node;
    }

    return null;
};

/**
 * 주어진 중심좌표로 해당 Element 를 이동한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Number[]} position [x, y]
 * @return {Element} Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.moveCentroid = function (element, position) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        geometry = rElement ? rElement.node.shape.geom : null,
        bBox, center = {};

    if (rElement && geometry) {
        center = geometry.getCentroid();

        return this.move(element, [position[0] - center.x, position[1] - center.y]);
    } else if (rElement) {
        bBox = rElement.getBBox();
        center.x = bBox.x + OG.Util.round(bBox.width / 2);
        center.y = bBox.y + OG.Util.round(bBox.height / 2);

        return this.move(element, [position[0] - center.x, position[1] - center.y]);
    }
    this.removeCollapseGuide(element);

    return null;
};

/**
 * 중심 좌표를 기준으로 주어진 각도 만큼 회전한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Number} angle 각도
 * @return {Element} Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.rotate = function (element, angle) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        type = rElement ? rElement.node.getAttribute("_shape") : null,
        geometry = rElement ? rElement.node.shape.geom : null,
        shape, envelope, center, width, height;

    if (rElement && type && geometry) {
        if (type === OG.Constants.SHAPE_TYPE.IMAGE ||
            type === OG.Constants.SHAPE_TYPE.TEXT ||
            type === OG.Constants.SHAPE_TYPE.HTML) {
            shape = rElement.node.shape.clone();
            envelope = geometry.getBoundary();
            center = envelope.getCentroid();
            width = envelope.getWidth();
            height = envelope.getHeight();

            this.drawShape([center.x, center.y], shape, [width, height, angle], rElement.node.shapeStyle, rElement.node.id);
        } else {
            if (rElement.node.shape.angle) {
                geometry.rotate(-1 * rElement.node.shape.angle);
            }
            geometry.rotate(angle);
            rElement.node.shape.angle = angle;

            this.redrawShape(rElement.node);
        }

        // rotateShape event fire
        rElement.node.shape.onRotateShape(angle);
        $(this._PAPER.canvas).trigger('rotateShape', [rElement.node, angle]);

        return rElement.node;
    } else if (rElement) {
        rElement.rotate(angle);

        // rotateShape event fire
        rElement.node.shape.onRotateShape(angle);
        $(this._PAPER.canvas).trigger('rotateShape', [rElement.node, angle]);

        return rElement.node;
    }

    return null;
};

/**
 * 상, 하, 좌, 우 외곽선을 이동한 만큼 리사이즈 한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Number[]} offset [상, 하, 좌, 우] 각 방향으로 + 값
 * @param preventEvent
 * @return {Element} Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.resize = function (element, offset, preventEvent) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        type = rElement ? rElement.node.getAttribute("_shape") : null,
        geometry = rElement ? rElement.node.shape.geom : null,
        bBox, offsetX, offsetY, width, height, hRate, vRate;

    this.removeCollapseGuide(element);

    if (rElement && type && geometry) {
        geometry.resize(offset[0], offset[1], offset[2], offset[3]);

        this.redrawShape(rElement.node);

        // resizeShape event fire
        if (!preventEvent) {
            rElement.node.shape.onResize(offset);
            $(this._PAPER.canvas).trigger('resizeShape', [rElement.node, offset]);
        }

        return rElement.node;
    } else if (rElement) {
        bBox = rElement.getBBox();

        offsetX = offset[2] + offset[3];
        offsetY = offset[0] + offset[1];
        width = bBox.width + offsetX;
        height = bBox.height + offsetY;
        hRate = bBox.width === 0 ? 1 : width / bBox.width;
        vRate = bBox.height === 0 ? 1 : height / bBox.height;

        rElement.transform("...t" + (-1 * offset[2]) + "," + (-1 * offset[0]));
        rElement.transform("...s" + hRate + "," + vRate + "," + bBox.x + "," + bBox.y);

        // resizeShape event fire
        if (!preventEvent) {
            rElement.node.shape.onResize(offset);
            $(this._PAPER.canvas).trigger('resizeShape', [rElement.node, offset]);
        }

        return rElement.node;
    }

    return null;
};

/**
 * 중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Number[]} size [Width, Height]
 * @param preventEvent
 * @return {Element} Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.resizeBox = function (element, size, preventEvent) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        geometry = rElement ? rElement.node.shape.geom : null,
        boundary, bBox, offsetWidth, offsetHeight;

    this.removeCollapseGuide(element);
    if (rElement && geometry) {
        boundary = geometry.getBoundary();
        offsetWidth = OG.Util.round((size[0] - boundary.getWidth()) / 2);
        offsetHeight = OG.Util.round((size[1] - boundary.getHeight()) / 2);

        return this.resize(element, [offsetHeight, offsetHeight, offsetWidth, offsetWidth], preventEvent);
    } else if (rElement) {
        bBox = rElement.getBBox();
        offsetWidth = OG.Util.round((size[0] - bBox.width) / 2);
        offsetHeight = OG.Util.round((size[1] - bBox.height) / 2);

        return this.resize(element, [offsetHeight, offsetHeight, offsetWidth, offsetWidth], preventEvent);
    }

    return null;
};

/**
 * 노드 Element 를 복사한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @return {Element} Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.clone = function (element) {
    // TODO : 오류 - group 인 경우 clone 처리 필요
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element), newElement;
    newElement = rElement.clone();
    this._add(newElement);
    this._ROOT_GROUP.node.appendChild(newElement.node);

    return newElement.node;
};

/**
 * ID로 Node Element 를 반환한다.
 *
 * @param {String} id
 * @return {Element} Element
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.getElementById = function (id) {
    var rElement = this._getREleById(id);
    return rElement ? rElement.node : null;
};

/**
 * 해당 엘리먼트의 BoundingBox 영역 정보를 반환한다.
 *
 * @param {Element|String} element
 * @return {Object} {width, height, x, y, x2, y2}
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.getBBox = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    return rElement.getBBox();
};

/**
 * 부모노드기준으로 캔버스 루트 엘리먼트의 BoundingBox 영역 정보를 반환한다.
 *
 * @return {Object} {width, height, x, y, x2, y2}
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.getRootBBox = function () {
    var container = this._PAPER.canvas.parentNode,
        width = OG.Util.isFirefox() ? this._PAPER.canvas.width.baseVal.value : this._PAPER.canvas.scrollWidth,
        height = OG.Util.isFirefox() ? this._PAPER.canvas.height.baseVal.value : this._PAPER.canvas.scrollHeight,
        x = container.offsetLeft,
        y = container.offsetTop;

    return {
        width: width,
        height: height,
        x: x,
        y: y,
        x2: x + width,
        y2: y + height
    };
};

/**
 * 캔버스의 컨테이너 DOM element 를 반환한다.
 *
 * @return {Element} 컨테이너
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.getContainer = function () {
    return this._PAPER.canvas.parentNode;
};

/**
 * SVG 인지 여부를 반환한다.
 *
 * @return {Boolean} svg 여부
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.isSVG = function () {
    return Raphael.svg;
};

/**
 * VML 인지 여부를 반환한다.
 *
 * @return {Boolean} vml 여부
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.isVML = function () {
    return Raphael.vml;
};

/**
 * Node 엘리먼트의 커넥트 가이드 영역 엘리먼트를 반환한다.
 *
 * @param {Element} Element 엘리먼트
 * @return {Array} Array Element
 */
OG.renderer.RaphaelRenderer.prototype.getConnectGuideElements = function (element) {
    var childNodes, i, connectGuideElements = [];
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement) {
        childNodes = rElement.node.childNodes;
        for (i = childNodes.length - 1; i >= 0; i--) {
            if ($('#' + childNodes[i].id) && $('#' + childNodes[i].id).attr('name') == OG.Constants.CONNECT_GUIDE_EVENT_AREA.NAME) {
                connectGuideElements.push(childNodes[i]);
            }
        }
    }
    return connectGuideElements;
};

/**
 * Node 엘리먼트의 커넥트 가이드 영역을 제외한 엘리먼트를 반환한다.
 *
 * @param {Element} Element 엘리먼트
 * @return {Array} Array Element
 */
OG.renderer.RaphaelRenderer.prototype.getNotConnectGuideElements = function (element) {
    var childNodes, i, notConnectGuideElements = [];
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (rElement) {
        childNodes = rElement.node.childNodes;
        for (i = childNodes.length - 1; i >= 0; i--) {
            if ($('#' + childNodes[i].id) && $('#' + childNodes[i].id).attr('name') !== OG.Constants.CONNECT_GUIDE_EVENT_AREA.NAME) {
                notConnectGuideElements.push(childNodes[i]);
            }
        }
    }
    return notConnectGuideElements;
};


OG.renderer.RaphaelRenderer.prototype.drawConnectGuide = function (element) {
    var me = this, rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        geometry = rElement ? rElement.node.shape.geom : null,
        envelope,
        guide,
        _connectBoxRect,
        _upperLeft,
        vertualBoundary,
        _size = me._CONFIG.GUIDE_RECT_SIZE;

    var spotCircleStyle = me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_SPOT_CIRCLE;
    var spotRectStyle = me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_SPOT_RECT;

    var drawEdgeSpot = function () {
        var vertices = geometry.getVertices();
        var spots = [];

        //변곡점 스팟
        for (var i = 0, leni = vertices.length; i < leni; i++) {
            var spot = me._PAPER.circle(vertices[i].x, vertices[i].y, spotCircleStyle.r);
            spot.attr(spotCircleStyle);
            me._add(spot);
            rElement.appendChild(spot);
            $(spot.node).data('index', i);
            $(spot.node).data('vertice', vertices[i]);
            $(spot.node).data('parent', rElement);
            $(spot.node).data('type', OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE);
            $(spot.node).attr('name', OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT);
            me.toFront(spot);
            spots.push(spot.node);
        }
        //직각이동 스팟
        $.each(vertices, function (index, vertice) {
            if (index > 0) {
                var isRightAngle = geometry.isRightAngleBetweenPoints(vertices[index - 1], vertices[index]);
                if (isRightAngle.flag) {
                    var middleSpotPoint = {
                        x: (vertices[index - 1].x + vertices[index].x) / 2,
                        y: (vertices[index - 1].y + vertices[index].y) / 2
                    }
                    if (isRightAngle.type === 'vertical') {
                        var lineLenght = vertices[index - 1].y - vertices[index].y;
                        if (Math.abs(lineLenght) < 50) {
                            return;
                        }

                        var width = spotRectStyle.w;
                        var height = spotRectStyle.h;
                        vertualBoundary = {
                            x: middleSpotPoint.x - (height / 2),
                            y: middleSpotPoint.y - (width / 2),
                            width: height,
                            height: width
                        };
                        spotRectStyle.cursor = 'ew-resize';
                    } else {
                        var lineLenght = vertices[index - 1].x - vertices[index].x;
                        if (Math.abs(lineLenght) < 50) {
                            return;
                        }

                        var width = spotRectStyle.w;
                        var height = spotRectStyle.h;
                        vertualBoundary = {
                            x: middleSpotPoint.x - (width / 2),
                            y: middleSpotPoint.y - (height / 2),
                            width: width,
                            height: height
                        }
                        spotRectStyle.cursor = 'ns-resize';
                    }

                    var spot = me._PAPER.rect(vertualBoundary.x, vertualBoundary.y, vertualBoundary.width, vertualBoundary.height);
                    spot.attr(spotRectStyle);
                    me._add(spot);
                    rElement.appendChild(spot);
                    $(spot.node).data('prev', index - 1);
                    $(spot.node).data('next', index);
                    $(spot.node).data('parent', rElement);
                    $(spot.node).data('vertice', middleSpotPoint);
                    $(spot.node).attr('name', OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT);
                    $(spot.node).data('type', OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_RECT);
                    $(spot.node).data('direction', isRightAngle.type);
                    me.toFront(spot);
                    spots.push(spot.node);
                }
            }
        });

        return spots;
    };

    // 스팟이 이미 존재하는 경우에는 가이드만 새로 만든다.
    if (me.getSpots(element).length > 0) {
        return null;
    }

    // 선택할수 없는 엘리먼트일경우 패스.
    if (!me._CANVAS._HANDLER._isSelectable(element.shape)) {
        return null;
    }

    if (rElement && geometry) {
        envelope = geometry.getBoundary();
        _upperLeft = envelope.getUpperLeft();

        var expendBoundary = {
            x: _upperLeft.x - me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_BBOX_EXPEND,
            y: _upperLeft.y - me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_BBOX_EXPEND,
            width: envelope.getWidth() + me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_BBOX_EXPEND * 2,
            height: envelope.getHeight() + me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_BBOX_EXPEND * 2
        };

        this._remove(this._getREleById(rElement.id + OG.Constants.CONNECT_GUIDE_SUFFIX.BBOX));
        _connectBoxRect = this._PAPER.rect(expendBoundary.x, expendBoundary.y, expendBoundary.width, expendBoundary.height);
        _connectBoxRect.attr(me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_BBOX);
        this._add(_connectBoxRect, rElement.id + OG.Constants.CONNECT_GUIDE_SUFFIX.BBOX);

        if ($(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE) {
            var spots = drawEdgeSpot();
            // guide 정의
            guide = {
                bBox: _connectBoxRect.node,
                spots: spots
            };
        } else {
            // guide 정의
            guide = {
                bBox: _connectBoxRect.node
            };
        }
        // layer 위치 조정
        _connectBoxRect.insertBefore(rElement);

        return guide;
    }
    return null;
};


/**
 * ID에 해당하는 Element 의 Connect Guide 를 제거한다.
 *
 * @param {Element|String} element Element 또는 ID
 */
OG.renderer.RaphaelRenderer.prototype.removeConnectGuide = function (element) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return;
    }
    var bBox = me._getREleById(rElement.id + OG.Constants.CONNECT_GUIDE_SUFFIX.BBOX);
    $(me.getSpots(element)).each(function (index, spot) {
        me._remove(me._getREleById(spot.id));
    })
    me._remove(bBox);
};

/**
 * 캔버스의 모든 Connect Guide 를 제거한다.
 *
 */
OG.renderer.RaphaelRenderer.prototype.removeAllConnectGuide = function () {

    var me = this;
    $(me.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "]").each(function (index, item) {
        if (OG.Util.isElement(item) && item.id) {
            me.removeConnectGuide(item);
            me.removeVirtualSpot(item);
        }
    });
};

/**
 * ID에 해당하는 Element 이외의 모든 Connect Guide 를 제거한다.
 *
 * @param {Element|String} element Element 또는 ID
 */
OG.renderer.RaphaelRenderer.prototype.removeOtherConnectGuide = function (element) {

    var me = this;
    $(me.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "]").each(function (index, item) {
        if (OG.Util.isElement(item) && item.id && element.id !== item.id) {
            me.removeConnectGuide(item);
            me.removeVirtualSpot(item);
        }
    });
};


/**
 * Element 내부의 Spot 들을 반환한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @return {Array} Spot Element Array
 */
OG.renderer.RaphaelRenderer.prototype.getSpots = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        list = [];

    if (rElement) {
        $('#' + rElement.id).find('[name=' + OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT + ']').each(function (index, spot) {
            list.push(spot);
        });
    }
    return list;
}

/**
 * Element 내부의 변곡점 Spot 들만 반환한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @return {Array} Spot Element Array
 */
OG.renderer.RaphaelRenderer.prototype.getCircleSpots = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        list = [];

    if (rElement) {
        $('#' + rElement.id).find('[name=' + OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT + ']').each(function (index, spot) {
            if ($(spot).data('type') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE) {
                list.push(spot);
            }
        });
    }
    return list;
}


/**
 * 주어진 좌표와 가장 Edge Element의 가장 가까운 거리에 가상 변곡점 스팟을 생성한다.
 *
 * @param {Number} x 이벤트의 캔버스 기준 x 좌표
 * @param {Number} x 이벤트의 캔버스 기준 y 좌표
 * @param {Element|String} element Element 또는 ID
 * @return {Element} Spot Element
 */
OG.renderer.RaphaelRenderer.prototype.createVirtualSpot = function (x, y, element) {
    var me = this, rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        geometry = rElement ? rElement.node.shape.geom : null,
        vertices,
        minDistanceLine = [],
        minDistance = 0,
        minDistanceIndex = [],
        spots,
        enableDrawDistance,
        coordinate,
        spotCircleStyle,
        virtualSpot


    //기존 가상스팟은 삭제한다.
    me.removeVirtualSpot(element);

    //엣지가 아닐경우 스킵
    if ($(element).attr("_shape") !== OG.Constants.SHAPE_TYPE.EDGE) {
        return null;
    }

    if (rElement && geometry) {
        vertices = geometry.getVertices();
        minDistanceLine = [];
        minDistanceIndex = [];
        minDistance = 0;
        $.each(vertices, function (index, vertice) {
            if (index > 0) {
                var distance = geometry.distanceToLine([x, y], [vertices[index - 1], vertices[index]]);
                if (index == 1) {
                    minDistance = distance;
                    minDistanceLine = [vertices[index - 1], vertices[index]];
                    minDistanceIndex = [index - 1, index];
                } else {
                    if (distance < minDistance) {
                        minDistance = distance;
                        minDistanceLine = [vertices[index - 1], vertices[index]];
                        minDistanceIndex = [index - 1, index];
                    }
                }
            }
        });

        coordinate = geometry.intersectPointToLine([x, y], minDistanceLine);

        spotCircleStyle = me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_SPOT_CIRCLE;

        //가상 변곡점 스팟의 생성조건
        //조건1 : 가상 스팟 생성시 고정 스팟의 바운더리 영역과 겹치지 않아야 한다.

        //구현계산:
        //가상점의 중심과 고정스팟의 중심의 거리가,
        //고정스팟이 원일경우 : 고정스팟 반지름 + 가상스팟 반지름보다 커야 생성가능하다.
        //고정스팟이 사각형일경우 : 고정스팟의 긴 변 + 가상스팟 반지름보다 커야 생성가능하다.
        spots = me.getSpots(element);
        enableDrawDistance = true;
        $.each(spots, function (index, spot) {
            var type = $(spot).data('type');
            var center = $(spot).data('vertice');

            var coordinateToSpotDistance =
                Math.sqrt(
                    Math.pow((coordinate.x - center.x), 2) + Math.pow((coordinate.y - center.y), 2)
                );

            if (type === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE) {
                var preventArea = spotCircleStyle.r +
                    parseInt($(spot).attr('r'));
                if (preventArea >= coordinateToSpotDistance) {
                    enableDrawDistance = false;
                }
            }
            if (type === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_RECT) {
                var longSide = $(spot).attr('width');
                if ($(spot).attr('height') > $(spot).attr('width')) {
                    longSide = $(spot).attr('height');
                }
                var preventArea = spotCircleStyle.r +
                    parseInt(longSide);
                if (preventArea >= coordinateToSpotDistance) {
                    enableDrawDistance = false;
                }
            }
        })
        if (!enableDrawDistance) {
            return null;
        }

        virtualSpot = me._PAPER.circle(coordinate.x, coordinate.y, spotCircleStyle.r);
        virtualSpot.attr(spotCircleStyle);
        me._add(virtualSpot);
        rElement.appendChild(virtualSpot);

        $(virtualSpot.node).data('prev', minDistanceIndex[0]);
        $(virtualSpot.node).data('next', minDistanceIndex[1]);
        $(virtualSpot.node).data('vertice', coordinate);
        $(virtualSpot.node).data('parent', rElement);
        $(virtualSpot.node).data('type', OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE);
        $(virtualSpot.node).attr('name', OG.Constants.CONNECT_GUIDE_SUFFIX.VIRTUAL_SPOT);
        me.toFront(virtualSpot);
        return virtualSpot.node;
    }
    return null;
}

/**
 * Element 내부의 가상 변곡점 스팟을 반환한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @return {Element} Spot Element
 */
OG.renderer.RaphaelRenderer.prototype.getVirtualSpot = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        id, spot;

    if (rElement) {
        spot = $('#' + rElement.id).find('[name=' + OG.Constants.CONNECT_GUIDE_SUFFIX.VIRTUAL_SPOT + ']');
        id = spot.attr('id');
    }
    return this.getElementById(id);
}

/**
 * Element 내부의 가상 변곡점 스팟을 삭제한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @return {Element} Spot Element
 */
OG.renderer.RaphaelRenderer.prototype.removeVirtualSpot = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        id, spot;

    if (rElement) {
        spot = $('#' + rElement.id).find('[name=' + OG.Constants.CONNECT_GUIDE_SUFFIX.VIRTUAL_SPOT + ']');
        id = spot.attr('id');
    }
    return this.remove(id);
}

/**
 * Element 내부의 Spot 중 선택한 스팟을 제외하고 모두 삭제하고, 가이드라인도 삭제한다.
 *
 * @param {Element|String} 선택한 spot Element 또는 ID
 */
OG.renderer.RaphaelRenderer.prototype.selectSpot = function (spot) {
    var me = this;
    var spotRElement = this._getREleById(OG.Util.isElement(spot) ? spot.id : spot);
    if (spotRElement) {
        var parentRElement = $(spotRElement.node).data('parent');

        this._remove(this._getREleById(parentRElement.id + OG.Constants.CONNECT_GUIDE_SUFFIX.BBOX));

        $(me.getSpots(parentRElement.node)).each(function (index, _spot) {
            if (_spot.id !== spotRElement.node.id) {
                me.remove(_spot);
            }
        });
    }
};

/**
 * Edge의 하위 엘리먼트들을 제거한다.
 *
 * @param {Raphael.Element} rElement 라파엘 엘리먼트
 * @private
 */
OG.renderer.RaphaelRenderer.prototype._removeEdgeChild = function (rElement) {
    var childNodes, i;
    if (rElement) {
        childNodes = rElement.node.childNodes;
        for (i = childNodes.length - 1; i >= 0; i--) {
            //스팟은 삭제하지 않는다.
            var skipRemove = false;
            if ($(childNodes[i]).attr('name') === OG.Constants.CONNECT_GUIDE_SUFFIX.VIRTUAL_SPOT) {
                skipRemove = true;
            }
            if ($(childNodes[i]).attr('name') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT) {
                skipRemove = true;
            }
            if (!skipRemove) {
                this._remove(this._getREleById(childNodes[i].id));
            }
        }
    }
};

/**
 * 하위 엘리먼트들을 반환한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @return {Array} Array Element
 */
OG.renderer.RaphaelRenderer.prototype.getChildNodes = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    var childNodes, i;
    if (rElement) {
        childNodes = rElement.node.childNodes;
    }
    if (!childNodes) {
        return [];
    } else {
        return childNodes;
    }
};

/**
 * Edge Element 내부의 패스중 나열된 두 꼭지점이 매우 짧은 선일 경우 하나의 꼭지점으로 정리한다.
 * Edge Element 내부의 패스중 나열된 세 꼭지점이 평행에 가까울 경우 하나의 선분으로 정리한다.
 *
 * @param {Element|String} element Element 또는 ID
 */
OG.renderer.RaphaelRenderer.prototype.trimEdge = function (element) {
    var me = this, rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        geometry = rElement ? rElement.node.shape.geom : null;

    var vertices = geometry.getVertices();
    var orgVerticesLength = vertices.length;

    //Edge Element 내부의 패스중 나열된 세 꼭지점이 평행에 가까울 경우 하나의 선분으로 정리한다.
    for (var i = vertices.length; i--;) {
        if (i < vertices.length - 1 && vertices[i - 1]) {
            var angleBetweenThreePoints =
                geometry.angleBetweenThreePoints(vertices[i + 1], vertices[i], vertices[i - 1]);

            if (vertices[i + 1].x === vertices[i].x && vertices[i + 1].y === vertices[i].y) {
                vertices.splice(i, 1);
            }
            else if (vertices[i].x === vertices[i - 1].x && vertices[i].y === vertices[i - 1].y) {
                vertices.splice(i, 1);
            }

            else if (angleBetweenThreePoints >= me._CONFIG.TRIM_EDGE_ANGLE_SIZE) {
                vertices.splice(i, 1);
            }
        }
    }
    if (orgVerticesLength !== vertices.length) {
        element.shape.geom.setVertices(vertices);
        element = me.drawEdge(new OG.PolyLine(vertices), element.shape.geom.style, element.id);
        me.drawLabel(element);
        me.drawEdgeLabel(element, null, 'FROM');
        me.drawEdgeLabel(element, null, 'TO');
    }
}

/**
 * Edge Element의 연결 정보가 있을 경우 연결대상과 꼭지점의 다중 중복을 정리한다.
 * 다중 중복 정리 후 Edge 의 모양이 직선인 경우 새로운 plain 을 제작한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @return {Element} element
 */
OG.renderer.RaphaelRenderer.prototype.trimConnectInnerVertice = function (element) {
    var me = this, rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        geometry = rElement ? rElement.node.shape.geom : null,
        from, to, fromShape, toShape, fromXY, toXY;

    var vertices = geometry.getVertices();
    from = $(element).attr("_from");
    to = $(element).attr("_to");

    if (from) {
        fromShape = this._getShapeFromTerminal(from);
        fromXY = this._getPositionFromTerminal(from);
    }

    if (to) {
        toShape = this._getShapeFromTerminal(to);
        toXY = this._getPositionFromTerminal(to);
    }

    //Edge Element의 연결 정보가 있을 경우 연결대상과 꼭지점의 다중 중복을 정리한다.
    var startVertice;
    var startVerticeIdx;
    var firstExternalVertice;
    var firstExternalVerticeIdx;
    var lastExcludeVertice;
    var lastExcludeVerticeIdx;
    var caculateExternalVerticeLine = function () {
        if (firstExternalVertice) {
            if (firstExternalVerticeIdx > 0 && firstExternalVerticeIdx < vertices.length - 1) {
                var angleBetweenPoints = geometry.isRightAngleBetweenPoints(firstExternalVertice, lastExcludeVertice);
                if (angleBetweenPoints.flag) {
                    if (angleBetweenPoints.type === 'horizontal') {
                        vertices[firstExternalVerticeIdx].y = vertices[startVerticeIdx].y;
                    }
                    if (angleBetweenPoints.type === 'vertical') {
                        vertices[firstExternalVerticeIdx].x = vertices[startVerticeIdx].x;
                    }
                }
            }
            if (startVerticeIdx === 0) {
                vertices.splice(startVerticeIdx + 1, firstExternalVerticeIdx - (startVerticeIdx + 1));
            }
            if (startVerticeIdx === vertices.length - 1) {
                vertices.splice(firstExternalVerticeIdx + 1, startVerticeIdx - (firstExternalVerticeIdx + 1));
            }
        }
    }
    if (fromShape) {
        for (var i = 0, leni = vertices.length; i < leni; i++) {
            if (i == 0) {
                startVertice = vertices[i];
                startVerticeIdx = i;
                continue;
            }
            var containsPoint = fromShape.shape.geom.isContainsPoint(vertices[i]);
            if (containsPoint) {
                if (i == (vertices.length - 1)) {
                    firstExternalVertice = vertices[i];
                    firstExternalVerticeIdx = i;
                    lastExcludeVertice = vertices[i - 1];
                    lastExcludeVerticeIdx = i - 1;
                } else {
                    firstExternalVertice = vertices[i + 1];
                    firstExternalVerticeIdx = i + 1;
                    lastExcludeVertice = vertices[i];
                    lastExcludeVerticeIdx = i;
                }
            }
        }
        caculateExternalVerticeLine();
        startVertice = null;
        startVerticeIdx = null;
        firstExternalVertice = null;
        firstExternalVerticeIdx = null;
        lastExcludeVertice = null;
        lastExcludeVerticeIdx = null;
    }
    if (toShape) {
        for (var i = vertices.length - 1; i >= 0; i--) {
            if (i == vertices.length - 1) {
                startVertice = vertices[i];
                startVerticeIdx = i;
                continue;
            }
            var containsPoint = toShape.shape.geom.isContainsPoint(vertices[i]);
            if (containsPoint) {
                if (i == 0) {
                    firstExternalVertice = vertices[i];
                    firstExternalVerticeIdx = i;
                    lastExcludeVertice = vertices[i + 1];
                    lastExcludeVerticeIdx = i + 1;
                } else {
                    firstExternalVertice = vertices[i - 1];
                    firstExternalVerticeIdx = i - 1;
                    lastExcludeVertice = vertices[i];
                    lastExcludeVerticeIdx = i;
                }
            }
        }
        caculateExternalVerticeLine();
    }

    //다중 중복 정리 후 Edge 의 모양이 직선인 경우 새로운 plain 을 제작한다.
    if (vertices.length === 2) {
        element = me.drawEdge(new OG.Line(vertices[0], vertices[1]), element.shape.geom.style, element.id);
        element = me.trimEdgeDirection(element, fromShape, toShape);
    } else {
        element.shape.geom.setVertices(vertices);
        element = me.drawEdge(new OG.PolyLine(vertices), element.shape.geom.style, element.id);
    }

    me.drawLabel(element);
    me.drawEdgeLabel(element, null, 'FROM');
    me.drawEdgeLabel(element, null, 'TO');

    return element;
}

/**
 * Edge Element의 연결 정보가 있을 경우 선분과 연결대상의 연결점을 자연스럽게 한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @return {Element} element
 */
OG.renderer.RaphaelRenderer.prototype.trimConnectIntersection = function (element) {
    var me = this, rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        geometry = rElement ? rElement.node.shape.geom : null,
        from, to, fromShape, toShape, fromXY, toXY, shortestIntersection;

    var vertices = geometry.getVertices();
    from = $(element).attr("_from");
    to = $(element).attr("_to");

    if (from) {
        fromShape = this._getShapeFromTerminal(from);
        fromXY = this._getPositionFromTerminal(from);
    }

    if (to) {
        toShape = this._getShapeFromTerminal(to);
        toXY = this._getPositionFromTerminal(to);
    }
    //Edge Element의 연결 정보가 있을 경우 선분과 연결대상의 연결점을 자연스럽게 한다.
    if (from) {
        shortestIntersection =
            fromShape.shape.geom.shortestIntersectToLine([vertices[1], [fromXY.x, fromXY.y]]);

        if (shortestIntersection) {
            vertices[0].x = shortestIntersection.x
            vertices[0].y = shortestIntersection.y
        } else {
            vertices[0].x = fromXY.x
            vertices[0].y = fromXY.y
        }
    }

    if (to) {
        shortestIntersection =
            toShape.shape.geom.shortestIntersectToLine([vertices[vertices.length - 2], [toXY.x, toXY.y]]);

        if (shortestIntersection) {
            vertices[vertices.length - 1].x = shortestIntersection.x
            vertices[vertices.length - 1].y = shortestIntersection.y
        } else {
            vertices[vertices.length - 1].x = toXY.x
            vertices[vertices.length - 1].y = toXY.y
        }
    }

    element.shape.geom.setVertices(vertices);
    element = me.drawEdge(new OG.PolyLine(vertices), element.shape.geom.style, element.id);
    me.drawLabel(element);
    me.drawEdgeLabel(element, null, 'FROM');
    me.drawEdgeLabel(element, null, 'TO');

    return element;
}

/**
 * ID에 해당하는 Element 의 바운더리 영역을 리턴한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @return {OG.geometry.Envelope} Envelope 영역
 */
OG.renderer.RaphaelRenderer.prototype.getBoundary = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element),
        envelope;

    if (rElement && rElement.node && rElement.node.shape && rElement.node.shape.geom) {
        envelope = rElement.node.shape.geom.getBoundary();
    }

    return envelope;
};

/**
 * Element 에 하이라이트 속성을 부여한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Object} highlight HIGHLIGHT 속성 집합.
 */
OG.renderer.RaphaelRenderer.prototype.setHighlight = function (element, highlight) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    var me = this;
    if (rElement) {
        element = rElement.node;
        var childNodes = me.getNotConnectGuideElements(element);
        $.each(childNodes, function (idx, childNode) {
            var orgAttrGroup = {};
            for (var key in highlight) {
                var orgAttr = me.getAttr(childNode, key);
                if (orgAttr) {
                    orgAttrGroup[key] = orgAttr;
                }
            }
            $(childNode).data('orgAttrGroup', orgAttrGroup);
            me.setAttr(childNode, highlight);
        });
    }
}

/**
 * Element 에 하이라이트 속성을 제거한다.
 *
 * @param {Element|String} element Element 또는 ID
 * @param {Object} highlight HIGHLIGHT 속성 집합.
 */
OG.renderer.RaphaelRenderer.prototype.removeHighlight = function (element, highlight) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    var me = this;
    if (rElement) {
        element = rElement.node;
        var childNodes = me.getNotConnectGuideElements(element);
        $.each(childNodes, function (idx, childNode) {
            var orgAttrGroup = $(childNode).data('orgAttrGroup');
            if (!orgAttrGroup) {
                return;
            }
            for (var key in highlight) {
                var orgAttr = orgAttrGroup[key];
                if (!orgAttr) {
                    orgAttrGroup[key] = null;
                }
            }
            $(childNode).removeData('orgAttrGroup');
            me.setAttr(childNode, orgAttrGroup);
        });
    }
}

/**
 * 터미널 문자열을 생성한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @param {Array} point 연결 좌표정보 [x,y]
 *
 * @return {String} terminal 터미널 문자열
 */
OG.renderer.RaphaelRenderer.prototype.createTerminalString = function (element, point) {

    var terminal;
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);

    if (rElement) {
        var percentageDistance = rElement.node.shape.geom.getPercentageDistanceFromPoint(point);
        if (percentageDistance) {
            terminal = rElement.node.id + OG.Constants.TERMINAL + '_' + percentageDistance.px + '_' + percentageDistance.py;
        }
    }
    return terminal;
}

/**
 * 디폴트 터미널 문자열을 생성한다.
 *
 * @param {Element|String} Element Element 또는 ID
 *
 * @return {String} terminal 터미널 문자열
 */
OG.renderer.RaphaelRenderer.prototype.createDefaultTerminalString = function (element) {

    var terminal;
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);

    if (rElement) {
        var percentageDistance = {px: 50, py: 50};
        if (percentageDistance) {
            terminal = rElement.node.id + OG.Constants.TERMINAL + '_' + percentageDistance.px + '_' + percentageDistance.py;
        }
    }
    return terminal;
};

/**
 * 터미널로부터 부모 Shape element 로의 퍼센테이지 좌표를 반환한다.
 *
 * @param {Element|String} terminal 터미널 Element or ID
 * @return {Array} [px,py]
 * @private
 */
OG.renderer.RaphaelRenderer.prototype._getPercentageFromTerminal = function (terminal) {
    var pXpY;
    if (terminal) {
        var shapeId = terminal.substring(0, terminal.indexOf(OG.Constants.TERMINAL));
        var replace = terminal.replace(shapeId + OG.Constants.TERMINAL + '_', '');
        var split = replace.split('_');
        pXpY = [parseInt(split[0]), parseInt(split[1])]
    }
    return pXpY;
}
/**
 * 터미널로부터 좌표를 반환한다.
 *
 * @param {Element|String} terminal 터미널 Element or ID
 * @return {OG.geometry.Coordinate} 좌표
 * @private
 */
OG.renderer.RaphaelRenderer.prototype._getPositionFromTerminal = function (terminal) {
    var me = this;
    var xy, pXpY;
    var percentageDistance = {px: 50, py: 50};
    if (terminal) {
        var shapeId = terminal.substring(0, terminal.indexOf(OG.Constants.TERMINAL));
        var replace = terminal.replace(shapeId + OG.Constants.TERMINAL + '_', '');
        pXpY = replace.split('_');
        var rElement = this._getREleById(shapeId);
        if (rElement) {
            xy = rElement.node.shape.geom.getPointFromPercentageDistance(pXpY);
            if (!xy || isNaN(xy.x) || isNaN(xy.y)) {
                xy = rElement.node.shape.geom.getPointFromPercentageDistance(
                    [percentageDistance.px, percentageDistance.py]
                );
            }
            xy.x = me._CONFIG.DRAG_GRIDABLE ? OG.Util.roundGrid(xy.x, me._CONFIG.MOVE_SNAP_SIZE / 2) : xy.x;
            xy.y = me._CONFIG.DRAG_GRIDABLE ? OG.Util.roundGrid(xy.y, me._CONFIG.MOVE_SNAP_SIZE / 2) : xy.y;
        }
    }
    return xy;
}

/**
 * 캔버스의 Edge 들을 항상 최상단으로 이동시킨다.
 *
 */
OG.renderer.RaphaelRenderer.prototype.toFrontEdges = function () {
    //Edge는 항상 toFront
    var me = this;
    var root = me.getRootGroup();
    var edges = me.getAllEdges();

    for (var i = 0, leni = edges.length; i < leni; i++) {
        root.removeChild(edges[i]);
        root.appendChild(edges[i]);
    }
}

/**
 * 캔버스의 Edge 들의 가이드를 제거한다.
 */
OG.renderer.RaphaelRenderer.prototype.removeAllEdgeGuide = function () {
    var me = this;
    var edges = me.getAllEdges();
    $.each(edges, function (index, edge) {
        me.removeGuide(edge);
    })
}

/**
 * 주어진 좌표와 선택된 Element 사이에 가상 연결선을 생성한다.
 *
 * @param {Number} x 이벤트의 캔버스 기준 x 좌표
 * @param {Number} x 이벤트의 캔버스 기준 y 좌표
 * @param {Element|String} targetEle Element 또는 ID
 * @return {Element} Edge Element
 */
OG.renderer.RaphaelRenderer.prototype.createVirtualEdge = function (x, y, targetEle) {
    var me = this, rElement = this._getREleById(OG.Util.isElement(targetEle) ? targetEle.id : targetEle),
        geometry = rElement ? rElement.node.shape.geom : null,
        virtualEdge,
        virtualEdgeStyle = me._CONFIG.DEFAULT_STYLE.GUIDE_VIRTUAL_EDGE,
        root = me.getRootElement();

    //엣지 일경우 스킵
    if ($(targetEle).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE) {
        return null;
    }

    //기존 가상선은 삭제한다.
    me.removeAllVirtualEdge();

    if (rElement && geometry) {
        var boundary = me.getBoundary(targetEle);
        var width = boundary.getWidth();
        var height = boundary.getHeight();
        var upperLeft = boundary.getUpperLeft();
        var start = [Math.round(upperLeft.x + (width / 2)), Math.round(upperLeft.y + (height / 2))];
        var end = [x - 3, y - 3]

        virtualEdge = me.drawEdge(new OG.PolyLine([start, end]), virtualEdgeStyle, OG.Constants.GUIDE_SUFFIX.LINE_VIRTUAL_EDGE);

        $(virtualEdge).data('targetEle', targetEle);
        return virtualEdge;
    }
    return null;
}

/**
 * 캔버스의 가상 연결선을 업데이트한다.
 *
 * @param {Number} x 이벤트의 캔버스 기준 x 좌표
 * @param {Number} x 이벤트의 캔버스 기준 y 좌표
 */
OG.renderer.RaphaelRenderer.prototype.updateVirtualEdge = function (x, y) {
    var me = this, rElement,
        geometry,
        virtualEdge, targetEle,
        virtualEdgeStyle = me._CONFIG.DEFAULT_STYLE.GUIDE_VIRTUAL_EDGE;


    var caculateNoneEventAreaPoint = function (startP, targetP) {
        var eventProtectLength = 5;
        var _x, _y, _a, _sa;
        _a = ((startP[1] - targetP[1]) * -1) / (startP[0] - targetP[0]);
        _sa = Math.pow(_a, 2);
        _x = Math.sqrt(Math.pow(eventProtectLength, 2) / (_sa + 1));
        _y = Math.sqrt(Math.pow(eventProtectLength, 2) - Math.pow(_x, 2));

        var fixedTagetP = {
            x: targetP[0],
            y: targetP[1]
        };
        if (targetP[0] > startP[0]) {
            fixedTagetP.x = targetP[0] - _x;
        }
        if (targetP[0] < startP[0]) {
            fixedTagetP.x = targetP[0] + _x;
        }

        if (targetP[1] > startP[1]) {
            fixedTagetP.y = targetP[1] - _y;
        }
        if (targetP[1] < startP[1]) {
            fixedTagetP.y = targetP[1] + _y;
        }
        return [fixedTagetP.x, fixedTagetP.y];
    }

    virtualEdge = me.getElementById(OG.Constants.GUIDE_SUFFIX.LINE_VIRTUAL_EDGE);

    if (virtualEdge) {
        targetEle = $(virtualEdge).data('targetEle');
    }

    if (targetEle) {
        rElement = this._getREleById(OG.Util.isElement(targetEle) ? targetEle.id : targetEle);
        geometry = rElement ? rElement.node.shape.geom : null;
    }

    if (rElement && geometry) {
        var boundary = me.getBoundary(targetEle);
        var width = boundary.getWidth();
        var height = boundary.getHeight();
        var upperLeft = boundary.getUpperLeft();
        var start = [Math.round(upperLeft.x + (width / 2)), Math.round(upperLeft.y + (height / 2))];
        var end = [x, y];
        var fixedEnd = caculateNoneEventAreaPoint(start, end);

        me.drawEdge(new OG.PolyLine([start, fixedEnd]), virtualEdgeStyle, OG.Constants.GUIDE_SUFFIX.LINE_VIRTUAL_EDGE);
    }
};

/**
 * 캔버스의 가상선의 타겟 엘리먼트를 구한다.
 *
 * @param {Number} x 이벤트의 캔버스 기준 x 좌표
 * @param {Number} x 이벤트의 캔버스 기준 y 좌표
 */
OG.renderer.RaphaelRenderer.prototype.getTargetfromVirtualEdge = function () {
    var me = this, virtualEdge, targetEle;

    virtualEdge = me.getElementById(OG.Constants.GUIDE_SUFFIX.LINE_VIRTUAL_EDGE);

    if (virtualEdge) {
        targetEle = $(virtualEdge).data('targetEle');
    }

    if (targetEle) {
        return targetEle;
    }

    return null;
};

/**
 * 캔버스의 가상선을 삭제한다.
 */
OG.renderer.RaphaelRenderer.prototype.removeAllVirtualEdge = function () {
    $(this.getRootGroup()).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE, false);
    $(this.getRootGroup()).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE, false);
    return this.remove(OG.Constants.GUIDE_SUFFIX.LINE_VIRTUAL_EDGE);
};

/**
 * 캔버스의 히스토리를 초기화한다.
 *
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.initHistory = function () {
    var me = this;
    me._CONFIG.HISTORY_INDEX = 0;
    me._CONFIG.HISTORY[me._CANVAS.toJSON()];
}

/**
 * 캔버스에 히스토리를 추가한다.
 *
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.addHistory = function () {

    if (this._CONFIG.AUTO_HISTORY && !this._CONFIG.FAST_LOADING) {
        var me = this;
        var history = me._CONFIG.HISTORY;
        var historySize = me._CONFIG.HISTORY_SIZE;
        var historyIndex = me._CONFIG.HISTORY_INDEX;

        if (history.length == 0) {
            historyIndex = 0;
            history.push(me._CANVAS.toJSON());

        } else {
            if (historySize <= history.length) {
                history.splice(0, 1);
                historyIndex = historyIndex - 1;
            }
            history.splice(historyIndex + 1);
            history.push(me._CANVAS.toJSON());
            historyIndex = history.length - 1;
        }

        me._CONFIG.HISTORY = history;
        me._CONFIG.HISTORY_INDEX = historyIndex;


        //캔버스가 서버로부터 받은 데이터를 적용시키는 과정이 아닐 경우 브로드캐스트 수행.
        if (me._CANVAS.getRemotable()) {
            if (!me._CANVAS.getRemoteDuring()) {
                OG.RemoteHandler.broadCastCanvas(me._CANVAS, function (canvas) {

                });
            }
        }

        //슬라이더가 있을경우 슬라이더 업데이트
        me._CANVAS.updateSlider();
    } else if (this._CONFIG.AUTO_SLIDER_UPDATE && !this._CONFIG.FAST_LOADING) {
        this._CANVAS.updateSlider();
    }
};

/**
 * 캔버스의 Undo
 *
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.undo = function () {
    var me = this;
    var history = me._CONFIG.HISTORY;
    var historyIndex = me._CONFIG.HISTORY_INDEX;

    if (historyIndex >= 0) {
        historyIndex = historyIndex - 1;
        me._CANVAS.loadJSON(history[historyIndex]);
    }
    me._CONFIG.HISTORY_INDEX = historyIndex;
    $(this._PAPER.canvas).trigger('undo');
};

/**
 * 캔버스의 Redo
 *
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.redo = function () {
    var me = this;
    var history = me._CONFIG.HISTORY;
    var historyIndex = me._CONFIG.HISTORY_INDEX;

    if (historyIndex < history.length - 1) {
        historyIndex = historyIndex + 1;
        me._CANVAS.loadJSON(history[historyIndex]);
    }
    me._CONFIG.HISTORY_INDEX = historyIndex;
    $(this._PAPER.canvas).trigger('redo');
};

/**
 * 도형의 Lane 타입 여부를 판별한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {boolean} true false
 */
OG.renderer.RaphaelRenderer.prototype.isLane = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return false;
    }
    if (rElement.node.shape instanceof OG.shape.HorizontalLaneShape
        || rElement.node.shape instanceof OG.shape.VerticalLaneShape) {
        return true;
    }
    return false;
};

/**
 * 도형의 Pool 타입 여부를 판별한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {boolean} true false
 */
OG.renderer.RaphaelRenderer.prototype.isPool = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return false;
    }
    if (rElement.node.shape instanceof OG.shape.HorizontalPoolShape
        || rElement.node.shape instanceof OG.shape.VerticalPoolShape) {
        return true;
    }
    return false;
};
/**
 * 도형의 ScopeActivity 타입 여부를 판별한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {boolean} true false
 */
OG.renderer.RaphaelRenderer.prototype.isScopeActivity = function (element) {
    var rElement = this._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return false;
    }
    if (rElement.node.shape instanceof OG.shape.bpmn.ScopeActivity) {
        return true;
    }
    return false;
};

/**
 * 도형의 HorizontalLaneShape 타입 여부를 판별한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {boolean} true false
 */
OG.renderer.RaphaelRenderer.prototype.isHorizontalLane = function (element) {
    return element.shape instanceof OG.shape.HorizontalLaneShape;
};

/**
 * 도형의 VerticalLaneShape 타입 여부를 판별한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {boolean} true false
 */
OG.renderer.RaphaelRenderer.prototype.isVerticalLane = function (element) {
    return element.shape instanceof OG.shape.VerticalLaneShape;
};

/**
 * 도형의 HorizontalPoolShape 타입 여부를 판별한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {boolean} true false
 */
OG.renderer.RaphaelRenderer.prototype.isHorizontalPool = function (element) {
    return element.shape instanceof OG.shape.HorizontalPoolShape;
};

/**
 * 도형의 VerticalPoolShape 타입 여부를 판별한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {boolean} true false
 */
OG.renderer.RaphaelRenderer.prototype.isVerticalPool = function (element) {
    return element.shape instanceof OG.shape.VerticalPoolShape;
};

/**
 * Lane 타입 도형 하위의 Lane 타입들을 리턴한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {Array} childsLanes
 */
OG.renderer.RaphaelRenderer.prototype.getChildLane = function (element) {
    var childsLanes = [], me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return childsLanes;
    }
    element = rElement.node;
    var childs = me.getChilds(element);
    $.each(childs, function (index, child) {
        if (me.isLane(child)) {
            childsLanes.push(child);
        }
    })
    return childsLanes;
};

/**
 * Lane 타입이 내부적으로 분기가 가능한 수를 리턴한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {Number} 0,1,2
 */
OG.renderer.RaphaelRenderer.prototype.enableDivideCount = function (element) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    var geometry = rElement ? rElement.node.shape.geom : null;
    if (!rElement || !geometry) {
        return 0;
    }
    element = rElement.node;
    if (!me.isLane(element)) {
        return 0;
    }

    //하위 Lane 이 있다면 분기할 수 없다.
    if (me.getChildLane(element).length) {
        return 0;
    }

    var minSize = me._CONFIG.LANE_MIN_SIZE;
    var boundary = geometry.getBoundary();
    var height = boundary.getHeight();
    var width = boundary.getWidth();
    if (this.isHorizontalLane(element)) {
        if (height > (minSize * 3)) {
            return 2;
        }
        if (height > (minSize * 2)) {
            return 1;
        }
    }
    if (this.isVerticalLane(element)) {
        if (width > (minSize * 3)) {
            return 2;
        }
        if (width > (minSize * 2)) {
            return 1;
        }
    }
    return 0;
};

/**
 * Lane,Pool 의 타이틀 영역을 제외한 boundary 를 리턴한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @param {OG.geometry.Envelope} boundary
 */
OG.renderer.RaphaelRenderer.prototype.getExceptTitleLaneArea = function (element) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    var geometry = rElement ? rElement.node.shape.geom : null;

    if (!rElement || !geometry) {
        return null;
    }

    var boundary = geometry.getBoundary();
    var style = geometry.style.map;
    var titleSize = style['title-size'] ? style['title-size'] : 20;
    var upperLeft = boundary.getUpperLeft();
    var width = boundary.getWidth();
    var height = boundary.getHeight();
    var newUpperLeft, newWidth, newHeight;

    if (!me.isLane(element) && !me.isPool(element)) {
        return boundary;
    }

    if (me.isHorizontalLane(element) || me.isHorizontalPool(element)) {
        newUpperLeft = new OG.geometry.Coordinate(upperLeft.x + titleSize, upperLeft.y);
        newWidth = width - titleSize;
        newHeight = height;
    }

    if (me.isVerticalLane(element) || me.isVerticalPool(element)) {
        newUpperLeft = new OG.geometry.Coordinate(upperLeft.x, upperLeft.y + titleSize);
        newWidth = width;
        newHeight = height - titleSize;
    }

    if (newUpperLeft) {
        return new OG.geometry.Envelope(newUpperLeft, newWidth, newHeight);
    }

    //타이틀 라벨이 없을 경우 바운더리 리턴.
    return boundary;
};

/**
 * Lane 을 분기한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @param {String} quarterOrder 분기 명령 QUARTER_UPPER | QUARTER_LOW | QUARTER_BISECTOR | QUARTER_THIRDS
 */
OG.renderer.RaphaelRenderer.prototype.divideLane = function (element, quarterOrder) {
    var divedLanes = [];
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    var geometry = rElement ? rElement.node.shape.geom : null;
    if (!rElement || !geometry) {
        return;
    }
    element = rElement.node;

    if (!me.isLane(element)) {
        return;
    }

    var isUpper = quarterOrder === OG.Constants.GUIDE_SUFFIX.QUARTER_UPPER;
    var isLow = quarterOrder === OG.Constants.GUIDE_SUFFIX.QUARTER_LOW;
    var isBisector = quarterOrder === OG.Constants.GUIDE_SUFFIX.QUARTER_BISECTOR;
    var isThirds = quarterOrder === OG.Constants.GUIDE_SUFFIX.QUARTER_THIRDS;

    //내부 분기일경우
    //1. 내 영역에서 타이틀 영역을 뺀 것이 분기가능한 바운더리 영역이다.
    //2. 2등분 또는 3등분 만큼 새로운 lane 을 만들어 영역안에 위치시키고 부모 lane 에 인서트한다.
    if (isBisector || isThirds) {
        var quarterLength = isBisector ? 2 : 3;
        var targetArea = me.getExceptTitleLaneArea(element);
        var targetUpperLeft = targetArea.getUpperLeft();
        for (var i = 0; i < quarterLength; i++) {
            if (me.isHorizontalLane(element)) {
                var _width = parseInt(targetArea.getWidth());
                var _height = parseInt(targetArea.getHeight() / quarterLength);
                var x = targetUpperLeft.x;
                var y = targetUpperLeft.y + (_height * i);
                if (i === quarterLength - 1) {
                    _height = _height + (targetArea.getHeight() % quarterLength);
                }
                var newLane = me._CANVAS.drawShape([x + (_width / 2), y + (_height / 2)], new OG.HorizontalLaneShape(), [_width, _height], null, null, element.id, true);
                divedLanes.push(newLane);
            }

            if (me.isVerticalLane(element)) {
                var _width = parseInt(targetArea.getWidth() / quarterLength);
                var _height = parseInt(targetArea.getHeight());
                var x = targetUpperLeft.x + (_width * i);
                var y = targetUpperLeft.y;
                if (i === quarterLength - 1) {
                    _width = _width + (targetArea.getWidth() % quarterLength);
                }
                var newLane = me._CANVAS.drawShape([x + (_width / 2), y + (_height / 2)], new OG.VerticalLaneShape(), [_width, _height], null, null, element.id, true);
                divedLanes.push(newLane);
            }
            me.fitLaneOrder(element);
        }
    }

    //외부 확장일 경우
    //1.최상위 lane 일 경우
    // 1) 하위 lane 이 없으면 하위 lane 을 추가하고 기준으로 삼는다.
    // 2) 하위 lane 이 있으면 upper,low 에 따른 기준을 골라 삼는다.

    //2.최상위 lane 이 아닐경우
    // 1) 기준에서 upper, low에 따라 신규 lane 을 생성한다.
    // 2) 신규 lane 은 디폴트 규격
    // 3) 신규 lane 을 기준 대상 부모 lane 에 추가한다.
    if (isUpper || isLow) {
        var standardLane;

        //최상위 lane 일 경우
        if (me.isTopGroup(element)) {
            var childLane = me.getChildLane(element);

            //하위 lane 이 없으면 하위 lane 을 추가하고 기준으로 삼는다.
            if (!childLane.length) {
                var targetArea = me.getExceptTitleLaneArea(element);
                var targetUpperLeft = targetArea.getUpperLeft();
                var _width = targetArea.getWidth();
                var _height = targetArea.getHeight();
                var x = targetUpperLeft.x;
                var y = targetUpperLeft.y;
                var shape = me.isHorizontalLane(element) ? new OG.HorizontalLaneShape() : new OG.VerticalLaneShape();
                standardLane = me._CANVAS.drawShape([x + (_width / 2), y + (_height / 2)], shape, [_width, _height], null, null, element.id, true);
                divedLanes.push(standardLane);
            }

            //하위 lane 이 있으면 upper,low 에 따른 기준을 골라 삼는다.
            else {
                $.each(childLane, function (idx, child) {
                    if (!standardLane) {
                        standardLane = child;
                    }
                    var childUpperLeft = child.shape.geom.getBoundary().getUpperLeft();
                    var standardUpperLeft = standardLane.shape.geom.getBoundary().getUpperLeft();
                    if (me.isHorizontalLane(element) && isUpper) {
                        //y가 가장 높은것 (좌표상 작은수치)
                        if (childUpperLeft.y < standardUpperLeft.y) {
                            standardLane = child;
                        }
                    }
                    if (me.isHorizontalLane(element) && isLow) {
                        //y 가 가장 낮은것 (좌표상 높은수치)
                        if (childUpperLeft.y > standardUpperLeft.y) {
                            standardLane = child;
                        }
                    }
                    if (me.isVerticalLane(element) && isUpper) {
                        //x 가 가장 높은것
                        if (childUpperLeft.x > standardUpperLeft.x) {
                            standardLane = child;
                        }
                    }
                    if (me.isVerticalLane(element) && isLow) {
                        //x 가 가장 낮은것
                        if (childUpperLeft.x < standardUpperLeft.x) {
                            standardLane = child;
                        }
                    }
                });
            }
        } else {
            standardLane = element;
        }

        //기준이 정해졌다면, 기준에서 upper, low에 따라 신규 lane 을 생성한다.
        //확장 방향에 따라 영향을 받는 lane 들의 위치를 재조정한다.
        if (standardLane) {
            var parent = me.getParent(standardLane);
            var boundary = standardLane.shape.geom.getBoundary();
            var defaultSize = me._CONFIG.LANE_DEFAULT_SIZE;
            var _width;
            var _height;
            var shape;
            var x = boundary.getUpperLeft().x;
            var y = boundary.getUpperLeft().y;
            var moveOffset = [];

            if (me.isHorizontalLane(element)) {
                shape = new OG.HorizontalLaneShape();
                _width = boundary.getWidth();
                _height = defaultSize;
            }
            if (me.isVerticalLane(element)) {
                shape = new OG.VerticalLaneShape();
                _width = defaultSize;
                _height = boundary.getHeight();
            }

            if (me.isHorizontalLane(element) && isUpper) {
                x = boundary.getUpperLeft().x;
                y = boundary.getUpperLeft().y - _height;
                moveOffset = [0, (_height * -1)];
            }
            if (me.isHorizontalLane(element) && isLow) {
                x = boundary.getLowerLeft().x;
                y = boundary.getLowerLeft().y;
                moveOffset = [0, _height];
            }
            if (me.isVerticalLane(element) && isUpper) {
                x = boundary.getUpperRight().x;
                y = boundary.getUpperRight().y;
                moveOffset = [_width, 0];
            }
            if (me.isVerticalLane(element) && isLow) {
                x = boundary.getUpperLeft().x - _width;
                y = boundary.getUpperLeft().y;
                moveOffset = [(_width * -1), 0];
            }

            var lanesToMove = [];
            var baseLanes = me.getBaseLanes(standardLane);
            var indexOfLane = me.getIndexOfLane(standardLane);
            $.each(baseLanes, function (index, baseLane) {
                if (isUpper) {
                    if (index < indexOfLane) {
                        lanesToMove.push(baseLane);
                    }
                }
                if (isLow) {
                    if (index > indexOfLane) {
                        lanesToMove.push(baseLane);
                    }
                }
            });
            var newLane = me._CANVAS.drawShape([x + (_width / 2), y + (_height / 2)], shape, [_width, _height], null, null, parent.id, true);
            divedLanes.push(newLane);
            $.each(lanesToMove, function (index, laneToMove) {
                me.move(laneToMove, moveOffset);
            });
            me.reEstablishLane(standardLane);
            me.fitLaneOrder(standardLane);
        }
    }

    if (divedLanes.length) {
        for (var i = 0, leni = divedLanes.length; i < leni; i++) {
            $(this._PAPER.canvas).trigger('divideLane', divedLanes[i]);
        }
    }

    me.offDropablePool();

    return divedLanes;
};

/**
 * Lane 의 최상의 Lane 으로부터 모든 Base Lane 들을 반환한다.
 * Base Lane 은 자식 Lane 을 가지지 않는 Lane 을 뜻함.
 * 반환하는 Array 는 좌표상의 값을 기준으로 정렬되어 있는 상태이다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {Array} childBaseLanes
 */
OG.renderer.RaphaelRenderer.prototype.getBaseLanes = function (element) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    var rootLane;
    var baseLanes = [];
    var tempLanes = [];
    var sortable = [];

    function chooseBaseLane(lane) {
        var _childLanes = me.getChildLane(lane);
        if (_childLanes.length) {
            for (var i = 0, leni = _childLanes.length; i < leni; i++) {
                chooseBaseLane(_childLanes[i]);
            }
        } else {
            tempLanes.push(lane);
        }
    }

    if (!rElement) {
        return baseLanes;
    }
    element = rElement.node;
    rootLane = me.getRootLane(element);

    if (!rootLane) {
        return baseLanes;
    }

    chooseBaseLane(rootLane);

    var isHorizontal = me.isHorizontalLane(rootLane);
    var isVertical = me.isVerticalLane(rootLane);

    $.each(tempLanes, function (index, tempLane) {
        var upperLeft = tempLane.shape.geom.getBoundary().getUpperLeft();
        if (isHorizontal) {
            sortable.push([tempLane, upperLeft.y]);
        }
        if (isVertical) {
            sortable.push([tempLane, upperLeft.x]);
        }
    })

    //수직배열: y값이 작은값부터 정렬한다.
    if (isHorizontal) {
        sortable.sort(function (a, b) {
            return a[1] - b[1]
        })
    }
    //수평배열: x값이 큰 값부터 정렬한다.
    if (isVertical) {
        sortable.sort(function (a, b) {
            return b[1] - a[1]
        })
    }
    $.each(sortable, function (index, sort) {
        baseLanes.push(sort[0]);
    })
    return baseLanes;
};

/**
 * Lane 의 최상위 Lane 을 반환한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {Element} Lane Element
 */
OG.renderer.RaphaelRenderer.prototype.getRootLane = function (element) {
    var me = this;
    var rootLane;
    var parent;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return null;
    }
    element = rElement.node;

    if (!me.isLane(element)) {
        return null;
    }

    while (!rootLane) {
        if (!parent) {
            parent = element;
        }
        if (me.getRootGroup().id === parent.id) {
            rootLane = null;
            break;
        }
        if (me.isTopGroup(parent)) {
            rootLane = parent;
        } else {
            parent = me.getParent(parent);
        }
    }
    return rootLane;
};

/**
 * Lane 의 BaseLane 으로부터 자신의 순서를 구한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {Number} index
 */
OG.renderer.RaphaelRenderer.prototype.getIndexOfLane = function (element) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return null;
    }
    element = rElement.node;

    if (!me.isLane(element)) {
        return null;
    }

    var index = -1;
    var baseLanes = me.getBaseLanes(element);
    $.each(baseLanes, function (idx, baseLane) {
        if (element.id === baseLane.id) {
            index = idx;
        }
    })
    if (index < 0) {
        throw new Error("Lane Element has no index.");
    } else {
        return index;
    }
};

/**
 * Lane 의 최상위 Lane 으로부터 Depth를 구한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {Number} depth
 */
OG.renderer.RaphaelRenderer.prototype.getDepthOfLane = function (element) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return null;
    }
    if (!me.isLane(element)) {
        return null;
    }

    var lengthToRoot = 0;

    function cacualateDepth(lane) {
        if (me.isLane(lane) && !me.isTopGroup(lane)) {
            lengthToRoot++;
            cacualateDepth(me.getParent(lane));
        }
    }

    cacualateDepth(element);

    return lengthToRoot;
};

/**
 * Lane 의 BaseLane 영역을 기준으로 전체 Lane 의 구조를 재정립한다.
 *
 * @param {Element|String} Element Element 또는 ID
 */
OG.renderer.RaphaelRenderer.prototype.reEstablishLane = function (element) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return null;
    }
    element = rElement.node;

    if (!me.isLane(element)) {
        return null;
    }
    var baseLanes = me.getBaseLanes(element);

    //베이스라인으로만 이루어진 부모 Lane 집합을 구한다.
    var estableishTargets = [];
    var parents = {};
    $.each(baseLanes, function (index, baseLane) {
        //key, value 집합으로 추린다.
        var parent = me.getParent(baseLane);
        if (parent && parent.id) {
            parents[parent.id] = parent;
        }
    });
    for (var key in parents) {
        var hasNoChild = true;
        var childLanes = me.getChildLane(parents[key]);
        $.each(childLanes, function (index, childLane) {
            var childOfchildLanes = me.getChildLane(childLane);
            if (childOfchildLanes && childOfchildLanes.length) {
                hasNoChild = false;
            }
        });
        if (hasNoChild) {
            estableishTargets.push(parents[key]);
        }
    }

    function establishLanes(lanes) {
        //재정립할 대상이 더이상 없을 경우 루프를 종료한다.
        if (!lanes.length) {
            return;
        }
        //가상의 Lane 트리 구조를 생각했을 때 depth 가 높은 순으로 정렬
        var sortable = [];
        $.each(lanes, function (index, lane) {
            var depth = me.getDepthOfLane(lane);
            sortable.push([lane, depth]);
        })
        sortable.sort(function (a, b) {
            return b[1] - a[1];
        })

        //정렬된 재정립 대상마다 childLane의 영역을 기준으로 자신의 영역을 수정한다.
        $.each(sortable, function (index, sorted) {
            var lane = sorted[0];
            var envelope = me.getBoundaryOfElements(me.getChildLane(lane));
            var style = lane.shape.geom.style.map;
            var titleSize = style['title-size'] ? style['title-size'] : 20;
            var left, right, upper, lower;
            upper = envelope.getUpperLeft().y;
            lower = envelope.getLowerRight().y;
            left = envelope.getUpperLeft().x;
            right = envelope.getLowerRight().x;
            if (me.isHorizontalLane(lane)) {
                left = left - titleSize;
            }
            if (me.isVerticalLane(lane)) {
                upper = upper - titleSize;
            }

            var boundary = lane.shape.geom.getBoundary();

            upper = boundary.getUpperCenter().y - upper;
            lower = lower - boundary.getLowerCenter().y;
            left = boundary.getLeftCenter().x - left;
            right = right - boundary.getRightCenter().x;

            me.resize(lane, [upper, lower, left, right]);
        })

        //대상마다 부모를 선정하여 다음 루프를 위한 estableishTargets를 다시 수집 한다.
        var newxtEstableishTargets = [];
        var nextParents = {};
        $.each(lanes, function (index, lane) {
            var depth = me.getDepthOfLane(lane);
            //depth 가 0은 루트이므로 다음수집대상에 포함되지 않는다.
            if (depth > 0) {
                var parent = me.getParent(lane);
                if (parent && parent.id) {
                    nextParents[parent.id] = parent;
                }
            }
        })
        for (var key in nextParents) {
            newxtEstableishTargets.push(nextParents[key]);
        }
        establishLanes(newxtEstableishTargets);
    }

    establishLanes(estableishTargets);
};

/**
 * 주어진 Shape 들의 바운더리 영역을 반환한다.
 *
 * @param {Element[]} elements
 * @return {OG.geometry.Envelope} Envelope 영역
 * @override
 */
OG.renderer.RaphaelRenderer.prototype.getBoundaryOfElements = function (elements) {
    var geometryArray = [], geometryCollection, envelope, i;

    if (elements && elements.length > 0) {
        for (var i = 0, leni = elements.length; i < leni; i++) {

            geometryArray.push(elements[i].shape.geom);
        }
        geometryCollection = new OG.GeometryCollection(geometryArray);
        envelope = geometryCollection.getBoundary();
    }

    return envelope;
};

/**
 * Lane 의 baseLane 들 중
 * Lane의 주어진 direction 과 BaseLane 의 주어진 direction 이 가장 가까운 BaseLane 의 인덱스를 반환한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @param {String} direction
 * @return {Number} index
 */
OG.renderer.RaphaelRenderer.prototype.getNearestBaseLaneIndexAsDirection = function (element, direction) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement || !direction) {
        return null;
    }
    if (!me.isLane(element)) {
        return null;
    }

    var orgValue;
    var index;
    var nearestValue;
    var baseLanes = me.getBaseLanes(element);
    var orgEnvelope = me.getBoundary(element);
    var orgLeft, orgRight, orgUpper, orgLow;
    orgUpper = orgEnvelope.getUpperLeft().y;
    orgLow = orgEnvelope.getLowerRight().y;
    orgLeft = orgEnvelope.getUpperLeft().x;
    orgRight = orgEnvelope.getLowerRight().x;

    $.each(baseLanes, function (idx, baseLane) {
        var envelope = me.getBoundary(baseLane);
        var left, right, upper, low, compareValue;
        upper = envelope.getUpperLeft().y;
        low = envelope.getLowerRight().y;
        left = envelope.getUpperLeft().x;
        right = envelope.getLowerRight().x;
        if (direction === 'upper') {
            compareValue = upper;
            orgValue = orgUpper;
        }
        if (direction === 'low') {
            compareValue = low;
            orgValue = orgLow;
        }
        if (direction === 'left') {
            compareValue = left;
            orgValue = orgLeft;
        }
        if (direction === 'right') {
            compareValue = right;
            orgValue = orgRight;
        }
        if (!nearestValue && nearestValue !== 0) {
            nearestValue = Math.abs(compareValue - orgValue);
            index = idx;
        }
        if (nearestValue > Math.abs(compareValue - orgValue)) {
            nearestValue = Math.abs(compareValue - orgValue);
            index = idx;
        }
    });

    return index;
};

/**
 * Group 의 내부 도형들의 Boundary를 반환한다.
 * Lane 이면 최상위 Lane의 내부 도형들의 Boundary를 반환한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @return {OG.geometry.Envelope} Envelope 영역
 */
OG.renderer.RaphaelRenderer.prototype.getBoundaryOfInnerShapesGroup = function (element) {
    var me = this;
    var innerShapes = [];
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return null;
    }
    element = rElement.node;

    var group;
    var childsShapes = [];
    if (me.isLane(element)) {
        childsShapes = me.getInnerShapesOfLane(element);
    } else {
        childsShapes = me.getChilds(element);
    }

    $.each(childsShapes, function (idx, childsShape) {
        if (!me.isLane(childsShape)) {
            innerShapes.push(childsShape);
        }
    });
    if (!innerShapes.length) {
        return null;
    }
    return me.getBoundaryOfElements(innerShapes)
};


/**
 * Lane 의 BaseLane 중 길이가 가장 작은 Lane 을 반환한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @param {Element} baseLane
 */
OG.renderer.RaphaelRenderer.prototype.getSmallestBaseLane = function (element) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);

    if (!rElement) {
        return null;
    }

    element = rElement.node;

    if (!me.isLane(element)) {
        return null;
    }

    var baseLanes = me.getBaseLanes(element);
    var smallestValue;
    var smallestLane;
    $.each(baseLanes, function (index, baseLane) {
        var compareValue;
        var boundary = me.getBoundary(baseLane);
        if (me.isHorizontalLane(baseLane)) {
            compareValue = boundary.getWidth();
        }
        if (me.isVerticalLane(baseLane)) {
            compareValue = boundary.getHeight();
        }
        if (compareValue) {
            if (!smallestLane) {
                smallestLane = baseLane;
                smallestValue = compareValue;
            }
            if (compareValue < smallestValue) {
                smallestLane = baseLane;
                smallestValue = compareValue;
            }
        }
    });

    return smallestLane;
};
/**
 * Lane 을 리사이즈한다.
 *
 * @param {Element|String} Element Element 또는 ID
 * @param {Number[]} offset [상, 하, 좌, 우] 각 방향으로 + 값
 */
OG.renderer.RaphaelRenderer.prototype.resizeLane = function (element, offset) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);

    if (!rElement) {
        return;
    }
    element = rElement.node;

    if (!me.isLane(element)) {
        return;
    }

    var resizeChildLane = function (parentLane, resizeOffset) {
        me.resize(parentLane, resizeOffset);

        var childLanes = me.getChildLane(parentLane);
        $.each(childLanes, function (index, childLane) {
            resizeChildLane(childLane, resizeOffset);
        })
    }

    var du = offset[0], dlw = offset[1], dl = offset[2], dr = offset[3];
    var rootLane = me.getRootLane(element);
    var baseLanes = me.getBaseLanes(element);

    //1.baseLane 이 리사이즈 된 경우 -> 주변 baseLane 리사이즈
    //2.baseLane 이 아닌 것이 리사이즈 된 경우
    // -> 리사이즈 증분값으로부터 디렉션을 추적
    // -> 실질적으로 리사이징 된 베이스 라인을 선정
    // -> 주변 baseLane 리사이즈
    var myIndex;
    if (me.getChildLane(element).length) {
        if (me.isHorizontalLane(element)) {
            if (du) {
                myIndex = me.getNearestBaseLaneIndexAsDirection(element, 'upper');
            }
            if (dlw) {
                myIndex = me.getNearestBaseLaneIndexAsDirection(element, 'low');
            }
        }
        if (me.isVerticalLane(element)) {
            if (dl) {
                myIndex = me.getNearestBaseLaneIndexAsDirection(element, 'left');
            }
            if (dr) {
                myIndex = me.getNearestBaseLaneIndexAsDirection(element, 'right');
            }
        }
    } else {
        myIndex = me.getIndexOfLane(element);
    }

    if (me.isHorizontalLane(element)) {

        //HorizontalLane 인 경우는 dl, dr 값이 변경되었을 경우 모든 Lane 에 적용.
        resizeChildLane(rootLane, [0, 0, dl, dr]);

        //HorizontalLane 인 경우는 du,dlw 값이 변경되었을 경우만 주변 Lane 정리와 자신을 변경.
        if (du || dlw) {
            me.resize(baseLanes[myIndex], [du, dlw, 0, 0]);
            if (myIndex > 0) {
                me.resize(baseLanes[myIndex - 1], [0, (du * -1), 0, 0]);
            }
            if (myIndex < baseLanes.length - 1) {
                me.resize(baseLanes[myIndex + 1], [(dlw * -1), 0, 0, 0]);
            }
        }
    }
    if (me.isVerticalLane(element)) {

        //VerticalLane 인 경우는 du, dlw 값이 변경되었을 경우 모든 Lane 에 적용.
        resizeChildLane(rootLane, [du, dlw, 0, 0]);

        //VerticalLane 인 경우는 dl, dr 값이 변경되었을 경우만 주변 Lane 정리와 자신을 변경.
        if (dl || dr) {
            me.resize(baseLanes[myIndex], [0, 0, dl, dr]);
            if (myIndex > 0) {
                me.resize(baseLanes[myIndex - 1], [0, 0, (dr * -1), 0]);
            }
            if (myIndex < baseLanes.length - 1) {
                me.resize(baseLanes[myIndex + 1], [0, 0, 0, (dl * -1)]);
            }
        }
    }

    //최종적으로 변경된 baseLane들을 기준으로 전체Lane을 재정립한다.
    me.reEstablishLane(element);
};

/**
 * Lane 을 삭제한다.
 *
 * @param {Element|String} Element Element 또는 ID
 */
OG.renderer.RaphaelRenderer.prototype.removeLaneShape = function (element) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);

    if (!rElement) {
        return;
    }
    element = rElement.node;

    if (!me.isLane(element)) {
        me.removeShape(element);
    }

    if (me.isTopGroup(element)) {
        me.removeShape(element);
        return;
    }

    var baseLanes = me.getBaseLanes(element);
    var rootLane = me.getRootLane(element);
    var parentLane = me.getParent(element);
    var sameSectorLanes = me.getChildLane(parentLane);

    //부모Lane 의 하나있는 childLane 을 삭제할 경우
    if (sameSectorLanes.length === 1) {
        me.removeShape(element);
        me.reEstablishLane(rootLane);
        return;
    }

    //부모Lane 에 childLane 이 다수일 경우
    if (me.isHorizontalLane(element)) {
        var neighborTopBase;
        var neighborLowBase;
        var topBaseIndex = me.getNearestBaseLaneIndexAsDirection(element, 'upper');
        var lowBaseIndex = me.getNearestBaseLaneIndexAsDirection(element, 'low');
        var lostSize = me.getBoundary(element).getHeight();
        if (topBaseIndex > 0) {
            neighborTopBase = baseLanes[topBaseIndex - 1];
        }
        if (lowBaseIndex < baseLanes.length - 1) {
            neighborLowBase = baseLanes[lowBaseIndex + 1];
        }
        if (me.getParent(element))
            if (neighborTopBase && neighborLowBase) {
                me.resize(neighborTopBase, [0, lostSize / 2, 0, 0]);
                me.resize(neighborLowBase, [lostSize / 2, 0, 0, 0]);
            }
        if (neighborTopBase && !neighborLowBase) {
            me.resize(neighborTopBase, [0, lostSize, 0, 0]);
        }
        if (!neighborTopBase && neighborLowBase) {
            me.resize(neighborLowBase, [lostSize, 0, 0, 0]);
        }
        me.removeShape(element);
        me.reEstablishLane(rootLane);
    }

    if (me.isVerticalLane(element)) {
        var neighborRightBase;
        var neighborLeftBase;
        var rightBaseIndex = me.getNearestBaseLaneIndexAsDirection(element, 'right');
        var leftBaseIndex = me.getNearestBaseLaneIndexAsDirection(element, 'left');
        var lostSize = me.getBoundary(element).getWidth();
        if (rightBaseIndex > 0) {
            neighborRightBase = baseLanes[rightBaseIndex - 1];
        }
        if (leftBaseIndex < baseLanes.length - 1) {
            neighborLeftBase = baseLanes[leftBaseIndex + 1];
        }
        if (me.getParent(element))
            if (neighborRightBase && neighborLeftBase) {
                me.resize(neighborRightBase, [0, 0, lostSize / 2, 0]);
                me.resize(neighborLeftBase, [0, 0, 0, lostSize / 2]);
            }
        if (neighborRightBase && !neighborLeftBase) {
            me.resize(neighborRightBase, [0, 0, lostSize, 0]);
        }
        if (!neighborRightBase && neighborLeftBase) {
            me.resize(neighborLeftBase, [0, 0, 0, lostSize]);
        }
        me.removeShape(element);
        me.reEstablishLane(rootLane);
    }
};

/**
 * Lane 내부 도형들을 구한다.
 *
 * @param {Element|String} Element Element 또는 ID
 */
OG.renderer.RaphaelRenderer.prototype.getInnerShapesOfLane = function (element) {
    var me = this;
    var innerShapes = [];
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return innerShapes;
    }
    element = rElement.node;

    function getInnerShapes(lane) {
        var childsShapes = me.getChilds(lane);
        $.each(childsShapes, function (idx, childsShape) {
            if (me.isLane(childsShape)) {
                getInnerShapes(childsShape);
            }
            if (!me.isLane(childsShape)) {
                innerShapes.push(childsShape);
            }
        })
    }

    var rootLane = me.getRootLane(element);
    getInnerShapes(rootLane);

    return innerShapes;
};

/**
 * Lane 의 내부 도형들을 앞으로 이동시킨다.
 *
 * @param {Element|String} Element Element 또는 ID
 */
OG.renderer.RaphaelRenderer.prototype.fitLaneOrder = function (element) {
    var me = this;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);

    if (!rElement) {
        return;
    }
    element = rElement.node;

    if (!me.isLane(element)) {
        return;
    }

    var rootLane = me.getRootLane(element);
    var innerShapesOfLane = me.getInnerShapesOfLane(element);

    $.each(innerShapesOfLane, function (index, innerShape) {
        rootLane.appendChild(innerShape);
    });
};

/**
 * Shape 가 소속된 의 최상위 그룹 앨리먼트를 반환한다.
 * 그룹이 소속이 아닌 앨리먼트는 자신을 반환한다.
 *
 * @param {Element|String} Element 또는 ID
 * @return {Element} Element
 */
OG.renderer.RaphaelRenderer.prototype.getRootGroupOfShape = function (element) {
    var me = this;
    var rootGroup;
    var parent;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return null;
    }
    element = rElement.node;

    if (!me.getParent(element)) {
        return element;
    }

    while (!rootGroup) {
        if (!parent) {
            parent = element;
        }
        if (me.getRootGroup().id === parent.id) {
            rootGroup = null;
            break;
        }
        if (me.isTopGroup(parent)) {
            rootGroup = parent;
        } else {
            parent = me.getParent(parent);
        }
    }
    return rootGroup;
};
/**
 * Edge 가 Gourp 사이를 넘어가는 경우 스타일에 변화를 준다.
 *
 * @param {Element|String} Element 또는 ID
 */
OG.renderer.RaphaelRenderer.prototype.checkBridgeEdge = function (element) {
    if (!this._CONFIG.CHECK_BRIDGE_EDGE) {
        return;
    }
    var me = this, fromStyleChangable, toStyleChangable;
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);

    if (!rElement) {
        return;
    }
    element = rElement.node;
    var isEdge = $(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE;
    if (!isEdge) {
        return;
    }

    var from = $(element).attr("_from");
    var to = $(element).attr("_to");
    var fromShape, toShape, fromRoot, toRoot;
    if (from) {
        fromShape = this._getShapeFromTerminal(from);
        fromRoot = me.getRootGroupOfShape(fromShape);
        fromStyleChangable = me._CANVAS._HANDLER._isConnectStyleChangable(fromShape.shape);
    }
    if (to) {
        toShape = this._getShapeFromTerminal(to);
        toRoot = me.getRootGroupOfShape(toShape);
        toStyleChangable = me._CANVAS._HANDLER._isConnectStyleChangable(toShape.shape);
    }

    if (fromShape && toShape && fromRoot && toRoot) {
        //양쪽 모두 루트 캔버스 하위의 엘리먼트라면 기본 처리한다.
        if (fromRoot.id === fromShape.id && toShape.id === toRoot.id) {
            me.setShapeStyle(element, {"stroke-dasharray": ''});
            return;
        }
        //양쪽 모두 Lane 으로 부터 파생되었으면 기본 처리한다.
        if (me.isLane(fromRoot) && me.isLane(toRoot)) {
            me.setShapeStyle(element, {"stroke-dasharray": ''});
            return;
        }

        //둘중 한쪽이 스타일 변경 방지 처리가 되어있으면 기본 처리한다.
        if (!fromStyleChangable || !toStyleChangable) {
            me.setShapeStyle(element, {"stroke-dasharray": ''});
            return;
        }

        //양쪽 루트그룹의 아이디가 틀리면 대쉬어래이 처리
        if (fromRoot.id !== toRoot.id) {
            me.setShapeStyle(element, {"arrow-start": "open_oval", "stroke-dasharray": '- '});
            return;
        }
    }

    me.setShapeStyle(element, {"stroke-dasharray": ''});
};
/**
 * 모든 Edge 를 checkBridgeEdge
 */
OG.renderer.RaphaelRenderer.prototype.checkAllBridgeEdge = function () {
    var me = this;
    var edges = me.getAllEdges();
    $.each(edges, function (index, edge) {
        me.checkBridgeEdge(edge);
    });
};

/**
 * Group 내부의 모든 shape 을 리턴한다.
 *
 * @param {Element|String} Element Element 또는 ID
 */
OG.renderer.RaphaelRenderer.prototype.getInnerShapesOfGroup = function (element) {
    var me = this;
    var innerShapes = [];
    var rElement = me._getREleById(OG.Util.isElement(element) ? element.id : element);
    if (!rElement) {
        return innerShapes;
    }
    element = rElement.node;

    var elements = [];
    $(element).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "]").each(function (index, element) {
        elements.push(element);
    });
    return elements;
};

/**
 * 주어진 좌표를 포함하는 Elemnt 중 가장 Front 에 위치한 Element 를 반환한다.
 *
 * @param {Number[]} point 좌표값
 * @return {Element} Element
 */
OG.renderer.RaphaelRenderer.prototype.getFrontForCoordinate = function (point) {
    var me = this, envelope, mostFrontElement;

    function getFront(group) {
        var frontElement;
        var childs = me.getChilds(group);
        if (!childs.length) {
            return;
        }
        $.each(childs, function (index, child) {
            if (me.isEdge(child)) {
                return;
            }
            envelope = me.getBoundary(child);
            if (envelope.isContains(point)) {
                frontElement = child;
            }
        })
        if (frontElement) {
            mostFrontElement = frontElement;
            getFront(frontElement);
        }
    }

    getFront(me.getRootGroup());
    return mostFrontElement;
};

/**
 * Boundary 를 포함하는 가장 Front 에 위치한 Group Element 를 반환한다.
 *
 * @param {OG.geometry.Envelope} boundary 영역
 * @return {Element} Element
 */
OG.renderer.RaphaelRenderer.prototype.getFrontForBoundary = function (boundary) {
    var me = this, envelope, mostFrontElement = null;
    if (!boundary) {
        return mostFrontElement;
    }

    function getFront(group) {
        var frontElement;
        var childs = me.getChilds(group);
        if (!childs.length) {
            return;
        }
        $.each(childs, function (index, child) {

            if (me.isEdge(child)) {
                return;
            }
            if (!me.isGroup(child)) {
                return;
            }

            if (child.shape instanceof OG.shape.bpmn.A_Task) {
                return;
            }

            //바운더리가 일치하는 경우 반응하지 않는다.
            envelope = me.getBoundary(child);
            if (boundary.getUpperLeft().x === envelope.getUpperLeft().x &&
                boundary.getUpperLeft().y === envelope.getUpperLeft().y &&
                boundary.getWidth() === envelope.getWidth() &&
                boundary.getHeight() === envelope.getHeight()) {
                return;
            }

            if (envelope.isContainsAll(boundary.getVertices())) {
                frontElement = child;
            }
        });
        if (frontElement) {
            mostFrontElement = frontElement;
            getFront(frontElement);
        }
    }

    getFront(me.getRootGroup());
    return mostFrontElement;
};


/**
 * 신규 Edge 의 vertices 를 연결대상 도형에 따라 설정한다
 *
 * @param {Element|String} Edge Element 또는 ID
 * @param {Element|String} FromShape Element 또는 ID
 * @param {Element|String} ToShape Element 또는 ID
 * @return {Element} Edge Element
 */
OG.renderer.RaphaelRenderer.prototype.trimEdgeDirection = function (edge, fromShape, toShape) {

    //세 도형 중 하나라도 누락되면 수행하지 않는다.
    if (!edge || !fromShape || !toShape) {
        return edge;
    }
    var rEdge = this._getREleById(OG.Util.isElement(edge) ? edge.id : edge);
    var rFromShape = this._getREleById(OG.Util.isElement(fromShape) ? fromShape.id : fromShape);
    var rToShape = this._getREleById(OG.Util.isElement(toShape) ? toShape.id : toShape);
    if (!rEdge || !rFromShape || !rToShape) {
        return edge;
    }
    edge = rEdge.node;
    fromShape = rFromShape.node;
    toShape = rToShape.node;


    //plain 선형이 아닌경우 수행하지 않는다.
    var edgeType = edge.shape.geom.style.map['edge-type'];
    if (edgeType && edgeType != 'plain') {
        return edge;
    }

    var me = this;
    var points = [];
    var vertices = edge.shape.geom.getVertices();
    var fromP = vertices[0];
    var toP = vertices[vertices.length - 1];

    var fromBoundary = me.getBoundary(fromShape);
    var toBoundary = me.getBoundary(toShape);
    var fLeft = fromBoundary.getLeftCenter().x;
    var fRight = fromBoundary.getRightCenter().x;

    var tLeft = toBoundary.getLeftCenter().x;
    var tRight = toBoundary.getRightCenter().x;

    if (tLeft > fRight) {
        points.push([fromP.x, fromP.y]);
        points.push([fRight + ((tLeft - fRight) / 2), fromP.y]);
        points.push([fRight + ((tLeft - fRight) / 2), toP.y]);
        points.push([toP.x, toP.y]);

    } else if (fLeft > tRight) {
        points.push([fromP.x, fromP.y]);
        points.push([fLeft + ((tRight - fLeft) / 2), fromP.y]);
        points.push([fLeft + ((tRight - fLeft) / 2), toP.y]);
        points.push([toP.x, toP.y]);

    } else {
        points.push([fromP.x, fromP.y]);
        points.push([fromP.x, fromP.y + ((toP.y - fromP.y) / 2)]);
        points.push([toP.x, fromP.y + ((toP.y - fromP.y) / 2)]);
        points.push([toP.x, toP.y]);
    }

    //등분된 선분에 그리드 시스템 적용
    if (me._CONFIG.DRAG_GRIDABLE) {
        $.each(points, function (index, point) {
            point[0] = OG.Util.roundGrid(point[0], me._CONFIG.MOVE_SNAP_SIZE / 2);
            point[1] = OG.Util.roundGrid(point[1], me._CONFIG.MOVE_SNAP_SIZE / 2);
            points[index] = point;
        })
    }

    return me.drawEdge(new OG.PolyLine(points), edge.shape.geom.style, edge.id);
};

/**
 * Lane 또는 Pool 내부 도형들을 그룹에 포함시킨다.
 *
 * @param {Element|String} Element

 * @return {Element} Element
 */
OG.renderer.RaphaelRenderer.prototype.putInnerShapeToPool = function (element) {
    var me = this;
    var root = me.getRootGroup();
    var rootLane;

    if (!me.isLane(element) && !me.isPool(element)) {
        return element;
    }
    if (me.isLane(element)) {
        rootLane = me.getRootLane(element);
    } else {
        rootLane = element;
    }

    var geometry = rootLane.shape.geom;
    var envelope = geometry.getBoundary();

    //캔버스 하위 shape 중 그룹 가능한 것의 집합.
    var rootInnderShape = [];
    var childs = me.getChilds(root);
    $.each(childs, function (index, child) {
        if (!me.isEdge(child) && child.id != element.id) {
            rootInnderShape.push(child);
        }
    });
    $.each(rootInnderShape, function (index, innderShape) {
        var boundary = innderShape.shape.geom.getBoundary();
        if (envelope.isContainsAll(boundary.getVertices())) {
            rootLane.appendChild(innderShape);
        }
    });
}


/**
 * 신규 Lane 또는 Pool 이 캔버스상에서 드래그하여 그려지도록 사전작업을 수행한다.
 *
 * @param {Element|String} Element

 * @return {Element} Element
 */
OG.renderer.RaphaelRenderer.prototype.setDropablePool = function (element) {
    var me = this;
    var root = me.getRootGroup();

    if (!me.isLane(element) && !me.isPool(element)) {
        return element;
    }

    var geometry = element.shape.geom;

    //캔버스 하위 shape 중 그룹 가능한 것의 집합.
    var rootInnderShape = [];
    var childs = me.getChilds(root);
    $.each(childs, function (index, child) {
        if (!me.isLane(child) && !me.isPool(child) && !me.isEdge(child)) {
            rootInnderShape.push(child);
        }
    });

    var poolDefaultSize = me._CONFIG.POOL_DEFAULT_SIZE;
    var space = 30;
    var boundary = geometry.getBoundary();
    var centroid = boundary.getCentroid();
    var poolSize = {};

    var calculateDropCorrectionConditions = function () {

        var correctionConditions = [];
        if (!rootInnderShape.length) {
            return correctionConditions;
        }

        var childArea = me.getBoundaryOfElements(rootInnderShape);
        var elementArea = me.getBoundary(element);

        var center = childArea.getCentroid();
        var widthEnable = (elementArea.getWidth() / 2) - ((childArea.getWidth() / 2) + space);
        var heightEnable = (elementArea.getHeight() / 2) - ((childArea.getHeight() / 2) + space);
        if (widthEnable < 0) {
            widthEnable = 0;
        }
        if (heightEnable < 0) {
            heightEnable = 0;
        }

        correctionConditions.push({
            condition: {
                maxX: center.x + widthEnable
            },
            fixedPosition: {
                x: center.x + widthEnable
            }
        });
        correctionConditions.push({
            condition: {
                minX: center.x - widthEnable
            },
            fixedPosition: {
                x: center.x - widthEnable
            }
        });
        correctionConditions.push({
            condition: {
                maxY: center.y + heightEnable
            },
            fixedPosition: {
                y: center.y + heightEnable
            }
        });
        correctionConditions.push({
            condition: {
                minY: center.y - heightEnable
            },
            fixedPosition: {
                y: center.y - heightEnable
            }
        });
        return correctionConditions;
    };


    if (me.isVerticalLane(element) || me.isVerticalPool(element)) {
        poolSize.width = poolDefaultSize[1];
        poolSize.height = poolDefaultSize[0];
    } else {
        poolSize.width = poolDefaultSize[0];
        poolSize.height = poolDefaultSize[1];
    }

    if (rootInnderShape.length) {
        var childArea = me.getBoundaryOfElements(rootInnderShape);
        centroid = childArea.getCentroid();

        if (poolSize.width < childArea.getWidth() + (space * 2)) {
            poolSize.width = childArea.getWidth() + (space * 2);
        }
        if (poolSize.height < childArea.getHeight() + (space * 2)) {
            poolSize.height = childArea.getHeight() + (space * 2);
        }
    }

    var originalStyle = JSON.parse(JSON.stringify(geometry.style.map));
    geometry.moveCentroid([centroid.x, centroid.y]);
    geometry.resizeBox(poolSize.width, poolSize.height);
    geometry.style.map['stroke-width'] = 2;
    geometry.style.map['stroke'] = '#FFCC50';

    element = this.redrawShape(element);

    $(element).data('originalStyle', originalStyle);
    $(root).data('newPool', element);
    $(root).data('poolInnderShape', rootInnderShape);
    $(root).data('correctionConditions', calculateDropCorrectionConditions());

    return element;
};

/**
 * 신규 Lane 또는 Pool 드랍모드를 해제한다.
 *
 */
OG.renderer.RaphaelRenderer.prototype.offDropablePool = function () {
    var me = this;
    var root = me.getRootGroup();
    $(root).data('newPool', false);
    $(root).data('poolInnderShape', []);
};

/**
 * 주어진 element 를 가로,세로 만큼 이동하여 복사한다.
 * @param {Element|String} element Element 또는 ID
 * @param {Number[]} offset [가로, 세로]
 */
OG.renderer.RaphaelRenderer.prototype.copyShape = function (element, offset) {
    var me = this;
    var handler = this._CANVAS._HANDLER;
    // copy
    var boundary = element.shape.geom.getBoundary(), newShape, newElement, newGuide;
    newShape = element.shape.clone();
    if (!offset) {
        offset = [handler._CONFIG.COPY_PASTE_PADDING, handler._CONFIG.COPY_PASTE_PADDING];
    }

    if ($(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE) {
        if (element.shape.geom instanceof OG.geometry.BezierCurve) {
            newShape.geom = new OG.BezierCurve(element.shape.geom.getControlPoints());
        } else {
            newShape.geom = new OG.PolyLine(element.shape.geom.getVertices());
        }
        newShape.geom.style = element.shape.geom.style;
        newShape.geom.move(offset[0], offset[1]);
        newElement = me.drawShape(
            null, newShape,
            null, element.shapeStyle
        );

    } else {
        newElement = me.drawShape(
            [boundary.getCentroid().x + offset[0], boundary.getCentroid().y + offset[1]],
            newShape, [boundary.getWidth(), boundary.getHeight()], element.shapeStyle
        );
    }

    // enable event
    //newGuide = me.drawGuide(newElement);
    handler.setClickSelectable(newElement, handler._isSelectable(newElement.shape));
    handler.setMovable(newElement, handler._isMovable(newElement.shape));
    handler.setConnectGuide(newElement, handler._isConnectable(newElement.shape));
    handler.setResizable(newElement, newGuide, handler._isResizable(newElement.shape));
    handler.setConnectable(newElement, newGuide, handler._isConnectable(newElement.shape));

    if (handler._isLabelEditable(newElement.shape)) {
        handler.enableEditLabel(newElement);
    }

    // copy children
    handler._copyChildren(element, newElement);
    return newElement;
};