//This function will call the API and recieve the JSON output from it. 
function getResult() {
    $("#CityName").html("Receiving data...");
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityInput').val() + "&appid=455f145f98daa9855ea05d16d17817ab", function (data) {
        console.log(data);
        $("#CityName").html("Selected City: [ " + data.name + " ]");
        $("#CityTemp").html("Temperature: [ " + (data.main.temp - 273.15).toFixed(2) + "&deg;C" + " ]");
        $("#CityCond").html("Condition: [ " + data.weather[0].description + " ]");
    });
}
//This function will be called when the 'enter' button is clicked on the html page which will then call the getResult function for the API call
$(document).ready(function () {
    $('#enter').click(function () {
        getResult();
    });
});
