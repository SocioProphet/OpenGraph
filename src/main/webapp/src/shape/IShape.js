/**
 * 도형, 텍스트, 이미지 등의 드로잉 될 Object 의 정보를 저장하는 Shape 정보 최상위 인터페이스
 *
 * @class
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.shape.IShape = function () {
    /**
     * Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)
     * @type String
     */
    this.TYPE = null;

    /**
     * Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)
     * @type String
     */
    this.SHAPE_ID = null;

    /**
     * Shape 모양을 나타내는 공간기하객체(Geometry)
     * @type OG.geometry.Geometry
     */
    this.geom = null;

    /**
     * Shape 라벨 텍스트
     * @type String
     */
    this.label = null;

    /**
     * Shape 의 Collapse 여부
     * @type Boolean
     */
    this.isCollapsed = false;

//	 이벤트 속성
    /**
     * 선택 가능여부
     * @type Boolean
     */
    this.SELECTABLE = true;

    /**
     * 이동 가능여부
     * @type Boolean
     */
    this.MOVABLE = true;

    /**
     * 리사이즈 가능여부
     * @type Boolean
     */
    this.RESIZABLE = true;

    /**
     * 가로방향 리사이즈 가능
     * @type {boolean}
     */
    this.RESIZEX = true;

    /**
     * 세로 방향 리사이즈 가능
     * @type {boolean}
     */
    this.RESIZEY = true;

    /**
     * 연결 가능여부
     * @type Boolean
     */
    this.CONNECTABLE = true;

    /**
     * From 연결 가능여부 (From(Shape) => To)
     * @type Boolean
     */
    this.ENABLE_FROM = true;

    /**
     * To 연결 가능여부 (From => To(Shape))
     * @type Boolean
     */
    this.ENABLE_TO = true;

    /**
     * Self 연결 가능여부
     * @type Boolean
     */
    this.SELF_CONNECTABLE = false;

    /**
     * 가이드에 자기자신을 복사하는 컨트롤러 여부.
     * @type Boolean
     */
    this.CONNECT_CLONEABLE = true;

    /**
     * 드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부
     * @type Boolean
     */
    this.CONNECT_REQUIRED = true;

    /**
     * 드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부
     * @type Boolean
     */
    this.CONNECT_STYLE_CHANGE = true;

    /**
     * 가이드에 삭제 컨트롤러 여부
     * @type Boolean
     */
    this.DELETABLE = true;

    /**
     * 라벨 수정여부
     * @type Boolean
     */
    this.LABEL_EDITABLE = true;

    /**
     * 복사 가능 여부
     * @type {boolean}
     */
    this.COPYABLE = true;


    this.exceptionType = '';

    /**
     * 도형의 데이터
     * @type Object
     */
    this.data = null;

    /**
     * 도형 선연결시 선연결 컨트롤러 목록
     * @type {Array}
     */
    this.textList = [];


    /**
     * 도형 특수 컨트롤러 목록
     * @type {Array}
     */
    this.controllers = [];

    /**
     * 기본 컨텍스트 메뉴 정보
     * @type {Object} json
     */
    this.contextMenu = null;

    /**
     * 사용자 지정 컨텍스트메뉴
     * @type {Object} json
     */
    this.customContextMenu = null;

    /**
     * shape 이 적용된 Dom Element
     * @type {Element} Dom Element
     */
    this.currentElement = null;

    /**
     * shape 이 적용된 Canvas
     * @type {OG.Canvas} canvas
     */
    this.currentCanvas = null;

    /**
     * toJson 시에 이 요소를 무시함.
     * @type {boolean}
     */
    this.ignoreExport = false;

    /**
     * x,y 축만 이동 가능여부. Y | N | none
     * @type {null}
     */
    this.AXIS = 'none';

};
OG.shape.IShape.prototype = {

    /**
     * 드로잉할 Shape 를 생성하여 반환한다.
     *
     * @return {*} Shape 정보
     * @abstract
     */
    createShape: function () {
        throw new OG.NotImplementedException("OG.shape.IShape.createShape");
    },

    /**
     * Shape 을 복사하여 새로인 인스턴스로 반환한다.
     *
     * @return {OG.shape.IShape} 복사된 인스턴스
     * @abstract
     */
    clone: function () {
        throw new OG.NotImplementedException("OG.shape.IShape.clone");
    },
    addEve: function () {
    },

    // (void) 특수한 컨트롤을 생성하기 위한 함수
    drawCustomControl: function () {
    },

    setData: function (data) {
        this.data = data;
    },

    getData: function () {
        return this.data;
    },
    onResize: function (offset) {

    },
    onDrawLabel: function (text) {

    },
    onLabelChanged: function (text, beforeText) {

    },
    onBeforeRemoveShape: function () {

    },
    onRemoveShape: function () {

    },
    onDrawShape: function () {

    },
    onBeforeLabelChange: function (text, beforeText) {

    },
    onRedrawShape: function () {

    },
    onBeforeConnectShape: function (edge, fromShape, toShape) {

    },
    onConnectShape: function (edge, fromShape, toShape) {

    },
    onDisconnectShape: function (edge, fromShape, toShape) {

    },
    onGroup: function (groupShapeEle) {

    },
    onUnGroup: function () {

    },
    onMoveShape: function (offset) {

    },
    onRotateShape: function (angle) {

    },
    onDuplicated: function (edge, target, rectShape) {

    },
    onPasteShape: function (copied, pasted) {

    },
    /**
     * 자신에게 도형들이 그룹으로 들어왔을때의 이벤트
     * @param groupElement
     * @param elements
     */
    onAddToGroup: function (groupElement, elements, eventOffset) {

    },
    /**
     * 자신이 그룹속으로 들어갔을 때의 이벤트
     * @param groupElement
     * @param element
     */
    onAddedToGroup: function(groupElement, element, eventOffset){

    },
    onSelectShape: function () {

    },
    onDeSelectShape: function () {

    }
};
OG.shape.IShape.prototype.constructor = OG.shape.IShape;
OG.IShape = OG.shape.IShape;