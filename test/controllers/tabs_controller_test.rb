require 'test_helper'

class TabsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get tabs_index_url
    assert_response :success
  end

end
