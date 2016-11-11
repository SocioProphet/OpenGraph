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
OG.marker.SwitchXMarker = function () {
	OG.marker.SwitchXMarker.superclass.call(this);

	this.MARKER_ID = 'OG.marker.SwitchXMarker';
};
OG.marker.SwitchXMarker.prototype = new OG.marker.IMarker();
OG.marker.SwitchXMarker.superclass = OG.marker.IMarker;
OG.marker.SwitchXMarker.prototype.constructor = OG.marker.SwitchXMarker;
OG.SwitchXMarker = OG.marker.SwitchXMarker;

/**
 * 드로잉할 marker 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} marker 정보
 * @override
 */
OG.marker.SwitchXMarker.prototype.createMarker = function () {
	var geom1, geom2,geomCollection = [];
	if (this.geom) {
		return this.geom;
	}

	geom1 = new OG.geometry.Line([-10, 10],[10,-10]);
	geom2 = new OG.geometry.Line([-10, -10],[10,10]);

	geomCollection.push(geom1);
	geomCollection.push(geom2);

	this.geom = new OG.geometry.GeometryCollection(geomCollection);

	return this.geom;
};