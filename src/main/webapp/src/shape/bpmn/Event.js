OG.shape.bpmn.Event = function (label) {
    OG.shape.bpmn.Event.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.bpmn.Event';
    this.label = label;
};
OG.shape.bpmn.Event.prototype = new OG.shape.GeomShape();
OG.shape.bpmn.Event.superclass = OG.shape.GeomShape;
OG.shape.bpmn.Event.prototype.constructor = OG.shape.bpmn.Event;
OG.Event = OG.shape.bpmn.Event;

OG.shape.bpmn.Event.prototype.createContextMenu = function () {
    var me = this;
    this.contextMenu = {
        'delete': true,
        'copy': true,
        'format': true,
        'text': true,
        'bringToFront': true,
        'sendToBack': true,

        'change': {
            name: '변경',
            items: {
                'start': {
                    name: '시작',
                    items: {
                        'start': {
                            name: '시작',
                            type: 'radio',
                            radio: 'start',
                            value: 'OG.shape.bpmn.E_Start',
                            events: {
                                change: function (e) {
                                    me.currentCanvas.getEventHandler().changeShape(e.target.value);
                                }
                            }
                        },
                        'start_message': {
                            name: '메시지 시작',
                            type: 'radio',
                            radio: 'start',
                            value: 'OG.shape.bpmn.E_Start_Message',
                            events: {
                                change: function (e) {
                                    me.currentCanvas.getEventHandler().changeShape(e.target.value);
                                }
                            }
                        },
                        'start_timer': {
                            name: '타이머 시작',
                            type: 'radio',
                            radio: 'start',
                            value: 'OG.shape.bpmn.E_Start_Timer',
                            events: {
                                change: function (e) {
                                    me.currentCanvas.getEventHandler().changeShape(e.target.value);
                                }
                            }
                        },
                        'start_conditional': {
                            name: '조건부 시작',
                            type: 'radio',
                            radio: 'start',
                            value: 'OG.shape.bpmn.E_Start_Rule',
                            events: {
                                change: function (e) {
                                    me.currentCanvas.getEventHandler().changeShape(e.target.value);
                                }
                            }
                        }
                    }
                },
                'intermediate': {
                    name: '중간',
                    items: {
                        'intermediate': {
                            name: '중간',
                            type: 'radio',
                            radio: 'intermediate',
                            value: 'OG.shape.bpmn.E_Intermediate',
                            events: {
                                change: function (e) {
                                    me.currentCanvas.getEventHandler().changeShape(e.target.value);
                                }
                            }
                        },
                        'intermediate_openMessage': {
                            name: '열린 메시지 중간',
                            type: 'radio',
                            radio: 'intermediate',
                            value: 'OG.shape.bpmn.E_Intermediate_Message',
                            events: {
                                change: function (e) {
                                    me.currentCanvas.getEventHandler().changeShape(e.target.value);
                                }
                            }
                        },
                        'intermediate_closeMessage': {
                            name: '닫힌 메시지 중간',
                            type: 'radio',
                            radio: 'intermediate',
                            value: 'OG.shape.bpmn.E_Intermediate_MessageFill',
                            events: {
                                change: function (e) {
                                    me.currentCanvas.getEventHandler().changeShape(e.target.value);
                                }
                            }
                        },
                        'intermediate_timer': {
                            name: '타이머 중간',
                            type: 'radio',
                            radio: 'intermediate',
                            value: 'OG.shape.bpmn.E_Intermediate_Timer',
                            events: {
                                change: function (e) {
                                    me.currentCanvas.getEventHandler().changeShape(e.target.value);
                                }
                            }
                        },
                        'intermediate_conditional': {
                            name: '조건부 중간',
                            type: 'radio',
                            radio: 'intermediate',
                            value: 'OG.shape.bpmn.E_Intermediate_Rule',
                            events: {
                                change: function (e) {
                                    me.currentCanvas.getEventHandler().changeShape(e.target.value);
                                }
                            }
                        }
                    }
                },
                'end': {
                    name: '종료',
                    items: {
                        'end': {
                            name: '종료',
                            type: 'radio',
                            radio: 'end',
                            value: 'OG.shape.bpmn.E_End',
                            events: {
                                change: function (e) {
                                    me.changeShape(e.target.value);
                                }
                            }
                        },
                        'end_message': {
                            name: '메시지 종료',
                            type: 'radio',
                            radio: 'end',
                            value: 'OG.shape.bpmn.E_End_Message',
                            events: {
                                change: function (e) {
                                    me.changeShape(e.target.value);
                                }
                            }
                        },
                        'end_process': {
                            name: '프로세스 종료',
                            type: 'radio',
                            radio: 'end',
                            value: 'OG.shape.bpmn.E_Terminate',
                            events: {
                                change: function (e) {
                                    me.changeShape(e.target.value);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    return this.contextMenu;
};