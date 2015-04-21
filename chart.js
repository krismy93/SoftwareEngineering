
//call the function we have made to draw chart
google.setOnLoadCallback(drawChart);


/**
*drawChart()
*
*creates the dashboard along with all the elements of the chart
*its also initalizing the chart with data
*The chart will be first intialized with the Murder Rate in Alabama
*/
function drawChart() {
    //create the dashboard that we will use for all the stuff
    var dashboard = new google.visualization.Dashboard(
    document.getElementById('dashboard_div'));

    //initialize the slider
    initYearSelector();

    //intialize the drop down menu
    initStatePicker();

    //create column chart that will be used to show the data
    colChart = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'chart_div',
        'view': { columns: [1, 2] },

        'options': {
            'ui': { 'format': { 'pattern': '####', 'groupingSymbol': '', 'fractionDigits': '0' } },
            
			'backgroundColor': { fill:'transparent' },

            'width': 850,
            'height': 500,
            'legend': 'none',
            'chartArea': {
                'left': 50,
                'top': 30,
                'right': 0,
                'bottom': 0
            },

           
            'title': "Murder Rate in " + statePicker.getState().selectedValue ,
            "vAxis": { "title": "Rate per 100,000 people", 'minValue': '0', 'showEveryText': 1 },
            "hAxis": {
                "title": "Year", 'slantedText': 'true',
                'gridlines': { color: 'transparent' },
                'viewWindow.min': 2,
                'showEveryText': 1, format: '####'
            }
        }
    });



    //initalizing the data for the dashboard from data.js
    initalize(dashboard);

   
    //binds everything to the dashboard
    dashboard.bind(yearSelector, colChart);
    dashboard.bind(statePicker, colChart);


    //EVENT LISTENERS
    //used to detect a stateChange, this will update the title of the chart
    google.visualization.events.addListener(statePicker, 'statechange', function () {
        var currTitle = colChart.getOption('title');
        var shownRate = currTitle.split('in')[0];
        var selected = statePicker.getState();
        var selectState = selected.selectedValues[0];
        colChart.setOption('title', shownRate + 'in ' + selectState);
        colChart.draw();
    });
  
}