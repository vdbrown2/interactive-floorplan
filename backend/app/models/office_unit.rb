class OfficeUnit < ApplicationRecord
  validates :name, :identifier, presence: true
end
