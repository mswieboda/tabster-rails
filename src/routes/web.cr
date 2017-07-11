# Matches GET "http://host:port/"
get "/" do
  TabsController.index
end

post "/api/tabs/create" do |env|
  TabsController.create(env.params.body.to_h)
end

get "/*path" do
  TabsController.index
end

module TabsController
  def self.index
    props = { tabs: Tab.all.to_a.map { |t| {title: t.title, tab: t.tab} } }
    render "src/views/tabster/app.ecr", "src/views/layouts/main.ecr"
  end

  def self.create(tab_params)
    Tab.create!(tab_params)
  end
end
