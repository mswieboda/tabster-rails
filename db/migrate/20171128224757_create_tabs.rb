class CreateTabs < ActiveRecord::Migration[5.1]
  def change
    create_table :tabs, id: :uuid do |t|
      t.string :title
      t.string :tab

      t.timestamps
    end
  end
end
