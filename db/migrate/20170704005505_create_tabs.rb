class CreateTabs < ActiveRecord::Migration
  def change
    create_table :tabs, id: :uuid do |t|
      t.string :title
      t.string :text

      t.timestamps null: false
    end
  end
end
