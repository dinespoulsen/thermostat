require "spec_helper"

feature "thermostat temperature" do
  before(:each) do
    Capybara.default_driver = :selenium
  end

  scenario "it should start with the default temp of 20 degrees" do
    visit("/")
    click_button("+")
    visit("/")
    expect(page).to have_content("The thermostat temperature is 21")
  end
end
