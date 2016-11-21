/**
 * Geometry Shape
 *
 * @class
 * @extends OG.shape.IShape
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.shape.GeomShape = function () {
	OG.shape.GeomShape.superclass.call(this);

	this.TYPE = OG.Constants.SHAPE_TYPE.GEOM;
};
OG.shape.GeomShape.prototype = new OG.shape.IShape();
OG.shape.GeomShape.superclass = OG.shape.IShape;
OG.shape.GeomShape.prototype.constructor = OG.shape.GeomShape;
OG.GeomShape = OG.shape.GeomShape;

/**
 * Shape 을 복사하여 새로인 인스턴스로 반환한다.
 *
 * @return {OG.shape.IShape} 복사된 인스턴스
 * @override
 */
OG.shape.GeomShape.prototype.clone = function () {
	var shape = eval('new ' + this.SHAPE_ID + '()');
	shape.label = this.label;
	shape.setData(JSON.parse(JSON.stringify(this.getData())));

	return shape;
};