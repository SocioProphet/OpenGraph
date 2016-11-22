/**
 * BPMN : Gateway Shape
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
OG.shape.bpmn.G_Gateway = function (label) {
	OG.shape.bpmn.G_Gateway.superclass.call(this);

	this.SHAPE_ID = 'OG.shape.bpmn.G_Gateway';
	this.label = label;
};
OG.shape.bpmn.G_Gateway.prototype = new OG.shape.bpmn.Event();
OG.shape.bpmn.G_Gateway.superclass = OG.shape.bpmn.Event;
OG.shape.bpmn.G_Gateway.prototype.constructor = OG.shape.bpmn.G_Gateway;
OG.G_Gateway = OG.shape.bpmn.G_Gateway;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.bpmn.G_Gateway.prototype.createShape = function () {
	if (this.geom) {
		return this.geom;
	}

	this.geom = new OG.geometry.Polygon([
		[0, 50],
		[50, 100],
		[100, 50],
		[50, 0]
	]);

	return this.geom;
};

OG.shape.bpmn.G_Gateway.prototype.createContextMenu = function(){
	var me = this;
	this.contextMenu = {
		'delete': true,
		'copy': true,
		'format': true,
		'text': true,
		'bringToFront': true,
		'sendToBack': true,
		'changegateway': {
			name: '변경',
			items: {
				'G_Gateway': {
					name: '베타적',
					type: 'radio',
					radio: 'changegateway',
					value: 'OG.shape.bpmn.G_Gateway',
					events: {
						change: function (e) {
							me.currentCanvas.getEventHandler().changeShape(e.target.value);
						}
					}
				},
				'G_Parallel': {
					name: '병렬',
					type: 'radio',
					radio: 'changegateway',
					value: 'OG.shape.bpmn.G_Parallel',
					events: {
						change: function (e) {
							me.currentCanvas.getEventHandler().changeShape(e.target.value);
						}
					}
				},
				'G_Inclusive': {
					name: '포괄적',
					type: 'radio',
					radio: 'changegateway',
					value: 'OG.shape.bpmn.G_Inclusive',
					events: {
						change: function (e) {
							me.currentCanvas.getEventHandler().changeShape(e.target.value);
						}
					}
				}
			}
		}
	};
	return this.contextMenu;
};