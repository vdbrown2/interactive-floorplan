class CreateFloorplans < ActiveRecord::Migration[6.1]
  def change
    create_table :floorplans do |t|
      t.string :name
      t.timestamps
    end
  end
end
