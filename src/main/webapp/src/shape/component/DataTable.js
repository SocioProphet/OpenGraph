OG.shape.component.DataTable = function () {

    //리사이즈 후 셀 가이드 다시 그리기. ok
    //오른쪽으로 리사이즈 드래그 시 화면 사이즈 조정. ok
    //콘텐트 매핑시 소팅 기능. ok
    //행 추가 api. ok

    OG.shape.component.DataTable.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.component.DataTable';
    this.options = {
        pageLength: 25,
        currentPage: 1,
        cellEditable: true,
        axis: 'none'
    }
    this.CONNECT_CLONEABLE = false;
    this.LABEL_EDITABLE = false;
    this.CONNECTABLE = false;
    this.RESIZABLE = false;
    this.MOVABLE = false;


    var renderer = function (value) {
        var result = {
            contents: [],
            contentsPosition: {
                /**
                 * 컨텐츠 배열
                 */
                arrangement: 'horizontal', //수평 || vertical 수직

                /**
                 * 컨텐츠 배열 마진 (number,px,%)
                 */
                arrangementMargin: '10',
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
            }
        }
        if (!value) {
            return result;
        }
        if (value && typeof value != 'object') {
            return result;
        }

        for (var i = 0; i < value.length; i++) {
            var contentData = value[i];
            if (contentData.type == 'text') {
                result.contents.push({
                    shape: new OG.TextShape(value.value),
                    width: '80px',
                    height: '78px',
                    style: {
                        'fill': '#f8f8f8',
                        'fill-opacity': 1,
                        'font-size': 9
                    }
                });
            }

            if (contentData.type == 'activity') {
                var shape = new OG.A_Task(contentData.value);
                shape.CONNECTABLE = true;
                shape.GROUP_COLLAPSIBLE = false;
                shape.DELETABLE = false;
                shape.LABEL_EDITABLE = false;
                shape.RESIZABLE = false;
                result.contents.push({
                    /**
                     * 도형 shape
                     */
                    shape: shape,
                    /**
                     * 도형 가로 (number,px,%)
                     */
                    width: '80px',
                    /**
                     * 도형 세로 (number,px,%)
                     */
                    height: '38px',
                    /**
                     * 도형 스타일
                     */
                    style: {
                        'fill': '#fff',
                        'fill-opacity': 1,
                        'font-size': 9
                    }
                })
            }
        }
        return result;
    }

    //옵션데이터
    this.options = {
        /**
         * 컨텐트 외부 드래그 가능 여부
         */
        enableMoveOutSide: false,
        /**
         * 리사이즈 방향
         */
        resizeAxis: 'X',
        /**
         * 셀 콘텐트 axis 무브
         */
        axis: 'none',
        /**
         * 페이지당 row 수
         */
        pageLength: 100,
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
            'stroke': 'none',
            'border-bottom': {
                'stroke': '#616063',
                'stroke-width': '4'
            }
        },
        columnEditable: false,

        rowDividingLine: {
            'stroke': '#abaaad',
            'stroke-width': '1'
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
            'fill-opacity': 0,
            'font-size': 8,
            'border-right': {
                'stroke': '#ebeaed',
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
                    'border-left': {
                        'stroke': '#abaaad',
                        'stroke-width': '1'
                    },
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
                },
                columnEditable: false
            },
            {
                data: '90_',
                title: '견적 착수\n90',
                defaultContent: '',
                renderer: renderer,
                columnEditable: true
            },
            {
                data: '85_',
                title: 'IRS\n85',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '80_',
                title: 'Ref.PJT 선정',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '75_',
                title: 'HBD\n75',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '70_',
                title: 'WBD\n70',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '65_',
                title: 'P&ID\n65',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '60_',
                title: 'P&ID\n60',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '55_',
                title: 'P&ID\n55',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '50_',
                title: 'P&ID\n50',
                defaultContent: '',
                renderer: renderer
            },
            {
                data: '40_',
                title: 'Plot Plan\n40',
                defaultContent: '',
                renderer: renderer,
                columnStyle: {
                    'border-right': {
                        'stroke': '#abaaad',
                        'stroke-width': '1'
                    }
                }
            }
        ]
    }

    this.data = {};

    this.data.tableData = [];
    //테이블 뷰 데이터
    this.data.viewData = {
        pageLength: undefined,
        currentPage: undefined,
        columnHeight: undefined,
        columns: {},
        rows: [],
        grid: []
    }

    //최초 draw 여부
    this.firstRender = false;

    //어레이 move 추가.
    Array.prototype.move = function (old_index, new_index) {
        while (old_index < 0) {
            old_index += this.length;
        }
        while (new_index < 0) {
            new_index += this.length;
        }
        if (new_index >= this.length) {
            var k = new_index - this.length;
            while ((k--) + 1) {
                this.push(undefined);
            }
        }
        this.splice(new_index, 0, this.splice(old_index, 1)[0]);
        return this; // for testing purposes
    };
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

OG.shape.component.DataTable.prototype.createSubShape = function () {
    if (!this.geom.style.map) {
        return;
    }
    this.sub = [];
    var grid, gridData;
    if (this.data.viewData.grid) {
        for (var i = 0, leni = this.data.viewData.grid.length; i < leni; i++) {
            gridData = this.data.viewData.grid[i];
            grid = JSON.parse(JSON.stringify(gridData));
            if (grid.value) {
                grid.shape = eval('new ' + grid.shape + '(grid.value)');
            } else {
                grid.shape = eval('new ' + grid.shape + '()');
            }
            this.sub.push(grid);
        }
    }
    return this.sub;
}

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
    this.data.tableData = data;
}


/**
 * 주어진 칼럼과 데이터를 바탕으로, 범위에서 벗어난 셀들을 모두 삭제한다.
 */
OG.shape.component.DataTable.prototype.removeOutRangeCells = function (columns, dataToDraw) {
    var me = this
    //칼럼 삭제
    var columnViews = me.data.viewData.columns;
    var columnList = [];
    for (var l = 0, lenl = columns.length; l < lenl; l++) {
        columnList.push(columns[l].data);
    }
    for (var column in columnViews) {
        if (columnList.indexOf(column) == -1) {
            delete columnViews[column];
        }
    }

    //row 삭제
    var row;
    var toDrawRowLength = dataToDraw.data.length;
    var currentRowLength = me.data.viewData.rows.length;

    for (var r = 0; r < currentRowLength; r++) {
        row = me.data.viewData.rows[r];
        for (var key in row.cells) {
            var contents = row.cells[key].contents;
            var cellToRemove = false;

            //데이터 영역 밖의 row 는 전부 삭제한다.
            if ((r + 1) > toDrawRowLength) {
                cellToRemove = true;
            }

            //데이터 영역 안의 row 중 columnList 에 없는 것은 삭제한다.
            else if (columnList.indexOf(key) == -1) {
                cellToRemove = true;
            }

            if (cellToRemove) {
                if (contents && contents.length) {
                    $.each(contents, function (c, contentId) {
                        if (me.currentCanvas.getElementById(contentId)) {
                            me.currentCanvas.removeShape(contentId);
                        }
                    })
                }
                delete row.cells[key];
            }
        }
    }
    me.data.viewData.rows.splice(toDrawRowLength, currentRowLength);
}

/**
 * 주어진 좌표를 포함하는 셀뷰를 얻어온다.
 */
OG.shape.component.DataTable.prototype.getCellViewFromOffset = function (offset) {
    var me = this;
    var rows, cells, cellView, expectCellView, cellOffset, width, height;
    rows = me.data.viewData.rows;
    $.each(rows, function (index, row) {
        cells = row.cells;
        if (cells) {
            for (var field in cells) {
                cellView = cells[field];
                cellOffset = cellView.offset;
                width = cellView.width;
                height = cellView.height;

                //offset x,y 가 셀 바운더리 영역에 포함될 경우
                if (cellOffset[0] <= offset[0] &&
                    cellOffset[0] + width >= offset[0] &&
                    cellOffset[1] <= offset[1] &&
                    cellOffset[1] + height >= offset[1]) {
                    expectCellView = cellView;
                }
            }
        }
    })

    for (var field in me.data.viewData.columns) {
        cellView = me.data.viewData.columns[field];
        cellOffset = cellView.offset;
        width = cellView.width;
        height = cellView.height;

        //offset x,y 가 셀 바운더리 영역에 포함될 경우
        if (cellOffset[0] <= offset[0] &&
            cellOffset[0] + width >= offset[0] &&
            cellOffset[1] <= offset[1] &&
            cellOffset[1] + height >= offset[1]) {
            expectCellView = cellView;
        }
    }

    return expectCellView;
}

/**
 * 컨텐트 엘리먼트로부터 셀뷰를 얻어온다.
 * @param contentElement
 * @return OG.Cell
 */
OG.shape.component.DataTable.prototype.getCellViewFromContent = function (contentElement) {
    var me = this;
    var rows, expectCellView, cellView = null;
    if (contentElement && contentElement.nodeType == 1 && me.currentCanvas.getRenderer().isShape(contentElement)) {
        rows = me.data.viewData.rows;
        $.each(rows, function (index, row) {
            for (var field in row.cells) {
                cellView = row.cells[field];
                if (cellView['contents'] && cellView['contents'].length) {
                    $.each(cellView['contents'], function (idx, contentId) {
                        if (contentId == contentElement.id) {
                            expectCellView = cellView;
                        }
                    })
                }
            }
        })
    }
    return expectCellView;
}


/**
 * 셀의 데이터를 및 콘텐트를 삭제한다.
 * @param cellView
 * @param preventRemove
 */
OG.shape.component.DataTable.prototype.emptyCell = function (cellView, preventRemove) {
    var me = this;
    var data = me.getCellInformation(cellView);

    //value 삭제
    me.data.viewData.rows[data.rowIndex].cells[data.column]['value'] = null;
    me.data.tableData[data.rowDataIndex][data.column] = null;

    if (data.contents && data.contents.length) {
        $.each(data.contents, function (i, contentElementId) {
            if (!preventRemove) {
                me.currentCanvas.removeShape(contentElementId, true);
            }
        })
    }
    me.data.viewData.rows[data.rowIndex].cells[data.column]['contents'] = [];
    me.drawCell(cellView, true);
}

/**
 * 주어진 컨텐트 엘리먼트를 셀에 추가시킨다.
 * @param cellView
 * @param contentElementsWithValue [{element:element,value:value}]
 */
OG.shape.component.DataTable.prototype.addCellContent = function (cellView, contentElementsWithValue) {
    var me = this, contentElement, isExist, beforeIndex, newIndex, boundary, value;
    var data = me.getCellInformation(cellView);
    if (!data.contents) {
        data.contents = [];
        me.data.viewData.rows[data.rowIndex].cells[data.column]['contents'] = [];
    }

    if (!data.contentsPosition) {
        data.contentsPosition = {}
    }
    if (!data.contentsPosition['arrangement']) {
        data.contentsPosition['arrangement'] = 'horizontal';
    }

    var elementsToAdd = [];
    for (var i = 0; i < contentElementsWithValue.length; i++) {
        contentElement = contentElementsWithValue[i].element;
        if (contentElement && contentElement.nodeType == 1 && me.currentCanvas.getRenderer().isShape(contentElement)) {
            //신규 컨텐트의 센터와 기존 컨텐트의 센터들 사이간의 위치 인덱스를 구한다.
            isExist = false;
            beforeIndex = 0;
            newIndex = 0;
            boundary = me.currentCanvas.getBoundary(contentElement);
            $.each(data.contentElements, function (i, existContent) {
                if (existContent.id == contentElement.id) {
                    isExist = true;
                    beforeIndex = i;
                }
                //가로 방향 정렬일경우 x 포지션 비교
                if (data.contentsPosition['arrangement'] == 'horizontal') {
                    var x = me.currentCanvas.getBoundary(existContent).getCentroid().x;
                    if (x < boundary.getCentroid().x) {
                        newIndex = i + 1;
                    }
                }
                //세로 방향 정렬일경우 y 포지션 비교
                else {
                    var y = me.currentCanvas.getBoundary(existContent).getCentroid().y;
                    if (y < boundary.getCentroid().y) {
                        newIndex = i + 1;
                    }
                }
            })
            elementsToAdd.push({
                element: contentElement,
                value: contentElementsWithValue[i].value,
                isExist: isExist,
                beforeIndex: beforeIndex,
                newIndex: newIndex
            });
        }
    }

    for (var c = 0; c < elementsToAdd.length; c++) {
        isExist = elementsToAdd[c].isExist;
        beforeIndex = elementsToAdd[c].beforeIndex;
        newIndex = elementsToAdd[c].newIndex;
        value = elementsToAdd[c].value;
        contentElement = elementsToAdd[c].element;

        //신규 컨텐트를 추가하는 경우
        if (!isExist) {
            //다른 셀에서 contentElement 를 사용한다면 연결을 해제한다.
            var removeValue = me.removeCellContent(contentElement, true);
            //주어진 value 가 없고, 이전 사용중인 셀이 있다면 이전 사용중인 셀에서 가져온 value 로 대체한다.
            if (!value && removeValue) {
                value = removeValue;
            }
            //그래도 value 가 없다면 contentElement 의 데이터로 대체한다.
            if (!value) {
                value = contentElement.shape.data ? contentElement.shape.data : {};
            }

            //뷰테이블 추가
            me.data.viewData.rows[data.rowIndex].cells[data.column]['contents'].splice(newIndex, 0, contentElement.id);

            //해당 value 를 인덱스에 추가한다.
            if (!me.data.viewData.rows[data.rowIndex].cells[data.column]['value']) {
                me.data.viewData.rows[data.rowIndex].cells[data.column]['value'] = [];
                me.data.tableData[data.rowDataIndex][data.column] = [];
            }
            if (typeof me.data.viewData.rows[data.rowIndex].cells[data.column]['value'] == 'object') {
                me.data.viewData.rows[data.rowIndex].cells[data.column]['value'].splice(newIndex, 0, value);
                me.data.tableData[data.rowDataIndex][data.column] =
                    JSON.parse(JSON.stringify(me.data.viewData.rows[data.rowIndex].cells[data.column]['value']));
            }

            me.drawCell(cellView, true);
        }
        //같은 셀 내부에서 컨텐트를 이동하는 경우
        else {
            //위치가 같은 경우 순서를 조작하지 않음.
            if (beforeIndex == newIndex) {
                me.redrawCell(cellView);
            }
            else {
                //뒤로 순서가 이동하는 경우, 자신의 기존 인덱스를 고려하여 newIndex 에서 1 후퇴.
                if (newIndex > beforeIndex) {
                    newIndex = newIndex - 1;
                }
                me.data.viewData.rows[data.rowIndex].cells[data.column]['contents'].move(beforeIndex, newIndex);
                me.data.viewData.rows[data.rowIndex].cells[data.column]['value'].move(beforeIndex, newIndex);
                me.data.tableData[data.rowDataIndex][data.column] =
                    JSON.parse(JSON.stringify(me.data.viewData.rows[data.rowIndex].cells[data.column]['value']));
                me.redrawCell(me.refreshCellView(cellView));
            }
        }
    }

    // var boundary = me.currentCanvas.getBoundary(contentElement);
    // if (contentElement && contentElement.nodeType == 1 && me.currentCanvas.getRenderer().isShape(contentElement)) {
    //     var data = me.getCellInformation(cellView);
    //     if (!data.contents) {
    //         data.contents = [];
    //         me.data.viewData.rows[data.rowIndex].cells[data.column]['contents'] = [];
    //     }
    //
    //     if (!data.contentsPosition) {
    //         data.contentsPosition = {}
    //     }
    //     if (!data.contentsPosition['arrangement']) {
    //         data.contentsPosition['arrangement'] = 'horizontal';
    //     }
    //     //신규 컨텐트의 센터와 기존 컨텐트의 센터들 사이간의 위치 인덱스를 구한다.
    //     var isExist = false;
    //     var beforeIndex = 0;
    //     var newIndex = 0;
    //     $.each(data.contentElements, function (i, existContent) {
    //         if (existContent.id == contentElement.id) {
    //             isExist = true;
    //             beforeIndex = i;
    //         }
    //         //가로 방향 정렬일경우 x 포지션 비교
    //         if (data.contentsPosition['arrangement'] == 'horizontal') {
    //             var x = me.currentCanvas.getBoundary(existContent).getCentroid().x;
    //             if (x < boundary.getCentroid().x) {
    //                 newIndex = i + 1;
    //             }
    //         }
    //         //세로 방향 정렬일경우 y 포지션 비교
    //         else {
    //             var y = me.currentCanvas.getBoundary(existContent).getCentroid().y;
    //             if (y < boundary.getCentroid().y) {
    //                 newIndex = i + 1;
    //             }
    //         }
    //     })
    //
    //     //신규 컨텐트를 추가하는 경우
    //     if (!isExist) {
    //         //다른 셀에서 contentElement 를 사용한다면 연결을 해제한다.
    //         var removeValue = me.removeCellContent(contentElement, true);
    //         //주어진 value 가 없고, 이전 사용중인 셀이 있다면 이전 사용중인 셀에서 가져온 value 로 대체한다.
    //         if (!value && removeValue) {
    //             value = removeValue;
    //         }
    //         //그래도 value 가 없다면 contentElement 의 데이터로 대체한다.
    //         if (!value) {
    //             value = contentElement.shape.data ? contentElement.shape.data : {};
    //         }
    //
    //         //뷰테이블 추가
    //         me.data.viewData.rows[data.rowIndex].cells[data.column]['contents'].splice(newIndex, 0, contentElement.id);
    //
    //         //해당 value 를 인덱스에 추가한다.
    //         if (!me.data.viewData.rows[data.rowIndex].cells[data.column]['value']) {
    //             me.data.viewData.rows[data.rowIndex].cells[data.column]['value'] = [];
    //             me.data.tableData[data.rowDataIndex][data.column] = [];
    //         }
    //         if (typeof me.data.viewData.rows[data.rowIndex].cells[data.column]['value'] == 'object') {
    //             me.data.viewData.rows[data.rowIndex].cells[data.column]['value'].splice(newIndex, 0, value);
    //             me.data.tableData[data.rowDataIndex][data.column] =
    //                 JSON.parse(JSON.stringify(me.data.viewData.rows[data.rowIndex].cells[data.column]['value']));
    //         }
    //
    //         me.drawCell(cellView, true);
    //     }
    //     //같은 셀 내부에서 컨텐트를 이동하는 경우
    //     else {
    //         //위치가 같은 경우 순서를 조작하지 않음.
    //         if (beforeIndex == newIndex) {
    //             me.redrawCell(cellView);
    //         }
    //         else {
    //             //뒤로 순서가 이동하는 경우, 자신의 기존 인덱스를 고려하여 newIndex 에서 1 후퇴.
    //             if (newIndex > beforeIndex) {
    //                 newIndex = newIndex - 1;
    //             }
    //             me.data.viewData.rows[data.rowIndex].cells[data.column]['contents'].move(beforeIndex, newIndex);
    //             me.data.viewData.rows[data.rowIndex].cells[data.column]['value'].move(beforeIndex, newIndex);
    //             me.data.tableData[data.rowDataIndex][data.column] =
    //                 JSON.parse(JSON.stringify(me.data.viewData.rows[data.rowIndex].cells[data.column]['value']));
    //             me.redrawCell(me.refreshCellView(cellView));
    //         }
    //     }
    // }
};

/**
 * 주어진 컨텐트 엘리먼트를 셀에서 제외시킨다.
 * @param contentElement
 * @param preventRemove
 * @return removeValue 엘리먼트가 삭제되면서 같이 삭제된 value
 */
OG.shape.component.DataTable.prototype.removeCellContent = function (contentElement, preventRemove) {
    var me = this;
    var cellView = me.getCellViewFromContent(contentElement);
    if (!cellView) {
        return null;
    }
    var data = me.getCellInformation(cellView);
    var removeValue;
    if (data.contents && data.contents.length) {
        $.each(data.contents, function (i, contentElementId) {
            if (contentElementId == contentElement.id) {
                if (!preventRemove) {
                    me.currentCanvas.removeShape(contentElement, true);
                }
                //뷰테이블 내용 삭제
                me.data.viewData.rows[data.rowIndex].cells[data.column]['contents'].splice(i, 1);

                //해당 value 인덱스가 있다면 삭제.
                var value = me.data.viewData.rows[data.rowIndex].cells[data.column]['value'];
                if (value && typeof value == 'object') {
                    var copy = JSON.parse(JSON.stringify(value));
                    value.splice(i, 1);
                    me.data.tableData[data.rowDataIndex][data.column] = value;
                    removeValue = copy[i];
                }
                me.drawCell(cellView, true);
            }
        })
    }
    return removeValue;
}
/**
 * 셀을 원상복귀하여 다시 그린다.
 * @param cellView
 */
OG.shape.component.DataTable.prototype.redrawCell = function (cellView) {
    var me = this;
    me.drawCell(cellView, 'saved');
}

/**
 * Cell 의 viewData 에 저장된 연결정보를 바탕으로 Cell 의 컨텐트에 Edge 를 재연결시킨다.
 * Cell 아이디를 기반으로 찾아가게 해야 한다.
 * @param cellView
 */
OG.shape.component.DataTable.prototype.reconnectEdgesToContent = function (cellView) {
    var me = this;
    var edge, shapeId, replace, fromTerminal, toTerminal, direction, contentIndex, contentElement;
    var data = me.getCellInformation(cellView);
    var connection = me.data.viewData.rows[data.rowDataIndex].cells[data.column]['connection'];
    if (connection && connection.length && data.contentElements) {
        for (var i = 0, leni = connection.length; i < leni; i++) {
            contentIndex = connection[i].contentIndex;
            edge = me.currentCanvas.getElementById(connection[i].edgeId);
            fromTerminal = connection[i].from;
            toTerminal = connection[i].to;
            direction = connection[i].direction;
            contentElement = data.contentElements[contentIndex];
            if (!edge) {
                continue;
            }
            if (direction == 'from') {
                shapeId = fromTerminal.substring(0, fromTerminal.indexOf(OG.Constants.TERMINAL));
                replace = fromTerminal.replace(shapeId, contentElement.id);
                me.currentCanvas.getRenderer().connect(replace, null, edge, null, null, true);
            }
            if (direction == 'to') {
                shapeId = toTerminal.substring(0, toTerminal.indexOf(OG.Constants.TERMINAL));
                replace = toTerminal.replace(shapeId, contentElement.id);
                me.currentCanvas.getRenderer().connect(null, replace, edge, null, null, true);
            }
        }
        me.data.viewData.rows[data.rowDataIndex].cells[data.column]['connection'] = [];
    } else if (connection && connection.length && !data.contentElements) {
        for (var i = 0, leni = connection.length; i < leni; i++) {
            edge = me.currentCanvas.getElementById(connection[i].edgeId);
            if (edge) {
                me.currentCanvas.removeShape(edge, true);
            }
        }
    }
}

/**
 * CellView 의  콘텐츠와 연결된 Edge 를 연결 해제하고, 재연결 정보를 viewData 에 저장한다.
 * @param cellView
 */
OG.shape.component.DataTable.prototype.keepEdgesFromContent = function (cellView) {
    var me = this;
    var data = me.getCellInformation(cellView);
    var edge, fromShape, toShape, fromXY, toXY;
    $.each(data.contentElements, function (contentIndex, contentElement) {
        var prevEdges = me.currentCanvas.getPrevEdges(contentElement);
        var nextEdges = me.currentCanvas.getNextEdges(contentElement);
        var edges = prevEdges.concat(nextEdges);
        for (var i = 0, leni = edges.length; i < leni; i++) {
            edge = edges[i];
            var fromTerminal = $(edge).attr("_from");
            var toTerminal = $(edge).attr("_to");
            var direction;

            if (fromTerminal) {
                fromShape = me.currentCanvas.getRenderer()._getShapeFromTerminal(fromTerminal);
                fromXY = me.currentCanvas.getRenderer()._getPositionFromTerminal(fromTerminal);
                if (fromShape && fromShape.id == contentElement.id) {
                    me.currentCanvas.getRenderer().disconnectOneWay(edge, 'from');
                    direction = 'from';
                }
            }

            if (toTerminal) {
                toShape = me.currentCanvas.getRenderer()._getShapeFromTerminal(toTerminal);
                toXY = me.currentCanvas.getRenderer()._getPositionFromTerminal(toTerminal);
                if (toShape && toShape.id == contentElement.id) {
                    me.currentCanvas.getRenderer().disconnectOneWay(edge, 'to');
                    direction = 'to';
                }
            }
            if (!me.data.viewData.rows[data.rowDataIndex].cells[data.column]['connection']) {
                me.data.viewData.rows[data.rowDataIndex].cells[data.column]['connection'] = [];
            }

            var connection = me.data.viewData.rows[data.rowDataIndex].cells[data.column]['connection'];
            connection.push({
                contentIndex: contentIndex,
                edgeId: edge.id,
                from: fromTerminal,
                to: toTerminal,
                direction: direction
            });
        }
    });
}

/**
 * 셀의 정보를 가져온다.
 * @param cell
 * @return {Object}
 * {
 * ...
 *       columnOption : {Object}
 *       contentElements: [OG Element]
 *       tableElement: OG Element
 *       textElement: OG Element
 * }
 */
OG.shape.component.DataTable.prototype.getCellInformation = function (cellView) {
    var me = this;
    var view;
    if (cellView.type == 'column') {
        view = me.data.viewData.columns[cellView.column];
    } else {
        view = me.data.viewData.rows[cellView.rowIndex].cells[cellView.column];
    }
    if (!view) {
        return null;
    }
    var info = JSON.parse(JSON.stringify(view));
    var contentElement;
    info.contentElements = [];
    if (info.contents && info.contents.length) {
        $.each(info.contents, function (index, contentId) {
            contentElement = me.currentCanvas.getElementById(contentId);
            if (contentElement) {
                info.contentElements.push(contentElement);
            }
        })
    }

    info.tableElement = me.currentElement;
    info.columnOption = me.getColumnByField(info.column);
    return info;
}

OG.shape.component.DataTable.prototype.refreshCellView = function (cellView) {
    var me = this;
    var view;
    if (cellView.type == 'column') {
        view = me.data.viewData.columns[cellView.column];
    } else {
        view = me.data.viewData.rows[cellView.rowIndex].cells[cellView.column];
    }
    if (!view) {
        return null;
    }
    return JSON.parse(JSON.stringify(view));
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
 * 현재 테이블의 cell, row 인덱스 값으로 cellView 을 반환한다.
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
    return me.data.viewData.rows[rowIndex].cells[field];
}
/**
 * 리사이즈로 인한 draw 여부.
 * @param isResize
 */
OG.shape.component.DataTable.prototype.draw = function (isResize) {

    var startDate = new Date();
    var me = this;
    me.data.viewData.grid = [];

    var boundary = me.currentCanvas.getBoundary(me.currentElement);
    if (!me.options.columns) {
        throw new Error('No column options to render');
    }
    if (!me.data || !me.data.tableData) {
        throw new Error('No table data to render');
    }

    var startP = boundary.getUpperLeft();
    var startX = 0;
    var startY = 0;
    var nextY;

    //칼럼 리스트
    var columns = me.options.columns;
    var column;


    //드로잉 할 데이터 영역구하기
    var dataToDraw = me.getDataToDraw();
    //칼럼, dataToDraw 영역 밖에 요소 삭제하기.
    if (!isResize) {
        me.removeOutRangeCells(columns, dataToDraw);
    }

    var cellStyle, cellSize, style;
    //칼럼 그리기
    for (var i = 0, leni = columns.length; i < leni; i++) {
        column = columns[i];
        cellStyle = me.getCellStyle('column', column);
        cellSize = cellStyle.size;
        style = cellStyle.style;

        //뷰 데이터에 저장
        if (!me.data.viewData.columns[column.data]) {
            me.data.viewData.columns[column.data] = {};
        }
        me.data.viewData.columns[column.data]['type'] = 'column';
        me.data.viewData.columns[column.data]['width'] = cellSize[0];
        me.data.viewData.columns[column.data]['height'] = cellSize[1];
        me.data.viewData.columns[column.data]['top'] = startY;
        me.data.viewData.columns[column.data]['left'] = startX;
        me.data.viewData.columns[column.data]['offset'] = [startX + startP.x, startY + startP.y];
        me.data.viewData.columns[column.data]['style'] = style;
        me.data.viewData.columns[column.data]['tableId'] = me.currentElement.id;
        me.data.viewData.columns[column.data]['column'] = column.data;
        me.data.viewData.columns[column.data]['text'] = column.title;
        me.data.viewData.columns[column.data]['cellIndex'] = i;

        //칼럼 subShape 를 추가한다.
        me.data.viewData.grid.push({
            value: column.title,
            shape: 'OG.Cell',
            width: cellSize[0] + 'px',
            height: cellSize[1] + 'px',
            top: startY + 'px',
            left: startX + 'px',
            style: style
        });

        //다음 셀의 시작 x 를 증가시킨다.
        startX = startX + cellSize[0];

        //nextY 에는 다음 row 를 위한 값을 지정한다.
        nextY = startY + cellSize[1];
    }
    //최종 가로 사이즈.
    var totalWidth = startX;


    //데이터 그리기
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
        startX = 0;
        startY = nextY;

        //셀 그리기
        for (var c = 0, lenc = columns.length; c < lenc; c++) {
            column = columns[c];
            cellStyle = me.getCellStyle('cell', column, rowIndex, rowDataIndex);
            cellSize = cellStyle.size;
            style = cellStyle.style;

            //rowData 에 칼럼에 해당하는 필드가 있는지 찾는다.
            var value = null;
            for (var key in rowData) {
                if (column.data == key) {
                    value = rowData[key];
                }
            }

            //뷰 데이터에 저장
            if (!me.data.viewData.rows[rowIndex].cells[column.data]) {
                me.data.viewData.rows[rowIndex].cells[column.data] = {}
            }
            me.data.viewData.rows[rowIndex].cells[column.data]['type'] = 'cell';
            me.data.viewData.rows[rowIndex].cells[column.data]['width'] = cellSize[0];
            me.data.viewData.rows[rowIndex].cells[column.data]['height'] = cellSize[1];
            me.data.viewData.rows[rowIndex].cells[column.data]['top'] = startY;
            me.data.viewData.rows[rowIndex].cells[column.data]['left'] = startX;
            me.data.viewData.rows[rowIndex].cells[column.data]['offset'] = [startX + startP.x, startY + startP.y];
            me.data.viewData.rows[rowIndex].cells[column.data]['style'] = style;
            me.data.viewData.rows[rowIndex].cells[column.data]['tableId'] = me.currentElement.id;
            me.data.viewData.rows[rowIndex].cells[column.data]['value'] = value;
            me.data.viewData.rows[rowIndex].cells[column.data]['rowDataIndex'] = rowDataIndex;
            me.data.viewData.rows[rowIndex].cells[column.data]['rowIndex'] = rowIndex;
            me.data.viewData.rows[rowIndex].cells[column.data]['cellIndex'] = c;
            me.data.viewData.rows[rowIndex].cells[column.data]['column'] = column.data;

            //value 가 스트링 또는 number 일 경우 subShape 를 추가한다.
            if (typeof value == 'string' || typeof value == 'number') {
                var ignoreBorderStyle = JSON.parse(JSON.stringify(style));
                ignoreBorderStyle['border-left'] = null;
                ignoreBorderStyle['border-right'] = null;
                ignoreBorderStyle['border-top'] = null;
                ignoreBorderStyle['border-bottom'] = null;
                me.data.viewData.grid.push({
                    value: value,
                    shape: 'OG.Cell',
                    width: cellSize[0] + 'px',
                    height: cellSize[1] + 'px',
                    top: startY + 'px',
                    left: startX + 'px',
                    style: ignoreBorderStyle
                });
                me.data.viewData.rows[rowIndex].cells[column.data]['text'] = value;
            }

            if (isResize) {
                me.drawCell(me.data.viewData.rows[rowIndex].cells[column.data], 'saved', false);
            } else {
                me.drawCell(me.data.viewData.rows[rowIndex].cells[column.data], 'saved', true);
            }

            //다음 셀의 시작 x 를 증가시킨다.
            startX = startX + cellSize[0];

            //nextY 에는 다음 row 를 위한 값을 지정한다.
            nextY = startY + cellSize[1];
        }

        //가로 줄을 추가한다. 가로 줄은 row 의 하단에 그린다.
        me.options.rowDividingLine['arrow-end'] = 'none';
        me.options.rowDividingLine['arrow-start'] = 'none';
        me.data.viewData.grid.push({
            shape: 'OG.EdgeShape',
            vertices: [[0, nextY], [totalWidth, nextY]],
            style: me.options.rowDividingLine
        })
    }

    //세로 줄을 추가한다.
    if (me.data.viewData.rows.length) {
        for (var r = 0, lenr = columns.length; r < lenr; r++) {
            column = columns[r];
            cellStyle = me.data.viewData.rows[0].cells[column.data].style;
            var left = me.data.viewData.rows[0].cells[column.data].left;
            var width = me.data.viewData.rows[0].cells[column.data].width;
            var columnHeight = me.data.viewData.columnHeight;
            if (cellStyle['border-left']) {
                cellStyle['border-left']['arrow-end'] = 'none';
                cellStyle['border-left']['arrow-start'] = 'none';
                me.data.viewData.grid.push({
                    shape: 'OG.EdgeShape',
                    vertices: [[left, columnHeight], [left, nextY]],
                    style: cellStyle['border-left']
                })
            }
            if (cellStyle['border-right']) {
                cellStyle['border-right']['arrow-end'] = 'none';
                cellStyle['border-right']['arrow-start'] = 'none';
                me.data.viewData.grid.push({
                    shape: 'OG.EdgeShape',
                    vertices: [[left + width, columnHeight], [left + width, nextY]],
                    style: cellStyle['border-right']
                })
            }
        }
    }

    //subShape 들을 역순으로 배치한다.
    me.data.viewData.grid.reverse();

    //totalWidth, nextY 가 최종 테이블의 사이즈가 된다.
    var currentWidth = boundary.getWidth();
    var currentHeight = boundary.getHeight();
    me.currentCanvas.resize(me.currentElement, [0, nextY - currentHeight, 0, totalWidth - currentWidth]);
    var lowerRight = boundary.getLowerRight();
    var canvasSize = me.currentCanvas.getCanvasSize();
    //
    var resizeCanvas = false;
    if (canvasSize[0] < lowerRight.x + 5) {
        canvasSize[0] = lowerRight.x + 5;
        resizeCanvas = true;
    }
    if (canvasSize[1] < lowerRight.y + 5) {
        canvasSize[1] = lowerRight.y + 5;
        resizeCanvas = true;
    }
    if (resizeCanvas) {
        me.currentCanvas.setCanvasSize(canvasSize);
    }

    if (!me.firstRender) {
        me.firstRender = true;
        me.bindCellEvent();
    }

    me.currentElement.data = me.data;
}

/**
 * 데이터 테이블 클릭시 임시 셀을 생성하여 선택처리한다.
 */
OG.shape.component.DataTable.prototype.bindCellEvent = function () {
    var me = this, offset, cellView;
    $(me.currentElement).click(function (event) {
        offset = me.currentCanvas._HANDLER._getOffset(event);
        cellView = me.getCellViewFromOffset([offset.x, offset.y]);
        me.createCellGuid(cellView);
    });
}

OG.shape.component.DataTable.prototype.createCellGuid = function (cellView) {
    var me = this;
    //기존 등록된 임시 셀을 모두 삭제토록.
    var childs = me.currentCanvas.getChilds(me.currentElement);
    for (var i = 0, leni = childs.length; i < leni; i++) {
        if (childs[i].shape instanceof OG.Cell) {
            me.currentCanvas.removeShape(childs[i]);
        }
    }

    if (!cellView) {
        return;
    }

    //columnEditable
    var shape;
    if (cellView.type == 'column') {
        var columnOption = me.getColumnByField(cellView.column);
        var columnEditable = columnOption.columnEditable ? columnOption.columnEditable : me.options.columnEditable;
        shape = new OG.Cell(cellView.text);
        shape.LABEL_EDITABLE = columnEditable;
    } else {
        shape = new OG.Cell();
        shape.LABEL_EDITABLE = false;
    }

    //셀의 cellEditable 을 설정한다.
    if (!shape.data) {
        shape.data = {};
    }
    shape.data.dataTable = JSON.parse(JSON.stringify(cellView));

    var cellElement = me.currentCanvas.drawShape(
        [cellView.offset[0], cellView.offset[1]],
        shape,
        [cellView.width, cellView.height],
        // {
        //     'fill': '#fff',
        //     'fill-opacity': '0'
        // },
        cellView.style,
        null,
        me.currentElement.id
    )
    me.fitToBoundary(cellElement, cellView.width, cellView.height, cellView.offset[0], cellView.offset[1]);

    //칼럼이 아닌경우는 셀 컨텐트를 방해하지 않기 위해 뒤쪽으로 이동시킨다.
    if (cellView.type != 'column') {
        var firstChild = OG.Util.isIE() ? me.currentElement.childNodes[1] : me.currentElement.children[1];
        if (firstChild.id != cellElement.id) {
            me.currentElement.insertBefore(cellElement, OG.Util.isIE() ? me.currentElement.childNodes[1] : me.currentElement.children[1]);
        }
    }

    $(cellElement).click();
}

OG.shape.component.DataTable.prototype.getCellStyle = function (type, column, rowIndex, rowDataIndex) {
    var me = this;
    var viewHeight, viewWidth, style;

    //값의 우선순위 : options 값 < option 칼럼값 < view 값
    if (type == 'column') {
        //높이 얻기
        viewHeight = me.data.viewData.columnHeight;

        //viewHeight 없거나 X 리사이즈만 허용이라면
        if (!viewHeight || me.options.resizeAxis == 'X') {
            me.data.viewData.columnHeight = me.options.columnHeight;
            viewHeight = me.options.columnHeight;
        }

        //가로 얻기
        var viewColumn = me.data.viewData.columns[column.data];
        if (!viewColumn || me.options.resizeAxis == 'Y') {
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
                rowIndex: rowIndex,
                cells: {}
            }
        }
        //rowDataIndex 는 매번 달라질 수 있으므로 뷰데이터에 덮어쓰도록 한다.
        me.data.viewData.rows[rowIndex].rowDataIndex = rowDataIndex;

        //높이 얻기
        viewHeight = me.data.viewData.rows[rowIndex]['rowHeight'];
        if (!viewHeight || me.options.resizeAxis == 'X') {
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
 * @param cellView
 * @param info
 * @param renderData
 */
OG.shape.component.DataTable.prototype.drawCellContent = function (cellView, info, renderData) {
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

    var me = this;
    var rowIndex = info.rowIndex;
    var cellView = me.data.viewData.rows[info.rowIndex].cells[info.column];

    //contentsPosition 이 없을경우 빈 오브젝트
    if (!renderData['contentsPosition']) {
        renderData['contentsPosition'] = {}
    }
    var contentsPosition = JSON.parse(JSON.stringify(renderData['contentsPosition']));
    if (!contentsPosition['arrangement']) {
        contentsPosition['arrangement'] = 'horizontal';
    }
    if (!contentsPosition['arrangementMargin']) {
        contentsPosition['arrangementMargin'] = '10';
    }

    var contentB;
    var contentW;
    var contentH;


    //기존 컨텐트 엘리먼트가 있는 경우
    var isExistContents;
    var contentSizeArr = [];
    if (renderData.contentElements && renderData.contentElements.length) {
        isExistContents = true;
        $.each(renderData.contentElements, function (i, contentElement) {
            contentB = me.currentCanvas.getBoundary(contentElement);
            contentW = contentB.getWidth();
            contentH = contentB.getHeight();
            contentSizeArr.push({
                width: contentW,
                height: contentH
            });
        });
    }
    //신규 컨텐트인 경우
    else if (renderData.contents && renderData.contents.length) {
        isExistContents = false;
        $.each(renderData.contents, function (i, contentData) {
            contentW = getLength(info.width, contentData.width);
            contentH = getLength(info.width, contentData.height);
            contentSizeArr.push({
                width: contentW,
                height: contentH
            });
        })
    }
    // 그외의 경우
    else {
        return;
    }

    //컨텐츠 그룹의 크기를 구하고, 그룹안에서의 포지션을 정한다.
    //수평일때는 가로를 더해가며, 세로는 가장 큰 사이즈로 잡는다.
    //수직일때는 세로를 더해가며, 가로는 가장 큰 사이즈로 잡는다.
    var groupWidth = 0;
    var groupHeight = 0;
    var arrangementMargin = 0;
    if (contentsPosition.arrangement != 'horizontal' && contentsPosition.arrangement != 'vertical') {
        contentsPosition.arrangement = 'horizontal';
    }
    if (contentsPosition.arrangement == 'horizontal') {
        arrangementMargin = getLength(info.width, contentsPosition.arrangementMargin);
    } else {
        arrangementMargin = getLength(info.height, contentsPosition.arrangementMargin);
    }
    for (var i = 0; i < contentSizeArr.length; i++) {
        contentW = contentSizeArr[i].width;
        contentH = contentSizeArr[i].height;
        if (contentsPosition.arrangement == 'horizontal') {
            if (i > 0) {
                contentSizeArr[i].left = groupWidth + arrangementMargin;
                groupWidth = groupWidth + contentW + arrangementMargin;
            } else {
                contentSizeArr[i].left = groupWidth;
                groupWidth = groupWidth + contentW;
            }
            if (groupHeight < contentH) {
                groupHeight = contentH;
            }
        } else {
            if (i > 0) {
                contentSizeArr[i].top = groupHeight + arrangementMargin;
                groupHeight = groupHeight + contentH + arrangementMargin;
            } else {
                contentSizeArr[i].top = groupHeight;
                groupHeight = groupHeight + contentH;
            }
            if (groupWidth < contentW) {
                groupWidth = contentW;
            }
        }
    }

    //최종 높이 또는 최종 넓이에 맞추어 그룹안에서의 포지션을 정한다.
    var contentL, contentT;
    for (var c = 0; c < contentSizeArr.length; c++) {
        contentW = contentSizeArr[c].width;
        contentH = contentSizeArr[c].height;
        if (contentsPosition.arrangement == 'horizontal') {
            contentT = (groupHeight - contentH) / 2;
            contentSizeArr[c].top = contentT;
        } else {
            contentL = (groupWidth - contentW) / 2;
            contentSizeArr[c].left = contentL;
        }
    }

    //그룹이 셀에서 위치하는 포지션을 정한다.
    var width = groupWidth;
    var height = groupHeight;
    var left = contentsPosition.left;
    var top = contentsPosition.top;
    var right = contentsPosition.right;
    var bottom = contentsPosition.bottom;
    var align = contentsPosition.align;
    var verticalAlign = contentsPosition['vertical-align'];

    var bW = info.width;
    var bH = info.height;
    var bL = info.offset[0];
    var bT = info.offset[1];

    //left , right , align 이 없을 경우 align 을 센터로.
    if ((!left && left != 0) && (!right && right != 0) && !align) {
        align = 'center';
    }
    //top , bottom , align 이 없을 경우 vertice-algin 을 미들로
    if ((!top && top != 0) && (!bottom && bottom != 0) && !verticalAlign) {
        verticalAlign = 'middle';
    }

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

    //그룹의 top,left,width,height 를 구했으므로, contentSizeArr 배치 정보에 따라 각 도형을 그려나가도록 한다.
    var contentElement, contentCenter, renderShape, renderStyle;

    //뷰데이터의 콘텐츠 정보 초기화.
    me.data.viewData.rows[info.rowIndex].cells[info.column].contents = [];
    $.each(contentSizeArr, function (index, contentSize) {
        contentW = Math.round(contentSize.width);
        contentH = Math.round(contentSize.height);
        contentL = Math.round(contentSize.left + left);
        contentT = Math.round(contentSize.top + top);
        contentCenter = [Math.round(contentL + contentW / 2), Math.round(contentT + contentH / 2)];

        //기존 컨텐트인 경우
        if (isExistContents) {
            contentElement = renderData.contentElements[index];
            var existBoundary = me.currentCanvas.getBoundary(contentElement);
            if (existBoundary.getWidth() != contentW || existBoundary.getHeight() != contentH) {
                me.currentCanvas.resizeBox(contentElement, [contentW, contentH], true);
            }
            if (existBoundary.getCentroid().x != contentCenter[0] || existBoundary.getCentroid().y != contentCenter[1]) {
                me.currentCanvas.moveCentroid(contentElement, contentCenter, true);
            }
            //Edge 일 경우 캔버스 상단으로 위치시킨다.
            if (contentElement.shape instanceof OG.shape.EdgeShape) {
                if (me.currentCanvas.getParent(contentElement)) {
                    me.currentCanvas.toFront(contentElement);
                }
            }
            //콘텐트 엘리먼트 속성을 설정한다.
            if (contentElement.shape.CONNECT_CLONEABLE) {
                contentElement.shape.CONNECT_CLONEABLE = false;
                me.currentCanvas.getRenderer().redrawShape(contentElement);
            }
        }
        //신규 컨텐트인 경우
        else {
            renderShape = renderData.contents[index].shape;
            renderStyle = renderData.contents[index].style;

            //콘텐트 엘리먼트에 속성을 설정한다.
            //renderShape.RESIZABLE = false;
            renderShape.COPYABLE = false;
            renderShape.CONNECT_CLONEABLE = false;

            //Edge 이면서 width,height 로 표현하는 경우, Edge 를 생성한후 리사이징, 이동시킨다.
            if (renderShape instanceof OG.shape.EdgeShape) {
                contentElement = me.currentCanvas.drawShape(
                    null,
                    renderShape,
                    null,
                    renderStyle,
                    null
                    //me.currentElement.id
                );
                me.currentCanvas.resizeBox(contentElement, [contentW, contentH], true);
                me.currentCanvas.moveCentroid(contentElement, contentCenter, true);
            }
            else {
                contentElement = me.currentCanvas.drawShape(
                    contentCenter,
                    renderShape,
                    [contentW, contentH],
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
            me.removeCellContent(contentElement);
        }
        //콘텐트 이동시 처리
        contentElement.shape.onAddedToGroup = function (groupElement, element) {
            //그룹이 소속된 테이블이 아닐 경우
            if (groupElement.id != me.currentElement.id) {

                //외부 드래그 허용이 아닌경우 테이블 그룹에 다시 추가 후 셀을 다시 그린다.
                if (!me.options.enableMoveOutSide) {
                    me.currentElement.appendChild(contentElement);
                    me.redrawCell(cellView);
                }
                else {
                    //셀에 자신의 정보를 삭제한 후, 등록된 이벤트 핸들러들을 스스로 초기화시킨다.
                    me.removeCellContent(element, true);
                    element.shape.onRemoveShape = function () {
                    };
                    element.shape.onAddedToGroup = function () {
                    };
                    element.shape.onResize = function () {
                    };
                }
            }
        }
        //콘텐트 리사이즈시 처리
        contentElement.shape.onResize = function (offset) {
            me.redrawCell(cellView);
        }

        //셀 뷰데이터를 꾸민다.
        me.data.viewData.rows[info.rowIndex].cells[info.column].contents.push(contentElement.id);
        me.data.viewData.rows[info.rowIndex].cells[info.column].contentsPosition = contentsPosition;
    });
}

/**
 * 주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다. left,top 기준(이동 & 리사이즈)
 * @param element
 * @param width
 * @param height
 * @param left
 * @param top
 * @return {Element}
 */
OG.shape.component.DataTable.prototype.fitToBoundary = function (element, width, height, left, top) {
    var boundary = element.shape.geom.boundary,
        newUpper = boundary.getUpperCenter().y - top,
        newLower = (top + height) - boundary.getLowerCenter().y,
        newLeft = boundary.getLeftCenter().x - left,
        newRight = (left + width) - boundary.getRightCenter().x;
    this.currentCanvas.getRenderer().resize(element, [newUpper, newLower, newLeft, newRight], true);
    return element;
}

OG.shape.component.DataTable.prototype.fitToCenter = function (element, width, height, centerX, centerY) {
    var boundary = element.shape.geom.boundary,
        newUpper = boundary.getUpperCenter().y - top,
        newLower = (top + height) - boundary.getLowerCenter().y,
        newLeft = boundary.getLeftCenter().x - left,
        newRight = (left + width) - boundary.getRightCenter().x;
    this.currentCanvas.getRenderer().resize(element, [newUpper, newLower, newLeft, newRight], true);
    return element;
}

/**
 * 셀을 그린다.
 * @param cellView
 * @param ignoreRenderer
 * @param forceRedraw
 */
OG.shape.component.DataTable.prototype.drawCell = function (cellView, ignoreRenderer, forceRedraw) {

    var me = this;
    var info = me.getCellInformation(cellView);

    //forceRedraw 일 경우는 기존 api 또는 사용자 액션으로 일어난 콘텐츠의 뒤바뀜을 모두 원상복귀한다.
    if (forceRedraw) {
        //ignoreRenderer 를 false 로 고정한다.
        ignoreRenderer = false;

        //contentElements 가 있다면 Edge 를 연결해제 하고 저장한 후, Content 는 삭제한다.
        if (info['contentElements'].length) {
            me.keepEdgesFromContent(cellView);
            $.each(info['contentElements'], function (i, element) {
                me.currentCanvas.removeShape(element, true);
            })

            me.data.viewData.rows[info.rowIndex].cells[info.column]['contents'] = [];
            me.data.viewData.rows[info.rowIndex].cells[info.column]['contentsPosition'] = null;
        }
        info['contentElements'] = [];
    }

    //ignoreRenderer 값을 재설정한다.
    if (ignoreRenderer == 'saved') {
        if (info.ignoreRenderer) {
            ignoreRenderer = true;
        } else {
            ignoreRenderer = false;
        }
    } else if (ignoreRenderer && ignoreRenderer != 'saved') {
        ignoreRenderer = true;
    } else {
        ignoreRenderer = false;
    }


    var renderData = {
        contents: [],
        contentsPosition: {},
        contentElements: null
    };
    var useRenderData = false;

    //ignoreRenderer 를 없애라.
    //한번 렌더링 된 녀석은 draw 메소드가 오기 전까지 그대로 간다.
    //updateCell 로 오게될 경우 컨텐트가 없어도 렌더링을 사용하지 않는다.
    //텍스트, 컨텐트는 별개인데, 강제로 업데이트 시킬경우 표식이 필요.

    //기존 컨텐트가 있는 경우는 ignoreRenderer 에 상관없이 컨텐트를 우선 표현한다.
    if (info.contentElements && info.contentElements.length) {
        renderData.contentElements = info.contentElements;
        renderData.contentsPosition = info.contentsPosition;
        useRenderData = true;
    }
    //컨텐트 엘리먼트가 없는 경우 렌더러가 있을 경우 표현한다.
    // ignoreRenderer 일 경우는 렌더데이터를 사용하지 않으며, 렌더러가 없는 경우도 렌더데이터를 사용하지 않는다.
    else {
        if (!ignoreRenderer) {
            if (info.columnOption.renderer) {
                renderData = info.columnOption.renderer(info.value);
                useRenderData = true;
            } else {
                useRenderData = false;
            }
        } else {
            useRenderData = false;
        }
    }

    //뷰 데이터에 꾸미기
    me.data.viewData.rows[info.rowIndex].cells[info.column].ignoreRenderer = ignoreRenderer;

    //셀 콘텐트 꾸미기
    if (useRenderData) {
        me.drawCellContent(cellView, info, renderData);
    }
    //
    me.reconnectEdgesToContent(cellView);
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
    if (me.options.resizeAxis == 'X') {
        offset[0] == 0;
        offset[1] == 0;
    } else if (me.options.resizeAxis == 'Y') {
        offset[3] == 0;
        offset[4] == 0;
    }

    var boundary = me.currentCanvas.getBoundary(cell);
    var cellView = cell.shape.data.dataTable;
    var column = cellView.column;
    var cellIndex = cellView.cellIndex;
    var rowIndex = cellView.rowIndex;

    if (cellView.type == 'column') {
        //뷰 데이터의 columnHeight 를 변경한다.
        if (me.options.resizeAxis != 'X') {
            me.data.viewData.columnHeight = boundary.getHeight();
        }
    }
    else if (cellView.type == 'cell') {
        //뷰 데이터의 rowHeight 를 변경한다.
        if (me.options.resizeAxis != 'X') {
            me.data.viewData.rows[rowIndex].rowHeight = boundary.getHeight();
        }
    }

    //뷰 칼럼의 width 를 변경한다.
    if (me.options.resizeAxis != 'Y') {
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
    }
    me.draw(true);
    var refreshCellView = me.refreshCellView(cellView);
    me.createCellGuid(refreshCellView);
}

//컨텍스트 메뉴에 셀
OG.shape.component.DataTable.prototype.createContextMenu = function () {
    return {};
};

/**
 * 어떠한 도형이 사용자의 행위로 테이블로 끌어당겨졌을 경우
 * @param groupElement
 * @param elements
 */
OG.shape.component.DataTable.prototype.onAddToGroup = function (groupElement, elements) {
    //해당 엘리먼트가 등록된 셀을 조회한다.
    //있다면, 기존셀에서 현재셀로 콘텐트를 이동한다.
    //없다면, 신규 콘텐트로 등록한다.
    var me = this;
    var beforeCell;
    var dropCell, dropElements;
    console.log(elements);
    if (groupElement.id == me.currentElement.id) {

        //셀 컨텐트를 부여하고 난 이후에 dropCell 이 달라지기 때문에 미리 배정을 한다.
        var dropCellMap = {};
        var noneDropCellList = [];
        for (var b = 0; b < elements.length; b++) {
            //셀이 이동되었을 경우 셀 무시
            if (elements[b].shape instanceof OG.Cell) {
                continue;
            }

            //콘텐트의 중심을 포함한 셀을 찾는다.
            var centroid = me.currentCanvas.getBoundary(elements[b]).getCentroid();
            var toDropCell = me.getCellViewFromOffset([centroid.x, centroid.y]);
            if (toDropCell && toDropCell.type == 'column') {
                toDropCell = null;
            }
            if (toDropCell) {
                var rowIndex = toDropCell.rowIndex;
                var cellIndex = toDropCell.cellIndex;
                var dropKey = rowIndex + '_' + cellIndex + '_';
                if (dropCellMap[dropKey]) {
                    dropCellMap[dropKey]['elements'].push(elements[b]);
                } else {
                    dropCellMap[dropKey] = {
                        dropCell: toDropCell,
                        elements: [elements[b]]
                    }
                }
            } else {
                noneDropCellList.push(elements[b]);
            }
        }

        //드랍셀이 없는 엘리먼트를 먼저 처리한다.
        for (var i = 0; i < noneDropCellList.length; i++) {
            //콘텐트를 가지고 있던 기존 셀을 구한다.
            beforeCell = me.getCellViewFromContent(noneDropCellList[i]);

            //드랍셀이 없고 이전 셀도 없다면 콘텐트를 테이블 밖으로 빼야 한다.
            //이 경우는 외부에서 드랍되었는데 칼럼으로 떨어진 경우다.
            if (!beforeCell) {
                me.currentCanvas.addToGroup(me.currentCanvas.getRootGroup(), [noneDropCellList[i]]);
                continue;
            }
            //드랍셀이 없고 이전 셀이 있다면 원복시킨다.
            //이 경우는 테이블 내에서 이동시켰는데 칼럼으로 떨어진 경우다.
            if (beforeCell) {
                me.redrawCell(beforeCell);
                continue;
            }
        }

        //드랍셀이 있는 경우의 처리.
        for (var key in dropCellMap) {
            dropCell = dropCellMap[key]['dropCell'];
            dropElements = dropCellMap[key]['elements'];
            var elementsWithValues = [];
            for (var d = 0; d < dropElements.length; d++) {
                elementsWithValues.push({
                    element: dropElements[d],
                    value: null
                })
            }
            me.addCellContent(dropCell, elementsWithValues);
        }
    }
}

OG.shape.component.DataTable.prototype.addColumn = function (columnOption, index) {
    var me = this;
    me.options.columns.splice(index, 0, columnOption);
    //기존 등록된 임시 셀을 모두 삭제토록.
    var childs = me.currentCanvas.getChilds(me.currentElement);
    for (var i = 0, leni = childs.length; i < leni; i++) {
        if (childs[i].shape instanceof OG.Cell) {
            me.currentCanvas.removeShape(childs[i]);
        }
    }
    me.draw(true);
}

OG.shape.component.DataTable.prototype.removeColumn = function (index) {
    var me = this;
    //기존 등록된 임시 셀을 모두 삭제토록.
    var childs = me.currentCanvas.getChilds(me.currentElement);
    for (var i = 0, leni = childs.length; i < leni; i++) {
        if (childs[i].shape instanceof OG.Cell) {
            me.currentCanvas.removeShape(childs[i]);
        }
    }
    me.options.columns.splice(index, 1);
    me.draw();
}

OG.shape.component.Cell = function (label) {
    OG.shape.component.Cell.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.component.Cell';
    this.label = label;
    this.CONNECT_CLONEABLE = false;
    this.LABEL_EDITABLE = false;
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
        'font-size': 9
    });

    return this.geom;
};

OG.shape.component.Cell.prototype.createSubShape = function () {
    if (!this.geom.style.map) {
        return;
    }

    var createSub = function (direction, style) {
        var copy = JSON.parse(JSON.stringify(style));
        copy['arrow-end'] = 'none';
        copy['arrow-start'] = 'none';
        if (direction == 'left') {
            return {
                shape: new OG.EdgeShape(),
                vertices: [['0%', '0%'], ['0%', '100%']],
                style: copy
            }
        }
        if (direction == 'right') {
            return {
                shape: new OG.EdgeShape(),
                vertices: [['100%', '0%'], ['100%', '100%']],
                style: copy
            }
        }
        if (direction == 'top') {
            return {
                shape: new OG.EdgeShape(),
                vertices: [['0%', '0%'], ['100%', '0%']],
                style: copy
            }
        }
        if (direction == 'bottom') {
            return {
                shape: new OG.EdgeShape(),
                vertices: [['0%', '100%'], ['100%', '100%']],
                style: copy
            }
        }
    }
    var me = this;
    this.sub = [];
    if (me.geom.style.map['border-left']) {
        this.sub.push(
            createSub('left', me.geom.style.map['border-left'])
        )
    }
    if (me.geom.style.map['border-right']) {
        this.sub.push(
            createSub('right', me.geom.style.map['border-right'])
        )
    }
    if (me.geom.style.map['border-top']) {
        this.sub.push(
            createSub('top', me.geom.style.map['border-top'])
        )
    }
    if (me.geom.style.map['border-bottom']) {
        this.sub.push(
            createSub('bottom', me.geom.style.map['border-bottom'])
        )
    }
    return this.sub;
};

OG.shape.component.Cell.prototype.onResize = function (offset) {
    var me = this;
    if (offset[0] == 0 && offset[1] == 0 && offset[2] == 0 && offset[3] == 0) {
        return;
    }
    if (me.data && me.data.dataTable) {
        var tableId = me.data.dataTable.tableId;
        var table = me.currentCanvas.getElementById(tableId);
        if (table) {
            table.shape.onCellResize(me.currentElement, offset);
        }
    }
}

OG.shape.component.Cell.prototype.onPasteShape = function (copied, pasted) {

}

OG.shape.component.Cell.prototype.onDrawLabel = function (text) {
    var me = this;
    if (me.data && me.data.dataTable && me.data.dataTable.type == 'column') {
        var cellView = me.data.dataTable;
        var tableId = cellView.tableId;
        var table = me.currentCanvas.getElementById(tableId);
        if (table) {
            var existColumn = table.shape.getColumnByField(cellView.column);
            existColumn.title = text;
            table.shape.draw(true);
        }
    }
}
OG.shape.component.Cell.prototype.createContextMenu = function () {
    var me = this;

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    //칼럼인 경우 행 추가 가능하다.
    if (me.data && me.data.dataTable && me.data.dataTable.type == 'column') {
        var cellView = me.data.dataTable;
        var tableId = cellView.tableId;
        var table = me.currentCanvas.getElementById(tableId);
        if (table) {
            this.contextMenu = {
                'left': {
                    name: '오른쪽 열 추가', callback: function () {
                        var existColumn = table.shape.getColumnByField(cellView.column);
                        table.shape.addColumn({
                            data: guid(),
                            title: '',
                            defaultContent: '',
                            renderer: existColumn.renderer,
                            columnEditable: true
                        }, cellView.cellIndex + 1);
                    }
                },
                'right': {
                    name: '왼쪽 열 추가', callback: function () {
                        var existColumn = table.shape.getColumnByField(cellView.column);
                        table.shape.addColumn({
                            data: guid(),
                            title: '',
                            defaultContent: '',
                            renderer: existColumn.renderer,
                            columnEditable: true
                        }, cellView.cellIndex);
                    }
                },
                'remove': {
                    name: '열 삭제', callback: function () {
                        table.shape.removeColumn(cellView.cellIndex);
                    }
                }
            };
            return this.contextMenu;
        }
    } else {
        return {};
    }
};


