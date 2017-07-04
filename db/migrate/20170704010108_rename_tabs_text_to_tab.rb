class RenameTabsTextToTab < ActiveRecord::Migration
  def change
    rename_column :tabs, :text, :tab
  end
end
