---
default: 'excludePoints'
acceptValues: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none'
type: String
---
---
##### shortDescription
Specifies series elements to be highlighted when a user points to the series.

---
When a user points to the series, it may react in one of the following ways depending on the value of the **hoverMode** option.

* **nearestPoint**   
The series changes its style along with the point that is nearest to the cursor.
* **includePoints**   
The series changes its style along with all the points.
* **excludePoints**   
The series changes its style, but the points do not.
* **none**   
The series does not react to pointing to it.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ChartSeriesHoverMode` enum with one of the following values: `NearestPoint`, `IncludePoints`, `ExcludePoints`, and `None`. Note that although this enum accepts more values, only the listed ones can be applied to a line series.

#####See Also#####
- [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/hoverStyle/')
- **point** | [hoverMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/point/hoverMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/point/#hoverMode')