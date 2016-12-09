require 'sinatra/base'
require_relative './models/data_mapper_settings'
require_relative './models/thermostat'

class Thermostat < Sinatra::Base
  get '/' do
    erb(:index)
  end

  get '/thermostat/data' do
    @thermostat = ThermostatData.get(1)
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
