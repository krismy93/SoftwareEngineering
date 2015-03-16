/*
*changeToRobbery()
*
*called when the Robbery Rate Button is pressed
*Data for column chart now displays Robbery Rate for each state
*
*/
function changeToRobbery() {
    var columns = '{ "columns": [1, 3] }';
    programmaticChart.setView(columns);
    programmaticChart.draw();
    
}


/*
*changeToMurder()
*
*called when the Murder Rate Button is pressed
*Data for column chart now displays Murder Rate for each state
*
*/
function changeToMurder() {
    var columns = '{ "columns": [1, 2] }';
    programmaticChart.setView(columns);

    programmaticChart.draw();

}
