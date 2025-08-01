class CreateOfficeZones < ActiveRecord::Migration[6.1]
  def change
    create_table :office_zones do |t|
      t.references :floorplan, foreign_key: true
      t.string :name
      t.string :identifier
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.timestamps
    end
  end
end
