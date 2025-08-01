# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
OfficeUnit.create!([
    { name: "Office 1", identifier: "office-1", status: "available" },
    { name: "Office 2", identifier: "office-2", status: "occupied", occupant: "Acme Corp", move_in_date: "2025-08-15" },
    { name: "Office 3", identifier: "office-3", status: "available" },
    { name: "Office 4", identifier: "office-4", status: "available" },
    { name: "Office 5", identifier: "office-5", status: "available" },
    { name: "Office 6", identifier: "office-6", status: "available" },
    { name: "Office 7", identifier: "office-7", status: "available" },
    { name: "Office 8", identifier: "office-8", status: "available" },
    { name: "Office 9", identifier: "office-9", status: "available" },
    { name: "Office 10", identifier: "office-10", status: "available" }
  ])
  