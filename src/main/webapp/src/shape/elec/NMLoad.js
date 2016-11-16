OG.shape.elec.NMLoad = function (label) {
    OG.shape.elec.NMLoad.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.elec.NMLoad';
    this.label = label;
    this.CONNECT_CLONEABLE = false;
    this.LABEL_EDITABLE = false;
    this.ENABLE_FROM = false;
};
OG.shape.elec.NMLoad.prototype = new OG.shape.elec.Load();
OG.shape.elec.NMLoad.superclass = OG.shape.elec.Load;
OG.shape.elec.NMLoad.prototype.constructor = OG.shape.elec.NMLoad;
OG.NMLoad = OG.shape.elec.NMLoad;

OG.shape.elec.NMLoad.prototype.createShape = function () {
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
    this.geom.style = new OG.geometry.Style({
        'label-position': 'bottom',
        'label-width': 200
    });

    return this.geom;
};


OG.shape.elec.NMLoad.prototype.createSubShape = function () {
    if (!this.data) {
        return;
    }

    this.sub = [
        {
            shape: new OG.TextShape(this.data['LO_TYPE'] + ' Load'),
            width: '200%',
            height: '15%',
            left: '-50%',
            top: '-20%',
            style: {
                'font-size': 8,
                'font-color': 'red',
                'text-anchor': 'middle'
            }
        }
    ];
    return this.sub;
};