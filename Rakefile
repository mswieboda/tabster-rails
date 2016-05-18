require "./app"

namespace :db do
  desc "Create the database at #{DB_NAME}"
  task :create do
    puts "Creating database #{DB_NAME} if it doesn't exist..."
    exec("createdb #{DB_NAME}")
  end

  desc "Drop the database at #{DB_NAME}"
  task :drop do
    puts "Dropping database #{DB_NAME}..."
    exec("dropdb #{DB_NAME}")
  end
end

require "sinatra/activerecord/rake"
require_relative 'config/environments'

# TODO: need a DB env
desc 'Start IRB with application environment loaded'
task "console" do
  require 'pry'

  exec "pry -r ./app"
  Pry.start
end

