/**
 * 도형 Path 의 Marker 정보 최상위 인터페이스
 *
 * @class
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.marker.IMarker = function () {

	/**
	 * marker 을 구분하는 marker ID(marker 클래스명과 일치)
	 * @type String
	 */
	this.MARKER_ID = null;

	/**
	 * marker 모양을 나타내는 공간기하객체(Geometry)
	 * @type OG.geometry.Geometry
	 */
	this.geom = null;
};
OG.marker.IMarker.prototype = {


	/**
	 * 드로잉할 marker 를 생성하여 반환한다.
	 * @return {*} Marker 정보
	 * @abstract
	 */
	createMarker: function () {
		throw new OG.NotImplementedException("OG.shape.IMarker.createMarker");
	}
};
OG.marker.IMarker.prototype.constructor = OG.marker.IMarker;
OG.IMarker = OG.marker.IMarker;