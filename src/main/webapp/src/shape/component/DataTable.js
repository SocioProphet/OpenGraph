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
            },
            'border-right': {
                'stroke': '#616063',
                'stroke-width': '4'
            },
            'border-left': {
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
                        'stroke-width': '4'
                    }
                },
                /**
                 * 칼럼에 소속된 셀 스타일
                 */
                cellStyle: {
                    'border-right': {
                        'stroke': '#616063',
                        'stroke-width': '4'
                    },
                    'border-left': {
                        'stroke': '#abaaad',
                        'stroke-width': '1'
                    }
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
                        'shape-position': {
                            /**
                             * 도형 가로 (number,px,%)
                             */
                            width: '80%',
                            /**
                             * 도형 세로 (number,px,%)
                             */
                            height: '80%',
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
                            'fill': '#59cac9',
                            'fill-opacity': 1
                        }
                    }
                }
            },
            {
                data: 'email',
                title: 'EMAIL',
                defaultContent: '',
                renderer: function (value) {
                    return {
                        /**
                         * 도형 shape
                         */
                        shape: new OG.EdgeShape([10, 10], [30, 50]),
                        'shape-position': {
                            width: '50%',
                            height: '50%',
                            top: 5,
                            left: 5
                            //vertices: [['10%', '10%'], ['60%', '60%']]
                        },
                        /**
                         * 도형 스타일
                         */
                        'shape-style': {
                            'stroke': 'red'
                        }
                    }
                }
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

/**
 * 셀의 내용을 다른 셀로 복사한다.
 * value, cell 라벨, contentElement 와 그에 따른 shape-position 을 복사한다.
 * @param fromCell
 * @param toCell
 */
OG.shape.component.DataTable.prototype.copyCell = function (fromCell, toCell) {

}


/**
 * 셀의 내용을 주어진 Element 또는 text 로 교체한다.
 * @param cell OG.Cell
 * @param content OG Element | string
 * @param shapePosition map 셀 내부 포지션 정보 optional
 * @param ignoreRenderer {boolean} 옵션의 칼럼 렌더러 사용 여부.
 */
OG.shape.component.DataTable.prototype.updateCell = function (cell, content, shapePosition, ignoreRenderer) {
    var me = this;
    var data = me.getCellInformation(cell);
    me.emptyCell(cell, false);

    //content 가 element 인 경우
    if (me.currentCanvas.getRenderer().isShape(content)) {
        me.data.viewData.rows[data.rowIndex].cells[data.column]['shape-position'] = shapePosition;
        me.drawCellContent(data.columnOption, cell, content);
    }
    //그 외의 경우는 데이터를 업데이트하고, cell 을 다시 그린다.
    else {
        me.data.tableData[data.rowDataIndex][data.column] = content;
        me.drawCell(data.columnOption, content, data.cellIndex, data.rowIndex, data.rowDataIndex, ignoreRenderer);
    }
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
 *       'shape-position': {top , left, right, bottom, align, vertical-align, width, height, vertices}
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
 * @param redraw {boolean} 셀을 다시 그리는 여부
 */
OG.shape.component.DataTable.prototype.emptyCell = function (cell , redraw) {
    var me = this;
    var data = me.getCellInformation(cell);
    if (data.contentElement) {
        me.currentCanvas.removeShape(data.contentElement);
    }

    me.data.viewData.rows[data.rowIndex].cells[data.column]['shapeId'] = null;
    me.data.viewData.rows[data.rowIndex].cells[data.column]['shape-position'] = null;

    cell.shape.data.dataTable['shapeId'] = null;
    cell.shape.data.dataTable['shape-position'] = null;

    me.data.tableData[data.rowDataIndex][data.column] = null;

    if(redraw){
        me.drawCell(data.columnOption, null, data.cellIndex, data.rowIndex, data.rowDataIndex, 'saved');
    }
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
 * 현재 테이블의 row, cell 인덱스 값으로 cell 을 반환한다.
 * @param rowIndex
 * @param cellIndex
 * @return OG.Cell
 */
OG.shape.component.DataTable.prototype.getCellFromTableIndex = function (rowIndex, cellIndex) {
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

OG.shape.component.DataTable.prototype.draw = function () {
    //TODO
    //테두리가 숨는 문제 => fail. 한것은, vertices subshape 그릴때 position 개념을 추가한 것.
    //최종 사이즈에 마추어서 그룹 사이즈 변경. ok

    //데이터 업데이트시 대응
    //컨텐트 임의 교체 api. ok
    //컨텐트 임의 교체시, 셀뷰와 셀엘리먼트의 'shape-position' 는 기본적으로 초기화된다.ok
    //별도의 'shape-position' 를 줄 경우 등록된다. ok
    //라벨 에디팅 시의 처리

    //테이블 내에서 콘텐트 이동 처리

    //옵션 업데이트시 대응
    //페이지 api
    //테이블에 외부에서 드랍되었을 경우 콘텐트로 등록 처리
    //테이블 내에서 콘텐트 이동시 등록 처리
    //콘텐트 등록 api, row, cell api
    //http://tutorials.jenkov.com/svg/clip-path.html 클립패스를 사용하여 그리드 부분을 래핑하고, 스크롤을 구현할 것.

    var me = this;

    if (!me.options.columns) {
        throw new Error('No column options to render');
    }
    if (!me.data || !me.data.tableData) {
        throw new Error('No table data to render');
    }

    //옵션이 변경된 경우, 신규 칼럼에 속하지 않은 도형들을 일괄삭제한다.
    if (me.OPTION_CHANGE) {

    }

    var boundary = me.currentCanvas.getBoundary(me.currentElement);
    var startP = boundary.getUpperLeft();
    var startX = startP.x;
    var startY = startP.y;
    var nextY;
    var columnElement, cellElement;
    var columnBoundary, cellBoundary;

    //array
    var columns = me.options.columns;
    //var columnViews = me.data.viewData.columns;
    var column;

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
            //rowData 에 칼럼에 해당하는 필드가 있는지 찾는다.
            var value = null;
            for (var key in rowData) {
                if (columns[c].data == key) {
                    value = rowData[key];
                }
            }

            cellElement = me.drawCell(columns[c], value, c, rowIndex, rowDataIndex, 'saved', [startX, startY]);
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
    var expectHeight = startY - startP.y;
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
 * @param existContentElement
 * @returns {*}
 */
OG.shape.component.DataTable.prototype.drawCellContent = function (column, cellElement, existContentElement) {
    var me = this;
    var contentElement = existContentElement;
    var rowIndex = cellElement.shape.data.dataTable.rowIndex;
    var value = cellElement.shape.data.dataTable.value;
    var cellView = me.data.viewData.rows[rowIndex].cells[column.data];
    var ignoreRenderer = cellElement.shape.data.dataTable.ignoreRenderer;

    //렌더링 데이터 구하기.
    var renderData;
    //기존 콘텐트가 있을 경우, 셀 뷰데이터의 shape-position 으로 렌더데이터를 작성한다.
    if (existContentElement) {
        renderData = {
            shape: existContentElement.shape,
            'shape-position': cellView['shape-position']
        }
    }
    //기존 콘텐트가 없고 ignoreRenderer 가 아닐경우, 컬럼 옵션의 renderer 를 기준으로 작성한다.
    else if (!existContentElement && !ignoreRenderer && column.renderer) {
        renderData = column.renderer(value);
    } else {
        return contentElement;
    }

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
    }
    //신규 콘텐트인 경우
    else {
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

    //셀 뷰데이터를 꾸민다.
    cellView['shapeId'] = contentElement.id;
    cellView['shape-position'] = shapePosition;

    //셀 엘리머느 데이터를 꾸민다.
    cellElement.shape.data.dataTable['shapeId'] = contentElement.id;
    cellElement.shape.data.dataTable['shape-position'] = shapePosition;

    //셀 데이터에 컨텐트포지션 데이터를 넣는다.
    //drawCellContent 호출시 컨텐트 포지션을 바탕으로 렌더 데이터를 넣는다.
    return contentElement;
}

/**
 * 셀을 그린다.
 * @param column
 * @param value
 * @param columnIndex
 * @param rowIndex
 * @param rowDataIndex
 * @param ignoreRenderer true | false | saved
 * @param startPosition
 * @return {*}
 */
OG.shape.component.DataTable.prototype.drawCell = function (column, value, columnIndex, rowIndex, rowDataIndex, ignoreRenderer, startPosition) {
    var me = this;
    var cellIndex = columnIndex;
    var cellStyle = me.getCellStyle('cell', column, rowIndex, rowDataIndex);
    var cellSize = cellStyle.size;
    var style = cellStyle.style;
    var field = column.data;
    var cellElement = null;
    var contentElement = null;
    var startX, startY;

    //value 가 없는 경우, defaultContent 값으로 대체한다.
    if (!value) {
        if(column.defaultContent){
            value = column.defaultContent;
        }
    }

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

    //기존 셀이 없다면 새로 생성한다.
    if (!cellElement) {
        //기존 도형이 없고 시작포지션이 지정되지 않으면 그릴 수 없음.
        if (!startPosition) {
            throw new Error('missing startPosition to draw cell');
        }
        startX = startPosition[0];
        startY = startPosition[1];
        var shape;

        //컨텐트 엘리먼트가 없을 경우, 렌더러를 사용하지 않거나 렌더러 클래스가 없는 경우 셀이 직접 value 를 표현한다.
        if (!contentElement && (ignoreRenderer || !column.renderer)) {
            shape = new OG.Cell(value);
        } else {
            shape = new OG.Cell();
        }

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
        //컨텐트 엘리먼트가 없을 경우, 렌더러를 사용하지 않거나 렌더러 클래스가 없는 경우 셀이 직접 value 를 표현한다.
        if (!contentElement && (ignoreRenderer || !column.renderer)) {
            if (value != cellElement.shape.label) {
                cellElement.shape.label = value;
                if(cellElement.shape.label == null){
                    cellElement.shape.label = undefined;
                }
                me.currentCanvas.getRenderer().redrawShape(cellElement);
            }
        }
        //그 외의 경우는 셀 라벨이 표현되어서는 안된다.
        else{
            if(cellElement.shape.label){
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
    me.data.viewData.rows[rowIndex].cells[column.data].ignoreRenderer = ignoreRenderer;

    //셀 콘텐트 꾸미기
    me.drawCellContent(column, cellElement, contentElement);

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
    this.LABEL_EDITABLE = true;
    this.CONNECTABLE = false;
    this.DELETABLE = false;
    this.MOVABLE = false;
    this.COPYABLE = false;
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

