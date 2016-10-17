/**
 * BPMN : Conditional Connector Shape
 *
 * @class
 * @extends OG.shape.EdgeShape
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @param {Number[]} from 와이어 시작 좌표
 * @param {Number[]} to 와이어 끝 좌표
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 * @private
 */
OG.shape.bpmn.C_Conditional = function (from, to, label) {
    OG.shape.bpmn.C_Conditional.superclass.call(this, from, to, label);

    this.SHAPE_ID = 'OG.shape.bpmn.C_Conditional';
};
OG.shape.bpmn.C_Conditional.prototype = new OG.shape.EdgeShape();
OG.shape.bpmn.C_Conditional.superclass = OG.shape.EdgeShape;
OG.shape.bpmn.C_Conditional.prototype.constructor = OG.shape.bpmn.C_Conditional;
OG.C_Conditional = OG.shape.bpmn.C_Conditional;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.bpmn.C_Conditional.prototype.createShape = function () {
    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.Line(this.from || [0, 0], this.to || [70, 0]);
    this.geom.style = new OG.geometry.Style({
        "edge-type": "straight",
        "arrow-start": "open_diamond-wide-long",
        "arrow-end": "open_block-wide-long"
    });

    return this.geom;
};