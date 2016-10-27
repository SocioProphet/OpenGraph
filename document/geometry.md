Geometry
========

Geometry 는 오픈그래프의 공간 기하 객체입니다.

앞선 과정들로 오픈그래프 Dom 객체 하위에 도형 클래스가 있고, 도형 클래스 하위에 Geometry 공간 기하 객체가 있다는 것을 기술했습니다.

도형 클래스는 Shape 이라고 표현하기도 합니다.

아래 예제에 몇가지 Shape 클래스를 호출하여 캔버스에 도형을 그려보도록 하겠습니다.

```
var circleShape = new OG.CircleShape();
var ellipseShape = new OG.EllipseShape();
var rectangleShape = new OG.RectangleShape();
var edgeShape1 = new OG.EdgeShape([50, 250], [200, 250]);
var edgeShape2 = new OG.EdgeShape([250, 250], [400, 250]);

var element1 = canvas.drawShape([100, 100], circleShape, [100, 100]);
var element2 = canvas.drawShape([250, 100], ellipseShape, [100, 50]);
var element3 = canvas.drawShape([400, 100], rectangleShape, [100, 50]);
var element4 = canvas.drawShape(null, edgeShape1, null, {
    'edge-type': 'plain',
    "arrow-start": "none",
    "arrow-end": "open-wide-long"
});
var element5 = canvas.drawShape(null, edgeShape2, null, {
    'edge-type': 'straight',
    "arrow-start": "classic-wide-long",
    "arrow-end": "block-wide-long",
    'stroke-dasharray': '-',
    'stroke-width': 4
});
```

![](images/geometry/geometry-1.png)


각각의 Shape 가 Geometry 공간 기하 객체를 어떻게 호출하는지에 대해 살펴보기 위헤 오픈그래프에서 제공하는 기본 Shape 중 하나인  CircleShape 의 코드를 살펴보도록 하겠습니다.


```
/**
 * Circle Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*
 * @requires OG.geometry.*
 *
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.shape.CircleShape = function (label) {
	OG.shape.CircleShape.superclass.call(this);

	this.SHAPE_ID = 'OG.shape.CircleShape';
	this.label = label;
};
OG.shape.CircleShape.prototype = new OG.shape.GeomShape();
OG.shape.CircleShape.superclass = OG.shape.GeomShape;
OG.shape.CircleShape.prototype.constructor = OG.shape.CircleShape;
OG.CircleShape = OG.shape.CircleShape;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.CircleShape.prototype.createShape = function () {
	if (this.geom) {
		return this.geom;
	}

	this.geom = new OG.geometry.Circle([50, 50], 50);
	return this.geom;
};
```

CircleShape 의 createShape 메소드의 코드를 다시 살펴보면, new OG.geometry.Circle 클래스를 반환해주고 있는것을 볼 수 있습니다.
 
```
this.geom = new OG.geometry.Circle([50, 50], 50);
return this.geom;
```

Shape 의 createShape 메소드에 어떠한 geometry 공간 기하 객체를 삽입하는지에 따라 Shape 이 디스플레이 되는 모양이 달라지게 됩니다.
 
이를 사용하여 원 모양의 기하객체와 그 원의 중심선을 지나는 선분을 가진 도형을 직접 제작해보도록 하겠습니다.

```
var canvas = new OG.Canvas('canvas', [1000, 800], 'white', 'url(resources/images/symbol/grid.gif)');

//CircleShape 를 선언.
var shape = new OG.CircleShape();

//CircleShape 의 createShape 을 오버라이딩 하여, 새로운 geometry 를 서술한다.
shape.createShape = function () {
    if (this.geom) {
        return this.geom;
    }

    var geom1, geom2, geomCollection = [];
    if (this.geom) {
        return this.geom;
    }

    geom1 = new OG.geometry.Circle([50, 50], 50);
    geom2 = new OG.geometry.Line([0, 50], [100, 50]);

    geomCollection.push(geom1);
    geomCollection.push(geom2);
    this.geom = new OG.geometry.GeometryCollection(geomCollection);

    return this.geom;
};
canvas.drawShape([400, 300], shape, [400, 300]);
```

![](images/geometry/geometry-2.png)

예제에서는 GeometryCollection 이라는 geometry 가 사용되었습니다.
 
GeometryCollection 은 다수의 geometry 를 혼합하여 그려야 할 경우 사용됩니다.

이어지는 내용은 오픈그래프에서 사용할 수 있는 geometry 목록과 그 사용법에 대한 기술입니다.   

## Point

```
/**
* Point 공간 기하 객체(Spatial Geometry Object)
*
* @class
* @extends OG.geometry.Geometry
* @requires OG.geometry.Coordinate
* @requires OG.geometry.Envelope
* @requires OG.geometry.Geometry
*
* @example
* var geom = new OG.geometry.Point([20, 5]);
*
* @param {OG.geometry.Coordinate} coordinate 좌표값
* @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
*/

Example
for (var i = 0; i < 100; i++) {
    var shape = new OG.GeomShape();
    shape.SHAPE_ID = 'OG.shape.PointExample';
    shape.createShape = function () {
        if (this.geom) {
            return this.geom;
        }
        this.geom = new OG.geometry.Point([0, 0]);
        return this.geom;
    };
    var x = (i % 10) * 20 + 100;
    var y = (Math.floor(i / 10) * 20) + 100;
    console.log(x,y);
    canvas.drawShape([x, y], shape, [0, 0]);
}
```

![](images/geometry/geometry-point.png)

## Coordinate

Coordinate 는 오픈그래프의 2차원 좌표계를 나타내는 기하 객체로써, 도형의 각 꼭지점을 표현하거나 Boundary 영역을 표현하는데 사용됩니다.

```
/**
 * 2차원 좌표계에서의 좌표값
 *
 * @example
 * var coordinate1 = new OG.geometry.Coordinate(10, 10);
 * or
 * var coordinate2 = new OG.geometry.Coordinate([20, 20]);
 *
 * @class
 *
 * @param {Number} x x좌표
 * @param {Number} y y좌표
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
```

예제를 통해 다음의 두 도형을 그려보도록 합니다.

```
var rectElement = canvas.drawShape([200, 200], new OG.RectangleShape, [150, 150]);
var ellipseElement = canvas.drawShape([500, 200], new OG.EllipseShape, [150, 110]);

var rectVertices = rectElement.shape.geom.getVertices();
var ellipseVertices = ellipseElement.shape.geom.getVertices();

//print rectElement vertices
$.each(rectVertices, function(index, vertice){
    if(vertice instanceof OG.Coordinate){
        console.log(vertice.x , vertice.y);
    }
});

//print ellipseElement vertices
$.each(ellipseVertices, function(index, vertice){
    if(vertice instanceof OG.Coordinate){
        console.log(vertice.x , vertice.y);
    }
});
```

![](images/geometry/geometry-coodinate.png)

geometry 기하 객체 클래스의 getVertices 메소드는 기하객체가 가지고 있는 모든 꼭지점을 리턴합니다.

getVertices 메소드로 두 도형의 꼭지점들을 출력해보면, 
직사각형 모양의 rectElement 는 5개(선분이 사각형 모양을 그리기 위해서는 시작점으로 되돌아와야 하기 때문에 꼭지점이 하나 더 붙습니다.) 인 반면
타원 모양의 ellipseElement 는 매우 많은 꼭지점들을 출력하는 것을 알 수 있습니다.

각 꼭지점의 리턴값은 OG.geometry.Coordinate 이며, x 프로퍼티와 y 프로퍼티로 값을 가져올 수 있습니다.
 
geometry 기하 객체의 vertices 를 이루고 있는 Coordinate 를 변경 또는 추가 할 경우 커스텀한 도형을 그릴 수 있습니다.
 
다음 예제를 통해 편행사변형과 랜덤한 변을 가진 사각형을 그려볼 수 있도록 합니다.

```
var element1 = canvas.drawShape([200, 200], new OG.RectangleShape('Rect1'), [150, 150]);
var element2 = canvas.drawShape([500, 200], new OG.RectangleShape('Rect2'), [150, 150]);

//평행사변형 만들기
var vertices = element1.shape.geom.getVertices();
vertices[1] = new OG.Coordinate(vertices[1].x + 50, vertices[1].y);
vertices[3] = new OG.Coordinate(vertices[3].x - 50, vertices[3].y);
canvas.getRenderer().redrawShape(element1);


//랜덤 모양 만들기
vertices = element2.shape.geom.getVertices();
var newVertices = [];

newVertices[0] = vertices[0];
newVertices[100] = vertices[4];
for (var i = 1; i < 100; i++) {
    var x, y;
    if (i < 25) {
        x = vertices[0].x + Math.floor(((vertices[1].x - vertices[0].x) / 25) * i);
        y = vertices[0].y + Math.floor(Math.random() * 10) - 5;
        newVertices[i] = new OG.Coordinate(x, y);
    }
    else if (i < 50) {
        x = vertices[1].x + Math.floor(Math.random() * 10) - 5;
        y = vertices[1].y + Math.floor(((vertices[2].y - vertices[1].y) / 25) * (i - 25));
        newVertices[i] = new OG.Coordinate(x, y);
    }
    else if (i < 75) {
        x = vertices[2].x - Math.floor(((vertices[2].x - vertices[3].x) / 25) * (i - 50));
        y = vertices[2].y + Math.floor(Math.random() * 10) - 5;
        newVertices[i] = new OG.Coordinate(x, y);
    }
    else if (i < 100) {
        x = vertices[3].x + Math.floor(Math.random() * 10) - 5;
        y = vertices[3].y - Math.floor(((vertices[3].y - vertices[4].y) / 25) * (i - 75));
        newVertices[i] = new OG.Coordinate(x, y);
    }
}
element2.shape.geom.vertices = newVertices;
canvas.getRenderer().redrawShape(element2);
```

![](images/geometry/geometry-coodinate2.png)

## Envelope

## Style

## Geometry

## GeometryCollection

## Polygon

## Rectangle

## PolyLine

## Line

## Curve

## BezierCurve

## Ellipse

## Circle

