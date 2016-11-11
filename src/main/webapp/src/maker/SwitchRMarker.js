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
OG.marker.SwitchRMarker = function () {
	OG.marker.SwitchRMarker.superclass.call(this);

	this.MARKER_ID = 'OG.marker.SwitchRMarker';
};
OG.marker.SwitchRMarker.prototype = new OG.marker.IMarker();
OG.marker.SwitchRMarker.superclass = OG.marker.IMarker;
OG.marker.SwitchRMarker.prototype.constructor = OG.marker.SwitchRMarker;
OG.SwitchRMarker = OG.marker.SwitchRMarker;

/**
 * 드로잉할 marker 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} marker 정보
 * @override
 */
OG.marker.SwitchRMarker.prototype.createMarker = function () {
	if (this.geom) {
		return this.geom;
	}

	this.geom = new OG.geometry.PolyLine([[0, 5], [20, 0]]);
	this.geom.style = new OG.geometry.Style({
		'fill-opacity': 1
	});
	return this.geom;
};