require "jennifer/adapter/postgres"
require "jennifer"

Jennifer::Config.read("./config/database.yml", :development)
