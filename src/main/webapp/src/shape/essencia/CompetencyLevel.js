/**
 * BPMN : CompetencyLevel Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*, OG.geometry.*
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:hrkenshin@gmail.com">Seungbaek Lee</a>
 */
OG.shape.essencia.CompetencyLevel = function (label) {
    OG.shape.essencia.CompetencyLevel.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.essencia.CompetencyLevel';
    this.LABEL_EDITABLE = false;
    this.label = label;
};
OG.shape.essencia.CompetencyLevel.prototype = new OG.shape.GeomShape();
OG.shape.essencia.CompetencyLevel.superclass = OG.shape.GeomShape;
OG.shape.essencia.CompetencyLevel.prototype.constructor = OG.shape.essencia.CompetencyLevel;
OG.CompetencyLevel = OG.shape.essencia.CompetencyLevel;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.essencia.CompetencyLevel.prototype.createShape = function () {
    var geom1, geomCollection = [];

    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.geometry.Rectangle([0, 0], 100, 100);

    this.geom.style = new OG.geometry.Style({
        'label-position': 'center',
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
OG.shape.essencia.CompetencyLevel.prototype.createTerminal = function () {
    if (!this.geom) {
        return [];
    }

    var envelope = this.geom.getBoundary();

    return [
        new OG.Terminal(envelope.getCentroid(), OG.Constants.TERMINAL_TYPE.C, OG.Constants.TERMINAL_TYPE.IN),
        new OG.Terminal(envelope.getRightCenter(), OG.Constants.TERMINAL_TYPE.E, OG.Constants.TERMINAL_TYPE.IN),
        new OG.Terminal(envelope.getLeftCenter(), OG.Constants.TERMINAL_TYPE.W, OG.Constants.TERMINAL_TYPE.IN),
        new OG.Terminal(envelope.getLowerCenter(), OG.Constants.TERMINAL_TYPE.S, OG.Constants.TERMINAL_TYPE.IN),
        new OG.Terminal(envelope.getUpperCenter(), OG.Constants.TERMINAL_TYPE.N, OG.Constants.TERMINAL_TYPE.IN)
    ];
};