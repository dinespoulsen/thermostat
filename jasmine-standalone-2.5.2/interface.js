var currentTemp = $("#current-temp");
var minus = $("#minus");
var thermostat = new Thermostat;
var plus = $("#plus");
var reset = $("#reset");
var powermode = $("#powermode");
var toggle = $("#powertoggle");
var energyusage = $("#energyusage");
var error = $("#error");

window.onload = function() {
  currentTemp.text(thermostat.getCurrentTemperature());
  powermode.text("on");
  energyusage.text("medium-usage");
};

minus.click( function(){
  thermostat.decreaseTemp();
  currentTemp.text(thermostat.getCurrentTemperature());
});

plus.click( function(){
  try{
    thermostat.increaseTemp();
    }
  catch(err) {
        error.text("error");
    }
    currentTemp.text(thermostat.getCurrentTemperature());
});

reset.click( function(){
  thermostat.reset();
  currentTemp.text(thermostat.getCurrentTemperature());
});

toggle.click( function() {
  thermostat.powerToggle();
  powermode.text("off");
  if(thermostat.powerMode) {
    powermode.text("on");
    currentTemp.text(thermostat.getCurrentTemperature());
  }
  else{
    powermode.text("off");
  }
});
