OG.shape.elec.Manhole = function (image, label) {
    OG.shape.elec.Manhole.superclass.call(this, image, label);

    this.SHAPE_ID = 'OG.shape.elec.Manhole';
    this.label = label;
    this.CONNECT_CLONEABLE = false;
    this.LABEL_EDITABLE = false;

    if (!image) {
        this.image = 'resources/images/elec/manhole.svg'
    }
};
OG.shape.elec.Manhole.prototype = new OG.shape.ImageShape();
OG.shape.elec.Manhole.superclass = OG.shape.ImageShape;
OG.shape.elec.Manhole.prototype.constructor = OG.shape.elec.Manhole;
OG.Manhole = OG.shape.elec.Manhole;

OG.shape.elec.Manhole.prototype.createSubShape = function () {
    if (!this.data) {
        return;
    }

    this.sub = [

    ];
    return this.sub;
};