﻿var dataSource = [
    { year: 1952, name: 'Dwight D. Eisenhower', party: 'republican' },
    { year: 1956, name: 'Dwight D. Eisenhower', party: 'republican' },
    { year: 1960, name: 'John F. Kennedy', party: 'democratic' },
    { year: 1964, name: 'Lyndon B. Johnson', party: 'democratic' },
    { year: 1968, name: 'Richard Nixon', party: 'republican' },
    { year: 1972, name: 'Richard Nixon', party: 'republican' },
    { year: 1976, name: 'Jimmy Carter', party: 'democratic' },
    { year: 1980, name: 'Ronald Reagan', party: 'republican' },
    { year: 1984, name: 'Ronald Reagan', party: 'republican' },
    { year: 1988, name: 'George H. W. Bush', party: 'republican' },
    { year: 1992, name: 'Bill Clinton', party: 'democratic' },
    { year: 1996, name: 'Bill Clinton', party: 'democratic' },
    { year: 2000, name: 'George W. Bush', party: 'republican' },
    { year: 2004, name: 'George W. Bush', party: 'republican' },
    { year: 2008, name: 'Barack Obama', party: 'democratic' },
    { year: 2012, name: 'Barack Obama', party: 'democratic' }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        series: [{
            argumentField: 'year',
            valueField: 'party',
            tagField: 'name'
        }],
        title: 'Winners of the United States presidential elections',
        tooltip: {
            enabled: true,
            customizeTooltip: function (hoveredPoint) {
                return {
                    text: hoveredPoint.argument + ' - ' + hoveredPoint.point.tag
                };
            }
        },
        argumentAxis: {
            minorGrid: { visible: false },
            tickInterval: 4
        },
        legend: { visible: false },
        commonAxisSettings: {
            type: 'discrete'
        }
    });

    $("#dropdownListSelector").change(function () {
        var chart = $("#chartContainer").dxPolarChart("instance");
        chart.option({
            commonAxisSettings: { discreteAxisDivisionMode: this.value }
        });
    });
});