/**
 * Hatched Pattern
 *
 * @class
 * @extends OG.pattern.IPattern
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.pattern.HatchedPattern = function () {
    OG.pattern.HatchedPattern.superclass.call(this);

    this.PATTERN_ID = 'OG.pattern.HatchedPattern';
};
OG.pattern.HatchedPattern.prototype = new OG.pattern.IPattern();
OG.pattern.HatchedPattern.superclass = OG.pattern.IPattern;
OG.pattern.HatchedPattern.prototype.constructor = OG.pattern.HatchedPattern;
OG.HatchedPattern = OG.pattern.HatchedPattern;

/**
 * 드로잉할 pattern 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} pattern 정보
 * @override
 */
OG.pattern.HatchedPattern.prototype.createPattern = function () {
    var geom1, geom2, geom3, geomCollection = [];
    if (this.geom) {
        return this.geom;
    }

    geom1 = new OG.geometry.Line([-1, 1], [1, -1]);
    geom2 = new OG.geometry.Line([0, 4], [4, 0]);
    geom3 = new OG.geometry.Line([3, 5], [5, 3]);

    geomCollection.push(geom1);
    geomCollection.push(geom2);
    geomCollection.push(geom3);

    this.geom = new OG.geometry.GeometryCollection(geomCollection);

    return this.geom;
};