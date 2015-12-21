/**
 * BPMN : Alpha Event Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*, OG.geometry.*
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:hrkenshin@gmail.com">Seungbaek Lee</a>
 */
OG.shape.essencia.Alpha = function (label) {
    OG.shape.essencia.Alpha.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.essencia.Alpha';
    this.LABEL_EDITABLE = false;
    this.label = label;
};
OG.shape.essencia.Alpha.prototype = new OG.shape.GeomShape();
OG.shape.essencia.Alpha.superclass = OG.shape.GeomShape;
OG.shape.essencia.Alpha.prototype.constructor = OG.shape.essencia.Alpha;
OG.Alpha = OG.shape.essencia.Alpha;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.essencia.Alpha.prototype.createShape = function () {
    var geom1, geomCollection = [];

    if (this.geom) {
        return this.geom;
    }

    geom1 = new OG.geometry.Rectangle([0, 0], 90, 100);

    geomCollection.push(geom1);
    geomCollection.push(new OG.geometry.Line([90, 50], [100, 0]));
    geomCollection.push(new OG.geometry.Line([90, 50], [100, 100]));

    this.geom = new OG.geometry.GeometryCollection(geomCollection);

    this.geom.style = new OG.geometry.Style({
        'r' : 20,
        'label-position': '40%',
        'stroke-width' : 2.5
    });

    return this.geom;
};

/**
 * Shape 간의 연결을 위한 Terminal 을 반환한다.
 *
 * @return {OG.Terminal[]} Terminal
 * @override
 */
OG.shape.essencia.Alpha.prototype.createTerminal = function () {
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