class CreateOfficeUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :office_units do |t|
      t.string :name
      t.string :identifier
      t.string :status
      t.string :occupant
      t.date :move_in_date

      t.timestamps
    end
  end
end
