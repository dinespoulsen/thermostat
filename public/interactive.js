
$(document).ready(function() {
  var thermostat = new Thermostat();
  $.get("http://localhost:9292/thermostat/data", function(data){
    thermostat.setTemp(data.temperature);
    $("#temperature").text(thermostat.getTemperature());
  });


  $('#form').submit(function () {
    event.preventDefault();
    var c =  $('#city').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + c + "&APPID=6d4bbb8a1db58900a6e66af4b3cdacca&units=metric", function (data) {
      $('#weather').text(data.main.temp);
    })
  });

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
    $('#usage').attr('class', thermostat.energyUsage());
    $.post("http://localhost:9292/thermostat/data", {temperature: thermostat.getTemperature()
    });
  });
});
