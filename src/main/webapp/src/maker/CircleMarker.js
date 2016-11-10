/**
 * Circle Marker
 *
 * @class
 * @extends OG.marker.IMarker
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.marker.CircleMarker = function () {
	OG.marker.CircleMarker.superclass.call(this);

	this.MARKER_ID = 'OG.marker.CircleMarker';
};
OG.marker.CircleMarker.prototype = new OG.marker.IMarker();
OG.marker.CircleMarker.superclass = OG.marker.IMarker;
OG.marker.CircleMarker.prototype.constructor = OG.marker.CircleMarker;
OG.CircleMarker = OG.marker.CircleMarker;

/**
 * 드로잉할 marker 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} marker 정보
 * @override
 */
OG.marker.CircleMarker.prototype.createMarker = function () {
	if (this.geom) {
		return this.geom;
	}

	this.geom = new OG.geometry.Circle([50, 50], 50);
	return this.geom;
};