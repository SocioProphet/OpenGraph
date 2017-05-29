/**
 * DIDS : ED Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 * @private
 */
OG.shape.dids.ED = function (label) {
    OG.shape.dids.ED.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.dids.ED';
    this.label = label;
};
OG.shape.dids.ED.prototype = new OG.shape.GeomShape();
OG.shape.dids.ED.superclass = OG.shape.GeomShape;
OG.shape.dids.ED.prototype.constructor = OG.shape.dids.ED;
OG.ED = OG.shape.dids.ED;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.dids.ED.prototype.createShape = function () {
    var geom1, geom2, geom3, geom4, geom5, geomCollection = [];
    if (this.geom) {
        return this.geom;
    }

    geom1 = new OG.geometry.PolyLine([
        [0, 0],
        [0, 100],
        [100, 100],
        [100, 20],
        [80, 0],
        [0, 0],
        [80, 0],
        [80, 20],
        [100, 20]
    ]);
    // geom1 = new OG.geometry.Ellipse([50, 10], 50, 10);
    // geom2 = new OG.geometry.Line([0, 10], [0, 90]);
    // geom3 = new OG.geometry.Line([100, 10], [100, 90]);
    // geom4 = new OG.geometry.Curve([
    //     [100, 90],
    //     [96, 94],
    //     [85, 97],
    //     [50, 100],
    //     [15, 97],
    //     [4, 94],
    //     [0, 90]
    // ]);
    // geom5 = new OG.geometry.Rectangle([0, 10], 100, 80);
    // geom5.style = new OG.geometry.Style({
    //     "stroke": 'black'
    // });
    //
    geomCollection.push(geom1);
    // geomCollection.push(geom2);
    // geomCollection.push(geom3);
    // geomCollection.push(geom4);
    // geomCollection.push(geom5);

    this.geom = new OG.geometry.GeometryCollection(geomCollection);

    return this.geom;
};