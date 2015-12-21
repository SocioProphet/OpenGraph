/**
 * BPMN : Transformer Shape
 *
 * @class
 * @extends OG.shape.bpmn.A_Task
 * @requires OG.common.*, OG.geometry.*, OG.shape.bpmn.A_Task
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:hrkenshin@gmail.com">Seungbaek Lee</a>
 */
OG.shape.Transformer = function (label) {
    OG.shape.Transformer.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.Transformer';
    this.label = label;
    this.CONNECTABLE = false;
}
OG.shape.Transformer.prototype = new OG.shape.GroupShape();
OG.shape.Transformer.superclass = OG.shape.GroupShape;
OG.shape.Transformer.prototype.constructor = OG.shape.Transformer;
OG.Transformer = OG.shape.Transformer;

OG.shape.Transformer.prototype.createShape = function () {
    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.geometry.Rectangle([0, 0], 100, 100);
    this.geom.style = new OG.geometry.Style({
        'label-direction': 'horizontal',
        'vertical-align' : 'top',
        fill: 'none'
    });

    return this.geom;
};