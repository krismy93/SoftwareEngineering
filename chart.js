
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
        'options': {
            'filterColumnLabel': 'Year',
            'ui': {
                'labelStacking': 'vertical' , 'format': { 'pattern':'####', 'fractionDigits':'0', 'groupingSymbol':'','showRangeValues':true }}
            
        }
    });

    //create column chart that will be used to show the data
    programmaticChart = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'programmatic_chart_div',

        'options': {
            'ui': { 'format': { 'pattern': '####', 'groupingSymbol': '', 'fractionDigits': '0' } },
            'width': 1000,
            'height': 600,
            'legend': 'none',
            'chartArea': {
                'left': 50,
                'top': 30,
                'right': 0,
                'bottom': 0
            },
            
            'title': 'Crime in United States',
            "vAxis": { "title": "Rate per 100,000 people", 'showTextEvery': 1 },
            "hAxis": { "title": "Year", 'slantedText': 'true', 'showTextEvery': 1, format: '####' }
        }
    });

  //call the initalize function
    initalize();
    //binds everything to the dashboard
    dashboard.bind(programmaticSlider, programmaticChart);

    //initalize: will be used to query the database
    function initalize() {
        var opts = { sendMethod: 'auto' };
        var query = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);
        query.setQuery("SELECT Year,'Murder Rate' FROM 1xczkhUb6IZxlt4xqLDVRcR_mWa2zbhSHzDYnx7O9 WHERE State = 'Alabama' ");
        query.send(handleQueryResponse);
    }

    //handleQueryResponse: will be used to double check the query we created
    function handleQueryResponse(response) {
        //check to see if something is wrong, if there is, have a pop up
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        //this sets the data and has it draw
        var data = response.getDataTable();
        dashboard.draw(data);
    }
   

}