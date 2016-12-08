var Thermostat = function () {
    this.STARTING_TEMPERATURE = 20;
    this.temperature = this.STARTING_TEMPERATURE ;
    this.maximumTemperature = 25;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
};

Thermostat.prototype.getTemperature = function () {
  return this.temperature
};

Thermostat.prototype.increaseTemperature = function () {
  if (this.temperature > this.maximumTemperature) throw `Maximum temperature is ${this.maximumTemperature} degrees. Cannot go above.`
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.temperature <= this.MINIMUM_TEMPERATURE) throw "Mininum temperature is 10 degrees. Cannot go below."
  this.temperature -= 1;
};

Thermostat.prototype.powerSaving = function (state) {
  if (state === "on") {
    return this.maximumTemperature;
  } else {
    this.maximumTemperature = this.MAXIMUM_TEMPERATURE_PSM_OFF;
    return this.maximumTemperature;
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = this.STARTING_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) return 'Low usage';
  if (this.temperature >= 18 &&  this.temperature < 25)  return 'Medium usage';
  if (this.temperature >= 25)  return 'High usage';
};
