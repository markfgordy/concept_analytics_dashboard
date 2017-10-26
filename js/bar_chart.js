$(function() {

    //window.onload = function(){
    //var ctx = document.getElementById("donut").getContext("2d");
    //window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
    var chart = new CanvasJS.Chart("chartContainer", {
        height: 340,
        title: {
            text: "Daily Number of Discounts",
            fontColor: "#777777",
            fontSize: 20,
            fontFamily: "Heiti TC"
        },
        axisY: {
            title: "Number of Discounts",
            titleFontSize: 15,
            titleFontColor: "#777777",
            titleFontFamily: "Heiti TC",
            labelFontSize: 12,
            labelFontFamily: "Heiti TC",
            labelFontColor: "#777777",
            tickColor: "#ddd",
            lineColor: "#ddd",
            lineThickness: 2,
            gridColor: "#ddd",
            gridThickness: 2

        },
        axisX: {
            title: "Time: Last 5 Days",
            titleFontSize: 15,
            titleFontColor: "#777777",
            titleFontFamily: "Heiti TC",
            labelFontSize: 12,
            labelFontFamily: "Heiti TC",
            labelFontColor: "#777777",
            tickColor: "#ddd",
            lineColor: "#ddd",
            lineThickness: 2,
        },

        data: [ //array of dataSeries              
        { /*** Change type "column" to "bar", "area", "line" or "pie"***/
            type: "line",
            dataPoints: [{
                label: "4/27",
                y: 15
            }, {
                label: "4/28",
                y: 20
            }, {
                label: "4/29",
                y: 40
            }, {
                label: "4/30",
                y: 34
            }, {
                label: "5/1",
                y: 24
            }]
        }]
    });

    chart.render();

    var doughnutData = [{
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "iPhone 4"
    }, {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "iPhone 5"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "iPhone 6"
    }, {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "iPhone 6+"
    }];
    var ctx = $("#donut").get(0).getContext("2d");
    var myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive: false});
});