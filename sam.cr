require "./config/database"
require "./db/migrations/*"
require "sam"
load_dependencies "jennifer"

Sam.namespace "tabster" do
  task "task" do
    puts "do task"
  end
end

Sam.help
