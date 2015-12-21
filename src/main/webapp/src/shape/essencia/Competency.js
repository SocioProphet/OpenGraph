/**
 * BPMN : Competency Event Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*, OG.geometry.*
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:hrkenshin@gmail.com">Seungbaek Lee</a>
 */
OG.shape.essencia.Competency = function (label) {
    OG.shape.essencia.Competency.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.essencia.Competency';
    this.LABEL_EDITABLE = false;
    this.label = label;
};
OG.shape.essencia.Competency.prototype = new OG.shape.GeomShape();
OG.shape.essencia.Competency.superclass = OG.shape.GeomShape;
OG.shape.essencia.Competency.prototype.constructor = OG.shape.essencia.Competency;
OG.Competency = OG.shape.essencia.Competency;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.essencia.Competency.prototype.createShape = function () {
    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.geometry.Polygon([
        [35.0,7.5],
        [37.9,16.1],
        [46.9,16.1],
        [39.7,21.5],
        [42.3,30.1],
        [35.0,25.0],
        [27.7,30.1],
        [30.3,21.5],
        [23.1,16.1],
        [32.1,16.1]
    ]);

    this.geom.style = new OG.geometry.Style({
        'label-position': 'middle',
        'stroke-width': 2.5
    });

    return this.geom;
};

/**
 * Shape 간의 연결을 위한 Terminal 을 반환한다.
 *
 * @return {OG.Terminal[]} Terminal
 * @override
 */
OG.shape.essencia.Competency.prototype.createTerminal = function () {
    if (!this.geom) {
        return [];
    }

    var envelope = this.geom.getBoundary();

    return [
        new OG.Terminal(envelope.getCentroid(), OG.Constants.TERMINAL_TYPE.C, OG.Constants.TERMINAL_TYPE.INOUT),
        new OG.Terminal(envelope.getRightCenter(), OG.Constants.TERMINAL_TYPE.E, OG.Constants.TERMINAL_TYPE.INOUT),
        new OG.Terminal(envelope.getLeftCenter(), OG.Constants.TERMINAL_TYPE.W, OG.Constants.TERMINAL_TYPE.INOUT),
        new OG.Terminal(envelope.getLowerCenter(), OG.Constants.TERMINAL_TYPE.S, OG.Constants.TERMINAL_TYPE.INOUT),
        new OG.Terminal(envelope.getUpperCenter(), OG.Constants.TERMINAL_TYPE.N, OG.Constants.TERMINAL_TYPE.INOUT)
    ];
};