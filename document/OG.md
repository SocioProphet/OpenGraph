## Objects

<dl>
<dt><a href="#OG">OG</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#override">override(origclass, overrides)</a></dt>
<dd><p>Adds a list of functions to the prototype of an existing class, overwriting any existing methods with the same name.
Usage:<pre><code>
     Ext.override(MyClass, {
     newMethod1: function(){
     // etc.
     },
     newMethod2: function(foo){
     // etc.
     }
     });
     </code></pre></p>
</dd>
</dl>

<a name="OG"></a>

## OG : <code>object</code>
**Kind**: global namespace  

* [OG](#OG) : <code>object</code>
    * [.common](#OG.common) : <code>object</code>
        * [.Constants](#OG.common.Constants)
            * [new OG.common.Constants()](#new_OG.common.Constants_new)
            * [.GEOM_TYPE](#OG.common.Constants.GEOM_TYPE)
            * [.GEOM_NAME](#OG.common.Constants.GEOM_NAME)
            * [.NUM_PRECISION](#OG.common.Constants.NUM_PRECISION)
            * [.NODE_TYPE](#OG.common.Constants.NODE_TYPE)
            * [.SHAPE_TYPE](#OG.common.Constants.SHAPE_TYPE)
            * [.EDGE_TYPE](#OG.common.Constants.EDGE_TYPE)
            * [.LABEL_SUFFIX](#OG.common.Constants.LABEL_SUFFIX)
            * [.LABEL_EDITOR_SUFFIX](#OG.common.Constants.LABEL_EDITOR_SUFFIX)
            * [.FROM_LABEL_SUFFIX](#OG.common.Constants.FROM_LABEL_SUFFIX)
            * [.TO_LABEL_SUFFIX](#OG.common.Constants.TO_LABEL_SUFFIX)
            * [.RUBBER_BAND_ID](#OG.common.Constants.RUBBER_BAND_ID)
            * [.RUBBER_BAND_TOLERANCE](#OG.common.Constants.RUBBER_BAND_TOLERANCE)
            * [.GUIDE_SUFFIX](#OG.common.Constants.GUIDE_SUFFIX)
            * [.COLLAPSE_SUFFIX](#OG.common.Constants.COLLAPSE_SUFFIX)
            * [.LOOPTYPE_SUFFIX](#OG.common.Constants.LOOPTYPE_SUFFIX)
            * [.TASKTYPE_SUFFIX](#OG.common.Constants.TASKTYPE_SUFFIX)
            * [.INCLUSION_SUFFIX](#OG.common.Constants.INCLUSION_SUFFIX)
            * [.STATUS_SUFFIX](#OG.common.Constants.STATUS_SUFFIX)
            * [.EXCEPTIONTYPE_SUFFIX](#OG.common.Constants.EXCEPTIONTYPE_SUFFIX)
            * [.MOVE_SNAP_SIZE](#OG.common.Constants.MOVE_SNAP_SIZE)
            * [.DROP_OVER_BBOX_SUFFIX](#OG.common.Constants.DROP_OVER_BBOX_SUFFIX)
            * [.TERMINAL_SUFFIX](#OG.common.Constants.TERMINAL_SUFFIX)
            * [.TERMINAL](#OG.common.Constants.TERMINAL)
            * [.MARKER_TEMP_NODE](#OG.common.Constants.MARKER_TEMP_NODE)
            * [.PATTERN_TEMP_NODE](#OG.common.Constants.PATTERN_TEMP_NODE)
            * [.MARKER_DEFS_SUFFIX](#OG.common.Constants.MARKER_DEFS_SUFFIX)
            * [.ORIGINAL_NODE](#OG.common.Constants.ORIGINAL_NODE)
            * [.CONNECT_GUIDE_EVENT_AREA](#OG.common.Constants.CONNECT_GUIDE_EVENT_AREA)
            * [.CONNECT_GUIDE_SUFFIX](#OG.common.Constants.CONNECT_GUIDE_SUFFIX)
        * [.CurveUtil](#OG.common.CurveUtil)
            * [new OG.common.CurveUtil()](#new_OG.common.CurveUtil_new)
            * [.CatmullRomSpline(points)](#OG.common.CurveUtil.CatmullRomSpline) ⇒ <code>Object</code>
            * [.Bezier(points)](#OG.common.CurveUtil.Bezier) ⇒ <code>Object</code>
            * [.BSpline(points, order)](#OG.common.CurveUtil.BSpline) ⇒ <code>Object</code>
        * [.HashMap](#OG.common.HashMap)
            * [new OG.common.HashMap(jsonObject)](#new_OG.common.HashMap_new)
            * [.map](#OG.common.HashMap+map) : <code>Object</code>
            * [.put(key, value)](#OG.common.HashMap+put)
            * [.get(key)](#OG.common.HashMap+get) ⇒ <code>Object</code>
            * [.containsKey(key)](#OG.common.HashMap+containsKey) ⇒ <code>Boolean</code>
            * [.containsValue(value)](#OG.common.HashMap+containsValue) ⇒ <code>Boolean</code>
            * [.isEmpty()](#OG.common.HashMap+isEmpty) ⇒ <code>Boolean</code>
            * [.clear()](#OG.common.HashMap+clear)
            * [.remove(key)](#OG.common.HashMap+remove)
            * [.keys()](#OG.common.HashMap+keys) ⇒ <code>Array.&lt;String&gt;</code>
            * [.values()](#OG.common.HashMap+values) ⇒ <code>Array.&lt;Object&gt;</code>
            * [.size()](#OG.common.HashMap+size) ⇒ <code>Number</code>
            * [.toString()](#OG.common.HashMap+toString) ⇒ <code>String</code>
        * [.JSON](#OG.common.JSON)
            * [new OG.common.JSON()](#new_OG.common.JSON_new)
            * [.encode](#OG.common.JSON+encode) ⇒ <code>String</code>
            * [.decode](#OG.common.JSON+decode) ⇒ <code>Object</code>
            * [.encodeDate(d)](#OG.common.JSON+encodeDate) ⇒ <code>String</code>
        * [.Util](#OG.common.Util)
            * [new OG.common.Util()](#new_OG.common.Util_new)
            * [.extend](#OG.common.Util.extend) ⇒ <code>function</code>
            * [.clone(obj)](#OG.common.Util.clone) ⇒ <code>Object</code>
            * [.round(val)](#OG.common.Util.round) ⇒ <code>Number</code>
            * [.roundPrecision(val, precision)](#OG.common.Util.roundPrecision) ⇒ <code>Number</code>
            * [.roundGrid(val, snapSize)](#OG.common.Util.roundGrid) ⇒ <code>Number</code>
            * [.apply(obj, config, defaults)](#OG.common.Util.apply) ⇒ <code>Object</code>
    * [.geometry](#OG.geometry) : <code>object</code>
        * [.BezierCurve](#OG.geometry.BezierCurve) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
            * [new OG.geometry.BezierCurve(controlPoints)](#new_OG.geometry.BezierCurve_new)
            * [.controlPoints](#OG.geometry.BezierCurve+controlPoints) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getControlPoints()](#OG.geometry.BezierCurve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
            * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
            * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
            * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.Circle](#OG.geometry.Circle) ⇐ <code>[Ellipse](#OG.geometry.Ellipse)</code>
            * [new OG.geometry.Circle(center, radius)](#new_OG.geometry.Circle_new)
            * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getControlPoints()](#OG.geometry.Curve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
            * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
            * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.Coordinate](#OG.geometry.Coordinate)
            * [new OG.geometry.Coordinate(x, y)](#new_OG.geometry.Coordinate_new)
            * [.x](#OG.geometry.Coordinate+x) : <code>Number</code>
            * [.y](#OG.geometry.Coordinate+y) : <code>Number</code>
            * [.distance(coordinate)](#OG.geometry.Coordinate+distance) ⇒ <code>Number</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Coordinate+move) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.rotate(angle, origin)](#OG.geometry.Coordinate+rotate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.isEquals(coordinate)](#OG.geometry.Coordinate+isEquals) ⇒ <code>Boolean</code>
            * [.toString()](#OG.geometry.Coordinate+toString) ⇒ <code>String</code>
        * [.Curve](#OG.geometry.Curve) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
            * [new OG.geometry.Curve(controlPoints)](#new_OG.geometry.Curve_new)
            * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getControlPoints()](#OG.geometry.Curve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
            * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
            * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
            * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.Ellipse](#OG.geometry.Ellipse) ⇐ <code>[Curve](#OG.geometry.Curve)</code>
            * [new OG.geometry.Ellipse(center, radiusX, radiusY, angle)](#new_OG.geometry.Ellipse_new)
            * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getControlPoints()](#OG.geometry.Curve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
            * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
            * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.Envelope](#OG.geometry.Envelope)
            * [new OG.geometry.Envelope(upperLeft, width, height)](#new_OG.geometry.Envelope_new)
            * [.getUpperLeft()](#OG.geometry.Envelope+getUpperLeft) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.setUpperLeft(upperLeft)](#OG.geometry.Envelope+setUpperLeft)
            * [.getUpperRight()](#OG.geometry.Envelope+getUpperRight) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getLowerRight()](#OG.geometry.Envelope+getLowerRight) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getLowerLeft()](#OG.geometry.Envelope+getLowerLeft) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getLeftCenter()](#OG.geometry.Envelope+getLeftCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getUpperCenter()](#OG.geometry.Envelope+getUpperCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getRightCenter()](#OG.geometry.Envelope+getRightCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getLowerCenter()](#OG.geometry.Envelope+getLowerCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getCentroid()](#OG.geometry.Envelope+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.setCentroid(centroid)](#OG.geometry.Envelope+setCentroid)
            * [.getWidth()](#OG.geometry.Envelope+getWidth) ⇒ <code>Number</code>
            * [.setWidth(width)](#OG.geometry.Envelope+setWidth)
            * [.getHeight()](#OG.geometry.Envelope+getHeight) ⇒ <code>Number</code>
            * [.setHeight(height)](#OG.geometry.Envelope+setHeight)
            * [.getVertices()](#OG.geometry.Envelope+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.isContains(coordinate)](#OG.geometry.Envelope+isContains) ⇒ <code>Boolean</code>
            * [.isContainsAll(coordinateArray)](#OG.geometry.Envelope+isContainsAll) ⇒ <code>Boolean</code>
            * [.getHowManyContains(coordinateArray)](#OG.geometry.Envelope+getHowManyContains) ⇒ <code>Boolean</code>
            * [.isContainsOnce(coordinateArray)](#OG.geometry.Envelope+isContainsOnce) ⇒ <code>Boolean</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Envelope+move) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.resize(upper, lower, left, right)](#OG.geometry.Envelope+resize) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.isEquals(Envelope)](#OG.geometry.Envelope+isEquals) ⇒ <code>Boolean</code>
            * [.toString()](#OG.geometry.Envelope+toString) ⇒ <code>String</code>
        * [.Geometry](#OG.geometry.Geometry)
            * [new OG.geometry.Geometry()](#new_OG.geometry.Geometry_new)
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * *[.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>*
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * *[.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * *[.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * *[.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.GeometryCollection](#OG.geometry.GeometryCollection) ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [new OG.geometry.GeometryCollection(geometries)](#new_OG.geometry.GeometryCollection_new)
            * [.geometries](#OG.geometry.GeometryCollection+geometries) : <code>[Array.&lt;Geometry&gt;](#OG.geometry.Geometry)</code>
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.toString()](#OG.geometry.GeometryCollection+toString) ⇒ <code>String</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.Line](#OG.geometry.Line) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
            * [new OG.geometry.Line(from, to)](#new_OG.geometry.Line_new)
            * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
            * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
            * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
            * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.Point](#OG.geometry.Point) ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [new OG.geometry.Point(coordinate)](#new_OG.geometry.Point_new)
            * [.coordinate](#OG.geometry.Point+coordinate) : <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.vertices](#OG.geometry.Point+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.toString()](#OG.geometry.Point+toString) ⇒ <code>String</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.PolyLine](#OG.geometry.PolyLine) ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [new OG.geometry.PolyLine(vertices)](#new_OG.geometry.PolyLine_new)
            * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
            * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
            * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
            * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.Polygon](#OG.geometry.Polygon) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
            * [new OG.geometry.Polygon(vertices)](#new_OG.geometry.Polygon_new)
            * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
            * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
            * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
            * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.Rectangle](#OG.geometry.Rectangle) ⇐ <code>[Polygon](#OG.geometry.Polygon)</code>
            * [new OG.geometry.Rectangle(upperLeft, width, height)](#new_OG.geometry.Rectangle_new)
            * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
            * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
            * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
            * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
            * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
            * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
            * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
            * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
            * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
            * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
            * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
            * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
            * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
            * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
            * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
            * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
            * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
            * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
            * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
            * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
            * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
            * [.reset()](#OG.geometry.Geometry+reset)
        * [.Style](#OG.geometry.Style) ⇐ <code>[HashMap](#OG.common.HashMap)</code>
            * [new OG.geometry.Style(style)](#new_OG.geometry.Style_new)
            * [.map](#OG.common.HashMap+map) : <code>Object</code>
            * [.put(key, value)](#OG.common.HashMap+put)
            * [.get(key)](#OG.common.HashMap+get) ⇒ <code>Object</code>
            * [.containsKey(key)](#OG.common.HashMap+containsKey) ⇒ <code>Boolean</code>
            * [.containsValue(value)](#OG.common.HashMap+containsValue) ⇒ <code>Boolean</code>
            * [.isEmpty()](#OG.common.HashMap+isEmpty) ⇒ <code>Boolean</code>
            * [.clear()](#OG.common.HashMap+clear)
            * [.remove(key)](#OG.common.HashMap+remove)
            * [.keys()](#OG.common.HashMap+keys) ⇒ <code>Array.&lt;String&gt;</code>
            * [.values()](#OG.common.HashMap+values) ⇒ <code>Array.&lt;Object&gt;</code>
            * [.size()](#OG.common.HashMap+size) ⇒ <code>Number</code>
            * [.toString()](#OG.common.HashMap+toString) ⇒ <code>String</code>
    * [.graph](#OG.graph) : <code>object</code>
        * [.Canvas](#OG.graph.Canvas)
            * [new OG.graph.Canvas(container, containerSize, backgroundColor, backgroundImage)](#new_OG.graph.Canvas_new)
            * [.initConfig(config)](#OG.graph.Canvas+initConfig)
            * [.getRenderer()](#OG.graph.Canvas+getRenderer) ⇒ <code>OG.RaphaelRenderer</code>
            * [.getContainer()](#OG.graph.Canvas+getContainer) ⇒ <code>HTMLElement</code>
            * [.getEventHandler()](#OG.graph.Canvas+getEventHandler) ⇒ <code>OG.EventHandler</code>
            * [.addSlider()](#OG.graph.Canvas+addSlider)
            * [.removeSlider()](#OG.graph.Canvas+removeSlider)
            * [.drawShape(position, shape, size, style, id, parentId, preventEvent)](#OG.graph.Canvas+drawShape) ⇒ <code>Element</code>
            * [.drawTransformer(position, label, inputs, outputs, id)](#OG.graph.Canvas+drawTransformer) ⇒ <code>Element</code>
            * [.setShapeStyle(shapeElement, style)](#OG.graph.Canvas+setShapeStyle)
            * [.setTextListInController(shapeElement, textList)](#OG.graph.Canvas+setTextListInController)
            * [.getTextListInController(shapeElement)](#OG.graph.Canvas+getTextListInController)
            * [.drawLabel(shapeElement, text, style)](#OG.graph.Canvas+drawLabel) ⇒ <code>Element</code>
            * [.redrawConnectedEdge(element)](#OG.graph.Canvas+redrawConnectedEdge)
            * [.reconnect(edge)](#OG.graph.Canvas+reconnect) ⇒ <code>Element</code>
            * [.connect(fromElement, toElement, style, label, fromP, toP, preventTrigger, id, edgeShape)](#OG.graph.Canvas+connect) ⇒ <code>\*</code> &#124; <code>Element</code>
            * [.connectWithTerminalId(fromTerminal, toTerminal, style, label)](#OG.graph.Canvas+connectWithTerminalId) ⇒ <code>String</code> &#124; <code>String</code> &#124; <code>[geometry](#OG.geometry)</code>
            * [.disconnect(element)](#OG.graph.Canvas+disconnect)
            * [.group(elements)](#OG.graph.Canvas+group) ⇒ <code>Element</code>
            * [.ungroup(groupElements)](#OG.graph.Canvas+ungroup) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.addToGroup(groupElement, elements)](#OG.graph.Canvas+addToGroup)
            * [.collapse(element)](#OG.graph.Canvas+collapse)
            * [.expand(element)](#OG.graph.Canvas+expand)
            * [.clear()](#OG.graph.Canvas+clear)
            * [.removeShape(element)](#OG.graph.Canvas+removeShape)
            * [.removeChild(element)](#OG.graph.Canvas+removeChild)
            * [.removeGuide(element)](#OG.graph.Canvas+removeGuide)
            * [.removeAllGuide()](#OG.graph.Canvas+removeAllGuide)
            * [.getRootElement()](#OG.graph.Canvas+getRootElement) ⇒ <code>Element</code>
            * [.getRootGroup()](#OG.graph.Canvas+getRootGroup) ⇒ <code>Element</code>
            * [.getElementByPoint(position)](#OG.graph.Canvas+getElementByPoint) ⇒ <code>Element</code>
            * [.getElementsByBBox(envelope)](#OG.graph.Canvas+getElementsByBBox) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.setAttr(element, attribute)](#OG.graph.Canvas+setAttr)
            * [.getAttr(element, attrName)](#OG.graph.Canvas+getAttr) ⇒ <code>Object</code>
            * [.toFront(element)](#OG.graph.Canvas+toFront)
            * [.toBack(element)](#OG.graph.Canvas+toBack)
            * [.bringForward(element)](#OG.graph.Canvas+bringForward)
            * [.sendBackward(element)](#OG.graph.Canvas+sendBackward)
            * [.getCanvasSize()](#OG.graph.Canvas+getCanvasSize) ⇒ <code>Array.&lt;Number&gt;</code>
            * [.setCanvasSize(size)](#OG.graph.Canvas+setCanvasSize)
            * [.fitCanvasSize(minSize, fitScale)](#OG.graph.Canvas+fitCanvasSize)
            * [.setViewBox(position, size, isFit)](#OG.graph.Canvas+setViewBox)
            * [.getScale()](#OG.graph.Canvas+getScale) ⇒ <code>Number</code>
            * [.setScale(scale)](#OG.graph.Canvas+setScale)
            * [.show(element)](#OG.graph.Canvas+show)
            * [.hide(element)](#OG.graph.Canvas+hide)
            * [.appendChild(srcElement, targetElement)](#OG.graph.Canvas+appendChild) ⇒ <code>Element</code>
            * [.insertAfter(srcElement, targetElement)](#OG.graph.Canvas+insertAfter) ⇒ <code>Element</code>
            * [.insertBefore(srcElement, targetElement)](#OG.graph.Canvas+insertBefore) ⇒ <code>Element</code>
            * [.move(element, offset)](#OG.graph.Canvas+move) ⇒ <code>Element</code>
            * [.moveCentroid(element, position)](#OG.graph.Canvas+moveCentroid) ⇒ <code>Element</code>
            * [.rotate(element, angle)](#OG.graph.Canvas+rotate) ⇒ <code>Element</code>
            * [.resize(element, offset)](#OG.graph.Canvas+resize) ⇒ <code>Element</code>
            * [.resizeBox(element, size)](#OG.graph.Canvas+resizeBox) ⇒ <code>Element</code>
            * [.clone(element)](#OG.graph.Canvas+clone) ⇒ <code>Element</code>
            * [.getBoundary(element)](#OG.graph.Canvas+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getElementById(id)](#OG.graph.Canvas+getElementById) ⇒ <code>Element</code>
            * [.getElementsByType(shapeType, excludeType)](#OG.graph.Canvas+getElementsByType) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getElementsByShapeId(shapeId)](#OG.graph.Canvas+getElementsByShapeId) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getRelatedElementsFromEdge(edgeElement)](#OG.graph.Canvas+getRelatedElementsFromEdge) ⇒ <code>Object</code>
            * [.getParent(Element)](#OG.graph.Canvas+getParent) ⇒ <code>Element</code>
            * [.getChilds(element)](#OG.graph.Canvas+getChilds) ⇒ <code>Array</code>
            * [.getAllShapes()](#OG.graph.Canvas+getAllShapes) ⇒ <code>Array</code>
            * [.getAllEdges()](#OG.graph.Canvas+getAllEdges) ⇒ <code>Array</code>
            * [.getBBox(element)](#OG.graph.Canvas+getBBox) ⇒ <code>Object</code>
            * [.getRootBBox()](#OG.graph.Canvas+getRootBBox) ⇒ <code>Object</code>
            * [.getRealRootBBox()](#OG.graph.Canvas+getRealRootBBox) ⇒ <code>Object</code>
            * [.isSVG()](#OG.graph.Canvas+isSVG) ⇒ <code>Boolean</code>
            * [.isVML()](#OG.graph.Canvas+isVML) ⇒ <code>Boolean</code>
            * [.setCustomData(shapeElement, data)](#OG.graph.Canvas+setCustomData)
            * [.getCustomData(shapeElement)](#OG.graph.Canvas+getCustomData) ⇒ <code>Object</code>
            * [.setExtCustomData(shapeElement, data)](#OG.graph.Canvas+setExtCustomData)
            * [.getExtCustomData(shapeElement)](#OG.graph.Canvas+getExtCustomData) ⇒ <code>Object</code>
            * [.toXML()](#OG.graph.Canvas+toXML) ⇒ <code>String</code>
            * [.toJSON()](#OG.graph.Canvas+toJSON) ⇒ <code>Object</code>
            * [.loadXML(xml)](#OG.graph.Canvas+loadXML) ⇒ <code>Object</code>
            * [.loadJSON(json)](#OG.graph.Canvas+loadJSON) ⇒ <code>Object</code>
            * [.undo()](#OG.graph.Canvas+undo)
            * [.redo()](#OG.graph.Canvas+redo)
            * [.getPrevEdges(element)](#OG.graph.Canvas+getPrevEdges) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getNextEdges(element)](#OG.graph.Canvas+getNextEdges) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getPrevShapes(element)](#OG.graph.Canvas+getPrevShapes) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getPrevShapeIds(element)](#OG.graph.Canvas+getPrevShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
            * [.getNextShapes(element)](#OG.graph.Canvas+getNextShapes) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getNextShapeIds(element)](#OG.graph.Canvas+getNextShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
            * [.onDrawShape(callbackFunc)](#OG.graph.Canvas+onDrawShape)
            * [.onUndo(callbackFunc)](#OG.graph.Canvas+onUndo)
            * [.onRedo(callbackFunc)](#OG.graph.Canvas+onRedo)
            * [.onDivideLane(callbackFunc)](#OG.graph.Canvas+onDivideLane)
            * [.onDrawLabel(callbackFunc)](#OG.graph.Canvas+onDrawLabel)
            * [.onLabelChanged(callbackFunc)](#OG.graph.Canvas+onLabelChanged)
            * [.onBeforeLabelChange(callbackFunc)](#OG.graph.Canvas+onBeforeLabelChange)
            * [.onRedrawShape(callbackFunc)](#OG.graph.Canvas+onRedrawShape)
            * [.onRemoveShape(callbackFunc)](#OG.graph.Canvas+onRemoveShape)
            * [.onRotateShape(callbackFunc)](#OG.graph.Canvas+onRotateShape)
            * [.onMoveShape(callbackFunc)](#OG.graph.Canvas+onMoveShape)
            * [.onResizeShape(callbackFunc)](#OG.graph.Canvas+onResizeShape)
            * [.onBeforeConnectShape(callbackFunc)](#OG.graph.Canvas+onBeforeConnectShape)
            * [.onBeforeRemoveShape(callbackFunc)](#OG.graph.Canvas+onBeforeRemoveShape)
            * [.onConnectShape(callbackFunc)](#OG.graph.Canvas+onConnectShape)
            * [.onDisconnectShape(callbackFunc)](#OG.graph.Canvas+onDisconnectShape)
            * [.onGroup(callbackFunc)](#OG.graph.Canvas+onGroup)
            * [.onUnGroup(callbackFunc)](#OG.graph.Canvas+onUnGroup)
            * [.onCollapsed(callbackFunc)](#OG.graph.Canvas+onCollapsed)
            * [.onExpanded(callbackFunc)](#OG.graph.Canvas+onExpanded)
    * [.handler](#OG.handler) : <code>object</code>
        * [.EventHandler](#OG.handler.EventHandler)
            * [new OG.handler.EventHandler(renderer, config)](#new_OG.handler.EventHandler_new)
            * [.enableEditLabel(element)](#OG.handler.EventHandler+enableEditLabel)
            * [.setMovable(element, isMovable)](#OG.handler.EventHandler+setMovable)
            * [.setConnectable(element, guide, isConnectable)](#OG.handler.EventHandler+setConnectable)
            * [.setResizable(element, guide, isResizable)](#OG.handler.EventHandler+setResizable)
            * [.setClickSelectable(element, isSelectable)](#OG.handler.EventHandler+setClickSelectable)
            * [.setGroupDropable(element)](#OG.handler.EventHandler+setGroupDropable)
            * [.setDragSelectable(isSelectable)](#OG.handler.EventHandler+setDragSelectable)
            * [.setEnableHotKey(isEnableHotKey)](#OG.handler.EventHandler+setEnableHotKey)
            * [.enableRootContextMenu()](#OG.handler.EventHandler+enableRootContextMenu)
            * [.enableShapeContextMenu()](#OG.handler.EventHandler+enableShapeContextMenu)
            * [.selectShape(element)](#OG.handler.EventHandler+selectShape)
            * [.selectShapes(element)](#OG.handler.EventHandler+selectShapes)
            * [.bringToFront()](#OG.handler.EventHandler+bringToFront)
            * [.sendToBack()](#OG.handler.EventHandler+sendToBack)
            * [.bringForward()](#OG.handler.EventHandler+bringForward)
            * [.sendBackward()](#OG.handler.EventHandler+sendBackward)
            * [.deleteSelectedShape()](#OG.handler.EventHandler+deleteSelectedShape)
            * [.changeShape()](#OG.handler.EventHandler+changeShape)
            * [.showProperty()](#OG.handler.EventHandler+showProperty)
            * [.selectAll()](#OG.handler.EventHandler+selectAll)
            * [.copySelectedShape()](#OG.handler.EventHandler+copySelectedShape)
            * [.cutSelectedShape()](#OG.handler.EventHandler+cutSelectedShape)
            * [.pasteSelectedShape()](#OG.handler.EventHandler+pasteSelectedShape)
            * [.duplicateSelectedShape()](#OG.handler.EventHandler+duplicateSelectedShape)
            * [.groupSelectedShape()](#OG.handler.EventHandler+groupSelectedShape)
            * [.ungroupSelectedShape()](#OG.handler.EventHandler+ungroupSelectedShape)
            * [.rotateSelectedShape(angle)](#OG.handler.EventHandler+rotateSelectedShape)
            * [.setLineWidthSelectedShape(lineWidth)](#OG.handler.EventHandler+setLineWidthSelectedShape)
            * [.setLineColorSelectedShape(lineColor)](#OG.handler.EventHandler+setLineColorSelectedShape)
            * [.setLoopTypeSelectedShape(lineType)](#OG.handler.EventHandler+setLoopTypeSelectedShape)
            * [.setLineStyleSelectedShape(lineStyle)](#OG.handler.EventHandler+setLineStyleSelectedShape)
            * [.setArrowStartSelectedShape(arrowType)](#OG.handler.EventHandler+setArrowStartSelectedShape)
            * [.setArrowEndSelectedShape(arrowType)](#OG.handler.EventHandler+setArrowEndSelectedShape)
            * [.setFillColorSelectedShape(fillColor)](#OG.handler.EventHandler+setFillColorSelectedShape)
            * [.setFontFamilySelectedShape(fontFamily)](#OG.handler.EventHandler+setFontFamilySelectedShape)
            * [.setFontSizeSelectedShape(fontSize)](#OG.handler.EventHandler+setFontSizeSelectedShape)
            * [.setFontColorSelectedShape(fontColor)](#OG.handler.EventHandler+setFontColorSelectedShape)
            * [.setFontWeightSelectedShape(fontWeight)](#OG.handler.EventHandler+setFontWeightSelectedShape)
            * [.setFontStyleSelectedShape(fontStyle)](#OG.handler.EventHandler+setFontStyleSelectedShape)
            * [.setTextDecorationSelectedShape(textDecoration)](#OG.handler.EventHandler+setTextDecorationSelectedShape)
            * [.setLabelDirectionSelectedShape(labelDirection)](#OG.handler.EventHandler+setLabelDirectionSelectedShape)
            * [.setLabelAngleSelectedShape(labelAngle)](#OG.handler.EventHandler+setLabelAngleSelectedShape)
            * [.setLabelPositionSelectedShape(labelPosition)](#OG.handler.EventHandler+setLabelPositionSelectedShape)
            * [.setLabelVerticalSelectedShape(verticalAlign)](#OG.handler.EventHandler+setLabelVerticalSelectedShape)
            * [.setLabelHorizontalSelectedShape(horizontalAlign)](#OG.handler.EventHandler+setLabelHorizontalSelectedShape)
            * [.setLabelSelectedShape(label)](#OG.handler.EventHandler+setLabelSelectedShape)
            * [.setEdgeFromLabelSelectedShape(label)](#OG.handler.EventHandler+setEdgeFromLabelSelectedShape)
            * [.setEdgeToLabelSelectedShape(label)](#OG.handler.EventHandler+setEdgeToLabelSelectedShape)
            * [.zoomIn()](#OG.handler.EventHandler+zoomIn)
            * [.zoomOut()](#OG.handler.EventHandler+zoomOut)
            * [.fitWindow()](#OG.handler.EventHandler+fitWindow)
            * [.setConnectGuide(element, isConnectable)](#OG.handler.EventHandler+setConnectGuide)
    * [.layout](#OG.layout) : <code>object</code>
    * [.renderer](#OG.renderer) : <code>object</code>
        * [.IRenderer](#OG.renderer.IRenderer)
            * [new OG.renderer.IRenderer(container, containerSize, backgroundColor, backgroundImage, config)](#new_OG.renderer.IRenderer_new)
            * [.drawShape(position, shape, size, style, id)](#OG.renderer.IRenderer+drawShape) ⇒ <code>Element</code>
            * [.drawGeom(geometry, style)](#OG.renderer.IRenderer+drawGeom) ⇒ <code>Element</code>
            * [.drawText(position, text, size, style, id)](#OG.renderer.IRenderer+drawText) ⇒ <code>Element</code>
            * [.drawImage(position, imgSrc, size, style, id)](#OG.renderer.IRenderer+drawImage) ⇒ <code>Element</code>
            * [.drawEdge(line, style, id, isSelf)](#OG.renderer.IRenderer+drawEdge) ⇒ <code>Element</code>
            * [.drawLabel(shapeElement, text, style)](#OG.renderer.IRenderer+drawLabel) ⇒ <code>Element</code>
            * [.drawEdgeLabel(shapeElement, text, type)](#OG.renderer.IRenderer+drawEdgeLabel) ⇒ <code>Element</code>
            * [.redrawShape(element, excludeEdgeId)](#OG.renderer.IRenderer+redrawShape)
            * [.redrawConnectedEdge(element)](#OG.renderer.IRenderer+redrawConnectedEdge)
            * [.connect(fromTerminal, toTerminal, edge, style, label, preventTrigger)](#OG.renderer.IRenderer+connect) ⇒ <code>Element</code>
            * [.disconnect(element)](#OG.renderer.IRenderer+disconnect)
            * [.drawDropOverGuide(element)](#OG.renderer.IRenderer+drawDropOverGuide)
            * [.drawGuide(element)](#OG.renderer.IRenderer+drawGuide) ⇒ <code>Object</code>
            * [.removeGuide(element)](#OG.renderer.IRenderer+removeGuide)
            * [.removeAllGuide()](#OG.renderer.IRenderer+removeAllGuide)
            * [.removeConnectGuide(element)](#OG.renderer.IRenderer+removeConnectGuide)
            * [.removeAllConnectGuide()](#OG.renderer.IRenderer+removeAllConnectGuide)
            * [.removeOtherConnectGuide(element)](#OG.renderer.IRenderer+removeOtherConnectGuide)
            * [.removeAllVirtualEdge()](#OG.renderer.IRenderer+removeAllVirtualEdge)
            * [.drawEdgeGuide(element)](#OG.renderer.IRenderer+drawEdgeGuide) ⇒ <code>Object</code>
            * [.drawRubberBand(position, size, style)](#OG.renderer.IRenderer+drawRubberBand) ⇒ <code>Element</code>
            * [.removeRubberBand(root)](#OG.renderer.IRenderer+removeRubberBand)
            * [.drawDraggableGuide(element)](#OG.renderer.IRenderer+drawDraggableGuide) ⇒ <code>Element</code>
            * [.drawCollapseGuide(element)](#OG.renderer.IRenderer+drawCollapseGuide) ⇒ <code>Element</code>
            * [.removeCollapseGuide(element)](#OG.renderer.IRenderer+removeCollapseGuide)
            * [.group(elements)](#OG.renderer.IRenderer+group) ⇒ <code>Element</code>
            * [.ungroup(groupElements)](#OG.renderer.IRenderer+ungroup) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.addToGroup(groupElement, elements)](#OG.renderer.IRenderer+addToGroup)
            * [.collapse(element)](#OG.renderer.IRenderer+collapse)
            * [.expand(element)](#OG.renderer.IRenderer+expand)
            * [.clear()](#OG.renderer.IRenderer+clear)
            * [.removeShape(element)](#OG.renderer.IRenderer+removeShape)
            * [.remove(element)](#OG.renderer.IRenderer+remove)
            * [.removeChild(element)](#OG.renderer.IRenderer+removeChild)
            * [.getRootElement()](#OG.renderer.IRenderer+getRootElement) ⇒ <code>Element</code>
            * [.getRootGroup()](#OG.renderer.IRenderer+getRootGroup) ⇒ <code>Element</code>
            * [.getElementByPoint(position)](#OG.renderer.IRenderer+getElementByPoint) ⇒ <code>Element</code>
            * [.getElementsByBBox(envelope)](#OG.renderer.IRenderer+getElementsByBBox) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.setAttr(element, attribute)](#OG.renderer.IRenderer+setAttr)
            * [.getAttr(element, attrName)](#OG.renderer.IRenderer+getAttr) ⇒ <code>Object</code>
            * [.setShapeStyle(element, style)](#OG.renderer.IRenderer+setShapeStyle)
            * [.toFront(element)](#OG.renderer.IRenderer+toFront)
            * [.toBack(element)](#OG.renderer.IRenderer+toBack)
            * [.bringForward(element)](#OG.renderer.IRenderer+bringForward)
            * [.sendBackward(element)](#OG.renderer.IRenderer+sendBackward)
            * [.getCanvasSize()](#OG.renderer.IRenderer+getCanvasSize) ⇒ <code>Array.&lt;Number&gt;</code>
            * [.setCanvasSize(size)](#OG.renderer.IRenderer+setCanvasSize)
            * [.fitCanvasSize(minSize, fitScale)](#OG.renderer.IRenderer+fitCanvasSize)
            * [.setViewBox(position, size, isFit)](#OG.renderer.IRenderer+setViewBox)
            * [.getScale()](#OG.renderer.IRenderer+getScale) ⇒ <code>Number</code>
            * [.setScale(scale)](#OG.renderer.IRenderer+setScale)
            * [.show(element)](#OG.renderer.IRenderer+show)
            * [.hide(element)](#OG.renderer.IRenderer+hide)
            * [.appendChild(srcElement, targetElement)](#OG.renderer.IRenderer+appendChild) ⇒ <code>Element</code>
            * [.insertAfter(srcElement, targetElement)](#OG.renderer.IRenderer+insertAfter) ⇒ <code>Element</code>
            * [.insertBefore(srcElement, targetElement)](#OG.renderer.IRenderer+insertBefore) ⇒ <code>Element</code>
            * [.move(element, offset)](#OG.renderer.IRenderer+move) ⇒ <code>Element</code>
            * [.moveCentroid(element, position)](#OG.renderer.IRenderer+moveCentroid) ⇒ <code>Element</code>
            * [.rotate(element, angle)](#OG.renderer.IRenderer+rotate) ⇒ <code>Element</code>
            * [.resize(element, offset)](#OG.renderer.IRenderer+resize) ⇒ <code>Element</code>
            * [.resizeBox(element, size)](#OG.renderer.IRenderer+resizeBox) ⇒ <code>Element</code>
            * [.clone(element)](#OG.renderer.IRenderer+clone) ⇒ <code>Element</code>
            * [.getElementById(id)](#OG.renderer.IRenderer+getElementById) ⇒ <code>Element</code>
            * [.getElementsByType(shapeType, excludeType)](#OG.renderer.IRenderer+getElementsByType) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getBBox(element)](#OG.renderer.IRenderer+getBBox) ⇒ <code>Object</code>
            * [.getRootBBox()](#OG.renderer.IRenderer+getRootBBox) ⇒ <code>Object</code>
            * [.getRealRootBBox()](#OG.renderer.IRenderer+getRealRootBBox) ⇒ <code>Object</code>
            * [.getContainer()](#OG.renderer.IRenderer+getContainer) ⇒ <code>Element</code>
            * [.isSVG()](#OG.renderer.IRenderer+isSVG) ⇒ <code>Boolean</code>
            * [.isVML()](#OG.renderer.IRenderer+isVML) ⇒ <code>Boolean</code>
            * [.getPrevEdges(element)](#OG.renderer.IRenderer+getPrevEdges) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getNextEdges(element)](#OG.renderer.IRenderer+getNextEdges) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getPrevShapes(element)](#OG.renderer.IRenderer+getPrevShapes) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getPrevShapeIds(element)](#OG.renderer.IRenderer+getPrevShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
            * [.getNextShapes(element)](#OG.renderer.IRenderer+getNextShapes) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getNextShapeIds(element)](#OG.renderer.IRenderer+getNextShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
            * [.getConnectGuideElements(Element)](#OG.renderer.IRenderer+getConnectGuideElements) ⇒ <code>Array</code>
            * [.isTopGroup(Element)](#OG.renderer.IRenderer+isTopGroup) ⇒ <code>boolean</code>
            * [.getParent(element)](#OG.renderer.IRenderer+getParent) ⇒ <code>Element</code>
            * [.getChilds(element)](#OG.renderer.IRenderer+getChilds) ⇒ <code>Array</code>
            * [.isGroup(element)](#OG.renderer.IRenderer+isGroup) ⇒ <code>boolean</code>
            * [.getAllShapes()](#OG.renderer.IRenderer+getAllShapes) ⇒ <code>Array</code>
            * [.getAllEdges()](#OG.renderer.IRenderer+getAllEdges) ⇒ <code>Array</code>
            * [.getAllNotEdges()](#OG.renderer.IRenderer+getAllNotEdges) ⇒ <code>Array</code>
            * [.isEdge()](#OG.renderer.IRenderer+isEdge) ⇒ <code>boolean</code>
            * [.isShape()](#OG.renderer.IRenderer+isShape) ⇒ <code>boolean</code>
            * [.initHistory()](#OG.renderer.IRenderer+initHistory)
            * [.addHistory()](#OG.renderer.IRenderer+addHistory)
            * [.undo()](#OG.renderer.IRenderer+undo)
            * [.redo()](#OG.renderer.IRenderer+redo)
        * [.RaphaelRenderer](#OG.renderer.RaphaelRenderer) ⇐ <code>[IRenderer](#OG.renderer.IRenderer)</code>
            * [new OG.renderer.RaphaelRenderer(container, containerSize, backgroundColor, backgroundImage, config)](#new_OG.renderer.RaphaelRenderer_new)
            * [.drawHtml(position, html, size, style, id)](#OG.renderer.RaphaelRenderer+drawHtml) ⇒ <code>Element</code>
            * [._getPointOfInflectionFromEdge()](#OG.renderer.RaphaelRenderer+_getPointOfInflectionFromEdge)
            * [.reconnect(edge)](#OG.renderer.RaphaelRenderer+reconnect) ⇒ <code>Element</code>
            * [.disconnectOneWay(element, connectDirection)](#OG.renderer.RaphaelRenderer+disconnectOneWay)
            * [.drawStickGuide(element, position)](#OG.renderer.RaphaelRenderer+drawStickGuide)
            * [.setTextListInController(element, textList)](#OG.renderer.RaphaelRenderer+setTextListInController)
            * [.getTextListInController(element)](#OG.renderer.RaphaelRenderer+getTextListInController)
            * [.getConnectGuideElements(Element)](#OG.renderer.RaphaelRenderer+getConnectGuideElements) ⇒ <code>Array</code>
            * [.getNotConnectGuideElements(Element)](#OG.renderer.RaphaelRenderer+getNotConnectGuideElements) ⇒ <code>Array</code>
            * [.removeConnectGuide(element)](#OG.renderer.RaphaelRenderer+removeConnectGuide)
            * [.removeAllConnectGuide()](#OG.renderer.RaphaelRenderer+removeAllConnectGuide)
            * [.removeOtherConnectGuide(element)](#OG.renderer.RaphaelRenderer+removeOtherConnectGuide)
            * [.getSpots(element)](#OG.renderer.RaphaelRenderer+getSpots) ⇒ <code>Array</code>
            * [.getCircleSpots(element)](#OG.renderer.RaphaelRenderer+getCircleSpots) ⇒ <code>Array</code>
            * [.createVirtualSpot(x, x, element)](#OG.renderer.RaphaelRenderer+createVirtualSpot) ⇒ <code>Element</code>
            * [.getVirtualSpot(element)](#OG.renderer.RaphaelRenderer+getVirtualSpot) ⇒ <code>Element</code>
            * [.removeVirtualSpot(element)](#OG.renderer.RaphaelRenderer+removeVirtualSpot) ⇒ <code>Element</code>
            * [.selectSpot(선택한)](#OG.renderer.RaphaelRenderer+selectSpot)
            * [.getChildNodes(element)](#OG.renderer.RaphaelRenderer+getChildNodes) ⇒ <code>Array</code>
            * [.trimEdge(element)](#OG.renderer.RaphaelRenderer+trimEdge)
            * [.trimConnectInnerVertice(element)](#OG.renderer.RaphaelRenderer+trimConnectInnerVertice) ⇒ <code>Element</code>
            * [.trimConnectIntersection(element)](#OG.renderer.RaphaelRenderer+trimConnectIntersection) ⇒ <code>Element</code>
            * [.getBoundary(element)](#OG.renderer.RaphaelRenderer+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.setHighlight(element, highlight)](#OG.renderer.RaphaelRenderer+setHighlight)
            * [.removeHighlight(element, highlight)](#OG.renderer.RaphaelRenderer+removeHighlight)
            * [.createTerminalString(Element, point)](#OG.renderer.RaphaelRenderer+createTerminalString) ⇒ <code>String</code>
            * [.createDefaultTerminalString(Element)](#OG.renderer.RaphaelRenderer+createDefaultTerminalString) ⇒ <code>String</code>
            * [.toFrontEdges()](#OG.renderer.RaphaelRenderer+toFrontEdges)
            * [.removeAllEdgeGuide()](#OG.renderer.RaphaelRenderer+removeAllEdgeGuide)
            * [.createVirtualEdge(x, x, targetEle)](#OG.renderer.RaphaelRenderer+createVirtualEdge) ⇒ <code>Element</code>
            * [.updateVirtualEdge(x, x)](#OG.renderer.RaphaelRenderer+updateVirtualEdge)
            * [.getTargetfromVirtualEdge(x, x)](#OG.renderer.RaphaelRenderer+getTargetfromVirtualEdge)
            * [.removeAllVirtualEdge()](#OG.renderer.RaphaelRenderer+removeAllVirtualEdge)
            * [.isLane(Element)](#OG.renderer.RaphaelRenderer+isLane) ⇒ <code>boolean</code>
            * [.isPool(Element)](#OG.renderer.RaphaelRenderer+isPool) ⇒ <code>boolean</code>
            * [.isScopeActivity(Element)](#OG.renderer.RaphaelRenderer+isScopeActivity) ⇒ <code>boolean</code>
            * [.isHorizontalLane(Element)](#OG.renderer.RaphaelRenderer+isHorizontalLane) ⇒ <code>boolean</code>
            * [.isVerticalLane(Element)](#OG.renderer.RaphaelRenderer+isVerticalLane) ⇒ <code>boolean</code>
            * [.isHorizontalPool(Element)](#OG.renderer.RaphaelRenderer+isHorizontalPool) ⇒ <code>boolean</code>
            * [.isVerticalPool(Element)](#OG.renderer.RaphaelRenderer+isVerticalPool) ⇒ <code>boolean</code>
            * [.getChildLane(Element)](#OG.renderer.RaphaelRenderer+getChildLane) ⇒ <code>Array</code>
            * [.enableDivideCount(Element)](#OG.renderer.RaphaelRenderer+enableDivideCount) ⇒ <code>Number</code>
            * [.getExceptTitleLaneArea(Element, boundary)](#OG.renderer.RaphaelRenderer+getExceptTitleLaneArea)
            * [.divideLane(Element, quarterOrder)](#OG.renderer.RaphaelRenderer+divideLane)
            * [.getBaseLanes(Element)](#OG.renderer.RaphaelRenderer+getBaseLanes) ⇒ <code>Array</code>
            * [.getRootLane(Element)](#OG.renderer.RaphaelRenderer+getRootLane) ⇒ <code>Element</code>
            * [.getIndexOfLane(Element)](#OG.renderer.RaphaelRenderer+getIndexOfLane) ⇒ <code>Number</code>
            * [.getDepthOfLane(Element)](#OG.renderer.RaphaelRenderer+getDepthOfLane) ⇒ <code>Number</code>
            * [.reEstablishLane(Element)](#OG.renderer.RaphaelRenderer+reEstablishLane)
            * [.getBoundaryOfElements(elements)](#OG.renderer.RaphaelRenderer+getBoundaryOfElements) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getNearestBaseLaneIndexAsDirection(Element, direction)](#OG.renderer.RaphaelRenderer+getNearestBaseLaneIndexAsDirection) ⇒ <code>Number</code>
            * [.getBoundaryOfInnerShapesGroup(Element)](#OG.renderer.RaphaelRenderer+getBoundaryOfInnerShapesGroup) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
            * [.getSmallestBaseLane(Element, baseLane)](#OG.renderer.RaphaelRenderer+getSmallestBaseLane)
            * [.resizeLane(Element, offset)](#OG.renderer.RaphaelRenderer+resizeLane)
            * [.removeLaneShape(Element)](#OG.renderer.RaphaelRenderer+removeLaneShape)
            * [.getInnerShapesOfLane(Element)](#OG.renderer.RaphaelRenderer+getInnerShapesOfLane)
            * [.fitLaneOrder(Element)](#OG.renderer.RaphaelRenderer+fitLaneOrder)
            * [.getRootGroupOfShape(Element)](#OG.renderer.RaphaelRenderer+getRootGroupOfShape) ⇒ <code>Element</code>
            * [.checkBridgeEdge(Element)](#OG.renderer.RaphaelRenderer+checkBridgeEdge)
            * [.checkAllBridgeEdge()](#OG.renderer.RaphaelRenderer+checkAllBridgeEdge)
            * [.getInnerShapesOfGroup(Element)](#OG.renderer.RaphaelRenderer+getInnerShapesOfGroup)
            * [.getFrontForCoordinate(point)](#OG.renderer.RaphaelRenderer+getFrontForCoordinate) ⇒ <code>Element</code>
            * [.getFrontForBoundary(boundary)](#OG.renderer.RaphaelRenderer+getFrontForBoundary) ⇒ <code>Element</code>
            * [.trimEdgeDirection(Edge, FromShape, ToShape)](#OG.renderer.RaphaelRenderer+trimEdgeDirection) ⇒ <code>Element</code>
            * [.putInnerShapeToPool(Element)](#OG.renderer.RaphaelRenderer+putInnerShapeToPool) ⇒ <code>Element</code>
            * [.setDropablePool(Element)](#OG.renderer.RaphaelRenderer+setDropablePool) ⇒ <code>Element</code>
            * [.offDropablePool()](#OG.renderer.RaphaelRenderer+offDropablePool)
            * [.drawShape(position, shape, size, style, id)](#OG.renderer.IRenderer+drawShape) ⇒ <code>Element</code>
            * [.drawGeom(geometry, style)](#OG.renderer.IRenderer+drawGeom) ⇒ <code>Element</code>
            * [.drawText(position, text, size, style, id)](#OG.renderer.IRenderer+drawText) ⇒ <code>Element</code>
            * [.drawImage(position, imgSrc, size, style, id)](#OG.renderer.IRenderer+drawImage) ⇒ <code>Element</code>
            * [.drawEdge(line, style, id, isSelf)](#OG.renderer.IRenderer+drawEdge) ⇒ <code>Element</code>
            * [.drawLabel(shapeElement, text, style)](#OG.renderer.IRenderer+drawLabel) ⇒ <code>Element</code>
                * [~getCenterOfEdge(element)](#OG.renderer.RaphaelRenderer+drawLabel..getCenterOfEdge) ⇒ <code>OG.Coordinate</code>
            * [.drawEdgeLabel(shapeElement, text, type)](#OG.renderer.IRenderer+drawEdgeLabel) ⇒ <code>Element</code>
            * [.redrawShape(element, excludeEdgeId)](#OG.renderer.IRenderer+redrawShape)
            * [.redrawConnectedEdge(element)](#OG.renderer.IRenderer+redrawConnectedEdge)
            * [.connect(fromTerminal, toTerminal, edge, style, label, preventTrigger)](#OG.renderer.IRenderer+connect) ⇒ <code>Element</code>
            * [.disconnect(element)](#OG.renderer.IRenderer+disconnect)
            * [.drawDropOverGuide(element)](#OG.renderer.IRenderer+drawDropOverGuide)
            * [.drawGuide(element)](#OG.renderer.IRenderer+drawGuide) ⇒ <code>Object</code>
            * [.removeGuide(element)](#OG.renderer.IRenderer+removeGuide)
            * [.removeAllGuide()](#OG.renderer.IRenderer+removeAllGuide)
            * [.drawEdgeGuide(element)](#OG.renderer.IRenderer+drawEdgeGuide) ⇒ <code>Object</code>
            * [.drawRubberBand(position, size, style)](#OG.renderer.IRenderer+drawRubberBand) ⇒ <code>Element</code>
            * [.removeRubberBand(root)](#OG.renderer.IRenderer+removeRubberBand)
            * [.drawDraggableGuide(element)](#OG.renderer.IRenderer+drawDraggableGuide) ⇒ <code>Element</code>
            * [.drawCollapseGuide(element)](#OG.renderer.IRenderer+drawCollapseGuide) ⇒ <code>Element</code>
            * [.removeCollapseGuide(element)](#OG.renderer.IRenderer+removeCollapseGuide)
            * [.group(elements)](#OG.renderer.IRenderer+group) ⇒ <code>Element</code>
            * [.ungroup(groupElements)](#OG.renderer.IRenderer+ungroup) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.addToGroup(groupElement, elements)](#OG.renderer.IRenderer+addToGroup)
            * [.collapse(element)](#OG.renderer.IRenderer+collapse)
            * [.expand(element)](#OG.renderer.IRenderer+expand)
            * [.clear()](#OG.renderer.IRenderer+clear)
            * [.removeShape(element)](#OG.renderer.IRenderer+removeShape)
            * [.remove(element)](#OG.renderer.IRenderer+remove)
            * [.removeChild(element)](#OG.renderer.IRenderer+removeChild)
            * [.getRootElement()](#OG.renderer.IRenderer+getRootElement) ⇒ <code>Element</code>
            * [.getRootGroup()](#OG.renderer.IRenderer+getRootGroup) ⇒ <code>Element</code>
            * [.getElementByPoint(position)](#OG.renderer.IRenderer+getElementByPoint) ⇒ <code>Element</code>
            * [.getElementsByBBox(envelope)](#OG.renderer.IRenderer+getElementsByBBox) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.setAttr(element, attribute)](#OG.renderer.IRenderer+setAttr)
            * [.getAttr(element, attrName)](#OG.renderer.IRenderer+getAttr) ⇒ <code>Object</code>
            * [.setShapeStyle(element, style)](#OG.renderer.IRenderer+setShapeStyle)
            * [.toFront(element)](#OG.renderer.IRenderer+toFront)
            * [.toBack(element)](#OG.renderer.IRenderer+toBack)
            * [.bringForward(element)](#OG.renderer.IRenderer+bringForward)
            * [.sendBackward(element)](#OG.renderer.IRenderer+sendBackward)
            * [.getCanvasSize()](#OG.renderer.IRenderer+getCanvasSize) ⇒ <code>Array.&lt;Number&gt;</code>
            * [.setCanvasSize(size)](#OG.renderer.IRenderer+setCanvasSize)
            * [.fitCanvasSize(minSize, fitScale)](#OG.renderer.IRenderer+fitCanvasSize)
            * [.setViewBox(position, size, isFit)](#OG.renderer.IRenderer+setViewBox)
            * [.getScale()](#OG.renderer.IRenderer+getScale) ⇒ <code>Number</code>
            * [.setScale(scale)](#OG.renderer.IRenderer+setScale)
            * [.show(element)](#OG.renderer.IRenderer+show)
            * [.hide(element)](#OG.renderer.IRenderer+hide)
            * [.appendChild(srcElement, targetElement)](#OG.renderer.IRenderer+appendChild) ⇒ <code>Element</code>
            * [.insertAfter(srcElement, targetElement)](#OG.renderer.IRenderer+insertAfter) ⇒ <code>Element</code>
            * [.insertBefore(srcElement, targetElement)](#OG.renderer.IRenderer+insertBefore) ⇒ <code>Element</code>
            * [.move(element, offset)](#OG.renderer.IRenderer+move) ⇒ <code>Element</code>
            * [.moveCentroid(element, position)](#OG.renderer.IRenderer+moveCentroid) ⇒ <code>Element</code>
            * [.rotate(element, angle)](#OG.renderer.IRenderer+rotate) ⇒ <code>Element</code>
            * [.resize(element, offset)](#OG.renderer.IRenderer+resize) ⇒ <code>Element</code>
            * [.resizeBox(element, size)](#OG.renderer.IRenderer+resizeBox) ⇒ <code>Element</code>
            * [.clone(element)](#OG.renderer.IRenderer+clone) ⇒ <code>Element</code>
            * [.getElementById(id)](#OG.renderer.IRenderer+getElementById) ⇒ <code>Element</code>
            * [.getElementsByType(shapeType, excludeType)](#OG.renderer.IRenderer+getElementsByType) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getBBox(element)](#OG.renderer.IRenderer+getBBox) ⇒ <code>Object</code>
            * [.getRootBBox()](#OG.renderer.IRenderer+getRootBBox) ⇒ <code>Object</code>
            * [.getRealRootBBox()](#OG.renderer.IRenderer+getRealRootBBox) ⇒ <code>Object</code>
            * [.getContainer()](#OG.renderer.IRenderer+getContainer) ⇒ <code>Element</code>
            * [.isSVG()](#OG.renderer.IRenderer+isSVG) ⇒ <code>Boolean</code>
            * [.isVML()](#OG.renderer.IRenderer+isVML) ⇒ <code>Boolean</code>
            * [.getPrevEdges(element)](#OG.renderer.IRenderer+getPrevEdges) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getNextEdges(element)](#OG.renderer.IRenderer+getNextEdges) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getPrevShapes(element)](#OG.renderer.IRenderer+getPrevShapes) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getPrevShapeIds(element)](#OG.renderer.IRenderer+getPrevShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
            * [.getNextShapes(element)](#OG.renderer.IRenderer+getNextShapes) ⇒ <code>Array.&lt;Element&gt;</code>
            * [.getNextShapeIds(element)](#OG.renderer.IRenderer+getNextShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
            * [.isTopGroup(Element)](#OG.renderer.IRenderer+isTopGroup) ⇒ <code>boolean</code>
            * [.getParent(element)](#OG.renderer.IRenderer+getParent) ⇒ <code>Element</code>
            * [.getChilds(element)](#OG.renderer.IRenderer+getChilds) ⇒ <code>Array</code>
            * [.isGroup(element)](#OG.renderer.IRenderer+isGroup) ⇒ <code>boolean</code>
            * [.getAllShapes()](#OG.renderer.IRenderer+getAllShapes) ⇒ <code>Array</code>
            * [.getAllEdges()](#OG.renderer.IRenderer+getAllEdges) ⇒ <code>Array</code>
            * [.getAllNotEdges()](#OG.renderer.IRenderer+getAllNotEdges) ⇒ <code>Array</code>
            * [.isEdge()](#OG.renderer.IRenderer+isEdge) ⇒ <code>boolean</code>
            * [.isShape()](#OG.renderer.IRenderer+isShape) ⇒ <code>boolean</code>
            * [.initHistory()](#OG.renderer.IRenderer+initHistory)
            * [.addHistory()](#OG.renderer.IRenderer+addHistory)
            * [.undo()](#OG.renderer.IRenderer+undo)
            * [.redo()](#OG.renderer.IRenderer+redo)
    * [.marker](#OG.marker) : <code>object</code>
        * [.ArrowMarker](#OG.marker.ArrowMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
            * [new OG.marker.ArrowMarker()](#new_OG.marker.ArrowMarker_new)
            * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
            * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
        * [.CircleMarker](#OG.marker.CircleMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
            * [new OG.marker.CircleMarker()](#new_OG.marker.CircleMarker_new)
            * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
            * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
        * [.IMarker](#OG.marker.IMarker)
            * [new OG.marker.IMarker()](#new_OG.marker.IMarker_new)
            * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
            * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * *[.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>*
        * [.RectangleMarker](#OG.marker.RectangleMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
            * [new OG.marker.RectangleMarker()](#new_OG.marker.RectangleMarker_new)
            * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
            * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
        * [.SwitchLMarker](#OG.marker.SwitchLMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
            * [new OG.marker.SwitchLMarker()](#new_OG.marker.SwitchLMarker_new)
            * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
            * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
        * [.SwitchRMarker](#OG.marker.SwitchRMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
            * [new OG.marker.SwitchRMarker()](#new_OG.marker.SwitchRMarker_new)
            * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
            * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
        * [.SwitchXMarker](#OG.marker.SwitchXMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
            * [new OG.marker.SwitchXMarker()](#new_OG.marker.SwitchXMarker_new)
            * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
            * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
    * [.pattern](#OG.pattern) : <code>object</code>
        * [.HatchedPattern](#OG.pattern.HatchedPattern) ⇐ <code>[IPattern](#OG.pattern.IPattern)</code>
            * [new OG.pattern.HatchedPattern()](#new_OG.pattern.HatchedPattern_new)
            * [.PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID) : <code>String</code>
            * [.geom](#OG.pattern.IPattern+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.createPattern()](#OG.pattern.IPattern+createPattern) ⇒ <code>\*</code>
        * [.IPattern](#OG.pattern.IPattern)
            * [new OG.pattern.IPattern()](#new_OG.pattern.IPattern_new)
            * [.PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID) : <code>String</code>
            * [.geom](#OG.pattern.IPattern+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * *[.createPattern()](#OG.pattern.IPattern+createPattern) ⇒ <code>\*</code>*
        * [.RectPattern](#OG.pattern.RectPattern) ⇐ <code>[IPattern](#OG.pattern.IPattern)</code>
            * [new OG.pattern.RectPattern()](#new_OG.pattern.RectPattern_new)
            * [.PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID) : <code>String</code>
            * [.geom](#OG.pattern.IPattern+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.createPattern()](#OG.pattern.IPattern+createPattern) ⇒ <code>\*</code>
    * [.shape](#OG.shape) : <code>object</code>
        * [.CircleShape](#OG.shape.CircleShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
            * [new OG.shape.CircleShape(label)](#new_OG.shape.CircleShape_new)
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.EdgeShape](#OG.shape.EdgeShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
            * [new OG.shape.EdgeShape(from, to, label, fromLabel, toLabel)](#new_OG.shape.EdgeShape_new)
            * [.from](#OG.shape.EdgeShape+from) : <code>Array.&lt;Number&gt;</code>
            * [.to](#OG.shape.EdgeShape+to) : <code>Array.&lt;Number&gt;</code>
            * [.fromLabel](#OG.shape.EdgeShape+fromLabel) : <code>String</code>
            * [.toLabel](#OG.shape.EdgeShape+toLabel) : <code>String</code>
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.EllipseShape](#OG.shape.EllipseShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
            * [new OG.shape.EllipseShape(label)](#new_OG.shape.EllipseShape_new)
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.GeomShape](#OG.shape.GeomShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
            * [new OG.shape.GeomShape()](#new_OG.shape.GeomShape_new)
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * *[.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>*
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.GroupShape](#OG.shape.GroupShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
            * [new OG.shape.GroupShape(label)](#new_OG.shape.GroupShape_new)
            * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
            * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.HorizontalLaneShape](#OG.shape.HorizontalLaneShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
            * [new OG.shape.HorizontalLaneShape(label)](#new_OG.shape.HorizontalLaneShape_new)
            * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
            * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.HorizontalPoolShape](#OG.shape.HorizontalPoolShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
            * [new OG.shape.HorizontalPoolShape(label)](#new_OG.shape.HorizontalPoolShape_new)
            * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
            * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.HtmlShape](#OG.shape.HtmlShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
            * [new OG.shape.HtmlShape(html, label)](#new_OG.shape.HtmlShape_new)
            * [.html](#OG.shape.HtmlShape+html) : <code>String</code>
            * [.angle](#OG.shape.HtmlShape+angle) : <code>Number</code>
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.IShape](#OG.shape.IShape)
            * [new OG.shape.IShape()](#new_OG.shape.IShape_new)
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * *[.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>*
            * *[.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>*
        * [.ImageShape](#OG.shape.ImageShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
            * [new OG.shape.ImageShape(image, label)](#new_OG.shape.ImageShape_new)
            * [.image](#OG.shape.ImageShape+image) : <code>String</code>
            * [.angle](#OG.shape.ImageShape+angle) : <code>Number</code>
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.RectangleShape](#OG.shape.RectangleShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
            * [new OG.shape.RectangleShape(label)](#new_OG.shape.RectangleShape_new)
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.SpotShape](#OG.shape.SpotShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
            * [new OG.shape.SpotShape(label)](#new_OG.shape.SpotShape_new)
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.TextShape](#OG.shape.TextShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
            * [new OG.shape.TextShape(text)](#new_OG.shape.TextShape_new)
            * [.text](#OG.shape.TextShape+text) : <code>String</code>
            * [.angle](#OG.shape.TextShape+angle) : <code>Number</code>
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.VerticalLaneShape](#OG.shape.VerticalLaneShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
            * [new OG.shape.VerticalLaneShape(label)](#new_OG.shape.VerticalLaneShape_new)
            * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
            * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.VerticalPoolShape](#OG.shape.VerticalPoolShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
            * [new OG.shape.VerticalPoolShape(label)](#new_OG.shape.VerticalPoolShape_new)
            * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
            * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
            * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
            * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
            * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
            * [.label](#OG.shape.IShape+label) : <code>String</code>
            * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
            * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
            * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
            * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
            * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
            * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
            * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
            * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
            * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
            * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
            * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
            * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
            * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
            * [.data](#OG.shape.IShape+data) : <code>Object</code>
            * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
            * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
            * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.bpmn](#OG.shape.bpmn) : <code>object</code>
        * [.elec](#OG.shape.elec) : <code>object</code>

<a name="OG.common"></a>

### OG.common : <code>object</code>
**Kind**: static namespace of <code>[OG](#OG)</code>  

* [.common](#OG.common) : <code>object</code>
    * [.Constants](#OG.common.Constants)
        * [new OG.common.Constants()](#new_OG.common.Constants_new)
        * [.GEOM_TYPE](#OG.common.Constants.GEOM_TYPE)
        * [.GEOM_NAME](#OG.common.Constants.GEOM_NAME)
        * [.NUM_PRECISION](#OG.common.Constants.NUM_PRECISION)
        * [.NODE_TYPE](#OG.common.Constants.NODE_TYPE)
        * [.SHAPE_TYPE](#OG.common.Constants.SHAPE_TYPE)
        * [.EDGE_TYPE](#OG.common.Constants.EDGE_TYPE)
        * [.LABEL_SUFFIX](#OG.common.Constants.LABEL_SUFFIX)
        * [.LABEL_EDITOR_SUFFIX](#OG.common.Constants.LABEL_EDITOR_SUFFIX)
        * [.FROM_LABEL_SUFFIX](#OG.common.Constants.FROM_LABEL_SUFFIX)
        * [.TO_LABEL_SUFFIX](#OG.common.Constants.TO_LABEL_SUFFIX)
        * [.RUBBER_BAND_ID](#OG.common.Constants.RUBBER_BAND_ID)
        * [.RUBBER_BAND_TOLERANCE](#OG.common.Constants.RUBBER_BAND_TOLERANCE)
        * [.GUIDE_SUFFIX](#OG.common.Constants.GUIDE_SUFFIX)
        * [.COLLAPSE_SUFFIX](#OG.common.Constants.COLLAPSE_SUFFIX)
        * [.LOOPTYPE_SUFFIX](#OG.common.Constants.LOOPTYPE_SUFFIX)
        * [.TASKTYPE_SUFFIX](#OG.common.Constants.TASKTYPE_SUFFIX)
        * [.INCLUSION_SUFFIX](#OG.common.Constants.INCLUSION_SUFFIX)
        * [.STATUS_SUFFIX](#OG.common.Constants.STATUS_SUFFIX)
        * [.EXCEPTIONTYPE_SUFFIX](#OG.common.Constants.EXCEPTIONTYPE_SUFFIX)
        * [.MOVE_SNAP_SIZE](#OG.common.Constants.MOVE_SNAP_SIZE)
        * [.DROP_OVER_BBOX_SUFFIX](#OG.common.Constants.DROP_OVER_BBOX_SUFFIX)
        * [.TERMINAL_SUFFIX](#OG.common.Constants.TERMINAL_SUFFIX)
        * [.TERMINAL](#OG.common.Constants.TERMINAL)
        * [.MARKER_TEMP_NODE](#OG.common.Constants.MARKER_TEMP_NODE)
        * [.PATTERN_TEMP_NODE](#OG.common.Constants.PATTERN_TEMP_NODE)
        * [.MARKER_DEFS_SUFFIX](#OG.common.Constants.MARKER_DEFS_SUFFIX)
        * [.ORIGINAL_NODE](#OG.common.Constants.ORIGINAL_NODE)
        * [.CONNECT_GUIDE_EVENT_AREA](#OG.common.Constants.CONNECT_GUIDE_EVENT_AREA)
        * [.CONNECT_GUIDE_SUFFIX](#OG.common.Constants.CONNECT_GUIDE_SUFFIX)
    * [.CurveUtil](#OG.common.CurveUtil)
        * [new OG.common.CurveUtil()](#new_OG.common.CurveUtil_new)
        * [.CatmullRomSpline(points)](#OG.common.CurveUtil.CatmullRomSpline) ⇒ <code>Object</code>
        * [.Bezier(points)](#OG.common.CurveUtil.Bezier) ⇒ <code>Object</code>
        * [.BSpline(points, order)](#OG.common.CurveUtil.BSpline) ⇒ <code>Object</code>
    * [.HashMap](#OG.common.HashMap)
        * [new OG.common.HashMap(jsonObject)](#new_OG.common.HashMap_new)
        * [.map](#OG.common.HashMap+map) : <code>Object</code>
        * [.put(key, value)](#OG.common.HashMap+put)
        * [.get(key)](#OG.common.HashMap+get) ⇒ <code>Object</code>
        * [.containsKey(key)](#OG.common.HashMap+containsKey) ⇒ <code>Boolean</code>
        * [.containsValue(value)](#OG.common.HashMap+containsValue) ⇒ <code>Boolean</code>
        * [.isEmpty()](#OG.common.HashMap+isEmpty) ⇒ <code>Boolean</code>
        * [.clear()](#OG.common.HashMap+clear)
        * [.remove(key)](#OG.common.HashMap+remove)
        * [.keys()](#OG.common.HashMap+keys) ⇒ <code>Array.&lt;String&gt;</code>
        * [.values()](#OG.common.HashMap+values) ⇒ <code>Array.&lt;Object&gt;</code>
        * [.size()](#OG.common.HashMap+size) ⇒ <code>Number</code>
        * [.toString()](#OG.common.HashMap+toString) ⇒ <code>String</code>
    * [.JSON](#OG.common.JSON)
        * [new OG.common.JSON()](#new_OG.common.JSON_new)
        * [.encode](#OG.common.JSON+encode) ⇒ <code>String</code>
        * [.decode](#OG.common.JSON+decode) ⇒ <code>Object</code>
        * [.encodeDate(d)](#OG.common.JSON+encodeDate) ⇒ <code>String</code>
    * [.Util](#OG.common.Util)
        * [new OG.common.Util()](#new_OG.common.Util_new)
        * [.extend](#OG.common.Util.extend) ⇒ <code>function</code>
        * [.clone(obj)](#OG.common.Util.clone) ⇒ <code>Object</code>
        * [.round(val)](#OG.common.Util.round) ⇒ <code>Number</code>
        * [.roundPrecision(val, precision)](#OG.common.Util.roundPrecision) ⇒ <code>Number</code>
        * [.roundGrid(val, snapSize)](#OG.common.Util.roundGrid) ⇒ <code>Number</code>
        * [.apply(obj, config, defaults)](#OG.common.Util.apply) ⇒ <code>Object</code>

<a name="OG.common.Constants"></a>

#### common.Constants
**Kind**: static class of <code>[common](#OG.common)</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Constants](#OG.common.Constants)
    * [new OG.common.Constants()](#new_OG.common.Constants_new)
    * [.GEOM_TYPE](#OG.common.Constants.GEOM_TYPE)
    * [.GEOM_NAME](#OG.common.Constants.GEOM_NAME)
    * [.NUM_PRECISION](#OG.common.Constants.NUM_PRECISION)
    * [.NODE_TYPE](#OG.common.Constants.NODE_TYPE)
    * [.SHAPE_TYPE](#OG.common.Constants.SHAPE_TYPE)
    * [.EDGE_TYPE](#OG.common.Constants.EDGE_TYPE)
    * [.LABEL_SUFFIX](#OG.common.Constants.LABEL_SUFFIX)
    * [.LABEL_EDITOR_SUFFIX](#OG.common.Constants.LABEL_EDITOR_SUFFIX)
    * [.FROM_LABEL_SUFFIX](#OG.common.Constants.FROM_LABEL_SUFFIX)
    * [.TO_LABEL_SUFFIX](#OG.common.Constants.TO_LABEL_SUFFIX)
    * [.RUBBER_BAND_ID](#OG.common.Constants.RUBBER_BAND_ID)
    * [.RUBBER_BAND_TOLERANCE](#OG.common.Constants.RUBBER_BAND_TOLERANCE)
    * [.GUIDE_SUFFIX](#OG.common.Constants.GUIDE_SUFFIX)
    * [.COLLAPSE_SUFFIX](#OG.common.Constants.COLLAPSE_SUFFIX)
    * [.LOOPTYPE_SUFFIX](#OG.common.Constants.LOOPTYPE_SUFFIX)
    * [.TASKTYPE_SUFFIX](#OG.common.Constants.TASKTYPE_SUFFIX)
    * [.INCLUSION_SUFFIX](#OG.common.Constants.INCLUSION_SUFFIX)
    * [.STATUS_SUFFIX](#OG.common.Constants.STATUS_SUFFIX)
    * [.EXCEPTIONTYPE_SUFFIX](#OG.common.Constants.EXCEPTIONTYPE_SUFFIX)
    * [.MOVE_SNAP_SIZE](#OG.common.Constants.MOVE_SNAP_SIZE)
    * [.DROP_OVER_BBOX_SUFFIX](#OG.common.Constants.DROP_OVER_BBOX_SUFFIX)
    * [.TERMINAL_SUFFIX](#OG.common.Constants.TERMINAL_SUFFIX)
    * [.TERMINAL](#OG.common.Constants.TERMINAL)
    * [.MARKER_TEMP_NODE](#OG.common.Constants.MARKER_TEMP_NODE)
    * [.PATTERN_TEMP_NODE](#OG.common.Constants.PATTERN_TEMP_NODE)
    * [.MARKER_DEFS_SUFFIX](#OG.common.Constants.MARKER_DEFS_SUFFIX)
    * [.ORIGINAL_NODE](#OG.common.Constants.ORIGINAL_NODE)
    * [.CONNECT_GUIDE_EVENT_AREA](#OG.common.Constants.CONNECT_GUIDE_EVENT_AREA)
    * [.CONNECT_GUIDE_SUFFIX](#OG.common.Constants.CONNECT_GUIDE_SUFFIX)

<a name="new_OG.common.Constants_new"></a>

##### new OG.common.Constants()
공통 상수 정의 Javascript 클래스

<a name="OG.common.Constants.GEOM_TYPE"></a>

##### Constants.GEOM_TYPE
공간 기하 객체 타입 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.GEOM_NAME"></a>

##### Constants.GEOM_NAME
공간 기하 객체 타입-이름 매핑

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.NUM_PRECISION"></a>

##### Constants.NUM_PRECISION
숫자 반올림 소숫점 자리수

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.NODE_TYPE"></a>

##### Constants.NODE_TYPE
캔버스 노드 타입 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.SHAPE_TYPE"></a>

##### Constants.SHAPE_TYPE
Shape 타입 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.EDGE_TYPE"></a>

##### Constants.EDGE_TYPE
Edge 타입 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.LABEL_SUFFIX"></a>

##### Constants.LABEL_SUFFIX
라벨 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.LABEL_EDITOR_SUFFIX"></a>

##### Constants.LABEL_EDITOR_SUFFIX
라벨 에디터 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.FROM_LABEL_SUFFIX"></a>

##### Constants.FROM_LABEL_SUFFIX
시작점 라벨 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.TO_LABEL_SUFFIX"></a>

##### Constants.TO_LABEL_SUFFIX
끝점 라벨 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.RUBBER_BAND_ID"></a>

##### Constants.RUBBER_BAND_ID
Rectangle 모양의 마우스 드래그 선택 박스 영역

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.RUBBER_BAND_TOLERANCE"></a>

##### Constants.RUBBER_BAND_TOLERANCE
Rubber Band 허용 오차

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.GUIDE_SUFFIX"></a>

##### Constants.GUIDE_SUFFIX
Move & Resize 용 가이드 ID 의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.COLLAPSE_SUFFIX"></a>

##### Constants.COLLAPSE_SUFFIX
Collapse & Expand 용 가이드 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.LOOPTYPE_SUFFIX"></a>

##### Constants.LOOPTYPE_SUFFIX
LoopType 용 가이드 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.TASKTYPE_SUFFIX"></a>

##### Constants.TASKTYPE_SUFFIX
TaskType 용 가이드 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.INCLUSION_SUFFIX"></a>

##### Constants.INCLUSION_SUFFIX
TaskType 용 가이드 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.STATUS_SUFFIX"></a>

##### Constants.STATUS_SUFFIX
STATUS 용 가이드 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.EXCEPTIONTYPE_SUFFIX"></a>

##### Constants.EXCEPTIONTYPE_SUFFIX
EXCEPTIONTYPE 용 가이드 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.MOVE_SNAP_SIZE"></a>

##### Constants.MOVE_SNAP_SIZE
Shape Move & Resize 시 이동 간격

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.DROP_OVER_BBOX_SUFFIX"></a>

##### Constants.DROP_OVER_BBOX_SUFFIX
Edge 연결할때 Drop Over 가이드 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.TERMINAL_SUFFIX"></a>

##### Constants.TERMINAL_SUFFIX
Shape - Edge 와의 연결 포인트 터미널 ID의 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.TERMINAL"></a>

##### Constants.TERMINAL
Shape - Edge 와의 연결 포인트

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.MARKER_TEMP_NODE"></a>

##### Constants.MARKER_TEMP_NODE
마커 등록을 위한 임시 노드 아이디

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.PATTERN_TEMP_NODE"></a>

##### Constants.PATTERN_TEMP_NODE
패턴 등록을 위한 임시 노드 아이디

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.MARKER_DEFS_SUFFIX"></a>

##### Constants.MARKER_DEFS_SUFFIX
캔버스의 마커 데피니션 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.ORIGINAL_NODE"></a>

##### Constants.ORIGINAL_NODE
Shape 에서 마커가 그려질 경우 원본 노드 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.CONNECT_GUIDE_EVENT_AREA"></a>

##### Constants.CONNECT_GUIDE_EVENT_AREA
Element 의 커넥트 가이드 이벤트 보정영역의 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.Constants.CONNECT_GUIDE_SUFFIX"></a>

##### Constants.CONNECT_GUIDE_SUFFIX
Element 의 커넥트 가이드 suffix 정의

**Kind**: static property of <code>[Constants](#OG.common.Constants)</code>  
<a name="OG.common.CurveUtil"></a>

#### common.CurveUtil
**Kind**: static class of <code>[common](#OG.common)</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.CurveUtil](#OG.common.CurveUtil)
    * [new OG.common.CurveUtil()](#new_OG.common.CurveUtil_new)
    * [.CatmullRomSpline(points)](#OG.common.CurveUtil.CatmullRomSpline) ⇒ <code>Object</code>
    * [.Bezier(points)](#OG.common.CurveUtil.Bezier) ⇒ <code>Object</code>
    * [.BSpline(points, order)](#OG.common.CurveUtil.BSpline) ⇒ <code>Object</code>

<a name="new_OG.common.CurveUtil_new"></a>

##### new OG.common.CurveUtil()
곡선(Curve) 알고리즘을 구현한 Javascript 클래스

<a name="OG.common.CurveUtil.CatmullRomSpline"></a>

##### CurveUtil.CatmullRomSpline(points) ⇒ <code>Object</code>
주어진 좌표 Array 에 대해 Cubic Catmull-Rom spline Curve 좌표를 계산하는 함수를 반환한다.
모든 좌표를 지나는 커브를 계산한다.

**Kind**: static method of <code>[CurveUtil](#OG.common.CurveUtil)</code>  
**Returns**: <code>Object</code> - t 값에 의해 X, Y 좌표를 구하는 함수와 maxT 값을 반환  

| Param | Type | Description |
| --- | --- | --- |
| points | <code>Array</code> | 좌표 Array (예, [[x1,y1], [x2,y2], [x3,y3], [x4,y4]]) |

**Example**  
```js
var points = [[2, 2], [2, -2], [-2, 2], [-2, -2]],
    cmRomSpline = OG.CurveUtil.CatmullRomSpline(points), t, curve = [];

// t 는 0 ~ maxT 의 값으로, t 값의 증분값이 작을수록 세밀한 Curve 를 그린다.
for(t = 0; t <= cmRomSpline.maxT; t += 0.1) {
    curve.push([cmRomSpline.getX(t), cmRomSpline.getY(t)]);
}
```
<a name="OG.common.CurveUtil.Bezier"></a>

##### CurveUtil.Bezier(points) ⇒ <code>Object</code>
주어진 좌표 Array (좌표1, 콘트롤포인트1, 콘트롤포인트2, 좌표2 ...) 에 대해 Cubic Bezier Curve 좌표를 계산하는 함수를 반환한다.
Array 갯수는 3 * K + 1 이어야 한다.
예) 좌표1, 콘트롤포인트1, 콘트롤포인트2, 좌표2, 콘트롤포인트1, 콘트롤포인트2, 좌표3 ...

**Kind**: static method of <code>[CurveUtil](#OG.common.CurveUtil)</code>  
**Returns**: <code>Object</code> - t 값에 의해 X, Y 좌표를 구하는 함수와 maxT 값을 반환  

| Param | Type | Description |
| --- | --- | --- |
| points | <code>Array</code> | 좌표 Array (예, [[x1,y1], [cp_x1,cp_y1], [cp_x2,cp_y2], [x2,y4]]) |

**Example**  
```js
var points = [[2, 1], [1, 3], [-1, -1], [-2, 1]],
    bezier = OG.CurveUtil.Bezier(points), t, curve = [];

// t 는 0 ~ maxT 의 값으로, t 값의 증분값이 작을수록 세밀한 Curve 를 그린다.
for(t = 0; t <= bezier.maxT; t += 0.1) {
    curve.push([bezier.getX(t), bezier.getY(t)]);
}
```
<a name="OG.common.CurveUtil.BSpline"></a>

##### CurveUtil.BSpline(points, order) ⇒ <code>Object</code>
주어진 좌표 Array (시작좌표, 콘트롤포인트1, 콘트롤포인트2, ..., 끝좌표) 에 대해 B-Spline Curve 좌표를 계산하는 함수를 반환한다.

**Kind**: static method of <code>[CurveUtil](#OG.common.CurveUtil)</code>  
**Returns**: <code>Object</code> - t 값에 의해 X, Y 좌표를 구하는 함수와 maxT 값을 반환  

| Param | Type | Description |
| --- | --- | --- |
| points | <code>Array</code> | 좌표 Array (예, [[x1,y1], [x2,y2], [x3,y3], [x4,y4]]) |
| order | <code>Number</code> | Order of the B-spline curve. |

**Example**  
```js
var points = [[2, 1], [1, 3], [-1, -1], [-2, 1]],
    bspline = OG.CurveUtil.BSpline(points), t, curve = [];

// t 는 0 ~ maxT 의 값으로, t 값의 증분값이 작을수록 세밀한 Curve 를 그린다.
for(t = 0; t <= bspline.maxT; t += 0.1) {
    curve.push([bspline.getX(t), bspline.getY(t)]);
}
```
<a name="OG.common.HashMap"></a>

#### common.HashMap
**Kind**: static class of <code>[common](#OG.common)</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.HashMap](#OG.common.HashMap)
    * [new OG.common.HashMap(jsonObject)](#new_OG.common.HashMap_new)
    * [.map](#OG.common.HashMap+map) : <code>Object</code>
    * [.put(key, value)](#OG.common.HashMap+put)
    * [.get(key)](#OG.common.HashMap+get) ⇒ <code>Object</code>
    * [.containsKey(key)](#OG.common.HashMap+containsKey) ⇒ <code>Boolean</code>
    * [.containsValue(value)](#OG.common.HashMap+containsValue) ⇒ <code>Boolean</code>
    * [.isEmpty()](#OG.common.HashMap+isEmpty) ⇒ <code>Boolean</code>
    * [.clear()](#OG.common.HashMap+clear)
    * [.remove(key)](#OG.common.HashMap+remove)
    * [.keys()](#OG.common.HashMap+keys) ⇒ <code>Array.&lt;String&gt;</code>
    * [.values()](#OG.common.HashMap+values) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.size()](#OG.common.HashMap+size) ⇒ <code>Number</code>
    * [.toString()](#OG.common.HashMap+toString) ⇒ <code>String</code>

<a name="new_OG.common.HashMap_new"></a>

##### new OG.common.HashMap(jsonObject)
HashMap 구현 Javascript 클래스


| Param | Type | Description |
| --- | --- | --- |
| jsonObject | <code>Object</code> | key:value 매핑 JSON 오브젝트 |

**Example**  
```js
var map1 = new OG.common.HashMap({
    'key1': 'value1',
    'key2': 'value2'
});

console.log(map1.get('key1'));

var map2 = new OG.common.HashMap();
map2.put('key1', 'value1');
map2.put('key2', 'value2');

console.log(map2.get('key1'));
```
<a name="OG.common.HashMap+map"></a>

##### hashMap.map : <code>Object</code>
key:value 매핑 JSON 오브젝트

**Kind**: instance property of <code>[HashMap](#OG.common.HashMap)</code>  
<a name="OG.common.HashMap+put"></a>

##### hashMap.put(key, value)
key : value 를 매핑한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | 키 |
| value | <code>Object</code> | 값 |

<a name="OG.common.HashMap+get"></a>

##### hashMap.get(key) ⇒ <code>Object</code>
key 에 대한 value 를 반환한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  
**Returns**: <code>Object</code> - 값  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | 키 |

<a name="OG.common.HashMap+containsKey"></a>

##### hashMap.containsKey(key) ⇒ <code>Boolean</code>
주어진 key 를 포함하는지 여부를 반환한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | 키 |

<a name="OG.common.HashMap+containsValue"></a>

##### hashMap.containsValue(value) ⇒ <code>Boolean</code>
주어진 value 를 포함하는지 여부를 반환한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | 값 |

<a name="OG.common.HashMap+isEmpty"></a>

##### hashMap.isEmpty() ⇒ <code>Boolean</code>
Empty 여부를 반환한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  
<a name="OG.common.HashMap+clear"></a>

##### hashMap.clear()
매핑정보를 클리어한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  
<a name="OG.common.HashMap+remove"></a>

##### hashMap.remove(key)
주어진 key 의 매핑정보를 삭제한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | 키 |

<a name="OG.common.HashMap+keys"></a>

##### hashMap.keys() ⇒ <code>Array.&lt;String&gt;</code>
key 목록을 반환한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  
**Returns**: <code>Array.&lt;String&gt;</code> - 키목록  
<a name="OG.common.HashMap+values"></a>

##### hashMap.values() ⇒ <code>Array.&lt;Object&gt;</code>
value 목록을 반환한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  
**Returns**: <code>Array.&lt;Object&gt;</code> - 값목록  
<a name="OG.common.HashMap+size"></a>

##### hashMap.size() ⇒ <code>Number</code>
매핑된 key:value 갯수를 반환한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  
<a name="OG.common.HashMap+toString"></a>

##### hashMap.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[HashMap](#OG.common.HashMap)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.common.JSON"></a>

#### common.JSON
**Kind**: static class of <code>[common](#OG.common)</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.JSON](#OG.common.JSON)
    * [new OG.common.JSON()](#new_OG.common.JSON_new)
    * [.encode](#OG.common.JSON+encode) ⇒ <code>String</code>
    * [.decode](#OG.common.JSON+decode) ⇒ <code>Object</code>
    * [.encodeDate(d)](#OG.common.JSON+encodeDate) ⇒ <code>String</code>

<a name="new_OG.common.JSON_new"></a>

##### new OG.common.JSON()
Modified version of Douglas Crockford"s json.js that doesn"t
mess with the Object prototype
http://www.json.org/js.html

<a name="OG.common.JSON+encode"></a>

##### jsoN.encode ⇒ <code>String</code>
Encodes an Object, Array or other value

**Kind**: instance property of <code>[JSON](#OG.common.JSON)</code>  
**Returns**: <code>String</code> - The JSON string  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Mixed</code> | The variable to encode |

<a name="OG.common.JSON+decode"></a>

##### jsoN.decode ⇒ <code>Object</code>
Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.

**Kind**: instance property of <code>[JSON](#OG.common.JSON)</code>  
**Returns**: <code>Object</code> - The resulting object  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>String</code> | The JSON string |

<a name="OG.common.JSON+encodeDate"></a>

##### jsoN.encodeDate(d) ⇒ <code>String</code>
<p>Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.
<b>The returned value includes enclosing double quotation marks.</b></p>
<p>The default return format is "yyyy-mm-ddThh:mm:ss".</p>
<p>To override this:</p><pre><code>
	 OG.common.JSON.encodeDate = function(d) {
	 return d.format('"Y-m-d"');
	 };
	 </code></pre>

**Kind**: instance method of <code>[JSON](#OG.common.JSON)</code>  
**Returns**: <code>String</code> - The string literal to use in a JSON string.  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>Date</code> | The Date to encode |

<a name="OG.common.Util"></a>

#### common.Util
**Kind**: static class of <code>[common](#OG.common)</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Util](#OG.common.Util)
    * [new OG.common.Util()](#new_OG.common.Util_new)
    * [.extend](#OG.common.Util.extend) ⇒ <code>function</code>
    * [.clone(obj)](#OG.common.Util.clone) ⇒ <code>Object</code>
    * [.round(val)](#OG.common.Util.round) ⇒ <code>Number</code>
    * [.roundPrecision(val, precision)](#OG.common.Util.roundPrecision) ⇒ <code>Number</code>
    * [.roundGrid(val, snapSize)](#OG.common.Util.roundGrid) ⇒ <code>Number</code>
    * [.apply(obj, config, defaults)](#OG.common.Util.apply) ⇒ <code>Object</code>

<a name="new_OG.common.Util_new"></a>

##### new OG.common.Util()
공통 유틸리티 Javascript 클래스

<a name="OG.common.Util.extend"></a>

##### Util.extend ⇒ <code>function</code>
<p>Extends one class to create a subclass and optionally overrides members with the passed literal. This method
also adds the function "override()" to the subclass that can be used to override members of the class.</p>
For example, to create a subclass of Ext GridPanel:
<pre><code>
     MyGridPanel = Ext.extend(Ext.grid.GridPanel, {
	 constructor: function(config) {

	 //      Create configuration for this Grid.
	 var store = new Ext.data.Store({...});
	 var colModel = new Ext.grid.ColumnModel({...});

	 //      Create a new config object containing our computed properties
	 //      *plus* whatever was in the config parameter.
	 config = Ext.apply({
	 store: store,
	 colModel: colModel
	 }, config);

	 MyGridPanel.superclass.constructor.call(this, config);

	 //      Your postprocessing here
	 },

	 yourMethod: function() {
	 // etc.
	 }
	 });
     </code></pre>

<p>This function also supports a 3-argument call in which the subclass's constructor is
passed as an argument. In this form, the parameters are as follows:</p>
<div class="mdetail-params"><ul>
<li><code>subclass</code> : Function <div class="sub-desc">The subclass constructor.</div></li>
<li><code>superclass</code> : Function <div class="sub-desc">The constructor of class being extended</div></li>
<li><code>overrides</code> : Object <div class="sub-desc">A literal with members which are copied into the subclass's
prototype, and are therefore shared among all instances of the new class.</div></li>
</ul></div>

**Kind**: static property of <code>[Util](#OG.common.Util)</code>  
**Returns**: <code>function</code> - The subclass constructor from the <code>overrides</code> parameter, or a generated one if not provided.  

| Param | Type | Description |
| --- | --- | --- |
| superclass | <code>function</code> | The constructor of class being extended. |
| overrides | <code>Object</code> | <p>A literal with members which are copied into the subclass's prototype, and are therefore shared between all instances of the new class.</p> <p>This may contain a special member named <tt><b>constructor</b></tt>. This is used to define the constructor of the new class, and is returned. If this property is <i>not</i> specified, a constructor is generated and returned which just calls the superclass's constructor passing on its parameters.</p> <p><b>It is essential that you call the superclass constructor in any provided constructor. See example code.</b></p> |

<a name="OG.common.Util.clone"></a>

##### Util.clone(obj) ⇒ <code>Object</code>
Object 를 복사한다.

**Kind**: static method of <code>[Util](#OG.common.Util)</code>  
**Returns**: <code>Object</code> - 복사된 Object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | 복사할 Object |

<a name="OG.common.Util.round"></a>

##### Util.round(val) ⇒ <code>Number</code>
디폴트로 지정된 소숫점 자리수로 Round 한 값을 반환한다.

**Kind**: static method of <code>[Util](#OG.common.Util)</code>  
**Returns**: <code>Number</code> - 지정한 소숫점 자리수에 따른 반올림 값  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Number</code> | 반올림할 값 |

<a name="OG.common.Util.roundPrecision"></a>

##### Util.roundPrecision(val, precision) ⇒ <code>Number</code>
입력된 숫자값을 지정된 소숫점 자릿수로 Round해서 값을 리턴한다.

**Kind**: static method of <code>[Util](#OG.common.Util)</code>  
**Returns**: <code>Number</code> - 지정한 소숫점 자리수에 따른 반올림 값  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Number</code> | 반올림할 값 |
| precision | <code>Number</code> | 소숫점 자리수 |

**Example**  
```js
OG.Util.roundPrecision(300.12345678, 3);
Result ) 300.123
```
<a name="OG.common.Util.roundGrid"></a>

##### Util.roundGrid(val, snapSize) ⇒ <code>Number</code>
Shape Move & Resize 이동 간격으로 Round 한 값을 반환한다.

**Kind**: static method of <code>[Util](#OG.common.Util)</code>  
**Returns**: <code>Number</code> - 지정한 간격으로 반올림 값  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Number</code> | 반올림할 값 |
| snapSize | <code>Number</code> | 이동간격 |

<a name="OG.common.Util.apply"></a>

##### Util.apply(obj, config, defaults) ⇒ <code>Object</code>
Copies all the properties of config to obj.

**Kind**: static method of <code>[Util](#OG.common.Util)</code>  
**Returns**: <code>Object</code> - returns obj  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The receiver of the properties |
| config | <code>Object</code> | The source of the properties |
| defaults | <code>Object</code> | A different object that will also be applied for default values |

<a name="OG.geometry"></a>

### OG.geometry : <code>object</code>
**Kind**: static namespace of <code>[OG](#OG)</code>  

* [.geometry](#OG.geometry) : <code>object</code>
    * [.BezierCurve](#OG.geometry.BezierCurve) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
        * [new OG.geometry.BezierCurve(controlPoints)](#new_OG.geometry.BezierCurve_new)
        * [.controlPoints](#OG.geometry.BezierCurve+controlPoints) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getControlPoints()](#OG.geometry.BezierCurve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
        * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
        * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
        * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.Circle](#OG.geometry.Circle) ⇐ <code>[Ellipse](#OG.geometry.Ellipse)</code>
        * [new OG.geometry.Circle(center, radius)](#new_OG.geometry.Circle_new)
        * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getControlPoints()](#OG.geometry.Curve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
        * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
        * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.Coordinate](#OG.geometry.Coordinate)
        * [new OG.geometry.Coordinate(x, y)](#new_OG.geometry.Coordinate_new)
        * [.x](#OG.geometry.Coordinate+x) : <code>Number</code>
        * [.y](#OG.geometry.Coordinate+y) : <code>Number</code>
        * [.distance(coordinate)](#OG.geometry.Coordinate+distance) ⇒ <code>Number</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Coordinate+move) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.rotate(angle, origin)](#OG.geometry.Coordinate+rotate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.isEquals(coordinate)](#OG.geometry.Coordinate+isEquals) ⇒ <code>Boolean</code>
        * [.toString()](#OG.geometry.Coordinate+toString) ⇒ <code>String</code>
    * [.Curve](#OG.geometry.Curve) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
        * [new OG.geometry.Curve(controlPoints)](#new_OG.geometry.Curve_new)
        * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getControlPoints()](#OG.geometry.Curve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
        * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
        * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
        * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.Ellipse](#OG.geometry.Ellipse) ⇐ <code>[Curve](#OG.geometry.Curve)</code>
        * [new OG.geometry.Ellipse(center, radiusX, radiusY, angle)](#new_OG.geometry.Ellipse_new)
        * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getControlPoints()](#OG.geometry.Curve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
        * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
        * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.Envelope](#OG.geometry.Envelope)
        * [new OG.geometry.Envelope(upperLeft, width, height)](#new_OG.geometry.Envelope_new)
        * [.getUpperLeft()](#OG.geometry.Envelope+getUpperLeft) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.setUpperLeft(upperLeft)](#OG.geometry.Envelope+setUpperLeft)
        * [.getUpperRight()](#OG.geometry.Envelope+getUpperRight) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getLowerRight()](#OG.geometry.Envelope+getLowerRight) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getLowerLeft()](#OG.geometry.Envelope+getLowerLeft) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getLeftCenter()](#OG.geometry.Envelope+getLeftCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getUpperCenter()](#OG.geometry.Envelope+getUpperCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getRightCenter()](#OG.geometry.Envelope+getRightCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getLowerCenter()](#OG.geometry.Envelope+getLowerCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getCentroid()](#OG.geometry.Envelope+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.setCentroid(centroid)](#OG.geometry.Envelope+setCentroid)
        * [.getWidth()](#OG.geometry.Envelope+getWidth) ⇒ <code>Number</code>
        * [.setWidth(width)](#OG.geometry.Envelope+setWidth)
        * [.getHeight()](#OG.geometry.Envelope+getHeight) ⇒ <code>Number</code>
        * [.setHeight(height)](#OG.geometry.Envelope+setHeight)
        * [.getVertices()](#OG.geometry.Envelope+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.isContains(coordinate)](#OG.geometry.Envelope+isContains) ⇒ <code>Boolean</code>
        * [.isContainsAll(coordinateArray)](#OG.geometry.Envelope+isContainsAll) ⇒ <code>Boolean</code>
        * [.getHowManyContains(coordinateArray)](#OG.geometry.Envelope+getHowManyContains) ⇒ <code>Boolean</code>
        * [.isContainsOnce(coordinateArray)](#OG.geometry.Envelope+isContainsOnce) ⇒ <code>Boolean</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Envelope+move) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.resize(upper, lower, left, right)](#OG.geometry.Envelope+resize) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.isEquals(Envelope)](#OG.geometry.Envelope+isEquals) ⇒ <code>Boolean</code>
        * [.toString()](#OG.geometry.Envelope+toString) ⇒ <code>String</code>
    * [.Geometry](#OG.geometry.Geometry)
        * [new OG.geometry.Geometry()](#new_OG.geometry.Geometry_new)
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * *[.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>*
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * *[.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * *[.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * *[.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.GeometryCollection](#OG.geometry.GeometryCollection) ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [new OG.geometry.GeometryCollection(geometries)](#new_OG.geometry.GeometryCollection_new)
        * [.geometries](#OG.geometry.GeometryCollection+geometries) : <code>[Array.&lt;Geometry&gt;](#OG.geometry.Geometry)</code>
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.toString()](#OG.geometry.GeometryCollection+toString) ⇒ <code>String</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.Line](#OG.geometry.Line) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
        * [new OG.geometry.Line(from, to)](#new_OG.geometry.Line_new)
        * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
        * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
        * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
        * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.Point](#OG.geometry.Point) ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [new OG.geometry.Point(coordinate)](#new_OG.geometry.Point_new)
        * [.coordinate](#OG.geometry.Point+coordinate) : <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.vertices](#OG.geometry.Point+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.toString()](#OG.geometry.Point+toString) ⇒ <code>String</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.PolyLine](#OG.geometry.PolyLine) ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [new OG.geometry.PolyLine(vertices)](#new_OG.geometry.PolyLine_new)
        * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
        * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
        * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
        * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.Polygon](#OG.geometry.Polygon) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
        * [new OG.geometry.Polygon(vertices)](#new_OG.geometry.Polygon_new)
        * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
        * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
        * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
        * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.Rectangle](#OG.geometry.Rectangle) ⇐ <code>[Polygon](#OG.geometry.Polygon)</code>
        * [new OG.geometry.Rectangle(upperLeft, width, height)](#new_OG.geometry.Rectangle_new)
        * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
        * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
        * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
        * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
        * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
        * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
        * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
        * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
        * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
        * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
        * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
        * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
        * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
        * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
        * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
        * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
        * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
        * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
        * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
        * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
        * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
        * [.reset()](#OG.geometry.Geometry+reset)
    * [.Style](#OG.geometry.Style) ⇐ <code>[HashMap](#OG.common.HashMap)</code>
        * [new OG.geometry.Style(style)](#new_OG.geometry.Style_new)
        * [.map](#OG.common.HashMap+map) : <code>Object</code>
        * [.put(key, value)](#OG.common.HashMap+put)
        * [.get(key)](#OG.common.HashMap+get) ⇒ <code>Object</code>
        * [.containsKey(key)](#OG.common.HashMap+containsKey) ⇒ <code>Boolean</code>
        * [.containsValue(value)](#OG.common.HashMap+containsValue) ⇒ <code>Boolean</code>
        * [.isEmpty()](#OG.common.HashMap+isEmpty) ⇒ <code>Boolean</code>
        * [.clear()](#OG.common.HashMap+clear)
        * [.remove(key)](#OG.common.HashMap+remove)
        * [.keys()](#OG.common.HashMap+keys) ⇒ <code>Array.&lt;String&gt;</code>
        * [.values()](#OG.common.HashMap+values) ⇒ <code>Array.&lt;Object&gt;</code>
        * [.size()](#OG.common.HashMap+size) ⇒ <code>Number</code>
        * [.toString()](#OG.common.HashMap+toString) ⇒ <code>String</code>

<a name="OG.geometry.BezierCurve"></a>

#### geometry.BezierCurve ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>, <code>module:OG.geometry.Geometry</code>, <code>module:OG.common.CurveUtil</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.BezierCurve](#OG.geometry.BezierCurve) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
    * [new OG.geometry.BezierCurve(controlPoints)](#new_OG.geometry.BezierCurve_new)
    * [.controlPoints](#OG.geometry.BezierCurve+controlPoints) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getControlPoints()](#OG.geometry.BezierCurve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
    * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
    * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
    * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.BezierCurve_new"></a>

##### new OG.geometry.BezierCurve(controlPoints)
Cubic Bezier Curve 공간 기하 객체(Spatial Geometry Object)
콘트롤포인트1, 콘트롤포인트2에 의해 시작좌표, 끝좌표를 지나는 곡선을 나타낸다.


| Param | Type | Description |
| --- | --- | --- |
| controlPoints | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | [from, control_point1, control_point2, to] |

**Example**  
```js
var geom = new OG.geometry.BezierCurve([[200, 100], [100, 300], [-100, -100], [-200, 100]]);
```
<a name="OG.geometry.BezierCurve+controlPoints"></a>

##### bezierCurve.controlPoints : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Bezier Curve 콘트롤 좌표 Array

**Kind**: instance property of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
<a name="OG.geometry.PolyLine+vertices"></a>

##### bezierCurve.vertices : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Line Vertex 좌표 Array

**Kind**: instance property of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Overrides:** <code>[vertices](#OG.geometry.PolyLine+vertices)</code>  
<a name="OG.geometry.Geometry+TYPE"></a>

##### bezierCurve.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Overrides:** <code>[TYPE](#OG.geometry.Geometry+TYPE)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### bezierCurve.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### bezierCurve.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Overrides:** <code>[style](#OG.geometry.Geometry+style)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### bezierCurve.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Overrides:** <code>[boundary](#OG.geometry.Geometry+boundary)</code>  
<a name="OG.geometry.BezierCurve+getControlPoints"></a>

##### bezierCurve.getControlPoints() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
콘트롤 포인트 목록을 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - controlPoints Array  
<a name="OG.geometry.Geometry+getVertices"></a>

##### bezierCurve.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Overrides:** <code>[getVertices](#OG.geometry.Geometry+getVertices)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.Geometry+move"></a>

##### bezierCurve.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Overrides:** <code>[move](#OG.geometry.Geometry+move)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+resize"></a>

##### bezierCurve.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Overrides:** <code>[resize](#OG.geometry.Geometry+resize)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+rotate"></a>

##### bezierCurve.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Overrides:** <code>[rotate](#OG.geometry.Geometry+rotate)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.PolyLine+toString"></a>

##### bezierCurve.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Overrides:** <code>[toString](#OG.geometry.PolyLine+toString)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.PolyLine+angleBetweenPoints"></a>

##### bezierCurve.angleBetweenPoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 두 꼭지점 사이에 가상의 선을 그렸을때, 그 기울기를 구한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+isRightAngleBetweenPoints"></a>

##### bezierCurve.isRightAngleBetweenPoints(prev, next) ⇒ <code>Object</code>
공간기하객체의 두 꼭지점 사이의 기울기가 수평또는 수직인지 판별한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Object</code> - {flag : true or false, type: horizontal or vertical or none}  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+angleBetweenThreePoints"></a>

##### bezierCurve.angleBetweenThreePoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 세 꼭지점 사이의 각도 중 작은 각도를 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.Geometry+isEquals"></a>

##### bezierCurve.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### bezierCurve.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### bezierCurve.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### bezierCurve.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### bezierCurve.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+minDistance"></a>

##### bezierCurve.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### bezierCurve.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+getLength"></a>

##### bezierCurve.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.Geometry+moveCentroid"></a>

##### bezierCurve.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### bezierCurve.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### bezierCurve.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### bezierCurve.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### bezierCurve.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### bezierCurve.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### bezierCurve.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### bezierCurve.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### bezierCurve.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### bezierCurve.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### bezierCurve.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### bezierCurve.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### bezierCurve.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### bezierCurve.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### bezierCurve.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### bezierCurve.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### bezierCurve.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[BezierCurve](#OG.geometry.BezierCurve)</code>  
**Overrides:** <code>[reset](#OG.geometry.Geometry+reset)</code>  
<a name="OG.geometry.Circle"></a>

#### geometry.Circle ⇐ <code>[Ellipse](#OG.geometry.Ellipse)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>, <code>module:OG.geometry.Geometry</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Circle](#OG.geometry.Circle) ⇐ <code>[Ellipse](#OG.geometry.Ellipse)</code>
    * [new OG.geometry.Circle(center, radius)](#new_OG.geometry.Circle_new)
    * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getControlPoints()](#OG.geometry.Curve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
    * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
    * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.Circle_new"></a>

##### new OG.geometry.Circle(center, radius)
Circle 공간 기하 객체(Spatial Geometry Object)


| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | Circle 중심 좌표 |
| radius | <code>Number</code> | radius 반경 |

**Example**  
```js
var geom = new OG.geometry.Circle([10, 10], 5);
```
<a name="OG.geometry.PolyLine+vertices"></a>

##### circle.vertices : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Line Vertex 좌표 Array

**Kind**: instance property of <code>[Circle](#OG.geometry.Circle)</code>  
<a name="OG.geometry.Geometry+TYPE"></a>

##### circle.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[Circle](#OG.geometry.Circle)</code>  
**Overrides:** <code>[TYPE](#OG.geometry.Geometry+TYPE)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### circle.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[Circle](#OG.geometry.Circle)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### circle.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[Circle](#OG.geometry.Circle)</code>  
**Overrides:** <code>[style](#OG.geometry.Geometry+style)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### circle.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[Circle](#OG.geometry.Circle)</code>  
<a name="OG.geometry.Geometry+getVertices"></a>

##### circle.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.Curve+getControlPoints"></a>

##### circle.getControlPoints() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
콘트롤 포인트 목록을 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - controlPoints Array  
<a name="OG.geometry.Geometry+getLength"></a>

##### circle.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Overrides:** <code>[getLength](#OG.geometry.Geometry+getLength)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.PolyLine+toString"></a>

##### circle.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Overrides:** <code>[toString](#OG.geometry.PolyLine+toString)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.Geometry+move"></a>

##### circle.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+resize"></a>

##### circle.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+rotate"></a>

##### circle.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.PolyLine+angleBetweenPoints"></a>

##### circle.angleBetweenPoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 두 꼭지점 사이에 가상의 선을 그렸을때, 그 기울기를 구한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+isRightAngleBetweenPoints"></a>

##### circle.isRightAngleBetweenPoints(prev, next) ⇒ <code>Object</code>
공간기하객체의 두 꼭지점 사이의 기울기가 수평또는 수직인지 판별한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Object</code> - {flag : true or false, type: horizontal or vertical or none}  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+angleBetweenThreePoints"></a>

##### circle.angleBetweenThreePoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 세 꼭지점 사이의 각도 중 작은 각도를 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.Geometry+isEquals"></a>

##### circle.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### circle.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### circle.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### circle.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### circle.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+minDistance"></a>

##### circle.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### circle.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+moveCentroid"></a>

##### circle.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### circle.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### circle.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### circle.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### circle.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### circle.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### circle.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### circle.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### circle.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### circle.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### circle.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### circle.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### circle.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### circle.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### circle.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### circle.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### circle.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[Circle](#OG.geometry.Circle)</code>  
<a name="OG.geometry.Coordinate"></a>

#### geometry.Coordinate
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Coordinate](#OG.geometry.Coordinate)
    * [new OG.geometry.Coordinate(x, y)](#new_OG.geometry.Coordinate_new)
    * [.x](#OG.geometry.Coordinate+x) : <code>Number</code>
    * [.y](#OG.geometry.Coordinate+y) : <code>Number</code>
    * [.distance(coordinate)](#OG.geometry.Coordinate+distance) ⇒ <code>Number</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Coordinate+move) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.rotate(angle, origin)](#OG.geometry.Coordinate+rotate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.isEquals(coordinate)](#OG.geometry.Coordinate+isEquals) ⇒ <code>Boolean</code>
    * [.toString()](#OG.geometry.Coordinate+toString) ⇒ <code>String</code>

<a name="new_OG.geometry.Coordinate_new"></a>

##### new OG.geometry.Coordinate(x, y)
2차원 좌표계에서의 좌표값


| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | x좌표 |
| y | <code>Number</code> | y좌표 |

**Example**  
```js
var coordinate1 = new OG.geometry.Coordinate(10, 10);
or
var coordinate2 = new OG.geometry.Coordinate([20, 20]);
```
<a name="OG.geometry.Coordinate+x"></a>

##### coordinate.x : <code>Number</code>
x좌표

**Kind**: instance property of <code>[Coordinate](#OG.geometry.Coordinate)</code>  
<a name="OG.geometry.Coordinate+y"></a>

##### coordinate.y : <code>Number</code>
y좌표

**Kind**: instance property of <code>[Coordinate](#OG.geometry.Coordinate)</code>  
<a name="OG.geometry.Coordinate+distance"></a>

##### coordinate.distance(coordinate) ⇒ <code>Number</code>
주어진 좌표와의 거리를 계산한다.

**Kind**: instance method of <code>[Coordinate](#OG.geometry.Coordinate)</code>  
**Returns**: <code>Number</code> - 좌표간의 거리값  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 좌표값 |

**Example**  
```js
coordinate.distance([10, 10]);
or
coordinate.distance(new OG.Coordinate(10, 10));
```
<a name="OG.geometry.Coordinate+move"></a>

##### coordinate.move(offsetX, offsetY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[Coordinate](#OG.geometry.Coordinate)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 이동된 좌표  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Coordinate+rotate"></a>

##### coordinate.rotate(angle, origin) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[Coordinate](#OG.geometry.Coordinate)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 회전된 좌표  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준 좌표 |

**Example**  
```js
coordinate.rotate(90, [10,10]);
or
coordinate.rotate(90, new OG.Coordinate(10, 10));
```
<a name="OG.geometry.Coordinate+isEquals"></a>

##### coordinate.isEquals(coordinate) ⇒ <code>Boolean</code>
주어진 좌표값과 같은지 비교한다.

**Kind**: instance method of <code>[Coordinate](#OG.geometry.Coordinate)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 좌표값 |

**Example**  
```js
coordinate.isEquals([10, 10]);
or
coordinate.isEquals(new OG.Coordinate(10, 10));
```
<a name="OG.geometry.Coordinate+toString"></a>

##### coordinate.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[Coordinate](#OG.geometry.Coordinate)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.Curve"></a>

#### geometry.Curve ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>, <code>module:OG.geometry.Geometry</code>, <code>module:OG.common.CurveUtil</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Curve](#OG.geometry.Curve) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
    * [new OG.geometry.Curve(controlPoints)](#new_OG.geometry.Curve_new)
    * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getControlPoints()](#OG.geometry.Curve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
    * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
    * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
    * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.Curve_new"></a>

##### new OG.geometry.Curve(controlPoints)
Catmull-Rom Spline Curve 공간 기하 객체(Spatial Geometry Object)
모든 콘트롤포인트를 지나는 곡선을 나타낸다.


| Param | Type | Description |
| --- | --- | --- |
| controlPoints | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | Curve Vertex 좌표 Array |

**Example**  
```js
var geom = new OG.geometry.Curve([[200, 100], [100, 300], [-100, -100], [-200, 100]]);
```
<a name="OG.geometry.PolyLine+vertices"></a>

##### curve.vertices : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Line Vertex 좌표 Array

**Kind**: instance property of <code>[Curve](#OG.geometry.Curve)</code>  
**Overrides:** <code>[vertices](#OG.geometry.PolyLine+vertices)</code>  
<a name="OG.geometry.Geometry+TYPE"></a>

##### curve.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[Curve](#OG.geometry.Curve)</code>  
**Overrides:** <code>[TYPE](#OG.geometry.Geometry+TYPE)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### curve.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[Curve](#OG.geometry.Curve)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### curve.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[Curve](#OG.geometry.Curve)</code>  
**Overrides:** <code>[style](#OG.geometry.Geometry+style)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### curve.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[Curve](#OG.geometry.Curve)</code>  
<a name="OG.geometry.Curve+getControlPoints"></a>

##### curve.getControlPoints() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
콘트롤 포인트 목록을 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - controlPoints Array  
<a name="OG.geometry.Geometry+getVertices"></a>

##### curve.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Overrides:** <code>[getVertices](#OG.geometry.Geometry+getVertices)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.Geometry+move"></a>

##### curve.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+resize"></a>

##### curve.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+rotate"></a>

##### curve.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.PolyLine+toString"></a>

##### curve.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Overrides:** <code>[toString](#OG.geometry.PolyLine+toString)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.PolyLine+angleBetweenPoints"></a>

##### curve.angleBetweenPoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 두 꼭지점 사이에 가상의 선을 그렸을때, 그 기울기를 구한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+isRightAngleBetweenPoints"></a>

##### curve.isRightAngleBetweenPoints(prev, next) ⇒ <code>Object</code>
공간기하객체의 두 꼭지점 사이의 기울기가 수평또는 수직인지 판별한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Object</code> - {flag : true or false, type: horizontal or vertical or none}  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+angleBetweenThreePoints"></a>

##### curve.angleBetweenThreePoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 세 꼭지점 사이의 각도 중 작은 각도를 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.Geometry+isEquals"></a>

##### curve.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### curve.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### curve.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### curve.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### curve.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+minDistance"></a>

##### curve.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### curve.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+getLength"></a>

##### curve.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.Geometry+moveCentroid"></a>

##### curve.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### curve.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### curve.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### curve.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### curve.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### curve.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### curve.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### curve.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### curve.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### curve.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### curve.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### curve.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### curve.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### curve.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### curve.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### curve.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### curve.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[Curve](#OG.geometry.Curve)</code>  
<a name="OG.geometry.Ellipse"></a>

#### geometry.Ellipse ⇐ <code>[Curve](#OG.geometry.Curve)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[Curve](#OG.geometry.Curve)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>, <code>module:OG.geometry.Geometry</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Ellipse](#OG.geometry.Ellipse) ⇐ <code>[Curve](#OG.geometry.Curve)</code>
    * [new OG.geometry.Ellipse(center, radiusX, radiusY, angle)](#new_OG.geometry.Ellipse_new)
    * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getControlPoints()](#OG.geometry.Curve+getControlPoints) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
    * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
    * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.Ellipse_new"></a>

##### new OG.geometry.Ellipse(center, radiusX, radiusY, angle)
Ellipse 공간 기하 객체(Spatial Geometry Object)


| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | Ellipse 중심 좌표 |
| radiusX | <code>Number</code> | X축 반경 |
| radiusY | <code>Number</code> | Y축 반경 |
| angle | <code>Number</code> | X축 기울기 |

**Example**  
```js
var geom = new OG.geometry.Ellipse([10, 10], 10, 5);
```
<a name="OG.geometry.PolyLine+vertices"></a>

##### ellipse.vertices : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Line Vertex 좌표 Array

**Kind**: instance property of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
<a name="OG.geometry.Geometry+TYPE"></a>

##### ellipse.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Overrides:** <code>[TYPE](#OG.geometry.Geometry+TYPE)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### ellipse.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Overrides:** <code>[IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### ellipse.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Overrides:** <code>[style](#OG.geometry.Geometry+style)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### ellipse.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
<a name="OG.geometry.Curve+getControlPoints"></a>

##### ellipse.getControlPoints() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
콘트롤 포인트 목록을 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Overrides:** <code>[getControlPoints](#OG.geometry.Curve+getControlPoints)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - controlPoints Array  
<a name="OG.geometry.Geometry+getVertices"></a>

##### ellipse.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Overrides:** <code>[getVertices](#OG.geometry.Geometry+getVertices)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.PolyLine+toString"></a>

##### ellipse.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Overrides:** <code>[toString](#OG.geometry.PolyLine+toString)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.Geometry+move"></a>

##### ellipse.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+resize"></a>

##### ellipse.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+rotate"></a>

##### ellipse.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.PolyLine+angleBetweenPoints"></a>

##### ellipse.angleBetweenPoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 두 꼭지점 사이에 가상의 선을 그렸을때, 그 기울기를 구한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+isRightAngleBetweenPoints"></a>

##### ellipse.isRightAngleBetweenPoints(prev, next) ⇒ <code>Object</code>
공간기하객체의 두 꼭지점 사이의 기울기가 수평또는 수직인지 판별한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Object</code> - {flag : true or false, type: horizontal or vertical or none}  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+angleBetweenThreePoints"></a>

##### ellipse.angleBetweenThreePoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 세 꼭지점 사이의 각도 중 작은 각도를 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.Geometry+isEquals"></a>

##### ellipse.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### ellipse.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### ellipse.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### ellipse.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### ellipse.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+minDistance"></a>

##### ellipse.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### ellipse.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+getLength"></a>

##### ellipse.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Overrides:** <code>[getLength](#OG.geometry.Geometry+getLength)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.Geometry+moveCentroid"></a>

##### ellipse.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### ellipse.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### ellipse.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### ellipse.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### ellipse.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### ellipse.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### ellipse.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### ellipse.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### ellipse.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### ellipse.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### ellipse.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### ellipse.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### ellipse.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### ellipse.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### ellipse.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### ellipse.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### ellipse.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[Ellipse](#OG.geometry.Ellipse)</code>  
<a name="OG.geometry.Envelope"></a>

#### geometry.Envelope
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Envelope](#OG.geometry.Envelope)
    * [new OG.geometry.Envelope(upperLeft, width, height)](#new_OG.geometry.Envelope_new)
    * [.getUpperLeft()](#OG.geometry.Envelope+getUpperLeft) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.setUpperLeft(upperLeft)](#OG.geometry.Envelope+setUpperLeft)
    * [.getUpperRight()](#OG.geometry.Envelope+getUpperRight) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getLowerRight()](#OG.geometry.Envelope+getLowerRight) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getLowerLeft()](#OG.geometry.Envelope+getLowerLeft) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getLeftCenter()](#OG.geometry.Envelope+getLeftCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getUpperCenter()](#OG.geometry.Envelope+getUpperCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getRightCenter()](#OG.geometry.Envelope+getRightCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getLowerCenter()](#OG.geometry.Envelope+getLowerCenter) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getCentroid()](#OG.geometry.Envelope+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.setCentroid(centroid)](#OG.geometry.Envelope+setCentroid)
    * [.getWidth()](#OG.geometry.Envelope+getWidth) ⇒ <code>Number</code>
    * [.setWidth(width)](#OG.geometry.Envelope+setWidth)
    * [.getHeight()](#OG.geometry.Envelope+getHeight) ⇒ <code>Number</code>
    * [.setHeight(height)](#OG.geometry.Envelope+setHeight)
    * [.getVertices()](#OG.geometry.Envelope+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.isContains(coordinate)](#OG.geometry.Envelope+isContains) ⇒ <code>Boolean</code>
    * [.isContainsAll(coordinateArray)](#OG.geometry.Envelope+isContainsAll) ⇒ <code>Boolean</code>
    * [.getHowManyContains(coordinateArray)](#OG.geometry.Envelope+getHowManyContains) ⇒ <code>Boolean</code>
    * [.isContainsOnce(coordinateArray)](#OG.geometry.Envelope+isContainsOnce) ⇒ <code>Boolean</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Envelope+move) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.resize(upper, lower, left, right)](#OG.geometry.Envelope+resize) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.isEquals(Envelope)](#OG.geometry.Envelope+isEquals) ⇒ <code>Boolean</code>
    * [.toString()](#OG.geometry.Envelope+toString) ⇒ <code>String</code>

<a name="new_OG.geometry.Envelope_new"></a>

##### new OG.geometry.Envelope(upperLeft, width, height)
2차원 좌표계에서 Envelope 영역을 정의


| Param | Type | Description |
| --- | --- | --- |
| upperLeft | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준 좌상단 좌표 |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

**Example**  
```js
var boundingBox = new OG.geometry.Envelope([50, 50], 200, 100);
```
<a name="OG.geometry.Envelope+getUpperLeft"></a>

##### envelope.getUpperLeft() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
기준 좌상단 좌표를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 좌상단 좌표  
<a name="OG.geometry.Envelope+setUpperLeft"></a>

##### envelope.setUpperLeft(upperLeft)
주어진 좌표로 기준 좌상단 좌표를 설정한다. 새로 설정된 값으로 이동된다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  

| Param | Type | Description |
| --- | --- | --- |
| upperLeft | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 좌상단 좌표 |

<a name="OG.geometry.Envelope+getUpperRight"></a>

##### envelope.getUpperRight() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
우상단 좌표를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 우상단 좌표  
<a name="OG.geometry.Envelope+getLowerRight"></a>

##### envelope.getLowerRight() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
우하단 좌표를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 우하단 좌표  
<a name="OG.geometry.Envelope+getLowerLeft"></a>

##### envelope.getLowerLeft() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
좌하단 좌표를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 좌하단 좌표  
<a name="OG.geometry.Envelope+getLeftCenter"></a>

##### envelope.getLeftCenter() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
좌중간 좌표를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 좌중간 좌표  
<a name="OG.geometry.Envelope+getUpperCenter"></a>

##### envelope.getUpperCenter() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
상단중간 좌표를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 상단중간 좌표  
<a name="OG.geometry.Envelope+getRightCenter"></a>

##### envelope.getRightCenter() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
우중간 좌표를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 우중간 좌표  
<a name="OG.geometry.Envelope+getLowerCenter"></a>

##### envelope.getLowerCenter() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
하단중간 좌표를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 하단중간 좌표  
<a name="OG.geometry.Envelope+getCentroid"></a>

##### envelope.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
Envelope 의 중심좌표를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Envelope+setCentroid"></a>

##### envelope.setCentroid(centroid)
주어진 좌표로 중심 좌표를 설정한다. 새로 설정된 값으로 이동된다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  

| Param | Type | Description |
| --- | --- | --- |
| centroid | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 중심좌표 |

<a name="OG.geometry.Envelope+getWidth"></a>

##### envelope.getWidth() ⇒ <code>Number</code>
Envelope 의 가로 사이즈를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>Number</code> - 너비  
<a name="OG.geometry.Envelope+setWidth"></a>

##### envelope.setWidth(width)
주어진 값으로 Envelope 의 가로 사이즈를 설정한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |

<a name="OG.geometry.Envelope+getHeight"></a>

##### envelope.getHeight() ⇒ <code>Number</code>
Envelope 의 세로 사이즈를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>Number</code> - 높이  
<a name="OG.geometry.Envelope+setHeight"></a>

##### envelope.setHeight(height)
주어진 값으로 Envelope 의 세로 사이즈를 설정한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Envelope+getVertices"></a>

##### envelope.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Envelope 모든 꼭지점을 반환한다.
좌상단좌표부터 시계방향으로 꼭지점 Array 를 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array : [좌상단, 상단중간, 우상단, 우중간, 우하단, 하단중간, 좌하단, 좌중간, 좌상단]  
<a name="OG.geometry.Envelope+isContains"></a>

##### envelope.isContains(coordinate) ⇒ <code>Boolean</code>
주어진 좌표값이 Envelope 영역에 포함되는지 비교한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>Boolean</code> - true:포함, false:비포함  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 좌표값 |

<a name="OG.geometry.Envelope+isContainsAll"></a>

##### envelope.isContainsAll(coordinateArray) ⇒ <code>Boolean</code>
주어진 모든 좌표값이 Envelope 영역에 포함되는지 비교한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>Boolean</code> - true:포함, false:비포함  

| Param | Type | Description |
| --- | --- | --- |
| coordinateArray | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 좌표값 Array |

<a name="OG.geometry.Envelope+getHowManyContains"></a>

##### envelope.getHowManyContains(coordinateArray) ⇒ <code>Boolean</code>
주어진 모든 좌표값이 Envelope 영역에 포함되는지 비교한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>Boolean</code> - true:포함, false:비포함  

| Param | Type | Description |
| --- | --- | --- |
| coordinateArray | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 좌표값 Array |

<a name="OG.geometry.Envelope+isContainsOnce"></a>

##### envelope.isContainsOnce(coordinateArray) ⇒ <code>Boolean</code>
주어진 모든 좌표값이 Envelope 영역에 포함되는지 비교한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>Boolean</code> - true:포함, false:비포함  

| Param | Type | Description |
| --- | --- | --- |
| coordinateArray | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 좌표값 Array |

<a name="OG.geometry.Envelope+move"></a>

##### envelope.move(offsetX, offsetY) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
크기는 고정한 채 가로, 세로 Offset 만큼 Envelope 을 이동한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - 이동된 Envelope  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Envelope+resize"></a>

##### envelope.resize(upper, lower, left, right) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - 리사이즈된 Envelope  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Envelope+isEquals"></a>

##### envelope.isEquals(Envelope) ⇒ <code>Boolean</code>
주어진 Envelope 영역과 같은지 비교한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| Envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | 영역 |

<a name="OG.geometry.Envelope+toString"></a>

##### envelope.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[Envelope](#OG.geometry.Envelope)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.Geometry"></a>

#### geometry.Geometry
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Geometry](#OG.geometry.Geometry)
    * [new OG.geometry.Geometry()](#new_OG.geometry.Geometry_new)
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * *[.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>*
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * *[.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * *[.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * *[.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.Geometry_new"></a>

##### new OG.geometry.Geometry()
공간 기하 객체(Spatial Geometry Object)의 최상위 추상 클래스

<a name="OG.geometry.Geometry+TYPE"></a>

##### geometry.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[Geometry](#OG.geometry.Geometry)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### geometry.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[Geometry](#OG.geometry.Geometry)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### geometry.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[Geometry](#OG.geometry.Geometry)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### geometry.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[Geometry](#OG.geometry.Geometry)</code>  
<a name="OG.geometry.Geometry+isEquals"></a>

##### geometry.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### geometry.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### geometry.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### geometry.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### geometry.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+getVertices"></a>

##### *geometry.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>*
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance abstract method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.Geometry+minDistance"></a>

##### geometry.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### geometry.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+getLength"></a>

##### geometry.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.Geometry+move"></a>

##### *geometry.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance abstract method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+moveCentroid"></a>

##### geometry.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resize"></a>

##### *geometry.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance abstract method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### geometry.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+rotate"></a>

##### *geometry.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>*
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance abstract method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### geometry.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### geometry.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### geometry.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### geometry.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### geometry.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### geometry.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### geometry.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### geometry.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### geometry.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### geometry.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### geometry.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### geometry.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### geometry.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### geometry.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### geometry.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[Geometry](#OG.geometry.Geometry)</code>  
<a name="OG.geometry.GeometryCollection"></a>

#### geometry.GeometryCollection ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[Geometry](#OG.geometry.Geometry)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>, <code>module:OG.geometry.Geometry</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.GeometryCollection](#OG.geometry.GeometryCollection) ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [new OG.geometry.GeometryCollection(geometries)](#new_OG.geometry.GeometryCollection_new)
    * [.geometries](#OG.geometry.GeometryCollection+geometries) : <code>[Array.&lt;Geometry&gt;](#OG.geometry.Geometry)</code>
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.toString()](#OG.geometry.GeometryCollection+toString) ⇒ <code>String</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.GeometryCollection_new"></a>

##### new OG.geometry.GeometryCollection(geometries)
공간 기하 객체(Spatial Geometry Object) Collection


| Param | Type | Description |
| --- | --- | --- |
| geometries | <code>[Array.&lt;Geometry&gt;](#OG.geometry.Geometry)</code> | 공간 기하 객체 Array |

**Example**  
```js
var geom1 = new OG.geometry.Point([20, 5]),
    geom2 = new OG.geometry.Line([20, 5], [30, 15]),
    geom3 = new OG.geometry.PolyLine([[20, 5], [30, 15], [40, 25], [50, 15]]);

var collection = new OG.geometry.GeometryCollection([geom1, geom2, geom3]);
```
<a name="OG.geometry.GeometryCollection+geometries"></a>

##### geometryCollection.geometries : <code>[Array.&lt;Geometry&gt;](#OG.geometry.Geometry)</code>
공간 기하 객체 Array

**Kind**: instance property of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
<a name="OG.geometry.Geometry+TYPE"></a>

##### geometryCollection.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Overrides:** <code>[TYPE](#OG.geometry.Geometry+TYPE)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### geometryCollection.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### geometryCollection.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Overrides:** <code>[style](#OG.geometry.Geometry+style)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### geometryCollection.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
<a name="OG.geometry.GeometryCollection+toString"></a>

##### geometryCollection.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.Geometry+isEquals"></a>

##### geometryCollection.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### geometryCollection.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### geometryCollection.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### geometryCollection.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### geometryCollection.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+getVertices"></a>

##### geometryCollection.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Overrides:** <code>[getVertices](#OG.geometry.Geometry+getVertices)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.Geometry+minDistance"></a>

##### geometryCollection.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### geometryCollection.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+getLength"></a>

##### geometryCollection.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.Geometry+move"></a>

##### geometryCollection.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Overrides:** <code>[move](#OG.geometry.Geometry+move)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+moveCentroid"></a>

##### geometryCollection.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resize"></a>

##### geometryCollection.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Overrides:** <code>[resize](#OG.geometry.Geometry+resize)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### geometryCollection.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Overrides:** <code>[resizeBox](#OG.geometry.Geometry+resizeBox)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+rotate"></a>

##### geometryCollection.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Overrides:** <code>[rotate](#OG.geometry.Geometry+rotate)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### geometryCollection.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Overrides:** <code>[fitToBoundary](#OG.geometry.Geometry+fitToBoundary)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### geometryCollection.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### geometryCollection.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### geometryCollection.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### geometryCollection.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### geometryCollection.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### geometryCollection.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### geometryCollection.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### geometryCollection.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### geometryCollection.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### geometryCollection.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### geometryCollection.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### geometryCollection.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### geometryCollection.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### geometryCollection.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[GeometryCollection](#OG.geometry.GeometryCollection)</code>  
<a name="OG.geometry.Line"></a>

#### geometry.Line ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>, <code>module:OG.geometry.Geometry</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Line](#OG.geometry.Line) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
    * [new OG.geometry.Line(from, to)](#new_OG.geometry.Line_new)
    * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
    * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
    * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
    * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.Line_new"></a>

##### new OG.geometry.Line(from, to)
Line 공간 기하 객체(Spatial Geometry Object)


| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작 좌표값 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝 좌표값 |

**Example**  
```js
var geom = new OG.geometry.Line([20, 5], [30, 15]);
```
<a name="OG.geometry.PolyLine+vertices"></a>

##### line.vertices : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Line Vertex 좌표 Array

**Kind**: instance property of <code>[Line](#OG.geometry.Line)</code>  
<a name="OG.geometry.Geometry+TYPE"></a>

##### line.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[Line](#OG.geometry.Line)</code>  
**Overrides:** <code>[TYPE](#OG.geometry.Geometry+TYPE)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### line.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[Line](#OG.geometry.Line)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### line.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[Line](#OG.geometry.Line)</code>  
**Overrides:** <code>[style](#OG.geometry.Geometry+style)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### line.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[Line](#OG.geometry.Line)</code>  
<a name="OG.geometry.Geometry+getVertices"></a>

##### line.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.Geometry+move"></a>

##### line.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+resize"></a>

##### line.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+rotate"></a>

##### line.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.PolyLine+toString"></a>

##### line.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Overrides:** <code>[toString](#OG.geometry.PolyLine+toString)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.PolyLine+angleBetweenPoints"></a>

##### line.angleBetweenPoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 두 꼭지점 사이에 가상의 선을 그렸을때, 그 기울기를 구한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+isRightAngleBetweenPoints"></a>

##### line.isRightAngleBetweenPoints(prev, next) ⇒ <code>Object</code>
공간기하객체의 두 꼭지점 사이의 기울기가 수평또는 수직인지 판별한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Object</code> - {flag : true or false, type: horizontal or vertical or none}  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+angleBetweenThreePoints"></a>

##### line.angleBetweenThreePoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 세 꼭지점 사이의 각도 중 작은 각도를 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.Geometry+isEquals"></a>

##### line.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### line.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### line.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### line.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### line.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+minDistance"></a>

##### line.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### line.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+getLength"></a>

##### line.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.Geometry+moveCentroid"></a>

##### line.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### line.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### line.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### line.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### line.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### line.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### line.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### line.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### line.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### line.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### line.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### line.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### line.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### line.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### line.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### line.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### line.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[Line](#OG.geometry.Line)</code>  
<a name="OG.geometry.Point"></a>

#### geometry.Point ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[Geometry](#OG.geometry.Geometry)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>, <code>module:OG.geometry.Geometry</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Point](#OG.geometry.Point) ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [new OG.geometry.Point(coordinate)](#new_OG.geometry.Point_new)
    * [.coordinate](#OG.geometry.Point+coordinate) : <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.vertices](#OG.geometry.Point+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.toString()](#OG.geometry.Point+toString) ⇒ <code>String</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.Point_new"></a>

##### new OG.geometry.Point(coordinate)
Point 공간 기하 객체(Spatial Geometry Object)


| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표값 |

**Example**  
```js
var geom = new OG.geometry.Point([20, 5]);
```
<a name="OG.geometry.Point+coordinate"></a>

##### point.coordinate : <code>[Coordinate](#OG.geometry.Coordinate)</code>
좌표값

**Kind**: instance property of <code>[Point](#OG.geometry.Point)</code>  
<a name="OG.geometry.Point+vertices"></a>

##### point.vertices : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Line Vertex 좌표 Array

**Kind**: instance property of <code>[Point](#OG.geometry.Point)</code>  
<a name="OG.geometry.Geometry+TYPE"></a>

##### point.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[Point](#OG.geometry.Point)</code>  
**Overrides:** <code>[TYPE](#OG.geometry.Geometry+TYPE)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### point.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[Point](#OG.geometry.Point)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### point.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[Point](#OG.geometry.Point)</code>  
**Overrides:** <code>[style](#OG.geometry.Geometry+style)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### point.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[Point](#OG.geometry.Point)</code>  
**Overrides:** <code>[boundary](#OG.geometry.Geometry+boundary)</code>  
<a name="OG.geometry.Point+toString"></a>

##### point.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.Geometry+isEquals"></a>

##### point.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### point.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### point.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### point.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### point.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+getVertices"></a>

##### point.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Overrides:** <code>[getVertices](#OG.geometry.Geometry+getVertices)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.Geometry+minDistance"></a>

##### point.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### point.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+getLength"></a>

##### point.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.Geometry+move"></a>

##### point.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Overrides:** <code>[move](#OG.geometry.Geometry+move)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+moveCentroid"></a>

##### point.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Overrides:** <code>[moveCentroid](#OG.geometry.Geometry+moveCentroid)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resize"></a>

##### point.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Overrides:** <code>[resize](#OG.geometry.Geometry+resize)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### point.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Overrides:** <code>[resizeBox](#OG.geometry.Geometry+resizeBox)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+rotate"></a>

##### point.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Overrides:** <code>[rotate](#OG.geometry.Geometry+rotate)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### point.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Overrides:** <code>[fitToBoundary](#OG.geometry.Geometry+fitToBoundary)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### point.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### point.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### point.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### point.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### point.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### point.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### point.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### point.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### point.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### point.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### point.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### point.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### point.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### point.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[Point](#OG.geometry.Point)</code>  
<a name="OG.geometry.PolyLine"></a>

#### geometry.PolyLine ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[Geometry](#OG.geometry.Geometry)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>, <code>module:OG.geometry.Geometry</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.PolyLine](#OG.geometry.PolyLine) ⇐ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [new OG.geometry.PolyLine(vertices)](#new_OG.geometry.PolyLine_new)
    * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
    * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
    * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
    * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.PolyLine_new"></a>

##### new OG.geometry.PolyLine(vertices)
PolyLine 공간 기하 객체(Spatial Geometry Object)


| Param | Type | Description |
| --- | --- | --- |
| vertices | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | Line Vertex 좌표 Array |

**Example**  
```js
var geom = new OG.geometry.PolyLine([[20, 5], [30, 15], [40, 25], [50, 15]]);
```
<a name="OG.geometry.PolyLine+vertices"></a>

##### polyLine.vertices : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Line Vertex 좌표 Array

**Kind**: instance property of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
<a name="OG.geometry.Geometry+TYPE"></a>

##### polyLine.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Overrides:** <code>[TYPE](#OG.geometry.Geometry+TYPE)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### polyLine.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### polyLine.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Overrides:** <code>[style](#OG.geometry.Geometry+style)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### polyLine.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
<a name="OG.geometry.PolyLine+toString"></a>

##### polyLine.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.PolyLine+angleBetweenPoints"></a>

##### polyLine.angleBetweenPoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 두 꼭지점 사이에 가상의 선을 그렸을때, 그 기울기를 구한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+isRightAngleBetweenPoints"></a>

##### polyLine.isRightAngleBetweenPoints(prev, next) ⇒ <code>Object</code>
공간기하객체의 두 꼭지점 사이의 기울기가 수평또는 수직인지 판별한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Object</code> - {flag : true or false, type: horizontal or vertical or none}  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+angleBetweenThreePoints"></a>

##### polyLine.angleBetweenThreePoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 세 꼭지점 사이의 각도 중 작은 각도를 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.Geometry+isEquals"></a>

##### polyLine.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### polyLine.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### polyLine.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### polyLine.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### polyLine.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+getVertices"></a>

##### polyLine.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Overrides:** <code>[getVertices](#OG.geometry.Geometry+getVertices)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.Geometry+minDistance"></a>

##### polyLine.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### polyLine.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+getLength"></a>

##### polyLine.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.Geometry+move"></a>

##### polyLine.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Overrides:** <code>[move](#OG.geometry.Geometry+move)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+moveCentroid"></a>

##### polyLine.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resize"></a>

##### polyLine.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Overrides:** <code>[resize](#OG.geometry.Geometry+resize)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### polyLine.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+rotate"></a>

##### polyLine.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Overrides:** <code>[rotate](#OG.geometry.Geometry+rotate)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### polyLine.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### polyLine.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### polyLine.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### polyLine.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### polyLine.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### polyLine.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### polyLine.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### polyLine.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### polyLine.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### polyLine.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### polyLine.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### polyLine.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### polyLine.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### polyLine.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### polyLine.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[PolyLine](#OG.geometry.PolyLine)</code>  
<a name="OG.geometry.Polygon"></a>

#### geometry.Polygon ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[PolyLine](#OG.geometry.PolyLine)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>, <code>module:OG.geometry.Geometry</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Polygon](#OG.geometry.Polygon) ⇐ <code>[PolyLine](#OG.geometry.PolyLine)</code>
    * [new OG.geometry.Polygon(vertices)](#new_OG.geometry.Polygon_new)
    * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
    * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
    * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
    * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.Polygon_new"></a>

##### new OG.geometry.Polygon(vertices)
Polygon 공간 기하 객체(Spatial Geometry Object)


| Param | Type | Description |
| --- | --- | --- |
| vertices | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | Line Vertex 좌표 Array |

**Example**  
```js
var geom = new OG.geometry.Polygon([[20, 5], [30, 15], [40, 25], [50, 15], [60, 5], [20, 5]]);
```
<a name="OG.geometry.PolyLine+vertices"></a>

##### polygon.vertices : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Line Vertex 좌표 Array

**Kind**: instance property of <code>[Polygon](#OG.geometry.Polygon)</code>  
<a name="OG.geometry.Geometry+TYPE"></a>

##### polygon.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Overrides:** <code>[TYPE](#OG.geometry.Geometry+TYPE)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### polygon.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Overrides:** <code>[IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### polygon.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Overrides:** <code>[style](#OG.geometry.Geometry+style)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### polygon.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[Polygon](#OG.geometry.Polygon)</code>  
<a name="OG.geometry.Geometry+getVertices"></a>

##### polygon.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.Geometry+move"></a>

##### polygon.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+resize"></a>

##### polygon.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+rotate"></a>

##### polygon.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.PolyLine+toString"></a>

##### polygon.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.PolyLine+angleBetweenPoints"></a>

##### polygon.angleBetweenPoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 두 꼭지점 사이에 가상의 선을 그렸을때, 그 기울기를 구한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+isRightAngleBetweenPoints"></a>

##### polygon.isRightAngleBetweenPoints(prev, next) ⇒ <code>Object</code>
공간기하객체의 두 꼭지점 사이의 기울기가 수평또는 수직인지 판별한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Object</code> - {flag : true or false, type: horizontal or vertical or none}  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+angleBetweenThreePoints"></a>

##### polygon.angleBetweenThreePoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 세 꼭지점 사이의 각도 중 작은 각도를 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.Geometry+isEquals"></a>

##### polygon.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### polygon.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### polygon.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### polygon.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### polygon.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+minDistance"></a>

##### polygon.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### polygon.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+getLength"></a>

##### polygon.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.Geometry+moveCentroid"></a>

##### polygon.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### polygon.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### polygon.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### polygon.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### polygon.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### polygon.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### polygon.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### polygon.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### polygon.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### polygon.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### polygon.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### polygon.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### polygon.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### polygon.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### polygon.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### polygon.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### polygon.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[Polygon](#OG.geometry.Polygon)</code>  
<a name="OG.geometry.Rectangle"></a>

#### geometry.Rectangle ⇐ <code>[Polygon](#OG.geometry.Polygon)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[Polygon](#OG.geometry.Polygon)</code>  
**Requires**: <code>module:OG.geometry.Coordinate</code>, <code>module:OG.geometry.Envelope</code>, <code>module:OG.geometry.Geometry</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Rectangle](#OG.geometry.Rectangle) ⇐ <code>[Polygon](#OG.geometry.Polygon)</code>
    * [new OG.geometry.Rectangle(upperLeft, width, height)](#new_OG.geometry.Rectangle_new)
    * [.vertices](#OG.geometry.PolyLine+vertices) : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.TYPE](#OG.geometry.Geometry+TYPE) : <code>Number</code>
    * [.IS_CLOSED](#OG.geometry.Geometry+IS_CLOSED) : <code>Boolean</code>
    * [.style](#OG.geometry.Geometry+style) : <code>[Style](#OG.geometry.Style)</code>
    * [.boundary](#OG.geometry.Geometry+boundary) : <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getVertices()](#OG.geometry.Geometry+getVertices) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.move(offsetX, offsetY)](#OG.geometry.Geometry+move) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.resize(upper, lower, left, right)](#OG.geometry.Geometry+resize) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.rotate(angle, origin)](#OG.geometry.Geometry+rotate) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.toString()](#OG.geometry.PolyLine+toString) ⇒ <code>String</code>
    * [.angleBetweenPoints(prev, next)](#OG.geometry.PolyLine+angleBetweenPoints) ⇒ <code>Number</code>
    * [.isRightAngleBetweenPoints(prev, next)](#OG.geometry.PolyLine+isRightAngleBetweenPoints) ⇒ <code>Object</code>
    * [.angleBetweenThreePoints(prev, next)](#OG.geometry.PolyLine+angleBetweenThreePoints) ⇒ <code>Number</code>
    * [.isEquals(_geometry)](#OG.geometry.Geometry+isEquals) ⇒ <code>Boolean</code>
    * [.isContains(_geometry)](#OG.geometry.Geometry+isContains) ⇒ <code>Boolean</code>
    * [.isWithin(_geometry)](#OG.geometry.Geometry+isWithin) ⇒ <code>Boolean</code>
    * [.getBoundary()](#OG.geometry.Geometry+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getCentroid()](#OG.geometry.Geometry+getCentroid) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.minDistance(_coordinate)](#OG.geometry.Geometry+minDistance) ⇒ <code>Number</code>
    * [.distance(_geometry)](#OG.geometry.Geometry+distance) ⇒ <code>Number</code>
    * [.getLength()](#OG.geometry.Geometry+getLength) ⇒ <code>Number</code>
    * [.moveCentroid(중심)](#OG.geometry.Geometry+moveCentroid)
    * [.resizeBox(width, height)](#OG.geometry.Geometry+resizeBox) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.fitToBoundary(envelope)](#OG.geometry.Geometry+fitToBoundary) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.convertCoordinate(coordinate)](#OG.geometry.Geometry+convertCoordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.distanceToLine(p, line)](#OG.geometry.Geometry+distanceToLine) ⇒ <code>Number</code>
    * [.distanceLineToLine(line1, line2)](#OG.geometry.Geometry+distanceLineToLine) ⇒ <code>Number</code>
    * [.intersectToLine(line)](#OG.geometry.Geometry+intersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.shortestIntersectToLine(line)](#OG.geometry.Geometry+shortestIntersectToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectLineToLine(line1, line2, extension)](#OG.geometry.Geometry+intersectLineToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.intersectCircleToLine(center, radius, from, to)](#OG.geometry.Geometry+intersectCircleToLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.intersectPointToLine(p, line)](#OG.geometry.Geometry+intersectPointToLine) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getPercentageDistanceFromPoint(_coordinate)](#OG.geometry.Geometry+getPercentageDistanceFromPoint) ⇒ <code>Object</code>
    * [.isContainsPoint(_coordinate)](#OG.geometry.Geometry+isContainsPoint) ⇒ <code>boolean</code>
    * [.getPointFromPercentageDistance(pXpY)](#OG.geometry.Geometry+getPointFromPercentageDistance) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
    * [.getParallelLine(from, to, distance)](#OG.geometry.Geometry+getParallelLine) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
    * [.getParallelPath(line, distance)](#OG.geometry.Geometry+getParallelPath)
    * [.reset()](#OG.geometry.Geometry+reset)

<a name="new_OG.geometry.Rectangle_new"></a>

##### new OG.geometry.Rectangle(upperLeft, width, height)
Rectangle 공간 기하 객체(Spatial Geometry Object)


| Param | Type | Description |
| --- | --- | --- |
| upperLeft | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌상단좌표 |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

**Example**  
```js
var geom = new OG.geometry.Rectangle([20, 5], 10, 10);
```
<a name="OG.geometry.PolyLine+vertices"></a>

##### rectangle.vertices : <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
Line Vertex 좌표 Array

**Kind**: instance property of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
<a name="OG.geometry.Geometry+TYPE"></a>

##### rectangle.TYPE : <code>Number</code>
공간 기하 객체 타입

**Kind**: instance property of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Overrides:** <code>[TYPE](#OG.geometry.Geometry+TYPE)</code>  
<a name="OG.geometry.Geometry+IS_CLOSED"></a>

##### rectangle.IS_CLOSED : <code>Boolean</code>
닫힌 기하 객체 인지 여부

**Kind**: instance property of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
<a name="OG.geometry.Geometry+style"></a>

##### rectangle.style : <code>[Style](#OG.geometry.Style)</code>
스타일 속성

**Kind**: instance property of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Overrides:** <code>[style](#OG.geometry.Geometry+style)</code>  
<a name="OG.geometry.Geometry+boundary"></a>

##### rectangle.boundary : <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역

**Kind**: instance property of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
<a name="OG.geometry.Geometry+getVertices"></a>

##### rectangle.getVertices() ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
공간기하객체의 모든 꼭지점을 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 꼭지점 좌표 Array  
<a name="OG.geometry.Geometry+move"></a>

##### rectangle.move(offsetX, offsetY) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
가로, 세로 Offset 만큼 좌표를 이동한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 이동된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| offsetX | <code>Number</code> | 가로 Offset |
| offsetY | <code>Number</code> | 세로 Offset |

<a name="OG.geometry.Geometry+resize"></a>

##### rectangle.resize(upper, lower, left, right) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
상, 하, 좌, 우 외곽선을 이동하여 Envelope 을 리사이즈 한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| upper | <code>Number</code> | 상단 라인 이동 Offset(위 방향으로 +) |
| lower | <code>Number</code> | 하단 라인 이동 Offset(아래 방향으로 +) |
| left | <code>Number</code> | 좌측 라인 이동 Offset(좌측 방향으로 +) |
| right | <code>Number</code> | 우측 라인 이동 Offset(우측 방향으로 +) |

<a name="OG.geometry.Geometry+rotate"></a>

##### rectangle.rotate(angle, origin) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
기준 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 회전된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전 각도 |
| origin | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 기준 좌표(default:중심좌표) |

<a name="OG.geometry.PolyLine+toString"></a>

##### rectangle.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Overrides:** <code>[toString](#OG.geometry.PolyLine+toString)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.geometry.PolyLine+angleBetweenPoints"></a>

##### rectangle.angleBetweenPoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 두 꼭지점 사이에 가상의 선을 그렸을때, 그 기울기를 구한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+isRightAngleBetweenPoints"></a>

##### rectangle.isRightAngleBetweenPoints(prev, next) ⇒ <code>Object</code>
공간기하객체의 두 꼭지점 사이의 기울기가 수평또는 수직인지 판별한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Object</code> - {flag : true or false, type: horizontal or vertical or none}  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.PolyLine+angleBetweenThreePoints"></a>

##### rectangle.angleBetweenThreePoints(prev, next) ⇒ <code>Number</code>
공간기하객체의 세 꼭지점 사이의 각도 중 작은 각도를 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Number</code> - 기울기  

| Param | Type | Description |
| --- | --- | --- |
| prev | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 1 |
| next | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 꼭지점 2 |

<a name="OG.geometry.Geometry+isEquals"></a>

##### rectangle.isEquals(_geometry) ⇒ <code>Boolean</code>
주어진 Geometry 객체와 같은지 비교한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Boolean</code> - true:같음, false:다름  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isContains"></a>

##### rectangle.isContains(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체를 포함하는지 비교한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Boolean</code> - 포함하면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+isWithin"></a>

##### rectangle.isWithin(_geometry) ⇒ <code>Boolean</code>
주어진 공간기하객체에 포함되는지 비교한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Boolean</code> - 포함되면 true  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | Geometry 객체 |

<a name="OG.geometry.Geometry+getBoundary"></a>

##### rectangle.getBoundary() ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
공간기하객체를 포함하는 사각형의 Boundary 영역을 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  
<a name="OG.geometry.Geometry+getCentroid"></a>

##### rectangle.getCentroid() ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체의 중심좌표를 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 중심좌표  
<a name="OG.geometry.Geometry+minDistance"></a>

##### rectangle.minDistance(_coordinate) ⇒ <code>Number</code>
주어진 좌표와의 최단거리를 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Number</code> - 최단거리  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+distance"></a>

##### rectangle.distance(_geometry) ⇒ <code>Number</code>
주어진 공간기하객체와의 중심점 간의 거리를 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| _geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 공간 기하 객체 |

<a name="OG.geometry.Geometry+getLength"></a>

##### rectangle.getLength() ⇒ <code>Number</code>
공간기하객체의 길이를 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Number</code> - 길이  
<a name="OG.geometry.Geometry+moveCentroid"></a>

##### rectangle.moveCentroid(중심)
주어진 중심좌표로 공간기하객체를 이동한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 중심 | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+resizeBox"></a>

##### rectangle.resizeBox(width, height) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 리사이즈된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | 너비 |
| height | <code>Number</code> | 높이 |

<a name="OG.geometry.Geometry+fitToBoundary"></a>

##### rectangle.fitToBoundary(envelope) ⇒ <code>[Geometry](#OG.geometry.Geometry)</code>
주어진 Boundary 영역 안으로 공간 기하 객체를 적용한다.(이동 & 리사이즈)

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Geometry](#OG.geometry.Geometry)</code> - 적용된 공간 기하 객체  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Envelope 영역 |

<a name="OG.geometry.Geometry+convertCoordinate"></a>

##### rectangle.convertCoordinate(coordinate) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
파라미터가 [x, y] 형식의 좌표 Array 이면 OG.geometry.Coordinate 인스턴스를 new 하여 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | [x, y] 형식의 좌표 Array 또는 OG.geometry.Coordinate 인스턴스 |

<a name="OG.geometry.Geometry+distanceToLine"></a>

##### rectangle.distanceToLine(p, line) ⇒ <code>Number</code>
포인트 P 로부터 라인 AB의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+distanceLineToLine"></a>

##### rectangle.distanceLineToLine(line1, line2) ⇒ <code>Number</code>
라인1 로부터 라인2 의 거리를 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Number</code> - 거리  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectToLine"></a>

##### rectangle.intersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표들을 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+shortestIntersectToLine"></a>

##### rectangle.shortestIntersectToLine(line) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
기하도형이 주어진 라인과 교차하는 좌표중 시작좌표에 가장 가까운 좌표를 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+intersectLineToLine"></a>

##### rectangle.intersectLineToLine(line1, line2, extension) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
라인1 과 라인2 의 교차점을 계산한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| line1 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line1 라인 시작좌표, 끝좌표 Array |
| line2 | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | line2 라인 시작좌표, 끝좌표 Array |
| extension | <code>boolean</code> | 라인을 연장하여 교차점을 계산하는 여부 |

<a name="OG.geometry.Geometry+intersectCircleToLine"></a>

##### rectangle.intersectCircleToLine(center, radius, from, to) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 원과 주어진 라인의 교차점을 계산한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 중심점 |
| radius | <code>Number</code> | 반경 |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | line 라인 끝좌표 |

<a name="OG.geometry.Geometry+intersectPointToLine"></a>

##### rectangle.intersectPointToLine(p, line) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
포인트 P 로부터 라인 AB 까지 수직인 가상선을 생각할때, 그 교차점을 계산한다.
Note: NON-ROBUST!

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 교차점  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>[Coordinate](#OG.geometry.Coordinate)</code> &#124; <code>Array.&lt;Number&gt;</code> | 기준좌표 |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 시작좌표, 끝좌표 Array |

<a name="OG.geometry.Geometry+getPercentageDistanceFromPoint"></a>

##### rectangle.getPercentageDistanceFromPoint(_coordinate) ⇒ <code>Object</code>
주어진 좌표에 대해 공간기하객체 바운더리 대비 가로,세로 위치 퍼센테이지 비율을 구한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>Object</code> - {px , py}  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+isContainsPoint"></a>

##### rectangle.isContainsPoint(_coordinate) ⇒ <code>boolean</code>
공간기하객체가 주어진 좌표를 포함하는지를 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>boolean</code> - true,false  

| Param | Type | Description |
| --- | --- | --- |
| _coordinate | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 좌표 |

<a name="OG.geometry.Geometry+getPointFromPercentageDistance"></a>

##### rectangle.getPointFromPercentageDistance(pXpY) ⇒ <code>[Coordinate](#OG.geometry.Coordinate)</code>
공간기하객체에 대한 퍼센테이지 좌표의 실제 좌표를 구한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Coordinate](#OG.geometry.Coordinate)</code> - 실 좌표  

| Param | Type | Description |
| --- | --- | --- |
| pXpY | <code>Array</code> | 퍼센테이지 좌표 |

<a name="OG.geometry.Geometry+getParallelLine"></a>

##### rectangle.getParallelLine(from, to, distance) ⇒ <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code>
주어진 선분과 일정 거리에 있는 평행한 선분을 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
**Returns**: <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> - 평행선 시작좌표, 끝좌표 Array  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 시작좌표 |
| to | <code>[Coordinate](#OG.geometry.Coordinate)</code> | 라인 끝좌표 |
| distance |  |  |

<a name="OG.geometry.Geometry+getParallelPath"></a>

##### rectangle.getParallelPath(line, distance)
주어진 라인과 일정 거리에 있는 평행한 라인을 반환한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Array.&lt;Coordinate&gt;](#OG.geometry.Coordinate)</code> | 라인 좌표 Array |
| distance |  |  |

<a name="OG.geometry.Geometry+reset"></a>

##### rectangle.reset()
저장된 boundary 를 클리어하여 새로 계산하도록 한다.

**Kind**: instance method of <code>[Rectangle](#OG.geometry.Rectangle)</code>  
<a name="OG.geometry.Style"></a>

#### geometry.Style ⇐ <code>[HashMap](#OG.common.HashMap)</code>
**Kind**: static class of <code>[geometry](#OG.geometry)</code>  
**Extends:** <code>[HashMap](#OG.common.HashMap)</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Style](#OG.geometry.Style) ⇐ <code>[HashMap](#OG.common.HashMap)</code>
    * [new OG.geometry.Style(style)](#new_OG.geometry.Style_new)
    * [.map](#OG.common.HashMap+map) : <code>Object</code>
    * [.put(key, value)](#OG.common.HashMap+put)
    * [.get(key)](#OG.common.HashMap+get) ⇒ <code>Object</code>
    * [.containsKey(key)](#OG.common.HashMap+containsKey) ⇒ <code>Boolean</code>
    * [.containsValue(value)](#OG.common.HashMap+containsValue) ⇒ <code>Boolean</code>
    * [.isEmpty()](#OG.common.HashMap+isEmpty) ⇒ <code>Boolean</code>
    * [.clear()](#OG.common.HashMap+clear)
    * [.remove(key)](#OG.common.HashMap+remove)
    * [.keys()](#OG.common.HashMap+keys) ⇒ <code>Array.&lt;String&gt;</code>
    * [.values()](#OG.common.HashMap+values) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.size()](#OG.common.HashMap+size) ⇒ <code>Number</code>
    * [.toString()](#OG.common.HashMap+toString) ⇒ <code>String</code>

<a name="new_OG.geometry.Style_new"></a>

##### new OG.geometry.Style(style)
스타일(StyleSheet) Property 정보 클래스


| Param | Type | Description |
| --- | --- | --- |
| style | <code>Object</code> | 키:값 매핑된 스타일 프라퍼티 정보 |

**Example**  
```js
var style = new OG.geometry.Style({
    'cursor': 'default',
    'stroke': 'black'
});
```
<a name="OG.common.HashMap+map"></a>

##### style.map : <code>Object</code>
key:value 매핑 JSON 오브젝트

**Kind**: instance property of <code>[Style](#OG.geometry.Style)</code>  
<a name="OG.common.HashMap+put"></a>

##### style.put(key, value)
key : value 를 매핑한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | 키 |
| value | <code>Object</code> | 값 |

<a name="OG.common.HashMap+get"></a>

##### style.get(key) ⇒ <code>Object</code>
key 에 대한 value 를 반환한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  
**Returns**: <code>Object</code> - 값  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | 키 |

<a name="OG.common.HashMap+containsKey"></a>

##### style.containsKey(key) ⇒ <code>Boolean</code>
주어진 key 를 포함하는지 여부를 반환한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | 키 |

<a name="OG.common.HashMap+containsValue"></a>

##### style.containsValue(value) ⇒ <code>Boolean</code>
주어진 value 를 포함하는지 여부를 반환한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | 값 |

<a name="OG.common.HashMap+isEmpty"></a>

##### style.isEmpty() ⇒ <code>Boolean</code>
Empty 여부를 반환한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  
<a name="OG.common.HashMap+clear"></a>

##### style.clear()
매핑정보를 클리어한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  
<a name="OG.common.HashMap+remove"></a>

##### style.remove(key)
주어진 key 의 매핑정보를 삭제한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | 키 |

<a name="OG.common.HashMap+keys"></a>

##### style.keys() ⇒ <code>Array.&lt;String&gt;</code>
key 목록을 반환한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  
**Returns**: <code>Array.&lt;String&gt;</code> - 키목록  
<a name="OG.common.HashMap+values"></a>

##### style.values() ⇒ <code>Array.&lt;Object&gt;</code>
value 목록을 반환한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  
**Returns**: <code>Array.&lt;Object&gt;</code> - 값목록  
<a name="OG.common.HashMap+size"></a>

##### style.size() ⇒ <code>Number</code>
매핑된 key:value 갯수를 반환한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  
<a name="OG.common.HashMap+toString"></a>

##### style.toString() ⇒ <code>String</code>
객체 프라퍼티 정보를 JSON 스트링으로 반환한다.

**Kind**: instance method of <code>[Style](#OG.geometry.Style)</code>  
**Returns**: <code>String</code> - 프라퍼티 정보  
<a name="OG.graph"></a>

### OG.graph : <code>object</code>
**Kind**: static namespace of <code>[OG](#OG)</code>  

* [.graph](#OG.graph) : <code>object</code>
    * [.Canvas](#OG.graph.Canvas)
        * [new OG.graph.Canvas(container, containerSize, backgroundColor, backgroundImage)](#new_OG.graph.Canvas_new)
        * [.initConfig(config)](#OG.graph.Canvas+initConfig)
        * [.getRenderer()](#OG.graph.Canvas+getRenderer) ⇒ <code>OG.RaphaelRenderer</code>
        * [.getContainer()](#OG.graph.Canvas+getContainer) ⇒ <code>HTMLElement</code>
        * [.getEventHandler()](#OG.graph.Canvas+getEventHandler) ⇒ <code>OG.EventHandler</code>
        * [.addSlider()](#OG.graph.Canvas+addSlider)
        * [.removeSlider()](#OG.graph.Canvas+removeSlider)
        * [.drawShape(position, shape, size, style, id, parentId, preventEvent)](#OG.graph.Canvas+drawShape) ⇒ <code>Element</code>
        * [.drawTransformer(position, label, inputs, outputs, id)](#OG.graph.Canvas+drawTransformer) ⇒ <code>Element</code>
        * [.setShapeStyle(shapeElement, style)](#OG.graph.Canvas+setShapeStyle)
        * [.setTextListInController(shapeElement, textList)](#OG.graph.Canvas+setTextListInController)
        * [.getTextListInController(shapeElement)](#OG.graph.Canvas+getTextListInController)
        * [.drawLabel(shapeElement, text, style)](#OG.graph.Canvas+drawLabel) ⇒ <code>Element</code>
        * [.redrawConnectedEdge(element)](#OG.graph.Canvas+redrawConnectedEdge)
        * [.reconnect(edge)](#OG.graph.Canvas+reconnect) ⇒ <code>Element</code>
        * [.connect(fromElement, toElement, style, label, fromP, toP, preventTrigger, id, edgeShape)](#OG.graph.Canvas+connect) ⇒ <code>\*</code> &#124; <code>Element</code>
        * [.connectWithTerminalId(fromTerminal, toTerminal, style, label)](#OG.graph.Canvas+connectWithTerminalId) ⇒ <code>String</code> &#124; <code>String</code> &#124; <code>[geometry](#OG.geometry)</code>
        * [.disconnect(element)](#OG.graph.Canvas+disconnect)
        * [.group(elements)](#OG.graph.Canvas+group) ⇒ <code>Element</code>
        * [.ungroup(groupElements)](#OG.graph.Canvas+ungroup) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.addToGroup(groupElement, elements)](#OG.graph.Canvas+addToGroup)
        * [.collapse(element)](#OG.graph.Canvas+collapse)
        * [.expand(element)](#OG.graph.Canvas+expand)
        * [.clear()](#OG.graph.Canvas+clear)
        * [.removeShape(element)](#OG.graph.Canvas+removeShape)
        * [.removeChild(element)](#OG.graph.Canvas+removeChild)
        * [.removeGuide(element)](#OG.graph.Canvas+removeGuide)
        * [.removeAllGuide()](#OG.graph.Canvas+removeAllGuide)
        * [.getRootElement()](#OG.graph.Canvas+getRootElement) ⇒ <code>Element</code>
        * [.getRootGroup()](#OG.graph.Canvas+getRootGroup) ⇒ <code>Element</code>
        * [.getElementByPoint(position)](#OG.graph.Canvas+getElementByPoint) ⇒ <code>Element</code>
        * [.getElementsByBBox(envelope)](#OG.graph.Canvas+getElementsByBBox) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.setAttr(element, attribute)](#OG.graph.Canvas+setAttr)
        * [.getAttr(element, attrName)](#OG.graph.Canvas+getAttr) ⇒ <code>Object</code>
        * [.toFront(element)](#OG.graph.Canvas+toFront)
        * [.toBack(element)](#OG.graph.Canvas+toBack)
        * [.bringForward(element)](#OG.graph.Canvas+bringForward)
        * [.sendBackward(element)](#OG.graph.Canvas+sendBackward)
        * [.getCanvasSize()](#OG.graph.Canvas+getCanvasSize) ⇒ <code>Array.&lt;Number&gt;</code>
        * [.setCanvasSize(size)](#OG.graph.Canvas+setCanvasSize)
        * [.fitCanvasSize(minSize, fitScale)](#OG.graph.Canvas+fitCanvasSize)
        * [.setViewBox(position, size, isFit)](#OG.graph.Canvas+setViewBox)
        * [.getScale()](#OG.graph.Canvas+getScale) ⇒ <code>Number</code>
        * [.setScale(scale)](#OG.graph.Canvas+setScale)
        * [.show(element)](#OG.graph.Canvas+show)
        * [.hide(element)](#OG.graph.Canvas+hide)
        * [.appendChild(srcElement, targetElement)](#OG.graph.Canvas+appendChild) ⇒ <code>Element</code>
        * [.insertAfter(srcElement, targetElement)](#OG.graph.Canvas+insertAfter) ⇒ <code>Element</code>
        * [.insertBefore(srcElement, targetElement)](#OG.graph.Canvas+insertBefore) ⇒ <code>Element</code>
        * [.move(element, offset)](#OG.graph.Canvas+move) ⇒ <code>Element</code>
        * [.moveCentroid(element, position)](#OG.graph.Canvas+moveCentroid) ⇒ <code>Element</code>
        * [.rotate(element, angle)](#OG.graph.Canvas+rotate) ⇒ <code>Element</code>
        * [.resize(element, offset)](#OG.graph.Canvas+resize) ⇒ <code>Element</code>
        * [.resizeBox(element, size)](#OG.graph.Canvas+resizeBox) ⇒ <code>Element</code>
        * [.clone(element)](#OG.graph.Canvas+clone) ⇒ <code>Element</code>
        * [.getBoundary(element)](#OG.graph.Canvas+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getElementById(id)](#OG.graph.Canvas+getElementById) ⇒ <code>Element</code>
        * [.getElementsByType(shapeType, excludeType)](#OG.graph.Canvas+getElementsByType) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getElementsByShapeId(shapeId)](#OG.graph.Canvas+getElementsByShapeId) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getRelatedElementsFromEdge(edgeElement)](#OG.graph.Canvas+getRelatedElementsFromEdge) ⇒ <code>Object</code>
        * [.getParent(Element)](#OG.graph.Canvas+getParent) ⇒ <code>Element</code>
        * [.getChilds(element)](#OG.graph.Canvas+getChilds) ⇒ <code>Array</code>
        * [.getAllShapes()](#OG.graph.Canvas+getAllShapes) ⇒ <code>Array</code>
        * [.getAllEdges()](#OG.graph.Canvas+getAllEdges) ⇒ <code>Array</code>
        * [.getBBox(element)](#OG.graph.Canvas+getBBox) ⇒ <code>Object</code>
        * [.getRootBBox()](#OG.graph.Canvas+getRootBBox) ⇒ <code>Object</code>
        * [.getRealRootBBox()](#OG.graph.Canvas+getRealRootBBox) ⇒ <code>Object</code>
        * [.isSVG()](#OG.graph.Canvas+isSVG) ⇒ <code>Boolean</code>
        * [.isVML()](#OG.graph.Canvas+isVML) ⇒ <code>Boolean</code>
        * [.setCustomData(shapeElement, data)](#OG.graph.Canvas+setCustomData)
        * [.getCustomData(shapeElement)](#OG.graph.Canvas+getCustomData) ⇒ <code>Object</code>
        * [.setExtCustomData(shapeElement, data)](#OG.graph.Canvas+setExtCustomData)
        * [.getExtCustomData(shapeElement)](#OG.graph.Canvas+getExtCustomData) ⇒ <code>Object</code>
        * [.toXML()](#OG.graph.Canvas+toXML) ⇒ <code>String</code>
        * [.toJSON()](#OG.graph.Canvas+toJSON) ⇒ <code>Object</code>
        * [.loadXML(xml)](#OG.graph.Canvas+loadXML) ⇒ <code>Object</code>
        * [.loadJSON(json)](#OG.graph.Canvas+loadJSON) ⇒ <code>Object</code>
        * [.undo()](#OG.graph.Canvas+undo)
        * [.redo()](#OG.graph.Canvas+redo)
        * [.getPrevEdges(element)](#OG.graph.Canvas+getPrevEdges) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getNextEdges(element)](#OG.graph.Canvas+getNextEdges) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getPrevShapes(element)](#OG.graph.Canvas+getPrevShapes) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getPrevShapeIds(element)](#OG.graph.Canvas+getPrevShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
        * [.getNextShapes(element)](#OG.graph.Canvas+getNextShapes) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getNextShapeIds(element)](#OG.graph.Canvas+getNextShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
        * [.onDrawShape(callbackFunc)](#OG.graph.Canvas+onDrawShape)
        * [.onUndo(callbackFunc)](#OG.graph.Canvas+onUndo)
        * [.onRedo(callbackFunc)](#OG.graph.Canvas+onRedo)
        * [.onDivideLane(callbackFunc)](#OG.graph.Canvas+onDivideLane)
        * [.onDrawLabel(callbackFunc)](#OG.graph.Canvas+onDrawLabel)
        * [.onLabelChanged(callbackFunc)](#OG.graph.Canvas+onLabelChanged)
        * [.onBeforeLabelChange(callbackFunc)](#OG.graph.Canvas+onBeforeLabelChange)
        * [.onRedrawShape(callbackFunc)](#OG.graph.Canvas+onRedrawShape)
        * [.onRemoveShape(callbackFunc)](#OG.graph.Canvas+onRemoveShape)
        * [.onRotateShape(callbackFunc)](#OG.graph.Canvas+onRotateShape)
        * [.onMoveShape(callbackFunc)](#OG.graph.Canvas+onMoveShape)
        * [.onResizeShape(callbackFunc)](#OG.graph.Canvas+onResizeShape)
        * [.onBeforeConnectShape(callbackFunc)](#OG.graph.Canvas+onBeforeConnectShape)
        * [.onBeforeRemoveShape(callbackFunc)](#OG.graph.Canvas+onBeforeRemoveShape)
        * [.onConnectShape(callbackFunc)](#OG.graph.Canvas+onConnectShape)
        * [.onDisconnectShape(callbackFunc)](#OG.graph.Canvas+onDisconnectShape)
        * [.onGroup(callbackFunc)](#OG.graph.Canvas+onGroup)
        * [.onUnGroup(callbackFunc)](#OG.graph.Canvas+onUnGroup)
        * [.onCollapsed(callbackFunc)](#OG.graph.Canvas+onCollapsed)
        * [.onExpanded(callbackFunc)](#OG.graph.Canvas+onExpanded)

<a name="OG.graph.Canvas"></a>

#### graph.Canvas
**Kind**: static class of <code>[graph](#OG.graph)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>, <code>module:OG.shape.\*</code>, <code>module:OG.renderer.\*</code>, <code>module:OG.handler.\*</code>, <code>module:OG.layout.\*</code>, <code>module:raphael-2.1.0</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.Canvas](#OG.graph.Canvas)
    * [new OG.graph.Canvas(container, containerSize, backgroundColor, backgroundImage)](#new_OG.graph.Canvas_new)
    * [.initConfig(config)](#OG.graph.Canvas+initConfig)
    * [.getRenderer()](#OG.graph.Canvas+getRenderer) ⇒ <code>OG.RaphaelRenderer</code>
    * [.getContainer()](#OG.graph.Canvas+getContainer) ⇒ <code>HTMLElement</code>
    * [.getEventHandler()](#OG.graph.Canvas+getEventHandler) ⇒ <code>OG.EventHandler</code>
    * [.addSlider()](#OG.graph.Canvas+addSlider)
    * [.removeSlider()](#OG.graph.Canvas+removeSlider)
    * [.drawShape(position, shape, size, style, id, parentId, preventEvent)](#OG.graph.Canvas+drawShape) ⇒ <code>Element</code>
    * [.drawTransformer(position, label, inputs, outputs, id)](#OG.graph.Canvas+drawTransformer) ⇒ <code>Element</code>
    * [.setShapeStyle(shapeElement, style)](#OG.graph.Canvas+setShapeStyle)
    * [.setTextListInController(shapeElement, textList)](#OG.graph.Canvas+setTextListInController)
    * [.getTextListInController(shapeElement)](#OG.graph.Canvas+getTextListInController)
    * [.drawLabel(shapeElement, text, style)](#OG.graph.Canvas+drawLabel) ⇒ <code>Element</code>
    * [.redrawConnectedEdge(element)](#OG.graph.Canvas+redrawConnectedEdge)
    * [.reconnect(edge)](#OG.graph.Canvas+reconnect) ⇒ <code>Element</code>
    * [.connect(fromElement, toElement, style, label, fromP, toP, preventTrigger, id, edgeShape)](#OG.graph.Canvas+connect) ⇒ <code>\*</code> &#124; <code>Element</code>
    * [.connectWithTerminalId(fromTerminal, toTerminal, style, label)](#OG.graph.Canvas+connectWithTerminalId) ⇒ <code>String</code> &#124; <code>String</code> &#124; <code>[geometry](#OG.geometry)</code>
    * [.disconnect(element)](#OG.graph.Canvas+disconnect)
    * [.group(elements)](#OG.graph.Canvas+group) ⇒ <code>Element</code>
    * [.ungroup(groupElements)](#OG.graph.Canvas+ungroup) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.addToGroup(groupElement, elements)](#OG.graph.Canvas+addToGroup)
    * [.collapse(element)](#OG.graph.Canvas+collapse)
    * [.expand(element)](#OG.graph.Canvas+expand)
    * [.clear()](#OG.graph.Canvas+clear)
    * [.removeShape(element)](#OG.graph.Canvas+removeShape)
    * [.removeChild(element)](#OG.graph.Canvas+removeChild)
    * [.removeGuide(element)](#OG.graph.Canvas+removeGuide)
    * [.removeAllGuide()](#OG.graph.Canvas+removeAllGuide)
    * [.getRootElement()](#OG.graph.Canvas+getRootElement) ⇒ <code>Element</code>
    * [.getRootGroup()](#OG.graph.Canvas+getRootGroup) ⇒ <code>Element</code>
    * [.getElementByPoint(position)](#OG.graph.Canvas+getElementByPoint) ⇒ <code>Element</code>
    * [.getElementsByBBox(envelope)](#OG.graph.Canvas+getElementsByBBox) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.setAttr(element, attribute)](#OG.graph.Canvas+setAttr)
    * [.getAttr(element, attrName)](#OG.graph.Canvas+getAttr) ⇒ <code>Object</code>
    * [.toFront(element)](#OG.graph.Canvas+toFront)
    * [.toBack(element)](#OG.graph.Canvas+toBack)
    * [.bringForward(element)](#OG.graph.Canvas+bringForward)
    * [.sendBackward(element)](#OG.graph.Canvas+sendBackward)
    * [.getCanvasSize()](#OG.graph.Canvas+getCanvasSize) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.setCanvasSize(size)](#OG.graph.Canvas+setCanvasSize)
    * [.fitCanvasSize(minSize, fitScale)](#OG.graph.Canvas+fitCanvasSize)
    * [.setViewBox(position, size, isFit)](#OG.graph.Canvas+setViewBox)
    * [.getScale()](#OG.graph.Canvas+getScale) ⇒ <code>Number</code>
    * [.setScale(scale)](#OG.graph.Canvas+setScale)
    * [.show(element)](#OG.graph.Canvas+show)
    * [.hide(element)](#OG.graph.Canvas+hide)
    * [.appendChild(srcElement, targetElement)](#OG.graph.Canvas+appendChild) ⇒ <code>Element</code>
    * [.insertAfter(srcElement, targetElement)](#OG.graph.Canvas+insertAfter) ⇒ <code>Element</code>
    * [.insertBefore(srcElement, targetElement)](#OG.graph.Canvas+insertBefore) ⇒ <code>Element</code>
    * [.move(element, offset)](#OG.graph.Canvas+move) ⇒ <code>Element</code>
    * [.moveCentroid(element, position)](#OG.graph.Canvas+moveCentroid) ⇒ <code>Element</code>
    * [.rotate(element, angle)](#OG.graph.Canvas+rotate) ⇒ <code>Element</code>
    * [.resize(element, offset)](#OG.graph.Canvas+resize) ⇒ <code>Element</code>
    * [.resizeBox(element, size)](#OG.graph.Canvas+resizeBox) ⇒ <code>Element</code>
    * [.clone(element)](#OG.graph.Canvas+clone) ⇒ <code>Element</code>
    * [.getBoundary(element)](#OG.graph.Canvas+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getElementById(id)](#OG.graph.Canvas+getElementById) ⇒ <code>Element</code>
    * [.getElementsByType(shapeType, excludeType)](#OG.graph.Canvas+getElementsByType) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getElementsByShapeId(shapeId)](#OG.graph.Canvas+getElementsByShapeId) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getRelatedElementsFromEdge(edgeElement)](#OG.graph.Canvas+getRelatedElementsFromEdge) ⇒ <code>Object</code>
    * [.getParent(Element)](#OG.graph.Canvas+getParent) ⇒ <code>Element</code>
    * [.getChilds(element)](#OG.graph.Canvas+getChilds) ⇒ <code>Array</code>
    * [.getAllShapes()](#OG.graph.Canvas+getAllShapes) ⇒ <code>Array</code>
    * [.getAllEdges()](#OG.graph.Canvas+getAllEdges) ⇒ <code>Array</code>
    * [.getBBox(element)](#OG.graph.Canvas+getBBox) ⇒ <code>Object</code>
    * [.getRootBBox()](#OG.graph.Canvas+getRootBBox) ⇒ <code>Object</code>
    * [.getRealRootBBox()](#OG.graph.Canvas+getRealRootBBox) ⇒ <code>Object</code>
    * [.isSVG()](#OG.graph.Canvas+isSVG) ⇒ <code>Boolean</code>
    * [.isVML()](#OG.graph.Canvas+isVML) ⇒ <code>Boolean</code>
    * [.setCustomData(shapeElement, data)](#OG.graph.Canvas+setCustomData)
    * [.getCustomData(shapeElement)](#OG.graph.Canvas+getCustomData) ⇒ <code>Object</code>
    * [.setExtCustomData(shapeElement, data)](#OG.graph.Canvas+setExtCustomData)
    * [.getExtCustomData(shapeElement)](#OG.graph.Canvas+getExtCustomData) ⇒ <code>Object</code>
    * [.toXML()](#OG.graph.Canvas+toXML) ⇒ <code>String</code>
    * [.toJSON()](#OG.graph.Canvas+toJSON) ⇒ <code>Object</code>
    * [.loadXML(xml)](#OG.graph.Canvas+loadXML) ⇒ <code>Object</code>
    * [.loadJSON(json)](#OG.graph.Canvas+loadJSON) ⇒ <code>Object</code>
    * [.undo()](#OG.graph.Canvas+undo)
    * [.redo()](#OG.graph.Canvas+redo)
    * [.getPrevEdges(element)](#OG.graph.Canvas+getPrevEdges) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getNextEdges(element)](#OG.graph.Canvas+getNextEdges) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getPrevShapes(element)](#OG.graph.Canvas+getPrevShapes) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getPrevShapeIds(element)](#OG.graph.Canvas+getPrevShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
    * [.getNextShapes(element)](#OG.graph.Canvas+getNextShapes) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getNextShapeIds(element)](#OG.graph.Canvas+getNextShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
    * [.onDrawShape(callbackFunc)](#OG.graph.Canvas+onDrawShape)
    * [.onUndo(callbackFunc)](#OG.graph.Canvas+onUndo)
    * [.onRedo(callbackFunc)](#OG.graph.Canvas+onRedo)
    * [.onDivideLane(callbackFunc)](#OG.graph.Canvas+onDivideLane)
    * [.onDrawLabel(callbackFunc)](#OG.graph.Canvas+onDrawLabel)
    * [.onLabelChanged(callbackFunc)](#OG.graph.Canvas+onLabelChanged)
    * [.onBeforeLabelChange(callbackFunc)](#OG.graph.Canvas+onBeforeLabelChange)
    * [.onRedrawShape(callbackFunc)](#OG.graph.Canvas+onRedrawShape)
    * [.onRemoveShape(callbackFunc)](#OG.graph.Canvas+onRemoveShape)
    * [.onRotateShape(callbackFunc)](#OG.graph.Canvas+onRotateShape)
    * [.onMoveShape(callbackFunc)](#OG.graph.Canvas+onMoveShape)
    * [.onResizeShape(callbackFunc)](#OG.graph.Canvas+onResizeShape)
    * [.onBeforeConnectShape(callbackFunc)](#OG.graph.Canvas+onBeforeConnectShape)
    * [.onBeforeRemoveShape(callbackFunc)](#OG.graph.Canvas+onBeforeRemoveShape)
    * [.onConnectShape(callbackFunc)](#OG.graph.Canvas+onConnectShape)
    * [.onDisconnectShape(callbackFunc)](#OG.graph.Canvas+onDisconnectShape)
    * [.onGroup(callbackFunc)](#OG.graph.Canvas+onGroup)
    * [.onUnGroup(callbackFunc)](#OG.graph.Canvas+onUnGroup)
    * [.onCollapsed(callbackFunc)](#OG.graph.Canvas+onCollapsed)
    * [.onExpanded(callbackFunc)](#OG.graph.Canvas+onExpanded)

<a name="new_OG.graph.Canvas_new"></a>

##### new OG.graph.Canvas(container, containerSize, backgroundColor, backgroundImage)
OpenGraph 캔버스 클래스


| Param | Type | Description |
| --- | --- | --- |
| container | <code>HTMLElement</code> &#124; <code>String</code> | 컨테이너 DOM element or ID |
| containerSize | <code>Array.&lt;Number&gt;</code> | 컨테이너 Width, Height |
| backgroundColor | <code>String</code> | 캔버스 배경색 |
| backgroundImage | <code>String</code> | 캔버스 배경이미지 |

**Example**  
```js
var canvas = new OG.Canvas('canvas', [1000, 800], 'white', 'url(./images/grid.gif)');

var circleShape = canvas.drawShape([100, 100], new OG.CircleShape(), [100, 100]);
var ellipseShape = canvas.drawShape([300, 200], new OG.EllipseShape('label'), [100, 50]);

var edge = canvas.connect(circleShape, ellipseShape);
```
<a name="OG.graph.Canvas+initConfig"></a>

##### canvas.initConfig(config)
Canvas 의 설정값을 초기화한다.

<pre>
- selectable         : 클릭선택 가능여부(디폴트 true)
- dragSelectable     : 마우스드래그선택 가능여부(디폴트 true)
- movable            : 이동 가능여부(디폴트 true)
- resizable          : 리사이즈 가능여부(디폴트 true)
- connectable        : 연결 가능여부(디폴트 true)
- selfConnectable    : Self 연결 가능여부(디폴트 true)
- connectCloneable   : 드래그하여 연결시 대상 없을 경우 자동으로 Shape 복사하여 연결 처리 여부(디폴트 true)
- connectRequired    : 드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부(디폴트 true)
- labelEditable      : 라벨 수정여부(디폴트 true)
- groupDropable      : 그룹핑 가능여부(디폴트 true)
- enableHotKey       : 핫키 가능여부(디폴트 true)
- enableContextMenu  : 마우스 우클릭 메뉴 가능여부(디폴트 true)
- autoExtensional    : 캔버스 자동 확장 기능(디폴트 true)
- useSlider          : 확대축소 슬라이더 사용 여부
- stickGuide         : 스틱 가이드 표시 여부
- checkBridgeEdge    : 연결된 두 오브젝트의 소속에 따른 연결선 스타일 변화 여부
</pre>

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | JSON 포맷의 configuration |

<a name="OG.graph.Canvas+getRenderer"></a>

##### canvas.getRenderer() ⇒ <code>OG.RaphaelRenderer</code>
랜더러를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
<a name="OG.graph.Canvas+getContainer"></a>

##### canvas.getContainer() ⇒ <code>HTMLElement</code>
컨테이너 DOM element 를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
<a name="OG.graph.Canvas+getEventHandler"></a>

##### canvas.getEventHandler() ⇒ <code>OG.EventHandler</code>
이벤트 핸들러를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
<a name="OG.graph.Canvas+addSlider"></a>

##### canvas.addSlider()
확대 축소 슬라이더를 설치한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
<a name="OG.graph.Canvas+removeSlider"></a>

##### canvas.removeSlider()
확대 축소 슬라이더를 삭제한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
<a name="OG.graph.Canvas+drawShape"></a>

##### canvas.drawShape(position, shape, size, style, id, parentId, preventEvent) ⇒ <code>Element</code>
Shape 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Group DOM Element with geometry  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(중앙 기준) |
| shape | <code>[IShape](#OG.shape.IShape)</code> | Shape |
| size | <code>Array.&lt;Number&gt;</code> | Shape Width, Height |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 (Optional) |
| id | <code>String</code> | Element ID 지정 (Optional) |
| parentId | <code>String</code> | 부모 Element ID 지정 (Optional) |
| preventEvent | <code>Boolean</code> | 이벤트 생성 방지 |

**Example**  
```js
canvas.drawShape([100, 100], new OG.CircleShape(), [50, 50], {stroke:'red'});
```
<a name="OG.graph.Canvas+drawTransformer"></a>

##### canvas.drawTransformer(position, label, inputs, outputs, id) ⇒ <code>Element</code>
Transfomer Shape 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Group DOM Element with geometry  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(중앙 기준) |
| label | <code>String</code> | Label |
| inputs | <code>Array.&lt;String&gt;</code> | 인풋에 위치할 리스트 |
| outputs | <code>Array.&lt;String&gt;</code> | 아웃풋에 위치할 리스트 |
| id | <code>String</code> | Element ID 지정 (Optional) |

**Example**  
```js
canvas.drawTransformer([100, 100], 'label' ['str1','str2'],['out']);
```
<a name="OG.graph.Canvas+setShapeStyle"></a>

##### canvas.setShapeStyle(shapeElement, style)
Shape 의 스타일을 변경한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> | Shape DOM element |
| style | <code>Object</code> | 스타일 |

<a name="OG.graph.Canvas+setTextListInController"></a>

##### canvas.setTextListInController(shapeElement, textList)
Shape 의 선 연결 커스텀 컨트롤러를 설정한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> | Shape DOM element |
| textList | <code>Array</code> | 텍스트 리스트 |

<a name="OG.graph.Canvas+getTextListInController"></a>

##### canvas.getTextListInController(shapeElement)
Shape 의 선 연결 커스텀 컨트롤러를 가져온다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> | Shape DOM element |

<a name="OG.graph.Canvas+drawLabel"></a>

##### canvas.drawLabel(shapeElement, text, style) ⇒ <code>Element</code>
Shape 의 Label 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> &#124; <code>String</code> | Shape DOM element or ID |
| text | <code>String</code> | 텍스트 |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |

<a name="OG.graph.Canvas+redrawConnectedEdge"></a>

##### canvas.redrawConnectedEdge(element)
Shape 의 연결된 Edge 를 redraw 한다.(이동 또는 리사이즈시)

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.graph.Canvas+reconnect"></a>

##### canvas.reconnect(edge) ⇒ <code>Element</code>
연결된 터미널의 vertices 를 초기화한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - 연결된 Edge 엘리먼트  

| Param | Type | Description |
| --- | --- | --- |
| edge | <code>Element</code> | Edge Shape |

<a name="OG.graph.Canvas+connect"></a>

##### canvas.connect(fromElement, toElement, style, label, fromP, toP, preventTrigger, id, edgeShape) ⇒ <code>\*</code> &#124; <code>Element</code>
두개의 Shape 을 Edge 로 연결한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fromElement | <code>Element</code> | from Shape Element |
| toElement | <code>Element</code> | to Shape Element |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| label | <code>String</code> | Label |
| fromP |  | fromElement 와 연결될 터미널 좌표 [x,y](optional) |
| toP |  | toElement 와 연결될 터미널 좌표 [x,y](optional) |
| preventTrigger |  | 참 일 경우 이벤트 발생을 방지 |
| id |  | 연결선의 아이디 |
| edgeShape | <code>Element</code> | 이 값이 없으면 신규 OG.EdgeShape 를 생성 |

<a name="OG.graph.Canvas+connectWithTerminalId"></a>

##### canvas.connectWithTerminalId(fromTerminal, toTerminal, style, label) ⇒ <code>String</code> &#124; <code>String</code> &#124; <code>[geometry](#OG.geometry)</code>
두개의 터미널 아이디로 부터 얻어진 Shape를 Edge 로 연결한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>String</code> - id 부여 할 아이디<code>String</code> - shapeId shapeId<code>[geometry](#OG.geometry)</code> - geom Edge geometry  

| Param | Type | Description |
| --- | --- | --- |
| fromTerminal | <code>String</code> | from Terminal Id |
| toTerminal | <code>String</code> | to Terminal Id |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| label | <code>String</code> | Label |

<a name="OG.graph.Canvas+disconnect"></a>

##### canvas.disconnect(element)
연결속성정보를 삭제한다. Edge 인 경우는 라인만 삭제하고, 일반 Shape 인 경우는 연결된 모든 Edge 를 삭제한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.graph.Canvas+group"></a>

##### canvas.group(elements) ⇒ <code>Element</code>
주어진 Shape 들을 그룹핑한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Group Shape Element  

| Param | Type |
| --- | --- |
| elements | <code>Array.&lt;Element&gt;</code> | 

<a name="OG.graph.Canvas+ungroup"></a>

##### canvas.ungroup(groupElements) ⇒ <code>Array.&lt;Element&gt;</code>
주어진 그룹들을 그룹해제한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - ungrouped Elements  

| Param | Type |
| --- | --- |
| groupElements | <code>Array.&lt;Element&gt;</code> | 

<a name="OG.graph.Canvas+addToGroup"></a>

##### canvas.addToGroup(groupElement, elements)
주어진 Shape 들을 그룹에 추가한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type |
| --- | --- |
| groupElement | <code>Element</code> | 
| elements | <code>Array.&lt;Element&gt;</code> | 

<a name="OG.graph.Canvas+collapse"></a>

##### canvas.collapse(element)
주어진 Shape 이 그룹인 경우 collapse 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.graph.Canvas+expand"></a>

##### canvas.expand(element)
주어진 Shape 이 그룹인 경우 expand 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.graph.Canvas+clear"></a>

##### canvas.clear()
드로잉된 모든 오브젝트를 클리어한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
<a name="OG.graph.Canvas+removeShape"></a>

##### canvas.removeShape(element)
Shape 을 캔버스에서 관련된 모두를 삭제한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+removeChild"></a>

##### canvas.removeChild(element)
하위 엘리먼트만 제거한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+removeGuide"></a>

##### canvas.removeGuide(element)
ID에 해당하는 Element 의 Move & Resize 용 가이드를 제거한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+removeAllGuide"></a>

##### canvas.removeAllGuide()
모든 Move & Resize 용 가이드를 제거한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
<a name="OG.graph.Canvas+getRootElement"></a>

##### canvas.getRootElement() ⇒ <code>Element</code>
랜더러 캔버스 Root Element 를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  
<a name="OG.graph.Canvas+getRootGroup"></a>

##### canvas.getRootGroup() ⇒ <code>Element</code>
랜더러 캔버스 Root Group Element 를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  
<a name="OG.graph.Canvas+getElementByPoint"></a>

##### canvas.getElementByPoint(position) ⇒ <code>Element</code>
주어진 지점을 포함하는 Top Element 를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 위치 좌표 |

<a name="OG.graph.Canvas+getElementsByBBox"></a>

##### canvas.getElementsByBBox(envelope) ⇒ <code>Array.&lt;Element&gt;</code>
주어진 Boundary Box 영역에 포함되는 Shape(GEOM, TEXT, IMAGE) Element 를 반환한다.
모든 vertices를 포함한 엘리먼트를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Boundary Box 영역 |

<a name="OG.graph.Canvas+setAttr"></a>

##### canvas.setAttr(element, attribute)
엘리먼트에 속성값을 설정한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| attribute | <code>Object</code> | 속성값 |

<a name="OG.graph.Canvas+getAttr"></a>

##### canvas.getAttr(element, attrName) ⇒ <code>Object</code>
엘리먼트 속성값을 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Object</code> - attribute 속성값  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| attrName | <code>String</code> | 속성이름 |

<a name="OG.graph.Canvas+toFront"></a>

##### canvas.toFront(element)
ID에 해당하는 Element 를 최상단 레이어로 이동한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+toBack"></a>

##### canvas.toBack(element)
ID에 해당하는 Element 를 최하단 레이어로 이동한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+bringForward"></a>

##### canvas.bringForward(element)
ID에 해당하는 Element 를 앞으로 한단계 이동한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+sendBackward"></a>

##### canvas.sendBackward(element)
ID에 해당하는 Element 를 뒤로 한단계 이동한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+getCanvasSize"></a>

##### canvas.getCanvasSize() ⇒ <code>Array.&lt;Number&gt;</code>
랜더러 캔버스의 사이즈(Width, Height)를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;Number&gt;</code> - Canvas Width, Height  
<a name="OG.graph.Canvas+setCanvasSize"></a>

##### canvas.setCanvasSize(size)
랜더러 캔버스의 사이즈(Width, Height)를 변경한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>Array.&lt;Number&gt;</code> | Canvas Width, Height |

<a name="OG.graph.Canvas+fitCanvasSize"></a>

##### canvas.fitCanvasSize(minSize, fitScale)
랜더러 캔버스의 사이즈(Width, Height)를 실제 존재하는 Shape 의 영역에 맞게 변경한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| minSize | <code>Array.&lt;Number&gt;</code> | Canvas 최소 Width, Height |
| fitScale | <code>Boolean</code> | 주어진 minSize 에 맞게 fit 여부(Default:false) |

<a name="OG.graph.Canvas+setViewBox"></a>

##### canvas.setViewBox(position, size, isFit)
새로운 View Box 영역을 설정한다. (ZoomIn & ZoomOut 가능)

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 위치 좌표(좌상단 기준) |
| size | <code>Array.&lt;Number&gt;</code> | Canvas Width, Height |
| isFit | <code>Boolean</code> | Fit 여부 |

<a name="OG.graph.Canvas+getScale"></a>

##### canvas.getScale() ⇒ <code>Number</code>
Scale 을 반환한다. (리얼 사이즈 : Scale = 1)

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Number</code> - 스케일값  
<a name="OG.graph.Canvas+setScale"></a>

##### canvas.setScale(scale)
Scale 을 설정한다. (리얼 사이즈 : Scale = 1)

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| scale | <code>Number</code> | 스케일값 |

<a name="OG.graph.Canvas+show"></a>

##### canvas.show(element)
ID에 해당하는 Element 를 캔버스에서 show 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+hide"></a>

##### canvas.hide(element)
ID에 해당하는 Element 를 캔버스에서 hide 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+appendChild"></a>

##### canvas.appendChild(srcElement, targetElement) ⇒ <code>Element</code>
Source Element 를 Target Element 아래에 append 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Source Element  

| Param | Type | Description |
| --- | --- | --- |
| srcElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| targetElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+insertAfter"></a>

##### canvas.insertAfter(srcElement, targetElement) ⇒ <code>Element</code>
Source Element 를 Target Element 이후에 insert 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Source Element  

| Param | Type | Description |
| --- | --- | --- |
| srcElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| targetElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+insertBefore"></a>

##### canvas.insertBefore(srcElement, targetElement) ⇒ <code>Element</code>
Source Element 를 Target Element 이전에 insert 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Source Element  

| Param | Type | Description |
| --- | --- | --- |
| srcElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| targetElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+move"></a>

##### canvas.move(element, offset) ⇒ <code>Element</code>
해당 Element 를 가로, 세로 Offset 만큼 이동한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| offset | <code>Array.&lt;Number&gt;</code> | [가로, 세로] |

<a name="OG.graph.Canvas+moveCentroid"></a>

##### canvas.moveCentroid(element, position) ⇒ <code>Element</code>
주어진 중심좌표로 해당 Element 를 이동한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| position | <code>Array.&lt;Number&gt;</code> | [x, y] |

<a name="OG.graph.Canvas+rotate"></a>

##### canvas.rotate(element, angle) ⇒ <code>Element</code>
중심 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| angle | <code>Number</code> | 각도 |

<a name="OG.graph.Canvas+resize"></a>

##### canvas.resize(element, offset) ⇒ <code>Element</code>
상, 하, 좌, 우 외곽선을 이동한 만큼 리사이즈 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| offset | <code>Array.&lt;Number&gt;</code> | [상, 하, 좌, 우] 각 방향으로 + 값 |

<a name="OG.graph.Canvas+resizeBox"></a>

##### canvas.resizeBox(element, size) ⇒ <code>Element</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| size | <code>Array.&lt;Number&gt;</code> | [Width, Height] |

<a name="OG.graph.Canvas+clone"></a>

##### canvas.clone(element) ⇒ <code>Element</code>
노드 Element 를 복사한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+getBoundary"></a>

##### canvas.getBoundary(element) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
ID에 해당하는 Element 의 바운더리 영역을 리턴한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+getElementById"></a>

##### canvas.getElementById(id) ⇒ <code>Element</code>
ID로 Node Element 를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="OG.graph.Canvas+getElementsByType"></a>

##### canvas.getElementsByType(shapeType, excludeType) ⇒ <code>Array.&lt;Element&gt;</code>
Shape 타입에 해당하는 Node Element 들을 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| shapeType | <code>String</code> | Shape 타입(GEOM, HTML, IMAGE, EDGE, GROUP), Null 이면 모든 타입 |
| excludeType | <code>String</code> | 제외 할 타입 |

<a name="OG.graph.Canvas+getElementsByShapeId"></a>

##### canvas.getElementsByShapeId(shapeId) ⇒ <code>Array.&lt;Element&gt;</code>
Shape ID에 해당하는 Node Element 들을 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| shapeId | <code>String</code> | Shape ID |

<a name="OG.graph.Canvas+getRelatedElementsFromEdge"></a>

##### canvas.getRelatedElementsFromEdge(edgeElement) ⇒ <code>Object</code>
Edge 엘리먼트와 연결된 fromShape, toShape 엘리먼트를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| edgeElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+getParent"></a>

##### canvas.getParent(Element) ⇒ <code>Element</code>
부모 엘리먼트를 반환한다. 부모가 루트일때는 반환하지 않는다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Element</code> - Element  엘리먼트  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> | 엘리먼트 |

<a name="OG.graph.Canvas+getChilds"></a>

##### canvas.getChilds(element) ⇒ <code>Array</code>
그룹의 하위 엘리먼트를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array</code> - Elements  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | 엘리먼트 |

<a name="OG.graph.Canvas+getAllShapes"></a>

##### canvas.getAllShapes() ⇒ <code>Array</code>
캔버스의 모든 Shape 들을 리턴

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array</code> - Elements  
<a name="OG.graph.Canvas+getAllEdges"></a>

##### canvas.getAllEdges() ⇒ <code>Array</code>
캔버스의 모든 Edge를 리턴

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array</code> - Edge Elements  
<a name="OG.graph.Canvas+getBBox"></a>

##### canvas.getBBox(element) ⇒ <code>Object</code>
해당 엘리먼트의 BoundingBox 영역 정보를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  

| Param | Type |
| --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | 

<a name="OG.graph.Canvas+getRootBBox"></a>

##### canvas.getRootBBox() ⇒ <code>Object</code>
부모노드기준으로 캔버스 루트 엘리먼트의 BoundingBox 영역 정보를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  
<a name="OG.graph.Canvas+getRealRootBBox"></a>

##### canvas.getRealRootBBox() ⇒ <code>Object</code>
부모노드기준으로 캔버스 루트 엘리먼트의 실제 Shape 이 차지하는 BoundingBox 영역 정보를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  
<a name="OG.graph.Canvas+isSVG"></a>

##### canvas.isSVG() ⇒ <code>Boolean</code>
SVG 인지 여부를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Boolean</code> - svg 여부  
<a name="OG.graph.Canvas+isVML"></a>

##### canvas.isVML() ⇒ <code>Boolean</code>
VML 인지 여부를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Boolean</code> - vml 여부  
<a name="OG.graph.Canvas+setCustomData"></a>

##### canvas.setCustomData(shapeElement, data)
주어진 Shape 엘리먼트에 커스텀 데이타를 저장한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> &#124; <code>String</code> | Shape DOM Element or ID |
| data | <code>Object</code> | JSON 포맷의 Object |

<a name="OG.graph.Canvas+getCustomData"></a>

##### canvas.getCustomData(shapeElement) ⇒ <code>Object</code>
주어진 Shape 엘리먼트에 저장된 커스텀 데이터를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Object</code> - JSON 포맷의 Object  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> &#124; <code>String</code> | Shape DOM Element or ID |

<a name="OG.graph.Canvas+setExtCustomData"></a>

##### canvas.setExtCustomData(shapeElement, data)
주어진 Shape 엘리먼트에 확장 커스텀 데이타를 저장한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> &#124; <code>String</code> | Shape DOM Element or ID |
| data | <code>Object</code> | JSON 포맷의 Object |

<a name="OG.graph.Canvas+getExtCustomData"></a>

##### canvas.getExtCustomData(shapeElement) ⇒ <code>Object</code>
주어진 Shape 엘리먼트에 저장된 확장 커스텀 데이터를 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Object</code> - JSON 포맷의 Object  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> &#124; <code>String</code> | Shape DOM Element or ID |

<a name="OG.graph.Canvas+toXML"></a>

##### canvas.toXML() ⇒ <code>String</code>
Canvas 에 그려진 Shape 들을 OpenGraph XML 문자열로 export 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>String</code> - XML 문자열  
<a name="OG.graph.Canvas+toJSON"></a>

##### canvas.toJSON() ⇒ <code>Object</code>
Canvas 에 그려진 Shape 들을 OpenGraph JSON 객체로 export 한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Object</code> - JSON 포맷의 Object  
<a name="OG.graph.Canvas+loadXML"></a>

##### canvas.loadXML(xml) ⇒ <code>Object</code>
OpenGraph XML 문자열로 부터 Shape 을 드로잉한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  

| Param | Type | Description |
| --- | --- | --- |
| xml | <code>String</code> &#124; <code>Element</code> | XML 문자열 또는 DOM Element |

<a name="OG.graph.Canvas+loadJSON"></a>

##### canvas.loadJSON(json) ⇒ <code>Object</code>
JSON 객체로 부터 Shape 을 드로잉한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>Object</code> | JSON 포맷의 Object |

<a name="OG.graph.Canvas+undo"></a>

##### canvas.undo()
캔버스 undo.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
<a name="OG.graph.Canvas+redo"></a>

##### canvas.redo()
캔버스 redo.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
<a name="OG.graph.Canvas+getPrevEdges"></a>

##### canvas.getPrevEdges(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이전 Edge Element 들을 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+getNextEdges"></a>

##### canvas.getNextEdges(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이후 Edge Element 들을 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+getPrevShapes"></a>

##### canvas.getPrevShapes(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이전 노드 Element 들을 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+getPrevShapeIds"></a>

##### canvas.getPrevShapeIds(element) ⇒ <code>Array.&lt;String&gt;</code>
연결된 이전 노드 Element ID들을 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;String&gt;</code> - Previous Element Id's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+getNextShapes"></a>

##### canvas.getNextShapes(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이후 노드 Element 들을 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+getNextShapeIds"></a>

##### canvas.getNextShapeIds(element) ⇒ <code>Array.&lt;String&gt;</code>
연결된 이후 노드 Element ID들을 반환한다.

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  
**Returns**: <code>Array.&lt;String&gt;</code> - Previous Element Id's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.graph.Canvas+onDrawShape"></a>

##### canvas.onDrawShape(callbackFunc)
Shape 이 처음 Draw 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, shapeElement) |

<a name="OG.graph.Canvas+onUndo"></a>

##### canvas.onUndo(callbackFunc)
Undo 되었을때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event) |

<a name="OG.graph.Canvas+onRedo"></a>

##### canvas.onRedo(callbackFunc)
Redo 되었을때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event) |

<a name="OG.graph.Canvas+onDivideLane"></a>

##### canvas.onDivideLane(callbackFunc)
Lane 이 divide 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, dividedLane) |

<a name="OG.graph.Canvas+onDrawLabel"></a>

##### canvas.onDrawLabel(callbackFunc)
라벨이 Draw 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, shapeElement, labelText) |

<a name="OG.graph.Canvas+onLabelChanged"></a>

##### canvas.onLabelChanged(callbackFunc)
라벨이 Change 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, shapeElement, afterText, beforeText) |

<a name="OG.graph.Canvas+onBeforeLabelChange"></a>

##### canvas.onBeforeLabelChange(callbackFunc)
라벨이 Change 되기전 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, shapeElement, afterText, beforeText) |

<a name="OG.graph.Canvas+onRedrawShape"></a>

##### canvas.onRedrawShape(callbackFunc)
Shape 이 Redraw 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, shapeElement) |

<a name="OG.graph.Canvas+onRemoveShape"></a>

##### canvas.onRemoveShape(callbackFunc)
Shape 이 Remove 될 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, shapeElement) |

<a name="OG.graph.Canvas+onRotateShape"></a>

##### canvas.onRotateShape(callbackFunc)
Shape 이 Rotate 될 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, element, angle) |

<a name="OG.graph.Canvas+onMoveShape"></a>

##### canvas.onMoveShape(callbackFunc)
Shape 이 Move 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, shapeElement, offset) |

<a name="OG.graph.Canvas+onResizeShape"></a>

##### canvas.onResizeShape(callbackFunc)
Shape 이 Resize 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, shapeElement, offset) |

<a name="OG.graph.Canvas+onBeforeConnectShape"></a>

##### canvas.onBeforeConnectShape(callbackFunc)
Shape 이 Connect 되기전 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, edgeElement, fromElement, toElement) |

<a name="OG.graph.Canvas+onBeforeRemoveShape"></a>

##### canvas.onBeforeRemoveShape(callbackFunc)
Shape 이 Remove 되기전 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, element) |

<a name="OG.graph.Canvas+onConnectShape"></a>

##### canvas.onConnectShape(callbackFunc)
Shape 이 Connect 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, edgeElement, fromElement, toElement) |

<a name="OG.graph.Canvas+onDisconnectShape"></a>

##### canvas.onDisconnectShape(callbackFunc)
Shape 이 Disconnect 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, edgeElement, fromElement, toElement) |

<a name="OG.graph.Canvas+onGroup"></a>

##### canvas.onGroup(callbackFunc)
Shape 이 Grouping 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, groupElement) |

<a name="OG.graph.Canvas+onUnGroup"></a>

##### canvas.onUnGroup(callbackFunc)
Shape 이 UnGrouping 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, ungroupedElements) |

<a name="OG.graph.Canvas+onCollapsed"></a>

##### canvas.onCollapsed(callbackFunc)
Group 이 Collapse 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, element) |

<a name="OG.graph.Canvas+onExpanded"></a>

##### canvas.onExpanded(callbackFunc)
Group 이 Expand 되었을 때의 이벤트 리스너

**Kind**: instance method of <code>[Canvas](#OG.graph.Canvas)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>function</code> | 콜백함수(event, element) |

<a name="OG.handler"></a>

### OG.handler : <code>object</code>
**Kind**: static namespace of <code>[OG](#OG)</code>  

* [.handler](#OG.handler) : <code>object</code>
    * [.EventHandler](#OG.handler.EventHandler)
        * [new OG.handler.EventHandler(renderer, config)](#new_OG.handler.EventHandler_new)
        * [.enableEditLabel(element)](#OG.handler.EventHandler+enableEditLabel)
        * [.setMovable(element, isMovable)](#OG.handler.EventHandler+setMovable)
        * [.setConnectable(element, guide, isConnectable)](#OG.handler.EventHandler+setConnectable)
        * [.setResizable(element, guide, isResizable)](#OG.handler.EventHandler+setResizable)
        * [.setClickSelectable(element, isSelectable)](#OG.handler.EventHandler+setClickSelectable)
        * [.setGroupDropable(element)](#OG.handler.EventHandler+setGroupDropable)
        * [.setDragSelectable(isSelectable)](#OG.handler.EventHandler+setDragSelectable)
        * [.setEnableHotKey(isEnableHotKey)](#OG.handler.EventHandler+setEnableHotKey)
        * [.enableRootContextMenu()](#OG.handler.EventHandler+enableRootContextMenu)
        * [.enableShapeContextMenu()](#OG.handler.EventHandler+enableShapeContextMenu)
        * [.selectShape(element)](#OG.handler.EventHandler+selectShape)
        * [.selectShapes(element)](#OG.handler.EventHandler+selectShapes)
        * [.bringToFront()](#OG.handler.EventHandler+bringToFront)
        * [.sendToBack()](#OG.handler.EventHandler+sendToBack)
        * [.bringForward()](#OG.handler.EventHandler+bringForward)
        * [.sendBackward()](#OG.handler.EventHandler+sendBackward)
        * [.deleteSelectedShape()](#OG.handler.EventHandler+deleteSelectedShape)
        * [.changeShape()](#OG.handler.EventHandler+changeShape)
        * [.showProperty()](#OG.handler.EventHandler+showProperty)
        * [.selectAll()](#OG.handler.EventHandler+selectAll)
        * [.copySelectedShape()](#OG.handler.EventHandler+copySelectedShape)
        * [.cutSelectedShape()](#OG.handler.EventHandler+cutSelectedShape)
        * [.pasteSelectedShape()](#OG.handler.EventHandler+pasteSelectedShape)
        * [.duplicateSelectedShape()](#OG.handler.EventHandler+duplicateSelectedShape)
        * [.groupSelectedShape()](#OG.handler.EventHandler+groupSelectedShape)
        * [.ungroupSelectedShape()](#OG.handler.EventHandler+ungroupSelectedShape)
        * [.rotateSelectedShape(angle)](#OG.handler.EventHandler+rotateSelectedShape)
        * [.setLineWidthSelectedShape(lineWidth)](#OG.handler.EventHandler+setLineWidthSelectedShape)
        * [.setLineColorSelectedShape(lineColor)](#OG.handler.EventHandler+setLineColorSelectedShape)
        * [.setLoopTypeSelectedShape(lineType)](#OG.handler.EventHandler+setLoopTypeSelectedShape)
        * [.setLineStyleSelectedShape(lineStyle)](#OG.handler.EventHandler+setLineStyleSelectedShape)
        * [.setArrowStartSelectedShape(arrowType)](#OG.handler.EventHandler+setArrowStartSelectedShape)
        * [.setArrowEndSelectedShape(arrowType)](#OG.handler.EventHandler+setArrowEndSelectedShape)
        * [.setFillColorSelectedShape(fillColor)](#OG.handler.EventHandler+setFillColorSelectedShape)
        * [.setFontFamilySelectedShape(fontFamily)](#OG.handler.EventHandler+setFontFamilySelectedShape)
        * [.setFontSizeSelectedShape(fontSize)](#OG.handler.EventHandler+setFontSizeSelectedShape)
        * [.setFontColorSelectedShape(fontColor)](#OG.handler.EventHandler+setFontColorSelectedShape)
        * [.setFontWeightSelectedShape(fontWeight)](#OG.handler.EventHandler+setFontWeightSelectedShape)
        * [.setFontStyleSelectedShape(fontStyle)](#OG.handler.EventHandler+setFontStyleSelectedShape)
        * [.setTextDecorationSelectedShape(textDecoration)](#OG.handler.EventHandler+setTextDecorationSelectedShape)
        * [.setLabelDirectionSelectedShape(labelDirection)](#OG.handler.EventHandler+setLabelDirectionSelectedShape)
        * [.setLabelAngleSelectedShape(labelAngle)](#OG.handler.EventHandler+setLabelAngleSelectedShape)
        * [.setLabelPositionSelectedShape(labelPosition)](#OG.handler.EventHandler+setLabelPositionSelectedShape)
        * [.setLabelVerticalSelectedShape(verticalAlign)](#OG.handler.EventHandler+setLabelVerticalSelectedShape)
        * [.setLabelHorizontalSelectedShape(horizontalAlign)](#OG.handler.EventHandler+setLabelHorizontalSelectedShape)
        * [.setLabelSelectedShape(label)](#OG.handler.EventHandler+setLabelSelectedShape)
        * [.setEdgeFromLabelSelectedShape(label)](#OG.handler.EventHandler+setEdgeFromLabelSelectedShape)
        * [.setEdgeToLabelSelectedShape(label)](#OG.handler.EventHandler+setEdgeToLabelSelectedShape)
        * [.zoomIn()](#OG.handler.EventHandler+zoomIn)
        * [.zoomOut()](#OG.handler.EventHandler+zoomOut)
        * [.fitWindow()](#OG.handler.EventHandler+fitWindow)
        * [.setConnectGuide(element, isConnectable)](#OG.handler.EventHandler+setConnectGuide)

<a name="OG.handler.EventHandler"></a>

#### handler.EventHandler
**Kind**: static class of <code>[handler](#OG.handler)</code>  
**Requires**: <code>module:OG.renderer.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.EventHandler](#OG.handler.EventHandler)
    * [new OG.handler.EventHandler(renderer, config)](#new_OG.handler.EventHandler_new)
    * [.enableEditLabel(element)](#OG.handler.EventHandler+enableEditLabel)
    * [.setMovable(element, isMovable)](#OG.handler.EventHandler+setMovable)
    * [.setConnectable(element, guide, isConnectable)](#OG.handler.EventHandler+setConnectable)
    * [.setResizable(element, guide, isResizable)](#OG.handler.EventHandler+setResizable)
    * [.setClickSelectable(element, isSelectable)](#OG.handler.EventHandler+setClickSelectable)
    * [.setGroupDropable(element)](#OG.handler.EventHandler+setGroupDropable)
    * [.setDragSelectable(isSelectable)](#OG.handler.EventHandler+setDragSelectable)
    * [.setEnableHotKey(isEnableHotKey)](#OG.handler.EventHandler+setEnableHotKey)
    * [.enableRootContextMenu()](#OG.handler.EventHandler+enableRootContextMenu)
    * [.enableShapeContextMenu()](#OG.handler.EventHandler+enableShapeContextMenu)
    * [.selectShape(element)](#OG.handler.EventHandler+selectShape)
    * [.selectShapes(element)](#OG.handler.EventHandler+selectShapes)
    * [.bringToFront()](#OG.handler.EventHandler+bringToFront)
    * [.sendToBack()](#OG.handler.EventHandler+sendToBack)
    * [.bringForward()](#OG.handler.EventHandler+bringForward)
    * [.sendBackward()](#OG.handler.EventHandler+sendBackward)
    * [.deleteSelectedShape()](#OG.handler.EventHandler+deleteSelectedShape)
    * [.changeShape()](#OG.handler.EventHandler+changeShape)
    * [.showProperty()](#OG.handler.EventHandler+showProperty)
    * [.selectAll()](#OG.handler.EventHandler+selectAll)
    * [.copySelectedShape()](#OG.handler.EventHandler+copySelectedShape)
    * [.cutSelectedShape()](#OG.handler.EventHandler+cutSelectedShape)
    * [.pasteSelectedShape()](#OG.handler.EventHandler+pasteSelectedShape)
    * [.duplicateSelectedShape()](#OG.handler.EventHandler+duplicateSelectedShape)
    * [.groupSelectedShape()](#OG.handler.EventHandler+groupSelectedShape)
    * [.ungroupSelectedShape()](#OG.handler.EventHandler+ungroupSelectedShape)
    * [.rotateSelectedShape(angle)](#OG.handler.EventHandler+rotateSelectedShape)
    * [.setLineWidthSelectedShape(lineWidth)](#OG.handler.EventHandler+setLineWidthSelectedShape)
    * [.setLineColorSelectedShape(lineColor)](#OG.handler.EventHandler+setLineColorSelectedShape)
    * [.setLoopTypeSelectedShape(lineType)](#OG.handler.EventHandler+setLoopTypeSelectedShape)
    * [.setLineStyleSelectedShape(lineStyle)](#OG.handler.EventHandler+setLineStyleSelectedShape)
    * [.setArrowStartSelectedShape(arrowType)](#OG.handler.EventHandler+setArrowStartSelectedShape)
    * [.setArrowEndSelectedShape(arrowType)](#OG.handler.EventHandler+setArrowEndSelectedShape)
    * [.setFillColorSelectedShape(fillColor)](#OG.handler.EventHandler+setFillColorSelectedShape)
    * [.setFontFamilySelectedShape(fontFamily)](#OG.handler.EventHandler+setFontFamilySelectedShape)
    * [.setFontSizeSelectedShape(fontSize)](#OG.handler.EventHandler+setFontSizeSelectedShape)
    * [.setFontColorSelectedShape(fontColor)](#OG.handler.EventHandler+setFontColorSelectedShape)
    * [.setFontWeightSelectedShape(fontWeight)](#OG.handler.EventHandler+setFontWeightSelectedShape)
    * [.setFontStyleSelectedShape(fontStyle)](#OG.handler.EventHandler+setFontStyleSelectedShape)
    * [.setTextDecorationSelectedShape(textDecoration)](#OG.handler.EventHandler+setTextDecorationSelectedShape)
    * [.setLabelDirectionSelectedShape(labelDirection)](#OG.handler.EventHandler+setLabelDirectionSelectedShape)
    * [.setLabelAngleSelectedShape(labelAngle)](#OG.handler.EventHandler+setLabelAngleSelectedShape)
    * [.setLabelPositionSelectedShape(labelPosition)](#OG.handler.EventHandler+setLabelPositionSelectedShape)
    * [.setLabelVerticalSelectedShape(verticalAlign)](#OG.handler.EventHandler+setLabelVerticalSelectedShape)
    * [.setLabelHorizontalSelectedShape(horizontalAlign)](#OG.handler.EventHandler+setLabelHorizontalSelectedShape)
    * [.setLabelSelectedShape(label)](#OG.handler.EventHandler+setLabelSelectedShape)
    * [.setEdgeFromLabelSelectedShape(label)](#OG.handler.EventHandler+setEdgeFromLabelSelectedShape)
    * [.setEdgeToLabelSelectedShape(label)](#OG.handler.EventHandler+setEdgeToLabelSelectedShape)
    * [.zoomIn()](#OG.handler.EventHandler+zoomIn)
    * [.zoomOut()](#OG.handler.EventHandler+zoomOut)
    * [.fitWindow()](#OG.handler.EventHandler+fitWindow)
    * [.setConnectGuide(element, isConnectable)](#OG.handler.EventHandler+setConnectGuide)

<a name="new_OG.handler.EventHandler_new"></a>

##### new OG.handler.EventHandler(renderer, config)
Event Handler


| Param | Type | Description |
| --- | --- | --- |
| renderer | <code>[IRenderer](#OG.renderer.IRenderer)</code> | 렌더러 |
| config | <code>Object</code> | Configuration |

<a name="OG.handler.EventHandler+enableEditLabel"></a>

##### eventHandler.enableEditLabel(element)
주어진 Shape Element 의 라벨을 수정 가능하도록 한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape Element |

<a name="OG.handler.EventHandler+setMovable"></a>

##### eventHandler.setMovable(element, isMovable)
Shape 엘리먼트의 이동 가능여부를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape 엘리먼트 |
| isMovable | <code>Boolean</code> | 가능여부 |

<a name="OG.handler.EventHandler+setConnectable"></a>

##### eventHandler.setConnectable(element, guide, isConnectable)
Shape 엘리먼트의 라인모양을 클릭하여 Shape 끼리 커넥트가 가능하게 한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape 엘리먼트 |
| guide | <code>Object</code> | JSON 포맷 가이드 정보 |
| isConnectable | <code>Boolean</code> | 가능여부 |

<a name="OG.handler.EventHandler+setResizable"></a>

##### eventHandler.setResizable(element, guide, isResizable)
Shape 엘리먼트의 리사이즈 가능여부를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape 엘리먼트 |
| guide | <code>Object</code> | JSON 포맷 가이드 정보 |
| isResizable | <code>Boolean</code> | 가능여부 |

<a name="OG.handler.EventHandler+setClickSelectable"></a>

##### eventHandler.setClickSelectable(element, isSelectable)
주어진 Shape Element 를 마우스 클릭하여 선택가능하도록 한다.
선택가능해야 리사이즈가 가능하다.
선택시 커넥트 모드일 경우 connect 가능하게 한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape Element |
| isSelectable | <code>Boolean</code> | 선택가능여부 |

<a name="OG.handler.EventHandler+setGroupDropable"></a>

##### eventHandler.setGroupDropable(element)
Lane,Pool 엘리먼트가 새로 생성될 시 그룹을 맺도록 한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape 엘리먼트 |

<a name="OG.handler.EventHandler+setDragSelectable"></a>

##### eventHandler.setDragSelectable(isSelectable)
마우스 드래그 영역지정 선택가능여부를 설정한다.
선택가능해야 리사이즈가 가능하다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| isSelectable | <code>Boolean</code> | 선택가능여부 |

<a name="OG.handler.EventHandler+setEnableHotKey"></a>

##### eventHandler.setEnableHotKey(isEnableHotKey)
HotKey 사용 가능여부를 설정한다. (Delete, Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+G, Ctrl+U)

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| isEnableHotKey | <code>Boolean</code> | 핫키가능여부 |

<a name="OG.handler.EventHandler+enableRootContextMenu"></a>

##### eventHandler.enableRootContextMenu()
캔버스에 마우스 우클릭 메뉴를 가능하게 한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+enableShapeContextMenu"></a>

##### eventHandler.enableShapeContextMenu()
Shape 에 마우스 우클릭 메뉴를 가능하게 한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+selectShape"></a>

##### eventHandler.selectShape(element)
주어진 Shape Element 를 선택된 상태로 되게 한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape 엘리먼트 |

<a name="OG.handler.EventHandler+selectShapes"></a>

##### eventHandler.selectShapes(element)
주어진 다수의 Shape Element 를 선택된 상태로 되게 한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape 엘리먼트 |

<a name="OG.handler.EventHandler+bringToFront"></a>

##### eventHandler.bringToFront()
메뉴 : 맨 앞으로 가져오기

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+sendToBack"></a>

##### eventHandler.sendToBack()
메뉴 : 맨 뒤로 보내기

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+bringForward"></a>

##### eventHandler.bringForward()
메뉴 : 앞으로 가져오기

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+sendBackward"></a>

##### eventHandler.sendBackward()
메뉴 : 뒤로 보내기

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+deleteSelectedShape"></a>

##### eventHandler.deleteSelectedShape()
메뉴 : 선택된 Shape 들을 삭제한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+changeShape"></a>

##### eventHandler.changeShape()
메뉴 : Shape를 선택한 모양으로 변경한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+showProperty"></a>

##### eventHandler.showProperty()
메뉴 : 속성 창 이벤트

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+selectAll"></a>

##### eventHandler.selectAll()
메뉴 : 모든 Shape 들을 선택한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+copySelectedShape"></a>

##### eventHandler.copySelectedShape()
메뉴 : 선택된 Shape 들을 복사한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+cutSelectedShape"></a>

##### eventHandler.cutSelectedShape()
메뉴 : 선택된 Shape 들을 잘라내기한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+pasteSelectedShape"></a>

##### eventHandler.pasteSelectedShape()
메뉴 : 선택된 Shape 들을 붙여넣기 한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+duplicateSelectedShape"></a>

##### eventHandler.duplicateSelectedShape()
메뉴 : 선택된 Shape 들을 복제한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+groupSelectedShape"></a>

##### eventHandler.groupSelectedShape()
메뉴 : 선택된 Shape 들을 그룹핑한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+ungroupSelectedShape"></a>

##### eventHandler.ungroupSelectedShape()
메뉴 : 선택된 Shape 들을 그룹해제한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+rotateSelectedShape"></a>

##### eventHandler.rotateSelectedShape(angle)
메뉴 : 선택된 Shape 들을 회전한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | 회전각도 |

<a name="OG.handler.EventHandler+setLineWidthSelectedShape"></a>

##### eventHandler.setLineWidthSelectedShape(lineWidth)
메뉴 : 선택된 Shape 들의 Line Width 를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type |
| --- | --- |
| lineWidth | <code>Number</code> | 

<a name="OG.handler.EventHandler+setLineColorSelectedShape"></a>

##### eventHandler.setLineColorSelectedShape(lineColor)
메뉴 : 선택된 Shape 들의 Line Color 를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type |
| --- | --- |
| lineColor | <code>String</code> | 

<a name="OG.handler.EventHandler+setLoopTypeSelectedShape"></a>

##### eventHandler.setLoopTypeSelectedShape(lineType)
메뉴 : 선택된 Shape 들의 Line Type 을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lineType | <code>String</code> | ['straight' | 'plain' | 'bezier'] |

<a name="OG.handler.EventHandler+setLineStyleSelectedShape"></a>

##### eventHandler.setLineStyleSelectedShape(lineStyle)
메뉴 : 선택된 Shape 들의 Line Style 을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lineStyle | <code>String</code> | ['' | '-' | '.' | '-.' | '-..' | '. ' | '- ' | '--' | '- .' | '--.' | '--..'] |

<a name="OG.handler.EventHandler+setArrowStartSelectedShape"></a>

##### eventHandler.setArrowStartSelectedShape(arrowType)
메뉴 : 선택된 Edge Shape 들의 시작점 화살표 스타일을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| arrowType | <code>String</code> | ['block' | 'open_block' | 'classic' | 'diamond' | 'open_diamond' | 'open' | 'oval' | 'open_oval'] |

<a name="OG.handler.EventHandler+setArrowEndSelectedShape"></a>

##### eventHandler.setArrowEndSelectedShape(arrowType)
메뉴 : 선택된 Edge Shape 들의 끝점 화살표 스타일을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| arrowType | <code>String</code> | [] ['block' | 'open_block' | 'classic' | 'diamond' | 'open_diamond' | 'open' | 'oval' | 'open_oval'] |

<a name="OG.handler.EventHandler+setFillColorSelectedShape"></a>

##### eventHandler.setFillColorSelectedShape(fillColor)
메뉴 : 선택된 Shape 들의 Fill Color 를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type |
| --- | --- |
| fillColor | <code>String</code> | 

<a name="OG.handler.EventHandler+setFontFamilySelectedShape"></a>

##### eventHandler.setFontFamilySelectedShape(fontFamily)
메뉴 : 선택된 Shape 들의 Font Family 를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type |
| --- | --- |
| fontFamily | <code>String</code> | 

<a name="OG.handler.EventHandler+setFontSizeSelectedShape"></a>

##### eventHandler.setFontSizeSelectedShape(fontSize)
메뉴 : 선택된 Shape 들의 Font Size 를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type |
| --- | --- |
| fontSize | <code>Number</code> | 

<a name="OG.handler.EventHandler+setFontColorSelectedShape"></a>

##### eventHandler.setFontColorSelectedShape(fontColor)
메뉴 : 선택된 Shape 들의 Font Color 를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type |
| --- | --- |
| fontColor | <code>String</code> | 

<a name="OG.handler.EventHandler+setFontWeightSelectedShape"></a>

##### eventHandler.setFontWeightSelectedShape(fontWeight)
메뉴 : 선택된 Shape 들의 Font Weight 를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fontWeight | <code>String</code> | ['bold' | 'normal'] |

<a name="OG.handler.EventHandler+setFontStyleSelectedShape"></a>

##### eventHandler.setFontStyleSelectedShape(fontStyle)
메뉴 : 선택된 Shape 들의 Font Style 을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fontStyle | <code>String</code> | ['italic' | 'normal'] |

<a name="OG.handler.EventHandler+setTextDecorationSelectedShape"></a>

##### eventHandler.setTextDecorationSelectedShape(textDecoration)
메뉴 : 선택된 Shape 들의 Text Decoration 을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| textDecoration | <code>String</code> | ['underline' | 'none'] |

<a name="OG.handler.EventHandler+setLabelDirectionSelectedShape"></a>

##### eventHandler.setLabelDirectionSelectedShape(labelDirection)
메뉴 : 선택된 Shape 들의 Label Direction 을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| labelDirection | <code>String</code> | ['vertical' | 'horizontal'] |

<a name="OG.handler.EventHandler+setLabelAngleSelectedShape"></a>

##### eventHandler.setLabelAngleSelectedShape(labelAngle)
메뉴 : 선택된 Shape 들의 Label Angle 을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type |
| --- | --- |
| labelAngle | <code>Number</code> | 

<a name="OG.handler.EventHandler+setLabelPositionSelectedShape"></a>

##### eventHandler.setLabelPositionSelectedShape(labelPosition)
메뉴 : 선택된 Shape 들의 Label Position 을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| labelPosition | <code>String</code> | ['top' | 'bottom' | 'left' | 'right' | 'center'] |

<a name="OG.handler.EventHandler+setLabelVerticalSelectedShape"></a>

##### eventHandler.setLabelVerticalSelectedShape(verticalAlign)
메뉴 : 선택된 Shape 들의 라벨 Vertical Align 를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| verticalAlign | <code>String</code> | ['top' | 'middle' | 'bottom'] |

<a name="OG.handler.EventHandler+setLabelHorizontalSelectedShape"></a>

##### eventHandler.setLabelHorizontalSelectedShape(horizontalAlign)
메뉴 : 선택된 Shape 들의 라벨 Horizontal Align 를 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| horizontalAlign | <code>String</code> | ['start' | 'middle' | 'end'] |

<a name="OG.handler.EventHandler+setLabelSelectedShape"></a>

##### eventHandler.setLabelSelectedShape(label)
메뉴 : 선택된 Shape 의 라벨을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type |
| --- | --- |
| label | <code>String</code> | 

<a name="OG.handler.EventHandler+setEdgeFromLabelSelectedShape"></a>

##### eventHandler.setEdgeFromLabelSelectedShape(label)
메뉴 : 선택된 Edge Shape 의 시작점 라벨을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type |
| --- | --- |
| label | <code>String</code> | 

<a name="OG.handler.EventHandler+setEdgeToLabelSelectedShape"></a>

##### eventHandler.setEdgeToLabelSelectedShape(label)
메뉴 : 선택된 Edge Shape 의 끝점 라벨을 설정한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type |
| --- | --- |
| label | <code>String</code> | 

<a name="OG.handler.EventHandler+zoomIn"></a>

##### eventHandler.zoomIn()
메뉴 : Zoom In

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+zoomOut"></a>

##### eventHandler.zoomOut()
메뉴 : Zoom Out

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+fitWindow"></a>

##### eventHandler.fitWindow()
메뉴 : 그려진 Shape 들을 캔버스 사이즈에 맞게 조절한다.

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  
<a name="OG.handler.EventHandler+setConnectGuide"></a>

##### eventHandler.setConnectGuide(element, isConnectable)
Shape 엘리먼트의 setConnectGuide 에 관련된 이벤트

**Kind**: instance method of <code>[EventHandler](#OG.handler.EventHandler)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape 엘리먼트 |
| isConnectable | <code>Boolean</code> | 가능여부 |

<a name="OG.layout"></a>

### OG.layout : <code>object</code>
**Kind**: static namespace of <code>[OG](#OG)</code>  
<a name="OG.renderer"></a>

### OG.renderer : <code>object</code>
**Kind**: static namespace of <code>[OG](#OG)</code>  

* [.renderer](#OG.renderer) : <code>object</code>
    * [.IRenderer](#OG.renderer.IRenderer)
        * [new OG.renderer.IRenderer(container, containerSize, backgroundColor, backgroundImage, config)](#new_OG.renderer.IRenderer_new)
        * [.drawShape(position, shape, size, style, id)](#OG.renderer.IRenderer+drawShape) ⇒ <code>Element</code>
        * [.drawGeom(geometry, style)](#OG.renderer.IRenderer+drawGeom) ⇒ <code>Element</code>
        * [.drawText(position, text, size, style, id)](#OG.renderer.IRenderer+drawText) ⇒ <code>Element</code>
        * [.drawImage(position, imgSrc, size, style, id)](#OG.renderer.IRenderer+drawImage) ⇒ <code>Element</code>
        * [.drawEdge(line, style, id, isSelf)](#OG.renderer.IRenderer+drawEdge) ⇒ <code>Element</code>
        * [.drawLabel(shapeElement, text, style)](#OG.renderer.IRenderer+drawLabel) ⇒ <code>Element</code>
        * [.drawEdgeLabel(shapeElement, text, type)](#OG.renderer.IRenderer+drawEdgeLabel) ⇒ <code>Element</code>
        * [.redrawShape(element, excludeEdgeId)](#OG.renderer.IRenderer+redrawShape)
        * [.redrawConnectedEdge(element)](#OG.renderer.IRenderer+redrawConnectedEdge)
        * [.connect(fromTerminal, toTerminal, edge, style, label, preventTrigger)](#OG.renderer.IRenderer+connect) ⇒ <code>Element</code>
        * [.disconnect(element)](#OG.renderer.IRenderer+disconnect)
        * [.drawDropOverGuide(element)](#OG.renderer.IRenderer+drawDropOverGuide)
        * [.drawGuide(element)](#OG.renderer.IRenderer+drawGuide) ⇒ <code>Object</code>
        * [.removeGuide(element)](#OG.renderer.IRenderer+removeGuide)
        * [.removeAllGuide()](#OG.renderer.IRenderer+removeAllGuide)
        * [.removeConnectGuide(element)](#OG.renderer.IRenderer+removeConnectGuide)
        * [.removeAllConnectGuide()](#OG.renderer.IRenderer+removeAllConnectGuide)
        * [.removeOtherConnectGuide(element)](#OG.renderer.IRenderer+removeOtherConnectGuide)
        * [.removeAllVirtualEdge()](#OG.renderer.IRenderer+removeAllVirtualEdge)
        * [.drawEdgeGuide(element)](#OG.renderer.IRenderer+drawEdgeGuide) ⇒ <code>Object</code>
        * [.drawRubberBand(position, size, style)](#OG.renderer.IRenderer+drawRubberBand) ⇒ <code>Element</code>
        * [.removeRubberBand(root)](#OG.renderer.IRenderer+removeRubberBand)
        * [.drawDraggableGuide(element)](#OG.renderer.IRenderer+drawDraggableGuide) ⇒ <code>Element</code>
        * [.drawCollapseGuide(element)](#OG.renderer.IRenderer+drawCollapseGuide) ⇒ <code>Element</code>
        * [.removeCollapseGuide(element)](#OG.renderer.IRenderer+removeCollapseGuide)
        * [.group(elements)](#OG.renderer.IRenderer+group) ⇒ <code>Element</code>
        * [.ungroup(groupElements)](#OG.renderer.IRenderer+ungroup) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.addToGroup(groupElement, elements)](#OG.renderer.IRenderer+addToGroup)
        * [.collapse(element)](#OG.renderer.IRenderer+collapse)
        * [.expand(element)](#OG.renderer.IRenderer+expand)
        * [.clear()](#OG.renderer.IRenderer+clear)
        * [.removeShape(element)](#OG.renderer.IRenderer+removeShape)
        * [.remove(element)](#OG.renderer.IRenderer+remove)
        * [.removeChild(element)](#OG.renderer.IRenderer+removeChild)
        * [.getRootElement()](#OG.renderer.IRenderer+getRootElement) ⇒ <code>Element</code>
        * [.getRootGroup()](#OG.renderer.IRenderer+getRootGroup) ⇒ <code>Element</code>
        * [.getElementByPoint(position)](#OG.renderer.IRenderer+getElementByPoint) ⇒ <code>Element</code>
        * [.getElementsByBBox(envelope)](#OG.renderer.IRenderer+getElementsByBBox) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.setAttr(element, attribute)](#OG.renderer.IRenderer+setAttr)
        * [.getAttr(element, attrName)](#OG.renderer.IRenderer+getAttr) ⇒ <code>Object</code>
        * [.setShapeStyle(element, style)](#OG.renderer.IRenderer+setShapeStyle)
        * [.toFront(element)](#OG.renderer.IRenderer+toFront)
        * [.toBack(element)](#OG.renderer.IRenderer+toBack)
        * [.bringForward(element)](#OG.renderer.IRenderer+bringForward)
        * [.sendBackward(element)](#OG.renderer.IRenderer+sendBackward)
        * [.getCanvasSize()](#OG.renderer.IRenderer+getCanvasSize) ⇒ <code>Array.&lt;Number&gt;</code>
        * [.setCanvasSize(size)](#OG.renderer.IRenderer+setCanvasSize)
        * [.fitCanvasSize(minSize, fitScale)](#OG.renderer.IRenderer+fitCanvasSize)
        * [.setViewBox(position, size, isFit)](#OG.renderer.IRenderer+setViewBox)
        * [.getScale()](#OG.renderer.IRenderer+getScale) ⇒ <code>Number</code>
        * [.setScale(scale)](#OG.renderer.IRenderer+setScale)
        * [.show(element)](#OG.renderer.IRenderer+show)
        * [.hide(element)](#OG.renderer.IRenderer+hide)
        * [.appendChild(srcElement, targetElement)](#OG.renderer.IRenderer+appendChild) ⇒ <code>Element</code>
        * [.insertAfter(srcElement, targetElement)](#OG.renderer.IRenderer+insertAfter) ⇒ <code>Element</code>
        * [.insertBefore(srcElement, targetElement)](#OG.renderer.IRenderer+insertBefore) ⇒ <code>Element</code>
        * [.move(element, offset)](#OG.renderer.IRenderer+move) ⇒ <code>Element</code>
        * [.moveCentroid(element, position)](#OG.renderer.IRenderer+moveCentroid) ⇒ <code>Element</code>
        * [.rotate(element, angle)](#OG.renderer.IRenderer+rotate) ⇒ <code>Element</code>
        * [.resize(element, offset)](#OG.renderer.IRenderer+resize) ⇒ <code>Element</code>
        * [.resizeBox(element, size)](#OG.renderer.IRenderer+resizeBox) ⇒ <code>Element</code>
        * [.clone(element)](#OG.renderer.IRenderer+clone) ⇒ <code>Element</code>
        * [.getElementById(id)](#OG.renderer.IRenderer+getElementById) ⇒ <code>Element</code>
        * [.getElementsByType(shapeType, excludeType)](#OG.renderer.IRenderer+getElementsByType) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getBBox(element)](#OG.renderer.IRenderer+getBBox) ⇒ <code>Object</code>
        * [.getRootBBox()](#OG.renderer.IRenderer+getRootBBox) ⇒ <code>Object</code>
        * [.getRealRootBBox()](#OG.renderer.IRenderer+getRealRootBBox) ⇒ <code>Object</code>
        * [.getContainer()](#OG.renderer.IRenderer+getContainer) ⇒ <code>Element</code>
        * [.isSVG()](#OG.renderer.IRenderer+isSVG) ⇒ <code>Boolean</code>
        * [.isVML()](#OG.renderer.IRenderer+isVML) ⇒ <code>Boolean</code>
        * [.getPrevEdges(element)](#OG.renderer.IRenderer+getPrevEdges) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getNextEdges(element)](#OG.renderer.IRenderer+getNextEdges) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getPrevShapes(element)](#OG.renderer.IRenderer+getPrevShapes) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getPrevShapeIds(element)](#OG.renderer.IRenderer+getPrevShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
        * [.getNextShapes(element)](#OG.renderer.IRenderer+getNextShapes) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getNextShapeIds(element)](#OG.renderer.IRenderer+getNextShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
        * [.getConnectGuideElements(Element)](#OG.renderer.IRenderer+getConnectGuideElements) ⇒ <code>Array</code>
        * [.isTopGroup(Element)](#OG.renderer.IRenderer+isTopGroup) ⇒ <code>boolean</code>
        * [.getParent(element)](#OG.renderer.IRenderer+getParent) ⇒ <code>Element</code>
        * [.getChilds(element)](#OG.renderer.IRenderer+getChilds) ⇒ <code>Array</code>
        * [.isGroup(element)](#OG.renderer.IRenderer+isGroup) ⇒ <code>boolean</code>
        * [.getAllShapes()](#OG.renderer.IRenderer+getAllShapes) ⇒ <code>Array</code>
        * [.getAllEdges()](#OG.renderer.IRenderer+getAllEdges) ⇒ <code>Array</code>
        * [.getAllNotEdges()](#OG.renderer.IRenderer+getAllNotEdges) ⇒ <code>Array</code>
        * [.isEdge()](#OG.renderer.IRenderer+isEdge) ⇒ <code>boolean</code>
        * [.isShape()](#OG.renderer.IRenderer+isShape) ⇒ <code>boolean</code>
        * [.initHistory()](#OG.renderer.IRenderer+initHistory)
        * [.addHistory()](#OG.renderer.IRenderer+addHistory)
        * [.undo()](#OG.renderer.IRenderer+undo)
        * [.redo()](#OG.renderer.IRenderer+redo)
    * [.RaphaelRenderer](#OG.renderer.RaphaelRenderer) ⇐ <code>[IRenderer](#OG.renderer.IRenderer)</code>
        * [new OG.renderer.RaphaelRenderer(container, containerSize, backgroundColor, backgroundImage, config)](#new_OG.renderer.RaphaelRenderer_new)
        * [.drawHtml(position, html, size, style, id)](#OG.renderer.RaphaelRenderer+drawHtml) ⇒ <code>Element</code>
        * [._getPointOfInflectionFromEdge()](#OG.renderer.RaphaelRenderer+_getPointOfInflectionFromEdge)
        * [.reconnect(edge)](#OG.renderer.RaphaelRenderer+reconnect) ⇒ <code>Element</code>
        * [.disconnectOneWay(element, connectDirection)](#OG.renderer.RaphaelRenderer+disconnectOneWay)
        * [.drawStickGuide(element, position)](#OG.renderer.RaphaelRenderer+drawStickGuide)
        * [.setTextListInController(element, textList)](#OG.renderer.RaphaelRenderer+setTextListInController)
        * [.getTextListInController(element)](#OG.renderer.RaphaelRenderer+getTextListInController)
        * [.getConnectGuideElements(Element)](#OG.renderer.RaphaelRenderer+getConnectGuideElements) ⇒ <code>Array</code>
        * [.getNotConnectGuideElements(Element)](#OG.renderer.RaphaelRenderer+getNotConnectGuideElements) ⇒ <code>Array</code>
        * [.removeConnectGuide(element)](#OG.renderer.RaphaelRenderer+removeConnectGuide)
        * [.removeAllConnectGuide()](#OG.renderer.RaphaelRenderer+removeAllConnectGuide)
        * [.removeOtherConnectGuide(element)](#OG.renderer.RaphaelRenderer+removeOtherConnectGuide)
        * [.getSpots(element)](#OG.renderer.RaphaelRenderer+getSpots) ⇒ <code>Array</code>
        * [.getCircleSpots(element)](#OG.renderer.RaphaelRenderer+getCircleSpots) ⇒ <code>Array</code>
        * [.createVirtualSpot(x, x, element)](#OG.renderer.RaphaelRenderer+createVirtualSpot) ⇒ <code>Element</code>
        * [.getVirtualSpot(element)](#OG.renderer.RaphaelRenderer+getVirtualSpot) ⇒ <code>Element</code>
        * [.removeVirtualSpot(element)](#OG.renderer.RaphaelRenderer+removeVirtualSpot) ⇒ <code>Element</code>
        * [.selectSpot(선택한)](#OG.renderer.RaphaelRenderer+selectSpot)
        * [.getChildNodes(element)](#OG.renderer.RaphaelRenderer+getChildNodes) ⇒ <code>Array</code>
        * [.trimEdge(element)](#OG.renderer.RaphaelRenderer+trimEdge)
        * [.trimConnectInnerVertice(element)](#OG.renderer.RaphaelRenderer+trimConnectInnerVertice) ⇒ <code>Element</code>
        * [.trimConnectIntersection(element)](#OG.renderer.RaphaelRenderer+trimConnectIntersection) ⇒ <code>Element</code>
        * [.getBoundary(element)](#OG.renderer.RaphaelRenderer+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.setHighlight(element, highlight)](#OG.renderer.RaphaelRenderer+setHighlight)
        * [.removeHighlight(element, highlight)](#OG.renderer.RaphaelRenderer+removeHighlight)
        * [.createTerminalString(Element, point)](#OG.renderer.RaphaelRenderer+createTerminalString) ⇒ <code>String</code>
        * [.createDefaultTerminalString(Element)](#OG.renderer.RaphaelRenderer+createDefaultTerminalString) ⇒ <code>String</code>
        * [.toFrontEdges()](#OG.renderer.RaphaelRenderer+toFrontEdges)
        * [.removeAllEdgeGuide()](#OG.renderer.RaphaelRenderer+removeAllEdgeGuide)
        * [.createVirtualEdge(x, x, targetEle)](#OG.renderer.RaphaelRenderer+createVirtualEdge) ⇒ <code>Element</code>
        * [.updateVirtualEdge(x, x)](#OG.renderer.RaphaelRenderer+updateVirtualEdge)
        * [.getTargetfromVirtualEdge(x, x)](#OG.renderer.RaphaelRenderer+getTargetfromVirtualEdge)
        * [.removeAllVirtualEdge()](#OG.renderer.RaphaelRenderer+removeAllVirtualEdge)
        * [.isLane(Element)](#OG.renderer.RaphaelRenderer+isLane) ⇒ <code>boolean</code>
        * [.isPool(Element)](#OG.renderer.RaphaelRenderer+isPool) ⇒ <code>boolean</code>
        * [.isScopeActivity(Element)](#OG.renderer.RaphaelRenderer+isScopeActivity) ⇒ <code>boolean</code>
        * [.isHorizontalLane(Element)](#OG.renderer.RaphaelRenderer+isHorizontalLane) ⇒ <code>boolean</code>
        * [.isVerticalLane(Element)](#OG.renderer.RaphaelRenderer+isVerticalLane) ⇒ <code>boolean</code>
        * [.isHorizontalPool(Element)](#OG.renderer.RaphaelRenderer+isHorizontalPool) ⇒ <code>boolean</code>
        * [.isVerticalPool(Element)](#OG.renderer.RaphaelRenderer+isVerticalPool) ⇒ <code>boolean</code>
        * [.getChildLane(Element)](#OG.renderer.RaphaelRenderer+getChildLane) ⇒ <code>Array</code>
        * [.enableDivideCount(Element)](#OG.renderer.RaphaelRenderer+enableDivideCount) ⇒ <code>Number</code>
        * [.getExceptTitleLaneArea(Element, boundary)](#OG.renderer.RaphaelRenderer+getExceptTitleLaneArea)
        * [.divideLane(Element, quarterOrder)](#OG.renderer.RaphaelRenderer+divideLane)
        * [.getBaseLanes(Element)](#OG.renderer.RaphaelRenderer+getBaseLanes) ⇒ <code>Array</code>
        * [.getRootLane(Element)](#OG.renderer.RaphaelRenderer+getRootLane) ⇒ <code>Element</code>
        * [.getIndexOfLane(Element)](#OG.renderer.RaphaelRenderer+getIndexOfLane) ⇒ <code>Number</code>
        * [.getDepthOfLane(Element)](#OG.renderer.RaphaelRenderer+getDepthOfLane) ⇒ <code>Number</code>
        * [.reEstablishLane(Element)](#OG.renderer.RaphaelRenderer+reEstablishLane)
        * [.getBoundaryOfElements(elements)](#OG.renderer.RaphaelRenderer+getBoundaryOfElements) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getNearestBaseLaneIndexAsDirection(Element, direction)](#OG.renderer.RaphaelRenderer+getNearestBaseLaneIndexAsDirection) ⇒ <code>Number</code>
        * [.getBoundaryOfInnerShapesGroup(Element)](#OG.renderer.RaphaelRenderer+getBoundaryOfInnerShapesGroup) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
        * [.getSmallestBaseLane(Element, baseLane)](#OG.renderer.RaphaelRenderer+getSmallestBaseLane)
        * [.resizeLane(Element, offset)](#OG.renderer.RaphaelRenderer+resizeLane)
        * [.removeLaneShape(Element)](#OG.renderer.RaphaelRenderer+removeLaneShape)
        * [.getInnerShapesOfLane(Element)](#OG.renderer.RaphaelRenderer+getInnerShapesOfLane)
        * [.fitLaneOrder(Element)](#OG.renderer.RaphaelRenderer+fitLaneOrder)
        * [.getRootGroupOfShape(Element)](#OG.renderer.RaphaelRenderer+getRootGroupOfShape) ⇒ <code>Element</code>
        * [.checkBridgeEdge(Element)](#OG.renderer.RaphaelRenderer+checkBridgeEdge)
        * [.checkAllBridgeEdge()](#OG.renderer.RaphaelRenderer+checkAllBridgeEdge)
        * [.getInnerShapesOfGroup(Element)](#OG.renderer.RaphaelRenderer+getInnerShapesOfGroup)
        * [.getFrontForCoordinate(point)](#OG.renderer.RaphaelRenderer+getFrontForCoordinate) ⇒ <code>Element</code>
        * [.getFrontForBoundary(boundary)](#OG.renderer.RaphaelRenderer+getFrontForBoundary) ⇒ <code>Element</code>
        * [.trimEdgeDirection(Edge, FromShape, ToShape)](#OG.renderer.RaphaelRenderer+trimEdgeDirection) ⇒ <code>Element</code>
        * [.putInnerShapeToPool(Element)](#OG.renderer.RaphaelRenderer+putInnerShapeToPool) ⇒ <code>Element</code>
        * [.setDropablePool(Element)](#OG.renderer.RaphaelRenderer+setDropablePool) ⇒ <code>Element</code>
        * [.offDropablePool()](#OG.renderer.RaphaelRenderer+offDropablePool)
        * [.drawShape(position, shape, size, style, id)](#OG.renderer.IRenderer+drawShape) ⇒ <code>Element</code>
        * [.drawGeom(geometry, style)](#OG.renderer.IRenderer+drawGeom) ⇒ <code>Element</code>
        * [.drawText(position, text, size, style, id)](#OG.renderer.IRenderer+drawText) ⇒ <code>Element</code>
        * [.drawImage(position, imgSrc, size, style, id)](#OG.renderer.IRenderer+drawImage) ⇒ <code>Element</code>
        * [.drawEdge(line, style, id, isSelf)](#OG.renderer.IRenderer+drawEdge) ⇒ <code>Element</code>
        * [.drawLabel(shapeElement, text, style)](#OG.renderer.IRenderer+drawLabel) ⇒ <code>Element</code>
            * [~getCenterOfEdge(element)](#OG.renderer.RaphaelRenderer+drawLabel..getCenterOfEdge) ⇒ <code>OG.Coordinate</code>
        * [.drawEdgeLabel(shapeElement, text, type)](#OG.renderer.IRenderer+drawEdgeLabel) ⇒ <code>Element</code>
        * [.redrawShape(element, excludeEdgeId)](#OG.renderer.IRenderer+redrawShape)
        * [.redrawConnectedEdge(element)](#OG.renderer.IRenderer+redrawConnectedEdge)
        * [.connect(fromTerminal, toTerminal, edge, style, label, preventTrigger)](#OG.renderer.IRenderer+connect) ⇒ <code>Element</code>
        * [.disconnect(element)](#OG.renderer.IRenderer+disconnect)
        * [.drawDropOverGuide(element)](#OG.renderer.IRenderer+drawDropOverGuide)
        * [.drawGuide(element)](#OG.renderer.IRenderer+drawGuide) ⇒ <code>Object</code>
        * [.removeGuide(element)](#OG.renderer.IRenderer+removeGuide)
        * [.removeAllGuide()](#OG.renderer.IRenderer+removeAllGuide)
        * [.drawEdgeGuide(element)](#OG.renderer.IRenderer+drawEdgeGuide) ⇒ <code>Object</code>
        * [.drawRubberBand(position, size, style)](#OG.renderer.IRenderer+drawRubberBand) ⇒ <code>Element</code>
        * [.removeRubberBand(root)](#OG.renderer.IRenderer+removeRubberBand)
        * [.drawDraggableGuide(element)](#OG.renderer.IRenderer+drawDraggableGuide) ⇒ <code>Element</code>
        * [.drawCollapseGuide(element)](#OG.renderer.IRenderer+drawCollapseGuide) ⇒ <code>Element</code>
        * [.removeCollapseGuide(element)](#OG.renderer.IRenderer+removeCollapseGuide)
        * [.group(elements)](#OG.renderer.IRenderer+group) ⇒ <code>Element</code>
        * [.ungroup(groupElements)](#OG.renderer.IRenderer+ungroup) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.addToGroup(groupElement, elements)](#OG.renderer.IRenderer+addToGroup)
        * [.collapse(element)](#OG.renderer.IRenderer+collapse)
        * [.expand(element)](#OG.renderer.IRenderer+expand)
        * [.clear()](#OG.renderer.IRenderer+clear)
        * [.removeShape(element)](#OG.renderer.IRenderer+removeShape)
        * [.remove(element)](#OG.renderer.IRenderer+remove)
        * [.removeChild(element)](#OG.renderer.IRenderer+removeChild)
        * [.getRootElement()](#OG.renderer.IRenderer+getRootElement) ⇒ <code>Element</code>
        * [.getRootGroup()](#OG.renderer.IRenderer+getRootGroup) ⇒ <code>Element</code>
        * [.getElementByPoint(position)](#OG.renderer.IRenderer+getElementByPoint) ⇒ <code>Element</code>
        * [.getElementsByBBox(envelope)](#OG.renderer.IRenderer+getElementsByBBox) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.setAttr(element, attribute)](#OG.renderer.IRenderer+setAttr)
        * [.getAttr(element, attrName)](#OG.renderer.IRenderer+getAttr) ⇒ <code>Object</code>
        * [.setShapeStyle(element, style)](#OG.renderer.IRenderer+setShapeStyle)
        * [.toFront(element)](#OG.renderer.IRenderer+toFront)
        * [.toBack(element)](#OG.renderer.IRenderer+toBack)
        * [.bringForward(element)](#OG.renderer.IRenderer+bringForward)
        * [.sendBackward(element)](#OG.renderer.IRenderer+sendBackward)
        * [.getCanvasSize()](#OG.renderer.IRenderer+getCanvasSize) ⇒ <code>Array.&lt;Number&gt;</code>
        * [.setCanvasSize(size)](#OG.renderer.IRenderer+setCanvasSize)
        * [.fitCanvasSize(minSize, fitScale)](#OG.renderer.IRenderer+fitCanvasSize)
        * [.setViewBox(position, size, isFit)](#OG.renderer.IRenderer+setViewBox)
        * [.getScale()](#OG.renderer.IRenderer+getScale) ⇒ <code>Number</code>
        * [.setScale(scale)](#OG.renderer.IRenderer+setScale)
        * [.show(element)](#OG.renderer.IRenderer+show)
        * [.hide(element)](#OG.renderer.IRenderer+hide)
        * [.appendChild(srcElement, targetElement)](#OG.renderer.IRenderer+appendChild) ⇒ <code>Element</code>
        * [.insertAfter(srcElement, targetElement)](#OG.renderer.IRenderer+insertAfter) ⇒ <code>Element</code>
        * [.insertBefore(srcElement, targetElement)](#OG.renderer.IRenderer+insertBefore) ⇒ <code>Element</code>
        * [.move(element, offset)](#OG.renderer.IRenderer+move) ⇒ <code>Element</code>
        * [.moveCentroid(element, position)](#OG.renderer.IRenderer+moveCentroid) ⇒ <code>Element</code>
        * [.rotate(element, angle)](#OG.renderer.IRenderer+rotate) ⇒ <code>Element</code>
        * [.resize(element, offset)](#OG.renderer.IRenderer+resize) ⇒ <code>Element</code>
        * [.resizeBox(element, size)](#OG.renderer.IRenderer+resizeBox) ⇒ <code>Element</code>
        * [.clone(element)](#OG.renderer.IRenderer+clone) ⇒ <code>Element</code>
        * [.getElementById(id)](#OG.renderer.IRenderer+getElementById) ⇒ <code>Element</code>
        * [.getElementsByType(shapeType, excludeType)](#OG.renderer.IRenderer+getElementsByType) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getBBox(element)](#OG.renderer.IRenderer+getBBox) ⇒ <code>Object</code>
        * [.getRootBBox()](#OG.renderer.IRenderer+getRootBBox) ⇒ <code>Object</code>
        * [.getRealRootBBox()](#OG.renderer.IRenderer+getRealRootBBox) ⇒ <code>Object</code>
        * [.getContainer()](#OG.renderer.IRenderer+getContainer) ⇒ <code>Element</code>
        * [.isSVG()](#OG.renderer.IRenderer+isSVG) ⇒ <code>Boolean</code>
        * [.isVML()](#OG.renderer.IRenderer+isVML) ⇒ <code>Boolean</code>
        * [.getPrevEdges(element)](#OG.renderer.IRenderer+getPrevEdges) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getNextEdges(element)](#OG.renderer.IRenderer+getNextEdges) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getPrevShapes(element)](#OG.renderer.IRenderer+getPrevShapes) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getPrevShapeIds(element)](#OG.renderer.IRenderer+getPrevShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
        * [.getNextShapes(element)](#OG.renderer.IRenderer+getNextShapes) ⇒ <code>Array.&lt;Element&gt;</code>
        * [.getNextShapeIds(element)](#OG.renderer.IRenderer+getNextShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
        * [.isTopGroup(Element)](#OG.renderer.IRenderer+isTopGroup) ⇒ <code>boolean</code>
        * [.getParent(element)](#OG.renderer.IRenderer+getParent) ⇒ <code>Element</code>
        * [.getChilds(element)](#OG.renderer.IRenderer+getChilds) ⇒ <code>Array</code>
        * [.isGroup(element)](#OG.renderer.IRenderer+isGroup) ⇒ <code>boolean</code>
        * [.getAllShapes()](#OG.renderer.IRenderer+getAllShapes) ⇒ <code>Array</code>
        * [.getAllEdges()](#OG.renderer.IRenderer+getAllEdges) ⇒ <code>Array</code>
        * [.getAllNotEdges()](#OG.renderer.IRenderer+getAllNotEdges) ⇒ <code>Array</code>
        * [.isEdge()](#OG.renderer.IRenderer+isEdge) ⇒ <code>boolean</code>
        * [.isShape()](#OG.renderer.IRenderer+isShape) ⇒ <code>boolean</code>
        * [.initHistory()](#OG.renderer.IRenderer+initHistory)
        * [.addHistory()](#OG.renderer.IRenderer+addHistory)
        * [.undo()](#OG.renderer.IRenderer+undo)
        * [.redo()](#OG.renderer.IRenderer+redo)

<a name="OG.renderer.IRenderer"></a>

#### renderer.IRenderer
**Kind**: static class of <code>[renderer](#OG.renderer)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>, <code>module:OG.shape.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.IRenderer](#OG.renderer.IRenderer)
    * [new OG.renderer.IRenderer(container, containerSize, backgroundColor, backgroundImage, config)](#new_OG.renderer.IRenderer_new)
    * [.drawShape(position, shape, size, style, id)](#OG.renderer.IRenderer+drawShape) ⇒ <code>Element</code>
    * [.drawGeom(geometry, style)](#OG.renderer.IRenderer+drawGeom) ⇒ <code>Element</code>
    * [.drawText(position, text, size, style, id)](#OG.renderer.IRenderer+drawText) ⇒ <code>Element</code>
    * [.drawImage(position, imgSrc, size, style, id)](#OG.renderer.IRenderer+drawImage) ⇒ <code>Element</code>
    * [.drawEdge(line, style, id, isSelf)](#OG.renderer.IRenderer+drawEdge) ⇒ <code>Element</code>
    * [.drawLabel(shapeElement, text, style)](#OG.renderer.IRenderer+drawLabel) ⇒ <code>Element</code>
    * [.drawEdgeLabel(shapeElement, text, type)](#OG.renderer.IRenderer+drawEdgeLabel) ⇒ <code>Element</code>
    * [.redrawShape(element, excludeEdgeId)](#OG.renderer.IRenderer+redrawShape)
    * [.redrawConnectedEdge(element)](#OG.renderer.IRenderer+redrawConnectedEdge)
    * [.connect(fromTerminal, toTerminal, edge, style, label, preventTrigger)](#OG.renderer.IRenderer+connect) ⇒ <code>Element</code>
    * [.disconnect(element)](#OG.renderer.IRenderer+disconnect)
    * [.drawDropOverGuide(element)](#OG.renderer.IRenderer+drawDropOverGuide)
    * [.drawGuide(element)](#OG.renderer.IRenderer+drawGuide) ⇒ <code>Object</code>
    * [.removeGuide(element)](#OG.renderer.IRenderer+removeGuide)
    * [.removeAllGuide()](#OG.renderer.IRenderer+removeAllGuide)
    * [.removeConnectGuide(element)](#OG.renderer.IRenderer+removeConnectGuide)
    * [.removeAllConnectGuide()](#OG.renderer.IRenderer+removeAllConnectGuide)
    * [.removeOtherConnectGuide(element)](#OG.renderer.IRenderer+removeOtherConnectGuide)
    * [.removeAllVirtualEdge()](#OG.renderer.IRenderer+removeAllVirtualEdge)
    * [.drawEdgeGuide(element)](#OG.renderer.IRenderer+drawEdgeGuide) ⇒ <code>Object</code>
    * [.drawRubberBand(position, size, style)](#OG.renderer.IRenderer+drawRubberBand) ⇒ <code>Element</code>
    * [.removeRubberBand(root)](#OG.renderer.IRenderer+removeRubberBand)
    * [.drawDraggableGuide(element)](#OG.renderer.IRenderer+drawDraggableGuide) ⇒ <code>Element</code>
    * [.drawCollapseGuide(element)](#OG.renderer.IRenderer+drawCollapseGuide) ⇒ <code>Element</code>
    * [.removeCollapseGuide(element)](#OG.renderer.IRenderer+removeCollapseGuide)
    * [.group(elements)](#OG.renderer.IRenderer+group) ⇒ <code>Element</code>
    * [.ungroup(groupElements)](#OG.renderer.IRenderer+ungroup) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.addToGroup(groupElement, elements)](#OG.renderer.IRenderer+addToGroup)
    * [.collapse(element)](#OG.renderer.IRenderer+collapse)
    * [.expand(element)](#OG.renderer.IRenderer+expand)
    * [.clear()](#OG.renderer.IRenderer+clear)
    * [.removeShape(element)](#OG.renderer.IRenderer+removeShape)
    * [.remove(element)](#OG.renderer.IRenderer+remove)
    * [.removeChild(element)](#OG.renderer.IRenderer+removeChild)
    * [.getRootElement()](#OG.renderer.IRenderer+getRootElement) ⇒ <code>Element</code>
    * [.getRootGroup()](#OG.renderer.IRenderer+getRootGroup) ⇒ <code>Element</code>
    * [.getElementByPoint(position)](#OG.renderer.IRenderer+getElementByPoint) ⇒ <code>Element</code>
    * [.getElementsByBBox(envelope)](#OG.renderer.IRenderer+getElementsByBBox) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.setAttr(element, attribute)](#OG.renderer.IRenderer+setAttr)
    * [.getAttr(element, attrName)](#OG.renderer.IRenderer+getAttr) ⇒ <code>Object</code>
    * [.setShapeStyle(element, style)](#OG.renderer.IRenderer+setShapeStyle)
    * [.toFront(element)](#OG.renderer.IRenderer+toFront)
    * [.toBack(element)](#OG.renderer.IRenderer+toBack)
    * [.bringForward(element)](#OG.renderer.IRenderer+bringForward)
    * [.sendBackward(element)](#OG.renderer.IRenderer+sendBackward)
    * [.getCanvasSize()](#OG.renderer.IRenderer+getCanvasSize) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.setCanvasSize(size)](#OG.renderer.IRenderer+setCanvasSize)
    * [.fitCanvasSize(minSize, fitScale)](#OG.renderer.IRenderer+fitCanvasSize)
    * [.setViewBox(position, size, isFit)](#OG.renderer.IRenderer+setViewBox)
    * [.getScale()](#OG.renderer.IRenderer+getScale) ⇒ <code>Number</code>
    * [.setScale(scale)](#OG.renderer.IRenderer+setScale)
    * [.show(element)](#OG.renderer.IRenderer+show)
    * [.hide(element)](#OG.renderer.IRenderer+hide)
    * [.appendChild(srcElement, targetElement)](#OG.renderer.IRenderer+appendChild) ⇒ <code>Element</code>
    * [.insertAfter(srcElement, targetElement)](#OG.renderer.IRenderer+insertAfter) ⇒ <code>Element</code>
    * [.insertBefore(srcElement, targetElement)](#OG.renderer.IRenderer+insertBefore) ⇒ <code>Element</code>
    * [.move(element, offset)](#OG.renderer.IRenderer+move) ⇒ <code>Element</code>
    * [.moveCentroid(element, position)](#OG.renderer.IRenderer+moveCentroid) ⇒ <code>Element</code>
    * [.rotate(element, angle)](#OG.renderer.IRenderer+rotate) ⇒ <code>Element</code>
    * [.resize(element, offset)](#OG.renderer.IRenderer+resize) ⇒ <code>Element</code>
    * [.resizeBox(element, size)](#OG.renderer.IRenderer+resizeBox) ⇒ <code>Element</code>
    * [.clone(element)](#OG.renderer.IRenderer+clone) ⇒ <code>Element</code>
    * [.getElementById(id)](#OG.renderer.IRenderer+getElementById) ⇒ <code>Element</code>
    * [.getElementsByType(shapeType, excludeType)](#OG.renderer.IRenderer+getElementsByType) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getBBox(element)](#OG.renderer.IRenderer+getBBox) ⇒ <code>Object</code>
    * [.getRootBBox()](#OG.renderer.IRenderer+getRootBBox) ⇒ <code>Object</code>
    * [.getRealRootBBox()](#OG.renderer.IRenderer+getRealRootBBox) ⇒ <code>Object</code>
    * [.getContainer()](#OG.renderer.IRenderer+getContainer) ⇒ <code>Element</code>
    * [.isSVG()](#OG.renderer.IRenderer+isSVG) ⇒ <code>Boolean</code>
    * [.isVML()](#OG.renderer.IRenderer+isVML) ⇒ <code>Boolean</code>
    * [.getPrevEdges(element)](#OG.renderer.IRenderer+getPrevEdges) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getNextEdges(element)](#OG.renderer.IRenderer+getNextEdges) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getPrevShapes(element)](#OG.renderer.IRenderer+getPrevShapes) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getPrevShapeIds(element)](#OG.renderer.IRenderer+getPrevShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
    * [.getNextShapes(element)](#OG.renderer.IRenderer+getNextShapes) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getNextShapeIds(element)](#OG.renderer.IRenderer+getNextShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
    * [.getConnectGuideElements(Element)](#OG.renderer.IRenderer+getConnectGuideElements) ⇒ <code>Array</code>
    * [.isTopGroup(Element)](#OG.renderer.IRenderer+isTopGroup) ⇒ <code>boolean</code>
    * [.getParent(element)](#OG.renderer.IRenderer+getParent) ⇒ <code>Element</code>
    * [.getChilds(element)](#OG.renderer.IRenderer+getChilds) ⇒ <code>Array</code>
    * [.isGroup(element)](#OG.renderer.IRenderer+isGroup) ⇒ <code>boolean</code>
    * [.getAllShapes()](#OG.renderer.IRenderer+getAllShapes) ⇒ <code>Array</code>
    * [.getAllEdges()](#OG.renderer.IRenderer+getAllEdges) ⇒ <code>Array</code>
    * [.getAllNotEdges()](#OG.renderer.IRenderer+getAllNotEdges) ⇒ <code>Array</code>
    * [.isEdge()](#OG.renderer.IRenderer+isEdge) ⇒ <code>boolean</code>
    * [.isShape()](#OG.renderer.IRenderer+isShape) ⇒ <code>boolean</code>
    * [.initHistory()](#OG.renderer.IRenderer+initHistory)
    * [.addHistory()](#OG.renderer.IRenderer+addHistory)
    * [.undo()](#OG.renderer.IRenderer+undo)
    * [.redo()](#OG.renderer.IRenderer+redo)

<a name="new_OG.renderer.IRenderer_new"></a>

##### new OG.renderer.IRenderer(container, containerSize, backgroundColor, backgroundImage, config)
도형의 Style 과 Shape 정보를 통해 캔버스에 렌더링 기능을 정의한 인터페이스


| Param | Type | Description |
| --- | --- | --- |
| container | <code>HTMLElement</code> &#124; <code>String</code> | 컨테이너 DOM element or ID |
| containerSize | <code>Array.&lt;Number&gt;</code> | 컨테이너 Width, Height |
| backgroundColor | <code>String</code> | 캔버스 배경색 |
| backgroundImage | <code>String</code> | 캔버스 배경이미지 |
| config | <code>Object</code> | Configuration |

<a name="OG.renderer.IRenderer+drawShape"></a>

##### iRenderer.drawShape(position, shape, size, style, id) ⇒ <code>Element</code>
Shape 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Group DOM Element with geometry  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(중앙 기준) |
| shape | <code>[IShape](#OG.shape.IShape)</code> | Shape |
| size | <code>Array.&lt;Number&gt;</code> | Shape Width, Height |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| id | <code>String</code> | Element ID 지정 |

**Example**  
```js
renderer.drawShape([100, 100], new OG.CircleShape(), [50, 50], {stroke:'red'});
```
<a name="OG.renderer.IRenderer+drawGeom"></a>

##### iRenderer.drawGeom(geometry, style) ⇒ <code>Element</code>
Geometry 를 캔버스에 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Group DOM Element with geometry  

| Param | Type | Description |
| --- | --- | --- |
| geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 기하 객체 |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |

<a name="OG.renderer.IRenderer+drawText"></a>

##### iRenderer.drawText(position, text, size, style, id) ⇒ <code>Element</code>
Text 를 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
(스타일 'text-anchor': 'start' or 'middle' or 'end' 에 따라 위치 기준이 다름)

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(스타일 'text-anchor': 'start' or 'middle' or 'end' 에 따라 기준이 다름) |
| text | <code>String</code> | 텍스트 |
| size | <code>Array.&lt;Number&gt;</code> | Text Width, Height, Angle |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| id | <code>String</code> | Element ID 지정 |

**Example**  
```js
renderer.drawText([100, 100], 'Hello', null, {'text-anchor':'start'});
```
<a name="OG.renderer.IRenderer+drawImage"></a>

##### iRenderer.drawImage(position, imgSrc, size, style, id) ⇒ <code>Element</code>
Image 를 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(좌상단 기준) |
| imgSrc | <code>String</code> | 이미지경로 |
| size | <code>Array.&lt;Number&gt;</code> | Image Width, Height, Angle |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| id | <code>String</code> | Element ID 지정 |

**Example**  
```js
renderer.drawImage([100, 100], 'img.jpg', [50, 50]);
```
<a name="OG.renderer.IRenderer+drawEdge"></a>

##### iRenderer.drawEdge(line, style, id, isSelf) ⇒ <code>Element</code>
라인을 캔버스에 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Group DOM Element with geometry  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Line](#OG.geometry.Line)</code> | 라인 |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| id | <code>String</code> | Element ID 지정 |
| isSelf | <code>Boolean</code> | 셀프 연결 여부 |

<a name="OG.renderer.IRenderer+drawLabel"></a>

##### iRenderer.drawLabel(shapeElement, text, style) ⇒ <code>Element</code>
Shape 의 Label 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> &#124; <code>String</code> | Shape DOM element or ID |
| text | <code>String</code> | 텍스트 |
| style | <code>Object</code> | 스타일 |

<a name="OG.renderer.IRenderer+drawEdgeLabel"></a>

##### iRenderer.drawEdgeLabel(shapeElement, text, type) ⇒ <code>Element</code>
Edge 의 from, to Label 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> &#124; <code>String</code> | Shape DOM element or ID |
| text | <code>String</code> | 텍스트 |
| type | <code>String</code> | 유형(FROM or TO) |

<a name="OG.renderer.IRenderer+redrawShape"></a>

##### iRenderer.redrawShape(element, excludeEdgeId)
Element 에 저장된 geom, angle, image, text 정보로 shape 을 redraw 한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape 엘리먼트 |
| excludeEdgeId | <code>Array.&lt;String&gt;</code> | redraw 제외할 Edge ID |

<a name="OG.renderer.IRenderer+redrawConnectedEdge"></a>

##### iRenderer.redrawConnectedEdge(element)
Shape 의 연결된 Edge 를 redraw 한다.(이동 또는 리사이즈시)

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.renderer.IRenderer+connect"></a>

##### iRenderer.connect(fromTerminal, toTerminal, edge, style, label, preventTrigger) ⇒ <code>Element</code>
두개의 터미널을 연결하고, 속성정보에 추가한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - 연결된 Edge 엘리먼트  

| Param | Type | Description |
| --- | --- | --- |
| fromTerminal | <code>Element</code> &#124; <code>Array.&lt;Number&gt;</code> | 시작점 (fromTerminal) |
| toTerminal | <code>Element</code> &#124; <code>Array.&lt;Number&gt;</code> | 끝점 (toTerminal) |
| edge | <code>Element</code> | Edge Shape |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| label | <code>String</code> | Label |
| preventTrigger | <code>Boolean</code> | 이벤트 트리거 발생 막기 |

<a name="OG.renderer.IRenderer+disconnect"></a>

##### iRenderer.disconnect(element)
연결속성정보를 삭제한다. Edge 인 경우는 라인만 삭제하고, 일반 Shape 인 경우는 연결된 모든 Edge 를 삭제한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.renderer.IRenderer+drawDropOverGuide"></a>

##### iRenderer.drawDropOverGuide(element)
ID에 해당하는 Element 의 Edge 연결시 Drop Over 가이드를 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+drawGuide"></a>

##### iRenderer.drawGuide(element) ⇒ <code>Object</code>
ID에 해당하는 Element 의 Move & Resize 용 가이드를 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+removeGuide"></a>

##### iRenderer.removeGuide(element)
ID에 해당하는 Element 의 Move & Resize 용 가이드를 제거한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+removeAllGuide"></a>

##### iRenderer.removeAllGuide()
모든 Move & Resize 용 가이드를 제거한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
<a name="OG.renderer.IRenderer+removeConnectGuide"></a>

##### iRenderer.removeConnectGuide(element)
ID에 해당하는 Element 의 Connect Guide 를 제거한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+removeAllConnectGuide"></a>

##### iRenderer.removeAllConnectGuide()
캔버스의 모든 Connect Guide 를 제거한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
<a name="OG.renderer.IRenderer+removeOtherConnectGuide"></a>

##### iRenderer.removeOtherConnectGuide(element)
ID에 해당하는 Element 이외의 모든 Connect Guide 를 제거한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+removeAllVirtualEdge"></a>

##### iRenderer.removeAllVirtualEdge()
캔버스의 가상선을 삭제한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
<a name="OG.renderer.IRenderer+drawEdgeGuide"></a>

##### iRenderer.drawEdgeGuide(element) ⇒ <code>Object</code>
ID에 해당하는 Edge Element 의 Move & Resize 용 가이드를 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+drawRubberBand"></a>

##### iRenderer.drawRubberBand(position, size, style) ⇒ <code>Element</code>
Rectangle 모양의 마우스 드래그 선택 박스 영역을 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(좌상단) |
| size | <code>Array.&lt;Number&gt;</code> | Text Width, Height, Angle |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |

<a name="OG.renderer.IRenderer+removeRubberBand"></a>

##### iRenderer.removeRubberBand(root)
Rectangle 모양의 마우스 드래그 선택 박스 영역을 제거한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>Element</code> | first, rubberBand 정보를 저장한 엘리먼트 |

<a name="OG.renderer.IRenderer+drawDraggableGuide"></a>

##### iRenderer.drawDraggableGuide(element) ⇒ <code>Element</code>
ID에 해당하는 Element 의 Draggable 가이드를 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+drawCollapseGuide"></a>

##### iRenderer.drawCollapseGuide(element) ⇒ <code>Element</code>
ID에 해당하는 Element 의 Collapse 가이드를 드로잉한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+removeCollapseGuide"></a>

##### iRenderer.removeCollapseGuide(element)
ID에 해당하는 Element 의 Collapse 가이드를 제거한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.renderer.IRenderer+group"></a>

##### iRenderer.group(elements) ⇒ <code>Element</code>
주어진 Shape 들을 그룹핑한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Group Shape Element  

| Param | Type |
| --- | --- |
| elements | <code>Array.&lt;Element&gt;</code> | 

<a name="OG.renderer.IRenderer+ungroup"></a>

##### iRenderer.ungroup(groupElements) ⇒ <code>Array.&lt;Element&gt;</code>
주어진 그룹들을 그룹해제한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - ungrouped Elements  

| Param | Type |
| --- | --- |
| groupElements | <code>Array.&lt;Element&gt;</code> | 

<a name="OG.renderer.IRenderer+addToGroup"></a>

##### iRenderer.addToGroup(groupElement, elements)
주어진 Shape 들을 그룹에 추가한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type |
| --- | --- |
| groupElement | <code>Element</code> | 
| elements | <code>Array.&lt;Element&gt;</code> | 

<a name="OG.renderer.IRenderer+collapse"></a>

##### iRenderer.collapse(element)
주어진 Shape 이 그룹인 경우 collapse 한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.renderer.IRenderer+expand"></a>

##### iRenderer.expand(element)
주어진 Shape 이 그룹인 경우 expand 한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.renderer.IRenderer+clear"></a>

##### iRenderer.clear()
드로잉된 모든 오브젝트를 클리어한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
<a name="OG.renderer.IRenderer+removeShape"></a>

##### iRenderer.removeShape(element)
Shape 을 캔버스에서 관련된 모두를 삭제한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+remove"></a>

##### iRenderer.remove(element)
ID에 해당하는 Element 를 캔버스에서 제거한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+removeChild"></a>

##### iRenderer.removeChild(element)
하위 엘리먼트만 제거한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getRootElement"></a>

##### iRenderer.getRootElement() ⇒ <code>Element</code>
랜더러 캔버스 Root Element 를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Element  
<a name="OG.renderer.IRenderer+getRootGroup"></a>

##### iRenderer.getRootGroup() ⇒ <code>Element</code>
랜더러 캔버스 Root Group Element 를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Element  
<a name="OG.renderer.IRenderer+getElementByPoint"></a>

##### iRenderer.getElementByPoint(position) ⇒ <code>Element</code>
주어진 지점을 포함하는 Top Element 를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 위치 좌표 |

<a name="OG.renderer.IRenderer+getElementsByBBox"></a>

##### iRenderer.getElementsByBBox(envelope) ⇒ <code>Array.&lt;Element&gt;</code>
주어진 Boundary Box 영역에 포함되는 Shape(GEOM, TEXT, IMAGE) Element 를 반환한다.
모든 vertices를 포함한 엘리먼트를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Boundary Box 영역 |

<a name="OG.renderer.IRenderer+setAttr"></a>

##### iRenderer.setAttr(element, attribute)
엘리먼트에 속성값을 설정한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| attribute | <code>Object</code> | 속성값 |

<a name="OG.renderer.IRenderer+getAttr"></a>

##### iRenderer.getAttr(element, attrName) ⇒ <code>Object</code>
엘리먼트 속성값을 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Object</code> - attribute 속성값  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| attrName | <code>String</code> | 속성이름 |

<a name="OG.renderer.IRenderer+setShapeStyle"></a>

##### iRenderer.setShapeStyle(element, style)
Shape 의 스타일을 변경한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| style | <code>Object</code> | 스타일 |

<a name="OG.renderer.IRenderer+toFront"></a>

##### iRenderer.toFront(element)
ID에 해당하는 Element 를 최상단 레이어로 이동한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+toBack"></a>

##### iRenderer.toBack(element)
ID에 해당하는 Element 를 최하단 레이어로 이동한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+bringForward"></a>

##### iRenderer.bringForward(element)
ID에 해당하는 Element 를 앞으로 한단계 이동한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+sendBackward"></a>

##### iRenderer.sendBackward(element)
ID에 해당하는 Element 를 뒤로 한단계 이동한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getCanvasSize"></a>

##### iRenderer.getCanvasSize() ⇒ <code>Array.&lt;Number&gt;</code>
랜더러 캔버스의 사이즈(Width, Height)를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array.&lt;Number&gt;</code> - Canvas Width, Height  
<a name="OG.renderer.IRenderer+setCanvasSize"></a>

##### iRenderer.setCanvasSize(size)
랜더러 캔버스의 사이즈(Width, Height)를 변경한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>Array.&lt;Number&gt;</code> | Canvas Width, Height |

<a name="OG.renderer.IRenderer+fitCanvasSize"></a>

##### iRenderer.fitCanvasSize(minSize, fitScale)
랜더러 캔버스의 사이즈(Width, Height)를 실제 존재하는 Shape 의 영역에 맞게 변경한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| minSize | <code>Array.&lt;Number&gt;</code> | Canvas 최소 Width, Height |
| fitScale | <code>Boolean</code> | 주어진 minSize 에 맞게 fit 여부(Default:false) |

<a name="OG.renderer.IRenderer+setViewBox"></a>

##### iRenderer.setViewBox(position, size, isFit)
새로운 View Box 영역을 설정한다. (ZoomIn & ZoomOut 가능)

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 위치 좌표(좌상단 기준) |
| size | <code>Array.&lt;Number&gt;</code> | Canvas Width, Height |
| isFit | <code>Boolean</code> | Fit 여부 |

<a name="OG.renderer.IRenderer+getScale"></a>

##### iRenderer.getScale() ⇒ <code>Number</code>
Scale 을 반환한다. (리얼 사이즈 : Scale = 1)

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Number</code> - 스케일값  
<a name="OG.renderer.IRenderer+setScale"></a>

##### iRenderer.setScale(scale)
Scale 을 설정한다. (리얼 사이즈 : Scale = 1)

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| scale | <code>Number</code> | 스케일값 |

<a name="OG.renderer.IRenderer+show"></a>

##### iRenderer.show(element)
ID에 해당하는 Element 를 캔버스에서 show 한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+hide"></a>

##### iRenderer.hide(element)
ID에 해당하는 Element 를 캔버스에서 hide 한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+appendChild"></a>

##### iRenderer.appendChild(srcElement, targetElement) ⇒ <code>Element</code>
Source Element 를 Target Element 아래에 append 한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Source Element  

| Param | Type | Description |
| --- | --- | --- |
| srcElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| targetElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+insertAfter"></a>

##### iRenderer.insertAfter(srcElement, targetElement) ⇒ <code>Element</code>
Source Element 를 Target Element 이후에 insert 한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Source Element  

| Param | Type | Description |
| --- | --- | --- |
| srcElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| targetElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+insertBefore"></a>

##### iRenderer.insertBefore(srcElement, targetElement) ⇒ <code>Element</code>
Source Element 를 Target Element 이전에 insert 한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Source Element  

| Param | Type | Description |
| --- | --- | --- |
| srcElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| targetElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+move"></a>

##### iRenderer.move(element, offset) ⇒ <code>Element</code>
해당 Element 를 가로, 세로 Offset 만큼 이동한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| offset | <code>Array.&lt;Number&gt;</code> | [가로, 세로] |

<a name="OG.renderer.IRenderer+moveCentroid"></a>

##### iRenderer.moveCentroid(element, position) ⇒ <code>Element</code>
주어진 중심좌표로 해당 Element 를 이동한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| position | <code>Array.&lt;Number&gt;</code> | [x, y] |

<a name="OG.renderer.IRenderer+rotate"></a>

##### iRenderer.rotate(element, angle) ⇒ <code>Element</code>
중심 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| angle | <code>Number</code> | 각도 |

<a name="OG.renderer.IRenderer+resize"></a>

##### iRenderer.resize(element, offset) ⇒ <code>Element</code>
상, 하, 좌, 우 외곽선을 이동한 만큼 리사이즈 한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| offset | <code>Array.&lt;Number&gt;</code> | [상, 하, 좌, 우] 각 방향으로 + 값 |

<a name="OG.renderer.IRenderer+resizeBox"></a>

##### iRenderer.resizeBox(element, size) ⇒ <code>Element</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| size | <code>Array.&lt;Number&gt;</code> | [Width, Height] |

<a name="OG.renderer.IRenderer+clone"></a>

##### iRenderer.clone(element) ⇒ <code>Element</code>
노드 Element 를 복사한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getElementById"></a>

##### iRenderer.getElementById(id) ⇒ <code>Element</code>
ID로 Node Element 를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="OG.renderer.IRenderer+getElementsByType"></a>

##### iRenderer.getElementsByType(shapeType, excludeType) ⇒ <code>Array.&lt;Element&gt;</code>
Shape 타입에 해당하는 Node Element 들을 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| shapeType | <code>String</code> | Shape 타입(GEOM, HTML, IMAGE, EDGE, GROUP), Null 이면 모든 타입 |
| excludeType | <code>String</code> | 제외 할 타입 |

<a name="OG.renderer.IRenderer+getBBox"></a>

##### iRenderer.getBBox(element) ⇒ <code>Object</code>
해당 엘리먼트의 BoundingBox 영역 정보를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  

| Param | Type |
| --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | 

<a name="OG.renderer.IRenderer+getRootBBox"></a>

##### iRenderer.getRootBBox() ⇒ <code>Object</code>
부모노드기준으로 캔버스 루트 엘리먼트의 BoundingBox 영역 정보를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  
<a name="OG.renderer.IRenderer+getRealRootBBox"></a>

##### iRenderer.getRealRootBBox() ⇒ <code>Object</code>
부모노드기준으로 캔버스 루트 엘리먼트의 실제 Shape 이 차지하는 BoundingBox 영역 정보를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  
<a name="OG.renderer.IRenderer+getContainer"></a>

##### iRenderer.getContainer() ⇒ <code>Element</code>
캔버스의 컨테이너 DOM element 를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - 컨테이너  
<a name="OG.renderer.IRenderer+isSVG"></a>

##### iRenderer.isSVG() ⇒ <code>Boolean</code>
SVG 인지 여부를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Boolean</code> - svg 여부  
<a name="OG.renderer.IRenderer+isVML"></a>

##### iRenderer.isVML() ⇒ <code>Boolean</code>
VML 인지 여부를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Boolean</code> - vml 여부  
<a name="OG.renderer.IRenderer+getPrevEdges"></a>

##### iRenderer.getPrevEdges(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이전 Edge Element 들을 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getNextEdges"></a>

##### iRenderer.getNextEdges(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이후 Edge Element 들을 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getPrevShapes"></a>

##### iRenderer.getPrevShapes(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이전 노드 Element 들을 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getPrevShapeIds"></a>

##### iRenderer.getPrevShapeIds(element) ⇒ <code>Array.&lt;String&gt;</code>
연결된 이전 노드 Element ID들을 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array.&lt;String&gt;</code> - Previous Element Id's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getNextShapes"></a>

##### iRenderer.getNextShapes(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이후 노드 Element 들을 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getNextShapeIds"></a>

##### iRenderer.getNextShapeIds(element) ⇒ <code>Array.&lt;String&gt;</code>
연결된 이후 노드 Element ID들을 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array.&lt;String&gt;</code> - Previous Element Id's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getConnectGuideElements"></a>

##### iRenderer.getConnectGuideElements(Element) ⇒ <code>Array</code>
Node 엘리먼트의 커넥트 가이드 엘리먼트를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array</code> - Array Element  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.IRenderer+isTopGroup"></a>

##### iRenderer.isTopGroup(Element) ⇒ <code>boolean</code>
최상위 그룹 엘리먼트인지 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.IRenderer+getParent"></a>

##### iRenderer.getParent(element) ⇒ <code>Element</code>
부모 엘리먼트를 반환한다. 부모가 루트일때는 반환하지 않는다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Element</code> - element  엘리먼트  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.IRenderer+getChilds"></a>

##### iRenderer.getChilds(element) ⇒ <code>Array</code>
그룹의 하위 엘리먼트를 반환한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array</code> - Elements  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.IRenderer+isGroup"></a>

##### iRenderer.isGroup(element) ⇒ <code>boolean</code>
그룹의 Shape 인지 반환한다. RootGroup 일 경우는 제외.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.IRenderer+getAllShapes"></a>

##### iRenderer.getAllShapes() ⇒ <code>Array</code>
캔버스의 모든 Shape 들을 리턴

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array</code> - Elements  
<a name="OG.renderer.IRenderer+getAllEdges"></a>

##### iRenderer.getAllEdges() ⇒ <code>Array</code>
캔버스의 모든 Edge를 리턴

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array</code> - Edge Elements  
<a name="OG.renderer.IRenderer+getAllNotEdges"></a>

##### iRenderer.getAllNotEdges() ⇒ <code>Array</code>
캔버스의 모든 Edge 가 아닌 shpaes 를 리턴

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>Array</code> - Edge Elements  
<a name="OG.renderer.IRenderer+isEdge"></a>

##### iRenderer.isEdge() ⇒ <code>boolean</code>
Edge 여부를 판단.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>boolean</code> - true false  
<a name="OG.renderer.IRenderer+isShape"></a>

##### iRenderer.isShape() ⇒ <code>boolean</code>
Shape 여부를 판단.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Returns**: <code>boolean</code> - true false  
<a name="OG.renderer.IRenderer+initHistory"></a>

##### iRenderer.initHistory()
캔버스의 히스토리를 초기화한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
<a name="OG.renderer.IRenderer+addHistory"></a>

##### iRenderer.addHistory()
캔버스에 히스토리를 추가한다.

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
<a name="OG.renderer.IRenderer+undo"></a>

##### iRenderer.undo()
캔버스의 Undo

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
<a name="OG.renderer.IRenderer+redo"></a>

##### iRenderer.redo()
캔버스의 Redo

**Kind**: instance method of <code>[IRenderer](#OG.renderer.IRenderer)</code>  
<a name="OG.renderer.RaphaelRenderer"></a>

#### renderer.RaphaelRenderer ⇐ <code>[IRenderer](#OG.renderer.IRenderer)</code>
**Kind**: static class of <code>[renderer](#OG.renderer)</code>  
**Extends:** <code>[IRenderer](#OG.renderer.IRenderer)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>, <code>module:OG.shape.\*</code>, <code>module:raphael-2.1.0</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.RaphaelRenderer](#OG.renderer.RaphaelRenderer) ⇐ <code>[IRenderer](#OG.renderer.IRenderer)</code>
    * [new OG.renderer.RaphaelRenderer(container, containerSize, backgroundColor, backgroundImage, config)](#new_OG.renderer.RaphaelRenderer_new)
    * [.drawHtml(position, html, size, style, id)](#OG.renderer.RaphaelRenderer+drawHtml) ⇒ <code>Element</code>
    * [._getPointOfInflectionFromEdge()](#OG.renderer.RaphaelRenderer+_getPointOfInflectionFromEdge)
    * [.reconnect(edge)](#OG.renderer.RaphaelRenderer+reconnect) ⇒ <code>Element</code>
    * [.disconnectOneWay(element, connectDirection)](#OG.renderer.RaphaelRenderer+disconnectOneWay)
    * [.drawStickGuide(element, position)](#OG.renderer.RaphaelRenderer+drawStickGuide)
    * [.setTextListInController(element, textList)](#OG.renderer.RaphaelRenderer+setTextListInController)
    * [.getTextListInController(element)](#OG.renderer.RaphaelRenderer+getTextListInController)
    * [.getConnectGuideElements(Element)](#OG.renderer.RaphaelRenderer+getConnectGuideElements) ⇒ <code>Array</code>
    * [.getNotConnectGuideElements(Element)](#OG.renderer.RaphaelRenderer+getNotConnectGuideElements) ⇒ <code>Array</code>
    * [.removeConnectGuide(element)](#OG.renderer.RaphaelRenderer+removeConnectGuide)
    * [.removeAllConnectGuide()](#OG.renderer.RaphaelRenderer+removeAllConnectGuide)
    * [.removeOtherConnectGuide(element)](#OG.renderer.RaphaelRenderer+removeOtherConnectGuide)
    * [.getSpots(element)](#OG.renderer.RaphaelRenderer+getSpots) ⇒ <code>Array</code>
    * [.getCircleSpots(element)](#OG.renderer.RaphaelRenderer+getCircleSpots) ⇒ <code>Array</code>
    * [.createVirtualSpot(x, x, element)](#OG.renderer.RaphaelRenderer+createVirtualSpot) ⇒ <code>Element</code>
    * [.getVirtualSpot(element)](#OG.renderer.RaphaelRenderer+getVirtualSpot) ⇒ <code>Element</code>
    * [.removeVirtualSpot(element)](#OG.renderer.RaphaelRenderer+removeVirtualSpot) ⇒ <code>Element</code>
    * [.selectSpot(선택한)](#OG.renderer.RaphaelRenderer+selectSpot)
    * [.getChildNodes(element)](#OG.renderer.RaphaelRenderer+getChildNodes) ⇒ <code>Array</code>
    * [.trimEdge(element)](#OG.renderer.RaphaelRenderer+trimEdge)
    * [.trimConnectInnerVertice(element)](#OG.renderer.RaphaelRenderer+trimConnectInnerVertice) ⇒ <code>Element</code>
    * [.trimConnectIntersection(element)](#OG.renderer.RaphaelRenderer+trimConnectIntersection) ⇒ <code>Element</code>
    * [.getBoundary(element)](#OG.renderer.RaphaelRenderer+getBoundary) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.setHighlight(element, highlight)](#OG.renderer.RaphaelRenderer+setHighlight)
    * [.removeHighlight(element, highlight)](#OG.renderer.RaphaelRenderer+removeHighlight)
    * [.createTerminalString(Element, point)](#OG.renderer.RaphaelRenderer+createTerminalString) ⇒ <code>String</code>
    * [.createDefaultTerminalString(Element)](#OG.renderer.RaphaelRenderer+createDefaultTerminalString) ⇒ <code>String</code>
    * [.toFrontEdges()](#OG.renderer.RaphaelRenderer+toFrontEdges)
    * [.removeAllEdgeGuide()](#OG.renderer.RaphaelRenderer+removeAllEdgeGuide)
    * [.createVirtualEdge(x, x, targetEle)](#OG.renderer.RaphaelRenderer+createVirtualEdge) ⇒ <code>Element</code>
    * [.updateVirtualEdge(x, x)](#OG.renderer.RaphaelRenderer+updateVirtualEdge)
    * [.getTargetfromVirtualEdge(x, x)](#OG.renderer.RaphaelRenderer+getTargetfromVirtualEdge)
    * [.removeAllVirtualEdge()](#OG.renderer.RaphaelRenderer+removeAllVirtualEdge)
    * [.isLane(Element)](#OG.renderer.RaphaelRenderer+isLane) ⇒ <code>boolean</code>
    * [.isPool(Element)](#OG.renderer.RaphaelRenderer+isPool) ⇒ <code>boolean</code>
    * [.isScopeActivity(Element)](#OG.renderer.RaphaelRenderer+isScopeActivity) ⇒ <code>boolean</code>
    * [.isHorizontalLane(Element)](#OG.renderer.RaphaelRenderer+isHorizontalLane) ⇒ <code>boolean</code>
    * [.isVerticalLane(Element)](#OG.renderer.RaphaelRenderer+isVerticalLane) ⇒ <code>boolean</code>
    * [.isHorizontalPool(Element)](#OG.renderer.RaphaelRenderer+isHorizontalPool) ⇒ <code>boolean</code>
    * [.isVerticalPool(Element)](#OG.renderer.RaphaelRenderer+isVerticalPool) ⇒ <code>boolean</code>
    * [.getChildLane(Element)](#OG.renderer.RaphaelRenderer+getChildLane) ⇒ <code>Array</code>
    * [.enableDivideCount(Element)](#OG.renderer.RaphaelRenderer+enableDivideCount) ⇒ <code>Number</code>
    * [.getExceptTitleLaneArea(Element, boundary)](#OG.renderer.RaphaelRenderer+getExceptTitleLaneArea)
    * [.divideLane(Element, quarterOrder)](#OG.renderer.RaphaelRenderer+divideLane)
    * [.getBaseLanes(Element)](#OG.renderer.RaphaelRenderer+getBaseLanes) ⇒ <code>Array</code>
    * [.getRootLane(Element)](#OG.renderer.RaphaelRenderer+getRootLane) ⇒ <code>Element</code>
    * [.getIndexOfLane(Element)](#OG.renderer.RaphaelRenderer+getIndexOfLane) ⇒ <code>Number</code>
    * [.getDepthOfLane(Element)](#OG.renderer.RaphaelRenderer+getDepthOfLane) ⇒ <code>Number</code>
    * [.reEstablishLane(Element)](#OG.renderer.RaphaelRenderer+reEstablishLane)
    * [.getBoundaryOfElements(elements)](#OG.renderer.RaphaelRenderer+getBoundaryOfElements) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getNearestBaseLaneIndexAsDirection(Element, direction)](#OG.renderer.RaphaelRenderer+getNearestBaseLaneIndexAsDirection) ⇒ <code>Number</code>
    * [.getBoundaryOfInnerShapesGroup(Element)](#OG.renderer.RaphaelRenderer+getBoundaryOfInnerShapesGroup) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
    * [.getSmallestBaseLane(Element, baseLane)](#OG.renderer.RaphaelRenderer+getSmallestBaseLane)
    * [.resizeLane(Element, offset)](#OG.renderer.RaphaelRenderer+resizeLane)
    * [.removeLaneShape(Element)](#OG.renderer.RaphaelRenderer+removeLaneShape)
    * [.getInnerShapesOfLane(Element)](#OG.renderer.RaphaelRenderer+getInnerShapesOfLane)
    * [.fitLaneOrder(Element)](#OG.renderer.RaphaelRenderer+fitLaneOrder)
    * [.getRootGroupOfShape(Element)](#OG.renderer.RaphaelRenderer+getRootGroupOfShape) ⇒ <code>Element</code>
    * [.checkBridgeEdge(Element)](#OG.renderer.RaphaelRenderer+checkBridgeEdge)
    * [.checkAllBridgeEdge()](#OG.renderer.RaphaelRenderer+checkAllBridgeEdge)
    * [.getInnerShapesOfGroup(Element)](#OG.renderer.RaphaelRenderer+getInnerShapesOfGroup)
    * [.getFrontForCoordinate(point)](#OG.renderer.RaphaelRenderer+getFrontForCoordinate) ⇒ <code>Element</code>
    * [.getFrontForBoundary(boundary)](#OG.renderer.RaphaelRenderer+getFrontForBoundary) ⇒ <code>Element</code>
    * [.trimEdgeDirection(Edge, FromShape, ToShape)](#OG.renderer.RaphaelRenderer+trimEdgeDirection) ⇒ <code>Element</code>
    * [.putInnerShapeToPool(Element)](#OG.renderer.RaphaelRenderer+putInnerShapeToPool) ⇒ <code>Element</code>
    * [.setDropablePool(Element)](#OG.renderer.RaphaelRenderer+setDropablePool) ⇒ <code>Element</code>
    * [.offDropablePool()](#OG.renderer.RaphaelRenderer+offDropablePool)
    * [.drawShape(position, shape, size, style, id)](#OG.renderer.IRenderer+drawShape) ⇒ <code>Element</code>
    * [.drawGeom(geometry, style)](#OG.renderer.IRenderer+drawGeom) ⇒ <code>Element</code>
    * [.drawText(position, text, size, style, id)](#OG.renderer.IRenderer+drawText) ⇒ <code>Element</code>
    * [.drawImage(position, imgSrc, size, style, id)](#OG.renderer.IRenderer+drawImage) ⇒ <code>Element</code>
    * [.drawEdge(line, style, id, isSelf)](#OG.renderer.IRenderer+drawEdge) ⇒ <code>Element</code>
    * [.drawLabel(shapeElement, text, style)](#OG.renderer.IRenderer+drawLabel) ⇒ <code>Element</code>
        * [~getCenterOfEdge(element)](#OG.renderer.RaphaelRenderer+drawLabel..getCenterOfEdge) ⇒ <code>OG.Coordinate</code>
    * [.drawEdgeLabel(shapeElement, text, type)](#OG.renderer.IRenderer+drawEdgeLabel) ⇒ <code>Element</code>
    * [.redrawShape(element, excludeEdgeId)](#OG.renderer.IRenderer+redrawShape)
    * [.redrawConnectedEdge(element)](#OG.renderer.IRenderer+redrawConnectedEdge)
    * [.connect(fromTerminal, toTerminal, edge, style, label, preventTrigger)](#OG.renderer.IRenderer+connect) ⇒ <code>Element</code>
    * [.disconnect(element)](#OG.renderer.IRenderer+disconnect)
    * [.drawDropOverGuide(element)](#OG.renderer.IRenderer+drawDropOverGuide)
    * [.drawGuide(element)](#OG.renderer.IRenderer+drawGuide) ⇒ <code>Object</code>
    * [.removeGuide(element)](#OG.renderer.IRenderer+removeGuide)
    * [.removeAllGuide()](#OG.renderer.IRenderer+removeAllGuide)
    * [.drawEdgeGuide(element)](#OG.renderer.IRenderer+drawEdgeGuide) ⇒ <code>Object</code>
    * [.drawRubberBand(position, size, style)](#OG.renderer.IRenderer+drawRubberBand) ⇒ <code>Element</code>
    * [.removeRubberBand(root)](#OG.renderer.IRenderer+removeRubberBand)
    * [.drawDraggableGuide(element)](#OG.renderer.IRenderer+drawDraggableGuide) ⇒ <code>Element</code>
    * [.drawCollapseGuide(element)](#OG.renderer.IRenderer+drawCollapseGuide) ⇒ <code>Element</code>
    * [.removeCollapseGuide(element)](#OG.renderer.IRenderer+removeCollapseGuide)
    * [.group(elements)](#OG.renderer.IRenderer+group) ⇒ <code>Element</code>
    * [.ungroup(groupElements)](#OG.renderer.IRenderer+ungroup) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.addToGroup(groupElement, elements)](#OG.renderer.IRenderer+addToGroup)
    * [.collapse(element)](#OG.renderer.IRenderer+collapse)
    * [.expand(element)](#OG.renderer.IRenderer+expand)
    * [.clear()](#OG.renderer.IRenderer+clear)
    * [.removeShape(element)](#OG.renderer.IRenderer+removeShape)
    * [.remove(element)](#OG.renderer.IRenderer+remove)
    * [.removeChild(element)](#OG.renderer.IRenderer+removeChild)
    * [.getRootElement()](#OG.renderer.IRenderer+getRootElement) ⇒ <code>Element</code>
    * [.getRootGroup()](#OG.renderer.IRenderer+getRootGroup) ⇒ <code>Element</code>
    * [.getElementByPoint(position)](#OG.renderer.IRenderer+getElementByPoint) ⇒ <code>Element</code>
    * [.getElementsByBBox(envelope)](#OG.renderer.IRenderer+getElementsByBBox) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.setAttr(element, attribute)](#OG.renderer.IRenderer+setAttr)
    * [.getAttr(element, attrName)](#OG.renderer.IRenderer+getAttr) ⇒ <code>Object</code>
    * [.setShapeStyle(element, style)](#OG.renderer.IRenderer+setShapeStyle)
    * [.toFront(element)](#OG.renderer.IRenderer+toFront)
    * [.toBack(element)](#OG.renderer.IRenderer+toBack)
    * [.bringForward(element)](#OG.renderer.IRenderer+bringForward)
    * [.sendBackward(element)](#OG.renderer.IRenderer+sendBackward)
    * [.getCanvasSize()](#OG.renderer.IRenderer+getCanvasSize) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.setCanvasSize(size)](#OG.renderer.IRenderer+setCanvasSize)
    * [.fitCanvasSize(minSize, fitScale)](#OG.renderer.IRenderer+fitCanvasSize)
    * [.setViewBox(position, size, isFit)](#OG.renderer.IRenderer+setViewBox)
    * [.getScale()](#OG.renderer.IRenderer+getScale) ⇒ <code>Number</code>
    * [.setScale(scale)](#OG.renderer.IRenderer+setScale)
    * [.show(element)](#OG.renderer.IRenderer+show)
    * [.hide(element)](#OG.renderer.IRenderer+hide)
    * [.appendChild(srcElement, targetElement)](#OG.renderer.IRenderer+appendChild) ⇒ <code>Element</code>
    * [.insertAfter(srcElement, targetElement)](#OG.renderer.IRenderer+insertAfter) ⇒ <code>Element</code>
    * [.insertBefore(srcElement, targetElement)](#OG.renderer.IRenderer+insertBefore) ⇒ <code>Element</code>
    * [.move(element, offset)](#OG.renderer.IRenderer+move) ⇒ <code>Element</code>
    * [.moveCentroid(element, position)](#OG.renderer.IRenderer+moveCentroid) ⇒ <code>Element</code>
    * [.rotate(element, angle)](#OG.renderer.IRenderer+rotate) ⇒ <code>Element</code>
    * [.resize(element, offset)](#OG.renderer.IRenderer+resize) ⇒ <code>Element</code>
    * [.resizeBox(element, size)](#OG.renderer.IRenderer+resizeBox) ⇒ <code>Element</code>
    * [.clone(element)](#OG.renderer.IRenderer+clone) ⇒ <code>Element</code>
    * [.getElementById(id)](#OG.renderer.IRenderer+getElementById) ⇒ <code>Element</code>
    * [.getElementsByType(shapeType, excludeType)](#OG.renderer.IRenderer+getElementsByType) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getBBox(element)](#OG.renderer.IRenderer+getBBox) ⇒ <code>Object</code>
    * [.getRootBBox()](#OG.renderer.IRenderer+getRootBBox) ⇒ <code>Object</code>
    * [.getRealRootBBox()](#OG.renderer.IRenderer+getRealRootBBox) ⇒ <code>Object</code>
    * [.getContainer()](#OG.renderer.IRenderer+getContainer) ⇒ <code>Element</code>
    * [.isSVG()](#OG.renderer.IRenderer+isSVG) ⇒ <code>Boolean</code>
    * [.isVML()](#OG.renderer.IRenderer+isVML) ⇒ <code>Boolean</code>
    * [.getPrevEdges(element)](#OG.renderer.IRenderer+getPrevEdges) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getNextEdges(element)](#OG.renderer.IRenderer+getNextEdges) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getPrevShapes(element)](#OG.renderer.IRenderer+getPrevShapes) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getPrevShapeIds(element)](#OG.renderer.IRenderer+getPrevShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
    * [.getNextShapes(element)](#OG.renderer.IRenderer+getNextShapes) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.getNextShapeIds(element)](#OG.renderer.IRenderer+getNextShapeIds) ⇒ <code>Array.&lt;String&gt;</code>
    * [.isTopGroup(Element)](#OG.renderer.IRenderer+isTopGroup) ⇒ <code>boolean</code>
    * [.getParent(element)](#OG.renderer.IRenderer+getParent) ⇒ <code>Element</code>
    * [.getChilds(element)](#OG.renderer.IRenderer+getChilds) ⇒ <code>Array</code>
    * [.isGroup(element)](#OG.renderer.IRenderer+isGroup) ⇒ <code>boolean</code>
    * [.getAllShapes()](#OG.renderer.IRenderer+getAllShapes) ⇒ <code>Array</code>
    * [.getAllEdges()](#OG.renderer.IRenderer+getAllEdges) ⇒ <code>Array</code>
    * [.getAllNotEdges()](#OG.renderer.IRenderer+getAllNotEdges) ⇒ <code>Array</code>
    * [.isEdge()](#OG.renderer.IRenderer+isEdge) ⇒ <code>boolean</code>
    * [.isShape()](#OG.renderer.IRenderer+isShape) ⇒ <code>boolean</code>
    * [.initHistory()](#OG.renderer.IRenderer+initHistory)
    * [.addHistory()](#OG.renderer.IRenderer+addHistory)
    * [.undo()](#OG.renderer.IRenderer+undo)
    * [.redo()](#OG.renderer.IRenderer+redo)

<a name="new_OG.renderer.RaphaelRenderer_new"></a>

##### new OG.renderer.RaphaelRenderer(container, containerSize, backgroundColor, backgroundImage, config)
Raphael 라이브러리를 이용하여 구현한 랜더러 캔버스 클래스
- 노드에 추가되는 속성 : _type, _shape, _selected, _from, _to, _fromedge, _toedge
- 노드에 저장되는 값 : shape : { geom, angle, image, text }, data : 커스텀 Object


| Param | Type | Description |
| --- | --- | --- |
| container | <code>HTMLElement</code> &#124; <code>String</code> | 컨테이너 DOM element or ID |
| containerSize | <code>Array.&lt;Number&gt;</code> | 컨테이너 Width, Height |
| backgroundColor | <code>String</code> | 캔버스 배경색 |
| backgroundImage | <code>String</code> | 캔버스 배경이미지 |
| config | <code>Object</code> | Configuration |

<a name="OG.renderer.RaphaelRenderer+drawHtml"></a>

##### raphaelRenderer.drawHtml(position, html, size, style, id) ⇒ <code>Element</code>
임베드 HTML String 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(중앙 기준) |
| html | <code>String</code> | 임베드 HTML String |
| size | <code>Array.&lt;Number&gt;</code> | Image Width, Height, Angle |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| id | <code>String</code> | Element ID 지정 |

<a name="OG.renderer.RaphaelRenderer+_getPointOfInflectionFromEdge"></a>

##### raphaelRenderer._getPointOfInflectionFromEdge()
사용자가 지정한 변곡점을 반환
- 조건:
  오직 4개의 점을 가지고있는 다각선에서
  변곡점이 자동으로 그려진 점의 위치가 아닐 때

- issue: 사용자가 지정한 변곡점(?)은 유지되어야 함

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
<a name="OG.renderer.RaphaelRenderer+reconnect"></a>

##### raphaelRenderer.reconnect(edge) ⇒ <code>Element</code>
연결된 터미널의 vertices 를 초기화하여 재연결한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - 연결된 Edge 엘리먼트  

| Param | Type | Description |
| --- | --- | --- |
| edge | <code>Element</code> | Edge Shape |

<a name="OG.renderer.RaphaelRenderer+disconnectOneWay"></a>

##### raphaelRenderer.disconnectOneWay(element, connectDirection)
단방향 연결속성정보를 삭제한다. Edge 인 경우에만 해당한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> |  |
| connectDirection | <code>String</code> | 연결방향 'from' or 'to' |

<a name="OG.renderer.RaphaelRenderer+drawStickGuide"></a>

##### raphaelRenderer.drawStickGuide(element, position)
ID에 해당하는 Element 의 Stick 용 가이드를 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| position | <code>Object</code> |  |

<a name="OG.renderer.RaphaelRenderer+setTextListInController"></a>

##### raphaelRenderer.setTextListInController(element, textList)
Shape 의 선 연결 커스텀 컨트롤러를 설정한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| textList | <code>Array</code> | 텍스트 리스트 |

<a name="OG.renderer.RaphaelRenderer+getTextListInController"></a>

##### raphaelRenderer.getTextListInController(element)
Shape 의 선 연결 커스텀 컨트롤러를 가져온다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getConnectGuideElements"></a>

##### raphaelRenderer.getConnectGuideElements(Element) ⇒ <code>Array</code>
Node 엘리먼트의 커넥트 가이드 영역 엘리먼트를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[getConnectGuideElements](#OG.renderer.IRenderer+getConnectGuideElements)</code>  
**Returns**: <code>Array</code> - Array Element  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.RaphaelRenderer+getNotConnectGuideElements"></a>

##### raphaelRenderer.getNotConnectGuideElements(Element) ⇒ <code>Array</code>
Node 엘리먼트의 커넥트 가이드 영역을 제외한 엘리먼트를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array</code> - Array Element  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.RaphaelRenderer+removeConnectGuide"></a>

##### raphaelRenderer.removeConnectGuide(element)
ID에 해당하는 Element 의 Connect Guide 를 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[removeConnectGuide](#OG.renderer.IRenderer+removeConnectGuide)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+removeAllConnectGuide"></a>

##### raphaelRenderer.removeAllConnectGuide()
캔버스의 모든 Connect Guide 를 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[removeAllConnectGuide](#OG.renderer.IRenderer+removeAllConnectGuide)</code>  
<a name="OG.renderer.RaphaelRenderer+removeOtherConnectGuide"></a>

##### raphaelRenderer.removeOtherConnectGuide(element)
ID에 해당하는 Element 이외의 모든 Connect Guide 를 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[removeOtherConnectGuide](#OG.renderer.IRenderer+removeOtherConnectGuide)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getSpots"></a>

##### raphaelRenderer.getSpots(element) ⇒ <code>Array</code>
Element 내부의 Spot 들을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array</code> - Spot Element Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getCircleSpots"></a>

##### raphaelRenderer.getCircleSpots(element) ⇒ <code>Array</code>
Element 내부의 변곡점 Spot 들만 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array</code> - Spot Element Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+createVirtualSpot"></a>

##### raphaelRenderer.createVirtualSpot(x, x, element) ⇒ <code>Element</code>
주어진 좌표와 가장 Edge Element의 가장 가까운 거리에 가상 변곡점 스팟을 생성한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Spot Element  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | 이벤트의 캔버스 기준 x 좌표 |
| x | <code>Number</code> | 이벤트의 캔버스 기준 y 좌표 |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getVirtualSpot"></a>

##### raphaelRenderer.getVirtualSpot(element) ⇒ <code>Element</code>
Element 내부의 가상 변곡점 스팟을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Spot Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+removeVirtualSpot"></a>

##### raphaelRenderer.removeVirtualSpot(element) ⇒ <code>Element</code>
Element 내부의 가상 변곡점 스팟을 삭제한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Spot Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+selectSpot"></a>

##### raphaelRenderer.selectSpot(선택한)
Element 내부의 Spot 중 선택한 스팟을 제외하고 모두 삭제하고, 가이드라인도 삭제한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| 선택한 | <code>Element</code> &#124; <code>String</code> | spot Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getChildNodes"></a>

##### raphaelRenderer.getChildNodes(element) ⇒ <code>Array</code>
하위 엘리먼트들을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array</code> - Array Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+trimEdge"></a>

##### raphaelRenderer.trimEdge(element)
Edge Element 내부의 패스중 나열된 두 꼭지점이 매우 짧은 선일 경우 하나의 꼭지점으로 정리한다.
Edge Element 내부의 패스중 나열된 세 꼭지점이 평행에 가까울 경우 하나의 선분으로 정리한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+trimConnectInnerVertice"></a>

##### raphaelRenderer.trimConnectInnerVertice(element) ⇒ <code>Element</code>
Edge Element의 연결 정보가 있을 경우 연결대상과 꼭지점의 다중 중복을 정리한다.
다중 중복 정리 후 Edge 의 모양이 직선인 경우 새로운 plain 을 제작한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+trimConnectIntersection"></a>

##### raphaelRenderer.trimConnectIntersection(element) ⇒ <code>Element</code>
Edge Element의 연결 정보가 있을 경우 선분과 연결대상의 연결점을 자연스럽게 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getBoundary"></a>

##### raphaelRenderer.getBoundary(element) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
ID에 해당하는 Element 의 바운더리 영역을 리턴한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+setHighlight"></a>

##### raphaelRenderer.setHighlight(element, highlight)
Element 에 하이라이트 속성을 부여한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| highlight | <code>Object</code> | HIGHLIGHT 속성 집합. |

<a name="OG.renderer.RaphaelRenderer+removeHighlight"></a>

##### raphaelRenderer.removeHighlight(element, highlight)
Element 에 하이라이트 속성을 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| highlight | <code>Object</code> | HIGHLIGHT 속성 집합. |

<a name="OG.renderer.RaphaelRenderer+createTerminalString"></a>

##### raphaelRenderer.createTerminalString(Element, point) ⇒ <code>String</code>
터미널 문자열을 생성한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>String</code> - terminal 터미널 문자열  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| point | <code>Array</code> | 연결 좌표정보 [x,y] |

<a name="OG.renderer.RaphaelRenderer+createDefaultTerminalString"></a>

##### raphaelRenderer.createDefaultTerminalString(Element) ⇒ <code>String</code>
디폴트 터미널 문자열을 생성한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>String</code> - terminal 터미널 문자열  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+toFrontEdges"></a>

##### raphaelRenderer.toFrontEdges()
캔버스의 Edge 들을 항상 최상단으로 이동시킨다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
<a name="OG.renderer.RaphaelRenderer+removeAllEdgeGuide"></a>

##### raphaelRenderer.removeAllEdgeGuide()
캔버스의 Edge 들의 가이드를 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
<a name="OG.renderer.RaphaelRenderer+createVirtualEdge"></a>

##### raphaelRenderer.createVirtualEdge(x, x, targetEle) ⇒ <code>Element</code>
주어진 좌표와 선택된 Element 사이에 가상 연결선을 생성한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Edge Element  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | 이벤트의 캔버스 기준 x 좌표 |
| x | <code>Number</code> | 이벤트의 캔버스 기준 y 좌표 |
| targetEle | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+updateVirtualEdge"></a>

##### raphaelRenderer.updateVirtualEdge(x, x)
캔버스의 가상 연결선을 업데이트한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | 이벤트의 캔버스 기준 x 좌표 |
| x | <code>Number</code> | 이벤트의 캔버스 기준 y 좌표 |

<a name="OG.renderer.RaphaelRenderer+getTargetfromVirtualEdge"></a>

##### raphaelRenderer.getTargetfromVirtualEdge(x, x)
캔버스의 가상선의 타겟 엘리먼트를 구한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | 이벤트의 캔버스 기준 x 좌표 |
| x | <code>Number</code> | 이벤트의 캔버스 기준 y 좌표 |

<a name="OG.renderer.RaphaelRenderer+removeAllVirtualEdge"></a>

##### raphaelRenderer.removeAllVirtualEdge()
캔버스의 가상선을 삭제한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[removeAllVirtualEdge](#OG.renderer.IRenderer+removeAllVirtualEdge)</code>  
<a name="OG.renderer.RaphaelRenderer+isLane"></a>

##### raphaelRenderer.isLane(Element) ⇒ <code>boolean</code>
도형의 Lane 타입 여부를 판별한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+isPool"></a>

##### raphaelRenderer.isPool(Element) ⇒ <code>boolean</code>
도형의 Pool 타입 여부를 판별한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+isScopeActivity"></a>

##### raphaelRenderer.isScopeActivity(Element) ⇒ <code>boolean</code>
도형의 ScopeActivity 타입 여부를 판별한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+isHorizontalLane"></a>

##### raphaelRenderer.isHorizontalLane(Element) ⇒ <code>boolean</code>
도형의 HorizontalLaneShape 타입 여부를 판별한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+isVerticalLane"></a>

##### raphaelRenderer.isVerticalLane(Element) ⇒ <code>boolean</code>
도형의 VerticalLaneShape 타입 여부를 판별한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+isHorizontalPool"></a>

##### raphaelRenderer.isHorizontalPool(Element) ⇒ <code>boolean</code>
도형의 HorizontalPoolShape 타입 여부를 판별한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+isVerticalPool"></a>

##### raphaelRenderer.isVerticalPool(Element) ⇒ <code>boolean</code>
도형의 VerticalPoolShape 타입 여부를 판별한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getChildLane"></a>

##### raphaelRenderer.getChildLane(Element) ⇒ <code>Array</code>
Lane 타입 도형 하위의 Lane 타입들을 리턴한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array</code> - childsLanes  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+enableDivideCount"></a>

##### raphaelRenderer.enableDivideCount(Element) ⇒ <code>Number</code>
Lane 타입이 내부적으로 분기가 가능한 수를 리턴한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Number</code> - 0,1,2  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getExceptTitleLaneArea"></a>

##### raphaelRenderer.getExceptTitleLaneArea(Element, boundary)
Lane,Pool 의 타이틀 영역을 제외한 boundary 를 리턴한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| boundary | <code>[Envelope](#OG.geometry.Envelope)</code> |  |

<a name="OG.renderer.RaphaelRenderer+divideLane"></a>

##### raphaelRenderer.divideLane(Element, quarterOrder)
Lane 을 분기한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| quarterOrder | <code>String</code> | 분기 명령 QUARTER_UPPER | QUARTER_LOW | QUARTER_BISECTOR | QUARTER_THIRDS |

<a name="OG.renderer.RaphaelRenderer+getBaseLanes"></a>

##### raphaelRenderer.getBaseLanes(Element) ⇒ <code>Array</code>
Lane 의 최상의 Lane 으로부터 모든 Base Lane 들을 반환한다.
Base Lane 은 자식 Lane 을 가지지 않는 Lane 을 뜻함.
반환하는 Array 는 좌표상의 값을 기준으로 정렬되어 있는 상태이다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array</code> - childBaseLanes  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getRootLane"></a>

##### raphaelRenderer.getRootLane(Element) ⇒ <code>Element</code>
Lane 의 최상위 Lane 을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Lane Element  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getIndexOfLane"></a>

##### raphaelRenderer.getIndexOfLane(Element) ⇒ <code>Number</code>
Lane 의 BaseLane 으로부터 자신의 순서를 구한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Number</code> - index  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getDepthOfLane"></a>

##### raphaelRenderer.getDepthOfLane(Element) ⇒ <code>Number</code>
Lane 의 최상위 Lane 으로부터 Depth를 구한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Number</code> - depth  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+reEstablishLane"></a>

##### raphaelRenderer.reEstablishLane(Element)
Lane 의 BaseLane 영역을 기준으로 전체 Lane 의 구조를 재정립한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getBoundaryOfElements"></a>

##### raphaelRenderer.getBoundaryOfElements(elements) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
주어진 Shape 들의 바운더리 영역을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  

| Param | Type |
| --- | --- |
| elements | <code>Array.&lt;Element&gt;</code> | 

<a name="OG.renderer.RaphaelRenderer+getNearestBaseLaneIndexAsDirection"></a>

##### raphaelRenderer.getNearestBaseLaneIndexAsDirection(Element, direction) ⇒ <code>Number</code>
Lane 의 baseLane 들 중
Lane의 주어진 direction 과 BaseLane 의 주어진 direction 이 가장 가까운 BaseLane 의 인덱스를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Number</code> - index  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| direction | <code>String</code> |  |

<a name="OG.renderer.RaphaelRenderer+getBoundaryOfInnerShapesGroup"></a>

##### raphaelRenderer.getBoundaryOfInnerShapesGroup(Element) ⇒ <code>[Envelope](#OG.geometry.Envelope)</code>
Group 의 내부 도형들의 Boundary를 반환한다.
Lane 이면 최상위 Lane의 내부 도형들의 Boundary를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>[Envelope](#OG.geometry.Envelope)</code> - Envelope 영역  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getSmallestBaseLane"></a>

##### raphaelRenderer.getSmallestBaseLane(Element, baseLane)
Lane 의 BaseLane 중 길이가 가장 작은 Lane 을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| baseLane | <code>Element</code> |  |

<a name="OG.renderer.RaphaelRenderer+resizeLane"></a>

##### raphaelRenderer.resizeLane(Element, offset)
Lane 을 리사이즈한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| offset | <code>Array.&lt;Number&gt;</code> | [상, 하, 좌, 우] 각 방향으로 + 값 |

<a name="OG.renderer.RaphaelRenderer+removeLaneShape"></a>

##### raphaelRenderer.removeLaneShape(Element)
Lane 을 삭제한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getInnerShapesOfLane"></a>

##### raphaelRenderer.getInnerShapesOfLane(Element)
Lane 내부 도형들을 구한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+fitLaneOrder"></a>

##### raphaelRenderer.fitLaneOrder(Element)
Lane 의 내부 도형들을 앞으로 이동시킨다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getRootGroupOfShape"></a>

##### raphaelRenderer.getRootGroupOfShape(Element) ⇒ <code>Element</code>
Shape 가 소속된 의 최상위 그룹 앨리먼트를 반환한다.
그룹이 소속이 아닌 앨리먼트는 자신을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | 또는 ID |

<a name="OG.renderer.RaphaelRenderer+checkBridgeEdge"></a>

##### raphaelRenderer.checkBridgeEdge(Element)
Edge 가 Gourp 사이를 넘어가는 경우 스타일에 변화를 준다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | 또는 ID |

<a name="OG.renderer.RaphaelRenderer+checkAllBridgeEdge"></a>

##### raphaelRenderer.checkAllBridgeEdge()
모든 Edge 를 checkBridgeEdge

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
<a name="OG.renderer.RaphaelRenderer+getInnerShapesOfGroup"></a>

##### raphaelRenderer.getInnerShapesOfGroup(Element)
Group 내부의 모든 shape 을 리턴한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+getFrontForCoordinate"></a>

##### raphaelRenderer.getFrontForCoordinate(point) ⇒ <code>Element</code>
주어진 좌표를 포함하는 Elemnt 중 가장 Front 에 위치한 Element 를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| point | <code>Array.&lt;Number&gt;</code> | 좌표값 |

<a name="OG.renderer.RaphaelRenderer+getFrontForBoundary"></a>

##### raphaelRenderer.getFrontForBoundary(boundary) ⇒ <code>Element</code>
Boundary 를 포함하는 가장 Front 에 위치한 Group Element 를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| boundary | <code>[Envelope](#OG.geometry.Envelope)</code> | 영역 |

<a name="OG.renderer.RaphaelRenderer+trimEdgeDirection"></a>

##### raphaelRenderer.trimEdgeDirection(Edge, FromShape, ToShape) ⇒ <code>Element</code>
신규 Edge 의 vertices 를 연결대상 도형에 따라 설정한다

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Edge Element  

| Param | Type | Description |
| --- | --- | --- |
| Edge | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| FromShape | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| ToShape | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.RaphaelRenderer+putInnerShapeToPool"></a>

##### raphaelRenderer.putInnerShapeToPool(Element) ⇒ <code>Element</code>
Lane 또는 Pool 내부 도형들을 그룹에 포함시킨다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type |
| --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | 

<a name="OG.renderer.RaphaelRenderer+setDropablePool"></a>

##### raphaelRenderer.setDropablePool(Element) ⇒ <code>Element</code>
신규 Lane 또는 Pool 이 캔버스상에서 드래그하여 그려지도록 사전작업을 수행한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type |
| --- | --- |
| Element | <code>Element</code> &#124; <code>String</code> | 

<a name="OG.renderer.RaphaelRenderer+offDropablePool"></a>

##### raphaelRenderer.offDropablePool()
신규 Lane 또는 Pool 드랍모드를 해제한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
<a name="OG.renderer.IRenderer+drawShape"></a>

##### raphaelRenderer.drawShape(position, shape, size, style, id) ⇒ <code>Element</code>
Shape 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawShape](#OG.renderer.IRenderer+drawShape)</code>  
**Returns**: <code>Element</code> - Group DOM Element with geometry  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(중앙 기준) |
| shape | <code>[IShape](#OG.shape.IShape)</code> | Shape |
| size | <code>Array.&lt;Number&gt;</code> | Shape Width, Height |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| id | <code>String</code> | Element ID 지정 |

**Example**  
```js
renderer.drawShape([100, 100], new OG.CircleShape(), [50, 50], {stroke:'red'});
```
<a name="OG.renderer.IRenderer+drawGeom"></a>

##### raphaelRenderer.drawGeom(geometry, style) ⇒ <code>Element</code>
Geometry 를 캔버스에 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawGeom](#OG.renderer.IRenderer+drawGeom)</code>  
**Returns**: <code>Element</code> - Group DOM Element with geometry  

| Param | Type | Description |
| --- | --- | --- |
| geometry | <code>[Geometry](#OG.geometry.Geometry)</code> | 기하 객체 |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |

<a name="OG.renderer.IRenderer+drawText"></a>

##### raphaelRenderer.drawText(position, text, size, style, id) ⇒ <code>Element</code>
Text 를 캔버스에 위치 및 사이즈 지정하여 드로잉한다.
(스타일 'text-anchor': 'start' or 'middle' or 'end' 에 따라 위치 기준이 다름)

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawText](#OG.renderer.IRenderer+drawText)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(스타일 'text-anchor': 'start' or 'middle' or 'end' 에 따라 기준이 다름) |
| text | <code>String</code> | 텍스트 |
| size | <code>Array.&lt;Number&gt;</code> | Text Width, Height, Angle |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| id | <code>String</code> | Element ID 지정 |

**Example**  
```js
renderer.drawText([100, 100], 'Hello', null, {'text-anchor':'start'});
```
<a name="OG.renderer.IRenderer+drawImage"></a>

##### raphaelRenderer.drawImage(position, imgSrc, size, style, id) ⇒ <code>Element</code>
Image 를 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawImage](#OG.renderer.IRenderer+drawImage)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(좌상단 기준) |
| imgSrc | <code>String</code> | 이미지경로 |
| size | <code>Array.&lt;Number&gt;</code> | Image Width, Height, Angle |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| id | <code>String</code> | Element ID 지정 |

**Example**  
```js
renderer.drawImage([100, 100], 'img.jpg', [50, 50]);
```
<a name="OG.renderer.IRenderer+drawEdge"></a>

##### raphaelRenderer.drawEdge(line, style, id, isSelf) ⇒ <code>Element</code>
라인을 캔버스에 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawEdge](#OG.renderer.IRenderer+drawEdge)</code>  
**Returns**: <code>Element</code> - Group DOM Element with geometry  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>[Line](#OG.geometry.Line)</code> | 라인 |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| id | <code>String</code> | Element ID 지정 |
| isSelf | <code>Boolean</code> | 셀프 연결 여부 |

<a name="OG.renderer.IRenderer+drawLabel"></a>

##### raphaelRenderer.drawLabel(shapeElement, text, style) ⇒ <code>Element</code>
Shape 의 Label 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawLabel](#OG.renderer.IRenderer+drawLabel)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> &#124; <code>String</code> | Shape DOM element or ID |
| text | <code>String</code> | 텍스트 |
| style | <code>Object</code> | 스타일 |

<a name="OG.renderer.RaphaelRenderer+drawLabel..getCenterOfEdge"></a>

###### drawLabel~getCenterOfEdge(element) ⇒ <code>OG.Coordinate</code>
라인(꺽은선)의 중심위치를 반환한다.

**Kind**: inner method of <code>[drawLabel](#OG.renderer.IRenderer+drawLabel)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Edge 엘리먼트 |

<a name="OG.renderer.IRenderer+drawEdgeLabel"></a>

##### raphaelRenderer.drawEdgeLabel(shapeElement, text, type) ⇒ <code>Element</code>
Edge 의 from, to Label 을 캔버스에 위치 및 사이즈 지정하여 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawEdgeLabel](#OG.renderer.IRenderer+drawEdgeLabel)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| shapeElement | <code>Element</code> &#124; <code>String</code> | Shape DOM element or ID |
| text | <code>String</code> | 텍스트 |
| type | <code>String</code> | 유형(FROM or TO) |

<a name="OG.renderer.IRenderer+redrawShape"></a>

##### raphaelRenderer.redrawShape(element, excludeEdgeId)
Element 에 저장된 geom, angle, image, text 정보로 shape 을 redraw 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[redrawShape](#OG.renderer.IRenderer+redrawShape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Shape 엘리먼트 |
| excludeEdgeId | <code>Array.&lt;String&gt;</code> | redraw 제외할 Edge ID |

<a name="OG.renderer.IRenderer+redrawConnectedEdge"></a>

##### raphaelRenderer.redrawConnectedEdge(element)
Shape 의 연결된 Edge 를 redraw 한다.(이동 또는 리사이즈시)

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[redrawConnectedEdge](#OG.renderer.IRenderer+redrawConnectedEdge)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.renderer.IRenderer+connect"></a>

##### raphaelRenderer.connect(fromTerminal, toTerminal, edge, style, label, preventTrigger) ⇒ <code>Element</code>
두개의 터미널을 연결하고, 속성정보에 추가한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[connect](#OG.renderer.IRenderer+connect)</code>  
**Returns**: <code>Element</code> - 연결된 Edge 엘리먼트  

| Param | Type | Description |
| --- | --- | --- |
| fromTerminal | <code>Element</code> &#124; <code>Array.&lt;Number&gt;</code> | 시작점 (fromTerminal) |
| toTerminal | <code>Element</code> &#124; <code>Array.&lt;Number&gt;</code> | 끝점 (toTerminal) |
| edge | <code>Element</code> | Edge Shape |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |
| label | <code>String</code> | Label |
| preventTrigger | <code>Boolean</code> | 이벤트 트리거 발생 막기 |

<a name="OG.renderer.IRenderer+disconnect"></a>

##### raphaelRenderer.disconnect(element)
연결속성정보를 삭제한다. Edge 인 경우는 라인만 삭제하고, 일반 Shape 인 경우는 연결된 모든 Edge 를 삭제한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[disconnect](#OG.renderer.IRenderer+disconnect)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.renderer.IRenderer+drawDropOverGuide"></a>

##### raphaelRenderer.drawDropOverGuide(element)
ID에 해당하는 Element 의 Edge 연결시 Drop Over 가이드를 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawDropOverGuide](#OG.renderer.IRenderer+drawDropOverGuide)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+drawGuide"></a>

##### raphaelRenderer.drawGuide(element) ⇒ <code>Object</code>
ID에 해당하는 Element 의 Move & Resize 용 가이드를 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawGuide](#OG.renderer.IRenderer+drawGuide)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+removeGuide"></a>

##### raphaelRenderer.removeGuide(element)
ID에 해당하는 Element 의 Move & Resize 용 가이드를 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[removeGuide](#OG.renderer.IRenderer+removeGuide)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+removeAllGuide"></a>

##### raphaelRenderer.removeAllGuide()
모든 Move & Resize 용 가이드를 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[removeAllGuide](#OG.renderer.IRenderer+removeAllGuide)</code>  
<a name="OG.renderer.IRenderer+drawEdgeGuide"></a>

##### raphaelRenderer.drawEdgeGuide(element) ⇒ <code>Object</code>
ID에 해당하는 Edge Element 의 Move & Resize 용 가이드를 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawEdgeGuide](#OG.renderer.IRenderer+drawEdgeGuide)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+drawRubberBand"></a>

##### raphaelRenderer.drawRubberBand(position, size, style) ⇒ <code>Element</code>
Rectangle 모양의 마우스 드래그 선택 박스 영역을 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[drawRubberBand](#OG.renderer.IRenderer+drawRubberBand)</code>  
**Returns**: <code>Element</code> - DOM Element  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 드로잉할 위치 좌표(좌상단) |
| size | <code>Array.&lt;Number&gt;</code> | Text Width, Height, Angle |
| style | <code>[Style](#OG.geometry.Style)</code> &#124; <code>Object</code> | 스타일 |

<a name="OG.renderer.IRenderer+removeRubberBand"></a>

##### raphaelRenderer.removeRubberBand(root)
Rectangle 모양의 마우스 드래그 선택 박스 영역을 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[removeRubberBand](#OG.renderer.IRenderer+removeRubberBand)</code>  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>Element</code> | first, rubberBand 정보를 저장한 엘리먼트 |

<a name="OG.renderer.IRenderer+drawDraggableGuide"></a>

##### raphaelRenderer.drawDraggableGuide(element) ⇒ <code>Element</code>
ID에 해당하는 Element 의 Draggable 가이드를 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+drawCollapseGuide"></a>

##### raphaelRenderer.drawCollapseGuide(element) ⇒ <code>Element</code>
ID에 해당하는 Element 의 Collapse 가이드를 드로잉한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+removeCollapseGuide"></a>

##### raphaelRenderer.removeCollapseGuide(element)
ID에 해당하는 Element 의 Collapse 가이드를 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[removeCollapseGuide](#OG.renderer.IRenderer+removeCollapseGuide)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.renderer.IRenderer+group"></a>

##### raphaelRenderer.group(elements) ⇒ <code>Element</code>
주어진 Shape 들을 그룹핑한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[group](#OG.renderer.IRenderer+group)</code>  
**Returns**: <code>Element</code> - Group Shape Element  

| Param | Type |
| --- | --- |
| elements | <code>Array.&lt;Element&gt;</code> | 

<a name="OG.renderer.IRenderer+ungroup"></a>

##### raphaelRenderer.ungroup(groupElements) ⇒ <code>Array.&lt;Element&gt;</code>
주어진 그룹들을 그룹해제한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[ungroup](#OG.renderer.IRenderer+ungroup)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - ungrouped Elements  

| Param | Type |
| --- | --- |
| groupElements | <code>Array.&lt;Element&gt;</code> | 

<a name="OG.renderer.IRenderer+addToGroup"></a>

##### raphaelRenderer.addToGroup(groupElement, elements)
주어진 Shape 들을 그룹에 추가한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[addToGroup](#OG.renderer.IRenderer+addToGroup)</code>  

| Param | Type |
| --- | --- |
| groupElement | <code>Element</code> | 
| elements | <code>Array.&lt;Element&gt;</code> | 

<a name="OG.renderer.IRenderer+collapse"></a>

##### raphaelRenderer.collapse(element)
주어진 Shape 이 그룹인 경우 collapse 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.renderer.IRenderer+expand"></a>

##### raphaelRenderer.expand(element)
주어진 Shape 이 그룹인 경우 expand 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 

<a name="OG.renderer.IRenderer+clear"></a>

##### raphaelRenderer.clear()
드로잉된 모든 오브젝트를 클리어한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[clear](#OG.renderer.IRenderer+clear)</code>  
<a name="OG.renderer.IRenderer+removeShape"></a>

##### raphaelRenderer.removeShape(element)
Shape 을 캔버스에서 관련된 모두를 삭제한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[removeShape](#OG.renderer.IRenderer+removeShape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+remove"></a>

##### raphaelRenderer.remove(element)
ID에 해당하는 Element 를 캔버스에서 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[remove](#OG.renderer.IRenderer+remove)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+removeChild"></a>

##### raphaelRenderer.removeChild(element)
하위 엘리먼트만 제거한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[removeChild](#OG.renderer.IRenderer+removeChild)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getRootElement"></a>

##### raphaelRenderer.getRootElement() ⇒ <code>Element</code>
랜더러 캔버스 Root Element 를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[getRootElement](#OG.renderer.IRenderer+getRootElement)</code>  
**Returns**: <code>Element</code> - Element  
<a name="OG.renderer.IRenderer+getRootGroup"></a>

##### raphaelRenderer.getRootGroup() ⇒ <code>Element</code>
랜더러 캔버스 Root Group Element 를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - Element  
<a name="OG.renderer.IRenderer+getElementByPoint"></a>

##### raphaelRenderer.getElementByPoint(position) ⇒ <code>Element</code>
주어진 지점을 포함하는 Top Element 를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[getElementByPoint](#OG.renderer.IRenderer+getElementByPoint)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 위치 좌표 |

<a name="OG.renderer.IRenderer+getElementsByBBox"></a>

##### raphaelRenderer.getElementsByBBox(envelope) ⇒ <code>Array.&lt;Element&gt;</code>
주어진 Boundary Box 영역에 포함되는 Shape(GEOM, TEXT, IMAGE) Element 를 반환한다.
모든 vertices를 포함한 엘리먼트를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| envelope | <code>[Envelope](#OG.geometry.Envelope)</code> | Boundary Box 영역 |

<a name="OG.renderer.IRenderer+setAttr"></a>

##### raphaelRenderer.setAttr(element, attribute)
엘리먼트에 속성값을 설정한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[setAttr](#OG.renderer.IRenderer+setAttr)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| attribute | <code>Object</code> | 속성값 |

<a name="OG.renderer.IRenderer+getAttr"></a>

##### raphaelRenderer.getAttr(element, attrName) ⇒ <code>Object</code>
엘리먼트 속성값을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[getAttr](#OG.renderer.IRenderer+getAttr)</code>  
**Returns**: <code>Object</code> - attribute 속성값  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| attrName | <code>String</code> | 속성이름 |

<a name="OG.renderer.IRenderer+setShapeStyle"></a>

##### raphaelRenderer.setShapeStyle(element, style)
Shape 의 스타일을 변경한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[setShapeStyle](#OG.renderer.IRenderer+setShapeStyle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| style | <code>Object</code> | 스타일 |

<a name="OG.renderer.IRenderer+toFront"></a>

##### raphaelRenderer.toFront(element)
ID에 해당하는 Element 를 최상단 레이어로 이동한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[toFront](#OG.renderer.IRenderer+toFront)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+toBack"></a>

##### raphaelRenderer.toBack(element)
ID에 해당하는 Element 를 최하단 레이어로 이동한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[toBack](#OG.renderer.IRenderer+toBack)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+bringForward"></a>

##### raphaelRenderer.bringForward(element)
ID에 해당하는 Element 를 앞으로 한단계 이동한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[bringForward](#OG.renderer.IRenderer+bringForward)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+sendBackward"></a>

##### raphaelRenderer.sendBackward(element)
ID에 해당하는 Element 를 뒤로 한단계 이동한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[sendBackward](#OG.renderer.IRenderer+sendBackward)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getCanvasSize"></a>

##### raphaelRenderer.getCanvasSize() ⇒ <code>Array.&lt;Number&gt;</code>
랜더러 캔버스의 사이즈(Width, Height)를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[getCanvasSize](#OG.renderer.IRenderer+getCanvasSize)</code>  
**Returns**: <code>Array.&lt;Number&gt;</code> - Canvas Width, Height  
<a name="OG.renderer.IRenderer+setCanvasSize"></a>

##### raphaelRenderer.setCanvasSize(size)
랜더러 캔버스의 사이즈(Width, Height)를 변경한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[setCanvasSize](#OG.renderer.IRenderer+setCanvasSize)</code>  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>Array.&lt;Number&gt;</code> | Canvas Width, Height |

<a name="OG.renderer.IRenderer+fitCanvasSize"></a>

##### raphaelRenderer.fitCanvasSize(minSize, fitScale)
랜더러 캔버스의 사이즈(Width, Height)를 실제 존재하는 Shape 의 영역에 맞게 변경한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[fitCanvasSize](#OG.renderer.IRenderer+fitCanvasSize)</code>  

| Param | Type | Description |
| --- | --- | --- |
| minSize | <code>Array.&lt;Number&gt;</code> | Canvas 최소 Width, Height |
| fitScale | <code>Boolean</code> | 주어진 minSize 에 맞게 fit 여부(Default:false) |

<a name="OG.renderer.IRenderer+setViewBox"></a>

##### raphaelRenderer.setViewBox(position, size, isFit)
새로운 View Box 영역을 설정한다. (ZoomIn & ZoomOut 가능)

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[setViewBox](#OG.renderer.IRenderer+setViewBox)</code>  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Array.&lt;Number&gt;</code> | 위치 좌표(좌상단 기준) |
| size | <code>Array.&lt;Number&gt;</code> | Canvas Width, Height |
| isFit | <code>Boolean</code> | Fit 여부 |

<a name="OG.renderer.IRenderer+getScale"></a>

##### raphaelRenderer.getScale() ⇒ <code>Number</code>
Scale 을 반환한다. (리얼 사이즈 : Scale = 1)

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[getScale](#OG.renderer.IRenderer+getScale)</code>  
**Returns**: <code>Number</code> - 스케일값  
<a name="OG.renderer.IRenderer+setScale"></a>

##### raphaelRenderer.setScale(scale)
Scale 을 설정한다. (리얼 사이즈 : Scale = 1)

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[setScale](#OG.renderer.IRenderer+setScale)</code>  

| Param | Type | Description |
| --- | --- | --- |
| scale | <code>Number</code> | 스케일값 |

<a name="OG.renderer.IRenderer+show"></a>

##### raphaelRenderer.show(element)
ID에 해당하는 Element 를 캔버스에서 show 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[show](#OG.renderer.IRenderer+show)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+hide"></a>

##### raphaelRenderer.hide(element)
ID에 해당하는 Element 를 캔버스에서 hide 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[hide](#OG.renderer.IRenderer+hide)</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+appendChild"></a>

##### raphaelRenderer.appendChild(srcElement, targetElement) ⇒ <code>Element</code>
Source Element 를 Target Element 아래에 append 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[appendChild](#OG.renderer.IRenderer+appendChild)</code>  
**Returns**: <code>Element</code> - Source Element  

| Param | Type | Description |
| --- | --- | --- |
| srcElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| targetElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+insertAfter"></a>

##### raphaelRenderer.insertAfter(srcElement, targetElement) ⇒ <code>Element</code>
Source Element 를 Target Element 이후에 insert 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[insertAfter](#OG.renderer.IRenderer+insertAfter)</code>  
**Returns**: <code>Element</code> - Source Element  

| Param | Type | Description |
| --- | --- | --- |
| srcElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| targetElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+insertBefore"></a>

##### raphaelRenderer.insertBefore(srcElement, targetElement) ⇒ <code>Element</code>
Source Element 를 Target Element 이전에 insert 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[insertBefore](#OG.renderer.IRenderer+insertBefore)</code>  
**Returns**: <code>Element</code> - Source Element  

| Param | Type | Description |
| --- | --- | --- |
| srcElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| targetElement | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+move"></a>

##### raphaelRenderer.move(element, offset) ⇒ <code>Element</code>
해당 Element 를 가로, 세로 Offset 만큼 이동한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[move](#OG.renderer.IRenderer+move)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| offset | <code>Array.&lt;Number&gt;</code> | [가로, 세로] |

<a name="OG.renderer.IRenderer+moveCentroid"></a>

##### raphaelRenderer.moveCentroid(element, position) ⇒ <code>Element</code>
주어진 중심좌표로 해당 Element 를 이동한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[moveCentroid](#OG.renderer.IRenderer+moveCentroid)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| position | <code>Array.&lt;Number&gt;</code> | [x, y] |

<a name="OG.renderer.IRenderer+rotate"></a>

##### raphaelRenderer.rotate(element, angle) ⇒ <code>Element</code>
중심 좌표를 기준으로 주어진 각도 만큼 회전한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[rotate](#OG.renderer.IRenderer+rotate)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| angle | <code>Number</code> | 각도 |

<a name="OG.renderer.IRenderer+resize"></a>

##### raphaelRenderer.resize(element, offset) ⇒ <code>Element</code>
상, 하, 좌, 우 외곽선을 이동한 만큼 리사이즈 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[resize](#OG.renderer.IRenderer+resize)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| offset | <code>Array.&lt;Number&gt;</code> | [상, 하, 좌, 우] 각 방향으로 + 값 |

<a name="OG.renderer.IRenderer+resizeBox"></a>

##### raphaelRenderer.resizeBox(element, size) ⇒ <code>Element</code>
중심좌표는 고정한 채 Bounding Box 의 width, height 를 리사이즈 한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[resizeBox](#OG.renderer.IRenderer+resizeBox)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |
| size | <code>Array.&lt;Number&gt;</code> | [Width, Height] |

<a name="OG.renderer.IRenderer+clone"></a>

##### raphaelRenderer.clone(element) ⇒ <code>Element</code>
노드 Element 를 복사한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[clone](#OG.renderer.IRenderer+clone)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getElementById"></a>

##### raphaelRenderer.getElementById(id) ⇒ <code>Element</code>
ID로 Node Element 를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[getElementById](#OG.renderer.IRenderer+getElementById)</code>  
**Returns**: <code>Element</code> - Element  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="OG.renderer.IRenderer+getElementsByType"></a>

##### raphaelRenderer.getElementsByType(shapeType, excludeType) ⇒ <code>Array.&lt;Element&gt;</code>
Shape 타입에 해당하는 Node Element 들을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| shapeType | <code>String</code> | Shape 타입(GEOM, HTML, IMAGE, EDGE, GROUP), Null 이면 모든 타입 |
| excludeType | <code>String</code> | 제외 할 타입 |

<a name="OG.renderer.IRenderer+getBBox"></a>

##### raphaelRenderer.getBBox(element) ⇒ <code>Object</code>
해당 엘리먼트의 BoundingBox 영역 정보를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[getBBox](#OG.renderer.IRenderer+getBBox)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  

| Param | Type |
| --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | 

<a name="OG.renderer.IRenderer+getRootBBox"></a>

##### raphaelRenderer.getRootBBox() ⇒ <code>Object</code>
부모노드기준으로 캔버스 루트 엘리먼트의 BoundingBox 영역 정보를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[getRootBBox](#OG.renderer.IRenderer+getRootBBox)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  
<a name="OG.renderer.IRenderer+getRealRootBBox"></a>

##### raphaelRenderer.getRealRootBBox() ⇒ <code>Object</code>
부모노드기준으로 캔버스 루트 엘리먼트의 실제 Shape 이 차지하는 BoundingBox 영역 정보를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Object</code> - {width, height, x, y, x2, y2}  
<a name="OG.renderer.IRenderer+getContainer"></a>

##### raphaelRenderer.getContainer() ⇒ <code>Element</code>
캔버스의 컨테이너 DOM element 를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[getContainer](#OG.renderer.IRenderer+getContainer)</code>  
**Returns**: <code>Element</code> - 컨테이너  
<a name="OG.renderer.IRenderer+isSVG"></a>

##### raphaelRenderer.isSVG() ⇒ <code>Boolean</code>
SVG 인지 여부를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[isSVG](#OG.renderer.IRenderer+isSVG)</code>  
**Returns**: <code>Boolean</code> - svg 여부  
<a name="OG.renderer.IRenderer+isVML"></a>

##### raphaelRenderer.isVML() ⇒ <code>Boolean</code>
VML 인지 여부를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[isVML](#OG.renderer.IRenderer+isVML)</code>  
**Returns**: <code>Boolean</code> - vml 여부  
<a name="OG.renderer.IRenderer+getPrevEdges"></a>

##### raphaelRenderer.getPrevEdges(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이전 Edge Element 들을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getNextEdges"></a>

##### raphaelRenderer.getNextEdges(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이후 Edge Element 들을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getPrevShapes"></a>

##### raphaelRenderer.getPrevShapes(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이전 노드 Element 들을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getPrevShapeIds"></a>

##### raphaelRenderer.getPrevShapeIds(element) ⇒ <code>Array.&lt;String&gt;</code>
연결된 이전 노드 Element ID들을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array.&lt;String&gt;</code> - Previous Element Id's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getNextShapes"></a>

##### raphaelRenderer.getNextShapes(element) ⇒ <code>Array.&lt;Element&gt;</code>
연결된 이후 노드 Element 들을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array.&lt;Element&gt;</code> - Previous Element's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+getNextShapeIds"></a>

##### raphaelRenderer.getNextShapeIds(element) ⇒ <code>Array.&lt;String&gt;</code>
연결된 이후 노드 Element ID들을 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array.&lt;String&gt;</code> - Previous Element Id's Array  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> &#124; <code>String</code> | Element 또는 ID |

<a name="OG.renderer.IRenderer+isTopGroup"></a>

##### raphaelRenderer.isTopGroup(Element) ⇒ <code>boolean</code>
최상위 그룹 엘리먼트인지 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| Element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.IRenderer+getParent"></a>

##### raphaelRenderer.getParent(element) ⇒ <code>Element</code>
부모 엘리먼트를 반환한다. 부모가 루트일때는 반환하지 않는다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Element</code> - element  엘리먼트  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.IRenderer+getChilds"></a>

##### raphaelRenderer.getChilds(element) ⇒ <code>Array</code>
그룹의 하위 엘리먼트를 반환한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array</code> - Elements  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.IRenderer+isGroup"></a>

##### raphaelRenderer.isGroup(element) ⇒ <code>boolean</code>
그룹의 Shape 인지 반환한다. RootGroup 일 경우는 제외.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | 엘리먼트 |

<a name="OG.renderer.IRenderer+getAllShapes"></a>

##### raphaelRenderer.getAllShapes() ⇒ <code>Array</code>
캔버스의 모든 Shape 들을 리턴

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array</code> - Elements  
<a name="OG.renderer.IRenderer+getAllEdges"></a>

##### raphaelRenderer.getAllEdges() ⇒ <code>Array</code>
캔버스의 모든 Edge를 리턴

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array</code> - Edge Elements  
<a name="OG.renderer.IRenderer+getAllNotEdges"></a>

##### raphaelRenderer.getAllNotEdges() ⇒ <code>Array</code>
캔버스의 모든 Edge 가 아닌 shpaes 를 리턴

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>Array</code> - Edge Elements  
<a name="OG.renderer.IRenderer+isEdge"></a>

##### raphaelRenderer.isEdge() ⇒ <code>boolean</code>
Edge 여부를 판단.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  
<a name="OG.renderer.IRenderer+isShape"></a>

##### raphaelRenderer.isShape() ⇒ <code>boolean</code>
Shape 여부를 판단.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Returns**: <code>boolean</code> - true false  
<a name="OG.renderer.IRenderer+initHistory"></a>

##### raphaelRenderer.initHistory()
캔버스의 히스토리를 초기화한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[initHistory](#OG.renderer.IRenderer+initHistory)</code>  
<a name="OG.renderer.IRenderer+addHistory"></a>

##### raphaelRenderer.addHistory()
캔버스에 히스토리를 추가한다.

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[addHistory](#OG.renderer.IRenderer+addHistory)</code>  
<a name="OG.renderer.IRenderer+undo"></a>

##### raphaelRenderer.undo()
캔버스의 Undo

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[undo](#OG.renderer.IRenderer+undo)</code>  
<a name="OG.renderer.IRenderer+redo"></a>

##### raphaelRenderer.redo()
캔버스의 Redo

**Kind**: instance method of <code>[RaphaelRenderer](#OG.renderer.RaphaelRenderer)</code>  
**Overrides:** <code>[redo](#OG.renderer.IRenderer+redo)</code>  
<a name="OG.marker"></a>

### OG.marker : <code>object</code>
**Kind**: static namespace of <code>[OG](#OG)</code>  

* [.marker](#OG.marker) : <code>object</code>
    * [.ArrowMarker](#OG.marker.ArrowMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
        * [new OG.marker.ArrowMarker()](#new_OG.marker.ArrowMarker_new)
        * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
        * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
    * [.CircleMarker](#OG.marker.CircleMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
        * [new OG.marker.CircleMarker()](#new_OG.marker.CircleMarker_new)
        * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
        * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
    * [.IMarker](#OG.marker.IMarker)
        * [new OG.marker.IMarker()](#new_OG.marker.IMarker_new)
        * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
        * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * *[.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>*
    * [.RectangleMarker](#OG.marker.RectangleMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
        * [new OG.marker.RectangleMarker()](#new_OG.marker.RectangleMarker_new)
        * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
        * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
    * [.SwitchLMarker](#OG.marker.SwitchLMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
        * [new OG.marker.SwitchLMarker()](#new_OG.marker.SwitchLMarker_new)
        * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
        * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
    * [.SwitchRMarker](#OG.marker.SwitchRMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
        * [new OG.marker.SwitchRMarker()](#new_OG.marker.SwitchRMarker_new)
        * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
        * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>
    * [.SwitchXMarker](#OG.marker.SwitchXMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
        * [new OG.marker.SwitchXMarker()](#new_OG.marker.SwitchXMarker_new)
        * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
        * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>

<a name="OG.marker.ArrowMarker"></a>

#### marker.ArrowMarker ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
**Kind**: static class of <code>[marker](#OG.marker)</code>  
**Extends:** <code>[IMarker](#OG.marker.IMarker)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.ArrowMarker](#OG.marker.ArrowMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
    * [new OG.marker.ArrowMarker()](#new_OG.marker.ArrowMarker_new)
    * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
    * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>

<a name="new_OG.marker.ArrowMarker_new"></a>

##### new OG.marker.ArrowMarker()
Rectangle Maker

<a name="OG.marker.IMarker+MARKER_ID"></a>

##### arrowMarker.MARKER_ID : <code>String</code>
marker 을 구분하는 marker ID(marker 클래스명과 일치)

**Kind**: instance property of <code>[ArrowMarker](#OG.marker.ArrowMarker)</code>  
**Overrides:** <code>[MARKER_ID](#OG.marker.IMarker+MARKER_ID)</code>  
<a name="OG.marker.IMarker+geom"></a>

##### arrowMarker.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
marker 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[ArrowMarker](#OG.marker.ArrowMarker)</code>  
**Overrides:** <code>[geom](#OG.marker.IMarker+geom)</code>  
<a name="OG.marker.IMarker+createMarker"></a>

##### arrowMarker.createMarker() ⇒ <code>\*</code>
드로잉할 marker 를 생성하여 반환한다.

**Kind**: instance method of <code>[ArrowMarker](#OG.marker.ArrowMarker)</code>  
**Overrides:** <code>[createMarker](#OG.marker.IMarker+createMarker)</code>  
**Returns**: <code>\*</code> - Marker 정보  
<a name="OG.marker.CircleMarker"></a>

#### marker.CircleMarker ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
**Kind**: static class of <code>[marker](#OG.marker)</code>  
**Extends:** <code>[IMarker](#OG.marker.IMarker)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.CircleMarker](#OG.marker.CircleMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
    * [new OG.marker.CircleMarker()](#new_OG.marker.CircleMarker_new)
    * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
    * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>

<a name="new_OG.marker.CircleMarker_new"></a>

##### new OG.marker.CircleMarker()
Circle Marker

<a name="OG.marker.IMarker+MARKER_ID"></a>

##### circleMarker.MARKER_ID : <code>String</code>
marker 을 구분하는 marker ID(marker 클래스명과 일치)

**Kind**: instance property of <code>[CircleMarker](#OG.marker.CircleMarker)</code>  
**Overrides:** <code>[MARKER_ID](#OG.marker.IMarker+MARKER_ID)</code>  
<a name="OG.marker.IMarker+geom"></a>

##### circleMarker.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
marker 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[CircleMarker](#OG.marker.CircleMarker)</code>  
**Overrides:** <code>[geom](#OG.marker.IMarker+geom)</code>  
<a name="OG.marker.IMarker+createMarker"></a>

##### circleMarker.createMarker() ⇒ <code>\*</code>
드로잉할 marker 를 생성하여 반환한다.

**Kind**: instance method of <code>[CircleMarker](#OG.marker.CircleMarker)</code>  
**Overrides:** <code>[createMarker](#OG.marker.IMarker+createMarker)</code>  
**Returns**: <code>\*</code> - Marker 정보  
<a name="OG.marker.IMarker"></a>

#### marker.IMarker
**Kind**: static class of <code>[marker](#OG.marker)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.IMarker](#OG.marker.IMarker)
    * [new OG.marker.IMarker()](#new_OG.marker.IMarker_new)
    * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
    * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * *[.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>*

<a name="new_OG.marker.IMarker_new"></a>

##### new OG.marker.IMarker()
도형 Path 의 Marker 정보 최상위 인터페이스

<a name="OG.marker.IMarker+MARKER_ID"></a>

##### iMarker.MARKER_ID : <code>String</code>
marker 을 구분하는 marker ID(marker 클래스명과 일치)

**Kind**: instance property of <code>[IMarker](#OG.marker.IMarker)</code>  
<a name="OG.marker.IMarker+geom"></a>

##### iMarker.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
marker 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[IMarker](#OG.marker.IMarker)</code>  
<a name="OG.marker.IMarker+createMarker"></a>

##### *iMarker.createMarker() ⇒ <code>\*</code>*
드로잉할 marker 를 생성하여 반환한다.

**Kind**: instance abstract method of <code>[IMarker](#OG.marker.IMarker)</code>  
**Returns**: <code>\*</code> - Marker 정보  
<a name="OG.marker.RectangleMarker"></a>

#### marker.RectangleMarker ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
**Kind**: static class of <code>[marker](#OG.marker)</code>  
**Extends:** <code>[IMarker](#OG.marker.IMarker)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.RectangleMarker](#OG.marker.RectangleMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
    * [new OG.marker.RectangleMarker()](#new_OG.marker.RectangleMarker_new)
    * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
    * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>

<a name="new_OG.marker.RectangleMarker_new"></a>

##### new OG.marker.RectangleMarker()
Rectangle Maker

<a name="OG.marker.IMarker+MARKER_ID"></a>

##### rectangleMarker.MARKER_ID : <code>String</code>
marker 을 구분하는 marker ID(marker 클래스명과 일치)

**Kind**: instance property of <code>[RectangleMarker](#OG.marker.RectangleMarker)</code>  
**Overrides:** <code>[MARKER_ID](#OG.marker.IMarker+MARKER_ID)</code>  
<a name="OG.marker.IMarker+geom"></a>

##### rectangleMarker.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
marker 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[RectangleMarker](#OG.marker.RectangleMarker)</code>  
**Overrides:** <code>[geom](#OG.marker.IMarker+geom)</code>  
<a name="OG.marker.IMarker+createMarker"></a>

##### rectangleMarker.createMarker() ⇒ <code>\*</code>
드로잉할 marker 를 생성하여 반환한다.

**Kind**: instance method of <code>[RectangleMarker](#OG.marker.RectangleMarker)</code>  
**Overrides:** <code>[createMarker](#OG.marker.IMarker+createMarker)</code>  
**Returns**: <code>\*</code> - Marker 정보  
<a name="OG.marker.SwitchLMarker"></a>

#### marker.SwitchLMarker ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
**Kind**: static class of <code>[marker](#OG.marker)</code>  
**Extends:** <code>[IMarker](#OG.marker.IMarker)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.SwitchLMarker](#OG.marker.SwitchLMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
    * [new OG.marker.SwitchLMarker()](#new_OG.marker.SwitchLMarker_new)
    * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
    * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>

<a name="new_OG.marker.SwitchLMarker_new"></a>

##### new OG.marker.SwitchLMarker()
Rectangle Maker

<a name="OG.marker.IMarker+MARKER_ID"></a>

##### switchLMarker.MARKER_ID : <code>String</code>
marker 을 구분하는 marker ID(marker 클래스명과 일치)

**Kind**: instance property of <code>[SwitchLMarker](#OG.marker.SwitchLMarker)</code>  
**Overrides:** <code>[MARKER_ID](#OG.marker.IMarker+MARKER_ID)</code>  
<a name="OG.marker.IMarker+geom"></a>

##### switchLMarker.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
marker 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[SwitchLMarker](#OG.marker.SwitchLMarker)</code>  
**Overrides:** <code>[geom](#OG.marker.IMarker+geom)</code>  
<a name="OG.marker.IMarker+createMarker"></a>

##### switchLMarker.createMarker() ⇒ <code>\*</code>
드로잉할 marker 를 생성하여 반환한다.

**Kind**: instance method of <code>[SwitchLMarker](#OG.marker.SwitchLMarker)</code>  
**Overrides:** <code>[createMarker](#OG.marker.IMarker+createMarker)</code>  
**Returns**: <code>\*</code> - Marker 정보  
<a name="OG.marker.SwitchRMarker"></a>

#### marker.SwitchRMarker ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
**Kind**: static class of <code>[marker](#OG.marker)</code>  
**Extends:** <code>[IMarker](#OG.marker.IMarker)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.SwitchRMarker](#OG.marker.SwitchRMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
    * [new OG.marker.SwitchRMarker()](#new_OG.marker.SwitchRMarker_new)
    * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
    * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>

<a name="new_OG.marker.SwitchRMarker_new"></a>

##### new OG.marker.SwitchRMarker()
Rectangle Maker

<a name="OG.marker.IMarker+MARKER_ID"></a>

##### switchRMarker.MARKER_ID : <code>String</code>
marker 을 구분하는 marker ID(marker 클래스명과 일치)

**Kind**: instance property of <code>[SwitchRMarker](#OG.marker.SwitchRMarker)</code>  
**Overrides:** <code>[MARKER_ID](#OG.marker.IMarker+MARKER_ID)</code>  
<a name="OG.marker.IMarker+geom"></a>

##### switchRMarker.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
marker 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[SwitchRMarker](#OG.marker.SwitchRMarker)</code>  
**Overrides:** <code>[geom](#OG.marker.IMarker+geom)</code>  
<a name="OG.marker.IMarker+createMarker"></a>

##### switchRMarker.createMarker() ⇒ <code>\*</code>
드로잉할 marker 를 생성하여 반환한다.

**Kind**: instance method of <code>[SwitchRMarker](#OG.marker.SwitchRMarker)</code>  
**Overrides:** <code>[createMarker](#OG.marker.IMarker+createMarker)</code>  
**Returns**: <code>\*</code> - Marker 정보  
<a name="OG.marker.SwitchXMarker"></a>

#### marker.SwitchXMarker ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
**Kind**: static class of <code>[marker](#OG.marker)</code>  
**Extends:** <code>[IMarker](#OG.marker.IMarker)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.SwitchXMarker](#OG.marker.SwitchXMarker) ⇐ <code>[IMarker](#OG.marker.IMarker)</code>
    * [new OG.marker.SwitchXMarker()](#new_OG.marker.SwitchXMarker_new)
    * [.MARKER_ID](#OG.marker.IMarker+MARKER_ID) : <code>String</code>
    * [.geom](#OG.marker.IMarker+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.createMarker()](#OG.marker.IMarker+createMarker) ⇒ <code>\*</code>

<a name="new_OG.marker.SwitchXMarker_new"></a>

##### new OG.marker.SwitchXMarker()
Rectangle Maker

<a name="OG.marker.IMarker+MARKER_ID"></a>

##### switchXMarker.MARKER_ID : <code>String</code>
marker 을 구분하는 marker ID(marker 클래스명과 일치)

**Kind**: instance property of <code>[SwitchXMarker](#OG.marker.SwitchXMarker)</code>  
**Overrides:** <code>[MARKER_ID](#OG.marker.IMarker+MARKER_ID)</code>  
<a name="OG.marker.IMarker+geom"></a>

##### switchXMarker.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
marker 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[SwitchXMarker](#OG.marker.SwitchXMarker)</code>  
**Overrides:** <code>[geom](#OG.marker.IMarker+geom)</code>  
<a name="OG.marker.IMarker+createMarker"></a>

##### switchXMarker.createMarker() ⇒ <code>\*</code>
드로잉할 marker 를 생성하여 반환한다.

**Kind**: instance method of <code>[SwitchXMarker](#OG.marker.SwitchXMarker)</code>  
**Overrides:** <code>[createMarker](#OG.marker.IMarker+createMarker)</code>  
**Returns**: <code>\*</code> - Marker 정보  
<a name="OG.pattern"></a>

### OG.pattern : <code>object</code>
**Kind**: static namespace of <code>[OG](#OG)</code>  

* [.pattern](#OG.pattern) : <code>object</code>
    * [.HatchedPattern](#OG.pattern.HatchedPattern) ⇐ <code>[IPattern](#OG.pattern.IPattern)</code>
        * [new OG.pattern.HatchedPattern()](#new_OG.pattern.HatchedPattern_new)
        * [.PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID) : <code>String</code>
        * [.geom](#OG.pattern.IPattern+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.createPattern()](#OG.pattern.IPattern+createPattern) ⇒ <code>\*</code>
    * [.IPattern](#OG.pattern.IPattern)
        * [new OG.pattern.IPattern()](#new_OG.pattern.IPattern_new)
        * [.PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID) : <code>String</code>
        * [.geom](#OG.pattern.IPattern+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * *[.createPattern()](#OG.pattern.IPattern+createPattern) ⇒ <code>\*</code>*
    * [.RectPattern](#OG.pattern.RectPattern) ⇐ <code>[IPattern](#OG.pattern.IPattern)</code>
        * [new OG.pattern.RectPattern()](#new_OG.pattern.RectPattern_new)
        * [.PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID) : <code>String</code>
        * [.geom](#OG.pattern.IPattern+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.createPattern()](#OG.pattern.IPattern+createPattern) ⇒ <code>\*</code>

<a name="OG.pattern.HatchedPattern"></a>

#### pattern.HatchedPattern ⇐ <code>[IPattern](#OG.pattern.IPattern)</code>
**Kind**: static class of <code>[pattern](#OG.pattern)</code>  
**Extends:** <code>[IPattern](#OG.pattern.IPattern)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.HatchedPattern](#OG.pattern.HatchedPattern) ⇐ <code>[IPattern](#OG.pattern.IPattern)</code>
    * [new OG.pattern.HatchedPattern()](#new_OG.pattern.HatchedPattern_new)
    * [.PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID) : <code>String</code>
    * [.geom](#OG.pattern.IPattern+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.createPattern()](#OG.pattern.IPattern+createPattern) ⇒ <code>\*</code>

<a name="new_OG.pattern.HatchedPattern_new"></a>

##### new OG.pattern.HatchedPattern()
Hatched Pattern

<a name="OG.pattern.IPattern+PATTERN_ID"></a>

##### hatchedPattern.PATTERN_ID : <code>String</code>
pattern 을 구분하는 pattern ID(pattern 클래스명과 일치)

**Kind**: instance property of <code>[HatchedPattern](#OG.pattern.HatchedPattern)</code>  
**Overrides:** <code>[PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID)</code>  
<a name="OG.pattern.IPattern+geom"></a>

##### hatchedPattern.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
pattern 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[HatchedPattern](#OG.pattern.HatchedPattern)</code>  
**Overrides:** <code>[geom](#OG.pattern.IPattern+geom)</code>  
<a name="OG.pattern.IPattern+createPattern"></a>

##### hatchedPattern.createPattern() ⇒ <code>\*</code>
드로잉할 pattern 를 생성하여 반환한다.

**Kind**: instance method of <code>[HatchedPattern](#OG.pattern.HatchedPattern)</code>  
**Overrides:** <code>[createPattern](#OG.pattern.IPattern+createPattern)</code>  
**Returns**: <code>\*</code> - pattern 정보  
<a name="OG.pattern.IPattern"></a>

#### pattern.IPattern
**Kind**: static class of <code>[pattern](#OG.pattern)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.IPattern](#OG.pattern.IPattern)
    * [new OG.pattern.IPattern()](#new_OG.pattern.IPattern_new)
    * [.PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID) : <code>String</code>
    * [.geom](#OG.pattern.IPattern+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * *[.createPattern()](#OG.pattern.IPattern+createPattern) ⇒ <code>\*</code>*

<a name="new_OG.pattern.IPattern_new"></a>

##### new OG.pattern.IPattern()
도형 Pattern 정보 최상위 인터페이스

<a name="OG.pattern.IPattern+PATTERN_ID"></a>

##### iPattern.PATTERN_ID : <code>String</code>
pattern 을 구분하는 pattern ID(pattern 클래스명과 일치)

**Kind**: instance property of <code>[IPattern](#OG.pattern.IPattern)</code>  
<a name="OG.pattern.IPattern+geom"></a>

##### iPattern.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
pattern 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[IPattern](#OG.pattern.IPattern)</code>  
<a name="OG.pattern.IPattern+createPattern"></a>

##### *iPattern.createPattern() ⇒ <code>\*</code>*
드로잉할 pattern 를 생성하여 반환한다.

**Kind**: instance abstract method of <code>[IPattern](#OG.pattern.IPattern)</code>  
**Returns**: <code>\*</code> - pattern 정보  
<a name="OG.pattern.RectPattern"></a>

#### pattern.RectPattern ⇐ <code>[IPattern](#OG.pattern.IPattern)</code>
**Kind**: static class of <code>[pattern](#OG.pattern)</code>  
**Extends:** <code>[IPattern](#OG.pattern.IPattern)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.RectPattern](#OG.pattern.RectPattern) ⇐ <code>[IPattern](#OG.pattern.IPattern)</code>
    * [new OG.pattern.RectPattern()](#new_OG.pattern.RectPattern_new)
    * [.PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID) : <code>String</code>
    * [.geom](#OG.pattern.IPattern+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.createPattern()](#OG.pattern.IPattern+createPattern) ⇒ <code>\*</code>

<a name="new_OG.pattern.RectPattern_new"></a>

##### new OG.pattern.RectPattern()
Rect Pattern

<a name="OG.pattern.IPattern+PATTERN_ID"></a>

##### rectPattern.PATTERN_ID : <code>String</code>
pattern 을 구분하는 pattern ID(pattern 클래스명과 일치)

**Kind**: instance property of <code>[RectPattern](#OG.pattern.RectPattern)</code>  
**Overrides:** <code>[PATTERN_ID](#OG.pattern.IPattern+PATTERN_ID)</code>  
<a name="OG.pattern.IPattern+geom"></a>

##### rectPattern.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
pattern 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[RectPattern](#OG.pattern.RectPattern)</code>  
**Overrides:** <code>[geom](#OG.pattern.IPattern+geom)</code>  
<a name="OG.pattern.IPattern+createPattern"></a>

##### rectPattern.createPattern() ⇒ <code>\*</code>
드로잉할 pattern 를 생성하여 반환한다.

**Kind**: instance method of <code>[RectPattern](#OG.pattern.RectPattern)</code>  
**Overrides:** <code>[createPattern](#OG.pattern.IPattern+createPattern)</code>  
**Returns**: <code>\*</code> - pattern 정보  
<a name="OG.shape"></a>

### OG.shape : <code>object</code>
**Kind**: static namespace of <code>[OG](#OG)</code>  

* [.shape](#OG.shape) : <code>object</code>
    * [.CircleShape](#OG.shape.CircleShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
        * [new OG.shape.CircleShape(label)](#new_OG.shape.CircleShape_new)
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.EdgeShape](#OG.shape.EdgeShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
        * [new OG.shape.EdgeShape(from, to, label, fromLabel, toLabel)](#new_OG.shape.EdgeShape_new)
        * [.from](#OG.shape.EdgeShape+from) : <code>Array.&lt;Number&gt;</code>
        * [.to](#OG.shape.EdgeShape+to) : <code>Array.&lt;Number&gt;</code>
        * [.fromLabel](#OG.shape.EdgeShape+fromLabel) : <code>String</code>
        * [.toLabel](#OG.shape.EdgeShape+toLabel) : <code>String</code>
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.EllipseShape](#OG.shape.EllipseShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
        * [new OG.shape.EllipseShape(label)](#new_OG.shape.EllipseShape_new)
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.GeomShape](#OG.shape.GeomShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
        * [new OG.shape.GeomShape()](#new_OG.shape.GeomShape_new)
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * *[.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>*
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.GroupShape](#OG.shape.GroupShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
        * [new OG.shape.GroupShape(label)](#new_OG.shape.GroupShape_new)
        * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
        * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.HorizontalLaneShape](#OG.shape.HorizontalLaneShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
        * [new OG.shape.HorizontalLaneShape(label)](#new_OG.shape.HorizontalLaneShape_new)
        * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
        * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.HorizontalPoolShape](#OG.shape.HorizontalPoolShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
        * [new OG.shape.HorizontalPoolShape(label)](#new_OG.shape.HorizontalPoolShape_new)
        * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
        * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.HtmlShape](#OG.shape.HtmlShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
        * [new OG.shape.HtmlShape(html, label)](#new_OG.shape.HtmlShape_new)
        * [.html](#OG.shape.HtmlShape+html) : <code>String</code>
        * [.angle](#OG.shape.HtmlShape+angle) : <code>Number</code>
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.IShape](#OG.shape.IShape)
        * [new OG.shape.IShape()](#new_OG.shape.IShape_new)
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * *[.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>*
        * *[.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>*
    * [.ImageShape](#OG.shape.ImageShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
        * [new OG.shape.ImageShape(image, label)](#new_OG.shape.ImageShape_new)
        * [.image](#OG.shape.ImageShape+image) : <code>String</code>
        * [.angle](#OG.shape.ImageShape+angle) : <code>Number</code>
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.RectangleShape](#OG.shape.RectangleShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
        * [new OG.shape.RectangleShape(label)](#new_OG.shape.RectangleShape_new)
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.SpotShape](#OG.shape.SpotShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
        * [new OG.shape.SpotShape(label)](#new_OG.shape.SpotShape_new)
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.TextShape](#OG.shape.TextShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
        * [new OG.shape.TextShape(text)](#new_OG.shape.TextShape_new)
        * [.text](#OG.shape.TextShape+text) : <code>String</code>
        * [.angle](#OG.shape.TextShape+angle) : <code>Number</code>
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.VerticalLaneShape](#OG.shape.VerticalLaneShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
        * [new OG.shape.VerticalLaneShape(label)](#new_OG.shape.VerticalLaneShape_new)
        * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
        * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.VerticalPoolShape](#OG.shape.VerticalPoolShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
        * [new OG.shape.VerticalPoolShape(label)](#new_OG.shape.VerticalPoolShape_new)
        * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
        * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
        * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
        * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
        * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
        * [.label](#OG.shape.IShape+label) : <code>String</code>
        * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
        * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
        * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
        * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
        * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
        * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
        * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
        * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
        * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
        * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
        * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
        * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
        * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
        * [.data](#OG.shape.IShape+data) : <code>Object</code>
        * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
        * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
        * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.bpmn](#OG.shape.bpmn) : <code>object</code>
    * [.elec](#OG.shape.elec) : <code>object</code>

<a name="OG.shape.CircleShape"></a>

#### shape.CircleShape ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[GeomShape](#OG.shape.GeomShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.CircleShape](#OG.shape.CircleShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
    * [new OG.shape.CircleShape(label)](#new_OG.shape.CircleShape_new)
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>

<a name="new_OG.shape.CircleShape_new"></a>

##### new OG.shape.CircleShape(label)
Circle Shape


| Param | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | 라벨 [Optional] |

<a name="OG.shape.IShape+TYPE"></a>

##### circleShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### circleShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### circleShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
**Overrides:** <code>[geom](#OG.shape.IShape+geom)</code>  
<a name="OG.shape.IShape+label"></a>

##### circleShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
**Overrides:** <code>[label](#OG.shape.IShape+label)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### circleShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### circleShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### circleShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### circleShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### circleShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### circleShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### circleShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### circleShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### circleShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### circleShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### circleShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### circleShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### circleShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### circleShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### circleShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[CircleShape](#OG.shape.CircleShape)</code>  
<a name="OG.shape.IShape+clone"></a>

##### circleShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[CircleShape](#OG.shape.CircleShape)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.IShape+createShape"></a>

##### circleShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[CircleShape](#OG.shape.CircleShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.EdgeShape"></a>

#### shape.EdgeShape ⇐ <code>[IShape](#OG.shape.IShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[IShape](#OG.shape.IShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.EdgeShape](#OG.shape.EdgeShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
    * [new OG.shape.EdgeShape(from, to, label, fromLabel, toLabel)](#new_OG.shape.EdgeShape_new)
    * [.from](#OG.shape.EdgeShape+from) : <code>Array.&lt;Number&gt;</code>
    * [.to](#OG.shape.EdgeShape+to) : <code>Array.&lt;Number&gt;</code>
    * [.fromLabel](#OG.shape.EdgeShape+fromLabel) : <code>String</code>
    * [.toLabel](#OG.shape.EdgeShape+toLabel) : <code>String</code>
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>

<a name="new_OG.shape.EdgeShape_new"></a>

##### new OG.shape.EdgeShape(from, to, label, fromLabel, toLabel)
Edge Shape


| Param | Type | Description |
| --- | --- | --- |
| from | <code>Array.&lt;Number&gt;</code> | 와이어 시작 좌표 |
| to | <code>Array.&lt;Number&gt;</code> | 와이어 끝 좌표 |
| label | <code>String</code> | 라벨 [Optional] |
| fromLabel | <code>String</code> | 시작점 라벨 [Optional] |
| toLabel | <code>String</code> | 끝점 라벨 [Optional] |

<a name="OG.shape.EdgeShape+from"></a>

##### edgeShape.from : <code>Array.&lt;Number&gt;</code>
Edge 시작 좌표

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.EdgeShape+to"></a>

##### edgeShape.to : <code>Array.&lt;Number&gt;</code>
Edge 끝 좌표

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.EdgeShape+fromLabel"></a>

##### edgeShape.fromLabel : <code>String</code>
Edge 시작점 라벨

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.EdgeShape+toLabel"></a>

##### edgeShape.toLabel : <code>String</code>
Edge 끝점 라벨

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+TYPE"></a>

##### edgeShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
**Overrides:** <code>[TYPE](#OG.shape.IShape+TYPE)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### edgeShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### edgeShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
**Overrides:** <code>[geom](#OG.shape.IShape+geom)</code>  
<a name="OG.shape.IShape+label"></a>

##### edgeShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
**Overrides:** <code>[label](#OG.shape.IShape+label)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### edgeShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### edgeShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### edgeShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### edgeShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### edgeShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### edgeShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### edgeShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### edgeShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### edgeShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### edgeShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### edgeShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### edgeShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### edgeShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### edgeShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### edgeShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### edgeShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### edgeShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[EdgeShape](#OG.shape.EdgeShape)</code>  
**Overrides:** <code>[clone](#OG.shape.IShape+clone)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.EllipseShape"></a>

#### shape.EllipseShape ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[GeomShape](#OG.shape.GeomShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.EllipseShape](#OG.shape.EllipseShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
    * [new OG.shape.EllipseShape(label)](#new_OG.shape.EllipseShape_new)
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>

<a name="new_OG.shape.EllipseShape_new"></a>

##### new OG.shape.EllipseShape(label)
Ellipse Shape


| Param | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | 라벨 [Optional] |

<a name="OG.shape.IShape+TYPE"></a>

##### ellipseShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### ellipseShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### ellipseShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
**Overrides:** <code>[geom](#OG.shape.IShape+geom)</code>  
<a name="OG.shape.IShape+label"></a>

##### ellipseShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
**Overrides:** <code>[label](#OG.shape.IShape+label)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### ellipseShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### ellipseShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### ellipseShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### ellipseShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### ellipseShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### ellipseShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### ellipseShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### ellipseShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### ellipseShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### ellipseShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### ellipseShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### ellipseShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### ellipseShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### ellipseShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### ellipseShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
<a name="OG.shape.IShape+clone"></a>

##### ellipseShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.IShape+createShape"></a>

##### ellipseShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[EllipseShape](#OG.shape.EllipseShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.GeomShape"></a>

#### shape.GeomShape ⇐ <code>[IShape](#OG.shape.IShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[IShape](#OG.shape.IShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.GeomShape](#OG.shape.GeomShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
    * [new OG.shape.GeomShape()](#new_OG.shape.GeomShape_new)
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * *[.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>*
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>

<a name="new_OG.shape.GeomShape_new"></a>

##### new OG.shape.GeomShape()
Geometry Shape

<a name="OG.shape.IShape+TYPE"></a>

##### geomShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
**Overrides:** <code>[TYPE](#OG.shape.IShape+TYPE)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### geomShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+geom"></a>

##### geomShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+label"></a>

##### geomShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### geomShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### geomShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### geomShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### geomShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### geomShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### geomShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### geomShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### geomShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### geomShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### geomShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### geomShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### geomShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### geomShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### geomShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### geomShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[GeomShape](#OG.shape.GeomShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### *geomShape.createShape() ⇒ <code>\*</code>*
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance abstract method of <code>[GeomShape](#OG.shape.GeomShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### geomShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[GeomShape](#OG.shape.GeomShape)</code>  
**Overrides:** <code>[clone](#OG.shape.IShape+clone)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.GroupShape"></a>

#### shape.GroupShape ⇐ <code>[IShape](#OG.shape.IShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[IShape](#OG.shape.IShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.GroupShape](#OG.shape.GroupShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
    * [new OG.shape.GroupShape(label)](#new_OG.shape.GroupShape_new)
    * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
    * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>

<a name="new_OG.shape.GroupShape_new"></a>

##### new OG.shape.GroupShape(label)
Group Shape


| Param | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | 라벨 [Optional] |

<a name="OG.shape.GroupShape+GROUP_DROPABLE"></a>

##### groupShape.GROUP_DROPABLE : <code>Boolean</code>
그룹핑 가능여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.GroupShape+GROUP_COLLAPSIBLE"></a>

##### groupShape.GROUP_COLLAPSIBLE : <code>Boolean</code>
최소화 가능여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+TYPE"></a>

##### groupShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Overrides:** <code>[TYPE](#OG.shape.IShape+TYPE)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### groupShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### groupShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Overrides:** <code>[geom](#OG.shape.IShape+geom)</code>  
<a name="OG.shape.IShape+label"></a>

##### groupShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Overrides:** <code>[label](#OG.shape.IShape+label)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### groupShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### groupShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### groupShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### groupShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### groupShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Overrides:** <code>[CONNECTABLE](#OG.shape.IShape+CONNECTABLE)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### groupShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### groupShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### groupShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Overrides:** <code>[SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### groupShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### groupShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### groupShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### groupShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### groupShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### groupShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### groupShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[GroupShape](#OG.shape.GroupShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### groupShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### groupShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Overrides:** <code>[clone](#OG.shape.IShape+clone)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.HorizontalLaneShape"></a>

#### shape.HorizontalLaneShape ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.HorizontalLaneShape](#OG.shape.HorizontalLaneShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
    * [new OG.shape.HorizontalLaneShape(label)](#new_OG.shape.HorizontalLaneShape_new)
    * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
    * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>

<a name="new_OG.shape.HorizontalLaneShape_new"></a>

##### new OG.shape.HorizontalLaneShape(label)
Horizontal Swimlane Shape


| Param | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | 라벨 [Optional] |

<a name="OG.shape.GroupShape+GROUP_DROPABLE"></a>

##### horizontalLaneShape.GROUP_DROPABLE : <code>Boolean</code>
그룹핑 가능여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.GroupShape+GROUP_COLLAPSIBLE"></a>

##### horizontalLaneShape.GROUP_COLLAPSIBLE : <code>Boolean</code>
최소화 가능여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+TYPE"></a>

##### horizontalLaneShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### horizontalLaneShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### horizontalLaneShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
**Overrides:** <code>[geom](#OG.shape.IShape+geom)</code>  
<a name="OG.shape.IShape+label"></a>

##### horizontalLaneShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### horizontalLaneShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### horizontalLaneShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### horizontalLaneShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### horizontalLaneShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### horizontalLaneShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### horizontalLaneShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### horizontalLaneShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### horizontalLaneShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### horizontalLaneShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### horizontalLaneShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### horizontalLaneShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### horizontalLaneShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### horizontalLaneShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### horizontalLaneShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### horizontalLaneShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### horizontalLaneShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### horizontalLaneShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[HorizontalLaneShape](#OG.shape.HorizontalLaneShape)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.HorizontalPoolShape"></a>

#### shape.HorizontalPoolShape ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.HorizontalPoolShape](#OG.shape.HorizontalPoolShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
    * [new OG.shape.HorizontalPoolShape(label)](#new_OG.shape.HorizontalPoolShape_new)
    * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
    * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>

<a name="new_OG.shape.HorizontalPoolShape_new"></a>

##### new OG.shape.HorizontalPoolShape(label)
Horizontal Pool Shape


| Param | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | 라벨 [Optional] |

<a name="OG.shape.GroupShape+GROUP_DROPABLE"></a>

##### horizontalPoolShape.GROUP_DROPABLE : <code>Boolean</code>
그룹핑 가능여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.GroupShape+GROUP_COLLAPSIBLE"></a>

##### horizontalPoolShape.GROUP_COLLAPSIBLE : <code>Boolean</code>
최소화 가능여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
**Overrides:** <code>[GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE)</code>  
<a name="OG.shape.IShape+TYPE"></a>

##### horizontalPoolShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### horizontalPoolShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### horizontalPoolShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
**Overrides:** <code>[geom](#OG.shape.IShape+geom)</code>  
<a name="OG.shape.IShape+label"></a>

##### horizontalPoolShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
**Overrides:** <code>[label](#OG.shape.IShape+label)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### horizontalPoolShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### horizontalPoolShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### horizontalPoolShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### horizontalPoolShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### horizontalPoolShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
**Overrides:** <code>[CONNECTABLE](#OG.shape.IShape+CONNECTABLE)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### horizontalPoolShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### horizontalPoolShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### horizontalPoolShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### horizontalPoolShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### horizontalPoolShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### horizontalPoolShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### horizontalPoolShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### horizontalPoolShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### horizontalPoolShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### horizontalPoolShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### horizontalPoolShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### horizontalPoolShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[HorizontalPoolShape](#OG.shape.HorizontalPoolShape)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.HtmlShape"></a>

#### shape.HtmlShape ⇐ <code>[IShape](#OG.shape.IShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[IShape](#OG.shape.IShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.HtmlShape](#OG.shape.HtmlShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
    * [new OG.shape.HtmlShape(html, label)](#new_OG.shape.HtmlShape_new)
    * [.html](#OG.shape.HtmlShape+html) : <code>String</code>
    * [.angle](#OG.shape.HtmlShape+angle) : <code>Number</code>
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>

<a name="new_OG.shape.HtmlShape_new"></a>

##### new OG.shape.HtmlShape(html, label)
ForeignObject HTML Shape


| Param | Type | Description |
| --- | --- | --- |
| html | <code>String</code> | 임베드 HTML String |
| label | <code>String</code> | 라벨 [Optional] |

<a name="OG.shape.HtmlShape+html"></a>

##### htmlShape.html : <code>String</code>
드로잉할 임베드 HTML String

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.HtmlShape+angle"></a>

##### htmlShape.angle : <code>Number</code>
회전각도

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+TYPE"></a>

##### htmlShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
**Overrides:** <code>[TYPE](#OG.shape.IShape+TYPE)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### htmlShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### htmlShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+label"></a>

##### htmlShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
**Overrides:** <code>[label](#OG.shape.IShape+label)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### htmlShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### htmlShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### htmlShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### htmlShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### htmlShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### htmlShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### htmlShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### htmlShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### htmlShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### htmlShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### htmlShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### htmlShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### htmlShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### htmlShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### htmlShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### htmlShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### htmlShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[HtmlShape](#OG.shape.HtmlShape)</code>  
**Overrides:** <code>[clone](#OG.shape.IShape+clone)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.IShape"></a>

#### shape.IShape
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.IShape](#OG.shape.IShape)
    * [new OG.shape.IShape()](#new_OG.shape.IShape_new)
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * *[.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>*
    * *[.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>*

<a name="new_OG.shape.IShape_new"></a>

##### new OG.shape.IShape()
도형, 텍스트, 이미지 등의 드로잉 될 Object 의 정보를 저장하는 Shape 정보 최상위 인터페이스

<a name="OG.shape.IShape+TYPE"></a>

##### iShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### iShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+geom"></a>

##### iShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+label"></a>

##### iShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### iShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### iShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### iShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### iShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### iShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### iShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### iShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### iShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### iShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### iShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### iShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### iShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### iShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### iShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### iShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[IShape](#OG.shape.IShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### *iShape.createShape() ⇒ <code>\*</code>*
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance abstract method of <code>[IShape](#OG.shape.IShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### *iShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>*
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance abstract method of <code>[IShape](#OG.shape.IShape)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.ImageShape"></a>

#### shape.ImageShape ⇐ <code>[IShape](#OG.shape.IShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[IShape](#OG.shape.IShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.ImageShape](#OG.shape.ImageShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
    * [new OG.shape.ImageShape(image, label)](#new_OG.shape.ImageShape_new)
    * [.image](#OG.shape.ImageShape+image) : <code>String</code>
    * [.angle](#OG.shape.ImageShape+angle) : <code>Number</code>
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>

<a name="new_OG.shape.ImageShape_new"></a>

##### new OG.shape.ImageShape(image, label)
Image Shape


| Param | Type | Description |
| --- | --- | --- |
| image | <code>String</code> | 이미지 URL |
| label | <code>String</code> | 라벨 [Optional] |

<a name="OG.shape.ImageShape+image"></a>

##### imageShape.image : <code>String</code>
드로잉할 이미지 URL

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.ImageShape+angle"></a>

##### imageShape.angle : <code>Number</code>
회전각도

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+TYPE"></a>

##### imageShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
**Overrides:** <code>[TYPE](#OG.shape.IShape+TYPE)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### imageShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### imageShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+label"></a>

##### imageShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
**Overrides:** <code>[label](#OG.shape.IShape+label)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### imageShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### imageShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### imageShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### imageShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### imageShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### imageShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### imageShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### imageShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### imageShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### imageShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### imageShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### imageShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### imageShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### imageShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### imageShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[ImageShape](#OG.shape.ImageShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### imageShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[ImageShape](#OG.shape.ImageShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### imageShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[ImageShape](#OG.shape.ImageShape)</code>  
**Overrides:** <code>[clone](#OG.shape.IShape+clone)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.RectangleShape"></a>

#### shape.RectangleShape ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[GeomShape](#OG.shape.GeomShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.RectangleShape](#OG.shape.RectangleShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
    * [new OG.shape.RectangleShape(label)](#new_OG.shape.RectangleShape_new)
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>

<a name="new_OG.shape.RectangleShape_new"></a>

##### new OG.shape.RectangleShape(label)
Rectangle Shape


| Param | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | 라벨 [Optional] |

<a name="OG.shape.IShape+TYPE"></a>

##### rectangleShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### rectangleShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### rectangleShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
**Overrides:** <code>[geom](#OG.shape.IShape+geom)</code>  
<a name="OG.shape.IShape+label"></a>

##### rectangleShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
**Overrides:** <code>[label](#OG.shape.IShape+label)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### rectangleShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### rectangleShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### rectangleShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### rectangleShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### rectangleShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### rectangleShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### rectangleShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### rectangleShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### rectangleShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### rectangleShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### rectangleShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### rectangleShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### rectangleShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### rectangleShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### rectangleShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
<a name="OG.shape.IShape+clone"></a>

##### rectangleShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.IShape+createShape"></a>

##### rectangleShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[RectangleShape](#OG.shape.RectangleShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.SpotShape"></a>

#### shape.SpotShape ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[GeomShape](#OG.shape.GeomShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.SpotShape](#OG.shape.SpotShape) ⇐ <code>[GeomShape](#OG.shape.GeomShape)</code>
    * [new OG.shape.SpotShape(label)](#new_OG.shape.SpotShape_new)
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>

<a name="new_OG.shape.SpotShape_new"></a>

##### new OG.shape.SpotShape(label)
SpotShape Shape


| Param | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | 라벨 [Optional] |

<a name="OG.shape.IShape+TYPE"></a>

##### spotShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### spotShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### spotShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
**Overrides:** <code>[geom](#OG.shape.IShape+geom)</code>  
<a name="OG.shape.IShape+label"></a>

##### spotShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
**Overrides:** <code>[label](#OG.shape.IShape+label)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### spotShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### spotShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### spotShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### spotShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### spotShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### spotShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### spotShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### spotShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### spotShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### spotShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### spotShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### spotShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### spotShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### spotShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### spotShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[SpotShape](#OG.shape.SpotShape)</code>  
<a name="OG.shape.IShape+clone"></a>

##### spotShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[SpotShape](#OG.shape.SpotShape)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.IShape+createShape"></a>

##### spotShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[SpotShape](#OG.shape.SpotShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.TextShape"></a>

#### shape.TextShape ⇐ <code>[IShape](#OG.shape.IShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[IShape](#OG.shape.IShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.TextShape](#OG.shape.TextShape) ⇐ <code>[IShape](#OG.shape.IShape)</code>
    * [new OG.shape.TextShape(text)](#new_OG.shape.TextShape_new)
    * [.text](#OG.shape.TextShape+text) : <code>String</code>
    * [.angle](#OG.shape.TextShape+angle) : <code>Number</code>
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>

<a name="new_OG.shape.TextShape_new"></a>

##### new OG.shape.TextShape(text)
Text Shape


| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | 텍스트 |

<a name="OG.shape.TextShape+text"></a>

##### textShape.text : <code>String</code>
드로잉할 텍스트

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.TextShape+angle"></a>

##### textShape.angle : <code>Number</code>
회전각도

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+TYPE"></a>

##### textShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
**Overrides:** <code>[TYPE](#OG.shape.IShape+TYPE)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### textShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### textShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+label"></a>

##### textShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### textShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### textShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### textShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### textShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### textShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### textShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### textShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### textShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### textShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### textShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### textShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### textShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### textShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### textShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### textShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[TextShape](#OG.shape.TextShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### textShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[TextShape](#OG.shape.TextShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### textShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[TextShape](#OG.shape.TextShape)</code>  
**Overrides:** <code>[clone](#OG.shape.IShape+clone)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.VerticalLaneShape"></a>

#### shape.VerticalLaneShape ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  
**Author:** <a href="mailto:sppark@uengine.org">Seungpil Park</a>  

* [.VerticalLaneShape](#OG.shape.VerticalLaneShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
    * [new OG.shape.VerticalLaneShape(label)](#new_OG.shape.VerticalLaneShape_new)
    * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
    * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>

<a name="new_OG.shape.VerticalLaneShape_new"></a>

##### new OG.shape.VerticalLaneShape(label)
Vertical Swimlane Shape


| Param | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | 라벨 |

<a name="OG.shape.GroupShape+GROUP_DROPABLE"></a>

##### verticalLaneShape.GROUP_DROPABLE : <code>Boolean</code>
그룹핑 가능여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.GroupShape+GROUP_COLLAPSIBLE"></a>

##### verticalLaneShape.GROUP_COLLAPSIBLE : <code>Boolean</code>
최소화 가능여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+TYPE"></a>

##### verticalLaneShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### verticalLaneShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### verticalLaneShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
**Overrides:** <code>[geom](#OG.shape.IShape+geom)</code>  
<a name="OG.shape.IShape+label"></a>

##### verticalLaneShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### verticalLaneShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### verticalLaneShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### verticalLaneShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### verticalLaneShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### verticalLaneShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### verticalLaneShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### verticalLaneShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### verticalLaneShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### verticalLaneShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### verticalLaneShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### verticalLaneShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### verticalLaneShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### verticalLaneShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### verticalLaneShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### verticalLaneShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### verticalLaneShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### verticalLaneShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[VerticalLaneShape](#OG.shape.VerticalLaneShape)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.VerticalPoolShape"></a>

#### shape.VerticalPoolShape ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
**Kind**: static class of <code>[shape](#OG.shape)</code>  
**Extends:** <code>[GroupShape](#OG.shape.GroupShape)</code>  
**Requires**: <code>module:OG.common.\*</code>, <code>module:OG.geometry.\*</code>  

* [.VerticalPoolShape](#OG.shape.VerticalPoolShape) ⇐ <code>[GroupShape](#OG.shape.GroupShape)</code>
    * [new OG.shape.VerticalPoolShape(label)](#new_OG.shape.VerticalPoolShape_new)
    * [.GROUP_DROPABLE](#OG.shape.GroupShape+GROUP_DROPABLE) : <code>Boolean</code>
    * [.GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE) : <code>Boolean</code>
    * [.TYPE](#OG.shape.IShape+TYPE) : <code>String</code>
    * [.SHAPE_ID](#OG.shape.IShape+SHAPE_ID) : <code>String</code>
    * [.geom](#OG.shape.IShape+geom) : <code>[Geometry](#OG.geometry.Geometry)</code>
    * [.label](#OG.shape.IShape+label) : <code>String</code>
    * [.isCollapsed](#OG.shape.IShape+isCollapsed) : <code>Boolean</code>
    * [.SELECTABLE](#OG.shape.IShape+SELECTABLE) : <code>Boolean</code>
    * [.MOVABLE](#OG.shape.IShape+MOVABLE) : <code>Boolean</code>
    * [.RESIZABLE](#OG.shape.IShape+RESIZABLE) : <code>Boolean</code>
    * [.CONNECTABLE](#OG.shape.IShape+CONNECTABLE) : <code>Boolean</code>
    * [.ENABLE_FROM](#OG.shape.IShape+ENABLE_FROM) : <code>Boolean</code>
    * [.ENABLE_TO](#OG.shape.IShape+ENABLE_TO) : <code>Boolean</code>
    * [.SELF_CONNECTABLE](#OG.shape.IShape+SELF_CONNECTABLE) : <code>Boolean</code>
    * [.CONNECT_CLONEABLE](#OG.shape.IShape+CONNECT_CLONEABLE) : <code>Boolean</code>
    * [.CONNECT_REQUIRED](#OG.shape.IShape+CONNECT_REQUIRED) : <code>Boolean</code>
    * [.CONNECT_STYLE_CHANGE](#OG.shape.IShape+CONNECT_STYLE_CHANGE) : <code>Boolean</code>
    * [.DELETABLE](#OG.shape.IShape+DELETABLE) : <code>Boolean</code>
    * [.LABEL_EDITABLE](#OG.shape.IShape+LABEL_EDITABLE) : <code>Boolean</code>
    * [.data](#OG.shape.IShape+data) : <code>Object</code>
    * [.textList](#OG.shape.IShape+textList) : <code>Array</code>
    * [.createShape()](#OG.shape.IShape+createShape) ⇒ <code>\*</code>
    * [.clone()](#OG.shape.IShape+clone) ⇒ <code>[IShape](#OG.shape.IShape)</code>

<a name="new_OG.shape.VerticalPoolShape_new"></a>

##### new OG.shape.VerticalPoolShape(label)
Vertical Pool Shape


| Param | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | 라벨 |

<a name="OG.shape.GroupShape+GROUP_DROPABLE"></a>

##### verticalPoolShape.GROUP_DROPABLE : <code>Boolean</code>
그룹핑 가능여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.GroupShape+GROUP_COLLAPSIBLE"></a>

##### verticalPoolShape.GROUP_COLLAPSIBLE : <code>Boolean</code>
최소화 가능여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
**Overrides:** <code>[GROUP_COLLAPSIBLE](#OG.shape.GroupShape+GROUP_COLLAPSIBLE)</code>  
<a name="OG.shape.IShape+TYPE"></a>

##### verticalPoolShape.TYPE : <code>String</code>
Shape 유형(GEOM, TEXT, HTML, IMAGE, EDGE, GROUP)

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+SHAPE_ID"></a>

##### verticalPoolShape.SHAPE_ID : <code>String</code>
Shape 을 구분하는 Shape ID(Shape 클래스명과 일치)

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
**Overrides:** <code>[SHAPE_ID](#OG.shape.IShape+SHAPE_ID)</code>  
<a name="OG.shape.IShape+geom"></a>

##### verticalPoolShape.geom : <code>[Geometry](#OG.geometry.Geometry)</code>
Shape 모양을 나타내는 공간기하객체(Geometry)

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
**Overrides:** <code>[geom](#OG.shape.IShape+geom)</code>  
<a name="OG.shape.IShape+label"></a>

##### verticalPoolShape.label : <code>String</code>
Shape 라벨 텍스트

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+isCollapsed"></a>

##### verticalPoolShape.isCollapsed : <code>Boolean</code>
Shape 의 Collapse 여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+SELECTABLE"></a>

##### verticalPoolShape.SELECTABLE : <code>Boolean</code>
선택 가능여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+MOVABLE"></a>

##### verticalPoolShape.MOVABLE : <code>Boolean</code>
이동 가능여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+RESIZABLE"></a>

##### verticalPoolShape.RESIZABLE : <code>Boolean</code>
리사이즈 가능여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+CONNECTABLE"></a>

##### verticalPoolShape.CONNECTABLE : <code>Boolean</code>
연결 가능여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
**Overrides:** <code>[CONNECTABLE](#OG.shape.IShape+CONNECTABLE)</code>  
<a name="OG.shape.IShape+ENABLE_FROM"></a>

##### verticalPoolShape.ENABLE_FROM : <code>Boolean</code>
From 연결 가능여부 (From(Shape) => To)

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+ENABLE_TO"></a>

##### verticalPoolShape.ENABLE_TO : <code>Boolean</code>
To 연결 가능여부 (From => To(Shape))

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+SELF_CONNECTABLE"></a>

##### verticalPoolShape.SELF_CONNECTABLE : <code>Boolean</code>
Self 연결 가능여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+CONNECT_CLONEABLE"></a>

##### verticalPoolShape.CONNECT_CLONEABLE : <code>Boolean</code>
가이드에 자기자신을 복사하는 컨트롤러 여부.

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+CONNECT_REQUIRED"></a>

##### verticalPoolShape.CONNECT_REQUIRED : <code>Boolean</code>
드래그하여 연결시 연결대상 있는 경우에만 Edge 드로잉 처리 여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+CONNECT_STYLE_CHANGE"></a>

##### verticalPoolShape.CONNECT_STYLE_CHANGE : <code>Boolean</code>
드래그하여 연결시 그룹을 건너뛸때 스타일 변경 여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+DELETABLE"></a>

##### verticalPoolShape.DELETABLE : <code>Boolean</code>
가이드에 삭제 컨트롤러 여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+LABEL_EDITABLE"></a>

##### verticalPoolShape.LABEL_EDITABLE : <code>Boolean</code>
라벨 수정여부

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+data"></a>

##### verticalPoolShape.data : <code>Object</code>
도형의 데이터

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+textList"></a>

##### verticalPoolShape.textList : <code>Array</code>
도형 선연결시 선연결 컨트롤러 목록

**Kind**: instance property of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
<a name="OG.shape.IShape+createShape"></a>

##### verticalPoolShape.createShape() ⇒ <code>\*</code>
드로잉할 Shape 를 생성하여 반환한다.

**Kind**: instance method of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
**Overrides:** <code>[createShape](#OG.shape.IShape+createShape)</code>  
**Returns**: <code>\*</code> - Shape 정보  
<a name="OG.shape.IShape+clone"></a>

##### verticalPoolShape.clone() ⇒ <code>[IShape](#OG.shape.IShape)</code>
Shape 을 복사하여 새로인 인스턴스로 반환한다.

**Kind**: instance method of <code>[VerticalPoolShape](#OG.shape.VerticalPoolShape)</code>  
**Returns**: <code>[IShape](#OG.shape.IShape)</code> - 복사된 인스턴스  
<a name="OG.shape.bpmn"></a>

#### shape.bpmn : <code>object</code>
**Kind**: static namespace of <code>[shape](#OG.shape)</code>  
<a name="OG.shape.elec"></a>

#### shape.elec : <code>object</code>
**Kind**: static namespace of <code>[shape](#OG.shape)</code>  
<a name="override"></a>

## override(origclass, overrides)
Adds a list of functions to the prototype of an existing class, overwriting any existing methods with the same name.
Usage:<pre><code>
     Ext.override(MyClass, {
	 newMethod1: function(){
	 // etc.
	 },
	 newMethod2: function(foo){
	 // etc.
	 }
	 });
     </code></pre>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| origclass | <code>Object</code> | The class to override |
| overrides | <code>Object</code> | The list of functions to add to origClass.  This should be specified as an object literal containing one or more methods. |

