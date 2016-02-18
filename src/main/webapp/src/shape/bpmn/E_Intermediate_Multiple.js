/**
 * BPMN : Multiple Intermediate Event Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*, OG.geometry.*
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.shape.bpmn.E_Intermediate_Multiple = function (label) {
	OG.shape.bpmn.E_Intermediate_Multiple.superclass.call(this);

	this.SHAPE_ID = 'OG.shape.bpmn.E_Intermediate_Multiple';
	this.label = label;
};
OG.shape.bpmn.E_Intermediate_Multiple.prototype = new OG.shape.bpmn.Event();
OG.shape.bpmn.E_Intermediate_Multiple.superclass = OG.shape.bpmn.Event;
OG.shape.bpmn.E_Intermediate_Multiple.prototype.constructor = OG.shape.bpmn.E_Intermediate_Multiple;
OG.E_Intermediate_Multiple = OG.shape.bpmn.E_Intermediate_Multiple;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.bpmn.E_Intermediate_Multiple.prototype.createShape = function () {
	var geom1, geomCollection = [];
	if (this.geom) {
		return this.geom;
	}

	geom1 = new OG.geometry.Polygon([
		[20, 50],
		[50, 20],
		[80, 50],
		[65, 75],
		[35, 75]
	]);

	geomCollection.push(new OG.geometry.Circle([50, 50], 50));
	geomCollection.push(new OG.geometry.Circle([50, 50], 40));
	geomCollection.push(geom1);

	this.geom = new OG.geometry.GeometryCollection(geomCollection);
	this.geom.style = new OG.geometry.Style({
		'label-position': 'bottom',
		"stroke" : "#969149",
		"stroke-width" : 1.5,
		fill : "white",
		"fill-opacity" : 1
	});

	return this.geom;
};