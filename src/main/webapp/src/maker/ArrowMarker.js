/**
 * Rectangle Maker
 *
 * @class
 * @extends OG.marker.IMarker
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.marker.ArrowMarker = function () {
	OG.marker.ArrowMarker.superclass.call(this);

	this.MARKER_ID = 'OG.marker.ArrowMarker';
};
OG.marker.ArrowMarker.prototype = new OG.marker.IMarker();
OG.marker.ArrowMarker.superclass = OG.marker.IMarker;
OG.marker.ArrowMarker.prototype.constructor = OG.marker.ArrowMarker;
OG.ArrowMarker = OG.marker.ArrowMarker;

/**
 * 드로잉할 marker 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} marker 정보
 * @override
 */
OG.marker.ArrowMarker.prototype.createMarker = function () {
	if (this.geom) {
		return this.geom;
	}

	//this.geom = new OG.geometry.Rectangle([0, 0], 100, 100);
	this.geom = new OG.geometry.Polygon([[0, 0], [30, 20], [0, 40], [0, 0]]);
	this.geom.style = new OG.geometry.Style({
		'fill-opacity': 1
	});
	return this.geom;
};