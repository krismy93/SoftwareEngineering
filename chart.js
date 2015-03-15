
//call the function we have made to draw chart
google.setOnLoadCallback(drawChart);




function drawChart() {
    //create the dashboard that we will use for all the stuff
    var dashboard = new google.visualization.Dashboard(
    document.getElementById('programmatic_dashboard_div'));

    //create the slider that we will be using to move through the years
    programmaticSlider = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'programmatic_control_div',
        'lowValue': '1960',
        'highValue': '2012',
        'options': {
            'minValue': 1960,
            'maxvalue': 2012,
            'filterColumnLabel': 'Year',
            'ui': {
                'labelStacking': 'vertical' , 'format': { 'pattern':'####', 'fractionDigits':'0', 'groupingSymbol':'','showRangeValues':true }}
            
        }
    });


    // Define a category picker control for the State 
    statePicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'dropdown_control_div',
        'options': {
            'filterColumnLabel': 'State',
            'ui': {
                'labelStacking': 'vertical',
                'allowTyping': false,
                'allowMultiple': false,
                'allowNone': false,
                'cssClass': "style.css"
            }
        },
       'state': { 'selectedValue': ['Alabama'] }
    });

    //create column chart that will be used to show the data
    programmaticChart = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'programmatic_chart_div',
        'view': { columns: [1, 2] },

        'options': {
            'ui': { 'format': { 'pattern': '####', 'groupingSymbol': '', 'fractionDigits': '0' } },
            
            'width': 850,
            'height': 500,
            'legend': 'none',
            'chartArea': {
                'left': 50,
                'top': 30,
                'right': 0,
                'bottom': 0
            },

           
            'title': 'Crime in United States',
            "vAxis": { "title": "Rate per 100,000 people", 'minValue': '0', 'showEveryText': 1 },
            "hAxis": {
                "title": "Year", 'slantedText': 'true',
                'gridlines': { color: 'transparent' },
                'viewWindow.min': 2,
                'showEveryText': 1, format: '####'
            }
        }
    });

    //call the initalize function
    initalize(dashboard);

   
    //binds everything to the dashboard
    dashboard.bind(programmaticSlider, programmaticChart);
    dashboard.bind(statePicker, programmaticChart);




   

}