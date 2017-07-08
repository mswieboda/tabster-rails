class AddTabTable20170708020545079 < Jennifer::Migration::Base
  def up
    create_table(:tabs) do |t|
      t.string :title
      t.string :tab
      t.timestamps
    end
  end

  def down
    drop_table(:tabs)
  end
end
