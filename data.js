
//initalize: will be used to query the database
/*
*initalize()
*
*using Jquery this function reads the data from the csv table
*and gives the dashboard access to the data to display
*/
function initalize(dashboard) {
    $.get("FormattedData.csv", function (csvString) {
        // transform the CSV string into a 2-dimensional array
        var arrayData = $.csv.toArrays(csvString, { onParseValue: $.csv.hooks.castToScalar });

        // this new DataTable object holds all the data
        var data = new google.visualization.arrayToDataTable(arrayData);

        // transform the dataTable to a dataView to be used by the dashboard
        var dataView = new google.visualization.DataView(data);
        dashboard.draw(dataView);
    }
    )
};
