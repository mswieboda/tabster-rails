require "jennifer/adapter/postgres"
require "jennifer"

env = ENV["CRYSTAL_ENV"] == "production" ? :production : :development
puts "ENVIRONMENT >>>>"
puts env
puts "^^^^ ENVIRONMENT"
Jennifer::Config.read("./config/database.yml", env)
