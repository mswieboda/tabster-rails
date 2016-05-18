class CreateTabs < ActiveRecord::Migration
  def change
    create_table :tabs do |t|
      t.string :title
      t.text :tab

      t.timestamps null: false
    end
  end
end
