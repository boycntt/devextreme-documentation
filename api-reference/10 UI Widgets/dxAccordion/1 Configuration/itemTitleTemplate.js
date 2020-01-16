//<!--@Knockout-->
var myViewModel = {
    templates: ["template1", "template2"],
    currentTemplate: ko.observable("template1"),
    accordionData: new DevExpress.data.DataSource({
        store: [
            {
                title: "Personal Data",
                data: {
                    firstName: "John",
                    lastName: "Smith",
                    birthYear: 1986,
                }
            },
            {
                title: "Contacts",
                data: {
                    phone: "(555)555-5555",
                    email: "John.Smith@example.com",
                }
            },
            {
                title: "Address",
                data: {
                    state: "CA",
                    city: "San Francisco",
                    street: "Stanford Ave",
                }
            }
        ],
        map: function (itemData) {
            itemData.text = itemData.title;
            itemData.dataArray = $.map(itemData.data, function (value, key) {
                return {
                    propertyKey: key,
                    propertyValue: value
                }
            });
            return itemData;
        }
    })
};
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.templates = ["template1", "template2"];
    $scope.currentTemplate = "template1";
    $scope.accordionData = new DevExpress.data.DataSource({
        store: [
            {
                title: "Personal Data",
                data: {
                    firstName: "John",
                    lastName: "Smith",
                    birthYear: 1986,
                }
            },
            {
                title: "Contacts",
                data: {
                    phone: "(555)555-5555",
                    email: "John.Smith@example.com",
                }
            },
            {
                title: "Address",
                data: {
                    state: "CA",
                    city: "San Francisco",
                    street: "Stanford Ave",
                }
            }
        ],
        map: function (itemData) {
            itemData.text = itemData.title;
            itemData.dataArray = $.map(itemData.data, function (value, key) {
                return {
                    propertyKey: key,
                    propertyValue: value
                }
            });
            return itemData;
        }
    })
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var accordionDataSource = new DevExpress.data.DataSource({
    store: [
        {
            title: "Personal Data",
            data: {
                firstName: "John",
                lastName: "Smith",
                birthYear: 1986,
            }
        },
        {
            title: "Contacts",
            data: {
                phone: "(555)555-5555",
                email: "John.Smith@example.com",
            }
        },
        {
            title: "Address",
            data: {
                state: "CA",
                city: "San Francisco",
                street: "Stanford Ave",
            }
        }
    ],
    map: function (itemData) {
        itemData.text = itemData.title;
        itemData.dataArray = $.map(itemData.data, function (value, key) {
            return {
                propertyKey: key,
                propertyValue: value
            }
        });
        return itemData;
    }
});
var titleTemplate1 = function (itemData, itemIndex, itemElement) {
    itemElement.append("<h1>" + itemData.title + "</h1>");
};
var titleTemplate2 = function (itemData, itemIndex, itemElement) {
    var titleParagraph = $("<p><b>" + itemData.title + "</b></p>");
    var itemWrapper = $("<span>");
    itemWrapper.append("(");
    for (var field in itemData.data)
        itemWrapper.append("<span class=\"inline-item\">" + field + "</span> ");
    itemWrapper.append(")");
    titleParagraph.append(itemWrapper);
    itemElement.append(titleParagraph);
};
$("#templateSelector").dxSelectBox({
    dataSource: ["template1", "template2"],
    value: "template1",
    onValueChanged: function (e) {
        var accordion = $("#myAccordion").dxAccordion("instance");
        accordion.option("itemTitleTemplate", e.value == "template1" ? titleTemplate1 : titleTemplate2);
    }
});
$("#myAccordion").dxAccordion({
    dataSource: accordionDataSource,
    itemTitleTemplate: titleTemplate1,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.addClass("item-body");
        var wrapper = $("<div style='margin: 25px;'>");
        itemElement.append(wrapper);
        var innerWrapper = $("<div style='text-align:left;'>");
        wrapper.append(innerWrapper);
        for (var field in itemData.data)
            innerWrapper.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
    }
});
$("#demoBox").dxScrollView({
    showScrollbar: 'always'
});
//<!--/@jQuery-->