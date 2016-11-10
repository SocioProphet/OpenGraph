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
OG.marker.SwitchMarker = function () {
	OG.marker.SwitchMarker.superclass.call(this);

	this.MARKER_ID = 'OG.marker.SwitchMarker';
};
OG.marker.SwitchMarker.prototype = new OG.marker.IMarker();
OG.marker.SwitchMarker.superclass = OG.marker.IMarker;
OG.marker.SwitchMarker.prototype.constructor = OG.marker.SwitchMarker;
OG.SwitchMarker = OG.marker.SwitchMarker;

/**
 * 드로잉할 marker 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} marker 정보
 * @override
 */
OG.marker.SwitchMarker.prototype.createMarker = function () {
	if (this.geom) {
		return this.geom;
	}

	//this.geom = new OG.geometry.Rectangle([0, 0], 100, 100);
	//this.geom = new OG.geometry.Polygon([[20, 5], [30, 15], [40, 25], [50, 15], [60, 5], [20, 5]]);
	this.geom = new OG.geometry.PolyLine([[0, 0], [20, 5]]);
	this.geom.style = new OG.geometry.Style({
		'fill-opacity': 1
	});
	return this.geom;
};