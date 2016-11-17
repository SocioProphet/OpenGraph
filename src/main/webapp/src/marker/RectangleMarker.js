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
OG.marker.RectangleMarker = function () {
	OG.marker.RectangleMarker.superclass.call(this);

	this.MARKER_ID = 'OG.marker.RectangleMarker';
};
OG.marker.RectangleMarker.prototype = new OG.marker.IMarker();
OG.marker.RectangleMarker.superclass = OG.marker.IMarker;
OG.marker.RectangleMarker.prototype.constructor = OG.marker.RectangleMarker;
OG.RectangleMarker = OG.marker.RectangleMarker;

/**
 * 드로잉할 marker 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} marker 정보
 * @override
 */
OG.marker.RectangleMarker.prototype.createMarker = function () {
	var geom1, geom2, geomCollection = [];
	if (this.geom) {
		return this.geom;
	}

	geom1 = new OG.geometry.Circle([50, 50], 50);
	geom1.style = new OG.geometry.Style({
		"stroke-width": 4
	});

	geom2 = new OG.geometry.Polygon([
		[20, 75],
		[40, 30],
		[60, 60],
		[80, 20],
		[60, 75],
		[40, 50]

	]);
	geom2.style = new OG.geometry.Style({
		"fill": "black",
		"fill-opacity": 1
	});

	geomCollection.push(geom1);
	geomCollection.push(geom2);

	this.geom = new OG.geometry.GeometryCollection(geomCollection);

	return this.geom;
};