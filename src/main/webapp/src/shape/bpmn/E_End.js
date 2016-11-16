/**
 * BPMN : End Event Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 * @private
 */
OG.shape.bpmn.E_End = function (label) {
    OG.shape.bpmn.E_End.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.bpmn.E_End';
    this.label = label;
    this.inclusion = false;
};
OG.shape.bpmn.E_End.prototype = new OG.shape.bpmn.Event();
OG.shape.bpmn.E_End.superclass = OG.shape.bpmn.Event;
OG.shape.bpmn.E_End.prototype.constructor = OG.shape.bpmn.E_End;
OG.E_End = OG.shape.bpmn.E_End;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.bpmn.E_End.prototype.createShape = function () {
    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.geometry.Circle([50, 50], 50);
    this.geom.style = new OG.geometry.Style({
        "stroke-width": 3,
        'label-position': 'bottom'
    });

    return this.geom;
};

OG.shape.bpmn.E_End.prototype.createSubShape = function () {
    this.sub = [];

    if (this.inclusion) {
        this.sub.push({
            shape: new OG.ImageShape('resources/images/symbol/complete.png'),
            width: '20px',
            height: '20px',
            right: '0px',
            bottom: '20px',
            style: {}
        })
    }

    return this.sub;
};