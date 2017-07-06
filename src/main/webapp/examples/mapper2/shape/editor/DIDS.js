OG.shape.DIDS = function (label) {
    OG.shape.DIDS.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.DIDS';
    this.LABEL_EDITABLE = false;
    this.label = label;
    this.CONNECTABLE = false;
    this.DELETABLE = false;
    this.MOVABLE = false;

};
OG.shape.DIDS.prototype = new OG.shape.GeomShape();
OG.shape.DIDS.superclass = OG.shape.GeomShape;
OG.shape.DIDS.prototype.constructor = OG.shape.DIDS;
OG.DIDS = OG.shape.DIDS;
OG.shape.DIDS.prototype.createShape = function () {
    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.geometry.Rectangle([0, 0], 100, 100);
    this.geom.style = new OG.geometry.Style({
        'fill': '#fff',
        'fill-opacity': 0,
        'stroke': 'none',
        "label-position": "bottom",
        "text-anchor": "middle",
        "vertical-align": "top"
    });

    return this.geom;
};


OG.shape.DIDS.prototype.createSubShape = function () {
    this.sub = [];
    return this.sub;
};