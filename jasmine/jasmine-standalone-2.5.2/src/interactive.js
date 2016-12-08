$(document).ready(function() {


  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=6d4bbb8a1db58900a6e66af4b3cdacca&units=metric', function (data) {
    $('#weather').text(data.main.temp);
    console.log(data.main.temp);
  })


  $.ajax ({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=6d4bbb8a1db58900a6e66af4b3cdacca&units=metric',
    type: "GET",
    datatype: "json,",
    success: function(response) {
      jsonData = response;
      console.log(response);
    }
  });

  var thermostat = new Thermostat();


  $("#powerSaveOn").on("click", function(){
    thermostat.powerSaving("on");
    $("#powerSavingMode").text("Power Saving Mode is on");
  });

  $("#powerSaveOff").click(function (){
    thermostat.powerSaving("off");
    $("#powerSavingMode").text("Power Saving Mode is off");
  });

  $('#increase').click(function(){
    thermostat.increaseTemperature();
  });

  $('#decrease').click(function(){
    thermostat.decreaseTemperature();
  });

  $('#reset').click(function () {
    thermostat.reset();

  });

  $(':button').click(function () {
    $("#temperature").text(thermostat.getTemperature());
    $('#usage').text(thermostat.energyUsage());
    if (thermostat.energyUsage() === 'Low usage') $('#usage').css('color', 'green');
    if (thermostat.energyUsage() === 'Medium usage') $('#usage').css('color', 'black');
    if (thermostat.energyUsage() === 'High usage') $('#usage').css('color', 'red');
  });
  });
