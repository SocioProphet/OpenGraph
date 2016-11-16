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
        {
            shape: new OG.TextShape(
                'LOC_REF_NAME : ' + this.data['LOC_REF_NAME']
                + '\n' + 'LOC_REF_TEMP : ' + this.data['LOC_REF_TEMP']
                + '\n' + 'LOC_REF_LENGTH : ' + this.data['LOC_REF_LENGTH']
                + '\n' + 'LOC_REF_REM : ' + this.data['LOC_REF_REM']
            ),
            width: 1000,
            height: 80,
            left: 120,
            top: 5,
            style: {
                'font-size': 8,
                'font-color': 'gray',
                'text-anchor': 'start',
                'vertical-align': 'top'
            },
            'z-index': -1,
        },
        {
            shape: new OG.RectangleShape(),
            width: 100,
            height: 100,
            left: 0,
            top: 0,
            style: {
                'fill-opacity': 1,
                animation: [
                    {
                        start: {
                            fill: 'white'
                        },
                        to: {
                            fill: '#C9E2FC'
                        },
                        ms: 1000
                    },
                    {
                        start: {
                            fill: '#C9E2FC'
                        },
                        to: {
                            fill: 'white'
                        },
                        ms: 1000,
                        delay: 1000
                    }
                ],
                'animation-repeat': true
            },
            'z-index': -2,
        }
    ];
    return this.sub;
};