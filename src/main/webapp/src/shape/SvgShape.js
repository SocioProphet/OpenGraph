/**
 * Svg Shape
 *
 * @class
 * @extends OG.shape.IShape
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @param {String} xml xml String
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.shape.SvgShape = function (xml, label) {
	OG.shape.SvgShape.superclass.call(this);

	this.TYPE = OG.Constants.SHAPE_TYPE.IMAGE;
	this.SHAPE_ID = 'OG.shape.SvgShape';
	this.label = label;

	/**
	 * 드로잉할 xml
	 * @type String
	 */
	this.xml = xml;

	/**
	 * 회전각도
	 * @type Number
	 */
	this.angle = 0;
};
OG.shape.SvgShape.prototype = new OG.shape.IShape();
OG.shape.SvgShape.superclass = OG.shape.IShape;
OG.shape.SvgShape.prototype.constructor = OG.shape.SvgShape;
OG.SvgShape = OG.shape.SvgShape;

/**
 * 드로잉할 xml 스트링을 반환한다.
 *
 * @return {String} xml String
 * @override
 */
OG.shape.SvgShape.prototype.createShape = function () {
	return this.xml;
};

/**
 * Shape 을 복사하여 새로인 인스턴스로 반환한다.
 *
 * @return {OG.shape.IShape} 복사된 인스턴스
 * @override
 */
OG.shape.SvgShape.prototype.clone = function () {
	var shape = eval('new ' + this.SHAPE_ID + '()');
	shape.xml = this.xml;
	shape.label = this.label;
	shape.angle = this.angle;
	shape.setData(JSON.parse(JSON.stringify(this.getData())));
	return shape;
};