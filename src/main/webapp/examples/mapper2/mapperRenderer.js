/**
 * Open graph Tree Library (OG-Tree)
 *
 * @class
 * @requires OG.*
 *
 * @param {String} container Dom Element Id
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
var EditorRenderer = function (container) {
    this.Constants = {
        TYPE: {
            ACTIVITY: "activity",
            FOLDER: "folder",
            ED: "ed",
            EXPANDER: "expander",
            MAPPING: "mapping",
            TRANSFORMER: "transformer",

            /**
             * 자신으로 부터 익스팬더까지의 연결선
             */
            EXPANDER_FROM: "expanderFrom",

            /**
             * 자신으로부터 부모 객체의 익스팬더까지의 연결선
             */
            EXPANDER_TO: "expanderTo",

            /**
             * 매핑에 사용되는 연결선
             */
            MAPPING_EDGE: "mappingEdge",

            /**
             * 액티비티 연결선
             */
            ACTIVITY_REL: "activityRel"
        },
        POSITION: {
            MY: "my",
            MY_OUT: "my-out",
            MY_IN: "my-in",
            OTHER: "other",
            OTHER_OUT: "other-out",
            OTHER_MY: "other-my"
        },
        PREFIX: {
            EXPANDER: "-expander",
            EXPANDER_FROM: "-expanderFrom",
            EXPANDER_TO: "-expanderTo",
            MAPPING_EDGE: "-mappingEdge",
            MAPPING_LABEL: "-mapping-label",
            SELECTED_LABEL: "-selected-label",
            ACTIVITY_REL: "-activity-rel",
            _LEFT_BRACKET_: "_LEFT_BRACKET_",
            _RIGHT_BRACKET_: "_RIGHT_BRACKET_",
            _POSITION_: "_POSITION_",
            _MAPPING_: "_MAPPING_"
        }
    };
    this._CONFIG = {
        /**
         * 체크박스 생성 여부
         */
        CEHCKBOX: false,
        /**
         * 이름 변경 가능 여부
         */
        CHANGE_NAME: false,
        /**
         * 오우너 변경 가능 여부
         */
        CHANGE_OWNER: false,
        /**
         * 액티비티를 이동하여 소트시킬 수 있는 여부
         */
        MOVE_SORTABLE: false,
        /**
         * 아이템을 드래그하여 매핑시킬 수 있는 여부
         */
        MAPPING_ENABLE: false,
        /**
         * 폴더 생성 가능 여부
         */
        CREATE_FOLDER: false,
        /**
         * ED 생성 가능 여부
         */
        CREATE_ED: false,
        /**
         * PICK ED 가능 여부
         */
        PICK_ED: false,
        /**
         * 아이템 삭제 가능 여부
         */
        DELETABLE: false,
        /**
         * 라벨 표기 가능 여부
         */
        SHOW_LABEL: true,
        /**
         * 캔버스의 마진
         */
        DISPLAY_MARGIN: 50,
        /**
         * 캔버스 높이
         */
        CONTAINER_HEIGHT: 600,

        /**
         * 라벨 최소 크기(IE)
         */
        LABEL_MIN_SIZE: 300,

        /**
         * 라벨 최대 크기(IE)
         */
        LABEL_MAX_SIZE: 400,
        /**
         * 라벨 최대 글자 크기
         */
        LABEL_MAX_LENGTH: 15,

        /**
         * Lane Area 관련 Configration
         */
        AREA: {
            /**
             * 전체 화면 중 아더 워크플로우의 가로 비율
             */
            LEFT_SIZE_RATE: (6 / 12) - 0.01,
            /**
             * 전체 화면 중 마이 워크플로우 가로 비율
             */
            RIGHT_SIZE_RATE: (6 / 12) + 0.01,
            /**
             * 액티비티 Area 사이즈
             */
            ACTIVITY_SIZE: 120,
            /**
             * Area 의 Bottom Margin
             */
            BOTTOM_MARGIN: 50,
            /**
             * Area 의 Top Margin
             */
            TOP_MARGIN: 40,
            /**
             * 아더 - 액티비티 Area 라벨 및 디스플레이 여부
             */
            lAc: {
                label: 'Left',
                display: true
            },
            /**
             * 아더 - 아웃 Area 라벨 및 디스플레이 여부
             */
            lOut: {
                label: 'Output',
                display: true,
                min: 400
            },
            /**
             * 마이 - 인 Area 라벨 및 디스플레이 여부
             */
            rIn: {
                label: 'Input',
                display: true,
                min: 400
            },
            /**
             * 마이 - 액티비티 Area 라벨 및 디스플레이 여부
             */
            rAc: {
                label: 'Right',
                center: true,
                display: true
            },
            /**
             * 마이 - 아웃 Area 라벨 및 디스플레이 여부
             */
            rOut: {
                label: 'My Output',
                display: true
            }
        },
        /**
         * Area 의 스타일 관련 Configuration
         */
        AREA_STYLE: {
            /**
             * 아더 - 액티비티 Area Style
             */
            lAc: {
                'fill': 'RGB(246,246,246)',
                'fill-opacity': '1',
                stroke: '#555',
                'stroke-width': 2
            },
            /**
             * 아더 - 아웃 Area Style
             */
            lOut: {
                'fill': 'RGB(246,246,246)',
                'fill-opacity': '1'
            },
            /**
             * 마이 - 인 Area Style
             */
            rIn: {
                'fill': 'RGB(255,255,255)',
                'fill-opacity': '1',
                stroke: '#555',
                'stroke-width': 2
            },
            /**
             * 마이 - 액티비티 Area Style
             */
            rAc: {
                'fill': 'RGB(255,255,255)',
                'fill-opacity': '1',
                stroke: '#555',
                'stroke-width': 2
            },
            /**
             * 마이 - 아웃 Area Style
             */
            rOut: {
                'fill': 'RGB(246,246,246)',
                'fill-opacity': '1'
            }
        },
        /**
         * 아이템의 사이즈 관련 Configuration
         */
        SHAPE_SIZE: {
            /**
             * 아이템의 너비 (공통)
             */
            COL_SIZE: 50,
            /**
             * 액티비티 가로
             */
            ACTIVITY_WIDTH: 50,
            /**
             * 액티비티 세로
             */
            ACTIVITY_HEIGHT: 50,
            /**
             * 액티비티 라벨 마진
             */
            ACTIVITY_LABEL_MARGIN: 20,
            /**
             * 액티비티 마진
             */
            ACTIVITY_MARGIN: 50,
            /**
             * 폴더 가로
             */
            FOLDER_WIDTH: 40,
            /**
             * 폴더 세로
             */
            FOLDER_HEIGHT: 40,
            /**
             * 폴더 마진
             */
            FOLDER_MARGIN: 54,
            /**
             * ED 가로
             */
            ED_WIDTH: 30,
            /**
             * ED 세로
             */
            ED_HEIGHT: 40,
            /**
             * ED 마진
             */
            ED_MARGIN: 54,
            /**
             * Expand 버튼과 부모사이의 간격
             */
            EXPANDER_FROM_MARGIN: 10,
            /**
             * Expand 버튼과 자식 사이의 꺽음 부위 간격
             */
            EXPANDER_TO_VERTICE_MARGIN: 10,
            /**
             * Expand 버튼과 자식 사이의 간격
             */
            EXPANDER_TO_MARGIN: 40,
            /**
             * Expand 버튼 가로
             */
            EXPANDER_WIDTH: 14,
            /**
             * Expand 버튼 세로
             */
            EXPANDER_HEIGHT: 14
        },
        /**
         * 디폴트 스타일 Configuration
         */
        DEFAULT_STYLE: {
            /**
             * Blur 처리하는 아이템의 opacity
             */
            BLUR: "0.3",
            /**
             * 연결선 타입
             */
            EDGE: "plain", //bezier || plain,
            /**
             * 매핑 연결선 타입
             */
            MAPPING_EDGE: "bezier", //bezier || plain,
            /**
             * 아이템 라벨 폰트 사이즈
             */
            FONT_SIZE: 9
        }
    };

    /**
     * 인 데이터 그룹의 가상의 activity 와 targetActivity 사이의 가상 익스팬더 상황 데이터
     * @type {Array}
     * @private
     */
    this._INCOLLAPSE = [];

    /**
     * 트리 데이터 저장소
     * @type {HashMap}
     * @private
     */
    this._STORAGE = {};

    /**
     * 매핑 엘리먼트 저장소
     * @type {Array}
     * @private
     */
    this._MAPPING_ELEMENTS = [];

    /**
     * 뷰 데이터 저장소
     * @type {HashMap}
     * @private
     */
    this._VIEWDATA = {};

    this._CONTAINER = $('#' + container);
    this._CONTAINER.css({
        width: '100%',
        height: this._CONFIG.CONTAINER_HEIGHT + 'px',
        border: '1px solid #555'
    });
    // Canvas
    this.canvas = new OG.Canvas(container, [this._CONTAINER.width(), this._CONFIG.CONTAINER_HEIGHT], 'white');
    this.canvas._CONFIG.DEFAULT_STYLE.EDGE["edge-type"] = "straight";

    this.canvas.initConfig({
        selectable: true,
        dragSelectable: true,
        movable: true,
        resizable: false,
        connectable: true,
        selfConnectable: false,
        connectCloneable: false,
        connectRequired: true,
        labelEditable: false,
        groupDropable: true,
        collapsible: true,
        enableHotKey: false,
        enableContextMenu: false,
        useSlider: true,
        stickGuide: false,
        checkBridgeEdge: false,
        autoHistory: false
    });
    this.canvas._CONFIG.DRAG_PAGE_MOVABLE = true;
    this.canvas._CONFIG.GUIDE_CONTROL_LINE_NUM = 1;
    this.canvas._CONFIG.LABEL_MIN_SIZE = this._CONFIG.LABEL_MIN_SIZE;
    this.canvas._CONFIG.LABEL_MAX_SIZE = this._CONFIG.LABEL_MAX_SIZE;

    this._RENDERER = this.canvas._RENDERER;
    this._HANDLER = this.canvas._HANDLER;

    this.AREA = {
        lAc: null,
        lOut: null,
        rIn: null,
        rAc: null,
        rOut: null
    }
};
EditorRenderer.prototype = {

    /**
     * 캔버스를 초기 빌드한다.  최초 1번만 실행된다.
     */
    init: function () {
        var me = this;

        me.drawArea();
        me.render();
        me.bindEvent();
    },
    /**
     * Scale 을 반환한다. (리얼 사이즈 : Scale = 1)
     *
     * @return {Number} 스케일값
     */
    getScale: function () {
        return this.canvas.getScale();
    },

    /**
     * Scale 을 설정한다. (기본 사이즈 : Scale = 1)
     *
     * @param {Number} scale 스케일값
     */
    setScale: function (scale) {
        var me = this;
        var preSize = me.canvas.getCanvasSize();
        var preWidth = preSize[0];
        var preHeight = preSize[1];
        var preScrollLeft = me._CONTAINER.scrollLeft();
        var preScrollTop = me._CONTAINER.scrollTop();
        var preCenterX = preScrollLeft + (me._CONTAINER.width() / 2);
        var preCenterY = preScrollTop + (me._CONTAINER.height() / 2);

        this.canvas.setScale(scale);
        this.renderViews();

        var cuSize = me.canvas.getCanvasSize();
        var cuWidth = cuSize[0];
        var cuHeight = cuSize[1];
        var cuScrollLeft = me._CONTAINER.scrollLeft();
        var cuScrollTop = me._CONTAINER.scrollTop();

        var cuCenterX = preCenterX * (preWidth / cuWidth);
        var cuCenterY = preCenterY * (preHeight / cuHeight);

        var moveX = preCenterX - cuCenterX;
        var moveY = preCenterY - cuCenterY;
        me._CONTAINER.scrollLeft(cuScrollLeft + moveX);
        me._CONTAINER.scrollTop(cuScrollTop + moveY);

    },
    /**
     * 기본 Area 를 생성한다.
     * lAc,lOut,rIn,rAc,rOut,Canvas
     */
    drawArea: function () {
        var me = this;
        var lacLabel = me._CONFIG.AREA.lAc.display ? me._CONFIG.AREA.lAc.label : undefined;
        var lOutLabel = me._CONFIG.AREA.lOut.display ? me._CONFIG.AREA.lOut.label : undefined;
        var rInLabel = me._CONFIG.AREA.rIn.display ? me._CONFIG.AREA.rIn.label : undefined;
        var rAcLabel = me._CONFIG.AREA.rAc.display ? me._CONFIG.AREA.rAc.label : undefined;
        var rOutLabel = me._CONFIG.AREA.rOut.display ? me._CONFIG.AREA.rOut.label : undefined;
        me.AREA.lAc = me.canvas.drawShape([100, 100], new OG.Area(lacLabel), [50, 50], me._CONFIG.AREA_STYLE.lAc);
        me.AREA.lOut = me.canvas.drawShape([100, 100], new OG.Area(lOutLabel), [50, 50], me._CONFIG.AREA_STYLE.lOut);
        me.AREA.rIn = me.canvas.drawShape([100, 100], new OG.Area(rInLabel), [50, 50], me._CONFIG.AREA_STYLE.rIn);
        me.AREA.rAc = me.canvas.drawShape([100, 100], new OG.Area(rAcLabel), [50, 50], me._CONFIG.AREA_STYLE.rAc);
        me.AREA.rOut = me.canvas.drawShape([100, 100], new OG.Area(rOutLabel), [50, 50], me._CONFIG.AREA_STYLE.rOut);
    },

    /**
     * 캔버스의 모든 화면요소와 데이터를 삭제한다.
     */
    clear: function () {
        this.canvas.clear();
        var rootGroup = this.canvas.getRootGroup();
        $(rootGroup).empty();

        this.clearData(true);
    },

    //========================================================================//
    //=============================Data apis==================================//
    //========================================================================//

    /**
     * Java 트리 데이터를 렌더러 트리 데이터로 변형한다.
     * @param data
     * @param myout
     * @return {Array}
     */
    convertTreeData: function (data, myout) {
        var me = this;
        var nodeList = [];
        var addNode = function (node, parentId, isRoot) {
            var obj;
            var type, position;
            if (isRoot) {
                type = 'activity';
                position = myout;
            } else {
                if (node.type == 'folder') {
                    type = 'folder'
                } else {
                    type = 'ed';
                }
                position = myout == 'other' ? 'other-out' : 'my-in';
            }
            node.id = me.convertJavaIdToTreeId(node.id, myout);

            var nodeCopy = JSON.parse(JSON.stringify(node));
            delete nodeCopy['child'];
            obj = {
                "type": type,
                "id": node.id,
                "name": node.name,
                "position": position,
                "parentId": parentId,
                "expand": true,
                "extData": nodeCopy,
                "color": "black",
                "stroke": "none",
                "tooltip": node.name
            }

            obj.extData['c_type'] = 'Document';
            nodeList.push(obj);
            if (node.child && node.child.length) {
                $.each(node.child, function (c, childNode) {
                    addNode(childNode, node.id, false);
                })
            }
        };
        addNode(data, null, true);
        return nodeList;
    },

    /**
     * 자바 mappingElements 데이터를 렌더러 매핑 데이터로 변환한다.
     * @param data
     * @return {Array}
     */
    convertMappingData: function (data) {
        var me = this;
        var nodeList = [];
        var selectById = function (id) {
            $.each(nodeList, function (i, node) {
                var selected;
                if (node.id == id) {
                    selected = node;
                }
                return selected;
            })
        }
        var addTransformerMapping = function (transformerMapping, target, targetType) {
            var linkedArgumentName = transformerMapping.linkedArgumentName;
            var transformer = transformerMapping.transformer;
            var transformerClassName = transformer.__className;
            var transformerJson = JSON.parse(transformer.transformerJson);
            var argumentSourceMap = transformer.argumentSourceMap;

            var transformerData = selectById(transformerJson.id);
            if (!transformerData) {
                transformerData = {
                    "type": me.Constants.TYPE.TRANSFORMER,
                    "id": transformerJson.id,
                    "x": transformerJson.x,
                    "y": transformerJson.y,
                    "className": transformerClassName,
                    "position": me.Constants.POSITION.OTHER_MY
                };
                nodeList.push(transformerData);
            }

            //linkedArgument 와 source 의 연결정보
            var obj = {
                "type": me.Constants.TYPE.MAPPING,
                "id": transformerJson.id + linkedArgumentName + me.Constants.PREFIX._MAPPING_ + target,
                "source": transformerJson.id + linkedArgumentName,
                "sourceType": "transformer",
                "sourceTransformerData": transformerData,
                "target": target,
                "targetType": targetType,
                "position": me.Constants.POSITION.OTHER_MY
            }
            nodeList.push(obj);

            //argumentSourceMap 의 연결정보
            for (var key in argumentSourceMap) {
                var value = argumentSourceMap[key];
                var argumentSourceId = transformerJson.id + key;

                //레프트 트리에 연결되어있다.
                if (typeof value === 'string') {
                    var leftTreeId = me.convertArgumentNameToTreeId(value, 'other');
                    var obj = {
                        "type": me.Constants.TYPE.MAPPING,
                        "id": leftTreeId + me.Constants.PREFIX._MAPPING_ + argumentSourceId,
                        "source": leftTreeId,
                        "sourceType": "variable",
                        "target": argumentSourceId,
                        "targetType": "transformer",
                        "position": me.Constants.POSITION.OTHER_MY
                    }
                    nodeList.push(obj);
                }
                //트랜스포머에 연결되어있다.
                else {
                    addTransformerMapping(value, argumentSourceId, "transformer");
                }
            }
        }

        $.each(data, function (index, mappingElement) {
            //우측 트리의 아이디
            var rightTreeId = me.convertArgumentNameToTreeId(mappingElement.argument.text, 'my');


            //트랜스포머 매핑
            if (mappingElement.transformerMapping) {
                addTransformerMapping(mappingElement.transformerMapping, rightTreeId, "variable");
            }

            //variable 매핑
            if (mappingElement.variable && mappingElement.variable.name) {
                var leftTreeId = me.convertArgumentNameToTreeId(mappingElement.variable.name, 'other');
                var obj = {
                    "type": me.Constants.TYPE.MAPPING,
                    "id": leftTreeId + me.Constants.PREFIX._MAPPING_ + rightTreeId,
                    "source": leftTreeId,
                    "sourceType": "variable",
                    "target": rightTreeId,
                    "targetType": "variable",
                    "position": me.Constants.POSITION.OTHER_MY
                }
                nodeList.push(obj);
            }
        });
        return nodeList;
    },

    /**
     * source 데이터가 트랜스포머인 매핑 정보로부터 트랜스포머 매핑 클래스를 생성한다.
     * @param node
     * @param data
     * @return {{__className: string, transformer: ({__className, name, transformerJson, argumentSourceMap: {}}|*), linkedArgumentName: (XML|void|string)}|*}
     */
    createTransformerMapping: function (node, data) {
        var me = this;
        var transformerMapping;
        var transformer;
        var argumentSourceMap = {};

        var source = node.source;
        var transformerData = node.sourceTransformerData;
        var linkedArgumentName = source.replace(transformerData.id, "");

        //동일한 트랜스폼 내부의 input 터미널들을 사용하는 매핑정보를 구한다.
        $.each(data, function (i, mapping) {
            if (mapping.type == me.Constants.TYPE.MAPPING) {
                if (mapping.target && mapping.target.indexOf(transformerData.id) != -1) {
                    var argumentSourceKey = mapping.target.replace(transformerData.id, "");
                    //mapping 의 source 가 좌측트리요소일경우
                    if (mapping.sourceType == 'variable') {
                        argumentSourceMap[argumentSourceKey] = me.convertTreeIdToArgumentName(mapping.source);
                    }
                    //mapping 의 source 가 트랜스폼일경우
                    if (mapping.sourceType == 'transformer') {
                        argumentSourceMap[argumentSourceKey] = me.createTransformerMapping(mapping, data);
                    }
                }
            }
        })

        transformer = {
            __className: transformerData.className,
            name: me.getTransformerDrawDataByClassName(transformerData.className).label,
            transformerJson: JSON.stringify({
                id: transformerData.id,
                x: transformerData.x,
                y: transformerData.y
            }),
            argumentSourceMap: argumentSourceMap
        };
        transformerMapping = {
            __className: 'org.uengine.processdesigner.mapper.TransformerMapping',
            transformer: transformer,
            linkedArgumentName: linkedArgumentName
        };

        return transformerMapping;
    },

    /**
     * 렌더러 매핑 데이터를 Java mappingElements 로 변환한다.
     * @param data
     * @return {Array}
     */
    convertToJavaMappingData: function (data) {
        var me = this;
        var mappingElements = [];
        if (!data || !data.length) {
            return mappingElements;
        }
        $.each(data, function (index, node) {
            //우측 트리의 variable 과 연결된 데이터부터 시작하도록 해야한다.
            if (node.targetType != 'variable') {
                return;
            }
            var direction = 'in';
            var processValiable;
            var transformerMapping;
            var mappingElement;

            //데이터의 source 가 좌측트리요소일경우
            if (node.sourceType == 'variable') {
                processValiable = {
                    __className: 'org.uengine.kernel.ProcessVariable',
                    name: me.convertTreeIdToArgumentName(node.source)
                };
            }
            //데이터의 source 가 트랜스폼일경우
            if (node.sourceType == 'transformer') {
                transformerMapping = me.createTransformerMapping(node, data)
            }

            var argumentText = {
                __className: 'org.uengine.contexts.TextContext',
                text: me.convertTreeIdToArgumentName(node.target)
            };
            if (processValiable) {
                mappingElement = {
                    __className: 'org.uengine.kernel.ParameterContext',
                    direction: direction,
                    argument: argumentText,
                    variable: processValiable
                };
            }
            if (transformerMapping) {
                mappingElement = {
                    __className: 'org.uengine.kernel.ParameterContext',
                    direction: direction,
                    argument: argumentText,
                    transformerMapping: transformerMapping
                };
            }
            mappingElements.push(mappingElement);
        });
        return mappingElements;
    },
    /**
     * 뷰 데이터를 불러온다.
     * @returns {Array} OG-Tree view data
     */
    loadViewData: function () {
        return this._VIEWDATA.views;
    },
    /**
     * 노드 데이터를 불러온다.
     * @returns {Array} OG-Tree data
     */
    load: function () {
        var data = [];
        var me = this;
        for (var key in me._STORAGE) {
            data.push(me._STORAGE[key]);
        }
        return data;
    },
    /**
     * 노드 데이터를 필터링하여 불러온다.
     * @param filterData json
     * @returns {Array} OG-Tree data
     */
    loadByFilter: function (filterData) {
        var data = [];
        var me = this, key;
        for (key in me._STORAGE) {
            var toAdd = true;
            for (var filterKey in filterData) {
                //하나라도 필터 조건이 맞지 않다면 추가하지 않도록 한다.
                if (me._STORAGE[key][filterKey] != filterData[filterKey]) {
                    toAdd = false;
                }
            }
            if (toAdd) {
                data.push(me._STORAGE[key]);
            }
        }
        return data;
    },
    /**
     * 노드 데이터를 필터링 하여 삭제한다.
     * @param filterData json
     */
    removeDataByFilter: function (filterData) {
        var me = this, key;
        for (key in me._STORAGE) {
            var toRemove = true;
            for (var filterKey in filterData) {
                //하나라도 필터 조건이 맞지 않다면 삭제하지 않도록 한다.
                if (me._STORAGE[key][filterKey] != filterData[filterKey]) {
                    toRemove = false;
                }
            }
            if (toRemove) {
                delete me._STORAGE[key];
            }
        }
        me._STORAGE = JSON.parse(JSON.stringify(me._STORAGE));
    },
    /**
     * 노드 데이터를 모두 삭제한다.
     * @param preventRender 화면 리로드 여부
     */
    clearData: function (preventRender) {
        this._STORAGE = {};
        if (!preventRender) {
            this.render();
        }
    },

    /**
     * 매핑 엘리먼트 데이터를 업데이트한다.
     * @param data
     * @param preventRender
     */
    updateMappingElements: function (data, preventRender) {
        if (!data) {
            return;
        }
        var me = this;
        if (data && data.length) {
            $.each(data, function (index, mappingElement) {
                //우측 트리의 아이디
                var rightTreeId = me.convertArgumentNameToTreeId(mappingElement.argument.text, 'my');


                //트랜스포머 매핑
                // if (mappingElement.transformerMapping) {
                //     me.drawTransformerMappingLine(mappingElement.transformerMapping, toShape);
                // }

                //variable 매핑
                if (mappingElement.variable && mappingElement.variable.name) {
                    var leftTreeId = me.convertArgumentNameToTreeId(mappingElement.variable.name, 'other');

                    //me.canvas.connect(me.canvas.getElementById(leftTreeId), me.canvas.getElementById(rightTreeId));
                }
            });
        }
        console.log(me._STORAGE)

        //me._MAPPING_ELEMENTS = data;
        if (!preventRender) {
            me.render();
        }
    },

    /**
     * 트리 데이터를 업데이트한다.
     * @param data OG-Tree data
     * @param preventRender 화면 리로드 여부
     */
    updateData: function (data, preventRender) {
        if (!data) {
            return;
        }
        var me = this;
        var copyObj;
        var checkEnablePosition = function (item) {
            if (item) {
                if (me.Constants.POSITION.OTHER == item['position']) {
                    return me._CONFIG.AREA.lAc.display;
                }
                if (me.Constants.POSITION.OTHER_OUT == item['position']) {
                    return me._CONFIG.AREA.lOut.display;
                }
                if (me.Constants.POSITION.MY_IN == item['position']) {
                    return me._CONFIG.AREA.rIn.display;
                }
                if (me.Constants.POSITION.MY == item['position']) {
                    return me._CONFIG.AREA.rAc.display;
                }
                if (me.Constants.POSITION.MY_OUT == item['position']) {
                    return me._CONFIG.AREA.rOut.display;
                }
                if (me.Constants.POSITION.OTHER_MY == item['position']) {
                    return true;
                }
            }
            return false;
        };
        if ($.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                if (checkEnablePosition(data[i])) {
                    copyObj = JSON.parse(JSON.stringify(data[i]));
                    if (copyObj.id) {
                        me._STORAGE[copyObj.id] = copyObj;
                    }
                }
            }
        } else {
            for (var key in data) {
                if (checkEnablePosition(data[key])) {
                    copyObj = JSON.parse(JSON.stringify(data[key]));
                    if (copyObj.id) {
                        me._STORAGE[copyObj.id] = copyObj;
                    }
                }
            }
        }
        if (!preventRender) {
            me.render();
        }
    },
    /**
     * 자바에서 넘어온 트리노드 아이디를 렌더러의 트리아이디로 치환한다.
     * ex) [instance]-name  =>  _LEFT_BRACKET_instance_RIGHT_BRACKET_-name_POSITION_my
     * @param javaId
     * @param myout
     * @return {*}
     */
    convertJavaIdToTreeId: function (javaId, myout) {
        var me = this;
        var converted = javaId;
        converted = converted.replace('[', me.Constants.PREFIX._LEFT_BRACKET_);
        converted = converted.replace(']', me.Constants.PREFIX._RIGHT_BRACKET_);
        converted = converted + me.Constants.PREFIX._POSITION_ + myout;
        return converted;
    },
    /**
     * 트랜스포머 매핑의 argumentName 을 렌더러의 트리아이디로 치환한다.
     * ex) [instance].name => _LEFT_BRACKET_instance_RIGHT_BRACKET_-instanceId_POSITION_out
     * @param name
     * @param myout
     * @return {*}
     */
    convertArgumentNameToTreeId: function (name, myout) {
        var me = this;
        var converted = name;
        //. 을 - 로 변경
        converted = converted.replace(/\./gi, "-");
        converted = converted.replace('[', me.Constants.PREFIX._LEFT_BRACKET_);
        converted = converted.replace(']', me.Constants.PREFIX._RIGHT_BRACKET_);
        converted = converted + me.Constants.PREFIX._POSITION_ + myout;
        return converted;
    },
    /**
     * 트리아이디를 트랜스포머 매핑의 argumentName 형태로 치환한다.
     * @param treeId
     * @return {*}
     */
    convertTreeIdToArgumentName: function (treeId) {
        var me = this;
        var converted = treeId;
        converted = converted.substring(0, converted.indexOf(me.Constants.PREFIX._POSITION_));
        converted = converted.replace(me.Constants.PREFIX._LEFT_BRACKET_, '[');
        converted = converted.replace(me.Constants.PREFIX._RIGHT_BRACKET_, ']');
        converted = converted.replace(/-/gi, ".");
        return converted;
    },


    //========================================================================//
    //===========================Render apis==================================//
    //========================================================================//
    /**
     * 스토리지의 데이터를 기반으로 화면에 렌더링한다.
     */
    render: function () {
        this.createViewData();
        this.renderViews();
    },
    /**
     * 스토리지의 데이터를 기반으로 화면에 표현되야 하는 각 객체의 y 좌표를 생성한 ViewData 를 반환한다.
     * @returns {{totalHeight: number, views: Array, displayViews: Array}}
     */
    createViewData: function () {
        //아더 워크플로우 처리
        var me = this, y, root,
            otherActivities, myActivities,
            viewData = {
                totalHeight: 0,
                views: [],
                displayViews: []
            },
            lastViewBottom = 0,
            depthMap = {};
        /**
         * 주어진 객체의 좌표를 생성하여 viewData 에 저장하고, 객체에 자식이 있다면 함수를 반복수행한다.
         * @param object
         * @param depth
         * @param parentView
         * @param childFromParent
         */
        var getViewData = function (object, depth, parentView, childFromParent) {
            var bottom = 0;
            var expanderView = null;
            var expanderFromView = null;
            var expanderToView = null;
            //최초 depth 는 0 으로 지정.
            if (!depth) {
                depth = 0;
            }

            var child = me.selectChildById(object['id']);
            var view = {
                data: JSON.parse(JSON.stringify(object))
            };
            view.depth = depth;

            //자신과 같은 부모를 가지는 데이터들 중 자신이 첫 번째일 경우, 부모의 y 와 나의 y 를 동기화시킨다.
            //자신과 같은 부모를 가지는 데이터들 중 자신이 인덱스를 등록한다.
            var firstChild = false;
            if (childFromParent && childFromParent.length) {
                for (var i = 0, leni = childFromParent.length; i < leni; i++) {
                    if (childFromParent[0]['id'] == object['id']) {
                        view.index = i;
                        if (i == 0) {
                            firstChild = true;
                        }
                    }
                }
            }

            //액티비티일 경우
            if (object['type'] == me.Constants.TYPE.ACTIVITY) {
                y = firstChild ? parentView.y : lastViewBottom + (me._CONFIG.SHAPE_SIZE.ACTIVITY_HEIGHT / 2);
                bottom = y + (me._CONFIG.SHAPE_SIZE.ACTIVITY_HEIGHT / 2) + me._CONFIG.SHAPE_SIZE.ACTIVITY_MARGIN;
                view.y = y;
                view.width = me._CONFIG.SHAPE_SIZE.ACTIVITY_WIDTH;
                view.height = me._CONFIG.SHAPE_SIZE.ACTIVITY_HEIGHT;
                view.bottom = bottom;
                view.root = root;
                view.position = object['position'];
                view.id = object['id'];
                view.expand = object['expand'];
                view.type = object['type'];
                view.name = object['name'];
                view.color = object['color'];
                view.stroke = object['stroke'];
                view.tooltip = object['tooltip'];
            }

            //폴더일 경우
            if (object['type'] == me.Constants.TYPE.FOLDER) {
                y = firstChild ? parentView.y : lastViewBottom + (me._CONFIG.SHAPE_SIZE.FOLDER_HEIGHT / 2);
                bottom = y + (me._CONFIG.SHAPE_SIZE.FOLDER_HEIGHT / 2) + me._CONFIG.SHAPE_SIZE.FOLDER_MARGIN;
                view.y = y;
                view.width = me._CONFIG.SHAPE_SIZE.FOLDER_WIDTH;
                view.height = me._CONFIG.SHAPE_SIZE.FOLDER_HEIGHT;
                view.bottom = bottom;
                view.root = root;
                view.position = object['position'];
                view.id = object['id'];
                view.expand = object['expand'];
                view.type = object['type'];
                view.name = object['name'];
                view.color = object['color'];
                view.stroke = object['stroke'];
                view.tooltip = object['tooltip'];
            }

            //ed 일 경우
            if (object['type'] == me.Constants.TYPE.ED) {
                y = firstChild ? parentView.y : lastViewBottom + (me._CONFIG.SHAPE_SIZE.ED_HEIGHT / 2);
                bottom = y + (me._CONFIG.SHAPE_SIZE.ED_HEIGHT / 2) + me._CONFIG.SHAPE_SIZE.ED_MARGIN;
                view.y = y;
                view.width = me._CONFIG.SHAPE_SIZE.ED_WIDTH;
                view.height = me._CONFIG.SHAPE_SIZE.ED_HEIGHT;
                view.bottom = bottom;
                view.root = root;
                view.position = object['position'];
                view.id = object['id'];
                view.expand = object['expand'];
                view.type = object['type'];
                view.name = object['name'];
                view.color = object['color'];
                view.stroke = object['stroke'];
                view.tooltip = object['tooltip'];
            }

            //자식이 있을 경우 hasChild true
            if (child.length) {
                view.hasChild = true;
            }

            //자식이 있을 경우 expanderView 를 등록한다.
            if (child.length) {
                var expanderPosition = view.position;
                if (expanderPosition == me.Constants.POSITION.MY) {
                    expanderPosition = me.Constants.POSITION.MY_IN
                }
                if (expanderPosition == me.Constants.POSITION.OTHER) {
                    expanderPosition = me.Constants.POSITION.OTHER_OUT
                }
                expanderView = {
                    id: view.id + me.Constants.PREFIX.EXPANDER,
                    y: view.y,
                    width: me._CONFIG.SHAPE_SIZE.EXPANDER_WIDTH,
                    height: me._CONFIG.SHAPE_SIZE.EXPANDER_HEIGHT,
                    bottom: view.y + (me._CONFIG.SHAPE_SIZE.EXPANDER_HEIGHT / 2),
                    root: view.root,
                    position: expanderPosition,
                    type: me.Constants.TYPE.EXPANDER,
                    depth: view.depth,
                    data: view.data,
                    index: view.index,
                    name: view.name
                }
            }
            //자식이 있을 경우 expanderFrom(자신으로부터 expander 까지 연결선) 를 등록한다.
            if (child.length) {
                var exFromPosition = view.position;
                if (exFromPosition == me.Constants.POSITION.MY) {
                    exFromPosition = me.Constants.POSITION.MY_IN
                }
                if (exFromPosition == me.Constants.POSITION.OTHER) {
                    exFromPosition = me.Constants.POSITION.OTHER_OUT
                }
                expanderFromView = {
                    id: view.id + me.Constants.PREFIX.EXPANDER_FROM,
                    y: view.y,
                    bottom: view.y,
                    root: view.root,
                    position: exFromPosition,
                    type: me.Constants.TYPE.EXPANDER_FROM,
                    depth: view.depth,
                    data: view.data,
                    index: view.index,
                    transparent: true,
                    parentY: view.y,
                    name: view.name
                };
            }
            //부모가 있을 경우 expanderTo(부모 expander 로부터 자신 까지 연결선) 를 등록한다.
            if (parentView) {
                var exToPosition = view.position;
                if (exToPosition == me.Constants.POSITION.MY) {
                    exToPosition = me.Constants.POSITION.MY_IN
                }
                if (exToPosition == me.Constants.POSITION.OTHER) {
                    exToPosition = me.Constants.POSITION.OTHER_OUT
                }
                expanderToView = {
                    id: view.id + me.Constants.PREFIX.EXPANDER_TO,
                    parentId: parentView.id,
                    y: view.y,
                    bottom: view.y,
                    root: view.root,
                    position: exToPosition,
                    type: me.Constants.TYPE.EXPANDER_TO,
                    depth: view.depth,
                    data: view.data,
                    index: view.index,
                    transparent: true,
                    parentY: parentView.y,
                    name: view.name
                };
            }

            //depthMap 에 등록한다.
            if (!depthMap[view.position]) {
                depthMap[view.position] = {}
            }
            if (!depthMap[view.position][view.depth]) {
                depthMap[view.position][view.depth] = []
            }
            depthMap[view.position][view.depth].push(view);

            //자신과 같은 포지션 중 depth 가 같은 리스트를 불러온다.
            //불러온 리스트중 자신보다 앞선 객체가 있다면, 객체의 bottom 기준으로 가상의 view 를 생성해본다.
            //가성의 view 의 bottom 이 실제 view bottom 보다 클 경우 가상의 view 의 y 와 bottom 으로 교체한다.
            var depthList = depthMap[view.position][view.depth];
            if (depthList.length > 1) {
                var vy, vBottom;
                var prevDepthView = depthList[depthList.length - 2];
                //액티비티일 경우
                if (object['type'] == me.Constants.TYPE.ACTIVITY) {
                    vy = prevDepthView.bottom + (me._CONFIG.SHAPE_SIZE.ACTIVITY_HEIGHT / 2);
                    vBottom = vy + (me._CONFIG.SHAPE_SIZE.ACTIVITY_HEIGHT / 2) + me._CONFIG.SHAPE_SIZE.ACTIVITY_MARGIN;
                }

                //폴더일 경우
                if (object['type'] == me.Constants.TYPE.FOLDER) {
                    vy = prevDepthView.bottom + (me._CONFIG.SHAPE_SIZE.FOLDER_HEIGHT / 2);
                    vBottom = vy + (me._CONFIG.SHAPE_SIZE.FOLDER_HEIGHT / 2) + me._CONFIG.SHAPE_SIZE.FOLDER_MARGIN;
                }

                //ed 일 경우
                if (object['type'] == me.Constants.TYPE.ED) {
                    vy = prevDepthView.bottom + (me._CONFIG.SHAPE_SIZE.ED_HEIGHT / 2);
                    vBottom = vy + (me._CONFIG.SHAPE_SIZE.ED_HEIGHT / 2) + me._CONFIG.SHAPE_SIZE.ED_MARGIN;
                }

                //가상 view 의 높이 비교 후 교체.
                if (vy && vBottom && vBottom > view.bottom) {
                    view.y = vy;
                    view.bottom = vBottom;
                    if (expanderView) {
                        expanderView.y = vy;
                        expanderView.bottom = vy + (me._CONFIG.SHAPE_SIZE.EXPANDER_HEIGHT / 2);
                    }
                    if (expanderFromView) {
                        expanderFromView.y = vy;
                        expanderFromView.parentY = vy;
                    }
                    if (expanderToView) {
                        expanderToView.y = vy;
                    }
                }
            }

            //자신의 bottom 을 lastViewBottom 에 등록한다.
            if (view.bottom) {
                lastViewBottom = view.bottom;
            }

            //뷰 데이터에 등록
            viewData.views.push(view);
            if (expanderView) {
                viewData.views.push(expanderView);
            }
            if (expanderFromView) {
                viewData.views.push(expanderFromView);
            }
            if (expanderToView) {
                viewData.views.push(expanderToView);
            }

            //expand 상태라면 자식의 수만큼 루프
            if (child.length && object.expand) {
                for (var c = 0, lenc = child.length; c < lenc; c++) {
                    //c_locked_by_id 항목이 있거나, 부모중에 c_locked_by_id 가 있다면 하위 객체들은 lock 을 상속받는다.
                    if (object.position == me.Constants.POSITION.MY || object.position == me.Constants.POSITION.MY_OUT) {
                        if ((object.extData && object.extData['c_locked_by_id'] && object.extData['c_locked_by_id'].length > 0)
                            || (object.extData && object.extData['locked_by_parent'])) {
                            child[c].extData['locked_by_parent'] = true;
                        } else {
                            child[c].extData['locked_by_parent'] = false;
                        }
                    }

                    //parentView 로 보내는 것이 실제 부모가 보내지는 것이 아니라 next 순서로 보내진다.
                    getViewData(child[c], depth + 1, view, child);
                }
            }
        };

        //1. 아더 액비티비 기준 시작
        lastViewBottom = me._CONFIG.AREA.TOP_MARGIN;
        otherActivities = me.selectActivityByPosition(this.Constants.POSITION.OTHER);
        for (var i = 0, leni = otherActivities.length; i < leni; i++) {
            root = otherActivities[i]['id'];
            getViewData(otherActivities[i]);
        }
        //2. 마이 액티비티 기준 시작
        lastViewBottom = me._CONFIG.AREA.TOP_MARGIN;
        myActivities = me.selectActivityByPosition(this.Constants.POSITION.MY);
        for (var i = 0, leni = myActivities.length; i < leni; i++) {
            root = myActivities[i]['id'];
            getViewData(myActivities[i]);
        }

        me._VIEWDATA = viewData;
        return viewData;
    },

    /**
     * viewData 중에서 실제로 화면에 표현되야 할 객체를 선정하고 각 x 좌표를 책정한다.
     * 선정된 객체들을 화면에 드로잉한다.
     */
    renderViews: function () {
        var me = this, boundary, depth, type;
        var viewData = me._VIEWDATA;

        //뷰 데이터중 bottom 값이 가장 큰 view 를 찾아 캔버스의 높이를 조정한다. => maxBottom
        var maxBottom = me.selectMaxBottomFromViews(viewData.views);
        if (maxBottom > me._CONFIG.CONTAINER_HEIGHT) {
            //me.canvas.setCanvasSize([canvasSize[0], maxBottom]);
        } else {
            maxBottom = me._CONFIG.CONTAINER_HEIGHT;
        }

        //뷰 데이터의 totalHeight 를 maxBottom 으로 등록한다.
        viewData.totalHeight = maxBottom;


        var displayViews = viewData.views;

        //캔버스에 현재 존재하는 객체중 displayViews 에 속해있지 않다면 삭제하도록 한다.
        var allShapes = me.canvas.getAllShapes();
        for (var i = 0, leni = allShapes.length; i < leni; i++) {
            var existId = allShapes[i].id;
            var toRemove = true;

            if (allShapes[i].shape instanceof OG.Area) {
                toRemove = false;
            } else if (allShapes[i].shape instanceof OG.To) {
                toRemove = false;
            } else if (allShapes[i].shape instanceof OG.From) {
                toRemove = false;
            } else if (allShapes[i].shape instanceof OG.Transformer) {
                toRemove = false;
            } else if (allShapes[i].shape instanceof OG.shape.bpmn.M_Text) {
                toRemove = false;
            } else if (allShapes[i].shape.data && allShapes[i].shape.data.type == me.Constants.TYPE.MAPPING) {
                toRemove = false;
            } else {
                for (var c = 0, lenc = displayViews.length; c < lenc; c++) {
                    if (displayViews[c].id == existId) {
                        toRemove = false;
                        break;
                    }
                }
            }
            if (toRemove) {
                try {
                    me.canvas.removeShape(allShapes[i], true);
                } catch (e) {
                    //Nothing to do.
                }
            }
        }

        //reRangeAreaSize 를 통해 각 Area 의 영역을 책정한다.
        me.reRangeAreaSize(viewData);


        //추려낸 뷰 데이터 각각의 x 좌표를 Area 영역 기준으로 생성한다.
        var viewsByPosition = me.dividedViewsByPosition(displayViews);
        var otherViews = viewsByPosition[me.Constants.POSITION.OTHER];
        for (var i = 0, leni = otherViews.length; i < leni; i++) {
            otherViews[i].x = Math.round(me._CONFIG.AREA.ACTIVITY_SIZE / 2);
        }

        var otherOutViews = viewsByPosition[me.Constants.POSITION.OTHER_OUT];
        boundary = me._RENDERER.getBoundary(me.AREA.lOut);
        for (var i = 0, leni = otherOutViews.length; i < leni; i++) {
            type = otherOutViews[i].type;
            depth = otherOutViews[i].depth;
            if (type == me.Constants.TYPE.ACTIVITY || type == me.Constants.TYPE.FOLDER || type == me.Constants.TYPE.ED) {
                otherOutViews[i].x = me.getShapeCenterX(me.Constants.POSITION.OTHER_OUT, depth, boundary.getLeftCenter().x);
            }
            else if (type == me.Constants.TYPE.EXPANDER) {
                otherOutViews[i].x = me.getExpanderCenterX(me.Constants.POSITION.OTHER_OUT, depth, boundary.getLeftCenter().x);
            }
            else if (type == me.Constants.TYPE.EXPANDER_FROM) {
                otherOutViews[i].vertieces = me.getExpanderFromVertices(
                    me.Constants.POSITION.OTHER_OUT, depth, boundary.getLeftCenter().x, otherOutViews[i].parentY, otherOutViews[i].y);
            }
            else if (type == me.Constants.TYPE.EXPANDER_TO) {
                otherOutViews[i].vertieces = me.getExpanderToVertices(
                    me.Constants.POSITION.OTHER_OUT, depth, boundary.getLeftCenter().x, otherOutViews[i].parentY, otherOutViews[i].y);
            }
        }

        var myInViews = viewsByPosition[me.Constants.POSITION.MY_IN];
        boundary = me._RENDERER.getBoundary(me.AREA.rIn);
        for (var i = 0, leni = myInViews.length; i < leni; i++) {
            type = myInViews[i].type;
            depth = myInViews[i].depth;

            if (type == me.Constants.TYPE.ACTIVITY || type == me.Constants.TYPE.FOLDER || type == me.Constants.TYPE.ED) {
                myInViews[i].x = me.getShapeCenterX(me.Constants.POSITION.MY_IN, depth, boundary.getRightCenter().x);
            }
            else if (type == me.Constants.TYPE.EXPANDER) {
                myInViews[i].x = me.getExpanderCenterX(me.Constants.POSITION.MY_IN, depth, boundary.getRightCenter().x);
            }
            else if (type == me.Constants.TYPE.EXPANDER_FROM) {
                myInViews[i].vertieces = me.getExpanderFromVertices(
                    me.Constants.POSITION.MY_IN, depth, boundary.getRightCenter().x, myInViews[i].parentY, myInViews[i].y);
            }
            else if (type == me.Constants.TYPE.EXPANDER_TO) {
                myInViews[i].vertieces = me.getExpanderToVertices(
                    me.Constants.POSITION.MY_IN, depth, boundary.getRightCenter().x, myInViews[i].parentY, myInViews[i].y);
            }
        }

        var myViews = viewsByPosition[me.Constants.POSITION.MY];
        boundary = me._RENDERER.getBoundary(me.AREA.rAc);
        for (var i = 0, leni = myViews.length; i < leni; i++) {
            myViews[i].x = Math.round(boundary.getLeftCenter().x + (me._CONFIG.AREA.ACTIVITY_SIZE / 2));
        }

        var myOutViews = viewsByPosition[me.Constants.POSITION.MY_OUT];
        boundary = me._RENDERER.getBoundary(me.AREA.rOut);
        for (var i = 0, leni = myOutViews.length; i < leni; i++) {
            type = myOutViews[i].type;
            depth = myOutViews[i].depth;
            if (type == me.Constants.TYPE.ACTIVITY || type == me.Constants.TYPE.FOLDER || type == me.Constants.TYPE.ED) {
                myOutViews[i].x = me.getShapeCenterX(me.Constants.POSITION.MY_OUT, depth, boundary.getLeftCenter().x);
            }
            else if (type == me.Constants.TYPE.EXPANDER) {
                myOutViews[i].x = me.getExpanderCenterX(me.Constants.POSITION.MY_OUT, depth, boundary.getLeftCenter().x);
            }
            else if (type == me.Constants.TYPE.EXPANDER_FROM) {
                myOutViews[i].vertieces = me.getExpanderFromVertices(
                    me.Constants.POSITION.MY_OUT, depth, boundary.getLeftCenter().x, myOutViews[i].parentY, myOutViews[i].y);
            }
            else if (type == me.Constants.TYPE.EXPANDER_TO) {
                myOutViews[i].vertieces = me.getExpanderToVertices(
                    me.Constants.POSITION.MY_OUT, depth, boundary.getLeftCenter().x, myOutViews[i].parentY, myOutViews[i].y);
            }
        }

        var position, root, id, element, envelope, currentX, currentY, currentEndX, currentEndY,
            moveX, moveY, vertieces, currentVertieces, label;

        //화면에 뷰데이터를 그린다.
        for (var i = 0, leni = displayViews.length; i < leni; i++) {
            //파일구조를 드로잉한다.
            type = displayViews[i].type;
            position = displayViews[i].position;
            id = displayViews[i].id;
            root = displayViews[i].root;
            depth = displayViews[i].depth;
            element = me.canvas.getElementById(id);
            if (element) {
                //선 연결 도형이 아닌경우 도형을 이동시킨다.
                if (type != me.Constants.TYPE.EXPANDER_FROM &&
                    type != me.Constants.TYPE.EXPANDER_TO &&
                    type != me.Constants.TYPE.MAPPING_EDGE &&
                    type != me.Constants.TYPE.ACTIVITY_REL) {
                    envelope = me._RENDERER.getBoundary(element);
                    currentX = envelope.getCentroid().x;
                    currentY = envelope.getCentroid().y;
                    if (currentX != displayViews[i].x || currentY != displayViews[i].y) {
                        moveX = displayViews[i].x - envelope.getCentroid().x;
                        moveY = displayViews[i].y - envelope.getCentroid().y;

                        element.shape.geom.move(moveX, moveY);
                        me._RENDERER.redrawShape(element);
                    }
                }
                //선 연결 도형일 경우 vertices 의 0번째 요소와 마지막 요소를 비교후, x,y 의 차이만큼 이동시킨다.
                else {
                    currentVertieces = element.shape.geom.getVertices();
                    currentX = currentVertieces[0].x;
                    currentY = currentVertieces[0].y;
                    currentEndX = currentVertieces[currentVertieces.length - 1].x;
                    currentEndY = currentVertieces[currentVertieces.length - 1].y;
                    vertieces = displayViews[i].vertieces;
                    if (currentX != vertieces[0][0] || currentY != vertieces[0][1] ||
                        currentEndX != vertieces[vertieces.length - 1][0] ||
                        currentEndY != vertieces[vertieces.length - 1][1]) {
                        if (me.Constants.TYPE.MAPPING_EDGE == type) {
                            if (me._CONFIG.DEFAULT_STYLE.MAPPING_EDGE == 'bezier') {
                                me._RENDERER.drawEdge(new OG.BezierCurve(vertieces), element.shape.geom.style, element.id);
                            } else {
                                element.shape.geom.vertices = vertieces;
                                me._RENDERER.drawEdge(element.shape.geom, element.shape.geom.style, element.id);
                            }
                        } else {
                            if (me._CONFIG.DEFAULT_STYLE.EDGE == 'bezier') {
                                me._RENDERER.drawEdge(new OG.BezierCurve(vertieces), element.shape.geom.style, element.id);
                            } else {
                                element.shape.geom.vertices = vertieces;
                                me._RENDERER.drawEdge(element.shape.geom, element.shape.geom.style, element.id);
                            }
                        }
                    }
                }

                if (type == me.Constants.TYPE.EXPANDER) {
                    me.updateExpander(displayViews[i], element);
                } else if (type == me.Constants.TYPE.ACTIVITY) {
                    me.updateActivity(displayViews[i], element);
                } else if (type == me.Constants.TYPE.FOLDER) {
                    me.updateFolder(displayViews[i], element);
                } else if (type == me.Constants.TYPE.ED) {
                    me.updateEd(displayViews[i], element);
                }

            } else {
                //새로 도형을 그린다.
                if (type == me.Constants.TYPE.ACTIVITY) {
                    me.drawActivity(displayViews[i]);
                } else if (type == me.Constants.TYPE.FOLDER) {
                    me.drawFolder(displayViews[i]);
                } else if (type == me.Constants.TYPE.ED) {
                    me.drawEd(displayViews[i]);
                } else if (type == me.Constants.TYPE.EXPANDER) {
                    me.drawExpander(displayViews[i]);
                } else if (type == me.Constants.TYPE.EXPANDER_FROM) {
                    me.drawExpanderLine(displayViews[i]);
                } else if (type == me.Constants.TYPE.EXPANDER_TO) {
                    me.drawExpanderLine(displayViews[i]);
                }
            }
        }

        //매핑 엘리먼트를 그린다.
        var transformers = me.loadByFilter({type: me.Constants.TYPE.TRANSFORMER});
        $.each(transformers, function (i, transformerData) {
            if (!me.canvas.getElementById(transformerData.id)) {
                var drawData = me.getTransformerDrawDataByClassName(transformerData.className);
                var transformer = me.drawTransformer([transformerData.x, transformerData.y],
                    drawData.label, drawData.inputs, drawData.outputs, drawData, transformerData.id);
                if (transformer) {
                    transformer.shape.data = JSON.parse(JSON.stringify(transformerData));
                }
            }
        })

        //매핑 라인을 그린다.
        var mappings = me.loadByFilter({type: me.Constants.TYPE.MAPPING});
        $.each(mappings, function (i, mappingData) {
            me.drawMappingLine(mappingData);
        })
    },
    getTransformerDrawDataByClassName: function (className) {
        var data;
        var drawDatas = this.transformerDrawData();
        $.each(drawDatas, function (index, drawData) {
            if (drawData.className == className) {
                data = drawData;
            }
        });
        return data;
    },
    transformerDrawData: function () {
        return [
            {
                group: 'Math',
                label: 'Max',
                className: 'org.uengine.processdesigner.mapper.transformers.MaxTransformer',
                inputs: ['in1', 'in2'],
                outputs: ['out']
            },
            {
                group: 'Math',
                label: 'Min',
                className: 'org.uengine.processdesigner.mapper.transformers.MinTransformer',
                inputs: ['in1', 'in2'],
                outputs: ['out']
            },
            {
                group: 'Math',
                label: 'To Number',
                className: 'org.uengine.processdesigner.mapper.transformers.NumberTransformer',
                inputs: ['in1'],
                outputs: ['out']
            },
            {
                group: 'Math',
                label: 'Sum',
                className: 'org.uengine.processdesigner.mapper.transformers.SumTransformer',
                inputs: ['in1', 'in2', 'in3', 'in4', 'in5'],
                outputs: ['out']
            },
            {
                group: 'Math',
                label: 'Floor',
                className: 'org.uengine.processdesigner.mapper.transformers.FloorTransformer',
                inputs: ['in1'],
                outputs: ['out']
            },
            {
                group: 'Math',
                label: 'Round',
                className: 'org.uengine.processdesigner.mapper.transformers.RoundTransformer',
                inputs: ['in1'],
                outputs: ['out']
            },
            {
                group: 'Math',
                label: 'Ceil',
                className: 'org.uengine.processdesigner.mapper.transformers.CeilTransformer',
                inputs: ['in1'],
                outputs: ['out']
            },
            {
                group: 'Math',
                label: 'Abs',
                className: 'org.uengine.processdesigner.mapper.transformers.AbsTransformer',
                inputs: ['in1'],
                outputs: ['out']
            },
            {
                group: 'String',
                label: 'Concat',
                className: 'org.uengine.processdesigner.mapper.transformers.ConcatTransformer',
                inputs: ['in1', 'in2', 'in3', 'in4', 'in5'],
                outputs: ['out']
            },
            {
                group: 'String',
                label: 'Replace',
                className: 'org.uengine.processdesigner.mapper.transformers.ReplaceTransformer',
                inputs: ['in1'],
                outputs: ['out']
            },
            {
                group: 'String',
                label: 'NumberFormat',
                className: 'org.uengine.processdesigner.mapper.transformers.NumberFormatTransformer',
                inputs: ['in1', 'in2'],
                outputs: ['out']
            }
        ];
    },
    /**
     * 매핑 연결선을 드로잉한다.
     * @param mappingData data
     */
    drawMappingLine: function (mappingData) {
        var me = this;
        if (!mappingData) {
            return;
        }

        var fromShape, toShape;
        var startXY;
        var endXY;

        //매핑 데이터로부터 연결된 shape 정보를 가져온다.(트랜스포머 || 트리노드)
        //트리노드일 경우 연결된 shape 이 숨김상태라면 부모의 shape 을 가져온다.
        var getShapeFromMappingData = function (data, fromTo) {
            var shape, nodeView;
            var closetOpenedTreeNodeView = function (id) {
                var parents = me.selectRecursiveParentById(id);
                if (!parents) {
                    parents = [];
                }
                var list = [me.selectById(id)];
                list = list.concat(parents);
                var view;
                for (var i = 0; i < list.length; i++) {
                    view = me.selectViewById(me._VIEWDATA, list[i].id);
                    if (view) {
                        break;
                    }
                }
                return view;
            }
            var id = fromTo == 'from' ? data.source : data.target;
            var type = fromTo == 'from' ? data.sourceType : data.targetType;
            if (type == 'transformer') {
                shape = me.canvas.getElementById(id);
            } else {
                nodeView = closetOpenedTreeNodeView(id);
                if (nodeView) {
                    //자식이 있을 경우 expander 로 정한다.
                    if (nodeView.hasChild) {
                        shape = me.canvas.getElementById(nodeView.id + me.Constants.PREFIX.EXPANDER);
                    } else {
                        shape = me.canvas.getElementById(nodeView.id);
                    }
                }
            }
            return shape;
        }

        fromShape = getShapeFromMappingData(mappingData, 'from');
        toShape = getShapeFromMappingData(mappingData, 'to');

        //연결선의 vertieces 를 설정한다.
        if (fromShape && toShape) {
            var plusX = 0;
            if (fromShape.shape instanceof OG.DIDS) {
                plusX = me._CONFIG.SHAPE_SIZE.ED_WIDTH / 2;
            } else if (fromShape.shape instanceof OG.Expander) {
                plusX = me._CONFIG.SHAPE_SIZE.EXPANDER_WIDTH / 2;
            } else {
                plusX = 5;
            }
            startXY = [
                me.canvas.getBoundary(fromShape).getCentroid().x + plusX,
                me.canvas.getBoundary(fromShape).getCentroid().y
            ];


            plusX = 0;
            if (toShape.shape instanceof OG.DIDS) {
                plusX = (me._CONFIG.SHAPE_SIZE.ED_WIDTH / 2) * -1;
            } else if (toShape.shape instanceof OG.Expander) {
                plusX = (me._CONFIG.SHAPE_SIZE.EXPANDER_WIDTH / 2) * -1;
            } else {
                plusX = -5;
            }
            endXY = [
                me.canvas.getBoundary(toShape).getCentroid().x + plusX,
                me.canvas.getBoundary(toShape).getCentroid().y
            ]

            var vertieces = [startXY,
                [(startXY[0] + endXY[0]) / 2, startXY[1]],
                [(startXY[0] + endXY[0]) / 2, endXY[1]],
                endXY];
            var edgeShape = new OG.EdgeShape([0, 0], [0, 0]);
            if (me._CONFIG.DEFAULT_STYLE.MAPPING_EDGE == "bezier") {
                edgeShape.geom = new OG.BezierCurve(vertieces);
            } else {
                edgeShape.geom = new OG.PolyLine(vertieces);
            }

            var element = me.canvas.drawShape(null, edgeShape, null, null, mappingData.id);
            element.shape.SELECTABLE = true;
            element.shape.CONNECTABLE = false;
            element.shape.DELETABLE = true;
            element.shape.data = JSON.parse(JSON.stringify(mappingData));
            me.canvas.setShapeStyle(element, {
                "arrow-end": "none",
                "stroke-dasharray": "-",
                "opacity": "0.3"
            });
        }
    },
    /**
     * Transfomer Shape 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
     *
     * @example
     * canvas.drawTransformer([100, 100], 'label' ['str1','str2'],['out']);
     *
     * @param {Number[]} position 드로잉할 위치 좌표(중앙 기준)
     * @param {String} label Label
     * @param {String[]} inputs 인풋에 위치할 리스트
     * @param {String[]} outputs 아웃풋에 위치할 리스트
     * @param {String} id Element ID 지정 (Optional)
     * @return {Element} Group DOM Element with geometry
     */
    drawTransformer: function (position, label, inputs, outputs, drawData, id) {
        var me = this, shape, element, style, envelope, i, toShape, fromShape, toElement, fromElement, textShape, textElement;

        shape = new OG.shape.Transformer(label);
        var existTransformerData = me.selectById(id);
        if (!existTransformerData) {
            existTransformerData = {
                "type": me.Constants.TYPE.TRANSFORMER,
                "id": id,
                "x": position[0],
                "y": position[1],
                "className": drawData.className,
                "position": me.Constants.POSITION.OTHER_MY
            };
            me.updateData([existTransformerData], true);
            shape.data = JSON.parse(JSON.stringify(existTransformerData));
        }

        if (!Array.isArray(inputs) || !Array.isArray(outputs)) {
            return null;
        }
        var lines = Math.max(inputs.length, outputs.length);
        element = me.canvas.drawShape(position, shape, [120, 30 + (lines * 25)], style, id);
        envelope = element.shape.geom.getBoundary();

        $.each(inputs, function (idx, input) {
            textShape = new OG.shape.bpmn.M_Text(input);
            textShape.MOVABLE = false;
            textShape.SELECTABLE = false;
            textShape.CONNECTABLE = false;
            textShape.DELETABLE = false;
            textElement = me.canvas.drawShape([envelope.getUpperLeft().x + 35, envelope.getUpperLeft().y + (idx * 25) + 40], textShape, [50, 20]);
            element.appendChild(textElement);
            toShape = new OG.shape.To();
            toElement = me.canvas.drawShape([envelope.getUpperLeft().x + 15, envelope.getUpperLeft().y + (idx * 25) + 40], toShape, [5, 5], {"r": 5}, element.id + input);
            element.appendChild(toElement);
            var data = JSON.parse(JSON.stringify(drawData));
            data['type'] = 'input';
            data['name'] = input;
            data['parentId'] = element.id;
            me.canvas.setCustomData(toElement, data);
        });

        $.each(outputs, function (idx, output) {
            textShape = new OG.shape.bpmn.M_Text(output);
            textShape.MOVABLE = false;
            textShape.SELECTABLE = false;
            textShape.CONNECTABLE = false;
            textShape.DELETABLE = false;
            textElement = me.canvas.drawShape([envelope.getUpperRight().x - 35, envelope.getUpperRight().y + (idx * 25) + 40], textShape, [50, 20]);
            element.appendChild(textElement);
            fromShape = new OG.shape.From();
            fromElement = me.canvas.drawShape([envelope.getUpperRight().x - 15, envelope.getUpperRight().y + (idx * 25) + 40], fromShape, [5, 5], {"r": 5}, element.id + output);
            element.appendChild(fromElement);
            var data = JSON.parse(JSON.stringify(drawData));
            data['type'] = 'output';
            data['name'] = output;
            data['parentId'] = element.id;
            me.canvas.setCustomData(fromElement, data);
        });

        return element;
    },
    /**
     * 주어진 라벨이 최대 표기 숫자를 넘길 경우 텍스트를 줄인다.
     * @param label 라벨
     * @returns {String} fixed label
     */
    labelSubstring: function (label) {
        var str = '';
        var tempStr = label;
        var length = this._CONFIG.LABEL_MAX_LENGTH;
        for (var i = 0; i < 3; i++) {
            if (tempStr) {
                if (i > 0) {
                    str += '\n';
                }
                if (tempStr.length > length) {
                    str += tempStr.substring(0, length);
                    tempStr = tempStr.substring(length, tempStr.length);
                } else {
                    str += tempStr;
                    tempStr = undefined;
                }
                if (i == 2) {
                    str += '..';
                }
            }
        }
        return str;
    },

    /**
     * 액티비티 아이템을 업데이트 한다.
     * @param view OG-Tree view data
     * @param element OG-Tree Dom Element
     */
    updateActivity: function (view, element) {
        var customData = element.shape.data;
        var needUpdate = false;
        if (customData.name != view.name) {
            element.shape.label = view.name;
            needUpdate = true;
        }
        if (needUpdate) {
            element.shape.data = JSON.parse(JSON.stringify(view));
            this._RENDERER.redrawShape(element);
        }
    },
    /**
     * 액티비티 아이템을 드로잉한다.
     * @param view OG-Tree view data
     */
    drawActivity: function (view) {
        var me = this;
        var shape = new OG.Activity(me._CONFIG.SHOW_LABEL ? me.labelSubstring(view.name) : undefined);
        shape.data = JSON.parse(JSON.stringify(view));

        var element = me.canvas.drawShape([view.x, view.y], shape, [view.width, view.height],
            {
                'font-size': me._CONFIG.DEFAULT_STYLE.FONT_SIZE,
                'vertical-align': 'top'
            }, view.id);
        me.bindTooltip(element);
    },
    /**
     * 폴더 아이템을 업데이트한다.
     * @param view OG-Tree view data
     * @param element OG-Tree Dom Element
     */
    updateFolder: function (view, element) {
        var customData = element.shape.data;
        var needUpdate = false;
        if (customData.name != view.name) {
            element.shape.label = view.name;
            needUpdate = true;
        }
        if (needUpdate) {
            element.shape.data = JSON.parse(JSON.stringify(view));
            this._RENDERER.redrawShape(element);
        }
    },
    /**
     * 폴더 아이템을 드로잉한다.
     * @param view OG-Tree view data
     */
    drawFolder: function (view) {
        var me = this;
        var shape = new OG.Folder(me._CONFIG.SHOW_LABEL ? me.labelSubstring(view.name) : undefined);
        shape.data = JSON.parse(JSON.stringify(view));
        var element = me.canvas.drawShape([view.x, view.y], shape, [view.width, view.height],
            {
                'font-size': me._CONFIG.DEFAULT_STYLE.FONT_SIZE,
                'vertical-align': 'top',
                'opacity': view.blur ? me._CONFIG.DEFAULT_STYLE.BLUR : '1'
            },
            view.id);
        me.bindTooltip(element);
    },
    /**
     * ED 아이템을 업데이트 한다.
     * @param view OG-Tree view data
     * @param element OG-Tree Dom Element
     */
    updateEd: function (view, element) {
        var customData = element.shape.data;
        var needUpdate = false;
        if (customData.name != view.name) {
            element.shape.label = view.name;
            needUpdate = true;
        }
        if (needUpdate) {
            element.shape.data = JSON.parse(JSON.stringify(view));
            this._RENDERER.redrawShape(element);
        }
    },
    /**
     * ED 아이템을 드로잉한다.
     * @param view OG-Tree view data
     */
    drawEd: function (view) {
        var me = this;
        var shape = new OG.Ed(me._CONFIG.SHOW_LABEL ? me.labelSubstring(view.name) : undefined);
        shape.data = JSON.parse(JSON.stringify(view));

        var element = me.canvas.drawShape([view.x, view.y], shape, [view.width, view.height],
            {
                'font-size': me._CONFIG.DEFAULT_STYLE.FONT_SIZE,
                'vertical-align': 'top',
                'opacity': view.blur ? me._CONFIG.DEFAULT_STYLE.BLUR : '1'
            }, view.id);
        me.bindTooltip(element);
    },
    /**
     * expander 선연결을 생성한다.
     * @param view OG-Tree view data
     */
    drawExpanderLine: function (view) {
        if (view.vertieces) {
            var me = this;
            var edgeShape = new OG.EdgeShape([0, 0], [0, 0]);
            if (me._CONFIG.DEFAULT_STYLE.EDGE == "bezier") {
                edgeShape.geom = new OG.BezierCurve(view.vertieces);
            } else {
                edgeShape.geom = new OG.PolyLine(view.vertieces);
            }
            var element = me.canvas.drawShape(null, edgeShape, null, null, view.id);
            me.canvas.setCustomData(element, JSON.parse(JSON.stringify(view)));
            element.shape.CONNECTABLE = false;
            element.shape.DELETABLE = false;

            me.canvas.setShapeStyle(element, {"arrow-end": "none"});
            if (view.blur) {
                me.canvas.setShapeStyle(element, {"stroke-dasharray": "-"});
            }
        }
    },

    /**
     * expander 를 업데이트한다.
     * @param view OG-Tree view data
     * @param element OG-Tree Dom Element
     */
    updateExpander: function (view, element) {
        if (element.shape.data.data.expand != view.data.expand) {
            element.shape.data = JSON.parse(JSON.stringify(view));
            this._RENDERER.redrawShape(element);
        }
    },
    /**
     * expander 를 드로잉한다.
     * @param view OG-Tree view data
     */
    drawExpander: function (view) {
        var me = this;
        var shape = new OG.Expander();
        shape.data = JSON.parse(JSON.stringify(view));
        var element = me.canvas.drawShape([view.x, view.y], shape, [view.width, view.height], {
            cursor: "pointer",
            fill: "#fff",
            'fill-opacity': 1
        }, view.id);

        $(element).click(function () {
            var data = me.selectById(view.data.id);
            if (!data.expand) {
                data.expand = true;
            } else {
                data.expand = false;
            }
            me.updateData([data]);
        });
    },
    /**
     * expander 의 센터를 구한다.
     * @param position Area position
     * @param depth 아이템 depth
     * @param standardX Area X 좌표
     * @returns {Number} center X 좌표
     */
    getExpanderCenterX: function (position, depth, standardX) {
        var me = this;
        var centerX = me.getShapeCenterX(position, depth, standardX);
        var distance = 0;
        if (depth == 0) {
            centerX = standardX;
        } else {
            distance = (me._CONFIG.SHAPE_SIZE.COL_SIZE / 2) + me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN;
            if (position == me.Constants.POSITION.MY_OUT || position == me.Constants.POSITION.OTHER_OUT) {
                centerX = centerX + distance;
            } else {
                centerX = centerX - distance;
            }
        }
        return Math.round(centerX);
    },
    /**
     * 액티비티, 폴더, Ed 의 센터를 구한다.
     * @param position Area position
     * @param depth 아이템 depth
     * @param standardX Area X 좌표
     * @returns {Number} center X 좌표
     */
    getShapeCenterX: function (position, depth, standardX) {
        var me = this;
        var distance = 0;
        var centerX = 0;
        if (depth == 0) {
            distance = (me._CONFIG.AREA.ACTIVITY_SIZE / 2) * -1;
        } else {
            distance = depth * (me._CONFIG.SHAPE_SIZE.COL_SIZE + me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN + me._CONFIG.SHAPE_SIZE.EXPANDER_TO_MARGIN) -
                me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN - (me._CONFIG.SHAPE_SIZE.COL_SIZE / 2);
        }
        if (position == me.Constants.POSITION.MY_OUT || position == me.Constants.POSITION.OTHER_OUT) {
            centerX = standardX + distance;
        } else {
            centerX = standardX - distance;
        }
        return Math.round(centerX);
    },
    /**
     * Expander To 선의 vertices 를 구한다.
     * @param position Area position
     * @param depth 아이템 depth
     * @param standardX Area X 좌표
     * @param parentY 부모 아이템의 Y 좌표
     * @param myY 자신의 Y 좌표
     * @returns {Array} vertices
     */
    getExpanderToVertices: function (position, depth, standardX, parentY, myY) {
        var me = this;
        var distance = 0;
        var vertieces = [];
        var start = [];
        var end = [];

        var startDistance = me._CONFIG.SHAPE_SIZE.EXPANDER_WIDTH / 2;
        var endDistance = (me._CONFIG.SHAPE_SIZE.FOLDER_WIDTH / 2) * -1;
        //부모의 익스팬더 센터 X
        var parentExCenterX = me.getExpanderCenterX(position, depth - 1, standardX);

        //나의 도형 센터
        var myCenter = me.getShapeCenterX(position, depth, standardX);

        if (position == me.Constants.POSITION.MY_OUT || position == me.Constants.POSITION.OTHER_OUT) {
            start = [parentExCenterX + startDistance, parentY];
            end = [myCenter + endDistance, myY];
        } else {
            start = [parentExCenterX - startDistance, parentY];
            end = [myCenter - endDistance, myY];
        }
        var verticeMargin = me._CONFIG.SHAPE_SIZE.EXPANDER_TO_VERTICE_MARGIN;
        if (start[0] > end[0]) {
            verticeMargin = -verticeMargin;
        }
        vertieces = [
            [Math.round(start[0]), Math.round(start[1])],
            [Math.round(start[0] + verticeMargin), Math.round(start[1])],
            [Math.round(start[0] + verticeMargin), Math.round(end[1])],
            [Math.round(end[0]), Math.round(end[1])]
        ];
        return vertieces;
    },
    /**
     * Expander From 선의 vertices 를 구한다.
     * @param position Area position
     * @param depth 아이템 depth
     * @param standardX Area X 좌표
     * @param parentY 부모 아이템의 Y 좌표
     * @param myY 자신의 Y 좌표
     * @returns {Array} vertices
     */
    getExpanderFromVertices: function (position, depth, standardX, parentY, myY) {
        if (parentY != myY) {
            //myY = parentY;
        }
        var me = this;
        var distance = 0;
        var vertieces = [];
        var start = [];
        var end = [];
        if (position == me.Constants.POSITION.MY_OUT || position == me.Constants.POSITION.OTHER_OUT) {
            if (depth == 0) {
                start = [standardX - ((me._CONFIG.AREA.ACTIVITY_SIZE - me._CONFIG.SHAPE_SIZE.ACTIVITY_WIDTH) / 2), parentY];
                end = [standardX - (me._CONFIG.SHAPE_SIZE.EXPANDER_WIDTH / 2), myY];
            } else {
                distance = depth * (me._CONFIG.SHAPE_SIZE.COL_SIZE + me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN + me._CONFIG.SHAPE_SIZE.EXPANDER_TO_MARGIN) -
                    me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN - (me._CONFIG.SHAPE_SIZE.COL_SIZE / 2);
                start = [standardX + distance + (me._CONFIG.SHAPE_SIZE.FOLDER_WIDTH / 2), parentY];
                end = [standardX + distance + ((me._CONFIG.SHAPE_SIZE.COL_SIZE / 2) + me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN - (me._CONFIG.SHAPE_SIZE.EXPANDER_WIDTH / 2)), myY];
            }
        } else {
            if (depth == 0) {
                start = [standardX + ((me._CONFIG.AREA.ACTIVITY_SIZE - me._CONFIG.SHAPE_SIZE.ACTIVITY_WIDTH) / 2), parentY];
                end = [standardX + (me._CONFIG.SHAPE_SIZE.EXPANDER_WIDTH / 2), myY];
            } else {
                distance = depth * (me._CONFIG.SHAPE_SIZE.COL_SIZE + me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN + me._CONFIG.SHAPE_SIZE.EXPANDER_TO_MARGIN) -
                    me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN - (me._CONFIG.SHAPE_SIZE.COL_SIZE / 2);
                start = [standardX - distance - (me._CONFIG.SHAPE_SIZE.FOLDER_WIDTH / 2), parentY];
                end = [standardX - distance - ((me._CONFIG.SHAPE_SIZE.COL_SIZE / 2) + me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN - (me._CONFIG.SHAPE_SIZE.EXPANDER_WIDTH / 2)), myY];
            }
        }
        vertieces = [
            [Math.round(start[0]), Math.round(start[1])],
            [Math.round((start[0] + end[0]) / 2), Math.round(start[1])],
            [Math.round((start[0] + end[0]) / 2), Math.round(end[1])],
            [Math.round(end[0]), Math.round(end[1])]
        ];
        return vertieces;
    },
    /**
     * 주어진 views 를 포지션별로 분류하여 리턴한다.
     * @param displayViews Array of OG-Tree view data
     * @returns {Object} HashMap of OG-Tree view data
     */
    dividedViewsByPosition: function (displayViews) {
        var me = this;
        var dividedViewsByPosition = {};
        dividedViewsByPosition[me.Constants.POSITION.MY] = [];
        dividedViewsByPosition[me.Constants.POSITION.MY_IN] = [];
        dividedViewsByPosition[me.Constants.POSITION.MY_OUT] = [];
        dividedViewsByPosition[me.Constants.POSITION.OTHER] = [];
        dividedViewsByPosition[me.Constants.POSITION.OTHER_OUT] = [];
        dividedViewsByPosition[me.Constants.POSITION.OTHER_MY] = [];

        for (var i = 0, leni = displayViews.length; i < leni; i++) {
            if (displayViews[i]['position']) {
                if (displayViews[i]['position'] == me.Constants.POSITION.MY) {
                    dividedViewsByPosition[me.Constants.POSITION.MY].push(displayViews[i]);
                }
                if (displayViews[i]['position'] == me.Constants.POSITION.MY_IN) {
                    dividedViewsByPosition[me.Constants.POSITION.MY_IN].push(displayViews[i]);
                }
                if (displayViews[i]['position'] == me.Constants.POSITION.MY_OUT) {
                    dividedViewsByPosition[me.Constants.POSITION.MY_OUT].push(displayViews[i]);
                }
                if (displayViews[i]['position'] == me.Constants.POSITION.OTHER) {
                    dividedViewsByPosition[me.Constants.POSITION.OTHER].push(displayViews[i]);
                }
                if (displayViews[i]['position'] == me.Constants.POSITION.OTHER_OUT) {
                    dividedViewsByPosition[me.Constants.POSITION.OTHER_OUT].push(displayViews[i]);
                }
                if (displayViews[i]['position'] == me.Constants.POSITION.OTHER_MY) {
                    dividedViewsByPosition[me.Constants.POSITION.OTHER_MY].push(displayViews[i]);
                }
            }
        }
        return dividedViewsByPosition;
    },
    /**
     * 각 Area 의 크기를 책정하고 redraw 한다.
     * 캔버스의 사이즈를 재조정한다.
     * @param viewData HashMap of OG-Tree view data
     */
    reRangeAreaSize: function (viewData) {
        //displayViews 중 각 영역의 최고 depth 를 바탕으로 Area 의 크기를 결정한다.
        // ==> 퍼포먼스를 위해 views 검색으로 바꾸도록 조정한다.
        var me = this;
        var boundary, upper, low, left, canvasWidth, width, height;
        var containerWidth = me._CONTAINER.width();

        //viewData 파라미터가 없으면 메모리의 viewData 를 참조한다.
        if (!viewData) {
            viewData = me._VIEWDATA;
        }

        var getAreaWidth = function (views) {
            var maxDepth = me.selectMaxDepthFromViews(views);
            return maxDepth *
                (me._CONFIG.SHAPE_SIZE.COL_SIZE + me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN + me._CONFIG.SHAPE_SIZE.EXPANDER_TO_MARGIN) -
                me._CONFIG.SHAPE_SIZE.EXPANDER_FROM_MARGIN + me._CONFIG.SHAPE_SIZE.EXPANDER_TO_MARGIN;
        };

        var viewsByPosition = me.dividedViewsByPosition(viewData['views']);
        var myInAreaWidth = getAreaWidth(viewsByPosition[me.Constants.POSITION.MY_IN]);
        var myOutAreaWidth = getAreaWidth(viewsByPosition[me.Constants.POSITION.MY_OUT]);
        var otherOutAreaWidth = getAreaWidth(viewsByPosition[me.Constants.POSITION.OTHER_OUT]);
        var totalHeight = viewData.totalHeight + me._CONFIG.AREA.BOTTOM_MARGIN;

        upper = 0;
        left = 0;
        width = me._CONFIG.AREA.lAc.display ? me._CONFIG.AREA.ACTIVITY_SIZE : 0;
        width = (me._CONFIG.AREA.lAc.min && width < me._CONFIG.AREA.lAc.min) ? me._CONFIG.AREA.lAc.min : width;
        height = totalHeight;
        me.fitToBoundary(me.AREA.lAc, width, height, left, upper);

        left = left + width;
        width = (containerWidth * me._CONFIG.AREA.LEFT_SIZE_RATE) - me._CONFIG.AREA.ACTIVITY_SIZE;
        width = (me._CONFIG.AREA.lOut.min && width < me._CONFIG.AREA.lOut.min) ? me._CONFIG.AREA.lOut.min : width;
        width = width < otherOutAreaWidth ? otherOutAreaWidth : width;
        width = me._CONFIG.AREA.lOut.display ? width : 0;
        me.fitToBoundary(me.AREA.lOut, width, height, left, upper);

        left = left + width;
        width = (containerWidth * me._CONFIG.AREA.LEFT_SIZE_RATE) - me._CONFIG.AREA.ACTIVITY_SIZE;
        width = (me._CONFIG.AREA.rIn.min && width < me._CONFIG.AREA.rIn.min) ? me._CONFIG.AREA.rIn.min : width;
        width = width < myInAreaWidth ? myInAreaWidth : width;
        width = me._CONFIG.AREA.rIn.display ? width : 0;
        me.fitToBoundary(me.AREA.rIn, width, height, left, upper);

        left = left + width;
        width = me._CONFIG.AREA.rAc.display ? me._CONFIG.AREA.ACTIVITY_SIZE : 0;
        width = (me._CONFIG.AREA.rAc.min && width < me._CONFIG.AREA.rAc.min) ? me._CONFIG.AREA.rAc.min : width;
        me.fitToBoundary(me.AREA.rAc, width, height, left, upper);

        left = left + width;
        width = containerWidth - ((containerWidth * me._CONFIG.AREA.LEFT_SIZE_RATE) * 2);
        width = (me._CONFIG.AREA.rOut.min && width < me._CONFIG.AREA.rOut.min) ? me._CONFIG.AREA.rOut.min : width;
        width = width < myOutAreaWidth ? myOutAreaWidth : width;
        width = me._CONFIG.AREA.rOut.display ? width : 0;
        me.fitToBoundary(me.AREA.rOut, width, height, left, upper);

        canvasWidth = left + width;

        //센터 프로퍼티를 가진 Area 를 기준으로 재정렬한다.
        var areaList = [
            {area: me.AREA.lAc, center: me._CONFIG.AREA.lAc.center},
            {area: me.AREA.lOut, center: me._CONFIG.AREA.lOut.center},
            {area: me.AREA.rIn, center: me._CONFIG.AREA.rIn.center},
            {area: me.AREA.rAc, center: me._CONFIG.AREA.rAc.center},
            {area: me.AREA.rOut, center: me._CONFIG.AREA.rOut.center}
        ];
        var centerArea = null;
        for (var i = 0, leni = areaList.length; i < leni; i++) {
            if (areaList[i].center) {
                centerArea = areaList[i];
            }
        }
        if (centerArea) {
            boundary = me._RENDERER.getBoundary(centerArea.area);
            var moveX = 0;
            var leftX;
            var centerX = boundary.getCentroid().x;
            if (centerX < containerWidth / 2) {
                moveX = Math.round(containerWidth / 2 - centerX);
                for (var c = 0, lenc = areaList.length; c < lenc; c++) {
                    boundary = me._RENDERER.getBoundary(areaList[c].area);
                    leftX = boundary.getLeftCenter().x + moveX;
                    me.fitToBoundary(areaList[c].area, boundary.getWidth(), boundary.getHeight(), leftX, boundary.getUpperLeft().y);
                }
                //캔버스 사이즈 조정
                canvasWidth = canvasWidth + moveX;
            }
        }

        //Fit 프로퍼티를 가진 Area 를 기준으로 재정렬한다.
        var fitList = [
            {area: me.AREA.lAc, fit: me._CONFIG.AREA.lAc.fit},
            {area: me.AREA.lOut, fit: me._CONFIG.AREA.lOut.fit},
            {area: me.AREA.rIn, fit: me._CONFIG.AREA.rIn.fit},
            {area: me.AREA.rAc, fit: me._CONFIG.AREA.rAc.fit},
            {area: me.AREA.rOut, fit: me._CONFIG.AREA.rOut.fit}
        ];
        for (var f = 0, lenf = fitList.length; f < lenf; f++) {
            var fBoundary = me._RENDERER.getBoundary(fitList[f].area);
            var fLeft = fBoundary.getLeftCenter().x;
            var fRight = fBoundary.getRightCenter().x;
            //좌측방향 여백채움일 경우
            if (fitList[f].fit == 'left') {
                me.fitToBoundary(fitList[f].area, fRight, fBoundary.getHeight(), 0, fBoundary.getUpperLeft().y);
                for (var g = 0; g < f; g++) {
                    me.fitToBoundary(fitList[g].area, 0, fBoundary.getHeight(), 0, 0);
                }
            }
            //우측방향 여백채움일 경우
            if (fitList[f].fit == 'right') {
                if (fRight < containerWidth) {
                    me.fitToBoundary(fitList[f].area, (containerWidth - fLeft - 20), fBoundary.getHeight(), fLeft, fBoundary.getUpperLeft().y);
                    canvasWidth = containerWidth - 20;

                    for (var g = f + 1; g < fitList.length; g++) {
                        me.fitToBoundary(fitList[g].area, 0, fBoundary.getHeight(), canvasWidth, fBoundary.getUpperLeft().y);
                    }
                }
            }
        }

        //캔버스의 사이즈를 재조정한다.
        me.canvas.setCanvasSize([canvasWidth * me.getScale(), totalHeight * me.getScale()]);
    }
    ,
    /**
     * 주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)
     *
     * @param element OG-Tree Dom Element
     * @param offset[upper,low,left,right]
     * @param width,height,left,top
     * @return {element} OG-Tree Dom Element
     */
    fitToBoundary: function (element, width, height, left, top) {
        var boundary = element.shape.geom.boundary,
            newUpper = boundary.getUpperCenter().y - top,
            newLower = (top + height) - boundary.getLowerCenter().y,
            newLeft = boundary.getLeftCenter().x - left,
            newRight = (left + width) - boundary.getRightCenter().x;
        this._RENDERER.resize(element, [newUpper, newLower, newLeft, newRight]);
        return element;
    }
    ,
    //========================================================================//
    //=========================Start Storage Query============================//
    //========================================================================//

    /**
     * 주어진 에어리어에 해당하는 액티비티 정보를 반환한다.
     * @param position Area position
     * @returns {Array} Array of OG-Tree data
     */
    selectActivityByPosition: function (position) {
        return this.loadByFilter({
            type: this.Constants.TYPE.ACTIVITY,
            position: position
        });
    }
    ,
    /**
     * 주어진 아이디의 자식 데이터를 반환한다.
     * @param id OG-Tree data id
     * @returns {Array} Array of OG-Tree data
     */
    selectChildById: function (id) {
        var objects = [];
        if (id) {
            var storage = this._STORAGE;
            for (var key in storage) {
                if (!this.emptyString(storage[key]['parentId']) && storage[key]['parentId'] == id && storage[key]['type'] != this.Constants.TYPE.MAPPING) {
                    objects.push(storage[key]);
                }
            }
        }
        return objects;
    }
    ,
    /**
     * 주어진 소스와 타켓 아이디를 가지는 매핑 데이터의 자식을 반환한다.
     * @param sourceId OG-Tree data id
     * @param targetId OG-Tree data id
     * @returns {Array} Array of OG-Tree data
     */
    selectChildMapping: function (sourceId, targetId) {
        var objects = [];
        if (!this.emptyString(sourceId)) {
            objects = this.loadByFilter({parentId: sourceId, target: targetId});
        }
        return objects;
    }
    ,
    /**
     * 주어진 아이디의 부모정보를 반환한다.
     * @param id OG-Tree data id
     * @returns {Object} OG-Tree data
     */
    selectParentById: function (id) {
        var object = this.selectById(id);
        if (object) {
            var parentId = object['parentId'];
            if (!this.emptyString(parentId)) {
                return this.selectById(parentId);
            }
        }
    }
    ,
    /**
     * 주어진 아이디의 정보를 반환한다.
     * @param id OG-Tree data id
     * @returns {Object} OG-Tree data
     */
    selectById: function (id) {
        if (id) {
            return this._STORAGE[id];
        }
    }
    ,
    /**
     * 주어진 소스아이디와 타겟아이디와 일치하는 OG-Tree 데이터를 반환한다.
     * @param sourceId OG-Tree data id
     * @param targetId OG-Tree data id
     * @returns {Object} OG-Tree data
     */
    selectBySourceTarget: function (sourceId, targetId) {
        var mappings = this.loadByFilter({source: sourceId, target: targetId});
        if (!mappings || !mappings.length) {
            return null;
        } else {
            return mappings[0];
        }
    }
    ,
    /**
     * 주어진 아이디의 루트 액티비티 정보를 반환한다.
     * @param id OG-Tree data id
     * @returns {Object} OG-Tree data
     */
    selectRootActivityById: function (id) {
        var me = this;
        var root;
        var findParent = function (id) {
            var parent = me.selectParentById(id);
            if (parent) {
                findParent(parent['id']);
            } else {
                root = me.selectById(id);
                if (root && !root['type'] == me.Constants.TYPE.ACTIVITY) {
                    root = null;
                }
            }
        };
        findParent(id);
        return root;
    }
    ,
    /**
     * 주어진 아이디의 부모 일람을 재귀호출하여 반환한다.
     * @param id OG-Tree data id
     * @returns {Array} Array of OG-Tree data
     */
    selectRecursiveParentById: function (id) {
        var me = this, list = [];
        var findParent = function (id) {
            var parent = me.selectParentById(id);
            if (parent) {
                list.push(parent);
                findParent(parent['id']);
            }
        };
        findParent(id);
        return list;
    }
    ,
    /**
     * 주어진 아이디의 자식 데이터를 재귀호출하여 반환한다.
     * @param id OG-Tree data id
     * @returns {Array} Array of OG-Tree data
     */
    selectRecursiveChildById: function (id) {
        var me = this, list = [];
        var findChild = function (id) {
            var child = me.selectChildById(id);
            for (var i = 0, leni = child.length; i < leni; i++) {
                list.push(child[i]);
                findChild(child[i]['id']);
            }
        };
        findChild(id);
        return list;
    }
    ,
    /**
     * 주어진 아이디의 자식 데이터를 재귀호출하여 삭제한다.
     * @param id OG-Tree data id
     * @returns {Array} Array of OG-Tree data
     */
    removeRecursiveChildById: function (id) {
        var me = this;
        var list = me.selectRecursiveChildById(id);
        for (var i = 0; i < list.length; i++) {
            delete me._STORAGE[list[i]['id']];
        }
        me._STORAGE = JSON.parse(JSON.stringify(me._STORAGE));
    },
    /**
     * 주어진 아이디의 자식 데이터를 재귀호출하여, 더이상 자식이 없는 마지막 데이터일 경우의 리스트를 반환한다.
     * (자기 자신이 마지막 데이터일 경우 자기 자신을 포함하여)
     * @param id OG-Tree data id
     * @returns {Array} Array of OG-Tree data
     */
    selectRecursiveLastChildById: function (id) {
        var me = this, list = [];
        var findChild = function (id) {
            var child = me.selectChildById(id);
            if (!child.length) {
                var self = me.selectById(id);
                if (self) {
                    list.push(self);
                }
            } else {
                for (var i = 0, leni = child.length; i < leni; i++) {
                    findChild(child[i]['id']);
                }
            }
        };
        findChild(id);
        return list;
    }
    ,

    /**
     * 주어진 아이디에 해당하는 뷰 데이터를 반환한다.
     * @param viewData Hashmap of OG-Tree view data
     * @param id OG-Tree view data id
     * @returns {Object} OG-Tree view data id
     */
    selectViewById: function (viewData, id) {
        var view;
        if (viewData && viewData['views'] && id) {
            for (var i = 0, leni = viewData['views'].length; i < leni; i++) {
                if (viewData['views'][i]['id'] == id) {
                    view = viewData['views'][i];
                    break;
                }
            }
        }
        return view;
    }
    ,
    /**
     * 주어진 필터 조건에 따라 뷰데이터를 반환한다.
     * @param viewData HashMap of OG-Tree view data
     * @param filterData HashMap filter data
     * @returns {Array} Array of OG-Tree view data
     */
    selectViewByFilter: function (viewData, filterData) {
        var data = [];
        var view;
        if (viewData && viewData['views']) {
            for (var i = 0, leni = viewData['views'].length; i < leni; i++) {
                var toAdd = true;
                view = viewData['views'][i];
                for (var filterKey in filterData) {
                    //하나라도 필터 조건이 맞지 않다면 추가하지 않도록 한다.
                    if (view[filterKey] != filterData[filterKey]) {
                        toAdd = false;
                    }
                }
                if (toAdd) {
                    data.push(view);
                }
            }
        }
        return data;
    }
    ,
    /**
     * 주어진 아이디의 자식 뷰 데이터를 재귀호출하여 반환한다.
     * @param viewData HashMap of OG-Tree view data
     * @param id OG-Tree view data id
     * @returns {Array} Array of OG-Tree view data
     */
    selectRecursiveChildViewsById: function (viewData, id) {
        var me = this, views = [], view, childIdList = [];
        if (viewData && id) {
            var child = me.selectRecursiveChildById(id);
            if (child && child.length) {
                for (var c = 0, lenc = child.length; c < lenc; c++) {
                    childIdList.push(child[c]['id']);
                }
                for (var i = 0, leni = viewData['views'].length; i < leni; i++) {
                    view = viewData['views'][i];
                    if (childIdList.indexOf(view['id']) != -1) {
                        views.push(view);
                    }
                }
            }
        }
        return views;
    }
    ,
    /**
     * 주어진 views 중 가장 큰 y 를 반환한다.
     * @param views Array of OG-Tree view data
     * @returns {number} max Y
     */
    selectMaxyFromViews: function (views) {
        var maxY = 0;
        for (var i = 0, leni = views.length; i < leni; i++) {
            if (views[i].y) {
                if (views[i].y > maxY) {
                    maxY = views[i].y;
                }
            }
        }
        return maxY;
    }
    ,
    /**
     * 주어진 views 중 가장 큰 depth 를 반환한다.
     * @param views Array of OG-Tree view data
     * @returns {number} max depth
     */
    selectMaxDepthFromViews: function (views) {
        var maxDepth = 0;
        for (var i = 0, leni = views.length; i < leni; i++) {
            if (views[i].depth) {
                if (views[i].depth > maxDepth) {
                    maxDepth = views[i].depth;
                }
            }
        }
        return maxDepth;
    }
    ,
    /**
     * 주어진 views 중 가장 큰 bottom 을 반환한다.
     * @param views Array of OG-Tree view data
     * @returns {number} max bottom
     */
    selectMaxBottomFromViews: function (views) {
        var maxBottom = 0;
        for (var i = 0, leni = views.length; i < leni; i++) {
            if (views[i].bottom) {
                if (views[i].bottom > maxBottom) {
                    maxBottom = views[i].bottom;
                }
            }
        }
        return maxBottom;
    }

    //========================================================================//
    //=================================Utils==================================//
    //========================================================================//
    ,
    /**
     * 주어진 스트링이 빈값인지를 확인한다.
     * @param value String
     * @returns {boolean} 빈 값 여부
     */
    emptyString: function (value) {
        if (typeof value == 'undefined') {
            return true;
        }
        if (!value) {
            return true;
        }
        if (
            (value.length == 0)
            ||
            (value == "")
            ||
            (value.replace(/\s/g, "") == "")
            ||
            (!/[^\s]/.test(value))
            ||
            (/^\s*$/.test(value))
        ) {
            return true;
        }
        return false;
    }
    ,
    /**
     * 좌표값을 포함하는 가장 앞단의 엘리먼트를 반환한다.
     * @param point [x,y] 좌표
     * @returns {Element} OG-Tree Dom Element
     */
    getElementByPoint: function (point) {
        var me = this;
        var elements = me._RENDERER.getAllNotEdges();
        var element;
        for (var i = 0, leni = elements.length; i < leni; i++) {
            if (elements[i].shape.geom.getBoundary().isContains(point)) {
                element = elements[i];
            }
        }
        return element;
    }
    ,
    /**
     * 무작위 랜덤 아이디 생성
     * @returns {string} 랜덤 아이디
     */
    uuid: function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    ,

    //========================================================================//
    //=================================Event==================================//
    //========================================================================//
    /**
     * 캔버스가 처음 렌더링 될 시 필요한 이벤트들을 바인딩한다.
     */
    bindEvent: function () {
        var me = this;
        me.enableShapeContextMenu();

        //삭제 전 이벤트
        me.canvas.onBeforeRemoveShape(function (event, shapeElement) {

            //트랜스포머 삭제일 경우 자신과 관련된 모든 매핑도 삭제토록 한다.
            //이때 렌더러를 한번만 실행하기 위해,
            //아래의 매핑 삭제 이벤트를 중복 발생시키지 않도록 한다.(me.canvas.removeShape(id, preventEvent);)
            if (shapeElement.shape instanceof OG.Transformer) {
                try {
                    for (var id in me._STORAGE) {
                        //트랜스포머 삭제
                        var toRemove = false;
                        if (id == shapeElement.id) {
                            toRemove = true;
                        }

                        //매핑 삭제
                        if (me._STORAGE[id].type == me.Constants.TYPE.MAPPING) {
                            if (me._STORAGE[id].source.indexOf(shapeElement.id) != -1) {
                                toRemove = true;
                            }
                            if (me._STORAGE[id].target.indexOf(shapeElement.id) != -1) {
                                toRemove = true;
                            }
                        }
                        if (toRemove) {
                            me.canvas.removeShape(id, true);
                            delete me._STORAGE[id];
                        }
                    }
                    me._STORAGE = JSON.parse(JSON.stringify(me._STORAGE));
                    me.render();
                } finally {
                    return false;
                }
            }

            //매핑 삭제일 경우
            if (shapeElement.shape.data && shapeElement.shape.data.type == me.Constants.TYPE.MAPPING) {
                try {
                    me.canvas.removeShape(shapeElement.id, true);
                    me.removeDataByFilter({
                        id: shapeElement.id
                    });
                    me.render();
                } finally {
                    return false;
                }
            }
        })

        //선 연결이 되기 전 이벤트. 매핑 데이터를 생성한다.
        me.canvas.onBeforeConnectShape(function (event, edgeElement, fromElement, toElement) {
            try {
                var sourceType, sourceTransformerData, targetType;
                var id = fromElement.id + me.Constants.PREFIX._MAPPING_ + toElement.id;

                //이미 매핑이 존재한다면 실행하지 않는다.
                if (me.selectById(id)) {
                    return false;
                }

                if (fromElement.shape instanceof OG.To || fromElement.shape instanceof OG.From) {
                    sourceType = 'transformer';
                    sourceTransformerData = JSON.parse(JSON.stringify(me.canvas.getParent(fromElement).shape.data));
                } else {
                    sourceType = 'variable';
                }

                if (toElement.shape instanceof OG.To || toElement.shape instanceof OG.From) {
                    targetType = 'transformer';
                } else {
                    targetType = 'variable';
                }
                var obj = {
                    "type": me.Constants.TYPE.MAPPING,
                    "id": id,
                    "source": fromElement.id,
                    "sourceType": sourceType,
                    "sourceTransformerData": sourceTransformerData,
                    "target": toElement.id,
                    "targetType": targetType,
                    "position": me.Constants.POSITION.OTHER_MY
                }
                me.updateData([obj]);
            } catch (e) {
                console.log(e);
            } finally {
                return false;
            }
        })

        //트랜스포머 이동 이벤트
        me.canvas.onMoveShape(function (event, shapeElement, offset) {
            if (shapeElement.shape instanceof OG.Transformer) {
                var boundary = me.canvas.getBoundary(shapeElement);
                var data = me.selectById(shapeElement.id);
                if (data) {
                    data.x = boundary.getCentroid().x;
                    data.y = boundary.getCentroid().y;
                }
                me.renderViews();
            }
        });
    }
    ,
    /**
     * 툴팁 이벤트를 바인딩한다.
     * @param element OG-Tree Dom Element
     */
    bindTooltip: function (element) {
        var me = this;
        $(element).bind('mouseover', function (event) {
            $('.og-tooltip').remove();
            var view = me.selectViewById(me._VIEWDATA, element.id);
            if (view) {
                var text = view.tooltip ? view.tooltip : view.name;
                text = '<div>' + text + '</div>';

                //마이 - 인 일 경우 c_team, c_workflow 표시
                var c_team = '';
                var c_workflow = '';
                if (view.position == me.Constants.POSITION.MY_IN) {
                    if (view.data.extData['c_team']) {
                        c_team = '<div>' + view.data.extData['c_team'] + '</div>';
                    }
                    if (view.data.extData['c_workflow']) {
                        c_workflow = '<div>' + view.data.extData['c_workflow'] + '</div>';
                    }
                }
                var tooltip =
                    $('<div class="og-tooltip ui-tooltip ui-widget ui-corner-all" id="' + element.id + '-tooltip">' +
                        '<div class="ui-tooltip-content">' + c_team + c_workflow + text + '</div>' +
                        '</div>');

                var bodyWidth = $('body').width();
                var tooltipLeft = event.pageX + 15;
                if ((tooltipLeft + 150) > bodyWidth) {
                    tooltipLeft = bodyWidth - 150;
                }
                tooltip.css({
                    position: 'absolute',
                    'top': event.pageY + 15,
                    'left': tooltipLeft,
                    'background-color': '#333',
                    'color': 'whitesmoke',
                    'font-size': '12px'
                });
                $('body').append(tooltip);
            }
        });
        $(element).bind('mouseout', function () {
            $('.og-tooltip').remove();
        });
    }
    ,
    /**
     * OG Tree Dom Element 에 마우스 우클릭 메뉴를 가능하게 한다.
     */
    enableShapeContextMenu: function () {
        var me = this;
        $.contextMenu({
            position: function (opt, x, y) {
                var containerRight = me._CONTAINER.offset().left + me._CONTAINER.width();
                if ((x + 150) > containerRight) {
                    x = containerRight - 150;
                }

                opt.$menu.css({top: y + 10, left: x + 10});
            },
            selector: '#' + me._RENDERER.getRootElement().id + ' [_type=SHAPE]',
            build: function ($trigger, event) {
                var element = $trigger[0];
                $(me._RENDERER.getContainer()).focus();
                var eventOffset = me.canvas._HANDLER._getOffset(event);

                //바탕화면 (Area) 콘텍스트 메뉴
                if (element.shape instanceof OG.Area) {
                    var items = {};
                    var drawData = me.transformerDrawData();
                    $.each(drawData, function (index, data) {
                        var groupName = data.group;
                        var label = data.label;
                        var inputs = data.inputs;
                        var outputs = data.outputs;
                        if (!items[groupName]) {
                            items[groupName] = {
                                name: groupName,
                                items: {}
                            };
                        }
                        var group = items[groupName];
                        group.items[label] = {
                            name: label,
                            callback: function () {

                                me.drawTransformer([eventOffset.x, eventOffset.y], label, inputs, outputs, data, me.uuid());
                            }
                        }
                    });
                    return {
                        items: items
                    };
                }

                //트랜스포머 또는 매핑 라인 콘텍스트 메뉴
                else if (element.shape instanceof OG.Transformer ||
                    (element.shape.data && element.shape.data.type == me.Constants.TYPE.MAPPING)) {
                    return {
                        items: {
                            'Delete': {
                                name: 'Delete', callback: function () {
                                    me.canvas.removeShape(element);
                                }
                            }
                        }
                    };
                } else {
                    return false;
                }
            }
        });
    }
};
EditorRenderer.prototype.constructor = EditorRenderer;