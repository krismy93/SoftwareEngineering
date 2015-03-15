
//initalize: will be used to query the database

function initalize(dashboard) {
    $.get("FormattedData.csv", function (csvString) {
        // transform the CSV string into a 2-dimensional array
        var arrayData = $.csv.toArrays(csvString, { onParseValue: $.csv.hooks.castToScalar });

        // this new DataTable object holds all the data
        var data = new google.visualization.arrayToDataTable(arrayData);

        // this view can select a subset of the data at a time
        var dataView = new google.visualization.DataView(data);
       dataView.setColumns([0, 1, 2, 3]);
       dashboard.draw(dataView);
    }
    )
};
