# Matches GET "http://host:port/"
get "/" do
  Tabster.tabs_index
end

get "/*path" do
  Tabster.tabs_index
end

module Tabster
  def self.tabs_index
    props = { tabs: Tab.all.to_a.map { |t| {title: t.title, tab: t.tab} } }
    render "src/views/tabster/app.ecr", "src/views/layouts/main.ecr"
  end
end
