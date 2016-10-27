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

![](images/geometry/geometry-1.png)

예제에서는 GeometryCollection 이라는 geometry 가 사용되었습니다.
 
GeometryCollection 은 다수의 geometry 를 혼합하여 그려야 할 경우 사용됩니다.

이제 오픈그래프에서 어떠한 geometry 들을 사용할 수 있고, 사용법은 어떻게 되는지 살펴보도록 합니다. 

point

coordinate

envelope

style

geometry

geometryCollection

polygon

Rectangle

PolyLine

Line

Curve

BezierCurve

Ellipse

Circle

geometry 를 활용한,엘리먼트 리드로우엣지 리드로우

