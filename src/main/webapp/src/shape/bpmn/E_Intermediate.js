/**
 * BPMN : Intermediate Event Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*, OG.geometry.*
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.shape.bpmn.E_Intermediate = function (label) {
	OG.shape.bpmn.E_Intermediate.superclass.call(this);

	this.SHAPE_ID = 'OG.shape.bpmn.E_Intermediate';
	this.label = label;
};
OG.shape.bpmn.E_Intermediate.prototype = new OG.shape.bpmn.Event();
OG.shape.bpmn.E_Intermediate.superclass = OG.shape.bpmn.Event;
OG.shape.bpmn.E_Intermediate.prototype.constructor = OG.shape.bpmn.E_Intermediate;
OG.E_Intermediate = OG.shape.bpmn.E_Intermediate;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.bpmn.E_Intermediate.prototype.createShape = function () {
	var geomCollection = [];
	if (this.geom) {
		return this.geom;
	}

	geomCollection.push(new OG.geometry.Circle([50, 50], 50));
	geomCollection.push(new OG.geometry.Circle([50, 50], 42));

	this.geom = new OG.geometry.GeometryCollection(geomCollection);
	this.geom.style = new OG.geometry.Style({
		'label-position': 'bottom'
	});

	return this.geom;
};