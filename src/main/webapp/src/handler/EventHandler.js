/**
 * Event Handler
 *
 * @class
 * @requires OG.renderer.*
 *
 * @param {OG.renderer.IRenderer} renderer 렌더러
 * @param {Object} config Configuration
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.handler.EventHandler = function (renderer, config) {
    this._RENDERER = renderer;
    this._CONFIG = config;
};

OG.handler.EventHandler.prototype = {
    /**
     * 주어진 Shape Element 의 라벨을 수정 가능하도록 한다.
     *
     * @param {Element} element Shape Element
     */
    enableEditLabel: function (element) {
        var me = this;
        var renderer = me._RENDERER;

        $(element).bind({
            dblclick: function (event) {
                var container = renderer.getContainer(),
                    envelope = element.shape.geom.getBoundary(),
                    upperLeft = envelope.getUpperLeft(),
                    bBox,
                    left = (upperLeft.x - 1) * me._CONFIG.SCALE,
                    top = (upperLeft.y - 1) * me._CONFIG.SCALE,
                    width = envelope.getWidth() * me._CONFIG.SCALE,
                    height = envelope.getHeight() * me._CONFIG.SCALE,
                    editorId = element.id + OG.Constants.LABEL_EDITOR_SUFFIX,
                    labelEditor,
                    textAlign = "center",
                    fromLabel,
                    toLabel,
                    beforeLabel,
                    afterLabel,
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

                            for (i = 0; i < vertices.length - 1; i++) {
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
                    },
                    centerOfEdge;

                //상위 그룹의 라벨수정을 방지하기 위해
                var eventOffset = me._getOffset(event)
                var frontElement = renderer.getFrontForCoordinate([eventOffset.x, eventOffset.y]);
                if (!frontElement) {
                    event.stopImmediatePropagation();
                    return;
                }
                if (frontElement.id !== element.id) {
                    event.stopImmediatePropagation();
                    return;
                }


                if (element.shape.isCollapsed === false) {
                    // textarea
                    $(container).append("<textarea id='" + element.id + OG.Constants.LABEL_EDITOR_SUFFIX + "'></textarea>");
                    labelEditor = $("#" + editorId);

                    // text-align 스타일 적용
                    switch (element.shape.geom.style.get("text-anchor")) {
                        case "start":
                            textAlign = "left";
                            break;
                        case "middle":
                            textAlign = "center";
                            break;
                        case "end":
                            textAlign = "right";
                            break;
                        default:
                            textAlign = "center";
                            break;
                    }

                    if ($(element).attr("_shape") === OG.Constants.SHAPE_TYPE.HTML) {
                        // Html Shape
                        $(labelEditor).css(OG.Util.apply(me._CONFIG.DEFAULT_STYLE.LABEL_EDITOR, {
                            left: left,
                            top: top,
                            width: width,
                            height: height,
                            "text-align": 'left',
                            overflow: "hidden",
                            resize: "none"
                        }));
                        $(labelEditor).focus();
                        $(labelEditor).val(element.shape.html);
                        beforeLabel = element.shape.html;

                        $(labelEditor).bind({
                            focusout: function () {
                                element.shape.html = this.value;
                                afterLabel = this.value;
                                if (element.shape.html) {
                                    renderer.redrawShape(element);
                                    this.parentNode.removeChild(this);
                                } else {
                                    renderer.removeShape(element);
                                    this.parentNode.removeChild(this);
                                }
                                if (beforeLabel !== afterLabel) {
                                    renderer.addHistory();
                                }
                            }
                        });
                    } else if ($(element).attr("_shape") === OG.Constants.SHAPE_TYPE.TEXT) {
                        // Text Shape
                        $(labelEditor).css(OG.Util.apply(me._CONFIG.DEFAULT_STYLE.LABEL_EDITOR, {
                            left: left,
                            top: top,
                            width: width,
                            height: height,
                            "text-align": textAlign,
                            overflow: "hidden",
                            resize: "none"
                        }));
                        $(labelEditor).focus();
                        $(labelEditor).val(element.shape.text);
                        beforeLabel = element.shape.text;

                        $(labelEditor).bind({
                            focusout: function () {
                                element.shape.text = this.value;
                                afterLabel = this.value;
                                if (element.shape.text) {
                                    renderer.redrawShape(element);
                                    this.parentNode.removeChild(this);
                                } else {
                                    renderer.removeShape(element);
                                    this.parentNode.removeChild(this);
                                }
                                if (beforeLabel !== afterLabel) {
                                    renderer.addHistory();
                                }
                            }
                        });
                    } else if ($(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE) {
                        // Edge Shape
                        if (element.shape.label && renderer.isSVG()) {
                            $(element).children('[id$=_LABEL]').each(function (idx, item) {
                                $(item).find("text").each(function (idx2, item2) {
                                    bBox = renderer.getBBox(item2);
                                    left = bBox.x - 10;
                                    top = bBox.y;
                                    width = bBox.width + 20;
                                    height = bBox.height;
                                });
                            });
                        } else {
                            centerOfEdge = getCenterOfEdge(element);
                            left = centerOfEdge.x - me._CONFIG.LABEL_EDITOR_WIDTH / 2;
                            top = centerOfEdge.y - me._CONFIG.LABEL_EDITOR_HEIGHT / 2;
                            width = me._CONFIG.LABEL_EDITOR_WIDTH;
                            height = me._CONFIG.LABEL_EDITOR_HEIGHT;
                        }

                        // 시작점 라벨인 경우
                        $(event.srcElement).parents('[id$=_FROMLABEL]').each(function (idx, item) {
                            $(item).find("text").each(function (idx2, item2) {
                                bBox = renderer.getBBox(item2);
                                left = bBox.x - 10;
                                top = bBox.y;
                                width = bBox.width + 20;
                                height = bBox.height;
                                fromLabel = element.shape.fromLabel;
                            });
                        });

                        // 끝점 라벨인 경우
                        $(event.srcElement).parents('[id$=_TOLABEL]').each(function (idx, item) {
                            $(item).find("text").each(function (idx2, item2) {
                                bBox = renderer.getBBox(item2);
                                left = bBox.x - 10;
                                top = bBox.y;
                                width = bBox.width + 20;
                                height = bBox.height;
                                toLabel = element.shape.toLabel;
                            });
                        });

                        $(labelEditor).css(OG.Util.apply(me._CONFIG.DEFAULT_STYLE.LABEL_EDITOR, {
                            left: left * me._CONFIG.SCALE,
                            top: top * me._CONFIG.SCALE,
                            width: width * me._CONFIG.SCALE,
                            height: height * me._CONFIG.SCALE,
                            overflow: "hidden",
                            resize: "none"
                        }));
                        $(labelEditor).focus();

                        if (fromLabel || toLabel) {
                            $(labelEditor).val(fromLabel ? element.shape.fromLabel : element.shape.toLabel);
                        } else {
                            $(labelEditor).val(element.shape.label);
                            beforeLabel = element.shape.label;
                        }

                        $(labelEditor).bind({
                            focusout: function () {
                                if (fromLabel) {
                                    renderer.drawEdgeLabel(element, this.value, 'FROM');
                                } else if (toLabel) {
                                    renderer.drawEdgeLabel(element, this.value, 'TO');
                                } else {
                                    renderer.drawLabel(element, this.value);
                                    afterLabel = this.value;
                                    if (beforeLabel !== afterLabel) {
                                        renderer.addHistory();
                                    }
                                }

                                this.parentNode.removeChild(this);
                            }
                        });
                    } else {
                        $(labelEditor).css(OG.Util.apply(me._CONFIG.DEFAULT_STYLE.LABEL_EDITOR, {
                            left: left,
                            top: top,
                            width: width,
                            height: height,
                            "text-align": textAlign,
                            overflow: "hidden",
                            resize: "none"
                        }));
                        $(labelEditor).focus();
                        $(labelEditor).val(element.shape.label);
                        beforeLabel = element.shape.label;

                        $(labelEditor).bind({
                            focusout: function () {
                                renderer.drawLabel(element, this.value);
                                this.parentNode.removeChild(this);
                                afterLabel = this.value;
                                if (beforeLabel !== afterLabel) {
                                    renderer.addHistory();
                                }
                            }
                        });
                    }
                }
            }
        });
    },

    /**
     * Shape 엘리먼트의 이동 가능여부를 설정한다.
     *
     * @param {Element} element Shape 엘리먼트
     * @param {Boolean} isMovable 가능여부
     */
    setMovable: function (element, isMovable) {
        var me = this, guide;
        var renderer = me._RENDERER;
        var root = renderer.getRootGroup();
        if (!element) {
            return;
        }

        var isEdge = $(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE;
        var isLane = renderer.isLane(element);

        if (isEdge) {
            return;
        }

        var calculateMoveCorrectionConditions = function (bBoxArray) {

            //이동 딜레이
            var delay = me._CONFIG.EDGE_MOVE_DELAY_SIZE;
            //조건집합
            var correctionConditions = [];

            //이동 타켓이 다수인 경우 해당되지 않는다.
            if (!bBoxArray) {
                return correctionConditions;
            }
            if (bBoxArray.length !== 1) {
                return correctionConditions;
            }

            //모든 Shape 의 중심점,상하좌우 끝을 조건에 포함한다.
            var moveBoundary = renderer.getBoundary(element);
            var moveCenter = moveBoundary.getCentroid();
            var moveHeight = moveBoundary.getHeight();
            var moveWidth = moveBoundary.getWidth();
            var allShapes = renderer.getAllShapes();
            $.each(allShapes, function (idx, shape) {
                if (renderer.isEdge(shape)) {
                    return;
                }
                if (shape.id === element.id) {
                    return;
                }
                var boundary = renderer.getBoundary(shape);
                var center = boundary.getCentroid();
                var upperLeft = boundary.getUpperLeft();
                var lowerRight = boundary.getLowerRight();


                //top boundary range
                correctionConditions.push({
                    condition: {
                        minY: (upperLeft.y - moveHeight / 2) - delay,
                        maxY: (upperLeft.y - moveHeight / 2) + delay
                    },
                    fixedPosition: {
                        y: (upperLeft.y - moveHeight / 2)
                    },
                    guidePosition: {
                        y: upperLeft.y
                    },
                    id: idx
                });
                correctionConditions.push({
                    condition: {
                        minY: (upperLeft.y + moveHeight / 2) - delay,
                        maxY: (upperLeft.y + moveHeight / 2) + delay
                    },
                    fixedPosition: {
                        y: (upperLeft.y + moveHeight / 2)
                    },
                    guidePosition: {
                        y: upperLeft.y
                    },
                    id: idx
                });

                //low boundary range
                correctionConditions.push({
                    condition: {
                        minY: (lowerRight.y + moveHeight / 2) - delay,
                        maxY: (lowerRight.y + moveHeight / 2) + delay
                    },
                    fixedPosition: {
                        y: (lowerRight.y + moveHeight / 2)
                    },
                    guidePosition: {
                        y: lowerRight.y
                    },
                    id: idx
                });
                correctionConditions.push({
                    condition: {
                        minY: (lowerRight.y - moveHeight / 2) - delay,
                        maxY: (lowerRight.y - moveHeight / 2) + delay
                    },
                    fixedPosition: {
                        y: (lowerRight.y - moveHeight / 2)
                    },
                    guidePosition: {
                        y: lowerRight.y
                    },
                    id: idx
                });

                //left boundary range
                correctionConditions.push({
                    condition: {
                        minX: (upperLeft.x - moveWidth / 2) - delay,
                        maxX: (upperLeft.x - moveWidth / 2) + delay
                    },
                    fixedPosition: {
                        x: (upperLeft.x - moveWidth / 2)
                    },
                    guidePosition: {
                        x: upperLeft.x
                    },
                    id: idx
                });
                correctionConditions.push({
                    condition: {
                        minX: (upperLeft.x + moveWidth / 2) - delay,
                        maxX: (upperLeft.x + moveWidth / 2) + delay
                    },
                    fixedPosition: {
                        x: (upperLeft.x + moveWidth / 2)
                    },
                    guidePosition: {
                        x: upperLeft.x
                    },
                    id: idx
                });

                //right boundary range
                correctionConditions.push({
                    condition: {
                        minX: (lowerRight.x + moveWidth / 2) - delay,
                        maxX: (lowerRight.x + moveWidth / 2) + delay
                    },
                    fixedPosition: {
                        x: (lowerRight.x + moveWidth / 2)
                    },
                    guidePosition: {
                        x: lowerRight.x
                    },
                    id: idx
                });
                correctionConditions.push({
                    condition: {
                        minX: (lowerRight.x - moveWidth / 2) - delay,
                        maxX: (lowerRight.x - moveWidth / 2) + delay
                    },
                    fixedPosition: {
                        x: (lowerRight.x - moveWidth / 2)
                    },
                    guidePosition: {
                        x: lowerRight.x
                    },
                    id: idx
                });

                //center vertical boundary range
                correctionConditions.push({
                    condition: {
                        minX: center.x - delay,
                        maxX: center.x + delay
                    },
                    fixedPosition: {
                        x: center.x
                    },
                    guidePosition: {
                        x: center.x
                    },
                    id: idx
                });

                //center horizontal boundary range
                correctionConditions.push({
                    condition: {
                        minY: center.y - delay,
                        maxY: center.y + delay,
                    },
                    fixedPosition: {
                        y: center.y
                    },
                    guidePosition: {
                        y: center.y
                    },
                    id: idx
                });
            });

            //연결된 Shape 들의 터미널이 수평,수직으로 교차하는 순간을 조건에 포함한다.
            var edges = [];
            var prevEdges = renderer.getPrevEdges(element);
            var nextEdges = renderer.getNextEdges(element);
            $.each(prevEdges, function (idx, edge) {
                edges.push({
                    edge: edge,
                    type: 'prev'
                });
            });
            $.each(nextEdges, function (idx, edge) {
                edges.push({
                    edge: edge,
                    type: 'next'
                });
            });
            $.each(edges, function (idx, edgeObj) {
                var edge = edgeObj.edge;
                var type = edgeObj.type;
                var from = $(edge).attr("_from");
                var to = $(edge).attr("_to");
                if (!from || !to) {
                    return;
                }
                var moveTerminal;
                var conditionTermianl;
                if (type === 'prev') {
                    moveTerminal = to;
                    conditionTermianl = from;
                } else {
                    moveTerminal = from;
                    conditionTermianl = to;
                }
                var movePosition = renderer._getPositionFromTerminal(moveTerminal);
                var conditionPosition = renderer._getPositionFromTerminal(conditionTermianl);
                var incrementX = moveCenter.x - movePosition.x;
                var incrementY = moveCenter.y - movePosition.y;

                //vertical boundary range
                correctionConditions.push({
                    condition: {
                        minX: conditionPosition.x + incrementX - delay,
                        maxX: conditionPosition.x + incrementX + delay
                    },
                    fixedPosition: {
                        x: conditionPosition.x + incrementX
                    },
                    guidePosition: {
                        x: conditionPosition.x
                    },
                    id: idx
                });

                //horizontal boundary range
                correctionConditions.push({
                    condition: {
                        minY: conditionPosition.y + incrementY - delay,
                        maxY: conditionPosition.y + incrementY + delay
                    },
                    fixedPosition: {
                        y: conditionPosition.y + incrementY
                    },
                    guidePosition: {
                        y: conditionPosition.y
                    },
                    id: idx
                });
            });
            return correctionConditions;
        };

        //엘리먼트 이동시 범위조건에 따라 새로운 포지션을 계산한다.
        //조건이 일치할 시 스틱가이드를 생선한다.
        var correctionConditionAnalysis = function (dx, dy) {
            var fixedPosition = {
                dx: dx,
                dy: dy
            };
            var boundary = renderer.getBoundary(element);
            var centroid = boundary.getCentroid();
            var center = {
                x: centroid.x + dx,
                y: centroid.y + dy
            };

            var calculateFixedPosition = function (expectedPosition) {
                if (!expectedPosition) {
                    return fixedPosition;
                }
                if (expectedPosition.x && !expectedPosition.y) {
                    return {
                        dx: expectedPosition.x - centroid.x,
                        dy: fixedPosition.dy
                    }
                }
                if (expectedPosition.y && !expectedPosition.x) {
                    return {
                        dx: fixedPosition.dx,
                        dy: expectedPosition.y - centroid.y
                    }
                }
                if (expectedPosition.x && expectedPosition.y) {
                    return {
                        dx: expectedPosition.x - centroid.x,
                        dy: expectedPosition.y - centroid.y
                    }
                }
                return fixedPosition;
            };
            var correctionConditions = $(element).data('correctionConditions');
            if (!correctionConditions) {
                return fixedPosition;
            }

            var conditionsPassCandidates = [];
            $.each(correctionConditions, function (index, correctionCondition) {
                var condition = correctionCondition.condition;

                var conditionsPass = true;
                if (condition.minX) {
                    if (center.x < condition.minX) {
                        conditionsPass = false;
                    }
                }
                if (condition.maxX) {
                    if (center.x > condition.maxX) {
                        conditionsPass = false;
                    }
                }
                if (condition.minY) {
                    if (center.y < condition.minY) {
                        conditionsPass = false;
                    }
                }
                if (condition.maxY) {
                    if (center.y > condition.maxY) {
                        conditionsPass = false;
                    }
                }

                if (conditionsPass) {
                    conditionsPassCandidates.push(correctionCondition);
                }
            });
            $.each(conditionsPassCandidates, function (index, conditionsPassCandidate) {
                fixedPosition = calculateFixedPosition(conditionsPassCandidate.fixedPosition);
                var guidePosition = conditionsPassCandidate.guidePosition;
                renderer.drawStickGuide(guidePosition);
            });
            if (!conditionsPassCandidates.length) {
                renderer.removeAllStickGuide();
            }

            return fixedPosition;
        };

        var removeDropOverBox = function () {
            var dropOverBoxes = $('[id$=' + OG.Constants.DROP_OVER_BBOX_SUFFIX + ']');
            $.each(dropOverBoxes, function (index, dropOverBox) {
                renderer.remove(dropOverBox.id);
            });
            $(root).removeData("groupTarget");
        };

        var setGroupTarget = function () {
            removeDropOverBox();

            var bBoxArray = $(root).data("bBoxArray");
            if (!bBoxArray) {
                return;
            }

            var moveElements = [];
            var transform = [];
            $.each(bBoxArray, function (idx, item) {
                transform = renderer.getAttr(item.box, 'transform')[0];
                moveElements.push(renderer.getElementById(item.id));
            });
            if (!transform.length) {
                return;
            }
            var moveBoundary = renderer.getBoundaryOfElements(moveElements);
            var moveTop = moveBoundary.getUpperCenter().y + transform[2];
            var moveLeft = moveBoundary.getLeftCenter().x + transform[1];
            var bBoxBoundary = new OG.geometry.Envelope(
                [moveLeft, moveTop], moveBoundary.getWidth(), moveBoundary.getHeight());

            var frontGroup = renderer.getFrontForBoundary(bBoxBoundary);
            if (!frontGroup) {
                return;
            }

            if (!me._CONFIG.GROUP_DROPABLE || !frontGroup.shape.GROUP_DROPABLE) {
                return;
            }

            //Lane 도형에 접근할 경우 최상위 Lane 으로 타겟변경한다.
            if (renderer.isLane(frontGroup)) {
                frontGroup = renderer.getRootLane(frontGroup);
            }

            //A_Task 일 경우 반응하지 않는다.
            if (frontGroup.shape instanceof OG.shape.bpmn.A_Task) {
                return;
            }

            //접혀진 상태면 반응하지 않는다.
            if (frontGroup.shape.isCollapsed === true) {
                return;
            }

            //이동중인 도형들 속에 타겟이 겹친 경우 반응하지 않는다.
            var isSelf = false;
            $.each(bBoxArray, function (idx, item) {
                if (frontGroup.id === item.id) {
                    isSelf = true;
                }
            });
            if (isSelf) {
                return;
            }

            //이동중인 도형 중 Lane 이 있다면 반응하지 않는다.
            var blackList = false;
            $.each(bBoxArray, function (idx, item) {
                if (renderer.isLane(item.id)) {
                    blackList = true;
                }
            });
            if (blackList) {
                return;
            }
            $(root).data("groupTarget", frontGroup);
            renderer.drawDropOverGuide(frontGroup);
        };

        if (isMovable === true) {
            $(element).draggable({
                start: function (event) {
                    var eventOffset = me._getOffset(event), guide;

                    // 선택되지 않은 Shape 을 drag 시 다른 모든 Shape 은 deselect 처리
                    if (!me._isSelectedElement(element)) {
                        $.each(me._getSelectedElement(), function (idx, selected) {
                            if (OG.Util.isElement(selected) && selected.id) {
                                renderer.removeGuide(selected);
                            }
                        })
                    }

                    //Edge 의 가이드는 모두 제거
                    renderer.removeAllEdgeGuide();

                    //가이드 생성
                    renderer.removeGuide(element);
                    guide = renderer.drawGuide(element);

                    //드래그 대상이 Lane 일 경우는 RootLane에 드래그를 생성한다.
                    if (isLane) {
                        renderer.drawGuide(renderer.getRootLane(element));
                    }

                    //그룹 이동처리 시작
                    var moveTargets = [];
                    $(me._RENDERER.getRootElement()).find("[id$=" + OG.Constants.GUIDE_SUFFIX.BBOX + "]").each(function (index, item) {
                        if (item.id && item.id.indexOf(OG.Constants.CONNECT_GUIDE_SUFFIX.BBOX) == -1) {
                            var elementId = item.id.replace(OG.Constants.GUIDE_SUFFIX.BBOX, "");
                            moveTargets.push({
                                id: elementId
                            });
                        }
                    });
                    var dragTargetGuideLost = false;
                    var newTargetElement;

                    var removeGroupInnerGuides = function (group) {
                        if (group.id === element.id) {
                            dragTargetGuideLost = true;
                        }
                        var childs = renderer.getChilds(group);
                        $.each(childs, function (index, child) {
                            renderer.removeGuide(child);
                            if (group.id === element.id) {
                                dragTargetGuideLost = true;
                            }
                            if (renderer.isGroup(child)) {
                                removeGroupInnerGuides(child);
                            }
                        })
                    };

                    var findParentGuideTarget = function (target) {
                        //부모가 루트일때는 루프를 중단.
                        if (!target) {
                            return;
                        }
                        $.each(moveTargets, function (index, moveTarget) {
                            if (moveTarget.id === target.id) {
                                newTargetElement = target;
                            }
                        });
                        findParentGuideTarget(renderer.getParent(target));
                    };

                    $.each(moveTargets, function (index, moveTarget) {
                        var moveElm = renderer.getElementById(moveTarget.id);
                        if (renderer.isGroup(moveElm)) {
                            removeGroupInnerGuides(moveElm);
                        }
                    });

                    if (dragTargetGuideLost) {
                        findParentGuideTarget(element);
                        if (newTargetElement) {
                            renderer.removeGuide(newTargetElement);
                            guide = renderer.drawGuide(newTargetElement);
                        }
                    }
                    //그룹 이동처리 종료.


                    $(this).data("start", {x: eventOffset.x, y: eventOffset.y});
                    $(this).data("offset", {
                        x: eventOffset.x - me._num(renderer.getAttr(guide.bBox, "x")),
                        y: eventOffset.y - me._num(renderer.getAttr(guide.bBox, "y"))
                    });

                    var bBoxArray = me._getMoveTargets();
                    $(root).data("bBoxArray", bBoxArray);
                    $(element).data('correctionConditions', calculateMoveCorrectionConditions(bBoxArray));
                    renderer.removeRubberBand(renderer.getRootElement());
                },
                drag: function (event) {
                    var eventOffset = me._getOffset(event),
                        start = $(this).data("start"),
                        bBoxArray = $(root).data("bBoxArray"),
                        dx = eventOffset.x - start.x,
                        dy = eventOffset.y - start.y,
                        offset = $(this).data("offset");

                    var conditionAnalysis = correctionConditionAnalysis(dx, dy);
                    dx = me._grid(conditionAnalysis.dx, 'move');
                    dy = me._grid(conditionAnalysis.dy, 'move');

                    // Canvas 영역을 벗어나서 드래그되는 경우 Canvas 확장
                    me._autoExtend(eventOffset.x, eventOffset.y, element);

                    $(this).css({"position": "", "left": "", "top": ""});
                    $.each(bBoxArray, function (k, item) {
                        renderer.setAttr(item.box, {transform: "t" + dx + "," + dy});
                    });

                    setGroupTarget();

                    renderer.removeAllConnectGuide();
                },
                stop: function (event) {
                    var eventOffset = me._getOffset(event),
                        start = $(this).data("start"),
                        bBoxArray = $(root).data("bBoxArray"),
                        dx = eventOffset.x - start.x,
                        dy = eventOffset.y - start.y,
                        groupTarget = $(root).data("groupTarget"),
                        offset = $(this).data("offset"),
                        eleArray;

                    // 자동 붙기 보정
                    var conditionAnalysis = correctionConditionAnalysis(dx, dy);
                    dx = me._grid(conditionAnalysis.dx, 'move');
                    dy = me._grid(conditionAnalysis.dy, 'move');

                    // 이동 처리
                    $(this).css({"position": "", "left": "", "top": ""});
                    eleArray = me._moveElements(bBoxArray, dx, dy);

                    $(root).removeData("bBoxArray");
                    renderer.removeAllGuide();

                    // group target 이 있는 경우 grouping 처리
                    if (groupTarget && OG.Util.isElement(groupTarget)) {
                        // grouping
                        renderer.addToGroup(groupTarget, eleArray);
                        renderer.remove(groupTarget.id + OG.Constants.DROP_OVER_BBOX_SUFFIX);
                        $(root).removeData("groupTarget");
                    } else {
                        // ungrouping
                        var addToGroupArray = [];
                        $.each(eleArray, function (idx, ele) {
                            /**
                             * IE 10,11 use parentNode instead parentElement
                             */
                            var parentNode = ele.parentElement;
                            if (!parentNode) {
                                parentNode = ele.parentNode;
                            }
                            if (parentNode.id !== root.id) {
                                addToGroupArray.push(ele);
                            }
                        });
                        renderer.addToGroup(root, addToGroupArray);
                    }

                    $.each(me._getSelectedElement(), function (idx, selected) {
                        guide = renderer.drawGuide(selected);
                        if (guide) {
                            me.setResizable(selected, guide, me._isResizable(selected.shape));
                            me.setConnectable(selected, guide, me._isConnectable(selected.shape));
                            renderer.toFront(guide.group);
                        }
                    });

                    renderer.removeAllConnectGuide();
                    renderer.toFrontEdges();
                    renderer.checkAllBridgeEdge();
                    renderer.addHistory();
                }
            });
            renderer.setAttr(element, {cursor: 'move'});
            OG.Util.apply(element.shape.geom.style.map, {cursor: 'move'});
        } else {
            renderer.setAttr(element, {cursor: me._isSelectable(element.shape) ? 'pointer' : me._CONFIG.DEFAULT_STYLE.SHAPE.cursor});
            OG.Util.apply(element.shape.geom.style.map, {cursor: me._isSelectable(element.shape) ? 'pointer' : me._CONFIG.DEFAULT_STYLE.SHAPE.cursor});
        }
    },

    /**
     * Shape 엘리먼트의 라인모양을 클릭하여 Shape 끼리 커넥트가 가능하게 한다.
     *
     * @param {Element} element Shape 엘리먼트
     * @param {Object} guide JSON 포맷 가이드 정보
     * @param {Boolean} isConnectable 가능여부
     */
    setConnectable: function (element, guide, isConnectable) {
        var me = this, root = me._RENDERER.getRootGroup(),
            virtualEdge, eventOffset;
        var isEdge = $(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE ? true : false;
        if (!element || !guide) {
            return;
        }

        if (isConnectable) {
            if (!isEdge) {
                $.each(guide.line, function (i, line) {
                    $(line.node).bind({
                        click: function (event) {
                            eventOffset = me._getOffset(event);
                            virtualEdge = me._RENDERER.createVirtualEdge(eventOffset.x, eventOffset.y, element);
                            if (virtualEdge) {
                                $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE, 'created');
                                $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_TEXT, line.text);
                                $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_LABEL, line.label);
                                $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_SHAPE, line.shape);
                            }
                        }
                    });

                    $(line.node).draggable({
                        start: function (event) {
                            me.deselectAll();
                            me._RENDERER.removeAllConnectGuide();
                            me._RENDERER.removeAllVirtualEdge();
                            eventOffset = me._getOffset(event);
                            virtualEdge = me._RENDERER.createVirtualEdge(eventOffset.x, eventOffset.y, element);
                            $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE, 'active');
                            $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_TEXT, line.text);
                            $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_LABEL, line.label);
                            $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_SHAPE, line.shape);
                        }
                    });
                });

                $(guide.rect).bind({
                    click: function (event) {
                        eventOffset = me._getOffset(event);
                        virtualEdge = me._RENDERER.createVirtualEdge(eventOffset.x, eventOffset.y, element);
                        if (virtualEdge) {
                            $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE, 'created');
                        }
                    }
                });

                $(guide.rect).draggable({
                    start: function (event) {
                        me.deselectAll();
                        me._RENDERER.removeAllConnectGuide();
                        me._RENDERER.removeAllVirtualEdge();
                        eventOffset = me._getOffset(event);
                        virtualEdge = me._RENDERER.createVirtualEdge(eventOffset.x, eventOffset.y, element);
                        $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE, 'active');
                    }
                });
            }
        }
    },

    /**
     * Shape 엘리먼트의 리사이즈 가능여부를 설정한다.
     *
     * @param {Element} element Shape 엘리먼트
     * @param {Object} guide JSON 포맷 가이드 정보
     * @param {Boolean} isResizable 가능여부
     */
    setResizable: function (element, guide, isResizable) {
        var me = this;
        var root = me._RENDERER.getRootGroup();
        if (!element || !guide) {
            return;
        }

        var isEdge = $(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE ? true : false;
        var renderer = me._RENDERER;

        var boundary = me._RENDERER.getBoundary(element);
        var uP = boundary.getUpperCenter().y;
        var lwP = boundary.getLowerCenter().y;
        var lP = boundary.getLeftCenter().x;
        var rP = boundary.getRightCenter().x;
        var bWidth = boundary.getWidth();
        var bHeight = boundary.getHeight();

        var calculateResizeCorrectionConditions = function (direction) {
            //조건집합
            var correctionConditions = [];
            var minSize = me._CONFIG.GUIDE_MIN_SIZE;
            var laneMinSize = me._CONFIG.LANE_MIN_SIZE;
            var groupInnerSapce = me._CONFIG.GROUP_INNER_SAPCE;

            //모든 Shape 의 중심점,상하좌우 끝을 조건에 포함한다.
            //이 조건은 다른 조건과 달리 리사이즈 최소 보정치 계산과 함께 하기 때문에 min,max 가 반대이다.
            var delay = me._CONFIG.EDGE_MOVE_DELAY_SIZE;
            var allShapes = renderer.getAllShapes();
            $.each(allShapes, function (idx, shape) {
                if (renderer.isEdge(shape)) {
                    return;
                }
                if (shape.id === element.id) {
                    return;
                }
                var boundary = renderer.getBoundary(shape);
                var center = boundary.getCentroid();
                var upperLeft = boundary.getUpperLeft();
                var lowerRight = boundary.getLowerRight();

                //top boundary range
                correctionConditions.push({
                    condition: {
                        maxY: upperLeft.y - delay,
                        minY: upperLeft.y + delay
                    },
                    fixedPosition: {
                        y: upperLeft.y
                    },
                    guidePosition: {
                        y: upperLeft.y
                    },
                    id: idx
                });

                //low boundary range
                correctionConditions.push({
                    condition: {
                        maxY: lowerRight.y - delay,
                        minY: lowerRight.y + delay
                    },
                    fixedPosition: {
                        y: lowerRight.y
                    },
                    guidePosition: {
                        y: lowerRight.y
                    },
                    id: idx
                });

                //left boundary range
                correctionConditions.push({
                    condition: {
                        maxX: upperLeft.x - delay,
                        minX: upperLeft.x + delay
                    },
                    fixedPosition: {
                        x: upperLeft.x
                    },
                    guidePosition: {
                        x: upperLeft.x
                    },
                    id: idx
                });

                //right boundary range
                correctionConditions.push({
                    condition: {
                        maxX: lowerRight.x - delay,
                        minX: lowerRight.x + delay
                    },
                    fixedPosition: {
                        x: lowerRight.x
                    },
                    guidePosition: {
                        x: lowerRight.x
                    },
                    id: idx
                });

                //center vertical boundary range
                correctionConditions.push({
                    condition: {
                        maxX: center.x - delay,
                        minX: center.x + delay
                    },
                    fixedPosition: {
                        x: center.x
                    },
                    guidePosition: {
                        x: center.x
                    },
                    id: idx
                });

                //center horizontal boundary range
                correctionConditions.push({
                    condition: {
                        maxY: center.y - delay,
                        minY: center.y + delay,
                    },
                    fixedPosition: {
                        y: center.y
                    },
                    guidePosition: {
                        y: center.y
                    },
                    id: idx
                });
            });

            function addRightCtrlCondition() {
                correctionConditions.push({
                    condition: {
                        minX: lP + minSize
                    },
                    fixedPosition: {
                        x: lP + minSize
                    }
                });
            }

            function addLeftCtrlCondition() {
                correctionConditions.push({
                    condition: {
                        maxX: rP - minSize
                    },
                    fixedPosition: {
                        x: rP - minSize
                    }
                });
            }

            function addUpperCtrlCondition() {
                correctionConditions.push({
                    condition: {
                        maxY: lwP - minSize
                    },
                    fixedPosition: {
                        y: lwP - minSize
                    }
                });
            }

            function addLowCtrlCondition() {
                correctionConditions.push({
                    condition: {
                        minY: uP + minSize
                    },
                    fixedPosition: {
                        y: uP + minSize
                    }
                });
            }

            //상단 컨트롤러를 위쪽으로 드래그할 경우
            function laneUpHandleMoveup() {
                if (renderer.isHorizontalLane(element)) {
                    var baseLanes = renderer.getBaseLanes(element);
                    var indexAsDirection = renderer.getNearestBaseLaneIndexAsDirection(element, 'upper');
                    if (indexAsDirection > 0) {
                        var compareLane = baseLanes[indexAsDirection - 1];
                        var resizableSpace = renderer.getBoundary(compareLane).getHeight() - laneMinSize;
                        correctionConditions.push({
                            condition: {
                                minY: uP - resizableSpace
                            },
                            fixedPosition: {
                                y: uP - resizableSpace
                            }
                        });
                    }
                }
            }

            //상단 컨트롤러를 아래쪽으로 드래그할 경우
            function laneUpHandleMovedown() {
                if (renderer.isHorizontalLane(element)) {
                    var baseLanes = renderer.getBaseLanes(element);
                    var indexAsDirection = renderer.getNearestBaseLaneIndexAsDirection(element, 'upper');
                    var compareLane = baseLanes[indexAsDirection];
                    var resizableSpace = renderer.getBoundary(compareLane).getHeight() - laneMinSize;
                    correctionConditions.push({
                        condition: {
                            maxY: uP + resizableSpace
                        },
                        fixedPosition: {
                            y: uP + resizableSpace
                        }
                    });
                    if (indexAsDirection === 0) {
                        var boundaryOfInnerShapes = renderer.getBoundaryOfInnerShapesGroup(element);
                        if (boundaryOfInnerShapes) {
                            correctionConditions.push({
                                condition: {
                                    maxY: boundaryOfInnerShapes.getUpperCenter().y - groupInnerSapce
                                },
                                fixedPosition: {
                                    y: boundaryOfInnerShapes.getUpperCenter().y - groupInnerSapce
                                }
                            });
                        }
                    }
                }
                if (renderer.isVerticalLane(element)) {
                    var smallestBaseLane = renderer.getSmallestBaseLane(element);
                    var resizableSpace = renderer.getExceptTitleLaneArea(smallestBaseLane).getHeight() - laneMinSize;
                    correctionConditions.push({
                        condition: {
                            maxY: uP + resizableSpace
                        },
                        fixedPosition: {
                            y: uP + resizableSpace
                        }
                    });

                    var boundaryOfInnerShapes = renderer.getBoundaryOfInnerShapesGroup(element);
                    if (boundaryOfInnerShapes) {
                        var rootLane = renderer.getRootLane(element);
                        var rootTitleSpace = renderer.getBoundary(rootLane).getHeight() - renderer.getExceptTitleLaneArea(rootLane).getHeight();
                        correctionConditions.push({
                            condition: {
                                maxY: boundaryOfInnerShapes.getUpperCenter().y - groupInnerSapce - rootTitleSpace
                            },
                            fixedPosition: {
                                y: boundaryOfInnerShapes.getUpperCenter().y - groupInnerSapce - rootTitleSpace
                            }
                        });
                    }
                }
            }

            //하단 컨트롤러를 위쪽으로 드래그할 경우
            function laneLowHandleMoveup() {
                if (renderer.isHorizontalLane(element)) {
                    var baseLanes = renderer.getBaseLanes(element);
                    var indexAsDirection = renderer.getNearestBaseLaneIndexAsDirection(element, 'low');
                    var compareLane = baseLanes[indexAsDirection];
                    var resizableSpace = renderer.getBoundary(compareLane).getHeight() - laneMinSize;
                    correctionConditions.push({
                        condition: {
                            minY: lwP - resizableSpace
                        },
                        fixedPosition: {
                            y: lwP - resizableSpace
                        }
                    });

                    if (indexAsDirection === baseLanes.length - 1) {
                        var boundaryOfInnerShapes = renderer.getBoundaryOfInnerShapesGroup(element);
                        if (boundaryOfInnerShapes) {
                            correctionConditions.push({
                                condition: {
                                    minY: boundaryOfInnerShapes.getLowerCenter().y + groupInnerSapce
                                },
                                fixedPosition: {
                                    y: boundaryOfInnerShapes.getLowerCenter().y + groupInnerSapce
                                }
                            });
                        }
                    }
                }
                if (renderer.isVerticalLane(element)) {
                    var smallestBaseLane = renderer.getSmallestBaseLane(element);
                    var resizableSpace = renderer.getExceptTitleLaneArea(smallestBaseLane).getHeight() - laneMinSize;
                    correctionConditions.push({
                        condition: {
                            minY: lwP - resizableSpace
                        },
                        fixedPosition: {
                            y: lwP - resizableSpace
                        }
                    });

                    var boundaryOfInnerShapes = renderer.getBoundaryOfInnerShapesGroup(element);
                    if (boundaryOfInnerShapes) {
                        correctionConditions.push({
                            condition: {
                                minY: boundaryOfInnerShapes.getLowerCenter().y + groupInnerSapce
                            },
                            fixedPosition: {
                                y: boundaryOfInnerShapes.getLowerCenter().y + groupInnerSapce
                            }
                        });
                    }
                }
            }

            //하단 컨트롤러를 아래쪽으로 드래그할 경우
            function laneLowHandleMovedown() {
                if (renderer.isHorizontalLane(element)) {
                    var baseLanes = renderer.getBaseLanes(element);
                    var indexAsDirection = renderer.getNearestBaseLaneIndexAsDirection(element, 'low');
                    if (indexAsDirection < baseLanes.length - 1) {
                        var compareLane = baseLanes[indexAsDirection + 1];
                        var resizableSpace = renderer.getBoundary(compareLane).getHeight() - laneMinSize;
                        correctionConditions.push({
                            condition: {
                                maxY: lwP + resizableSpace
                            },
                            fixedPosition: {
                                y: lwP + resizableSpace
                            }
                        });
                    }
                }
            }

            //좌측 컨트롤러를 우측으로 드래그할 경우
            function laneLeftHandleMoveright() {
                if (renderer.isHorizontalLane(element)) {
                    var smallestBaseLane = renderer.getSmallestBaseLane(element);
                    var resizableSpace = renderer.getExceptTitleLaneArea(smallestBaseLane).getWidth() - laneMinSize;
                    correctionConditions.push({
                        condition: {
                            maxX: lP + resizableSpace
                        },
                        fixedPosition: {
                            x: lP + resizableSpace
                        }
                    });

                    var boundaryOfInnerShapes = renderer.getBoundaryOfInnerShapesGroup(element);
                    if (boundaryOfInnerShapes) {
                        var rootLane = renderer.getRootLane(element);
                        var rootTitleSpace = renderer.getBoundary(rootLane).getWidth() - renderer.getExceptTitleLaneArea(rootLane).getWidth();
                        correctionConditions.push({
                            condition: {
                                maxX: boundaryOfInnerShapes.getLeftCenter().x - groupInnerSapce - rootTitleSpace
                            },
                            fixedPosition: {
                                x: boundaryOfInnerShapes.getLeftCenter().x - groupInnerSapce - rootTitleSpace
                            }
                        });
                    }
                }
                if (renderer.isVerticalLane(element)) {
                    var baseLanes = renderer.getBaseLanes(element);
                    var indexAsDirection = renderer.getNearestBaseLaneIndexAsDirection(element, 'left');
                    var compareLane = baseLanes[indexAsDirection];
                    var resizableSpace = renderer.getBoundary(compareLane).getWidth() - laneMinSize;
                    correctionConditions.push({
                        condition: {
                            maxX: lP + resizableSpace
                        },
                        fixedPosition: {
                            x: lP + resizableSpace
                        }
                    });

                    if (indexAsDirection === baseLanes.length - 1) {
                        var boundaryOfInnerShapes = renderer.getBoundaryOfInnerShapesGroup(element);
                        if (boundaryOfInnerShapes) {
                            correctionConditions.push({
                                condition: {
                                    maxX: boundaryOfInnerShapes.getLeftCenter().x - groupInnerSapce
                                },
                                fixedPosition: {
                                    x: boundaryOfInnerShapes.getLeftCenter().x - groupInnerSapce
                                }
                            });
                        }
                    }
                }
            }

            //좌측 컨트롤러를 좌측으로 드래그할 경우
            function laneLeftHandleMoveleft() {
                if (renderer.isVerticalLane(element)) {
                    var baseLanes = renderer.getBaseLanes(element);
                    var indexAsDirection = renderer.getNearestBaseLaneIndexAsDirection(element, 'left');
                    if (indexAsDirection < baseLanes.length - 1) {
                        var compareLane = baseLanes[indexAsDirection + 1];
                        var resizableSpace = renderer.getBoundary(compareLane).getWidth() - laneMinSize;
                        correctionConditions.push({
                            condition: {
                                minX: lP - resizableSpace
                            },
                            fixedPosition: {
                                x: lP - resizableSpace
                            }
                        });
                    }
                }
            }

            //우측 컨트롤러를 좌측으로 드래그할 경우
            function laneRightHandleMoveleft() {
                if (renderer.isHorizontalLane(element)) {
                    var smallestBaseLane = renderer.getSmallestBaseLane(element);
                    var resizableSpace = renderer.getExceptTitleLaneArea(smallestBaseLane).getWidth() - laneMinSize;
                    correctionConditions.push({
                        condition: {
                            minX: rP - resizableSpace
                        },
                        fixedPosition: {
                            x: rP - resizableSpace
                        }
                    });

                    var boundaryOfInnerShapes = renderer.getBoundaryOfInnerShapesGroup(element);
                    if (boundaryOfInnerShapes) {
                        correctionConditions.push({
                            condition: {
                                minX: boundaryOfInnerShapes.getRightCenter().x + groupInnerSapce
                            },
                            fixedPosition: {
                                x: boundaryOfInnerShapes.getRightCenter().x + groupInnerSapce
                            }
                        });
                    }
                }
                if (renderer.isVerticalLane(element)) {
                    var baseLanes = renderer.getBaseLanes(element);
                    var indexAsDirection = renderer.getNearestBaseLaneIndexAsDirection(element, 'right');
                    var compareLane = baseLanes[indexAsDirection];
                    var resizableSpace = renderer.getBoundary(compareLane).getWidth() - laneMinSize;
                    correctionConditions.push({
                        condition: {
                            minX: rP - resizableSpace
                        },
                        fixedPosition: {
                            x: rP - resizableSpace
                        }
                    });
                    if (indexAsDirection === 0) {
                        var boundaryOfInnerShapes = renderer.getBoundaryOfInnerShapesGroup(element);
                        if (boundaryOfInnerShapes) {
                            correctionConditions.push({
                                condition: {
                                    minX: boundaryOfInnerShapes.getRightCenter().x + groupInnerSapce
                                },
                                fixedPosition: {
                                    x: boundaryOfInnerShapes.getRightCenter().x + groupInnerSapce
                                }
                            });
                        }
                    }
                }
            }

            //우측 컨트롤러를 우측으로 드래그할 경우
            function laneRightHandleMoveright() {
                if (renderer.isVerticalLane(element)) {
                    var baseLanes = renderer.getBaseLanes(element);
                    var indexAsDirection = renderer.getNearestBaseLaneIndexAsDirection(element, 'right');
                    if (indexAsDirection > 0) {
                        var compareLane = baseLanes[indexAsDirection - 1];
                        var resizableSpace = renderer.getBoundary(compareLane).getWidth() - laneMinSize;
                        correctionConditions.push({
                            condition: {
                                maxX: rP + resizableSpace
                            },
                            fixedPosition: {
                                x: rP + resizableSpace
                            }
                        });
                    }
                }
            }

            if (upHandle(direction)) {
                addUpperCtrlCondition();
            }
            if (lowHandle(direction)) {
                addLowCtrlCondition();
            }
            if (leftHandle(direction)) {
                addLeftCtrlCondition();
            }
            if (rightHandle(direction)) {
                addRightCtrlCondition();
            }

            if (renderer.isLane(element)) {
                if (upHandle(direction)) {
                    laneUpHandleMoveup();
                    laneUpHandleMovedown();
                }
                if (lowHandle(direction)) {
                    laneLowHandleMoveup();
                    laneLowHandleMovedown();
                }
                if (leftHandle(direction)) {
                    laneLeftHandleMoveright();
                    laneLeftHandleMoveleft();
                }
                if (rightHandle(direction)) {
                    laneRightHandleMoveleft();
                    laneRightHandleMoveright();
                }
            }
            return correctionConditions;
        };
        //element가 가지고있는 범위조건에 따라 새로운 포지션을 계산한다.
        var correctionConditionAnalysis = function (controller, offset) {
            var fixedPosition = {
                x: offset.x,
                y: offset.y
            };
            var calculateFixedPosition = function (expectedPosition) {
                if (!expectedPosition) {
                    return fixedPosition;
                }
                if (expectedPosition.x && !expectedPosition.y) {
                    return {
                        x: expectedPosition.x,
                        y: fixedPosition.y
                    }
                }
                if (expectedPosition.y && !expectedPosition.x) {
                    return {
                        x: fixedPosition.x,
                        y: expectedPosition.y
                    }
                }
                if (expectedPosition.x && expectedPosition.y) {
                    return expectedPosition;
                }
                return fixedPosition;
            };
            var correctionConditions = $(controller).data('correctionConditions');
            if (!correctionConditions) {
                return fixedPosition;
            }

            var conditionsPassCandidates = [];
            $.each(correctionConditions, function (index, correctionCondition) {
                var condition = correctionCondition.condition;

                var conditionsPassToFix = true;
                if (condition.minX) {
                    if (offset.x > condition.minX) {
                        conditionsPassToFix = false;
                    }
                }
                if (condition.maxX) {
                    if (offset.x < condition.maxX) {
                        conditionsPassToFix = false;
                    }
                }
                if (condition.minY) {
                    if (offset.y > condition.minY) {
                        conditionsPassToFix = false;
                    }
                }
                if (condition.maxY) {
                    if (offset.y < condition.maxY) {
                        conditionsPassToFix = false;
                    }
                }
                if (conditionsPassToFix) {
                    conditionsPassCandidates.push(correctionCondition);
                }
            });

            $.each(conditionsPassCandidates, function (index, conditionsPassCandidate) {
                fixedPosition = calculateFixedPosition(conditionsPassCandidate.fixedPosition);
                var guidePosition = conditionsPassCandidate.guidePosition;
                if (guidePosition) {
                    renderer.drawStickGuide(guidePosition);
                }
            });
            if (!conditionsPassCandidates.length) {
                renderer.removeAllStickGuide();
            }

            return fixedPosition;

        };

        var upHandle = function (handleName) {
            if (handleName === 'ul' || handleName === 'uc' || handleName === 'ur') {
                return true;
            }
            return false;
        };

        var lowHandle = function (handleName) {
            if (handleName === 'lwl' || handleName === 'lwc' || handleName === 'lwr') {
                return true;
            }
            return false;
        };

        var rightHandle = function (handleName) {
            if (handleName === 'ur' || handleName === 'rc' || handleName === 'lwr') {
                return true;
            }
            return false;
        };

        var leftHandle = function (handleName) {
            if (handleName === 'ul' || handleName === 'lc' || handleName === 'lwl') {
                return true;
            }
            return false;
        };

        if (isResizable === true) {
            if (!isEdge) {
                for (var _handleName in guide) {
                    var handles = ['ul', 'uc', 'ur', 'rc', 'lwr', 'lwc', 'lwl', 'lc'];
                    var indexOfHandle = handles.indexOf(_handleName);
                    if (indexOfHandle === -1) {
                        continue;
                    }

                    $(guide[_handleName]).data('handleName', _handleName);
                    $(guide[_handleName]).draggable({
                        start: function (event) {
                            $(root).data(OG.Constants.GUIDE_SUFFIX.ONRESIZE, 'active');
                            var handleName = $(this).data('handleName');
                            var eventOffset = me._getOffset(event);
                            var hx = renderer.getAttr(guide[handleName], "x");
                            var hy = renderer.getAttr(guide[handleName], "y");
                            var hWidth = renderer.getAttr(guide[handleName], "width");
                            var hHeight = renderer.getAttr(guide[handleName], "height");
                            $(this).data("start", {x: eventOffset.x, y: eventOffset.y});
                            $(this).data("offset", {
                                x: eventOffset.x - me._num(hx + hWidth / 2),
                                y: eventOffset.y - me._num(hy + hHeight / 2)
                            });

                            $(this).data('correctionConditions', calculateResizeCorrectionConditions(handleName));
                            renderer.removeRubberBand(renderer.getRootElement());
                        },
                        drag: function (event) {
                            $(root).data(OG.Constants.GUIDE_SUFFIX.ONRESIZE, 'active');
                            var handleName = $(this).data('handleName');
                            var eventOffset = me._getOffset(event),
                                start = $(this).data("start"),
                                offset = $(this).data("offset");
                            var hWidth = renderer.getAttr(guide[handleName], "width");
                            var hHeight = renderer.getAttr(guide[handleName], "height");
                            var newXY = correctionConditionAnalysis($(this), {
                                x: eventOffset.x - offset.x,
                                y: eventOffset.y - offset.y
                            });
                            var newX = me._grid(newXY.x);
                            var newY = me._grid(newXY.y);
                            var newWidth, newHeight
                            var newUp = uP;
                            var newLwp = lwP;
                            var newLp = lP;
                            var newRp = rP;
                            $(this).css({"position": "", "left": "", "top": ""});
                            if (upHandle(handleName)) {
                                newUp = newY;
                            }
                            if (lowHandle(handleName)) {
                                newLwp = newY;
                            }
                            if (rightHandle(handleName)) {
                                newRp = newX;
                            }
                            if (leftHandle(handleName)) {
                                newLp = newX;
                            }
                            newWidth = Math.abs(newRp - newLp);
                            newHeight = Math.abs(newLwp - newUp);

                            renderer.setAttr(guide.ul, {
                                x: newLp - hWidth / 2,
                                y: newUp - hHeight / 2
                            });
                            renderer.setAttr(guide.uc, {
                                x: (newLp + newRp) / 2 - hWidth / 2,
                                y: newUp - hHeight / 2
                            });
                            renderer.setAttr(guide.ur, {
                                x: newRp - hWidth / 2,
                                y: newUp - hHeight / 2
                            });
                            renderer.setAttr(guide.lc, {
                                x: newLp - hWidth / 2,
                                y: (newUp + newLwp) / 2 - hHeight / 2
                            });
                            renderer.setAttr(guide.rc, {
                                x: newRp - hWidth / 2,
                                y: (newUp + newLwp) / 2 - hHeight / 2
                            });
                            renderer.setAttr(guide.lwl, {
                                x: newLp - hWidth / 2,
                                y: newLwp - hHeight / 2
                            });
                            renderer.setAttr(guide.lwc, {
                                x: (newLp + newRp) / 2 - hWidth / 2,
                                y: newLwp - hHeight / 2
                            });
                            renderer.setAttr(guide.lwr, {
                                x: newRp - hWidth / 2,
                                y: newLwp - hHeight / 2
                            });
                            renderer.setAttr(guide.bBox, {
                                x: newLp,
                                y: newUp,
                                width: newWidth,
                                height: newHeight
                            });
                            renderer.removeAllConnectGuide();
                        },
                        stop: function (event) {
                            $(root).data(OG.Constants.GUIDE_SUFFIX.ONRESIZE, false);
                            var handleName = $(this).data('handleName');
                            var eventOffset = me._getOffset(event),
                                start = $(this).data("start"),
                                offset = $(this).data("offset");
                            var newXY = correctionConditionAnalysis($(this), {
                                x: eventOffset.x - offset.x,
                                y: eventOffset.y - offset.y
                            });
                            var newX = me._grid(newXY.x);
                            var newY = me._grid(newXY.y);
                            var newUp = uP;
                            var newLwp = lwP;
                            var newLp = lP;
                            var newRp = rP;
                            if (upHandle(handleName)) {
                                newUp = newY;
                            }
                            if (lowHandle(handleName)) {
                                newLwp = newY;
                            }
                            if (rightHandle(handleName)) {
                                newRp = newX;
                            }
                            if (leftHandle(handleName)) {
                                newLp = newX;
                            }
                            var newWidth = Math.abs(newRp - newLp);
                            var newHeight = Math.abs(newLwp - newUp);
                            var du = uP - newUp;
                            var dlw = newLwp - lwP;
                            var dl = lP - newLp;
                            var dr = newRp - rP;

                            //다른 selected 엘리먼트 리사이즈용 변수
                            var stBoundary, stUp, stLwp, stLp, stRp,
                                newStUp, newStLwp, newStLp, newStRp,
                                stDu, stDlw, stDl, stDr;

                            $(this).css({"position": "absolute", "left": "0px", "top": "0px"});
                            if (element && element.shape.geom) {
                                if (renderer.isLane(element)) {
                                    renderer.resizeLane(element, [du, dlw, dl, dr]);
                                } else {
                                    renderer.resize(element, [du, dlw, dl, dr]);
                                }
                                renderer.removeGuide(element);
                                var _guide = renderer.drawGuide(element);
                                if (_guide) {
                                    me.setResizable(element, _guide, me._isResizable(element.shape));
                                    me.setConnectable(element, _guide, me._isConnectable(element.shape));
                                }

                                //선택된 다른 엘리먼트들의 리사이즈 처리
                                $.each(me._getSelectedElement(), function (idx, selected) {
                                    if (selected.id === element.id) {
                                        return;
                                    }
                                    if (renderer.isShape(selected) && !renderer.isEdge(selected)) {
                                        stBoundary = renderer.getBoundary(selected);
                                        stUp = stBoundary.getUpperCenter().y;
                                        stLwp = stBoundary.getLowerCenter().y;
                                        stLp = stBoundary.getLeftCenter().x;
                                        stRp = stBoundary.getRightCenter().x;
                                        newStUp = stUp;
                                        newStLwp = stLwp;
                                        newStLp = stLp;
                                        newStRp = stRp;
                                        if (upHandle(handleName)) {
                                            newStUp = stLwp - newHeight;
                                        }
                                        if (lowHandle(handleName)) {
                                            newStLwp = stUp + newHeight;
                                        }
                                        if (rightHandle(handleName)) {
                                            newStRp = stLp + newWidth;
                                        }
                                        if (leftHandle(handleName)) {
                                            newStLp = stRp - newWidth;
                                        }
                                        stDu = stUp - newStUp;
                                        stDlw = newStLwp - stLwp;
                                        stDl = stLp - newStLp;
                                        stDr = newStRp - stRp;

                                        if (renderer.isLane(selected)) {
                                            renderer.resizeLane(selected, [stDu, stDlw, stDl, stDr]);
                                        } else {
                                            renderer.resize(selected, [stDu, stDlw, stDl, stDr]);
                                        }
                                        renderer.removeGuide(selected);
                                        var _stGuide = renderer.drawGuide(selected);
                                        if (_stGuide) {
                                            me.setResizable(selected, _stGuide, me._isResizable(selected.shape));
                                            me.setConnectable(selected, _stGuide, me._isConnectable(selected.shape));
                                        }
                                    }
                                });
                            }
                            renderer.removeAllConnectGuide();
                            renderer.addHistory();
                        }
                    });
                }
                // add tooltip for guide activity icon
                for (var item in guide) {
                    if ($(guide[item]).attr('tooltip') == 'enable')
                        if ($(guide[item]).tooltip)
                            $(guide[item]).tooltip();
                }
            }
        } else {
            if ($(element).attr("_shape") !== OG.Constants.SHAPE_TYPE.EDGE) {
                renderer.setAttr(guide.ul, {cursor: 'default'});
                renderer.setAttr(guide.ur, {cursor: 'default'});
                renderer.setAttr(guide.lwl, {cursor: 'default'});
                renderer.setAttr(guide.lwr, {cursor: 'default'});
                renderer.setAttr(guide.lc, {cursor: 'default'});
                renderer.setAttr(guide.uc, {cursor: 'default'});
                renderer.setAttr(guide.rc, {cursor: 'default'});
                renderer.setAttr(guide.lwc, {cursor: 'default'});
            }
        }
    },

    /**
     * 주어진 Shape Element 를 마우스 클릭하여 선택가능하도록 한다.
     * 선택가능해야 리사이즈가 가능하다.
     * 선택시 커넥트 모드일 경우 connect 가능하게 한다.
     *
     * @param {Element} element Shape Element
     * @param {Boolean} isSelectable 선택가능여부
     */
    setClickSelectable: function (element, isSelectable) {
        var me = this;
        var renderer = me._RENDERER;
        var root = me._RENDERER.getRootGroup();
        if (isSelectable === true) {
            // 마우스 클릭하여 선택 처리
            $(element).bind({
                click: function (event, param) {
                    root = me._RENDERER.getRootGroup();
                    if (me._CONFIG.FOCUS_CANVAS_ONSELECT) {
                        $(me._RENDERER.getContainer()).focus();
                    }
                    //$(me._RENDERER.getContainer()).focus();

                    if (element.shape) {
                        me._RENDERER.removeAllVirtualEdge();

                        if ($(element).attr("_selected") === "true") {
                            me.deselectShape(element);
                            if (param) {
                                if (!param.shiftKey && !param.ctrlKey) {
                                    me.selectShape(element, event, param);
                                }
                            } else {
                                if (!event.shiftKey && !event.ctrlKey) {
                                    me.selectShape(element);
                                }
                            }
                        } else {
                            me.selectShape(element, event, param);
                        }
                        return false;
                    }
                },
                mousedown: function (event) {
                    event.stopPropagation();
                },
                mouseup: function (event) {
                    root = me._RENDERER.getRootGroup();
                    if (element.shape) {
                        var isConnectable = me._isConnectable(element.shape);
                        var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);
                        var connectText = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_TEXT);
                        var connectLabel = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_LABEL);
                        var connectShape = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_SHAPE);
                        var isRectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE);
                        var isEdge = $(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE;

                        if (isConnectMode) {
                            if (isConnectable && !isEdge) {
                                var target = me._RENDERER.getTargetfromVirtualEdge();

                                if (target.id === element.id) {
                                    return;
                                }
                                me._RENDERER.removeAllVirtualEdge();
                                //From,To 가능여부 확인
                                if (!me._isConnectableFrom(target.shape)) {
                                    isConnectable = false;
                                }
                                if (!me._isConnectableTo(element.shape)) {
                                    isConnectable = false;
                                }
                                if (isConnectable) {
                                    if (connectShape) {
                                        eval('connectShape = new ' + connectShape + '()');
                                    }
                                    me._RENDERER._CANVAS.connect(target, element, null, connectLabel, null, null, null, null, connectShape);
                                    $(root).removeData(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_SHAPE);
                                    $(root).removeData(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_TEXT);
                                    $(root).removeData(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_LABEL);
                                    renderer.addHistory();
                                }
                            } else {
                                me._RENDERER.removeAllVirtualEdge();
                            }
                        }

                        if (isRectMode === 'active') {
                            //새로운 것 만드는 과정
                            var eventOffset = me._getOffset(event);

                            var target = renderer.getTargetfromVirtualEdge();
                            renderer.removeAllVirtualEdge();
                            var shapeId = $(target).attr('_shape_id');
                            var newShape = target.shape.clone();

                            var style = target.shape.geom.style;
                            var boundary = renderer.getBoundary(target);
                            var width = boundary.getWidth();
                            var height = boundary.getHeight();

                            //From,To 가능여부 확인
                            if (!me._isConnectableFrom(target.shape)) {
                                isConnectable = false;
                            }
                            if (!me._isConnectableTo(target.shape)) {
                                isConnectable = false;
                            }
                            if (isConnectable) {
                                var rectShape = renderer._CANVAS.drawShape([eventOffset.x, eventOffset.y], newShape, [width, height], style);
                                $(renderer._PAPER.canvas).trigger('duplicated', [target, rectShape]);

                                renderer._CANVAS.connect(target, rectShape, null, null, null, null);
                            }
                        }
                    }
                }
            });

            // 마우스 우클릭하여 선택 처리
            if (me._CONFIG.ENABLE_CONTEXTMENU) {
                $(element).bind("contextmenu", function (event) {

                    //중복된 콘텍스트를 방지
                    var eventOffset = me._getOffset(event);
                    var frontElement = renderer.getFrontForCoordinate([eventOffset.x, eventOffset.y]);
                    if (!frontElement) {
                        return;
                    }
                    if (frontElement.id !== element.id) {
                        return;
                    }

                    if (element.shape) {
                        if ($(element).attr("_selected") !== "true") {
                            me.selectShape(element, event);
                        }
                    }
                });
            }

            me._RENDERER.setAttr(element, {cursor: 'pointer'});
            OG.Util.apply(element.shape.geom.style.map, {cursor: 'pointer'});

        } else {
            $(element).unbind('click');
            me._RENDERER.setAttr(element, {cursor: me._CONFIG.DEFAULT_STYLE.SHAPE.cursor});
            OG.Util.apply(element.shape.geom.style.map, {cursor: me._CONFIG.DEFAULT_STYLE.SHAPE.cursor});
        }
    },

    /**
     * Lane,Pool 엘리먼트가 새로 생성될 시 그룹을 맺도록 한다.
     *
     * @param {Element} element Shape 엘리먼트
     */
    setGroupDropable: function (element) {
        var me = this;
        var renderer = me._RENDERER;
        var root = renderer.getRootGroup();

        $(element).bind("mousedown", function () {
            var newPool = $(root).data('newPool');
            var poolInnderShape = $(root).data('poolInnderShape');
            if (!renderer.isLane(element) && !renderer.isPool(element)) {
                return;
            }
            if (!newPool) {
                return;
            }

            $.each(poolInnderShape, function (index, innderShape) {
                newPool.appendChild(innderShape);
            });

            if ($(newPool).data('originalStyle')) {
                newPool.shape.geom.style.map = $(newPool).data('originalStyle');
            }
            renderer.redrawShape(newPool);
            renderer.offDropablePool();
        });
    },

    /**
     * 드래그하여 페이지 이동이 가능하게 한다.
     * @param {Boolean} dragPageMovable 드래그 페이지 이동 가능 여부
     */
    setDragPageMovable: function (dragPageMovable) {
        if (!dragPageMovable) {
            return;
        }
        var renderer = this._RENDERER;
        var me = this, rootEle = renderer.getRootElement();
        var root = renderer.getRootGroup();
        var container = renderer._CANVAS._CONTAINER;
        $(rootEle).bind("mousedown", function (event) {
            root = renderer.getRootGroup();
            var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);
            var isRectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE);
            if (isConnectMode === 'active' || isRectMode === 'active') {
                return;
            }
            var eventOffset = me._getOffset(event);
            $(root).data("dragPageMove", {x: eventOffset.x, y: eventOffset.y});
        });
        $(rootEle).bind("mousemove", function (event) {
            root = renderer.getRootGroup();
            var isResizing = $(root).data(OG.Constants.GUIDE_SUFFIX.ONRESIZE);
            var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);
            var isRectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE);
            if (isConnectMode === 'active' || isRectMode === 'active' || isResizing === 'active') {
                return;
            }
            var pageMove = $(root).data("dragPageMove"), eventOffset;

            if (pageMove) {
                eventOffset = me._getOffset(event);
                var moveX = eventOffset.x - pageMove.x;
                var moveY = eventOffset.y - pageMove.y;
                var cuScrollLeft = container.scrollLeft;
                var cuScrollTop = container.scrollTop;
                $(container).scrollLeft(cuScrollLeft - moveX);
                $(container).scrollTop(cuScrollTop - moveY);
            }
        });
        $(rootEle).bind("mouseup", function (event) {
            root = renderer.getRootGroup();
            var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);
            var isRectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE);
            if (isConnectMode === 'active' || isRectMode === 'active') {
                return;
            }
            $(root).removeData('dragPageMove');
        });
    },

    /**
     * 휠 스케일을 가능하게 한다.
     * @param {Boolean} wheelScalable 휠 스케일 가능 여부
     */
    setWheelScale: function (wheelScalable) {
        if (!wheelScalable) {
            return;
        }
        var renderer = this._RENDERER;
        var me = this, rootEle = renderer.getRootElement();
        var updateScale = function (event, isUp) {
            var eventOffset = me._getOffset(event);
            var scrollLeft = rootEle.scrollLeft;
            var scrollTop = rootEle.scrollTop;
            var cuScale;
            var preScale = renderer.getScale();
            if (isUp) {
                cuScale = preScale + 0.1;
            } else {
                cuScale = preScale - 0.1;
            }
            if (cuScale < 0.25) {
                cuScale = 0.25;
            }
            if (cuScale > 4) {
                cuScale = 4;
            }
            var container = renderer._CANVAS._CONTAINER;
            var preCenterX = eventOffset.x;
            var preCenterY = eventOffset.y;

            renderer.setScale(cuScale);

            eventOffset = me._getOffset(event);
            var cuCenterX = eventOffset.x;
            var cuCenterY = eventOffset.y;

            var moveX = (preCenterX - cuCenterX) * cuScale;
            var moveY = (preCenterY - cuCenterY) * cuScale;

            var cuScrollLeft = container.scrollLeft;
            var cuScrollTop = container.scrollTop;
            $(container).scrollLeft(cuScrollLeft + moveX);
            $(container).scrollTop(cuScrollTop + moveY);
            renderer._CANVAS.updateNavigatior();

        };
        $(rootEle).bind('mousewheel DOMMouseScroll', function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // scroll up
                updateScale(event, true);
            }
            else {
                updateScale(event, false);
            }
        });
    },

    /**
     * 마우스 드래그 영역지정 선택가능여부를 설정한다.
     * 선택가능해야 리사이즈가 가능하다.
     *
     * @param {Boolean} isSelectable 선택가능여부
     * @param {Boolean} dragPageMovable 드래그 페이지 이동 가능 여부
     */
    setDragSelectable: function (isSelectable, dragPageMovable) {
        var renderer = this._RENDERER;
        var me = this, rootEle = renderer.getRootElement(),
            root = renderer.getRootGroup();

        var correctionConditionAnalysis = function (correctionConditions, offset) {
            var fixedPosition = {
                x: offset.x,
                y: offset.y
            };
            var calculateFixedPosition = function (expectedPosition) {
                if (!expectedPosition) {
                    return fixedPosition;
                }
                if (expectedPosition.x && !expectedPosition.y) {
                    return {
                        x: expectedPosition.x,
                        y: fixedPosition.y
                    }
                }
                if (expectedPosition.y && !expectedPosition.x) {
                    return {
                        x: fixedPosition.x,
                        y: expectedPosition.y
                    }
                }
                if (expectedPosition.x && expectedPosition.y) {
                    return expectedPosition;
                }
                return fixedPosition;
            };
            if (!correctionConditions || !correctionConditions.length) {
                return fixedPosition;
            }

            var conditionsPassCandidates = [];
            $.each(correctionConditions, function (index, correctionCondition) {
                var condition = correctionCondition.condition;

                var conditionsPassToFix = true;
                if (condition.minX) {
                    if (offset.x > condition.minX) {
                        conditionsPassToFix = false;
                    }
                }
                if (condition.maxX) {
                    if (offset.x < condition.maxX) {
                        conditionsPassToFix = false;
                    }
                }
                if (condition.minY) {
                    if (offset.y > condition.minY) {
                        conditionsPassToFix = false;
                    }
                }
                if (condition.maxY) {
                    if (offset.y < condition.maxY) {
                        conditionsPassToFix = false;
                    }
                }

                if (conditionsPassToFix) {
                    conditionsPassCandidates.push(correctionCondition);
                }
            });
            $.each(conditionsPassCandidates, function (index, conditionsPassCandidate) {
                fixedPosition = calculateFixedPosition(conditionsPassCandidate.fixedPosition);
            });

            return fixedPosition;
        };

        // 배경클릭한 경우 deselect 하도록
        $(rootEle).bind("click", function (event) {
            root = me._RENDERER.getRootGroup();
            if (!$(this).data("dragBox")) {
                me.deselectAll();
                renderer.removeRubberBand(rootEle);
                renderer.removeAllConnectGuide();
            }
            //가상선 생성된 경우 액티브로 등록
            //가상선 액티브인 경우 삭제
            root = renderer.getRootGroup();
            var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);
            var isRectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE);
            if (isConnectMode) {
                if (isConnectMode === 'created') {
                    $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE, 'active');
                }
                if (isConnectMode === 'active') {
                    renderer.removeAllVirtualEdge();
                }
            }
            if (isRectMode) {
                if (isRectMode === 'created') {
                    $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE, 'active');
                }
                if (isRectMode === 'active') {
                    //새로운 것 만드는 과정
                    var eventOffset = me._getOffset(event);

                    var target = me._RENDERER.getTargetfromVirtualEdge();
                    renderer.removeAllVirtualEdge();
                    var shapeId = $(target).attr('_shape_id');
                    var newShape;
                    eval('newShape = new ' + shapeId + '()');

                    var style = target.shape.geom.style;
                    var boundary = renderer.getBoundary(target);
                    var width = boundary.getWidth();
                    var height = boundary.getHeight();

                    //From,To 가능여부 확인
                    var isConnectable = me._isConnectable(target.shape);
                    if (!me._isConnectableFrom(target.shape)) {
                        isConnectable = false;
                    }
                    if (!me._isConnectableTo(target.shape)) {
                        isConnectable = false;
                    }
                    if (isConnectable) {
                        newShape.setData(JSON.parse(JSON.stringify(target.shape.getData())));
                        var rectShape = renderer._CANVAS.drawShape([eventOffset.x, eventOffset.y], newShape, [width, height], style);
                        $(renderer._PAPER.canvas).trigger('duplicated', [target, rectShape]);

                        renderer._CANVAS.connect(target, rectShape, null, null, null, null);
                    }
                }
            }
        });

        $(rootEle).bind("mousemove", function (event) {
            var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);
            var isRectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE);
            if (isConnectMode === 'active' || isRectMode === 'active') {
                eventOffset = me._getOffset(event);
                renderer.updateVirtualEdge(eventOffset.x, eventOffset.y);
            }

            //Lane,Pool 이 새로 그려졌을 경우 위치조정
            var newPool = $(root).data('newPool');
            var correctionConditions = $(root).data('correctionConditions');
            if (newPool) {

                var geometry = newPool.shape.geom;
                var eventOffset = me._getOffset(event);
                var newX = eventOffset.x;
                var newY = eventOffset.y;

                var conditionAnalysis = correctionConditionAnalysis(correctionConditions, {x: newX, y: newY});
                newX = me._grid(conditionAnalysis.x, 'move');
                newY = me._grid(conditionAnalysis.y, 'move');

                geometry.moveCentroid([newX, newY]);
                renderer.redrawShape(newPool);
            }
        });

        $(rootEle).bind("contextmenu", function (event) {
            if (event.target.nodeName == 'svg') {
                me.deselectAll();
                renderer.removeRubberBand(rootEle);

            }
        });

        if (isSelectable === true) {
            // 마우스 영역 드래그하여 선택 처리
            $(rootEle).bind("mousedown", function (event) {
                var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);
                var isRectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE);
                if (isConnectMode === 'active' || isRectMode === 'active') {
                    return;
                }
                if (!dragPageMovable) {
                    var eventOffset = me._getOffset(event);
                    $(this).data("dragBox_first", {x: eventOffset.x, y: eventOffset.y});
                    $(this).removeData("dragBox");
                }
            });
            $(rootEle).bind("mousemove", function (event) {
                var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);
                var isRectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE);
                if (isConnectMode === 'active' || isRectMode === 'active') {
                    $(this).removeData("dragBox_first");
                    return;
                }
                var first = $(this).data("dragBox_first"),
                    eventOffset, width, height, x, y;

                if (first && !dragPageMovable) {
                    eventOffset = me._getOffset(event);
                    width = eventOffset.x - first.x;
                    height = eventOffset.y - first.y;

                    if (Math.abs(width) > OG.Constants.RUBBER_BAND_TOLERANCE
                        && Math.abs(height) > OG.Constants.RUBBER_BAND_TOLERANCE) {
                        $(this).data("rubber_band_status", "start");

                        x = width <= 0 ? first.x + width : first.x;
                        y = height <= 0 ? first.y + height : first.y;
                        renderer.drawRubberBand([x, y], [Math.abs(width), Math.abs(height)]);
                    }
                }
            });
            $(rootEle).bind("mouseup", function (event) {
                var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);
                var isRectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.RECT_CONNECT_MODE);
                if (isConnectMode === 'active' || isRectMode === 'active') {
                    return;
                }
                if ("start" == $(this).data("rubber_band_status") && !dragPageMovable) {
                    var first = $(this).data("dragBox_first"),
                        eventOffset, width, height, x, y, envelope, guide, elements = [];
                    renderer.removeRubberBand(rootEle);
                    if (first) {
                        eventOffset = me._getOffset(event);
                        width = eventOffset.x - first.x;
                        height = eventOffset.y - first.y;
                        x = width <= 0 ? first.x + width : first.x;
                        y = height <= 0 ? first.y + height : first.y;
                        envelope = new OG.Envelope([x, y], Math.abs(width), Math.abs(height));

                        $.each(renderer.getAllShapes(), function (index, element) {
                            if (!element.shape.geom) {
                                return;
                            }
                            if (!envelope.isContainsAll(element.shape.geom.getVertices())) {
                                return;
                            }
                            if (renderer.isEdge(element)) {
                                return;
                            }
                            elements.push(element);
                        });
                        me.selectShapes(elements);
                        $(this).data("dragBox", {"width": width, "height": height, "x": x, "y": y});
                    }
                    $(this).data("rubber_band_status", "none");
                }
            });

            $(rootEle).bind("contextmenu", function (event) {
                renderer.removeRubberBand(rootEle);
            });
        } else {
            $(rootEle).unbind("mousedown");
            $(rootEle).unbind("mousemove");
            $(rootEle).unbind("mouseup");
            $(rootEle).unbind("contextmenu");
        }
    },

    /**
     * HotKey 사용 가능여부를 설정한다. (Delete, Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+G, Ctrl+U)
     *
     * @param {Boolean} isEnableHotKey 핫키가능여부
     */
    setEnableHotKey: function (isEnableHotKey) {
        var me = this;
        var renderer = me._RENDERER;
        if (isEnableHotKey === true) {
            // delete, ctrl+A
            var _container;
            if (me._CONFIG.FOCUS_CANVAS_ONSELECT) {
                _container = $(renderer.getContainer());
            } else {
                _container = $(document);
            }
            _container.bind("keydown", function (event) {
                // 라벨수정중엔 keydown 이벤트무시
                if (!/^textarea$/i.test(event.target.tagName) && !/^input$/i.test(event.target.tagName)) {
                    // Undo Redo
                    if (me._CONFIG.ENABLE_HOTKEY_CTRL_Z && (event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_Z) {
                        if (event.shiftKey) {
                            event.preventDefault();
                            renderer.redo();
                        } else {
                            event.preventDefault();
                            renderer.undo();
                        }
                    }

                    // Delete : 삭제
                    if (me._CONFIG.ENABLE_HOTKEY_DELETE && (event.keyCode === KeyEvent.DOM_VK_DELETE || event.keyCode === KeyEvent.DOM_VK_BACK_SPACE)) {
                        event.preventDefault();
                        me.deleteSelectedShape();
                    }

                    // Ctrl+A : 전체선택
                    if (me._CONFIG.ENABLE_HOTKEY_CTRL_A && me._CONFIG.SELECTABLE && (event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_A) {
                        event.preventDefault();
                        me.selectAll();
                    }

                    // Ctrl+C : 복사
                    if (me._CONFIG.ENABLE_HOTKEY_CTRL_C && (event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_C) {
                        event.preventDefault();
                        me.copySelectedShape();
                    }

                    // Ctrl+X : 잘라내기
                    if (me._CONFIG.ENABLE_HOTKEY_CTRL_C && (event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_X) {
                        event.preventDefault();
                        me.cutSelectedShape();
                    }

                    // Ctrl+V: 붙여넣기
                    if (me._CONFIG.ENABLE_HOTKEY_CTRL_V && (event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_V) {
                        event.preventDefault();
                        me.pasteSelectedShape();
                    }

                    // Ctrl+D: 복제하기
                    if (me._CONFIG.ENABLE_HOTKEY_CTRL_D && (event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_D) {
                        event.preventDefault();
                        me.duplicateSelectedShape();
                    }

                    // Ctrl+G : 그룹
                    if (me._CONFIG.ENABLE_HOTKEY_CTRL_G && (event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_G) {
                        event.preventDefault();
                        me.groupSelectedShape();
                    }

                    // Ctrl+U : 언그룹
                    if (me._CONFIG.ENABLE_HOTKEY_CTRL_U && (event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_U) {
                        event.preventDefault();
                        me.ungroupSelectedShape();
                    }

                    if (me._CONFIG.ENABLE_HOTKEY_SHIFT_ARROW) {
                        // Shift+화살표 : 이동
                        if (event.shiftKey && event.keyCode === KeyEvent.DOM_VK_LEFT) {
                            event.preventDefault();
                            me._moveElements(me._getMoveTargets(), -1 * (me._CONFIG.DRAG_GRIDABLE ? (me._CONFIG.MOVE_SNAP_SIZE / 2) : 1), 0);
                            renderer.addHistory();
                        }
                        if (event.shiftKey && event.keyCode === KeyEvent.DOM_VK_RIGHT) {
                            event.preventDefault();
                            me._moveElements(me._getMoveTargets(), (me._CONFIG.DRAG_GRIDABLE ? (me._CONFIG.MOVE_SNAP_SIZE / 2) : 1), 0);
                            renderer.addHistory();
                        }
                        if (event.shiftKey && event.keyCode === KeyEvent.DOM_VK_UP) {
                            event.preventDefault();
                            me._moveElements(me._getMoveTargets(), 0, -1 * (me._CONFIG.DRAG_GRIDABLE ? (me._CONFIG.MOVE_SNAP_SIZE / 2) : 1));
                            renderer.addHistory();
                        }
                        if (event.shiftKey && event.keyCode === KeyEvent.DOM_VK_DOWN) {
                            event.preventDefault();
                            me._moveElements(me._getMoveTargets(), 0, (me._CONFIG.DRAG_GRIDABLE ? (me._CONFIG.MOVE_SNAP_SIZE / 2) : 1));
                            renderer.addHistory();
                        }
                    }
                    if (me._CONFIG.ENABLE_HOTKEY_ARROW) {
                        // 화살표 : 이동
                        if (!event.shiftKey && event.keyCode === KeyEvent.DOM_VK_LEFT) {
                            event.preventDefault();
                            me._moveElements(me._getMoveTargets(), -1 * (me._CONFIG.MOVE_SNAP_SIZE / 2), 0);
                            me.selectShapes(me._getSelectedElement());
                            renderer.addHistory();
                        }
                        if (!event.shiftKey && event.keyCode === KeyEvent.DOM_VK_RIGHT) {
                            event.preventDefault();
                            me._moveElements(me._getMoveTargets(), (me._CONFIG.MOVE_SNAP_SIZE / 2), 0);
                            me.selectShapes(me._getSelectedElement());
                            renderer.addHistory();
                        }
                        if (!event.shiftKey && event.keyCode === KeyEvent.DOM_VK_UP) {
                            event.preventDefault();
                            me._moveElements(me._getMoveTargets(), 0, -1 * (me._CONFIG.MOVE_SNAP_SIZE / 2));
                            me.selectShapes(me._getSelectedElement());
                            renderer.addHistory();
                        }
                        if (!event.shiftKey && event.keyCode === KeyEvent.DOM_VK_DOWN) {
                            event.preventDefault();
                            me._moveElements(me._getMoveTargets(), 0, (me._CONFIG.MOVE_SNAP_SIZE / 2));
                            me.selectShapes(me._getSelectedElement());
                            renderer.addHistory();
                        }
                    }
                }
            });
        } else {
            $(renderer.getContainer()).unbind("keydown");
        }
    },

    /**
     * 캔버스에 마우스 우클릭 메뉴를 가능하게 한다.
     */
    enableRootContextMenu: function () {
        var me = this;
        var renderer = me._RENDERER;

        $.contextMenu({
            position: function (opt, x, y) {
                opt.$menu.css({top: y + 10, left: x + 10});
            },
            selector: '#' + me._RENDERER.getRootElement().id,
            build: function ($trigger, e) {
                var root = me._RENDERER.getRootGroup(), copiedElement = $(root).data("copied");
                if (me._CONFIG.FOCUS_CANVAS_ONSELECT) {
                    $(me._RENDERER.getContainer()).focus();
                }
                return {
                    items: {
                        'selectAll': {
                            name: '모두 선택', callback: function () {
                                me.selectAll();
                            }
                        },
                        'sep1': '---------',
                        'paste': {
                            name: '붙여넣기', callback: function () {
                                me.pasteSelectedShape(e);
                            },
                            disabled: (copiedElement ? false : true)
                        },
                        'sep2': '---------',
                        'view': {
                            name: '스케일',
                            items: {
                                'view_actualSize': {
                                    name: '실제 사이즈', callback: function () {
                                        me._RENDERER.setScale(1);
                                        renderer.addHistory();
                                    }
                                },
                                'sep2_1': '---------',
                                'view_fitWindow': {
                                    name: '윈도우에 맞추기', callback: function () {
                                        me.fitWindow();
                                    }
                                },
                                'sep2_2': '---------',
                                'view_25': {
                                    name: '25%', callback: function () {
                                        me._RENDERER.setScale(0.25);
                                        renderer.addHistory();
                                    }
                                },
                                'view_50': {
                                    name: '50%', callback: function () {
                                        me._RENDERER.setScale(0.5);
                                        renderer.addHistory();
                                    }
                                },
                                'view_75': {
                                    name: '75%', callback: function () {
                                        me._RENDERER.setScale(0.75);
                                        renderer.addHistory();
                                    }
                                },
                                'view_100': {
                                    name: '100%', callback: function () {
                                        me._RENDERER.setScale(1);
                                        renderer.addHistory();
                                    }
                                },
                                'view_150': {
                                    name: '150%', callback: function () {
                                        me._RENDERER.setScale(1.5);
                                        renderer.addHistory();
                                    }
                                },
                                'view_200': {
                                    name: '200%', callback: function () {
                                        me._RENDERER.setScale(2);
                                        renderer.addHistory();
                                    }
                                },
                                'view_300': {
                                    name: '300%', callback: function () {
                                        me._RENDERER.setScale(3);
                                        renderer.addHistory();
                                    }
                                },
                                'view_400': {
                                    name: '400%', callback: function () {
                                        me._RENDERER.setScale(4);
                                        renderer.addHistory();
                                    }
                                },
                                'sep2_3': '---------',
                                'view_zoomin': {
                                    name: '확대', callback: function () {
                                        me.zoomIn();
                                    }
                                },
                                'view_zoomout': {
                                    name: '축소', callback: function () {
                                        me.zoomOut();
                                    }
                                }
                            }
                        }
                    }
                };
            }
        });
    },

    makeFillColor: function () {
        var me = this;

        return {
            'fillColor': {
                name: '색상',
                items: {
                    'fillColor_select': {
                        name: '선택',
                        type: 'select',
                        options: {
                            '': '',
                            'white': '하양',
                            'gray': '회색',
                            'blue': '파랑',
                            'red': '빨강',
                            'yellow': '노랑',
                            'orange': '오렌지',
                            'green': '녹색',
                            'black': '검정'
                        },
                        selected: '',
                        events: {
                            change: function (e) {
                                if (e.target.value !== '') {
                                    me.setFillColorSelectedShape(e.target.value);
                                }
                            }
                        }
                    },
                    'sep5_1_1': '---------',
                    'fillColor_custom': {
                        name: '직접입력',
                        type: 'text',
                        events: {
                            keyup: function (e) {
                                if (e.target.value !== '') {
                                    me.setFillColorSelectedShape(e.target.value);
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    makeFillOpacity: function () {
        var me = this;

        return {
            'fillOpacity': {
                name: '투명도',
                items: {
                    'fillOpacity_select': {
                        name: '선택',
                        type: 'select',
                        options: {
                            '': '',
                            '0.0': '0%',
                            '0.1': '10%',
                            '0.2': '20%',
                            '0.3': '30%',
                            '0.4': '40%',
                            '0.5': '50%',
                            '0.6': '60%',
                            '0.7': '70%',
                            '0.8': '80%',
                            '0.9': '90%',
                            '1.0': '100%'
                        },
                        selected: '',
                        events: {
                            change: function (e) {
                                if (e.target.value !== '') {
                                    me.setFillOpacitySelectedShape(e.target.value);
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    makeLineStyle: function () {
        var me = this;

        return {
            'lineStyle': {
                name: '선 스타일',
                items: {
                    'lineStyle_1': {
                        name: '──────',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    },
                    'lineStyle_2': {
                        name: '---------',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '-',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    },
                    'lineStyle_3': {
                        name: '············',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '.',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    },
                    'lineStyle_4': {
                        name: '-·-·-·-·-·',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '-.',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    },
                    'lineStyle_5': {
                        name: '-··-··-··-',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '-..',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    },
                    'lineStyle_6': {
                        name: '· · · · · ·',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '. ',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    },
                    'lineStyle_7': {
                        name: '- - - - -',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '- ',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    },
                    'lineStyle_8': {
                        name: '─ ─ ─ ─',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '--',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    },
                    'lineStyle_9': {
                        name: '- ·- ·- ·-',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '- .',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    },
                    'lineStyle_10': {
                        name: '--·--·--·-',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '--.',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    },
                    'lineStyle_11': {
                        name: '--··--··--',
                        type: 'radio',
                        radio: 'lineStyle',
                        value: '--..',
                        events: {
                            change: function (e) {
                                me.setLineStyleSelectedShape(e.target.value);
                            }
                        }
                    }
                }
            }
        }
    },

    makeLineColor: function () {
        var me = this;

        return {
            'lineColor': {
                name: '선 색상',
                items: {
                    'lineColor_select': {
                        name: '석택',
                        type: 'select',
                        options: {
                            '': '',
                            'white': '하양',
                            'gray': '회색',
                            'blue': '파랑',
                            'red': '빨강',
                            'yellow': '노랑',
                            'orange': '오렌지',
                            'green': '녹색',
                            'black': '검정'
                        },
                        selected: '',
                        events: {
                            change: function (e) {
                                if (e.target.value !== '') {
                                    me.setLineColorSelectedShape(e.target.value);
                                }
                            }
                        }
                    },
                    'sep5_4_1': '---------',
                    'lineColor_custom': {
                        name: '직접입력',
                        type: 'text',
                        events: {
                            keyup: function (e) {
                                if (e.target.value !== '') {
                                    me.setLineColorSelectedShape(e.target.value);
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    makeLineWidth: function () {
        var me = this;

        return {
            'lineWidth': {
                name: '선 두께',
                items: {
                    'lineWidth_select': {
                        name: '선택',
                        type: 'select',
                        options: {
                            0: '',
                            1: '1px',
                            2: '2px',
                            3: '3px',
                            4: '4px',
                            5: '5px',
                            6: '6px',
                            8: '8px',
                            10: '10px',
                            12: '12px',
                            16: '16px',
                            24: '24px'
                        },
                        selected: 0,
                        events: {
                            change: function (e) {
                                if (e.target.value !== 0) {
                                    me.setLineWidthSelectedShape(e.target.value);
                                }
                            }
                        }
                    },
                    'sep5_5_1': '---------',
                    'lineWidth_custom': {
                        name: '직접입력',
                        type: 'text',
                        events: {
                            keyup: function (e) {
                                if (e.target.value !== '') {
                                    me.setLineWidthSelectedShape(e.target.value);
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    makeFont: function () {
        var me = this;

        return {
            'text': {
                name: '글꼴',
                items: {
                    'fontFamily': {
                        name: '폰트',
                        items: {
                            'fontFamily_1': {
                                name: '<span style="font-family: Arial">Arial</span>',
                                type: 'radio',
                                radio: 'fontFamily',
                                value: 'Arial',
                                events: {
                                    change: function (e) {
                                        me.setFontFamilySelectedShape(e.target.value);
                                    }
                                }
                            },
                            'fontFamily_2': {
                                name: '<span style="font-family: \'Comic Sans MS\'">Comic Sans MS</span>',
                                type: 'radio',
                                radio: 'fontFamily',
                                value: 'Comic Sans MS',
                                events: {
                                    change: function (e) {
                                        me.setFontFamilySelectedShape(e.target.value);
                                    }
                                }
                            },
                            'fontFamily_3': {
                                name: '<span style="font-family: \'Courier New\'">Courier New</span>',
                                type: 'radio',
                                radio: 'fontFamily',
                                value: 'Courier New',
                                events: {
                                    change: function (e) {
                                        me.setFontFamilySelectedShape(e.target.value);
                                    }
                                }
                            },
                            'fontFamily_4': {
                                name: '<span style="font-family: Garamond">Garamond</span>',
                                type: 'radio',
                                radio: 'fontFamily',
                                value: 'Garamond',
                                events: {
                                    change: function (e) {
                                        me.setFontFamilySelectedShape(e.target.value);
                                    }
                                }
                            },
                            'fontFamily_5': {
                                name: '<span style="font-family: Georgia">Georgia</span>',
                                type: 'radio',
                                radio: 'fontFamily',
                                value: 'Georgia',
                                events: {
                                    change: function (e) {
                                        me.setFontFamilySelectedShape(e.target.value);
                                    }
                                }
                            },
                            'fontFamily_6': {
                                name: '<span style="font-family: \'Lucida Console\'">Lucida Console</span>',
                                type: 'radio',
                                radio: 'fontFamily',
                                value: 'Lucida Console',
                                events: {
                                    change: function (e) {
                                        me.setFontFamilySelectedShape(e.target.value);
                                    }
                                }
                            },
                            'fontFamily_7': {
                                name: '<span style="font-family: \'MS Gothic\'">MS Gothic</span>',
                                type: 'radio',
                                radio: 'fontFamily',
                                value: 'MS Gothic',
                                events: {
                                    change: function (e) {
                                        me.setFontFamilySelectedShape(e.target.value);
                                    }
                                }
                            },
                            'fontFamily_8': {
                                name: '<span style="font-family: \'MS Sans Serif\'">MS Sans Serif</span>',
                                type: 'radio',
                                radio: 'fontFamily',
                                value: 'MS Sans Serif',
                                events: {
                                    change: function (e) {
                                        me.setFontFamilySelectedShape(e.target.value);
                                    }
                                }
                            },
                            'fontFamily_9': {
                                name: '<span style="font-family: Verdana">Verdana</span>',
                                type: 'radio',
                                radio: 'fontFamily',
                                value: 'Verdana',
                                events: {
                                    change: function (e) {
                                        me.setFontFamilySelectedShape(e.target.value);
                                    }
                                }
                            },
                            'fontFamily_10': {
                                name: '<span style="font-family: \'Times New Roman\'">Times New Roman</span>',
                                type: 'radio',
                                radio: 'fontFamily',
                                value: 'Times New Roman',
                                events: {
                                    change: function (e) {
                                        me.setFontFamilySelectedShape(e.target.value);
                                    }
                                }
                            },
                            'sep6_1_1': '---------',
                            'fontFamily_custom': {
                                name: 'Custom',
                                type: 'text',
                                events: {
                                    keyup: function (e) {
                                        if (e.target.value !== '') {
                                            me.setFontFamilySelectedShape(e.target.value);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    'fontColor': {
                        name: '글 색상',
                        items: {
                            'fontColor_select': {
                                name: '선택',
                                type: 'select',
                                options: {
                                    '': '',
                                    'white': '하양',
                                    'gray': '회색',
                                    'blue': '파랑',
                                    'red': '빨강',
                                    'yellow': '노랑',
                                    'orange': '오렌지',
                                    'green': '녹색',
                                    'black': '검정'
                                },
                                selected: '',
                                events: {
                                    change: function (e) {
                                        if (e.target.value !== '') {
                                            me.setFontColorSelectedShape(e.target.value);
                                        }
                                    }
                                }
                            },
                            'sep6_1_2': '---------',
                            'fontColor_custom': {
                                name: '직접입력',
                                type: 'text',
                                events: {
                                    keyup: function (e) {
                                        if (e.target.value !== '') {
                                            me.setFontColorSelectedShape(e.target.value);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    'fontSize': {
                        name: '글 크기',
                        items: {
                            'fontSize_select': {
                                name: '선택',
                                type: 'select',
                                options: {
                                    '': '',
                                    '6': '6',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12',
                                    '14': '14',
                                    '18': '18',
                                    '24': '24',
                                    '36': '36',
                                    '48': '48',
                                    '72': '72'
                                },
                                selected: '',
                                events: {
                                    change: function (e) {
                                        if (e.target.value !== '') {
                                            me.setFontSizeSelectedShape(e.target.value);
                                        }
                                    }
                                }
                            },
                            'sep6_1_3': '---------',
                            'fontSize_custom': {
                                name: '직접입력',
                                type: 'text',
                                events: {
                                    keyup: function (e) {
                                        if (e.target.value !== '') {
                                            me.setFontSizeSelectedShape(e.target.value);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    'sep6_1': '---------',
                    'fontWeight_bold': {
                        name: '<span style="font-weight: bold">굵게</span>',
                        type: 'checkbox',
                        events: {
                            change: function (e) {
                                if (e.target.checked) {
                                    me.setFontWeightSelectedShape('bold');
                                } else {
                                    me.setFontWeightSelectedShape('normal');
                                }
                            }
                        }
                    },
                    'fontWeight_italic': {
                        name: '<span style="font-style: italic">이탤릭</span>',
                        type: 'checkbox',
                        events: {
                            change: function (e) {
                                if (e.target.checked) {
                                    me.setFontStyleSelectedShape('italic');
                                } else {
                                    me.setFontStyleSelectedShape('normal');
                                }
                            }
                        }
                    },
                    'sep6_2': '---------',
                    'position': {
                        name: '글 위치',
                        items: {
                            'position_left': {
                                name: '왼쪽',
                                type: 'radio',
                                radio: 'position',
                                value: 'left',
                                events: {
                                    change: function (e) {
                                        me.setLabelPositionSelectedShape(e.target.value);
                                    }
                                }
                            },
                            'position_center': {
                                name: '가운데',
                                type: 'radio',
                                radio: 'position',
                                value: 'center',
                                events: {
                                    change: function (e) {
                                        me.setLabelPositionSelectedShape(e.target.value);
                                    }
                                }
                            },
                            'position_right': {
                                name: '오른쪽',
                                type: 'radio',
                                radio: 'position',
                                value: 'right',
                                events: {
                                    change: function (e) {
                                        me.setLabelPositionSelectedShape(e.target.value);
                                    }
                                }
                            },
                            'position_top': {
                                name: '위',
                                type: 'radio',
                                radio: 'position',
                                value: 'top',
                                events: {
                                    change: function (e) {
                                        me.setLabelPositionSelectedShape(e.target.value);
                                    }
                                }
                            },
                            'position_bottom': {
                                name: '아래',
                                type: 'radio',
                                radio: 'position',
                                value: 'bottom',
                                events: {
                                    change: function (e) {
                                        me.setLabelPositionSelectedShape(e.target.value);
                                    }
                                }
                            }
                        }
                    },
                    'vertical': {
                        name: '수직 정렬',
                        items: {
                            'vertical_top': {
                                name: '위',
                                type: 'radio',
                                radio: 'vertical',
                                value: 'top',
                                events: {
                                    change: function (e) {
                                        me.setLabelVerticalSelectedShape(e.target.value);
                                    }
                                }
                            },
                            'vertical_middle': {
                                name: '가운데',
                                type: 'radio',
                                radio: 'vertical',
                                value: 'middle',
                                events: {
                                    change: function (e) {
                                        me.setLabelVerticalSelectedShape(e.target.value);
                                    }
                                }
                            },
                            'vertical_bottom': {
                                name: '아래',
                                type: 'radio',
                                radio: 'vertical',
                                value: 'bottom',
                                events: {
                                    change: function (e) {
                                        me.setLabelVerticalSelectedShape(e.target.value);
                                    }
                                }
                            }
                        }
                    },
                    'horizontal': {
                        name: '수평 정렬',
                        items: {
                            'vertical_start': {
                                name: '왼쪽',
                                type: 'radio',
                                radio: 'horizontal',
                                value: 'start',
                                events: {
                                    change: function (e) {
                                        me.setLabelHorizontalSelectedShape(e.target.value);
                                    }
                                }
                            },
                            'horizontal_middle': {
                                name: '가운데',
                                type: 'radio',
                                radio: 'horizontal',
                                value: 'middle',
                                events: {
                                    change: function (e) {
                                        me.setLabelHorizontalSelectedShape(e.target.value);
                                    }
                                }
                            },
                            'horizontal_end': {
                                name: '오른쪽',
                                type: 'radio',
                                radio: 'horizontal',
                                value: 'end',
                                events: {
                                    change: function (e) {
                                        me.setLabelHorizontalSelectedShape(e.target.value);
                                    }
                                }
                            }
                        }
                    },
                    'sep6_5': '---------',
                    'textRotate': {
                        name: '글 회전각',
                        items: {
                            'textRotate_select': {
                                name: '선택',
                                type: 'select',
                                options: {
                                    '0': '0',
                                    '45': '45',
                                    '90': '90',
                                    '135': '135',
                                    '180': '180',
                                    '-45': '-45',
                                    '-90': '-90',
                                    '-135': '-135',
                                    '-180': '-180'
                                },
                                selected: '0',
                                events: {
                                    change: function (e) {
                                        me.setLabelAngleSelectedShape(e.target.value);
                                    }
                                }
                            },
                            'sep6_6_1': '---------',
                            'textRotate_custom': {
                                name: '직접입력',
                                type: 'text',
                                events: {
                                    keyup: function (e) {
                                        if (e.target.value !== '') {
                                            me.setLabelAngleSelectedShape(e.target.value);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    makeBring: function () {
        var me = this;

        return {
            'bringToFront': {
                name: '맨 앞으로 가져오기',
                items: {
                    'bringToFront': {
                        name: '맨 앞으로 가져오기', callback: function () {
                            me.bringToFront();
                        }
                    },
                    'bringForward': {
                        name: '앞으로 가져오기', callback: function () {
                            me.bringForward();
                        }
                    }
                }
            }
        }
    },

    makeSend: function () {
        var me = this;

        return {
            'sendToBack': {
                name: '맨 뒤로 보내기',
                items: {
                    'sendToBack': {
                        name: '맨 뒤로 보내기', callback: function () {
                            me.sendToBack();
                        }
                    },
                    'sendBackward': {
                        name: '뒤로 보내기', callback: function () {
                            me.sendBackward();
                        }
                    }
                }
            }
        }
    },


    makeDelete: function () {
        var me = this;

        return {
            'delete': {
                name: '삭제', callback: function () {
                    me.deleteSelectedShape();
                }
            }
        }
    },

    makeCopy: function () {
        var me = this;

        return {
            'copy': {
                name: '복사', callback: function () {
                    me.copySelectedShape();
                }
            }
        }
    },

    makeAlign: function () {
        var me = this;

        return {
            'align': {
                name: '도형 정렬',
                items: {
                    'Top': {
                        name: '위로정렬',
                        type: 'radio',
                        radio: 'align',
                        value: 'Top',
                        events: {
                            change: function (e) {
                                me._RENDERER.alignTop();
                                me._RENDERER.addHistory();
                            }
                        }
                    },
                    'Left': {
                        name: '왼쪽정렬',
                        type: 'radio',
                        radio: 'align',
                        value: 'Left',
                        events: {
                            change: function (e) {
                                me._RENDERER.alignLeft();
                                me._RENDERER.addHistory();
                            }
                        }
                    },
                    'Right': {
                        name: '오른쪽정렬',
                        type: 'radio',
                        radio: 'align',
                        value: 'Right',
                        events: {
                            change: function (e) {
                                me._RENDERER.alignRight();
                                me._RENDERER.addHistory();
                            }
                        }
                    },
                    'Bottom': {
                        name: '아래로정렬',
                        type: 'radio',
                        radio: 'align',
                        value: "Bottom",
                        events: {
                            change: function (e) {
                                me._RENDERER.alignBottom();
                                me._RENDERER.addHistory();
                            }
                        }
                    }
                }
            }
        }
    },

    makeFormat: function () {
        return {
            format: {
                name: '형식',
                items: this.mergeContextMenu(
                    this.makeFillColor(),
                    this.makeFillOpacity(),
                    this.makeLineStyle(),
                    this.makeLineColor(),
                    this.makeLineWidth()
                )
            }
        }
    },

    makeMultiContextMenu: function () {
        return this.mergeContextMenu(
            this.makeDelete(),
            this.makeCopy(),
            this.makeAlign()
        );
    },

    mergeContextMenu: function () {
        var menu = {};
        for (var i = 0; i < arguments.length; i++) {
            for (var key in arguments[i]) {
                menu[key] = arguments[i][key];
            }
        }

        return menu;
    },

    makeDefaultContextMenu: function (key) {
        if (key) {
            if (key == 'delete') {
                return this.makeDelete();
            }
            else if (key == 'copy') {
                return this.makeCopy();
            }
            else if (key == 'format') {
                return this.makeFormat();
            }
            else if (key == 'text') {
                return this.makeFont();
            }
            else if (key == 'bringToFront') {
                return this.makeBring();
            }
            else if (key == 'sendToBack') {
                return this.makeSend();
            }
        } else {
            return this.mergeContextMenu(
                this.makeDelete(),
                this.makeCopy(),
                this.makeFormat(),
                this.makeFont(),
                this.makeBring(),
                this.makeSend()
            );
        }
    },

    /**
     * Shape 에 마우스 우클릭 메뉴를 가능하게 한다.
     */
    enableShapeContextMenu: function () {
        var me = this;
        $.contextMenu({
            position: function (opt, x, y) {
                opt.$menu.css({top: y + 10, left: x + 10});
                opt.canvas = me._CANVAS;
            },
            selector: '#' + me._RENDERER.getRootElement().id + ' [_type=SHAPE]',
            build: function ($trigger, event) {
                //1. shape 에 contextMenu 를 정의시 실행된다.

                //2. canvas.setContextMenu 실행시 shape 의 콘텍스트에 오버라이드 된다.

                //$trigger 실행시 shape 에 커스텀 컨텍스트 메뉴가 있을 경우, 그에 맞는 컨텍스트 메뉴를 빌드한다.

                //default 컨텍스트 메뉴를 설정한다.

                if (me._CONFIG.FOCUS_CANVAS_ONSELECT) {
                    $(me._RENDERER.getContainer()).focus();
                }
                var items = {};

                if (me._getSelectedElement().length == 1) {
                    var defaultList = ['delete', 'copy', 'format', 'text', 'bringToFront', 'sendToBack'];
                    var eventShape = $trigger.get(0).shape;
                    //사용자가 지정한 customContextMenu 가 있다면 기본 createContextMenu 보다 우선한다.
                    var customMenu = eventShape.customContextMenu;
                    if (!customMenu) {
                        if (eventShape.createContextMenu) {
                            customMenu = eventShape.createContextMenu();
                        }
                    }

                    //커스텀 콘텍스트 메뉴가 있을경우 처리
                    if (customMenu) {
                        for (var key in customMenu) {
                            if (!customMenu[key]) {
                                continue;
                            }
                            //기본 메뉴인경우
                            if (defaultList.indexOf(key) != -1) {
                                items[key] = me.makeDefaultContextMenu()[key];
                            }
                            //기본 메뉴가 아닌경우
                            else {
                                items[key] = customMenu[key];
                            }
                        }
                    }
                    //커스텀 콘텍스트 메뉴가 없을경우 처리
                    else {
                        items = me.makeDefaultContextMenu();
                    }

                } else {
                    items = me.makeMultiContextMenu();
                }
                return {
                    items: items
                };
            }
        });
    },

    /**
     * 주어진 Shape Element 를 선택된 상태로 되게 한다.
     *
     * @param {Element} element Shape 엘리먼트
     */
    selectShape: function (element, event, param) {

        var me = this, guide, root = me._RENDERER.getRootGroup();

        //단일 선택 다중 선택 여부 판단
        if (event) {
            if (param) {
                if (!param.shiftKey && !param.ctrlKey) {
                    me.deselectAll();
                    me._RENDERER.removeAllGuide();
                } else {
                    //no operation
                }
            } else {
                if (!event.shiftKey && !event.ctrlKey) {
                    me.deselectAll();
                    me._RENDERER.removeAllGuide();
                } else {
                    //no operation
                }
            }
        } else {
            //기본 단일 선택
            me.deselectAll();
            me._RENDERER.removeAllGuide();
        }

        if (me._isSelectable(element.shape)) {
            //BUG : remove guide를 반드시 해주어야만 새로운 가이드가 null로 나오지 않는다.
            me._RENDERER.removeGuide(element);
            guide = me._RENDERER.drawGuide(element);
            // enable event
            me.setResizable(element, guide, me._isResizable(element.shape));
            me.setConnectable(element, guide, me._isConnectable(element.shape));

            //선택상태 설정
            $(element).attr("_selected", "true");

            //선택요소배열 추가
            me._addSelectedElement(element);
        }
    },

    /**
     * 주어진 다수의 Shape Element 를 선택된 상태로 되게 한다.
     *
     * @param {Element} element Shape 엘리먼트
     */
    selectShapes: function (elementArray) {
        var me = this, guide, _element;

        if (!elementArray) {
            return;
        } else {
            //route selectShape
            if (elementArray.length == 1) {
                me.selectShape(elementArray[0]);
                return;
            }
        }
        me.deselectAll();
        me._RENDERER.removeAllGuide();

        $.each(elementArray, function (index, element) {
            $(element).attr("_selected", "true");
            guide = me._RENDERER.drawGuide(element);
            if (guide) {
                // enable event
                me.setResizable(element, guide, me._isResizable(element.shape));
                me.setConnectable(element, guide, me._isConnectable(element.shape));
            }
            me._addSelectedElement(element);
        })
    },

    //TODO : 선택된 모든 Shape를 선택 해제
    deselectShape: function (element) {
        var me = this;
        if (OG.Util.isElement(element) && element.id) {
            $(element).attr("_selected", "");
            me._RENDERER.removeGuide(element);

            //선택요소배열 삭제
            me._delSelectedElement(element);
        }
    },


    deselectAll: function () {
        var me = this;

        var dragBox = $(this).data("dragBox");
        if (me._CONFIG.FOCUS_CANVAS_ONSELECT) {
            $(me._RENDERER.getContainer()).focus();
        }
        if (!dragBox || (dragBox && dragBox.width < 1 && dragBox.height < 1)) {
            $(me._RENDERER.getRootElement())
                .find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(
                function (index, item) {
                    if (OG.Util.isElement(item) && item.id) {
                        $(item).attr("_selected", "");
                        me._RENDERER.removeGuide(item);
                    }
                }
            );

            //선택요소배열 모두삭제 (초기화)
            me._removeAllSelectedElement();
        }
    },

    /**
     * 메뉴 : 맨 앞으로 가져오기
     */
    bringToFront: function () {
        var me = this, root = $(me._RENDERER.getRootGroup());
        $(me._RENDERER.getRootElement()).find("[_selected=true]").each(function (index, item) {
            var moveTarget = item;
            if (me._RENDERER.isLane(item)) {
                moveTarget = me._RENDERER.getRootLane(item);
            }
            root[0].appendChild(moveTarget);
            me.selectShape(item);
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 맨 뒤로 보내기
     */
    sendToBack: function () {
        var me = this, root = $(me._RENDERER.getRootGroup());
        $(me._RENDERER.getRootElement()).find("[_selected=true]").each(function (index, item) {
            var moveTarget = item;
            if (me._RENDERER.isLane(item)) {
                moveTarget = me._RENDERER.getRootLane(item);
            }
            root[0].insertBefore(moveTarget, OG.Util.isIE() ? root[0].childNodes[0] : root[0].children[0]);
            me.selectShape(item);
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 앞으로 가져오기
     */
    bringForward: function () {
        var me = this, root = $(me._RENDERER.getRootGroup());
        $(me._RENDERER.getRootElement()).find("[_selected=true]").each(function (index, item) {
            var moveTarget = item;
            if (me._RENDERER.isLane(item)) {
                moveTarget = me._RENDERER.getRootLane(item);
            }
            var length = $(moveTarget).prevAll().length;
            root[0].insertBefore(moveTarget, OG.Util.isIE() ? root[0].childNodes[length + 1] : root[0].children[length + 1]);
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 뒤로 보내기
     */
    sendBackward: function () {
        var me = this, root = $(me._RENDERER.getRootGroup());
        $(me._RENDERER.getRootElement()).find("[_selected=true]").each(function (index, item) {
            var moveTarget = item;
            if (me._RENDERER.isLane(item)) {
                moveTarget = me._RENDERER.getRootLane(item);
            }
            var length = $(moveTarget).prevAll().length;
            root[0].insertBefore(moveTarget, OG.Util.isIE() ? root[0].childNodes[length - 2] : root[0].children[length - 2]);
            me.selectShape(item);
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들을 삭제한다.
     */
    deleteSelectedShape: function (event) {

        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_shape=EDGE][_selected=true]").each(function (index, item) {
            if (item.id) {
                me._RENDERER.removeShape(item);
            }
        });
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (index, item) {
            if (item.id) {
                if (me._RENDERER.isLane(item)) {
                    me._RENDERER.removeLaneShape(item);
                } else {
                    me._RENDERER.removeShape(item);
                }

            }
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : Shape를 선택한 모양으로 변경한다.
     */
    changeShape: function (value, label) {
        var me = this, geometry, position, width, height, shape;

        $(me._RENDERER.getRootElement()).find("[_selected=true]").each(function (index, item) {
            shape = eval('new ' + value + '()');
            if (label) {
                shape.label = label;
            } else{
                shape.label = undefined;
            }

            if (shape instanceof OG.EdgeShape) {
                geometry = shape.createShape();
                geometry.vertices = item.shape.geom.vertices;
                shape.geom = geometry;
            } else {
                position = [item.shape.geom.boundary.getCentroid().x, item.shape.geom.boundary.getCentroid().y];
                width = item.shape.geom.boundary.getWidth();
                height = item.shape.geom.boundary.getHeight();
                geometry = shape.createShape();

                // 좌상단으로 이동 및 크기 조정
                geometry.moveCentroid(position);
                geometry.resizeBox(width, height);
                shape.geom = geometry;
            }

            //데이터 복제
            shape.setData(JSON.parse(JSON.stringify(item.shape.getData())));

            //shape 등록
            item.shape = shape;

            me._RENDERER.redrawShape(item);

            var type;
            if (value == 'OG.shape.bpmn.A_Task') {
                type = "Abstract";
            } else if (value == 'OG.shape.bpmn.A_HumanTask') {
                type = "Human";
            } else if (value == 'OG.shape.bpmn.A_WebServiceTask') {
                type = "Service";
            } else if (value == 'OG.shape.bpmn.A_ManualTask') {
                type = "Manual";
            }

            $(item).trigger("changeTo" + type);
        });
        me._RENDERER.addHistory();
    },


    /**
     * 메뉴 : 속성 창 이벤트
     */
    showProperty: function (event) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_selected=true]").each(function (index, item) {
            $(item).trigger('property');
        });
    },

    /**
     * 메뉴 : 모든 Shape 들을 선택한다.
     */
    selectAll: function () {
        var me = this;
        var elements = [];
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "]").each(function (index, element) {
            elements.push(element);
        });
        me.selectShapes(elements);
    },

    /**
     * 메뉴 : 선택된 Shape 들을 복사한다.
     */
    copySelectedShape: function () {
        var me = this, root = me._RENDERER.getRootGroup(), selectedElement = [];
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (index, element) {
            selectedElement.push(element);
        });
        $(root).data("copied", selectedElement);
    },

    /**
     * 메뉴 : 선택된 Shape 들을 잘라내기한다.
     */
    cutSelectedShape: function () {
        var me = this;
        me.copySelectedShape();
        me.deleteSelectedShape();
    },

    /**
     * 메뉴 : 선택된 Shape 들을 붙여넣기 한다.
     */
    pasteSelectedShape: function (e) {
        var me = this;
        var renderer = me._RENDERER;
        var root = renderer.getRootGroup(),
            copiedElement = $(root).data("copied"),
            selectedElement = [], dx, dy, avgX = 0, avgY = 0,
            copiedMap = [];
        if (copiedElement) {
            $(renderer.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (index, item) {
                if (item.id) {
                    renderer.removeGuide(item);
                }
            });

            $.each(copiedElement, function (idx, item) {
                avgX += item.shape.geom.getBoundary().getCentroid().x;
                avgY += item.shape.geom.getBoundary().getCentroid().y;
            });

            avgX = avgX / (copiedElement.length);
            avgY = avgY / (copiedElement.length);

            // TODO : 연결된 Shape 인 경우 연결성 유지토록
            $.each(copiedElement, function (idx, item) {
                // copy
                var boundary = item.shape.geom.getBoundary(), newShape, newElement, newGuide;
                newShape = item.shape.clone();

                if ($(item).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE) {
                    if (item.shape.geom instanceof OG.geometry.BezierCurve) {
                        newShape.geom = new OG.BezierCurve(item.shape.geom.getControlPoints());
                    } else {
                        newShape.geom = new OG.PolyLine(item.shape.geom.getVertices());
                    }
                    newShape.geom.style = item.shape.geom.style;
                    newShape.geom.move(me._CONFIG.COPY_PASTE_PADDING, me._CONFIG.COPY_PASTE_PADDING);
                    newElement = renderer.drawShape(
                        null, newShape,
                        null, item.shapeStyle
                    );

                } else {
                    if (e) {
                        dx = e.offsetX - avgX;
                        dy = e.offsetY - avgY;
                        newElement = renderer.drawShape(
                            [boundary.getCentroid().x + dx, boundary.getCentroid().y + dy],
                            newShape, [boundary.getWidth(), boundary.getHeight()], item.shapeStyle
                        );
                    } else {
                        newElement = renderer.drawShape(
                            [boundary.getCentroid().x + me._CONFIG.COPY_PASTE_PADDING, boundary.getCentroid().y + me._CONFIG.COPY_PASTE_PADDING],
                            newShape, [boundary.getWidth(), boundary.getHeight()], item.shapeStyle
                        );
                    }
                }

                // custom data
                newElement.data = item.data;

                // enable event
                newGuide = renderer.drawGuide(newElement);
                me.setClickSelectable(newElement, me._isSelectable(newElement.shape));
                me.setMovable(newElement, me._isMovable(newElement.shape));
                me.setConnectGuide(newElement, me._isConnectable(newElement.shape));
                me.setResizable(newElement, newGuide, me._isResizable(newElement.shape));
                me.setConnectable(newElement, newGuide, me._isConnectable(newElement.shape));

                if (me._isLabelEditable(newElement.shape)) {
                    me.enableEditLabel(newElement);
                }

                // copy children
                me._copyChildren(item, newElement);

                selectedElement.push(newElement);
                copiedMap.push({
                    copied: item,
                    pasted: newElement
                })
            });

            var getPastedElementByCopied = function (copied) {
                var pasted;
                for (var i = 0, leni = copiedMap.length; i < leni; i++) {
                    if (copiedMap[i]['copied'].id == copied.id) {
                        pasted = copiedMap[i]['pasted'];
                    }
                }
                return pasted;
            };

            $.each(copiedElement, function (idx, item) {
                var relatedElementsFromEdge, relatedFrom, relatedTo,
                    copiedFrom, copiedTo, copiedEdge, pastedFrom, pastedTo, pastedEdge;
                //연결선이 복제된 경우, 복제된 대상 중 연결선의 From 과 To 가 모두 있을경우 연결선을 복원한다.
                if ($(item).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE) {
                    relatedElementsFromEdge = renderer._CANVAS.getRelatedElementsFromEdge(item);
                    relatedFrom = relatedElementsFromEdge.from;
                    relatedTo = relatedElementsFromEdge.to;
                    copiedFrom = undefined, copiedTo = undefined, pastedFrom = undefined, pastedTo = undefined, pastedEdge = undefined;
                    copiedEdge = item;

                    for (var i = 0; i < copiedElement.length; i++) {
                        if (relatedFrom) {
                            if (copiedElement[i].id == relatedFrom.id) {
                                copiedFrom = copiedElement[i];
                            }
                        }
                        if (relatedTo) {
                            if (copiedElement[i].id == relatedTo.id) {
                                copiedTo = copiedElement[i];
                            }
                        }
                    }
                    if (copiedFrom && copiedTo) {
                        pastedFrom = getPastedElementByCopied(copiedFrom);
                        pastedTo = getPastedElementByCopied(copiedTo);
                        pastedEdge = getPastedElementByCopied(copiedEdge);
                        var pastedShape = pastedEdge.shape;
                        var pastedId = pastedEdge.id;

                        renderer._CANVAS.removeShape(pastedEdge);
                        pastedEdge = renderer._CANVAS.connect(pastedFrom, pastedTo, null, null, null, null, null, pastedId);
                        pastedEdge.shape = pastedShape;
                        renderer.redrawShape(pastedEdge);
                    }
                }
                // 일반 도형이 복제된 경우, 복제된 대상 중 연결된 도형이 있을 경우, 그 연결선 또한 복제된 대상 속에 있는지 찾는다.
                // 만약 연결선이 복제 되지 않은 상태라면, 연결선을 복원한다.
                // 연결선을 복원 한 후에는,
                // copiedElement , selectedElement(pasted),copiedMap 에 각각 연결선을 추가하도록 한다.
                else {
                    var prevEdges = renderer._CANVAS.getPrevEdges(item);
                    var nextEdges = renderer._CANVAS.getNextEdges(item);
                    var relatedEdges = prevEdges.concat(nextEdges);
                    for (var i = 0, leni = relatedEdges.length; i < leni; i++) {
                        relatedElementsFromEdge = renderer._CANVAS.getRelatedElementsFromEdge(relatedEdges[i]);
                        relatedFrom = relatedElementsFromEdge.from;
                        relatedTo = relatedElementsFromEdge.to;
                        copiedFrom = undefined, copiedTo = undefined, copiedEdge = undefined, pastedFrom = undefined, pastedTo = undefined, pastedEdge = undefined;

                        for (var c = 0; c < copiedElement.length; c++) {
                            if (relatedFrom) {
                                if (copiedElement[c].id == relatedFrom.id) {
                                    copiedFrom = copiedElement[c];
                                }
                            }
                            if (relatedTo) {
                                if (copiedElement[c].id == relatedTo.id) {
                                    copiedTo = copiedElement[c];
                                }
                            }
                            if (copiedElement[c].id == relatedEdges[i].id) {
                                copiedEdge = copiedElement[c];
                            }
                        }
                        if (copiedFrom && copiedTo && !copiedEdge) {
                            pastedFrom = getPastedElementByCopied(copiedFrom);
                            pastedTo = getPastedElementByCopied(copiedTo);
                            copiedEdge = relatedEdges[i];

                            //relatedEdges[i] 를 복사한다.
                            var newShape = relatedEdges[i].shape.clone();
                            if (relatedEdges[i].shape.geom instanceof OG.geometry.BezierCurve) {
                                newShape.geom = new OG.BezierCurve(relatedEdges[i].shape.geom.getControlPoints());
                            } else {
                                newShape.geom = new OG.PolyLine(relatedEdges[i].shape.geom.getVertices());
                            }
                            newShape.geom.style = relatedEdges[i].shape.geom.style;
                            newShape.geom.move(me._CONFIG.COPY_PASTE_PADDING, me._CONFIG.COPY_PASTE_PADDING);

                            pastedEdge = renderer._CANVAS.connect(pastedFrom, pastedTo);
                            pastedEdge.shape = newShape;
                            pastedEdge.data = relatedEdges[i].data;

                            renderer.redrawShape(pastedEdge);
                            copiedElement.push(copiedEdge);
                            selectedElement.push(pastedEdge);
                            copiedMap.push({
                                copied: copiedEdge.id,
                                pasted: pastedEdge.id
                            });
                        }
                    }
                }
            });

            $(root).data("copied", selectedElement);
            renderer.addHistory();
        }

        var copiedShapes = [];
        var pastedShapes = [];

        var setPastedShapes = function (copied, selected) {
            copiedShapes.push(copied);
            pastedShapes.push(selected);

            if (renderer.isGroup(copied)) {
                var copiedChilds = renderer.getChilds(copied);
                var selectedChilds = renderer.getChilds(selected);
                $.each(copiedChilds, function (idx, copiedChild) {
                    setPastedShapes(copiedChild, selectedChilds[idx]);
                });
            }
        };
        $.each(copiedElement, function (index, copied) {
            setPastedShapes(copied, selectedElement[index]);
        });

        $(renderer._CANVAS._CONTAINER).trigger('pasteShape', [copiedShapes, pastedShapes]);
    },

    /**
     * 메뉴 : 선택된 Shape 들을 복제한다.
     */
    duplicateSelectedShape: function () {
        var me = this;
        me.copySelectedShape();
        me.pasteSelectedShape();
    },

    /**
     * 메뉴 : 선택된 Shape 들을 그룹핑한다.
     */
    groupSelectedShape: function () {
        var me = this, guide,
            groupElement = me._RENDERER.group($(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]"));

        if (groupElement) {
            $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
                me._RENDERER.removeGuide(item);
            });

            guide = me._RENDERER.drawGuide(groupElement);
            if (guide) {
                // enable event
                me.setClickSelectable(groupElement, me._isSelectable(groupElement.shape));
                me.setMovable(groupElement, me._isMovable(groupElement.shape));
                me.setConnectGuide(groupElement, me._isConnectable(groupElement.shape));
                me.setResizable(groupElement, guide, me._isResizable(groupElement.shape));
                me.setConnectable(groupElement, guide, me._isConnectable(groupElement.shape));

                me._RENDERER.toFront(guide.group);
            }
        }
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들을 그룹해제한다.
     */
    ungroupSelectedShape: function () {
        var me = this, guide,
            ungroupedElements = me._RENDERER.ungroup($(me._RENDERER.getRootElement()).find("[_shape=" + OG.Constants.SHAPE_TYPE.GROUP + "][_selected=true]"));
        $.each(ungroupedElements, function (idx, item) {
            guide = me._RENDERER.drawGuide(item);
            if (guide) {
                me._RENDERER.toFront(guide.group);
            }
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들을 회전한다.
     *
     * @param {Number} angle 회전각도
     */
    rotateSelectedShape: function (angle) {
        var me = this, guide;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_shape=" + OG.Constants.SHAPE_TYPE.EDGE + "][_selected=true]").each(function (idx, edge) {
            me._RENDERER.removeGuide(edge);
        });
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            if (item.shape && item.shape.TYPE !== OG.Constants.SHAPE_TYPE.EDGE &&
                item.shape.TYPE !== OG.Constants.SHAPE_TYPE.GROUP) {
                me._RENDERER.rotate(item, angle);

                me._RENDERER.removeGuide(item);
                guide = me._RENDERER.drawGuide(item);
                me.setResizable(item, guide, me._isResizable(item.shape));
                me.setConnectable(item, guide, me._isConnectable(item.shape));
                me._RENDERER.toFront(guide.group);
            }
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Line Width 를 설정한다.
     *
     * @param {Number} lineWidth
     */
    setLineWidthSelectedShape: function (lineWidth) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"stroke-width": lineWidth});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Line Color 를 설정한다.
     *
     * @param {String} lineColor
     */
    setLineColorSelectedShape: function (lineColor) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"stroke": lineColor});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Line Type 을 설정한다.
     *
     * @param {String} lineType ['straight' | 'plain' | 'bezier']
     */
    setLoopTypeSelectedShape: function (loopType) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            if (item.shape instanceof OG.shape.bpmn.A_Task) {
                item.shape.LoopType = loopType;
                me._RENDERER.redrawShape(item);
            }
            if (item.shape instanceof OG.shape.HorizontalPoolShape) {
                item.shape.LoopType = loopType;
                me._RENDERER.redrawShape(item);
            }
        });
        me._RENDERER.addHistory();
    },

    setAddEventSelectedShape: function (value) {
        var me = this;
        var newElement, shape, boundary;
        switch (value) {
            case "Message":
                shape = new OG.shape.bpmn.E_Intermediate_Message();
                break;
            case "Timer":
                shape = new OG.shape.bpmn.E_Intermediate_Timer();
                break;
            case "Error":
                shape = new OG.shape.bpmn.E_Intermediate_Error();
                break;
            case "Compensate":
                shape = new OG.shape.bpmn.E_Intermediate_Compensation();
                break;
            case "Conditional":
                shape = new OG.shape.bpmn.E_Intermediate_Rule();
                break;
            case "Signal":
                shape = new OG.shape.bpmn.Signal();
                break;
            case "Multiple":
                shape = new OG.shape.bpmn.E_Intermediate_Multiple();
                break;
            case "Parallel Multiple":
                shape = new OG.shape.bpmn.ParallelMultiple();
                break;
            case "Escalation":
                shape = new OG.shape.bpmn.E_Intermediate_Escalation();
                break;
        }

        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {

            boundary = item.shape.geom.getBoundary();
            item.shape.Events.push(value);
            //아래 위 라인에는 5개씩 양 옆라인에는 3개씩
            if (item.shape.Events.length < 6) {
                newElement = me._RENDERER._CANVAS.drawShape([boundary.getLowerLeft().x + (((boundary.getLowerRight().x - boundary.getLowerLeft().x) / 6) * (item.shape.Events.length)), boundary.getLowerCenter().y], shape, [30, 30]);
            }
            else if (item.shape.Events.length < 9) {
                newElement = me._RENDERER._CANVAS.drawShape([boundary.getLowerRight().x, boundary.getLowerRight().y - (((boundary.getLowerRight().y - boundary.getUpperRight().y) / 4) * (item.shape.Events.length - 5))], shape, [30, 30]);
            }
            else if (item.shape.Events.length < 14) {
                newElement = me._RENDERER._CANVAS.drawShape([boundary.getUpperRight().x - (((boundary.getUpperRight().x - boundary.getUpperLeft().x) / 6) * (item.shape.Events.length - 8)), boundary.getUpperCenter().y], shape, [30, 30]);
            }
            else if (item.shape.Events.length < 17) {
                newElement = me._RENDERER._CANVAS.drawShape([boundary.getUpperLeft().x, boundary.getUpperLeft().y - (((boundary.getUpperLeft().y - boundary.getLowerLeft().y) / 4) * (item.shape.Events.length - 13))], shape, [30, 30]);
            }

            item.appendChild(newElement);
        });

        me._RENDERER.addHistory();
    },

    setTaskTypeSelectedShape: function (taskType) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            if (item.shape instanceof OG.shape.bpmn.A_Task) {
                item.shape.TaskType = taskType;

                //FIXME : refactor
                if (taskType === "User") {
                    $(item).attr("_shape_id", "OG.shape.bpmn.A_HumanTask");
                    item.shape.SHAPE_ID = "OG.shape.bpmn.A_HumanTask";
                } else if (taskType === "Service") {
                    $(item).attr("_shape_id", "OG.shape.bpmn.A_ServiceTask");
                    item.shape.SHAPE_ID = "OG.shape.bpmn.A_ServiceTask";
                } else if (taskType === "Mapper") {
                    $(item).attr("_shape_id", "OG.shape.bpmn.A_MapperTask");
                    item.shape.SHAPE_ID = "OG.shape.bpmn.A_MapperTask";
                } else {
                    $(item).attr("_shape_id", "OG.shape.bpmn.A_Task");
                    item.shape.SHAPE_ID = "OG.shape.bpmn.A_Task";
                }
                me._RENDERER.redrawShape(item);
            }
        });
        me._RENDERER.addHistory();
    },

    setExceptionType: function (element, exceptionType) {
        var me = this;
        element.shape.exceptionType = exceptionType;
        me._RENDERER.redrawShape(element);
        me._RENDERER.addHistory();
    },

    setInclusion: function (element, inclusion) {
        var me = this;
        element.shape.inclusion = inclusion;
        me._RENDERER.redrawShape(element, null, true);
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Fill Opacity 를 설정한다.
     *
     * @param {String} opacity
     */
    setFillOpacitySelectedShape: function (opacity) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"fill-opacity": opacity});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Line Style 을 설정한다.
     *
     * @param {String} lineStyle ['' | '-' | '.' | '-.' | '-..' | '. ' | '- ' | '--' | '- .' | '--.' | '--..']
     */
    setLineStyleSelectedShape: function (lineStyle) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"stroke-dasharray": lineStyle});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Edge Shape 들의 시작점 화살표 스타일을 설정한다.
     *
     * @param {String} arrowType ['block' | 'open_block' | 'classic' | 'diamond' | 'open_diamond' | 'open' | 'oval' | 'open_oval']
     */
    setArrowStartSelectedShape: function (arrowType) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"arrow-start": arrowType + '-wide-long'});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Edge Shape 들의 끝점 화살표 스타일을 설정한다.
     *
     * @param {String} arrowType [] ['block' | 'open_block' | 'classic' | 'diamond' | 'open_diamond' | 'open' | 'oval' | 'open_oval']
     */
    setArrowEndSelectedShape: function (arrowType) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"arrow-end": arrowType + '-wide-long'});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Fill Color 를 설정한다.
     *
     * @param {String} fillColor
     */
    setFillColorSelectedShape: function (fillColor) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            if (item.shape.SHAPE_ID == "OG.shape.bpmn.Value_Chain" || item.shape.SHAPE_ID == "OG.shape.bpmn.A_Subprocess") {
                me._RENDERER.setShapeStyle(item, {"fill": "#FFFFFF-" + fillColor, "fill-opacity": 1});
            } else {
                me._RENDERER.setShapeStyle(item, {"fill": fillColor, "fill-opacity": 1});
            }
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Font Family 를 설정한다.
     *
     * @param {String} fontFamily
     */
    setFontFamilySelectedShape: function (fontFamily) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"font-family": fontFamily});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Font Size 를 설정한다.
     *
     * @param {Number} fontSize
     */
    setFontSizeSelectedShape: function (fontSize) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"font-size": fontSize});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Font Color 를 설정한다.
     *
     * @param {String} fontColor
     */
    setFontColorSelectedShape: function (fontColor) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"font-color": fontColor});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Font Weight 를 설정한다.
     *
     * @param {String} fontWeight ['bold' | 'normal']
     */
    setFontWeightSelectedShape: function (fontWeight) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"font-weight": fontWeight});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Font Style 을 설정한다.
     *
     * @param {String} fontStyle ['italic' | 'normal']
     */
    setFontStyleSelectedShape: function (fontStyle) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"font-style": fontStyle});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Text Decoration 을 설정한다.
     *
     * @param {String} textDecoration ['underline' | 'none']
     */
    setTextDecorationSelectedShape: function (textDecoration) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"text-decoration": textDecoration});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Label Direction 을 설정한다.
     *
     * @param {String} labelDirection ['vertical' | 'horizontal']
     */
    setLabelDirectionSelectedShape: function (labelDirection) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"label-direction": labelDirection});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Label Angle 을 설정한다.
     *
     * @param {Number} labelAngle
     */
    setLabelAngleSelectedShape: function (labelAngle) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"label-angle": labelAngle});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 Label Position 을 설정한다.
     *
     * @param {String} labelPosition ['top' | 'bottom' | 'left' | 'right' | 'center']
     */
    setLabelPositionSelectedShape: function (labelPosition) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            if (labelPosition === 'top') {
                me._RENDERER.setShapeStyle(item, {
                    "label-position": labelPosition,
                    "text-anchor": "middle",
                    "vertical-align": "bottom"
                });
            } else if (labelPosition === 'bottom') {
                me._RENDERER.setShapeStyle(item, {
                    "label-position": labelPosition,
                    "text-anchor": "middle",
                    "vertical-align": "top"
                });
            } else if (labelPosition === 'left') {
                me._RENDERER.setShapeStyle(item, {
                    "label-position": labelPosition,
                    "text-anchor": "end",
                    "vertical-align": "center"
                });
            } else if (labelPosition === 'right') {
                me._RENDERER.setShapeStyle(item, {
                    "label-position": labelPosition,
                    "text-anchor": "start",
                    "vertical-align": "center"
                });
            } else if (labelPosition === 'center') {
                me._RENDERER.setShapeStyle(item, {
                    "label-position": labelPosition,
                    "text-anchor": "middle",
                    "vertical-align": "center"
                });
            }
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 라벨 Vertical Align 를 설정한다.
     *
     * @param {String} verticalAlign ['top' | 'middle' | 'bottom']
     */
    setLabelVerticalSelectedShape: function (verticalAlign) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"vertical-align": verticalAlign});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 들의 라벨 Horizontal Align 를 설정한다.
     *
     * @param {String} horizontalAlign ['start' | 'middle' | 'end']
     */
    setLabelHorizontalSelectedShape: function (horizontalAlign) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.setShapeStyle(item, {"text-anchor": horizontalAlign});
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Shape 의 라벨을 설정한다.
     *
     * @param {String} label
     */
    setLabelSelectedShape: function (label) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.drawLabel(item, label);
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Edge Shape 의 시작점 라벨을 설정한다.
     *
     * @param {String} label
     */
    setEdgeFromLabelSelectedShape: function (label) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_shape=" + OG.Constants.SHAPE_TYPE.EDGE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.drawEdgeLabel(item, label, 'FROM');
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 선택된 Edge Shape 의 끝점 라벨을 설정한다.
     *
     * @param {String} label
     */
    setEdgeToLabelSelectedShape: function (label) {
        var me = this;
        $(me._RENDERER.getRootElement()).find("[_type=" + OG.Constants.NODE_TYPE.SHAPE + "][_shape=" + OG.Constants.SHAPE_TYPE.EDGE + "][_selected=true]").each(function (idx, item) {
            me._RENDERER.drawEdgeLabel(item, label, 'TO');
        });
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : Zoom In
     */
    zoomIn: function () {
        var me = this;
        if (me._CONFIG.SCALE + me._CONFIG.SCALE * 0.1 <= me._CONFIG.SCALE_MAX) {
            me._RENDERER.setScale(me._CONFIG.SCALE + me._CONFIG.SCALE * 0.1);
        }
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : Zoom Out
     */
    zoomOut: function () {
        var me = this;
        if (me._CONFIG.SCALE - me._CONFIG.SCALE * 0.1 >= me._CONFIG.SCALE_MIN) {
            me._RENDERER.setScale(me._CONFIG.SCALE - me._CONFIG.SCALE * 0.1);
        }
        me._RENDERER.addHistory();
    },

    /**
     * 메뉴 : 그려진 Shape 들을 캔버스 사이즈에 맞게 조절한다.
     */
    fitWindow: function () {
        var me = this, container = me._RENDERER.getContainer();
        me._RENDERER.fitCanvasSize([container.clientWidth, container.clientHeight], true);
        me._RENDERER.addHistory();
    },

    /**
     * Edge 와 선택된 Shape 정보들과의 시작, 끝점 연결 정보를 반환한다.
     *
     * @param {Element} edgeEle
     * @param {Array} bBoxArray
     * @return {Object} 연결 정보. {none, all, either, attrEither}
     * @private
     */
    _isContainsConnectedShape: function (edgeEle, bBoxArray) {
        var me = this, fromTerminal, toTerminal, fromShape, toShape, isContainsFrom = false, isContainsTo = false, i;

        fromTerminal = $(edgeEle).attr("_from");
        toTerminal = $(edgeEle).attr("_to");
        if (fromTerminal) {
            fromShape = me._getShapeFromTerminal(fromTerminal);
        }
        if (toTerminal) {
            toShape = me._getShapeFromTerminal(toTerminal);
        }

        for (i = 0; i < bBoxArray.length; i++) {
            if (fromShape && bBoxArray[i].id === fromShape.id) {
                isContainsFrom = true;
            }
            if (toShape && bBoxArray[i].id === toShape.id) {
                isContainsTo = true;
            }
        }

        return {
            none: !isContainsFrom && !isContainsTo,
            all: isContainsFrom && isContainsTo,
            any: isContainsFrom || isContainsTo,
            either: (isContainsFrom && !isContainsTo) || (!isContainsFrom && isContainsTo),
            attrEither: (fromTerminal && !toTerminal) || (!fromTerminal && toTerminal)
        };
    },

    /**
     * 주어진 터미널 정보로 이를 포함하는 Shape 엘리먼트를 반환한다.
     *
     * @param {OG.shape.Terminal} terminal 연결 터미널
     * @return {Element} Shape 엘리먼트
     * @private
     */
    _getShapeFromTerminal: function (terminal) {
        var me = this;
        var element;
        if (terminal) {
            var shapeId = terminal.substring(0, terminal.indexOf(OG.Constants.TERMINAL));
            element = me._RENDERER.getElementById(shapeId);
        }
        return element;
    },

    /**
     * Page 및 Scroll offset 과 Scale 을 반영한 이벤트의 실제 offset 좌표를 반환한다.
     *
     * @param {Event} event
     * @return {Object} offset 정보. {x, y}
     * @private
     */
    _getOffset: function (event) {
        var me = this, container = me._RENDERER.getContainer();

        return {
            x: (event.pageX - $(container).offset().left + container.scrollLeft) / me._CONFIG.SCALE,
            y: (event.pageY - $(container).offset().top + container.scrollTop) / me._CONFIG.SCALE
        };
    },

    /**
     * 이동할 대상 즉, 선택된 Shape 정보를 반환한다.
     *
     * @return {Array} 선택된 Shape 정보. {id, box}' Array
     * @private
     */
    _getMoveTargets: function () {
        var me = this, bBoxArray = [], box;
        var root = me._RENDERER.getRootElement();
        $(root).find("[id$=" + OG.Constants.GUIDE_SUFFIX.BBOX + "]").each(function (index, item) {
            if (item.id && item.id.indexOf(OG.Constants.CONNECT_GUIDE_SUFFIX.BBOX) == -1) {
                var ele = me._RENDERER.getElementById(item.id);
                var isEdge = $(ele).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE;

                //엣지는 제외한다.
                if (!isEdge) {
                    box = me._RENDERER.clone(item);
                    me._RENDERER.setAttr(box, me._CONFIG.DEFAULT_STYLE.GUIDE_SHADOW);
                    bBoxArray.push({
                        id: item.id.replace(OG.Constants.GUIDE_SUFFIX.BBOX, ""),
                        box: box
                    });
                }
            }
        });
        return bBoxArray;
    },

    /**
     * 가로, 세로 Offset 만큼 주어진 Shape을 이동한다.
     *
     * @param {Array} bBoxArray 선택된 Shape 정보. {id, box}' Array
     * @param {Number} dx 가로 Offset
     * @param {Number} dy 세로 Offset
     * @return {Array} 이동된 Shape 정보. {id, box}' Array
     * @private
     */
    _moveElements: function (bBoxArray, dx, dy) {
        var renderer = this._RENDERER;
        var me = this, eleArray = [];

        //이동시에 연결상태를 체크하여야 하는 shape 들을 모은다.
        var connectCheckShapes = [];
        $.each(bBoxArray, function (k, item) {
            var ele = renderer.getElementById(item.id);
            if (renderer.isEdge(ele)) {
                return;
            }
            connectCheckShapes.push(ele);
            if (renderer.isGroup(ele)) {
                $.each(renderer.getInnerShapesOfGroup(ele), function (idx, innerShape) {
                    connectCheckShapes.push(innerShape);
                });
            }
        });

        //이동 대상 엣지일 경우 엣지를 이동시킨다.
        var excludeEdgeId = [];
        var edges = renderer.getAllEdges();
        $.each(edges, function (index, edge) {
            var status = me._isContainsConnectedShape(edge, connectCheckShapes);
            if (status && status.all) {
                renderer.move(edge, [dx, dy]);
                excludeEdgeId.push(edge.id);
            }
        });

        //shape 이동 처리를 수행한다.
        $.each(bBoxArray, function (k, item) {
            var ele = renderer.getElementById(item.id);
            if (renderer.isEdge(ele)) {
                return;
            }
            // cloned box 삭제
            renderer.remove(item.box);

            // 이동
            renderer.move(ele, [dx, dy], excludeEdgeId);
            renderer.drawGuide(ele);

            eleArray.push(ele);
        });

        return eleArray;
    },

    /**
     * Canvas 영역을 벗어나서 드래그되는 경우 Canvas 확장한다.
     *
     * @param {Number} currentX
     * @param {Number} currentY
     * @private
     */
    _autoExtend: function (currentX, currentY, element) {
        var me = this, rootBBox = me._RENDERER.getRootBBox(),
            width = element.shape.geom.boundary.getWidth(), height = element.shape.geom.boundary.getHeight()

        // Canvas 영역을 벗어나서 드래그되는 경우 Canvas 확장
        if (me._CONFIG.AUTO_EXTENSIONAL && rootBBox.width < (currentX + width) * me._CONFIG.SCALE) {
            me._RENDERER.setCanvasSize([rootBBox.width + me._CONFIG.AUTO_EXTENSION_SIZE, rootBBox.height]);
        }
        if (me._CONFIG.AUTO_EXTENSIONAL && rootBBox.height < (currentY + height) * me._CONFIG.SCALE) {
            me._RENDERER.setCanvasSize([rootBBox.width, rootBBox.height + me._CONFIG.AUTO_EXTENSION_SIZE]);
        }
    },

    /**
     * 그룹 Shape 인 경우 포함된 하위 Shape 들을 복사한다.
     *
     * @param {Element} element 원본 부모 Shape 엘리먼트
     * @param {Element} newCopiedElement 복사된 부모 Shape 엘리먼트
     * @private
     */
    _copyChildren: function (element, newCopiedElement) {
        var me = this, children = element.childNodes;
        $.each(children, function (idx, item) {
            if ($(item).attr("_type") === OG.Constants.NODE_TYPE.SHAPE) {
                // copy
                var boundary = item.shape.geom.getBoundary(), newShape, newElement, newGuide;
                newShape = item.shape.clone();

                if ($(item).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE) {
                    newShape.geom = new OG.PolyLine(item.shape.geom.getVertices());
                    newShape.geom.style = item.shape.geom.style;
                    newShape.geom.move(me._CONFIG.COPY_PASTE_PADDING, me._CONFIG.COPY_PASTE_PADDING);
                    newElement = me._RENDERER.drawShape(
                        null, newShape,
                        null, item.shapeStyle
                    );

                } else {
                    newElement = me._RENDERER.drawShape(
                        [boundary.getCentroid().x + me._CONFIG.COPY_PASTE_PADDING, boundary.getCentroid().y + me._CONFIG.COPY_PASTE_PADDING],
                        newShape, [boundary.getWidth(), boundary.getHeight()], item.shapeStyle
                    );
                }

                // custom data
                newElement.data = item.data;

                // append child
                newCopiedElement.appendChild(newElement);

                // enable event
                me.setClickSelectable(newElement, me._isSelectable(newElement.shape));
                me.setMovable(newElement, me._isMovable(newElement.shape));
                me.setConnectGuide(newElement, me._isConnectable(newElement.shape));

                if (me._isLabelEditable(newElement.shape)) {
                    me.enableEditLabel(newElement);
                }

                // recursive call
                if (item.childNodes.length > 0) {
                    me._copyChildren(item, newElement);
                }
            }
        });
    },

    /**
     * 하위 Shape 자식노드를 모두 deselect 처리한다.
     *
     * @param {Element} element
     * @private
     */
    _deselectChildren: function (element) {
        var me = this, children = element.childNodes;
        $.each(children, function (idx, item) {
            if ($(item).attr("_type") === OG.Constants.NODE_TYPE.SHAPE) {
                if (item.childNodes.length > 0) {
                    me._deselectChildren(item);
                    me._delSelectedElement(item);
                }

                if ($(item).attr("_selected") === "true") {
                    me._RENDERER.removeGuide(item);
                    $(item).draggable("destroy");
                }
            }
        });
    },

    /**
     * 선택되어진 Shape 부모노드가 하나라도 있다면 true 를 반환한다.
     *
     * @param {Element} element
     * @return {Boolean}
     * @private
     */
    _isParentSelected: function (element) {
        var me = this, parentNode = element.parentNode;
        if (parentNode) {
            if (me._isParentSelected(parentNode)) {
                return true;
            }

            if ($(parentNode).attr("_type") === OG.Constants.NODE_TYPE.SHAPE &&
                $(parentNode).attr("_selected") === "true") {
                return true;
            }
        }

        return false;
    },

    _num: function (str) {
        return parseInt(str, 10);
    },

    _grid: function (value, move) {
        var me = this;
        if (move)
            return me._CONFIG.DRAG_GRIDABLE ? OG.Util.roundGrid(value, me._CONFIG.MOVE_SNAP_SIZE / 2) : value;
        else
            return me._CONFIG.DRAG_GRIDABLE ? OG.Util.roundGrid(value, me._CONFIG.MOVE_SNAP_SIZE) : value;
    },

    _isSelectable: function (shape) {
        var me = this;
        return me._CONFIG.SELECTABLE && shape.SELECTABLE;
    },

    _isConnectable: function (shape) {
        var me = this;
        return me._CONFIG.CONNECTABLE && shape.CONNECTABLE;
    },

    _isConnectableFrom: function (shape) {
        var me = this;
        return shape.ENABLE_FROM;
    },

    _isConnectableTo: function (shape) {
        var me = this;
        return shape.ENABLE_TO;
    },

    _isSelfConnectable: function (shape) {
        var me = this;
        return me._CONFIG.SELF_CONNECTABLE && shape.SELF_CONNECTABLE;
    },

    _isConnectCloneable: function (shape) {
        var me = this;
        return me._CONFIG.CONNECT_CLONEABLE && shape.CONNECT_CLONEABLE;
    },

    _isConnectRequired: function (shape) {
        var me = this;
        return me._CONFIG.CONNECT_REQUIRED && shape.CONNECT_REQUIRED;
    },

    _isMovable: function (shape) {
        var me = this;
        return (me._CONFIG.SELECTABLE && shape.SELECTABLE) &&
            (me._CONFIG.MOVABLE && me._CONFIG.MOVABLE_[shape.TYPE] && shape.MOVABLE);
    },

    _isDeletable: function (shape) {
        var me = this;
        return (me._CONFIG.DELETABLE && shape.DELETABLE) &&
            (me._CONFIG.DELETABLE && me._CONFIG.DELETABLE_[shape.TYPE] && shape.DELETABLE);
    },

    _isConnectStyleChangable: function (shape) {
        var me = this;
        return (me._CONFIG.CONNECT_STYLE_CHANGE && shape.CONNECT_STYLE_CHANGE) &&
            (me._CONFIG.CONNECT_STYLE_CHANGE && me._CONFIG.CONNECT_STYLE_CHANGE_[shape.TYPE] && shape.CONNECT_STYLE_CHANGE);
    },

    _isResizable: function (shape) {
        var me = this;
        return (me._CONFIG.SELECTABLE && shape.SELECTABLE) &&
            (me._CONFIG.RESIZABLE && me._CONFIG.RESIZABLE_[shape.TYPE] && shape.RESIZABLE);
    },

    _isLabelEditable: function (shape) {
        var me = this;
        return me._CONFIG.LABEL_EDITABLE && me._CONFIG.LABEL_EDITABLE_[shape.TYPE] && shape.LABEL_EDITABLE;
    },

    //TODO : 선택된 요소를 선택요소배열에 추가
    _addSelectedElement: function (element) {
        if (undefined == this.selectedElements) {
            this.selectedElements = {};
        }
        this.selectedElements[element.attributes["id"].value] = element;
    },

    //TODO : 선택된 요소를 선택요소배열에서 삭제
    _delSelectedElement: function (element) {
        if (this.selectedElements) {
            delete this.selectedElements[element.attributes["id"].value];
        }
    },

    //TODO : 선택요소배열 반환
    _getSelectedElement: function () {
        var key, returnArray = [];
        for (key in this.selectedElements) {
            returnArray.push(this.selectedElements[key]);
        }
        return returnArray;
    },


    _isSelectedElement: function (element) {
        var isSelected = false;
        if (element && element.id) {
            for (var key in this.selectedElements) {
                if (key === element.id) {
                    isSelected = true;
                }
            }
        }
        return isSelected;
    },

    _removeAllSelectedElement: function () {
        //init
        var key;
        for (key in this.selectedElements) {
            delete this.selectedElements[key];
        }
    },
    /**
     * Shape 엘리먼트의 setConnectGuide 에 관련된 이벤트
     *
     * @param {Element} element Shape 엘리먼트
     * @param {Boolean} isConnectable 가능여부
     */
    setConnectGuide: function (element, isConnectable) {
        var renderer = this._RENDERER;
        var me = this, spotBBOX, spots, circleSpots, eventOffset, skipRemove, root = renderer.getRootGroup();
        var root = renderer.getRootGroup();
        //스팟 이동량 보정치의 범위조건을 설정한다.
        //드래그시작시에 한번만 계산된다.
        var calculateSpotCorrectionConditions = function (spot) {

            //이동 딜레이
            var delay = me._CONFIG.EDGE_MOVE_DELAY_SIZE;
            //조건집합
            var correctionConditions = [];
            //스팟 기준으로 이웃한 변곡점
            var reativePoints = [];
            var type = $(spot).data('type');
            var vertices = element.shape.geom.getVertices();
            var allVertices;

            //모든 엣지의 변곡점 집합
            var allEdges = renderer.getAllEdges();
            $.each(allEdges, function (idx, edge) {
                allVertices = edge.shape.geom.getVertices();
                $.each(allVertices, function (i, vertice) {
                    reativePoints.push(vertice);
                });
            });

            //서클 타입 스팟이고, 마지막 변곡점인 경우 shape 바운더리의 십자 영역을 번위조건에 추가한다.
            if (type === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE) {
                var index = $(spot).data('index');
                if (index === 0 || index === vertices.length - 1) {
                    $.each(root.childNodes, function (idx, childNode) {

                        if ($(childNode).attr("_type") === OG.Constants.NODE_TYPE.SHAPE
                            && $(childNode).attr("_shape") !== OG.Constants.SHAPE_TYPE.EDGE
                        ) {
                            var boundary = renderer.getBoundary(childNode);

                            if (boundary && boundary._upperLeft) {
                                var upperLeft = boundary._upperLeft;
                                var width = boundary._width;
                                var height = boundary._height;

                                //vertical boundary range
                                correctionConditions.push({
                                    condition: {
                                        minX: upperLeft.x + ( width / 2) - delay,
                                        maxX: upperLeft.x + ( width / 2) + delay,
                                        minY: upperLeft.y,
                                        maxY: upperLeft.y + height,
                                    },
                                    fixedPosition: {
                                        x: upperLeft.x + ( width / 2)
                                    },
                                    id: idx
                                });

                                //horizontal boundary range
                                correctionConditions.push({
                                    condition: {
                                        minX: upperLeft.x,
                                        maxX: upperLeft.x + width,
                                        minY: upperLeft.y + ( height / 2) - delay,
                                        maxY: upperLeft.y + ( height / 2) + delay,
                                    },
                                    fixedPosition: {
                                        y: upperLeft.y + ( height / 2)
                                    },
                                    id: idx
                                });
                            }
                        }
                    });
                }
            }

            //변곡점 보정치 조건은 x 또는 y 가 일치할 경우
            $.each(reativePoints, function (idx, point) {
                correctionConditions.push({
                    condition: {
                        minX: point.x - delay,
                        maxX: point.x + delay,
                    },
                    fixedPosition: {
                        x: point.x
                    },
                    id: idx
                });
                correctionConditions.push({
                    condition: {
                        minY: point.y - delay,
                        maxY: point.y + delay,
                    },
                    fixedPosition: {
                        y: point.y
                    },
                    id: idx
                });
            });

            // spot 에 데이터 저장
            $(spot).data('correctionConditions', correctionConditions);

        };

        //스팟이 가지고있는 범위조건에 따라 새로운 포지션을 계산한다.
        var correctionConditionAnalysis = function (spot, offset) {
            var fixedPosition = {
                x: offset.x,
                y: offset.y
            };
            var calculateFixedPosition = function (expectedPosition) {
                if (!expectedPosition) {
                    return fixedPosition;
                }
                if (expectedPosition.x && !expectedPosition.y) {
                    return {
                        x: expectedPosition.x,
                        y: fixedPosition.y
                    }
                }
                if (expectedPosition.y && !expectedPosition.x) {
                    return {
                        x: fixedPosition.x,
                        y: expectedPosition.y
                    }
                }
                if (expectedPosition.x && expectedPosition.y) {
                    return expectedPosition;
                }
                return fixedPosition;
            };
            var correctionConditions = $(spot).data('correctionConditions');
            if (!correctionConditions) {
                return fixedPosition;
            }

            var conditionsPassCandidates = [];
            $.each(correctionConditions, function (index, correctionCondition) {
                var condition = correctionCondition.condition;

                var conditionsPass = true;
                if (condition.minX) {
                    if (offset.x < condition.minX) {
                        conditionsPass = false;
                    }
                }
                if (condition.maxX) {
                    if (offset.x > condition.maxX) {
                        conditionsPass = false;
                    }
                }
                if (condition.minY) {
                    if (offset.y < condition.minY) {
                        conditionsPass = false;
                    }
                }
                if (condition.maxY) {
                    if (offset.y > condition.maxY) {
                        conditionsPass = false;
                    }
                }

                if (conditionsPass) {
                    conditionsPassCandidates.push(correctionCondition);
                }
            });
            $.each(conditionsPassCandidates, function (index, conditionsPassCandidate) {
                fixedPosition = calculateFixedPosition(conditionsPassCandidate.fixedPosition);
            });
            return fixedPosition;
        };

        var isConnectableSpot = function (spot) {
            var isConnectable;
            var vertices = element.shape.geom.getVertices();
            if ($(spot).data('type') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE) {
                var index = $(spot).data("index");
                if (index || index === 0) {
                    if (index === 0) {
                        isConnectable = 'from'
                    }
                    if (index === vertices.length - 1) {
                        isConnectable = 'to'
                    }
                }
            }
            return isConnectable;
        };

        $(element).bind({
            mousemove: function (event) {
                if (!me._isConnectable(element.shape)) {
                    return;
                }

                var isShape = $(element).attr("_type") === OG.Constants.NODE_TYPE.SHAPE;
                var isEdge = $(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE;
                var isSpotFocusing = $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_MOUSEROVER);
                var isDragging = $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG);
                var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);

                if (!isShape || isSpotFocusing || isDragging || isConnectMode) {
                    return;
                }

                if (isEdge) {
                    eventOffset = me._getOffset(event);
                    var virtualSpot = renderer.createVirtualSpot(eventOffset.x, eventOffset.y, element);
                    if (virtualSpot) {

                        $(virtualSpot).bind({
                            mousedown: function () {
                                $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_MOUSEROVER, true);
                            },
                            mouseup: function () {
                                $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_MOUSEROVER, false);
                            }
                        });

                        $(virtualSpot).draggable({
                            start: function (event) {
                                renderer.removeAllGuide();
                                $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG, true);

                                var eventOffset = me._getOffset(event);
                                var vertice = $(this).data('vertice');
                                var geometry = element.shape.geom;
                                $(this).data('offset', {
                                    x: eventOffset.x - vertice.x,
                                    y: eventOffset.y - vertice.y
                                });

                                var prev = $(this).data('prev');
                                var next = $(this).data('next');
                                var vertices = geometry.getVertices();

                                var offset = $(this).data('offset');
                                var newX = eventOffset.x - offset.x;
                                var newY = eventOffset.y - offset.y;
                                var newVertice = geometry.convertCoordinate([newX, newY]);

                                //기존 변곡점 스팟들의 인덱스값을 업데이트한다.
                                circleSpots = renderer.getCircleSpots(element);
                                $.each(circleSpots, function (index, circleSpot) {
                                    var circleSpotIndex = $(circleSpot).data('index');
                                    if (circleSpotIndex >= next) {
                                        $(circleSpot).data('index', circleSpotIndex + 1);
                                    }
                                });

                                //Edge 의 geometry 의 vertieces를 업데이트한다.
                                vertices.splice(next, 0, newVertice);
                                geometry.setVertices(vertices);

                                //가상스팟을 고정스팟으로 변경한다.
                                $(this).attr('name', OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT);
                                $(this).data('index', next);

                                //양 끝 변곡점의 커넥션 포인트로의 변환.
                                var needToRedrawVertices = true;
                                if ($(this).data('type') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE) {
                                    var index = $(this).data("index");
                                    if (index === 0 && index === vertices.length - 1) {
                                        needToRedrawVertices = false;
                                    }
                                }
                                if (needToRedrawVertices) {
                                    var from = $(element).attr("_from");
                                    var to = $(element).attr("_to");
                                    if (from) {
                                        var fromPosition = renderer._getPositionFromTerminal(from);
                                        vertices[0] =
                                            geometry.convertCoordinate([fromPosition.x, fromPosition.y]);
                                    }
                                    if (to) {
                                        var toPosition = renderer._getPositionFromTerminal(to);
                                        vertices[vertices.length - 1] =
                                            geometry.convertCoordinate([toPosition.x, toPosition.y]);
                                    }
                                    geometry.setVertices(vertices);
                                }

                                //이동 보정 조건 추가
                                $(this).data('corrections', calculateSpotCorrectionConditions(virtualSpot));

                                element = renderer.drawEdge(new OG.PolyLine(vertices), geometry.style, element.id);

                                renderer.removeRubberBand(renderer.getRootElement());
                                renderer.selectSpot(virtualSpot);
                            },
                            drag: function (event) {
                                if (!renderer._getREleById(virtualSpot.id)) {
                                    renderer.removeAllConnectGuide();
                                    $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG, false);
                                    $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_MOUSEROVER, false);
                                    return;
                                }

                                var eventOffset = me._getOffset(event);
                                var offset = $(this).data("offset");
                                var newX = eventOffset.x - offset.x;
                                var newY = eventOffset.y - offset.y;
                                var vertices = element.shape.geom.getVertices();

                                var analysisPosition = correctionConditionAnalysis(virtualSpot, {x: newX, y: newY});
                                newX = analysisPosition.x;
                                newY = analysisPosition.y;

                                renderer.setAttr(virtualSpot, {cx: newX});
                                renderer.setAttr(virtualSpot, {cy: newY});

                                var index = $(this).data("index");

                                vertices[index].x = newX;
                                vertices[index].y = newY;

                                renderer.drawEdge(new OG.PolyLine(vertices), element.shape.geom.style, element.id);
                                renderer.trimConnectIntersection(element);
                            },
                            stop: function (event) {
                                $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG, false);
                                $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_MOUSEROVER, false);

                                var eventOffset = me._getOffset(event);
                                var offset = $(this).data("offset");
                                var index = $(this).data("index");
                                var newX = eventOffset.x - offset.x;
                                var newY = eventOffset.y - offset.y;
                                var vertices = element.shape.geom.getVertices();

                                var analysisPosition = correctionConditionAnalysis(virtualSpot, {x: newX, y: newY});
                                analysisPosition.x = me._grid(analysisPosition.x, 'move');
                                analysisPosition.y = me._grid(analysisPosition.y, 'move');
                                newX = analysisPosition.x;
                                newY = analysisPosition.y;

                                vertices[index].x = newX;
                                vertices[index].y = newY;

                                renderer.drawEdge(new OG.PolyLine(vertices), element.shape.geom.style, element.id);

                                renderer.removeConnectGuide(element);
                                renderer.removeVirtualSpot(element);

                                renderer.trimConnectInnerVertice(element);
                                renderer.trimConnectIntersection(element);
                                renderer.trimEdge(element);
                                renderer.addHistory();
                            }
                        });
                    }
                }
            },
            mouseout: function (event) {
                if (!me._isConnectable(element.shape)) {
                    return;
                }
                var isShape = $(element).attr("_type") === OG.Constants.NODE_TYPE.SHAPE;
                var isEdge = $(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE;
                var isDragging = $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG);

                if (!isShape) {
                    return;
                }

                if (!isEdge) {
                    if (isDragging) {
                        return;
                    }
                    renderer.removeConnectGuide(element);
                }

                if (isEdge) {
                    if (isDragging) {
                        return;
                    }

                    //스팟이 선택되어 바운더리 영역 밖으로 나갔다고 판단될 경우 예외처리한다.
                    skipRemove = false;
                    eventOffset = me._getOffset(event);
                    spots = renderer.getSpots(element);
                    $(spots).each(function (index, spot) {
                        spotBBOX = renderer.getBBox(spot);
                        if (eventOffset.x >= spotBBOX.x && eventOffset.x <= spotBBOX.x2
                            && eventOffset.y >= spotBBOX.y && eventOffset.y <= spotBBOX.y2) {
                            skipRemove = true;
                        }
                    });

                    //가상스팟이 선택되어 바운더리 영역 밖으로 나갔다고 판단될 경우 예외처리한다.
                    var virtualSpot = renderer.getVirtualSpot(element);
                    if (virtualSpot) {
                        spotBBOX = renderer.getBBox(virtualSpot);
                        if (eventOffset.x >= spotBBOX.x && eventOffset.x <= spotBBOX.x2
                            && eventOffset.y >= spotBBOX.y && eventOffset.y <= spotBBOX.y2) {
                            skipRemove = true;
                        }
                    }

                    if (!skipRemove) {
                        renderer.removeConnectGuide(element);
                        renderer.removeVirtualSpot(element);
                    }
                }
                event.stopImmediatePropagation();
            },
            mouseover: function (event) {
                if (!me._isConnectable(element.shape)) {
                    return;
                }
                var guide;
                //마우스가 어떠한 shape 에 접근할 때

                //1. 어떠한 shpae가 Edge 가 아닐경우 커넥트 가이드를 생성한다.
                //  1) 드래그중인 스팟이 처음 또는 끝의 변곡점일경우,
                //      1. 접근한 shape 의 정보를 root 에 알린다.
                //      2. 빠져나간 shape 의 정보를 root 에 알린다.
                //      3. 접근한 shpae 의 스타일을 변경한다.
                //      4. 빠져나간 shape 의 스타일을 변경한다.
                //      5. 접근한 shape 의 정보를 root 에 알린다.
                //      5. 빠져나간 shape 의 정보를 root 에 삭제한다.

                //2. 어떠한 shape가 Edge 일 경우
                //  1) 다른 Edge의 커넥트가이드를 정리한다.
                //  2) 어떠한 Edge의 Spot이 드래그중일 경우 커넥트가이드 생성을 막는다.
                //  3) 어떠한 Edge의 Spot이 드래그중이 아닐 경우 커넥트가이드를 생성한다.
                var enableStyle = me._CONFIG.DEFAULT_STYLE.CONNECTABLE_HIGHLIGHT;
                var isShape = $(element).attr("_type") === OG.Constants.NODE_TYPE.SHAPE;
                var isEdge = $(element).attr("_shape") === OG.Constants.SHAPE_TYPE.EDGE;
                var isDragging = $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG);
                var isConnectMode = $(root).data(OG.Constants.GUIDE_SUFFIX.LINE_CONNECT_MODE);
                if (!isShape) {
                    return;
                }

                if (!isEdge) {
                    //스팟을 드래그 중일때는 예외처리한다.
                    if (isDragging) {
                        return;
                    }
                    renderer.removeAllConnectGuide();
                    renderer.drawConnectGuide(element);
                }

                if (isEdge) {
                    if (isConnectMode) {
                        return;
                    }
                    if (isDragging) {
                        return;
                    }
                    renderer.removeOtherConnectGuide(element);
                    guide = renderer.drawConnectGuide(element);
                    if (guide && guide.spots) {
                        $(guide.spots).each(function (index, spot) {

                            $(spot).bind({
                                mouseover: function () {
                                    var skipRemove = false;

                                    //드래그중일때는 예외처리한다.
                                    if ($(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG)) {
                                        skipRemove = true;
                                    }
                                    if (!skipRemove) {
                                        renderer.selectSpot(spot);
                                        $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_MOUSEROVER, true);
                                    }
                                },
                                mouseout: function () {
                                    var skipRemove = false;

                                    //드래그중일때는 예외처리한다.
                                    if ($(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG)) {
                                        skipRemove = true;
                                    }
                                    if (!skipRemove) {
                                        $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_MOUSEROVER, false);
                                    }
                                }
                            });

                            $(spot).draggable({
                                start: function (event) {
                                    renderer.removeAllGuide();
                                    renderer.toFront(element);

                                    $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG, true);

                                    var eventOffset = me._getOffset(event);
                                    var vertice = $(this).data('vertice');
                                    var geometry = element.shape.geom;
                                    var vertices = geometry.getVertices();

                                    $(this).data('offset', {
                                        x: eventOffset.x - vertice.x,
                                        y: eventOffset.y - vertice.y
                                    });

                                    //양 끝의 변곡점을 커넥트 포지션으로 변경.
                                    var needToRedrawVertices = true;
                                    if ($(this).data('type') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE) {
                                        var index = $(this).data('index');
                                        if (index === 0 || index === vertices.length - 1) {
                                            needToRedrawVertices = false;
                                        }
                                    }
                                    $(this).data('needToRedrawVertices', needToRedrawVertices);

                                    if (needToRedrawVertices) {
                                        var from = $(element).attr('_from');
                                        var to = $(element).attr('_to');
                                        if (from) {
                                            var fromPosition = renderer._getPositionFromTerminal(from);
                                            vertices[0] =
                                                geometry.convertCoordinate([fromPosition.x, fromPosition.y]);
                                        }
                                        if (to) {
                                            var toPosition = renderer._getPositionFromTerminal(to);
                                            vertices[vertices.length - 1] =
                                                geometry.convertCoordinate([toPosition.x, toPosition.y]);
                                        }
                                        geometry.setVertices(vertices);
                                    }

                                    if ($(this).data('type') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE) {
                                        $(this).data('corrections', calculateSpotCorrectionConditions(spot));
                                        renderer.remove(guide.bBox);
                                        renderer.removeRubberBand(renderer.getRootElement());
                                    }

                                    if ($(this).data('type') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_RECT) {
                                        vertices = geometry.getVertices();
                                        var prev = $(this).data('prev');
                                        var next = $(this).data('next');
                                        if (prev === 0) {
                                            var newPreVertice =
                                                element.shape.geom.convertCoordinate([vertices[0].x, vertices[0].y]);
                                            vertices.splice(prev, 0, newPreVertice);
                                            $(this).data('prev', prev + 1);
                                            $(this).data('next', next + 1);
                                            next = next + 1;
                                        }
                                        if (next === vertices.length - 1) {
                                            var newNextVertice =
                                                geometry.convertCoordinate([vertices[vertices.length - 1].x, vertices[vertices.length - 1].y]);
                                            vertices.splice(next, 0, newNextVertice);
                                        }

                                        //Edge 의 geometry 의 vertieces를 업데이트한다.
                                        geometry.setVertices(vertices);
                                        $(this).data('corrections', calculateSpotCorrectionConditions(spot));
                                        renderer.remove(guide.bBox);
                                        renderer.removeRubberBand(renderer.getRootElement());
                                    }
                                },
                                drag: function (event) {
                                    if (!renderer._getREleById(spot.id)) {
                                        renderer.removeAllConnectGuide();
                                        $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG, false);
                                        $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_MOUSEROVER, false);
                                        return;
                                    }

                                    var eventOffset = me._getOffset(event);
                                    var offset = $(this).data("offset");
                                    var newX = eventOffset.x - offset.x;
                                    var newY = eventOffset.y - offset.y;
                                    var vertices = element.shape.geom.getVertices();

                                    var analysisPosition = correctionConditionAnalysis(spot, {x: newX, y: newY});
                                    if ($(this).data('type') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE) {
                                        newX = analysisPosition.x;
                                        newY = analysisPosition.y;

                                        renderer.setAttr(spot, {cx: newX});
                                        renderer.setAttr(spot, {cy: newY});

                                        var index = $(this).data("index");
                                        vertices[index].x = newX;
                                        vertices[index].y = newY;
                                    }
                                    if ($(this).data('type') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_RECT) {
                                        newX = analysisPosition.x;
                                        newY = analysisPosition.y;

                                        var spotRectStyle = me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_SPOT_RECT;
                                        var height = spotRectStyle.h;
                                        var direction = $(this).data('direction');
                                        var prev = $(this).data("prev");
                                        var next = $(this).data("next");
                                        if (direction === 'vertical') {
                                            vertices[prev].x = newX;
                                            vertices[next].x = newX;
                                            renderer.setAttr(spot, {x: newX - (height / 2)});
                                        }
                                        if (direction === 'horizontal') {
                                            vertices[prev].y = newY;
                                            vertices[next].y = newY;
                                            renderer.setAttr(spot, {y: newY - (height / 2)});
                                        }
                                    }
                                    renderer.drawEdge(new OG.PolyLine(vertices), element.shape.geom.style, element.id);
                                    if ($(this).data('needToRedrawVertices')) {
                                        renderer.trimConnectIntersection(element);
                                    }

                                    var connectableDirection = isConnectableSpot(spot);
                                    var frontElement = renderer.getFrontForCoordinate([eventOffset.x, eventOffset.y]);
                                    $.each(renderer.getAllNotEdges(), function (idx, otherElement) {
                                        if (frontElement && connectableDirection) {
                                            if (otherElement.id === frontElement.id) {
                                                renderer.setHighlight(otherElement, enableStyle);
                                                renderer.drawConnectGuide(otherElement);
                                            } else {
                                                renderer.removeHighlight(otherElement, enableStyle);
                                                renderer.removeConnectGuide(otherElement);
                                            }
                                        } else {
                                            renderer.removeHighlight(otherElement, enableStyle);
                                            renderer.removeConnectGuide(otherElement);
                                        }
                                    });
                                },
                                stop: function (event) {
                                    $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_DRAG, false);
                                    $(root).data(OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_EVENT_MOUSEROVER, false);

                                    var eventOffset = me._getOffset(event);
                                    var offset = $(this).data("offset");
                                    var index = $(this).data("index");
                                    var newX = eventOffset.x - offset.x;
                                    var newY = eventOffset.y - offset.y;
                                    var vertices = element.shape.geom.getVertices();

                                    var analysisPosition = correctionConditionAnalysis(spot, {x: newX, y: newY});
                                    analysisPosition.x = me._grid(analysisPosition.x, 'move');
                                    analysisPosition.y = me._grid(analysisPosition.y, 'move');

                                    if ($(this).data('type') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_CIRCLE) {
                                        newX = analysisPosition.x;
                                        newY = analysisPosition.y;

                                        renderer.setAttr(spot, {cx: newX});
                                        renderer.setAttr(spot, {cy: newY});

                                        var index = $(this).data("index");
                                        vertices[index].x = newX;
                                        vertices[index].y = newY;

                                    }
                                    if ($(this).data('type') === OG.Constants.CONNECT_GUIDE_SUFFIX.SPOT_RECT) {
                                        newX = analysisPosition.x;
                                        newY = analysisPosition.y;

                                        var spotRectStyle = me._CONFIG.DEFAULT_STYLE.CONNECT_GUIDE_SPOT_RECT;
                                        var height = spotRectStyle.h;
                                        var direction = $(this).data('direction');
                                        var prev = $(this).data("prev");
                                        var next = $(this).data("next");
                                        if (direction === 'vertical') {
                                            vertices[prev].x = newX;
                                            vertices[next].x = newX;
                                            renderer.setAttr(spot, {x: newX - (height / 2)});
                                        }
                                        if (direction === 'horizontal') {
                                            vertices[prev].y = newY;
                                            vertices[next].y = newY;
                                            renderer.setAttr(spot, {y: newY - (height / 2)});
                                        }
                                    }
                                    renderer.drawEdge(new OG.PolyLine(vertices), element.shape.geom.style, element.id);
                                    renderer.removeConnectGuide(element);
                                    renderer.removeVirtualSpot(element);

                                    var connectableDirection = isConnectableSpot(spot);
                                    var frontElement = renderer.getFrontForCoordinate([eventOffset.x, eventOffset.y]);
                                    if (frontElement) {
                                        renderer.removeHighlight(frontElement, enableStyle);
                                    }
                                    if (connectableDirection && frontElement) {
                                        var point = [newX, newY];
                                        var terminal = renderer.createTerminalString(frontElement, point);
                                        var isConnectable = me._isConnectable(frontElement.shape);
                                        if (isConnectable) {
                                            if (connectableDirection === 'from') {
                                                if (me._isConnectableFrom(frontElement.shape)) {
                                                    renderer.connect(terminal, null, element, element.shape.geom.style);
                                                }
                                            }
                                            if (connectableDirection === 'to') {
                                                if (me._isConnectableTo(frontElement.shape)) {
                                                    renderer.connect(null, terminal, element, element.shape.geom.style);
                                                }
                                            }
                                        }
                                    }
                                    if (connectableDirection && !frontElement) {
                                        renderer.disconnectOneWay(element, connectableDirection);
                                    }

                                    renderer.trimConnectInnerVertice(element);
                                    renderer.trimConnectIntersection(element);
                                    renderer.trimEdge(element);

                                    renderer.addHistory();
                                }
                            });

                        })
                    }
                }
                event.stopImmediatePropagation();
            }
        })

    }
};
OG.handler.EventHandler.prototype.constructor = OG.handler.EventHandler;
OG.EventHandler = OG.handler.EventHandler;