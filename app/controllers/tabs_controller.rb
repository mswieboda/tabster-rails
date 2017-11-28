class TabsController < ApplicationController
  def index
    @props = {
      tabs: JSON.parse(Tab.all.to_json)
    }
  end
end
