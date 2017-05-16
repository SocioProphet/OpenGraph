OG.shape.component.DataTable = function () {
    OG.shape.component.DataTable.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.component.DataTable';
    this.options = {
        pageLength: 25,
        currentPage: 1,
        cellEditable: true,
        axis : 'none'
    }
    this.CONNECT_CLONEABLE = false;
    this.LABEL_EDITABLE = false;
    this.CONNECTABLE = false;
    this.RESIZABLE = false;


    var renderer = function (value) {
        if (value && value.text) {
            return value.text;
        }
        if (!value || !value.type || !value.value) {
            return value;
        }

        if (value.type == 'activity') {
            return {
                /**
                 * 도형 shape
                 */
                shape: new OG.A_Task(value.value),
                'shape-position': {
                    /**
                     * 도형 가로 (number,px,%)
                     */
                    width: '80px',
                    /**
                     * 도형 세로 (number,px,%)
                     */
                    height: '38px',
                    /**
                     * 좌측으로 부터 위치값. (number,px,%)
                     */
                    left: '0',
                    /**
                     * 상단으로 부터 위치값. (number,px,%)
                     */
                    top: '0',
                    /**
                     * 우측으로 부터 위치값. (number,px,%)
                     */
                    right: '0',
                    /**
                     * 하단으로 부터 위치값. (number,px,%)
                     */
                    bottom: '0',
                    /**
                     * 가로 정렬 (left,center,right).
                     */
                    align: 'center',
                    /**
                     * 세로 정렬 (top,middle,bottom)
                     */
                    'vertical-align': 'middle'
                },
                /**
                 * 도형 스타일
                 */
                'shape-style': {
                    'fill': '#fff',
                    'fill-opacity': 1,
                    'font-size': 9
                }
            }
        }

        if (value.type == 'doubleActivity') {
            return {
                shape: new OG.A_Task(value.value),
                'shape-position': {
                    width: '80px',
                    height: '78px',
                    top: '1px',
                    align: 'center'
                },
                'shape-style': {
                    'fill': '#f8f8f8',
                    'fill-opacity': 1,
                    'font-size': 9
                }
            }
        }
        if (value.type == 'horizontalActivity') {
            return {
                shape: new OG.A_Task(value.value),
                'shape-position': {
                    width: '160px',
                    height: '38px',
                    align: 'center',
                    'vertical-align': 'middle'
                },
                'shape-style': {
                    'fill': '#f8f8f8',
                    'fill-opacity': 1,
                    'font-size': 9
                }
            }
        }
        if (value.type == 'largeActivity') {
            return {
                shape: new OG.A_Task(value.value),
                'shape-position': {
                    width: '80px',
                    height: '600px',
                    align: 'center',
                    'vertical-align': 'middle'
                },
                'shape-style': {
                    'fill': '#f8f8f8',
                    'fill-opacity': 1,
                    'font-size': 9
                }
            }
        }
        if (value.type == 'report') {
            return {
                shape: new OG.A_Task(value.value),
                'shape-position': {
                    width: '100px',
                    height: '68px',
                    align: 'center',
                    'vertical-align': 'middle'
                },
                'shape-style': {
                    'fill': '#f8f8f8',
                    'fill-opacity': 1,
                    'font-size': 9
                }
            }
        }
    }

    //옵션데이터
    this.options = {
        /**
         * 셀 에디팅
         */
        cellEditable: false,
        /**
         * 셀 콘텐트 axis 무브
         */
        axis : 'X',
        /**
         * 페이지당 row 수
         */
        pageLength: 25,
        /**
         * 시작 페이지
         */
        currentPage: 1,
        /**
         * 디폴트 칼럼 높이
         */
        columnHeight: 30,
        /**
         * 디폴트 칼럼 가로폭
         */
        columnWidth: 140,
        /**
         * 디폴트 칼럼 스타일
         */
        columnStyle: {
            'font-color': '#fff',
            'fill': '#abaaad',
            'fill-opacity': 1,
            'border': {
                'stroke': '#abaaad',
                'stroke-width': '1',
                'arrow-end': 'none',
                'arrow-start': 'none'
            },
            'border-bottom': {
                'stroke': '#616063',
                'stroke-width': '4'
            }
        },
        /**
         * 디폴트 cell 높이
         */
        cellHeight: 40,
        /**
         * 디폴트 셀 스타일
         */
        cellStyle: {
            'fill': '#fff',
            'fill-opacity': 1,
            'border': {
                'stroke': 'none',
                'stroke-width': '1',
                'arrow-end': 'none',
                'arrow-start': 'none'
            },
            'border-top': {
                'stroke': '#abaaad',
                'stroke-width': '1'
            },
            'border-bottom': {
                'stroke': '#abaaad',
                'stroke-width': '1'
            }
        },
        /**
         * 칼럼 정의
         */
        columns: [
            {
                /**
                 * 데이터 필드 이름
                 */
                data: 'activity',
                /**
                 * 칼럼 타이틀
                 */
                title: '주요 Activity\n일정(D day)',
                /**
                 * 디폴트 컨텐츠
                 */
                defaultContent: '',
                /**
                 * 칼럼 너비
                 */
                columnWidth: 100,
                /**
                 * 칼럼 스타일
                 */
                columnStyle: {
                    'border-right': {
                        'stroke': '#616063',
                        'stroke-width': '3'
                    }
                },
                /**
                 * 칼럼에 소속된 셀 스타일
                 */
                cellStyle: {
                    'border-right': {
                        'stroke': '#616063',
                        'stroke-width': '3'
                    },
                    'border-left': {
                        'stroke': '#abaaad',
                        'stroke-width': '1'
                    }
                }
            },
            {
                data: '90',
                title: '견적 착수\n90',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '85',
                title: 'IRS\n85',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '80',
                title: 'Ref.PJT 선정',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '75',
                title: 'HBD\n75',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '70',
                title: 'WBD\n70',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '65',
                title: 'P&ID\n65',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '60',
                title: 'P&ID\n60',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '55',
                title: 'P&ID\n55',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '50',
                title: 'P&ID\n50',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '45',
                title: 'P&ID\n45',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '40',
                title: 'Plot Plan\n40',
                defaultContent: '',
                cellStyle: {
                    'border-right': {
                        'stroke': '#abaaad',
                        'stroke-width': '1'
                    }
                },
                renderer: renderer
            }
        ]
    }

    this.data = {};

    //테이블 뷰 데이터
    this.data.viewData = {
        pageLength: undefined,
        currentPage: undefined,
        columnHeight: undefined,
        columns: {},
        rows: []
    }
};
OG.shape.component.DataTable.prototype = new OG.shape.GroupShape();
OG.shape.component.DataTable.superclass = OG.shape.GroupShape;
OG.shape.component.DataTable.prototype.constructor = OG.shape.component.DataTable;
OG.DataTable = OG.shape.component.DataTable;

OG.shape.component.DataTable.prototype.createShape = function () {
    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.geometry.Rectangle([0, 0], 100, 100);
    this.geom.style = new OG.geometry.Style({
        'fill': '#ffffff',
        'fill-opacity': 0,
        'font-size': 10,
        'font-color': 'white',
        'stroke': 'none'
    });
    return this.geom;
};

/**
 * 테이블의 옵션을 변경한다.
 * @param options
 */
OG.shape.component.DataTable.prototype.setOptions = function (options) {
    if (options) {
        for (var key in options) {
            this.options[key] = options[key];
        }
    }
}

/**
 * 테이블의 옵션을 반환한다.
 * @return options
 */
OG.shape.component.DataTable.prototype.getOptions = function () {
    return this.options;
}

/**
 * 테이블의 데이터를 업데이트 한다.
 * @param data
 */
OG.shape.component.DataTable.prototype.setData = function (data) {
    if (!this.data) {
        this.data = {};
    }
    this.data.tableData = data;
}

/**
 * 두개의 셀을 Edge 로 연결한다. 셀에 컨텐츠가 있을 경우만 기능한다.
 *
 * @param {Element} fromCell from Cell Element
 * @param {Element} toCell to Cell Element
 * @param {OG.geometry.Style|Object} style 스타일
 * @param {String} label Label
 * @param fromP fromElement 와 연결될 터미널 좌표 [x,y](optional)
 * @param toP toElement 와 연결될 터미널 좌표 [x,y](optional)
 * @param preventTrigger 참 일 경우 이벤트 발생을 방지
 * @param id 연결선의 아이디
 * @param {Element} edgeShape 이 값이 없으면 신규 OG.EdgeShape 를 생성
 * @returns {*|Element}
 */
OG.shape.component.DataTable.prototype.connect = function (fromCell, toCell, style, label, fromP, toP, preventTrigger, id, edgeShape) {
    var me = this;
    var fromData = me.getCellInformation(fromCell);
    var toData = me.getCellInformation(toCell);
    if (fromData.contentElement && toData.contentElement) {
        return me.currentCanvas.connect(fromData.contentElement, toData.contentElement, style, label, fromP, toP, preventTrigger, id, edgeShape);
    } else {
        return null;
    }
}

/**
 * 주어진 좌표를 포함하는 셀을 얻어온다.
 */
OG.shape.component.DataTable.prototype.getCellFromOffset = function (offset) {
    var me = this;
    var rows, cells, cell, expectCell, boundary;
    rows = me.data.viewData.rows;
    $.each(rows, function (index, row) {
        cells = row.cells;
        if (cells) {
            for (var field in cells) {
                cell = me.currentCanvas.getElementById(cells[field]['cellId']);
                if (cell) {
                    boundary = me.currentCanvas.getBoundary(cell);
                    if (boundary.isContains(offset)) {
                        expectCell = cell;
                    }
                }
            }
        }
    })
    return expectCell;
}

/**
 * 컨텐트 엘리먼트로부터 셀을 얻어온다.
 * @param contentElement
 * @return OG.Cell
 */
OG.shape.component.DataTable.prototype.getCellFromContent = function (contentElement) {
    var me = this;
    var rows, cells, cell = null;
    if (contentElement && contentElement.nodeType == 1 && me.currentCanvas.getRenderer().isShape(contentElement)) {
        rows = me.data.viewData.rows;
        cells = [];
        $.each(rows, function (index, row) {
            cells = row.cells;
            if (cells) {
                for (var field in cells) {
                    if (cells[field]['shapeId'] == contentElement.id) {
                        cell = me.currentCanvas.getElementById(cells[field]['cellId']);
                    }
                }
            }
        })
    }
    return cell;
}

/**
 * 셀의 value 를 복사한다.
 * @param fromCell
 * @param toCell
 * @return copyValue
 */
OG.shape.component.DataTable.prototype.copyCellValue = function (fromCell, toCell) {
    var me = this;
    var fromData = me.getCellInformation(fromCell);
    var toData = me.getCellInformation(toCell);
    var value = me.data.tableData[fromData.rowDataIndex][fromData.column];
    if (typeof value == 'object') {
        me.data.tableData[toData.rowDataIndex][toData.column] = JSON.parse(JSON.stringify(value));
    } else {
        me.data.tableData[toData.rowDataIndex][toData.column] = value;
    }
    return me.data.tableData[toData.rowDataIndex][toData.column];
}

/**
 * 셀을 원상복귀하여 다시 그린다.
 * @param cell
 */
OG.shape.component.DataTable.prototype.redrawCell = function (cell) {
    var me = this;
    var data = me.getCellInformation(cell);
    me.drawCell(data.columnOption, data.value, null, data.cellIndex, data.rowIndex, data.rowDataIndex, 'saved');
}

/**
 * 셀을 잘라내기 하여, 다른 셀로 복사한다.
 * @param fromCell
 * @param toCell
 */
OG.shape.component.DataTable.prototype.cutAndPasteCell = function (fromCell, toCell) {
    var me = this;
    var fromData = me.getCellInformation(fromCell);
    var fromText = fromData.text;

    //value 복사
    var copyValue = me.copyCellValue(fromCell, toCell);

    //content 가 있을경우 content update
    if (fromData.contentElement) {
        var shapePosition = me.data.viewData.rows[fromData.rowIndex].cells[fromData.column]['shape-position'];
        me.updateCell(toCell, copyValue, fromText, fromData.contentElement, shapePosition, true);
    }
    //content 가 없을경우 value update
    else {
        me.updateCell(toCell, copyValue, fromText, null, null, true);
    }
    //기존 셀을 클리어한다.
    me.emptyCell(fromCell, true);
}

/**
 * 셀을 내용을 다른 셀로 복사한다.
 * value, cell 라벨, contentElement 와 그에 따른 shape-position 을 복사한다.
 * @param fromCell
 * @param toCell
 */
OG.shape.component.DataTable.prototype.copyAndPasteCell = function (fromCell, toCell) {
    var me = this;
    var fromData = me.getCellInformation(fromCell);
    var fromText = fromData.text;

    //value 복사
    var copyValue = me.copyCellValue(fromCell, toCell);

    //content 가 있을경우
    if (fromData.contentElement) {
        var shapePosition = me.data.viewData.rows[fromData.rowIndex].cells[fromData.column]['shape-position'];
        var copyElement = me.currentCanvas.getRenderer().copyShape(fromData.contentElement, [0, 0]);
        me.updateCell(toCell, copyValue, fromText, copyElement, shapePosition, true);
    }
    //content 가 없을경우
    else {
        me.updateCell(toCell, copyValue, fromText, null, null, true);
    }
}

/**
 * Cell 의 viewData 에 저장된 연결정보를 바탕으로 Cell 의 컨텐트에 Edge 를 재연결시킨다.
 * @param cell
 */
OG.shape.component.DataTable.prototype.reconnectEdgesToContent = function (cell) {
    var me = this;
    var edge, shapeId, replace, fromTerminal, toTerminal, direction;
    var data = me.getCellInformation(cell);
    var connection = me.data.viewData.rows[data.rowDataIndex].cells[data.column]['connection'];
    if (connection && connection.length && data.contentElement) {
        for (var i = 0, leni = connection.length; i < leni; i++) {
            edge = me.currentCanvas.getElementById(connection[i].edgeId);
            fromTerminal = connection[i].from;
            toTerminal = connection[i].to;
            direction = connection[i].direction;

            if (!edge) {
                continue;
            }
            if (direction == 'from') {
                shapeId = fromTerminal.substring(0, fromTerminal.indexOf(OG.Constants.TERMINAL));
                replace = fromTerminal.replace(shapeId, data.contentElement.id);
                me.currentCanvas.getRenderer().connect(replace, toTerminal, edge, null, null, true);
            }
            if (direction == 'to') {
                shapeId = toTerminal.substring(0, toTerminal.indexOf(OG.Constants.TERMINAL));
                replace = toTerminal.replace(shapeId, data.contentElement.id);
                me.currentCanvas.getRenderer().connect(fromTerminal, replace, edge, null, null, true);
            }
        }
        me.data.viewData.rows[data.rowDataIndex].cells[data.column]['connection'] = [];
    } else if (connection && connection.length && !data.contentElement) {
        for (var i = 0, leni = connection.length; i < leni; i++) {
            edge = me.currentCanvas.getElementById(connection[i].edgeId);
            if (edge) {
                me.currentCanvas.removeShape(edge, true);
            }
        }
    }
}

/**
 * Cell 의 콘텐트와 연결된 Edge 를 연결 해제하고, 재연결 정보를 viewData 에 저장한다.
 * @param cell
 */
OG.shape.component.DataTable.prototype.keepEdgesFromContent = function (cell) {
    var me = this;
    var data = me.getCellInformation(cell);
    var edge, fromShape, toShape, fromXY, toXY;
    if (data.contentElement) {
        var prevEdges = me.currentCanvas.getPrevEdges(data.contentElement);
        var nextEdges = me.currentCanvas.getNextEdges(data.contentElement);
        var edges = prevEdges.concat(nextEdges);
        for (var i = 0, leni = edges.length; i < leni; i++) {
            edge = edges[i];
            var fromTerminal = $(edge).attr("_from");
            var toTerminal = $(edge).attr("_to");
            var direction;

            if (fromTerminal) {
                fromShape = me.currentCanvas.getRenderer()._getShapeFromTerminal(fromTerminal);
                fromXY = me.currentCanvas.getRenderer()._getPositionFromTerminal(fromTerminal);
                if (fromShape && fromShape.id == data.contentElement.id) {
                    me.currentCanvas.getRenderer().disconnectOneWay(edge, 'from');
                    direction = 'from';
                }
            }

            if (toTerminal) {
                toShape = me.currentCanvas.getRenderer()._getShapeFromTerminal(toTerminal);
                toXY = me.currentCanvas.getRenderer()._getPositionFromTerminal(toTerminal);
                if (toShape && toShape.id == data.contentElement.id) {
                    me.currentCanvas.getRenderer().disconnectOneWay(edge, 'to');
                    direction = 'to';
                }
            }
            if (!me.data.viewData.rows[data.rowDataIndex].cells[data.column]['connection']) {
                me.data.viewData.rows[data.rowDataIndex].cells[data.column]['connection'] = [];
            }

            var connection = me.data.viewData.rows[data.rowDataIndex].cells[data.column]['connection'];
            connection.push({
                edgeId: edge.id,
                from: fromTerminal,
                to: toTerminal,
                direction: direction
            });
        }
    }
}

/**
 * 셀의 내용을 주어진 value 와 Element 로 교체한다.
 * @param cell OG.Cell
 * @param value 업데이트 할 데이터 값
 * @param text 셀 텍스트
 * @param contentElement OG Element | string
 * @param shapePosition 셀 내부 포지션 정보 optional
 * @param ignoreRenderer {boolean} 옵션의 칼럼 렌더러를 무시하는 여부.
 */
OG.shape.component.DataTable.prototype.updateCell = function (cell, value, text, contentElement, shapePosition, ignoreRenderer) {
    var me = this;
    var data = me.getCellInformation(cell);

    //contentElement 가 있는 경우
    if (contentElement && contentElement.nodeType == 1 && me.currentCanvas.getRenderer().isShape(contentElement)) {

        //업데이트 대상 셀을 초기화하되, 동일 컨텐트인 경우 컨텐트 삭제를 방지한다.
        if (data.contentElement && data.contentElement.id == contentElement.id) {
            me.emptyCell(cell, true);
        }
        //동일 컨텐트가 아닐 경우
        else {
            //신규 컨텐트에 기존 셀의 Edge 를 연결시키기 위해 Edge 를 해체한다.
            me.keepEdgesFromContent(cell);
            //셀을 비운다.
            me.emptyCell(cell);
        }

        //컨텐트의 addToGroup 을 실행시킴으로서 이전 테이블과의 연결고리가 있다면 끊도록 한다.
        contentElement.shape.onAddToGroup(me.currentElement, contentElement);

        //현재 테이블 내에서 컨텐트를 사용하는 셀을 조회하여, 존재한다면 초기화한다.
        var beforeCell = me.getCellFromContent(contentElement);
        if (beforeCell) {
            me.emptyCell(beforeCell, true);
        }

        me.data.viewData.rows[data.rowIndex].cells[data.column]['shapeId'] = contentElement.id;
        me.data.viewData.rows[data.rowIndex].cells[data.column]['shape-position'] = shapePosition;
        me.drawCell(data.columnOption, value, text, data.cellIndex, data.rowIndex, data.rowDataIndex, ignoreRenderer);
    }
    //그 외의 경우는 cell 의 내용을 삭제 후 다시 그린다.
    else {
        me.emptyCell(cell);
        me.drawCell(data.columnOption, value, text, data.cellIndex, data.rowIndex, data.rowDataIndex, ignoreRenderer);
    }

    //데이터를 업데이트 한다.
    me.data.tableData[data.rowDataIndex][data.column] = value;
}

/**
 * 셀의 정보를 가져온다.
 * @param cell
 * @return {Object}
 * {
 *       type: 'column' | 'cell'
 *       rowDataIndex: 15,
 *       rowIndex: 5,
 *       cellIndex: 4,
 *       column: 'AAA',
 *       value: "value",
 *       cellElement: OG Element
 *       cellId: "id",
 *       tableElement: OG Element
 *       tableId: "id",
 *       contentElement: OG Element
 *       shapeId: "id",
 *       'shape-position': {top , left, right, bottom, align, vertical-align, width, height, vertices},
 *       ignoreRenderer : true,
 *       text: "text"
 * }
 */
OG.shape.component.DataTable.prototype.getCellInformation = function (cell) {
    var me = this;
    var dataTable = JSON.parse(JSON.stringify(cell.shape.data.dataTable));
    dataTable.cellElement = me.currentCanvas.getElementById(dataTable.cellId);
    dataTable.tableElement = me.currentElement;
    dataTable.contentElement = me.currentCanvas.getElementById(dataTable.shapeId);
    dataTable.columnOption = me.getColumnByField(dataTable.column);
    return dataTable;
}

/**
 * 셀의 내용 및 데이터를 삭제한다.
 * @param cell OG.Cell
 * @param preventRemoveContent {boolean} 컨텐트 삭제 방지 여부
 */
OG.shape.component.DataTable.prototype.emptyCell = function (cell, preventRemoveContent) {
    var me = this;
    var data = me.getCellInformation(cell);
    if (data.contentElement && !preventRemoveContent) {
        me.currentCanvas.removeShape(data.contentElement, true);
    }

    me.data.viewData.rows[data.rowIndex].cells[data.column]['shapeId'] = null;
    me.data.viewData.rows[data.rowIndex].cells[data.column]['shape-position'] = null;

    cell.shape.data.dataTable['shapeId'] = null;
    cell.shape.data.dataTable['shape-position'] = null;

    me.data.tableData[data.rowDataIndex][data.column] = null;

    me.drawCell(data.columnOption, null, null, data.cellIndex, data.rowIndex, data.rowDataIndex, true);
}

/**
 * 필드명에 해당하는 옵션의 컬럼 정보를 반환한다.
 * @param field
 * @returns {*}
 */
OG.shape.component.DataTable.prototype.getColumnByField = function (field) {
    var me = this;
    for (var i = 0, leni = me.options.columns.length; i < leni; i++) {
        if (me.options.columns[i].data == field) {
            return me.options.columns[i];
        }
    }
}

/**
 * 현재 테이블의 cell, row 인덱스 값으로 cell 을 반환한다.
 * @param cellIndex
 * @param rowIndex
 * @return OG.Cell
 */
OG.shape.component.DataTable.prototype.getCellFromTableIndex = function (cellIndex, rowIndex) {
    var me = this;
    var column = me.options.columns[cellIndex];
    if (!column) {
        throw new Error('cellIndex ' + cellIndex + ' is out bound from table columns');
    }
    var row = me.data.viewData.rows[rowIndex];
    if (!row) {
        throw new Error('rowIndex ' + rowIndex + ' is out bound from table rows');
    }
    var field = column['data'];
    var cellId = me.data.viewData.rows[rowIndex].cells[field].cellId;
    return me.currentCanvas.getElementById(cellId);
}

/**
 * 주어진 칼럼과 데이터를 바탕으로, 범위에서 벗어난 셀들을 모두 삭제한다.
 */
OG.shape.component.DataTable.prototype.removeOutRangeCells = function (columns, dataToDraw) {
    var me = this
    var columnToRemove = [];

    //칼럼 삭제
    var columnViews = me.data.viewData.columns;
    for (var field in columnViews) {
        var isExist = false;
        for (var i = 0, leni = columns.length; i < leni; i++) {
            if (columns[i].data == field) {
                isExist = true;
            }
        }
        if (!isExist) {
            var cellId = columnViews[field]['cellId'];
            if (me.currentCanvas.getElementById(cellId)) {
                me.currentCanvas.removeShape(cellId);
            }
            delete columnViews[field];
            columnToRemove.push(field);
        }
    }

    //row 삭제
    var row;
    var toDrawRowLength = dataToDraw.data.length;
    var currentRowLength = me.data.viewData.rows.length;

    for (var r = 0; r < currentRowLength; r++) {
        row = me.data.viewData.rows[r];
        for (var key in row.cells) {
            var cellId = row.cells[key].cellId;
            var shapeId = row.cells[key].shapeId;
            var cellToRemove = false;

            //데이터 영역 밖의 row 는 전부 삭제한다.
            if ((r + 1) > toDrawRowLength) {
                cellToRemove = true;
            }

            //데이터 영역 안의 row 중 columnToRemove 에 속한 셀은 삭제한다.
            else if (columnToRemove.indexOf(key) != -1) {
                cellToRemove = true;
            }

            if (cellToRemove) {
                if (me.currentCanvas.getElementById(cellId)) {
                    me.currentCanvas.removeShape(cellId);
                }
                if (shapeId && me.currentCanvas.getElementById(shapeId)) {
                    me.currentCanvas.removeShape(shapeId);
                }
            }
        }
    }
    me.data.viewData.rows.splice(toDrawRowLength, currentRowLength);
}

/**
 * 리사이즈로 인한 draw 여부.
 * @param isResize
 */
OG.shape.component.DataTable.prototype.draw = function (isResize) {
    //TODO
    //페이지 api
    //콘텐트 등록 api, row, cell api
    //http://tutorials.jenkov.com/svg/clip-path.html 클립패스를 사용하여 그리드 부분을 래핑하고, 스크롤을 구현할 것.

    var me = this;

    if (!me.options.columns) {
        throw new Error('No column options to render');
    }
    if (!me.data || !me.data.tableData) {
        throw new Error('No table data to render');
    }

    var boundary = me.currentCanvas.getBoundary(me.currentElement);
    var startP = boundary.getUpperLeft();
    var startX = startP.x;
    var startY = startP.y;
    var nextY;
    var columnElement, cellElement;
    var columnBoundary, cellBoundary;

    //칼럼 리스트
    var columns = me.options.columns;
    var column;

    //드로잉 할 데이터 영역구하기
    var dataToDraw = me.getDataToDraw();

    //칼럼, dataToDraw 영역 밖에 요소 삭제하기.
    if (!isResize) {
        me.removeOutRangeCells(columns, dataToDraw);
    }

    //칼럼 그리기
    for (var i = 0, leni = columns.length; i < leni; i++) {
        columnElement = me.drawColumn(columns[i], i, [startX, startY]);
        columnBoundary = me.currentCanvas.getBoundary(columnElement);
        //nextY 에는 다음 row 를 위한 값을 지정한다.
        nextY = startY + columnBoundary.getHeight();
        //다음 셀의 시작 x 를 증가시킨다.
        startX = startX + columnBoundary.getWidth();
    }

    //데이터 그리기
    me.data.viewData.pageLength = dataToDraw.pageLength;
    me.data.viewData.currentPage = dataToDraw.currentPage;
    var rowData;
    var rowDataIndex;
    var rowIndex;
    for (var d = 0, lend = dataToDraw.data.length; d < lend; d++) {

        //그려야 할 row
        rowData = dataToDraw.data[d];
        rowIndex = d;
        rowDataIndex = me.data.viewData.pageLength * (me.data.viewData.currentPage - 1) + d;

        //starX 는 원점으로 돌린다. //startY 는 nextY 를 상속한다.
        startX = startP.x;
        startY = nextY;

        //셀 그리기
        for (var c = 0, lenc = columns.length; c < lenc; c++) {
            //rowData 에 칼럼에 해당하는 필드가 있는지 찾는다.
            var value = null;
            for (var key in rowData) {
                if (columns[c].data == key) {
                    value = rowData[key];
                }
            }

            if (isResize) {
                cellElement = me.drawCell(columns[c], value, null, c, rowIndex, rowDataIndex, 'saved', [startX, startY], false);
            } else {
                cellElement = me.drawCell(columns[c], value, null, c, rowIndex, rowDataIndex, 'saved', [startX, startY], true);
            }

            cellBoundary = me.currentCanvas.getBoundary(cellElement);
            //nextY 에는 다음 row 를 위한 값을 지정한다.
            nextY = startY + cellBoundary.getHeight();

            //다음 셀의 시작 x 를 증가시킨다.
            startX = startX + cellBoundary.getWidth();
        }
    }

    //startX, nextY 가 최종 테이블의 사이즈가 된다.
    var currentWidth = boundary.getWidth();
    var currentHeight = boundary.getHeight();
    var expectWidth = startX - startP.x;
    var expectHeight = nextY - startP.y;
    me.currentCanvas.resize(me.currentElement, [0, expectHeight - currentHeight, 0, expectWidth - currentWidth]);

}

OG.shape.component.DataTable.prototype.getCellStyle = function (type, column, rowIndex, rowDataIndex) {
    var me = this;
    var viewHeight, viewWidth, style;

    //값의 우선순위 : options 값 < option 칼럼값 < view 값
    if (type == 'column') {
        //높이 얻기
        viewHeight = me.data.viewData.columnHeight;
        if (!viewHeight) {
            me.data.viewData.columnHeight = me.options.columnHeight;
            viewHeight = me.options.columnHeight;
        }

        //가로 얻기
        var viewColumn = me.data.viewData.columns[column.data];
        if (!viewColumn) {
            viewWidth = column.columnWidth ? column.columnWidth : me.options.columnWidth;
        } else {
            viewWidth = viewColumn.width
        }

        //스타일 얻기
        style = column.columnStyle;
        if (!style) {
            style = JSON.parse(JSON.stringify(me.options.columnStyle));
        } else {
            var copy = JSON.parse(JSON.stringify(me.options.columnStyle));
            for (var key in style) {
                copy[key] = style[key];
            }
            style = copy;
        }
    }

    //값의 우선순위 - height:  options.cellHeight 값 < viewData.rows[rowIndex].rowHeight 값
    //값의 우선순위 - width: viewData.columns[column.data].width
    // 값의 우선순위 - style : options.cellStyle 값 < column.cellStyle 값
    else if (type == 'cell') {
        //rowIndex 뷰데이터 채우기
        var rowIndexView = me.data.viewData.rows[rowIndex];
        //뷰데이터에 해당 row 가 없을경우 새로 생성한다.
        if (!rowIndexView) {
            me.data.viewData.rows[rowIndex] = {
                rowHeight: me.options.cellHeight,
                rowIndex: rowIndex
            }
        }
        //rowDataIndex 는 매번 달라질 수 있으므로 뷰데이터에 덮어쓰도록 한다.
        me.data.viewData.rows[rowIndex].rowDataIndex = rowDataIndex;

        //높이 얻기
        viewHeight = me.data.viewData.rows[rowIndex]['rowHeight'];
        if (!viewHeight) {
            me.data.viewData.rows[rowIndex]['rowHeight'] = me.options.cellHeight;
            viewHeight = me.options.cellHeight;
        }

        //가로 얻기
        viewWidth = me.data.viewData.columns[column.data].width;

        //스타일 얻기
        style = column.cellStyle;
        if (!style) {
            style = JSON.parse(JSON.stringify(me.options.cellStyle));
        } else {
            var copy = JSON.parse(JSON.stringify(me.options.cellStyle));
            for (var key in style) {
                copy[key] = style[key];
            }
            style = copy;
        }
    }

    return {
        size: [viewWidth, viewHeight],
        style: style
    };
}

/**
 * 셀 내부의 컨텐츠를 그린다.
 * @param column
 * @param cellElement
 * @param contentElement
 * @param renderData
 * @returns {*}
 */
OG.shape.component.DataTable.prototype.drawCellContent = function (column, cellElement, contentElement, renderData) {
    var me = this;
    var rowIndex = cellElement.shape.data.dataTable.rowIndex;
    var cellView = me.data.viewData.rows[rowIndex].cells[column.data];

    //shapePosition 이 없을경우 빈 오브젝트
    if (!renderData['shape-position']) {
        renderData['shape-position'] = {}
    }

    var shapePosition = JSON.parse(JSON.stringify(renderData['shape-position']));
    var width = shapePosition.width;
    var height = shapePosition.height;
    var left = shapePosition.left;
    var top = shapePosition.top;
    var right = shapePosition.right;
    var bottom = shapePosition.bottom;
    var align = shapePosition.align;
    var verticalAlign = shapePosition['vertical-align'];
    var vertices = shapePosition.vertices ? JSON.parse(JSON.stringify(shapePosition.vertices)) : null;
    var renderStyle = renderData['shape-style'] ? renderData['shape-style'] : {};
    var renderShape = renderData.shape;

    var boundary = me.currentCanvas.getBoundary(cellElement);
    var bW = boundary.getWidth();
    var bH = boundary.getHeight();
    var bL = boundary.getUpperLeft().x;
    var bT = boundary.getUpperLeft().y;

    //렌더 데이터를 검수한다.
    //1. shape 이 등록되지 않은 경우 리턴한다.
    if (!renderShape) {
        return contentElement;
    }

    //2. vertices 로 생성되는 edge edgeMadeByVertices 로 등록한다.
    var edgeMadeByVertices = false;
    if (renderShape instanceof OG.shape.EdgeShape && vertices && vertices.length) {
        edgeMadeByVertices = true;
    }

    //3. width, height 가 없고 edgeMadeByVertices 가 아니라면, geom 으로부터 원본크기를 얻어온다.
    if ((!width && width != 0) || (!height && height != 0) && !edgeMadeByVertices) {
        if (!renderShape.geom) {
            throw new Error('아직 그려지지 않은 도형에서는 shape-position 정보(width,height) 를 자동 생성할 수 없습니다.');
        } else {
            var envelope = renderShape.geom.getBoundary();
            width = envelope.getWidth();
            height = envelope.getHeight();
        }
    }

    //4. 위치 정보가 없고 edgeMadeByVertices 가 아니라면, 센터 포지션을 지정하도록 한다.
    //left , right , align 이 없을 경우 align 을 센터로.
    if ((!left && left != 0) && (!right && right != 0) && !align) {
        align = 'center';
    }
    //top , bottom , align 이 없을 경우 vertice-algin 을 미들로
    if ((!top && top != 0) && (!bottom && bottom != 0) && !verticalAlign) {
        verticalAlign = 'middle';
    }

    var getLength = function (standard, value) {
        var length;

        //값이 없고, 0 이 아닐경우
        if (!value && value != 0) {
            length = undefined;
        }
        //숫자 형태인 경우
        else if (typeof value == 'number') {
            length = value;
        } else if (typeof value == 'string') {
            //픽셀인 경우
            if (value.indexOf('px') != -1) {
                length = parseFloat(value.replace('px', ''));
            }
            //퍼센테이지 경우
            else if (value.indexOf('%') != -1) {
                value = parseFloat(value.replace('%', ''));
                length = standard * (value / 100);
            }
            //그외에는 숫자취급
            else {
                length = parseFloat(value);
            }
        }
        return length;
    };

    //Edge 인 도형인데, vertices 정보로 이루어진 경우.
    if (renderShape instanceof OG.shape.EdgeShape && vertices && vertices.length) {
        for (var v = 0, lenv = vertices.length; v < lenv; v++) {
            //x 축이 left 기준인 경우
            if (vertices[v][0].indexOf('left') != -1) {
                vertices[v][0] = vertices[v][0].replace('left', '');
                vertices[v][0] = getLength(bW, vertices[v][0]) + bL;
            }
            //x 축이 right 기준인 경우
            else if (vertices[v][0].indexOf('right') != -1) {
                vertices[v][0] = vertices[v][0].replace('right', '');
                vertices[v][0] = bL + bW - getLength(bW, vertices[v][0]);
            }
            //그 외의 경우는 left 처리
            else {
                vertices[v][0] = getLength(bW, vertices[v][0]) + bL;
            }

            //y 축이 top 기준인 경우
            if (vertices[v][1].indexOf('top') != -1) {
                vertices[v][1] = vertices[v][1].replace('top', '');
                vertices[v][1] = getLength(bH, vertices[v][1]) + bT;
            }
            //y 축이 bottom 기준인 경우
            else if (vertices[v][1].indexOf('bottom') != -1) {
                vertices[v][1] = vertices[v][1].replace('bottom', '');
                vertices[v][1] = bT + bH - getLength(bH, vertices[v][1]);
            }
            //그 외의 경우는 top 처리
            else {
                vertices[v][1] = getLength(bH, vertices[v][1]) + bT;
            }
        }

        if (renderShape.geom) {
            renderShape.geom.vertices = vertices;
        } else {
            renderShape.geom = new OG.PolyLine(vertices);
        }
    } else {
        //일반 도형과,  vertices 정보가 없는 Edge 도형일 경우
        width = getLength(bW, width);
        height = getLength(bH, height);
        left = getLength(bW, left) + bL;
        right = bL + bW - getLength(bW, right) - width;
        top = getLength(bH, top) + bT;
        bottom = bT + bH - getLength(bH, bottom) - height;

        //right 가 있다면 left 보다 우선하고, bottom 이 있다면 top 보다 우선한다.
        if (!right && right != 0) {

        } else {
            left = right;
        }
        if (!bottom && bottom != 0) {

        } else {
            top = bottom;
        }

        //align 이나 vertice-algin 이 있을 경우 left 와 top 값을 오버라이드 한다.
        if (align == 'left') {
            left = bL;
        } else if (align == 'center') {
            left = bL + (bW / 2) - (width / 2);
        } else if (align == 'right') {
            left = bL + bW - width;
        }

        if (verticalAlign == 'top') {
            top = bT;
        } else if (verticalAlign == 'middle') {
            top = bT + (bH / 2) - (height / 2);
        } else if (verticalAlign == 'bottom') {
            top = bT + bH - height;
        }
    }


    var contentCenter = [left + width / 2, top + height / 2];
    //기존에 콘텐트가 있는 경우
    if (contentElement) {
        //Edge 이면서 vertices 정보가 있는 경우 리드로우 한다.
        if (renderShape instanceof OG.shape.EdgeShape && vertices && vertices.length) {
            me.currentCanvas.getRenderer().redrawShape(contentElement);
        }
        //그 외의 경우 리사이즈 && 이동시킨다.
        else {
            var existBoundary = me.currentCanvas.getBoundary(contentElement);
            if (existBoundary.getWidth() != width || existBoundary.getHeight() != height) {
                me.currentCanvas.resizeBox(contentElement, [width, height], true);
            }
            if (existBoundary.getCentroid().x != contentCenter[0] || existBoundary.getCentroid().y != contentCenter[1]) {
                me.currentCanvas.moveCentroid(contentElement, contentCenter, true);
            }
        }
        //Edge 일 경우 캔버스 상단으로 위치시킨다.
        if (renderShape instanceof OG.shape.EdgeShape) {
            if (me.currentCanvas.getParent(contentElement)) {
                me.currentCanvas.toFront(contentElement);
            }
        }

        //콘텐트 엘리먼트 속성을 설정한다.
        if (renderShape.CONNECT_CLONEABLE) {
            renderShape.CONNECT_CLONEABLE = false;
            me.currentCanvas.getRenderer().redrawShape(contentElement);
        }
    }
    //신규 콘텐트인 경우
    else {
        //콘텐트 엘리먼트에 속성을 설정한다.
        //renderShape.RESIZABLE = false;
        renderShape.COPYABLE = false;
        renderShape.CONNECT_CLONEABLE = false;

        //Edge 이면서 vertices 로 표현하는 경우
        if (renderShape instanceof OG.shape.EdgeShape && vertices && vertices.length) {
            contentElement = me.currentCanvas.drawShape(
                null,
                renderShape,
                null,
                renderStyle,
                null
                //me.currentElement.id
            );
        }
        //Edge 이면서 width,height 로 표현하는 경우, Edge 를 생성한후 리사이징, 이동시킨다.
        else if (renderShape instanceof OG.shape.EdgeShape) {
            contentElement = me.currentCanvas.drawShape(
                null,
                renderShape,
                null,
                renderStyle,
                null
                //me.currentElement.id
            );
            me.currentCanvas.resizeBox(contentElement, [width, height], true);
            me.currentCanvas.moveCentroid(contentElement, contentCenter, true);
        }
        else {
            contentElement = me.currentCanvas.drawShape(
                contentCenter,
                renderShape,
                [width, height],
                renderStyle,
                null,
                me.currentElement.id
            );
        }
    }

    //셀의 axis 를 콘텐트 엘리먼트에 설정한다.
    contentElement.shape.AXIS = me.options.axis;

    //콘텐트 삭제시 처리
    contentElement.shape.onRemoveShape = function () {
        me.emptyCell(cellElement);
    }
    //콘텐트 이동시 처리
    contentElement.shape.onAddToGroup = function (groupElement, element) {
        //그룹이 소속된 테이블이 아닐 경우, 셀에 자신의 정보를 삭제한 후, 등록된 이벤트 핸들러들을 스스로 초기화시킨다.
        if (groupElement.id != me.currentElement.id) {
            if (cellElement) {
                me.emptyCell(cellElement, true);
                contentElement.shape.onRemoveShape = function () {
                };
                contentElement.shape.onAddToGroup = function () {
                };
            }
        }
    }
    //콘텐트 리사이즈시 처리
    contentElement.shape.onResize = function (offset) {
        me.redrawCell(cellElement);
    }

    //셀 뷰데이터를 꾸민다.
    cellView['shapeId'] = contentElement.id;
    cellView['shape-position'] = shapePosition;

    //셀 엘리먼트 데이터를 꾸민다.
    cellElement.shape.data.dataTable['shapeId'] = contentElement.id;
    cellElement.shape.data.dataTable['shape-position'] = shapePosition;


    //셀 데이터에 컨텐트포지션 데이터를 넣는다.
    return contentElement;
}

/**
 * 셀을 그린다.
 * @param column
 * @param value
 * @param text
 * @param columnIndex
 * @param rowIndex
 * @param rowDataIndex
 * @param ignoreRenderer true | false | saved
 * @param startPosition
 * @param forceRedraw
 * @return {*}
 */
OG.shape.component.DataTable.prototype.drawCell = function (column, value, text, columnIndex, rowIndex, rowDataIndex, ignoreRenderer, startPosition, forceRedraw) {

    var me = this;
    var cellIndex = columnIndex;
    var cellStyle = me.getCellStyle('cell', column, rowIndex, rowDataIndex);
    var cellSize = cellStyle.size;
    var style = cellStyle.style;
    var field = column.data;
    var cellElement = null;
    var contentElement = null;
    var startX, startY;

    //존재하는 셀과 컨텐트 찾기
    var cells = me.data.viewData.rows[rowIndex].cells;
    if (cells && cells[field]) {
        var cellId = cells[field]['cellId'];
        var shapeId = cells[field]['shapeId'];
        if (cellId) {
            cellElement = me.currentCanvas.getElementById(cellId);
        }
        if (shapeId) {
            contentElement = me.currentCanvas.getElementById(shapeId);
        }
    }

    //forceRedraw 일 경우는 기존 api 또는 사용자 액션으로 일어난 콘텐츠의 뒤바뀜을 모두 원상복귀한다.
    if (forceRedraw) {
        //ignoreRenderer 를 false 로 고정한다.
        ignoreRenderer = false;

        //cell 과 content 가 있다면 Edge 를 연결해제 하고 저장한 후, Content 는 삭제한다.
        if (cellElement && contentElement) {
            me.keepEdgesFromContent(cellElement);
            me.currentCanvas.removeShape(contentElement, true);
            contentElement = null;

            me.data.viewData.rows[rowIndex].cells[field]['shapeId'] = null;
            me.data.viewData.rows[rowIndex].cells[field]['shape-position'] = null;

            cellElement.shape.data.dataTable['shapeId'] = null;
            cellElement.shape.data.dataTable['shape-position'] = null;
        }
    }

    //ignoreRenderer 값을 재설정한다.
    if (ignoreRenderer == 'saved' && cellElement) {
        if (cellElement.shape.data.dataTable.ignoreRenderer) {
            ignoreRenderer = true;
        } else {
            ignoreRenderer = false;
        }
    } else if (ignoreRenderer && ignoreRenderer != 'saved') {
        ignoreRenderer = true;
    } else {
        ignoreRenderer = false;
    }


    var renderData;
    var useRenderData = false;

    //컨텐트 엘리먼트가 있는 경우는 ignoreRenderer 에 상관없이 컨텐트를 우선 표현한다.
    if (contentElement) {
        renderData = {
            shape: contentElement.shape,
            'shape-position': me.data.viewData.rows[rowIndex].cells[column.data]['shape-position']
        }
        useRenderData = true;
    }
    //컨텐트 엘리먼트가 없는 경우 렌더러가 있을 경우 표현한다. ignoreRenderer 일 경우는 무시한다.
    else {
        if (!ignoreRenderer) {
            if (column.renderer) {
                renderData = column.renderer(value);
                //shape 를 반환하는 렌더러일 경우
                if (renderData && renderData.shape && renderData.shape instanceof OG.IShape) {
                    useRenderData = true;
                }
                //그 외의 경우는 반환된 renderData 를 그대로 쓴다.
                else {
                    text = renderData;
                }
            }
        }
    }

    //1. 렌더 데이터를 사용하는 경우 text 는 '' 이며, 렌더 데이터를 사용하지 않는 경우,
    //2. text 가 없는 경우, value 값을 쓰며, value 가 없는 경우 defaultContent 값으로 대체한다.
    if (useRenderData) {
        text = ''
    } else {
        if (!text) {
            text = value;
        }
        if (!text) {
            if (column.defaultContent) {
                text = column.defaultContent;
            } else {
                text = '';
            }
        }
    }

    //기존 셀이 없다면 새로 생성한다.
    if (!cellElement) {
        //기존 도형이 없고 시작포지션이 지정되지 않으면 그릴 수 없음.
        if (!startPosition) {
            throw new Error('missing startPosition to draw cell');
        }
        startX = startPosition[0];
        startY = startPosition[1];
        var shape;

        //렌더 데이터를 사용하지 않는 경우 셀이 직접 text 를 표현한다.
        if (!useRenderData) {
            shape = new OG.Cell(text);
        } else {
            shape = new OG.Cell();
        }

        //셀의 cellEditable 을 설정한다.
        shape.LABEL_EDITABLE = me.options.cellEditable;

        cellElement = me.currentCanvas.drawShape(
            [startX, startY],
            shape,
            cellSize,
            style,
            null,
            me.currentElement.id
        )
    }
    //기존 셀이 있을 경우
    else {
        //렌더 데이터를 사용하지 않는 경우 셀이 직접 text 를 표현한다.
        if (!useRenderData) {
            if (text != cellElement.shape.label) {
                cellElement.shape.label = text;
                me.currentCanvas.getRenderer().redrawShape(cellElement);
            }
        }
        //그 외의 경우는 셀 라벨이 표현되어서는 안된다.
        else {
            if (cellElement.shape.label) {
                cellElement.shape.label = undefined;
                me.currentCanvas.getRenderer().redrawShape(cellElement);
            }
        }
    }

    var existBoundary = me.currentCanvas.getBoundary(cellElement);
    var upperLeft = existBoundary.getUpperLeft();
    //시작포지션이 지정되지 않으면 기존 도형을 기준으로 삼는다.
    if (!startPosition) {
        startX = upperLeft.x;
        startY = upperLeft.y;
    } else {
        startX = startPosition[0];
        startY = startPosition[1];
    }

    //셀의 크기를 조정한다.
    if (existBoundary.getWidth() != cellSize[0] || existBoundary.getHeight() != cellSize[1]) {
        me.currentCanvas.resizeBox(cellElement, cellSize, true);
    }
    //셀을 이동시킨다.
    var moveX = startX - upperLeft.x;
    var moveY = startY - upperLeft.y;
    if (moveX != 0 || moveY != 0) {
        me.currentCanvas.move(cellElement, [moveX, moveY]);
    }
    //셀은 테이블 내부에서 뒤로 이동시킨다.
    //테이블 path는 0 번째이므로 이므로 1로 이동
    var firstChild = OG.Util.isIE() ? me.currentElement.childNodes[1] : me.currentElement.children[1];
    if (firstChild.id != cellElement.id) {
        me.currentElement.insertBefore(cellElement, OG.Util.isIE() ? me.currentElement.childNodes[1] : me.currentElement.children[1]);
    }

    //셀 데이터 꾸미기
    if (!cellElement.shape.data) {
        cellElement.shape.data = {
            dataTable: {}
        };
    }
    cellElement.shape.data.dataTable.type = 'cell';
    cellElement.shape.data.dataTable.rowDataIndex = rowDataIndex;
    cellElement.shape.data.dataTable.rowIndex = rowIndex;
    cellElement.shape.data.dataTable.cellIndex = cellIndex;
    cellElement.shape.data.dataTable.column = column.data;
    cellElement.shape.data.dataTable.value = value;
    cellElement.shape.data.dataTable.text = text;
    cellElement.shape.data.dataTable.cellId = cellElement.id;
    cellElement.shape.data.dataTable.tableId = me.currentElement.id;
    cellElement.shape.data.dataTable.ignoreRenderer = ignoreRenderer;

    //뷰 데이터에 꾸미기
    if (!me.data.viewData.rows[rowIndex].cells) {
        me.data.viewData.rows[rowIndex].cells = {};
    }
    if (!me.data.viewData.rows[rowIndex].cells[column.data]) {
        me.data.viewData.rows[rowIndex].cells[column.data] = {};
    }
    me.data.viewData.rows[rowIndex].cells[column.data].width = cellSize[0];
    me.data.viewData.rows[rowIndex].cells[column.data].height = cellSize[1];
    me.data.viewData.rows[rowIndex].cells[column.data].cellId = cellElement.id;
    me.data.viewData.rows[rowIndex].cells[column.data].value = value;
    me.data.viewData.rows[rowIndex].cells[column.data].text = text;
    me.data.viewData.rows[rowIndex].cells[column.data].ignoreRenderer = ignoreRenderer;

    //셀 콘텐트 꾸미기
    if (useRenderData) {
        me.drawCellContent(column, cellElement, contentElement, renderData);
    }
    me.reconnectEdgesToContent(cellElement);


    return cellElement;
}

/**
 * 칼럼을 그린다.
 * @param column
 * @param columnIndex
 * @param startPosition [startX, startY]
 * @return element
 */
OG.shape.component.DataTable.prototype.drawColumn = function (column, columnIndex, startPosition) {
    var me = this;
    var columnViews = me.data.viewData.columns;
    var cellStyle = me.getCellStyle('column', column);
    var cellSize = cellStyle.size;
    var style = cellStyle.style;
    var field = column.data;
    var columnElement = null;
    var startX, startY;

    //존재하는 칼럼 찾기
    if (columnViews[field]) {
        var cellId = columnViews[field]['cellId'];
        if (cellId) {
            columnElement = me.currentCanvas.getElementById(cellId);
        }
    }

    //기존 칼럼이 없다면 새로 생성한다.
    if (!columnElement) {
        //기존 도형이 없고 시작포지션이 지정되지 않으면 그릴 수 없음.
        if (!startPosition) {
            throw new Error('missing startPosition to draw column');
        }
        startX = startPosition[0];
        startY = startPosition[1];
        columnElement = me.currentCanvas.drawShape(
            [startX, startY],
            new OG.Cell(column.title),
            cellSize,
            style,
            null,
            me.currentElement.id
        )
    }


    var existBoundary = me.currentCanvas.getBoundary(columnElement);
    var upperLeft = existBoundary.getUpperLeft();

    //시작포지션이 지정되지 않으면 기존 도형을 기준으로 삼는다.
    if (!startPosition) {
        startX = upperLeft.x;
        startY = upperLeft.y;
    } else {
        startX = startPosition[0];
        startY = startPosition[1];
    }

    //셀을 크기조정 및 이동시킨다.
    if (existBoundary.getWidth() != cellSize[0] || existBoundary.getHeight() != cellSize[1]) {
        me.currentCanvas.resizeBox(columnElement, cellSize, true);
    }
    var moveX = startX - upperLeft.x;
    var moveY = startY - upperLeft.y;
    if (moveX != 0 || moveY != 0) {
        me.currentCanvas.move(columnElement, [moveX, moveY]);
    }

    //셀에 데이터 넣기
    if (!columnElement.shape.data) {
        columnElement.shape.data = {};
    }
    columnElement.shape.data.dataTable = {
        type: 'column',
        column: column.data,
        cellIndex: columnIndex,
        cellId: columnElement.id,
        tableId: me.currentElement.id
    }

    //뷰 데이터에 저장
    columnViews[field] = {
        width: cellSize[0],
        height: cellSize[1],
        cellId: columnElement.id
    }

    //뒤로 이동
    me.currentElement.insertBefore(columnElement, OG.Util.isIE() ? me.currentElement.childNodes[1] : me.currentElement.children[1]);
    return columnElement;
}

/**
 * tableData 중 현재 페이지에 그려질 범위를 반환한다.
 * @returns {{pageLength: *, currentPage: *, data: Array}}
 */
OG.shape.component.DataTable.prototype.getDataToDraw = function () {
    var me = this;
    var tableData = me.data.tableData;
    var pageLength = me.data.viewData.pageLength =
        me.data.viewData.pageLength ? me.data.viewData.pageLength : me.options.pageLength;
    var currentPage = me.data.viewData.currentPage =
        me.data.viewData.currentPage ? me.data.viewData.currentPage : me.options.currentPage;
    var startIdx = pageLength * (currentPage - 1);
    var endIdx = startIdx + pageLength - 1;

    var dataToDraw = [];
    for (var i = startIdx; i <= endIdx; i++) {
        if (tableData[i]) {
            dataToDraw.push(tableData[i]);
        }
    }
    return {
        pageLength: pageLength,
        currentPage: currentPage,
        data: dataToDraw
    }
}


/**
 * 셀이 리사이즈 되었을때의 핸들러
 */
OG.shape.component.DataTable.prototype.onCellResize = function (cell, offset) {
    //이웃한 셀의 크기 조정
    //소속한 row 의 height 조정

    var me = this;
    var boundary = me.currentCanvas.getBoundary(cell);
    var dataTable = cell.shape.data.dataTable;
    var column = dataTable.column;
    var cellIndex = dataTable.cellIndex;
    var rowIndex = dataTable.rowIndex;

    if (dataTable.type == 'column') {
        //뷰 데이터의 columnHeight 를 변경한다.
        me.data.viewData.columnHeight = boundary.getHeight();
    }
    else if (dataTable.type == 'cell') {
        //뷰 데이터의 rowHeight 를 변경한다.
        me.data.viewData.rows[rowIndex].rowHeight = boundary.getHeight();
    }

    //뷰 칼럼의 width 를 변경한다.
    var columnViews = me.data.viewData.columns;
    columnViews[column].width = boundary.getWidth();

    //이웃한 칼럼의 width 를 변경한다.
    //offset 은 상,하,좌,우
    var moveLeft = offset[2];
    var moveRight = offset[3];

    //좌측이 움직였을 경우
    if (moveLeft != 0) {
        var leftCell = me.options.columns[cellIndex - 1];
        if (leftCell) {
            columnViews[leftCell.data].width = columnViews[leftCell.data].width - moveLeft;
        }
    }

    //우측이 움직였을 경우는 이웃 칼럼의 처리를 하지 않음.
    if (moveRight != 0) {

    }
    me.draw(true);
}

/**
 * 셀의 라벨이 변경되었을 경우 처리
 * @param text
 * @param beforeText
 */
OG.shape.component.DataTable.prototype.onCellLabelChanged = function (cell, text, beforeText) {
    this.updateCell(cell, text, text, null, null, true);
}


OG.shape.component.DataTable.prototype.createContextMenu = function () {
    var me = this;
    this.contextMenu = {
        'delete': true,
        'format': true,
        'text': true,
        'bringToFront': true,
        'sendToBack': true,
        'property': {
            name: '정보보기', callback: function () {
                $(me.currentCanvas.getRootElement()).trigger('showProperty', [me.currentElement]);
            }
        }
    };
    return this.contextMenu;
};

/**
 * 어떠한 도형이 사용자의 행위로 테이블로 끌어당겨졌을 경우
 * @param groupElement
 * @param element
 */
OG.shape.component.DataTable.prototype.onAddToGroup = function (groupElement, element) {
    //해당 엘리먼트가 등록된 셀을 조회한다.
    //있다면, 기존셀에서 현재셀로 콘텐트를 이동한다.
    //없다면, 신규 콘텐트로 등록한다.
    var me = this;
    var beforeCell;
    var dropCell, dropCellData;
    if (groupElement.id == me.currentElement.id) {
        //콘텐트를 가지고 있던 기존 셀을 구한다.
        beforeCell = me.getCellFromContent(element);

        //콘텐트의 중심을 포함한 셀을 찾는다.
        var centroid = me.currentCanvas.getBoundary(element).getCentroid();
        dropCell = me.getCellFromOffset(centroid);

        //드랍셀이 없고 이전 셀도 없다면 콘텐트를 테이블 밖으로 빼야 한다.
        //이 경우는 외부에서 드랍되었는데 칼럼으로 떨어진 경우다.
        if (!dropCell && !beforeCell) {
            me.currentCanvas.addToGroup(me.currentCanvas.getRootGroup(), [element]);
            return;
        }
        //드랍셀이 없고 이전 셀이 있다면 원복시킨다.
        //이 경우는 테이블 내에서 이동시켰는데 칼럼으로 떨어진 경우다.
        if (!dropCell && beforeCell) {
            me.redrawCell(beforeCell);
            return;
        }

        //드랍셀과 이전 셀이 있다면, cutAndPasteCell 처리한다.
        //이 경우는 테이블 내에서 이동시켰을 경우이다.
        if (dropCell && beforeCell) {
            dropCellData = me.getCellInformation(dropCell);
            if (dropCellData.contentElement) {
                me.redrawCell(beforeCell);
                return;
            }
            me.cutAndPasteCell(beforeCell, dropCell);
            return;
        }

        //드랍셀만 있다면, updateCell 을 한다.
        //이 경우는 외부에서 드랍되었을 경우이다.
        if (dropCell && !beforeCell) {
            dropCellData = me.getCellInformation(dropCell);
            if (dropCellData.contentElement) {
                me.redrawCell(beforeCell);
                return;
            }
            me.updateCell(dropCell, element.shape.data, null, element, null, true);
            return;
        }
    }
}

OG.shape.component.Cell = function (label) {
    OG.shape.component.Cell.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.component.Cell';
    this.label = label;
    this.CONNECT_CLONEABLE = false;
    this.LABEL_EDITABLE = true;
    this.CONNECTABLE = false;
    this.DELETABLE = false;
    this.MOVABLE = false;
    this.COPYABLE = true;
};
OG.shape.component.Cell.prototype = new OG.shape.GeomShape();
OG.shape.component.Cell.superclass = OG.shape.GeomShape;
OG.shape.component.Cell.prototype.constructor = OG.shape.component.Cell;
OG.Cell = OG.shape.component.Cell;
OG.shape.component.Cell.prototype.createShape = function () {
    if (this.geom) {
        return this.geom;
    }

    this.geom = new OG.geometry.Rectangle([0, 0], 100, 100);
    this.geom.style = new OG.geometry.Style({
        'fill': 'none',
        'fill-opacity': 0,
        "stroke": 'none',
        'font-size': 9,
        'border': {
            'stroke': '#abaaad',
            'stroke-width': '1',
            'arrow-end': 'none',
            'arrow-start': 'none'
        },
        'border-top': {},
        'border-left': {},
        'border-right': {},
        'border-bottom': {}
    });

    return this.geom;
};

OG.shape.component.Cell.prototype.createSubShape = function () {
    if (!this.geom.style.map) {
        return;
    }

    var createSub = function (direction, defaultStyle, style) {
        if (defaultStyle && style) {
            defaultStyle = JSON.parse(JSON.stringify(defaultStyle))
            for (var key in style) {
                defaultStyle[key] = style[key];
            }
        }
        if (direction == 'left') {
            return {
                shape: new OG.EdgeShape(),
                vertices: [['0%', '0%'], ['0%', '100%']],
                style: defaultStyle
            }
        }
        if (direction == 'right') {
            return {
                shape: new OG.EdgeShape(),
                vertices: [['100%', '0%'], ['100%', '100%']],
                style: defaultStyle
            }
        }
        if (direction == 'top') {
            return {
                shape: new OG.EdgeShape(),
                vertices: [['0%', '0%'], ['100%', '0%']],
                style: defaultStyle
            }
        }
        if (direction == 'bottom') {
            return {
                shape: new OG.EdgeShape(),
                vertices: [['0%', '100%'], ['100%', '100%']],
                style: defaultStyle
            }
        }
    }
    var me = this;
    this.sub = [];
    this.sub.push(
        createSub('left', me.geom.style.map['border'], me.geom.style.map['border-left'])
    )
    this.sub.push(
        createSub('right', me.geom.style.map['border'], me.geom.style.map['border-right'])
    )
    this.sub.push(
        createSub('top', me.geom.style.map['border'], me.geom.style.map['border-top'])
    )
    this.sub.push(
        createSub('bottom', me.geom.style.map['border'], me.geom.style.map['border-bottom'])
    )
    return this.sub;
};

OG.shape.component.Cell.prototype.onResize = function (offset) {
    var me = this;
    if (me.data && me.data.dataTable) {
        var tableId = me.data.dataTable.tableId;
        var table = me.currentCanvas.getElementById(tableId);
        if (table) {
            table.shape.onCellResize(me.currentElement, offset);
        }
    }
}

OG.shape.component.Cell.prototype.onLabelChanged = function (text, beforeText) {
    var me = this;
    if (me.data && me.data.dataTable) {
        var tableId = me.data.dataTable.tableId;
        var table = me.currentCanvas.getElementById(tableId);
        if (table) {
            if (me.data.dataTable.type == 'cell') {
                table.shape.onCellLabelChanged(me.currentElement, text, beforeText);
            }
        }
    }
}

OG.shape.component.Cell.prototype.onPasteShape = function (copied, pasted) {

}

