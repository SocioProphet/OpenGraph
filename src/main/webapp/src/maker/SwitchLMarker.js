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
OG.marker.SwitchLMarker = function () {
	OG.marker.SwitchLMarker.superclass.call(this);

	this.MARKER_ID = 'OG.marker.SwitchLMarker';
};
OG.marker.SwitchLMarker.prototype = new OG.marker.IMarker();
OG.marker.SwitchLMarker.superclass = OG.marker.IMarker;
OG.marker.SwitchLMarker.prototype.constructor = OG.marker.SwitchLMarker;
OG.SwitchLMarker = OG.marker.SwitchLMarker;

/**
 * 드로잉할 marker 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} marker 정보
 * @override
 */
OG.marker.SwitchLMarker.prototype.createMarker = function () {
	if (this.geom) {
		return this.geom;
	}

	this.geom = new OG.geometry.PolyLine([[0, 0], [20, 5]]);
	this.geom.style = new OG.geometry.Style({
		'fill-opacity': 1
	});
	return this.geom;
};