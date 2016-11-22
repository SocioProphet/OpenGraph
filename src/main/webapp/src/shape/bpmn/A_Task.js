/**
 * BPMN : Task Activity Shape
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
OG.shape.bpmn.A_Task = function (label) {
    OG.shape.bpmn.A_Task.superclass.call(this);

    this.GROUP_DROPABLE = false;
    this.SHAPE_ID = 'OG.shape.bpmn.A_Task';
    this.label = label;
    this.CONNECTABLE = true;
    this.GROUP_COLLAPSIBLE = false;
    this.LoopType = "None";
    this.TaskType = "None";
    this.status = "None";
    this.Events = [];

};
OG.shape.bpmn.A_Task.prototype = new OG.shape.GroupShape();
OG.shape.bpmn.A_Task.superclass = OG.shape.GroupShape;
OG.shape.bpmn.A_Task.prototype.constructor = OG.shape.bpmn.A_Task;
OG.A_Task = OG.shape.bpmn.A_Task;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.bpmn.A_Task.prototype.createShape = function () {
    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.geometry.Rectangle([0, 0], 100, 100);
    this.geom.style = new OG.geometry.Style({
        //fill: 'r[(10, 10)]#FFFFFF-#FFFFCC',
        'fill-r': 1,
        'fill-cx': .1,
        'fill-cy': .1,
        "stroke-width": 1.2,
        fill: 'r(.1, .1)#FFFFFF-#FFFFCC',
        'fill-opacity': 1,
        r: '10'
    });

    return this.geom;
};

OG.shape.bpmn.A_Task.prototype.createSubShape = function () {
    this.sub = [];

    var loopShape;
    switch (this.LoopType) {
        case 'Standard' :
            loopShape = new OG.ImageShape('resources/images/symbol/loop_standard.png');
            break;
        case 'MIParallel' :
            loopShape = new OG.MIParallel();
            break;
        case 'MISequential' :
            loopShape = new OG.MISequential();
            break;
    }
    if (loopShape) {
        this.sub.push({
            shape: loopShape,
            width: '15px',
            height: '15px',
            bottom: '5px',
            align: 'center',
            style: {}
        })
    }

    var taskTypeShape;
    switch (this.TaskType) {
        case "User":
            taskTypeShape = new OG.ImageShape("resources/images/symbol/User.png");
            break;
        case "Send":
            taskTypeShape = new OG.ImageShape('resources/images/symbol/Send.png');
            break;
        case "Receive":
            taskTypeShape = new OG.ImageShape("resources/images/symbol/Receive.png");
            break;
        case "Manual":
            taskTypeShape = new OG.ImageShape("resources/images/symbol/Manual.png");
            break;
        case "Service":
            taskTypeShape = new OG.ImageShape("resources/images/symbol/Service.png");
            break;
        case "BusinessRule":
            taskTypeShape = new OG.ImageShape("resources/images/symbol/BusinessRule.png");
            break;
        case "Script":
            taskTypeShape = new OG.ImageShape("resources/images/symbol/Script.png");
            break;
        case "Mapper":
            taskTypeShape = new OG.ImageShape("resources/images/symbol/Mapper.png");
            break;
        case "WebService":
            taskTypeShape = new OG.ImageShape("resources/images/symbol/WebService.png");
            break;
    }
    if (taskTypeShape) {
        this.sub.push({
            shape: taskTypeShape,
            width: '20px',
            height: '20px',
            top: '5px',
            left: '5px',
            style: {}
        })
    }

    var statusShape, statusAnimation;
    switch (this.status) {
        case "Completed":
            statusShape = new OG.ImageShape("resources/images/symbol/complete.png");
            break;
        case "Running":
            statusShape = new OG.ImageShape('resources/images/symbol/running.png');
            statusAnimation = new OG.RectangleShape();
            break;
    }
    if (statusShape) {
        this.sub.push({
            shape: statusShape,
            width: '20px',
            height: '20px',
            right: '25px',
            top: '5px',
            style: {}
        })
    }
    if (statusAnimation) {
        this.sub.push({
            shape: statusAnimation,
            'z-index': -1,
            width: '120%',
            height: '120%',
            left: '-10%',
            top: '-10%',
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
                'animation-repeat': true,
                "fill": "#C9E2FC",
                "stroke-width": "0.2",
                "r": "10",
                'stroke-dasharray': '--'
            }
        })
    }

    return this.sub;
};

OG.shape.bpmn.A_Task.prototype.createContextMenu = function () {
    var me = this;
    this.contextMenu = {
        'delete': true,
        'copy': true,
        'format': true,
        'text': true,
        'bringToFront': true,
        'sendToBack': true,
        'changeshape': {
            name: '변경',
            items: {
                'A_Task': {
                    name: '추상',
                    type: 'radio',
                    radio: 'changeshape',
                    value: 'OG.shape.bpmn.A_Task',
                    events: {
                        change: function (e) {
                            me.currentCanvas.getEventHandler().changeShape(e.target.value);
                        }
                    }
                },
                'A_HumanTask': {
                    name: '사용자',
                    type: 'radio',
                    radio: 'changeshape',
                    value: 'OG.shape.bpmn.A_HumanTask',
                    events: {
                        change: function (e) {
                            me.currentCanvas.getEventHandler().changeShape(e.target.value);
                        }
                    }
                },
                'A_WebServiceTask': {
                    name: '서비스',
                    type: 'radio',
                    radio: 'changeshape',
                    value: 'OG.shape.bpmn.A_WebServiceTask',
                    events: {
                        change: function (e) {
                            me.currentCanvas.getEventHandler().changeShape(e.target.value);
                        }
                    }
                },
                'A_ManualTask': {
                    name: '수동',
                    type: 'radio',
                    radio: 'changeshape',
                    value: "OG.shape.bpmn.A_ManualTask",
                    events: {
                        change: function (e) {
                            me.currentCanvas.getEventHandler().changeShape(e.target.value);
                        }
                    }
                }
            }
        },
        'addEvent': {
            name: '이벤트 추가',
            items: {
                'Message': {
                    name: '메시지',
                    type: 'radio',
                    radio: 'addEvent',
                    value: 'Message',
                    events: {
                        change: function (e) {
                            me.currentCanvas.getEventHandler().setAddEventSelectedShape(e.target.value);
                        }
                    }
                },
                'Timer': {
                    name: '타이머',
                    type: 'radio',
                    radio: 'addEvent',
                    value: 'Timer',
                    events: {
                        change: function (e) {
                            me.currentCanvas.getEventHandler().setAddEventSelectedShape(e.target.value);
                        }
                    }
                },
                'Error': {
                    name: '에러',
                    type: 'radio',
                    radio: 'addEvent',
                    value: 'Error',
                    events: {
                        change: function (e) {
                            me.currentCanvas.getEventHandler().setAddEventSelectedShape(e.target.value);
                        }
                    }
                },
                'Conditional': {
                    name: '조건부',
                    type: 'radio',
                    radio: 'addEvent',
                    value: "Conditional",
                    events: {
                        change: function (e) {
                            me.currentCanvas.getEventHandler().setAddEventSelectedShape(e.target.value);
                        }
                    }
                }
            }
        },
        'property': {
            name: '속성', callback: function () {
                me.currentCanvas.getEventHandler().showProperty();
            }
        }
    };
    return this.contextMenu;
};