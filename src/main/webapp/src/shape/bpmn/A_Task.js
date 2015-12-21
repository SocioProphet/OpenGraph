/**
 * BPMN : Task Activity Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*, OG.geometry.*
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:hrkenshin@gmail.com">Seungbaek Lee</a>
 */
OG.shape.bpmn.A_Task = function (label) {
	OG.shape.bpmn.A_Task.superclass.call(this);

	this.SHAPE_ID = 'OG.shape.bpmn.A_Task';
	this.label = label;
	this.CONNECTABLE = true;
	this.GROUP_COLLAPSIBLE = false;
	//this.HaveButton = true;
	this.LoopType = "None";
	this.TaskType = "None";
	this.status = "None";
	this.Events = [];

};
OG.shape.bpmn.A_Task.prototype = new OG.shape.GroupShape();
OG.shape.bpmn.A_Task.superclass = OG.shape.GroupShape;
OG.shape.bpmn.A_Task.prototype.constructor = OG.shape.bpmn.A_Task;
OG.A_Task = OG.shape.bpmn.A_Task;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.bpmn.A_Task.prototype.createShape = function () {
	if (this.geom) {
		return this.geom;
	}

	this.geom = new OG.geometry.Rectangle([0, 0], 100, 100);
	this.geom.style = new OG.geometry.Style({
		//fill: 'r[(10, 10)]#FFFFFF-#FFFFCC',
		'fill-r' : 1,
		'fill-cx' : .1,
		'fill-cy' : .1,
		"stroke-width" : 1.2,
		fill: 'r(.1, .1)#FFFFFF-#FFFFCC',
		'fill-opacity': 1,
		r : '10'
	});

	return this.geom;
};

OG.shape.bpmn.A_Task.prototype.createTerminal = function(){
	if (!this.geom) {
		return [];
	}

	var envelope = this.geom.getBoundary();

	return [
		new OG.Terminal(envelope.getCentroid(), OG.Constants.TERMINAL_TYPE.C, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(envelope.getRightCenter(), OG.Constants.TERMINAL_TYPE.E, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(envelope.getLeftCenter(), OG.Constants.TERMINAL_TYPE.W, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(envelope.getLowerCenter(), OG.Constants.TERMINAL_TYPE.S, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(envelope.getUpperCenter(), OG.Constants.TERMINAL_TYPE.N, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(envelope.getUpperLeft(), OG.Constants.TERMINAL_TYPE.N, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(envelope.getUpperRight(), OG.Constants.TERMINAL_TYPE.N, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(envelope.getLowerLeft(), OG.Constants.TERMINAL_TYPE.S, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(envelope.getLowerRight(), OG.Constants.TERMINAL_TYPE.S, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate((((envelope.getUpperCenter().x - envelope.getUpperLeft().x) / 3) * 1) + envelope.getUpperLeft().x, envelope.getUpperLeft().y), OG.Constants.TERMINAL_TYPE.N, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate((((envelope.getUpperCenter().x - envelope.getUpperLeft().x) / 3) * 2) + envelope.getUpperLeft().x, envelope.getUpperLeft().y), OG.Constants.TERMINAL_TYPE.N, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate((((envelope.getUpperRight().x - envelope.getUpperCenter().x) / 3) * 1) + envelope.getUpperCenter().x, envelope.getUpperLeft().y), OG.Constants.TERMINAL_TYPE.N, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate((((envelope.getUpperRight().x - envelope.getUpperCenter().x) / 3) * 2) + envelope.getUpperCenter().x, envelope.getUpperLeft().y), OG.Constants.TERMINAL_TYPE.N, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate((((envelope.getLowerCenter().x - envelope.getLowerLeft().x) / 3) * 1) + envelope.getLowerLeft().x, envelope.getLowerLeft().y), OG.Constants.TERMINAL_TYPE.S, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate((((envelope.getLowerCenter().x - envelope.getLowerLeft().x) / 3) * 2) + envelope.getLowerLeft().x, envelope.getLowerLeft().y), OG.Constants.TERMINAL_TYPE.S, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate((((envelope.getLowerRight().x - envelope.getLowerCenter().x) / 3) * 1) + envelope.getLowerCenter().x, envelope.getLowerLeft().y), OG.Constants.TERMINAL_TYPE.S, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate((((envelope.getLowerRight().x - envelope.getLowerCenter().x) / 3) * 2) + envelope.getLowerCenter().x, envelope.getLowerLeft().y), OG.Constants.TERMINAL_TYPE.S, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate( envelope.getUpperLeft().x, (((envelope.getLeftCenter().y - envelope.getUpperLeft().y) / 3) * 1) + envelope.getUpperLeft().y), OG.Constants.TERMINAL_TYPE.W, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate( envelope.getUpperLeft().x, (((envelope.getLeftCenter().y - envelope.getUpperLeft().y) / 3) * 2) + envelope.getUpperLeft().y), OG.Constants.TERMINAL_TYPE.W, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate( envelope.getUpperLeft().x, (((envelope.getLowerRight().y - envelope.getLeftCenter().y) / 3) * 1) + envelope.getLeftCenter().y), OG.Constants.TERMINAL_TYPE.W, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate( envelope.getUpperLeft().x, (((envelope.getLowerRight().y - envelope.getLeftCenter().y) / 3) * 2) + envelope.getLeftCenter().y), OG.Constants.TERMINAL_TYPE.W, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate( envelope.getUpperRight().x, (((envelope.getRightCenter().y - envelope.getUpperRight().y) / 3) * 1) + envelope.getUpperRight().y), OG.Constants.TERMINAL_TYPE.E, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate( envelope.getUpperRight().x, (((envelope.getRightCenter().y - envelope.getUpperRight().y) / 3) * 2) + envelope.getUpperRight().y), OG.Constants.TERMINAL_TYPE.E, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate( envelope.getUpperRight().x, (((envelope.getLowerRight().y - envelope.getRightCenter().y) / 3) * 1) + envelope.getRightCenter().y), OG.Constants.TERMINAL_TYPE.E, OG.Constants.TERMINAL_TYPE.INOUT),
		new OG.Terminal(new OG.geometry.Coordinate( envelope.getUpperRight().x, (((envelope.getLowerRight().y - envelope.getRightCenter().y) / 3) * 2) + envelope.getRightCenter().y), OG.Constants.TERMINAL_TYPE.E, OG.Constants.TERMINAL_TYPE.INOUT)
	];
};