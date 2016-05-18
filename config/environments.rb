# So rake console works
require 'sinatra'
require 'active_record'
require 'uri'

db = URI.parse("postgres://localhost/tabster_#{Sinatra::Application.environment}")

DB_NAME = db.path[1..-1]

ActiveRecord::Base.establish_connection(
  :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
  :host     => db.host,
  :username => db.user,
  :port     => db.port,
  :password => db.password,
  :database => db.path[1..-1],
  :encoding => 'utf8'
)
