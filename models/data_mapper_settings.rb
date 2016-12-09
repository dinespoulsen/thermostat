require 'data_mapper'
require 'dm-postgres-adapter'

DataMapper.setup(:default, 'postgres://localhost/thermostat_data_test')
DataMapper.finalize
DataMapper.auto_upgrade!
