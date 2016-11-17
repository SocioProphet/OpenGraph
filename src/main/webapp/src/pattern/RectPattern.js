/**
 * Rect Pattern
 *
 * @class
 * @extends OG.pattern.IPattern
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.pattern.RectPattern = function () {
    OG.pattern.RectPattern.superclass.call(this);

    this.PATTERN_ID = 'OG.pattern.RectPattern';
};
OG.pattern.RectPattern.prototype = new OG.pattern.IPattern();
OG.pattern.RectPattern.superclass = OG.pattern.IPattern;
OG.pattern.RectPattern.prototype.constructor = OG.pattern.RectPattern;
OG.RectPattern = OG.pattern.RectPattern;

/**
 * 드로잉할 pattern 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} pattern 정보
 * @override
 */
OG.pattern.RectPattern.prototype.createPattern = function () {
    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.geometry.Rectangle([0, 0], 100, 100);
    return this.geom;
};