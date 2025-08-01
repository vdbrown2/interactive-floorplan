class Api::OfficeUnitsController < ApplicationController
  def index
    render json: OfficeUnit.all
  end

  def update
    unit = OfficeUnit.find(params[:id])
    if unit.update(unit_params)
      render json: unit
    else
      render json: unit.errors, status: :unprocessable_entity
    end
  end

  private

  def unit_params
    params.require(:office_unit).permit(:status, :occupant, :move_in_date)
  end
end
