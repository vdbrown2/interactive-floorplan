# Clear old data
OfficeZone.destroy_all
Floorplan.destroy_all
OfficeUnit.destroy_all

# Create a floorplan
floorplan = Floorplan.create!(name: "Main Floor")

# Create zones
# (1..10).each do |i|
#   offset = (i - 1) % 5
#   row = (i - 1) / 5

#   floorplan.office_zones.create!(
#     name: "Office #{i}",
#     identifier: "office-#{i}",
#     x: 50 + offset * 120,
#     y: 40 + row * 100,
#     width: 100,
#     height: 80
#   )
# end

# Create office unit records (if needed)
# (1..10).each do |i|
#   OfficeUnit.create!(
#     name: "Office #{i}",
#     identifier: "office-#{i}",
#     status: i.even? ? "occupied" : "available",
#     occupant: i.even? ? "Company #{i}" : nil,
#     move_in_date: i.even? ? Date.today + i.days : nil
#   )
# end
# ActiveRecord::Base.connection.reset_pk_sequence!('floorplans')
# ActiveRecord::Base.connection.reset_pk_sequence!('office_zones')
# ActiveRecord::Base.connection.reset_pk_sequence!('office_units')