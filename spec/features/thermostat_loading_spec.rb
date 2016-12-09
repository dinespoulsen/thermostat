require "spec_helper"

feature "thermostat temperature" do

  scenario "it should start with the default temp of 20 degrees" do
    visit("/")
    expect(page).to have_content("The thermostat temperature is 20")

  end
end
