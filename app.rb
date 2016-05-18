require 'sinatra'
require 'sinatra/activerecord'
require './config/environments'


db = URI.parse("postgres://localhost/tabster_#{Sinatra::Application.environment}")

ActiveRecord::Base.establish_connection(
  :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
  :host     => db.host,
  :username => db.user,
  :port     => db.port,
  :password => db.password,
  :database => db.path[1..-1],
  :encoding => 'utf8'
)



# require 'sinatra/activerecord'
# require_relative 'config/database'
require 'json'

class Tab < ActiveRecord::Base

end

get "/" do
  tabs = Tab.order("created_at DESC")
  redirect "/new" if tabs.empty?

  content_type :json
  tabs.to_json
end

get "/new" do
  puts "GET #new"
end

post "/new" do
  tab = Tab.new(params[:tab])
  if tab.save
    redirect "tab/#{tab.id}"
  else
    puts "POST #new"
  end
end

get "/tab/:id" do
  tab = Tab.find_by_id(params[:id])

  content_type :json
  tab.to_json
end
