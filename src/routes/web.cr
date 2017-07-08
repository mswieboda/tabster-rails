# Matches GET "http://host:port/"
get "/" do
  render "src/views/tabster/app.ecr", "src/views/layouts/main.ecr"
end
