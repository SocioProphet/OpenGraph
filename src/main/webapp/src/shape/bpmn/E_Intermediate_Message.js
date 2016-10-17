/**
 * BPMN : Message Intermediate Event Shape
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
OG.shape.bpmn.E_Intermediate_Message = function (label) {
	OG.shape.bpmn.E_Intermediate_Message.superclass.call(this);

	this.SHAPE_ID = 'OG.shape.bpmn.E_Intermediate_Message';
	this.label = label;
};
OG.shape.bpmn.E_Intermediate_Message.prototype = new OG.shape.bpmn.Event();
OG.shape.bpmn.E_Intermediate_Message.superclass = OG.shape.bpmn.Event;
OG.shape.bpmn.E_Intermediate_Message.prototype.constructor = OG.shape.bpmn.E_Intermediate_Message;
OG.E_Intermediate_Message = OG.shape.bpmn.E_Intermediate_Message;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.bpmn.E_Intermediate_Message.prototype.createShape = function () {
	var geom1, geom2, geomCollection = [];
	if (this.geom) {
		return this.geom;
	}

	geom1 = new OG.geometry.PolyLine([
		[20, 25],
		[50, 45],
		[80, 25],
		[20, 25]
	]);

	geom2 = new OG.geometry.PolyLine([
		[20, 35],
		[20, 70],
		[80, 70],
		[80, 35],
		[50, 55],
		[20, 35]
	]);


	geomCollection.push(new OG.geometry.Circle([50, 50], 50));
	geomCollection.push(new OG.geometry.Circle([50, 50], 45));
	geomCollection.push(geom1);
	geomCollection.push(geom2);

	this.geom = new OG.geometry.GeometryCollection(geomCollection);
	this.geom.style = new OG.geometry.Style({
		'label-position': 'bottom',
		"stroke" : "black",
		"stroke-width" : 1,
		fill : "white",
		"fill-opacity" : 1
	});

	return this.geom;
};