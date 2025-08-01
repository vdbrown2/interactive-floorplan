class Api::OfficeZonesController < ApplicationController
  before_action :set_floorplan

  def index
    render json: @floorplan.office_zones
  end

  def create
    zone = @floorplan.office_zones.create!(zone_params)
    render json: zone
  end

  def update
    zone = @floorplan.office_zones.find(params[:id])
    zone.update!(zone_params)
    render json: zone
  end

  def destroy
    zone = @floorplan.office_zones.find(params[:id])
    zone.destroy
    head :no_content
  end

  private

  def set_floorplan
    @floorplan = Floorplan.find(params[:floorplan_id])
  end

  def zone_params
    params.require(:office_zone).permit(:name, :identifier, :x, :y, :width, :height)
  end
end
