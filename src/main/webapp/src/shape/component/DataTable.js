OG.shape.component.DataTable = function () {
    OG.shape.component.DataTable.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.component.DataTable';
    this.options = {
        pageLength: 25,
        currentPage: 1
    }
    this.CONNECT_CLONEABLE = false;
    this.LABEL_EDITABLE = false;
    this.CONNECTABLE = false;

    /**
     * 옵션 변경 여부. 옵션이 변경되었을 경우,
     * 기존 엘리먼트중 신규 칼럼에 속하지 않은 엘리먼트는 모두 삭제한다.
     * 처음 클래스가 로딩되었을 경우 true 값이다.
     * @type {boolean}
     */
    this.OPTION_CHANGE = true;


    //옵션데이터
    this.options = {
        /**
         * 페이지당 row 수
         */
        pageLength: 15,
        /**
         * 시작 페이지
         */
        currentPage: 1,
        /**
         * 디폴트 칼럼 높이
         */
        columnHeight: 25,
        /**
         * 디폴트 칼럼 가로폭
         */
        columnWidth: 100,
        /**
         * 디폴트 칼럼 스타일
         */
        columnStyle: {
            'font-color': '#fff',
            'fill': '#abaaad',
            'fill-opacity': 1,
            'border': {
                'stroke': 'none',
                'stroke-width': '1',
                'arrow-end': 'none',
                'arrow-start': 'none'
            },
            'border-bottom': {
                'stroke': '#616063',
                'stroke-width': '2'
            }
        },
        /**
         * 디폴트 cell 높이
         */
        cellHeight: 30,
        /**
         * 디폴트 셀 스타일
         */
        cellStyle: {
            'fill': '#84ca84',
            'fill-opacity': 1
        },
        /**
         * 칼럼 정의
         */
        columns: [
            {
                /**
                 * 데이터 필드 이름
                 */
                data: 'name',
                /**
                 * 칼럼 타이틀
                 */
                title: 'NAME',
                /**
                 * 디폴트 컨텐츠
                 */
                defaultContent: '',
                /**
                 * 칼럼 너비
                 */
                columnWidth: 120,
                /**
                 * 칼럼 스타일
                 */
                columnStyle: {
                    'border-right': {
                        'stroke': '#616063',
                        'stroke-width': '2'
                    }
                },
                /**
                 * 칼럼에 소속된 셀 스타일
                 */
                cellStyle: {
                    'fill': '#ca7d7f',
                    'fill-opacity': 1
                },
                /**
                 * OG Element 렌더러
                 */
                renderer: function (value) {
                    return {
                        /**
                         * 도형 shape
                         */
                        shape: new OG.Location(value),
                        /**
                         * 도형 가로
                         */
                        width: '50px',
                        /**
                         * 도형 세로
                         */
                        height: '20px',
                        /**
                         * 가로 정렬
                         */
                        align: 'center',
                        /**
                         * 세로 정렬
                         */
                        'vertical-align': 'center',
                        /**
                         * 도형 스타일
                         */
                        style: {
                            'fill': '#428bca',
                            'fill-opacity': 1
                        }
                    }
                }
            },
            {
                data: 'email',
                title: 'EMAIL',
                defaultContent: ''
            },
            {
                data: 'phone',
                title: 'PHONE',
                defaultContent: ''
            },
            {
                data: 'accountBalance',
                title: 'BALANCE',
                defaultContent: ''
            },
            {
                data: 'accountCBA',
                title: 'CREDIT',
                defaultContent: ''
            }
        ]
    }

    //OG Element 로 교환할 수 있는 api
    //세이브 로드시에 되살릴 수 있는 데이터. => 시리얼라이즈 가능한 것.
    //contentMove: 셀 shape 가 이동될 경우

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


OG.shape.component.DataTable.prototype.setOptions = function (options) {
    if (options) {
        for (var key in options) {
            this.options[key] = options[key];
        }
    }
}
OG.shape.component.DataTable.prototype.setData = function (data) {
    if (!this.data) {
        this.data = {};
    }
    this.data.tableData = data;
}


OG.shape.component.DataTable.prototype.draw = function () {
    var me = this;

    if (!me.options.columns) {
        throw new Error('No column options to render');
    }
    if (!me.data || !me.data.tableData) {
        throw new Error('No table data to render');
    }
    //http://tutorials.jenkov.com/svg/clip-path.html 클립패스를 사용하여 그리드 부분을 래핑하고, 스크롤을 구현할 것.
    //만드는 순서.
    //좌상단의 좌표 기준을 구함.
    //칼럼을 만들어나감.
    //칼럼 기준을 맞추어서 셀들을 만들어나감.

    //옵션이 변경된 경우, 신규 칼럼에 속하지 않은 도형들을 일괄삭제한다.
    if (me.OPTION_CHANGE) {

    }

    me.drawColumns();
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


OG.shape.component.DataTable.prototype.drawColumns = function () {
    var me = this;
    var boundary = me.currentCanvas.getBoundary(me.currentElement);
    var startP = boundary.getUpperLeft();
    var startX = startP.x;
    var startY = startP.y;
    var nextY;

    //array
    var columns = me.options.columns;
    var columnViews = me.data.viewData.columns;
    var column;

    //칼럼 그리기
    for (var i = 0, leni = columns.length; i < leni; i++) {
        column = columns[i];
        var cellStyle = me.getCellStyle('column', column);
        var cellSize = cellStyle.size;
        var style = cellStyle.style;
        var field = column.data;
        var columnElement = null;

        //nextY 에는 다음 row 를 위한 값을 지정한다.
        nextY = startY + cellSize[1];

        //존재하는 칼럼 찾기
        if (columnViews[field]) {
            var cellId = columnViews[field]['cell'];
            if (cellId) {
                columnElement = me.currentCanvas.getElementById(cellId);
            }
        }

        //기존 칼럼이 없다면 새로 생성한다.
        if (!columnElement) {
            columnElement = me.currentCanvas.drawShape(
                [startX, startY],
                new OG.Cell(column.title),
                cellSize,
                style,
                null,
                me.currentElement.id
            )
        }

        //셀을 이동시킨다.
        var existBoundary = me.currentCanvas.getBoundary(columnElement);
        if (existBoundary.getWidth() != cellSize[0] || existBoundary.getHeight() != cellSize[1]) {
            me.currentCanvas.resizeBox(columnElement, cellSize, true);
        }
        var upperLeft = existBoundary.getUpperLeft();
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
            cellIndex: i,
            cellId: columnElement.id,
            tableId: me.currentElement.id
        }

        //뷰 데이터에 저장
        columnViews[field] = {
            width: cellSize[0],
            height: cellSize[1],
            cell: columnElement.id
        }
        //다음 셀의 시작 x 를 증가시킨다.
        startX = startX + cellSize[0];
    }

    //데이터 그리기
    //드로잉 할 데이터 영역구하기
    var dataToDraw = me.getDataToDraw();
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
            column = columns[c];
            var cellIndex = c;
            var cellStyle = me.getCellStyle('cell', column, rowIndex, rowDataIndex);
            var cellSize = cellStyle.size;
            var style = cellStyle.style;
            var field = column.data;
            var cellElement = null;

            var value = null;
            //rowData 에 칼럼에 해당하는 필드가 있는지 찾는다.
            for (var key in rowData) {
                if (columns[c].data == key) {
                    value = rowData[key];
                }
            }
            //rowData 에서 필드값을 찾을 수 없을 경우, defaultContent 값으로 대체한다.
            if (!value) {
                value = column.defaultContent;
            }

            //nextY 에는 다음 row 를 위한 값을 지정한다.
            nextY = startY + cellSize[1];

            //존재하는 셀 찾기
            var cells = me.data.viewData.rows[rowIndex].cells;
            if (cells && cells[field]) {
                var cellId = cells[field]['cell'];
                if (cellId) {
                    cellElement = me.currentCanvas.getElementById(cellId);
                }
            }

            //기존 셀이 없다면 새로 생성한다.
            if (!cellElement) {
                cellElement = me.currentCanvas.drawShape(
                    [startX, startY],
                    new OG.Cell(),
                    cellSize,
                    style,
                    null,
                    me.currentElement.id
                )
            }

            //셀을 이동시킨다.
            var existBoundary = me.currentCanvas.getBoundary(cellElement);
            if (existBoundary.getWidth() != cellSize[0] || existBoundary.getHeight() != cellSize[1]) {
                me.currentCanvas.resizeBox(cellElement, cellSize, true);
            }
            var upperLeft = existBoundary.getUpperLeft();
            var moveX = startX - upperLeft.x;
            var moveY = startY - upperLeft.y;
            if (moveX != 0 || moveY != 0) {
                me.currentCanvas.move(cellElement, [moveX, moveY]);
            }

            //TODO 존재하는 셀 컨텐츠 찾기, 컨텐츠 생성, 컨텐츠 이동, 셀 데이터 및 뷰 데이터에 콘텐츠 아이디 투입.


            //셀 데이터 꾸미기
            if (!cellElement.shape.data) {
                cellElement.shape.data = {};
            }
            cellElement.shape.data.dataTable = {
                type: 'cell',
                rowDataIndex: rowDataIndex,
                rowIndex: rowIndex,
                cellIndex: cellIndex,
                column: column.data,
                value: value,
                cellId: cellElement.id,
                contentId: '',
                tableId: me.currentElement.id
            }

            //뷰 데이터에 저장
            if (!me.data.viewData.rows[rowIndex].cells) {
                me.data.viewData.rows[rowIndex].cells = {};
            }
            me.data.viewData.rows[rowIndex].cells[column.data] = {
                width: cellSize[0],
                height: cellSize[1],
                cell: cellElement.id,
                content: "id",
                value: value
            }
            //다음 셀의 시작 x 를 증가시킨다.
            startX = startX + cellSize[0];
        }
    }
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
    me.draw();
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


OG.shape.component.Cell = function (label) {
    OG.shape.component.Cell.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.component.Cell';
    this.label = label;
    this.CONNECT_CLONEABLE = false;
    this.LABEL_EDITABLE = false;
    this.CONNECTABLE = false;
    this.DELETABLE = false;
    this.MOVABLE = false;
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

