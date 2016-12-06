'use strict'
describe("Thermostat", function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a default temperature of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should be able to increase the temperature by 5", function(){
    thermostat.increaseTemp(5);
    expect(thermostat.temperature).toEqual(25);
  });

  it("should be able to decrease the temperature by 5", function(){
    thermostat.decreaseTemp(5);
    expect(thermostat.temperature).toEqual(15);
  });
});
