

describe("Thermostat", function () {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('initializes at 20 degrees', function () {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe("change temperature", function () {

    it('increases temperature by one degree with an up function', function () {
      thermostat.increaseTemperature();
      expect(thermostat.getTemperature()).toEqual(21);
    });

    it('descreases temperature by 1 degree', function () {
      thermostat.decreaseTemperature();
      expect(thermostat.getTemperature()).toEqual(19);
    });
  });

  describe("Minimum and maximum", function () {

    it('minimum temperature is 10 degrees', function () {
      var i = 0;
      do {
        thermostat.decreaseTemperature();
        i++;
      }
      while (i < 10);
      expect(function () {thermostat.decreaseTemperature()}).toThrow("Mininum temperature is 10 degrees. Cannot go below.")
    });

    it('if power saving mode is on the maximum temperature is 25 degrees', function () {
      thermostat.powerSaving('on');
      var i = 0;
      do {
        thermostat.increaseTemperature();
        i++;
      }
      while (i < 6);
      expect(function() {thermostat.increaseTemperature()}).toThrow("Maximum temperature is 25 degrees. Cannot go above.")
    });

    it('if power saving mode is off the maximum temperature is 32 degrees', function () {
      thermostat.powerSaving('off');
      var i = 0;
      do {
        thermostat.increaseTemperature();
        i++;
      }
      while (i < 13);
      expect(function(){thermostat.increaseTemperature()}).toThrow("Maximum temperature is 32 degrees. Cannot go above.")
    });

    it('maximum temperature should be 25 by default - power saving mode', function (){
      expect(thermostat.maximumTemperature).toEqual(25);
    });
  });

  describe("reset", function () {

    it('resets the temperature to 20', function () {
      thermostat.increaseTemperature();
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe("energy usage", function () {

    it('displays low usage when temperature is below 18', function () {
      thermostat.decreaseTemperature();
      thermostat.decreaseTemperature();
      thermostat.decreaseTemperature();
      expect(thermostat.energyUsage()).toEqual('Low usage');
    });

    it('displays medium usage when temperature is between 18 and 25 degrees', function () {
      expect(thermostat.energyUsage()).toEqual('Medium usage');
    });

    it('displays high usage when temperature is above 25 degrees', function () {
      thermostat.powerSaving('off');
      for(var i=0;i<=6;i++) {
        thermostat.increaseTemperature();
      }
      console.log(thermostat.getTemperature());
      expect(thermostat.energyUsage()).toEqual('High usage');
    });



  });
});
