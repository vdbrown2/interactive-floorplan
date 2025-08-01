class FloorplansController < ApplicationController
  def index
    render json: Floorplan.all
  end

  def show
    render json: Floorplan.find(params[:id])
  end

  def create
    plan = Floorplan.create!(floorplan_params)
    render json: plan
  end

  private

  def floorplan_params
    params.require(:floorplan).permit(:name)
  end
end
