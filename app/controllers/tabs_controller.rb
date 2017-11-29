class TabsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    set_props_all_tabs
  end

  def create
    @tab = Tab.create!(tab_params)

    set_props_all_tabs

    render(:index)
  end

  private

  def set_props_all_tabs
    @props = {
      tabs: JSON.parse(Tab.all.to_json)
    }
  end

  def tab_params
    params.permit(:title, :tab)
  end
end
