/**
 * 도형 Pattern 정보 최상위 인터페이스
 *
 * @class
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.pattern.IPattern = function () {

	/**
	 * pattern 을 구분하는 pattern ID(pattern 클래스명과 일치)
	 * @type String
	 */
	this.PATTERN_ID = null;

	/**
	 * pattern 모양을 나타내는 공간기하객체(Geometry)
	 * @type OG.geometry.Geometry
	 */
	this.geom = null;
};
OG.pattern.IPattern.prototype = {


	/**
	 * 드로잉할 pattern 를 생성하여 반환한다.
	 * @return {*} pattern 정보
	 * @abstract
	 */
	createPattern: function () {
		throw new OG.NotImplementedException("OG.shape.IPattern.createPattern");
	}
};
OG.pattern.IPattern.prototype.constructor = OG.pattern.IPattern;
OG.IPattern = OG.pattern.IPattern;