/**
 * BPMN : Practice Event Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*, OG.geometry.*
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:hrkenshin@gmail.com">Seungbaek Lee</a>
 */
OG.shape.essencia.Practice = function (label) {
    OG.shape.essencia.Practice.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.essencia.Practice';
    this.LABEL_EDITABLE = false;
    this.label = label;
};
OG.shape.essencia.Practice.prototype = new OG.shape.GeomShape();
OG.shape.essencia.Practice.superclass = OG.shape.GeomShape;
OG.shape.essencia.Practice.prototype.constructor = OG.shape.essencia.Practice;
OG.Practice = OG.shape.essencia.Practice;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.essencia.Practice.prototype.createShape = function () {
    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.geometry.Polygon([
        [85.0,7.5],
        [95.8,13.75],
        [95.8,26.25],
        [85.0,32.5],
        [74.2,26.26],
        [74.2,13.75]
    ]);

    this.geom.style = new OG.geometry.Style({
        'label-position': 'middle',
        'stroke-width' : 2.5,
        'fill': '#9b59b6',
        'stroke': '#8e44ad',
        'fill-opacity': "1"
    });

    return this.geom;
};

/**
 * Shape 간의 연결을 위한 Terminal 을 반환한다.
 *
 * @return {OG.Terminal[]} Terminal
 * @override
 */
OG.shape.essencia.Practice.prototype.createTerminal = function () {
    if (!this.geom) {
        return [];
    }

    var envelope = this.geom.getBoundary();

    return [
        new OG.Terminal(envelope.getCentroid(), OG.Constants.TERMINAL_TYPE.C, OG.Constants.TERMINAL_TYPE.OUT),
        new OG.Terminal(envelope.getRightCenter(), OG.Constants.TERMINAL_TYPE.E, OG.Constants.TERMINAL_TYPE.OUT),
        new OG.Terminal(envelope.getLeftCenter(), OG.Constants.TERMINAL_TYPE.W, OG.Constants.TERMINAL_TYPE.OUT),
        new OG.Terminal(envelope.getLowerCenter(), OG.Constants.TERMINAL_TYPE.S, OG.Constants.TERMINAL_TYPE.OUT),
        new OG.Terminal(envelope.getUpperCenter(), OG.Constants.TERMINAL_TYPE.N, OG.Constants.TERMINAL_TYPE.OUT)
    ];
};