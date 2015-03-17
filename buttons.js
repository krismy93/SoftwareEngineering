/*
*changeToRobbery()
*
*called when the Robbery Rate Button is pressed
*Data for column chart now displays Robbery Rate for each state
*Title is also updated accordingly
*/
function changeToRobbery() {
    var columns = '{ "columns": [1, 3] }';
    colChart.setView(columns);
    var currTitle = colChart.getOption('title');
    var shownState = currTitle.split('Rate')[1];
    colChart.setOption('title', "Robbery Rate " + shownState);
    colChart.draw();
    
}


/*
*changeToMurder()
*
*called when the Murder Rate Button is pressed
*Data for column chart now displays Murder Rate for each state
*Title is also updated accordingly
*/
function changeToMurder() {
    var columns = '{ "columns": [1, 2] }';
    colChart.setView(columns);
    var currTitle = colChart.getOption('title');
    var shownState = currTitle.split('Rate')[1];

    colChart.setOption('title', "Murder Rate " + shownState);
    colChart.draw();

}


/*
*initStatePicker()
*
*creates the drop down menu to be used to select a State
*The drop down menu will have the state of Alabama preselected for the user
*
*/
function initStatePicker() {
    
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
                'caption': 'Select a state',
                'cssClass': "style.css"
            }
        },
        'state': { 'selectedValue': ['Alabama'] }
    });
};

/*
*initYearSelector()
*
* create the slider that we will be using to move through the years
* we must create it so that the number shows up in year format ie 1960 instead of 1,960
*
*/
function initYearSelector() {

    yearSelector = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'year_control_div',
        'lowValue': '1960',
        'highValue': '2012',
        'options': {
            'minValue': 1960,
            'maxvalue': 2012,
            'filterColumnLabel': 'Year',
            'ui': {
                'labelStacking': 'vertical', 'format': { 'pattern': '####', 'fractionDigits': '0', 'groupingSymbol': '', 'showRangeValues': true }
            }

        }
    });
};