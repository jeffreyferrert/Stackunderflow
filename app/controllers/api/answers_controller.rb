class Api::AnswersController < ApplicationController
    def index
        @answers = Answer.all
        render :index
    end

    def show
        @answer = Answer.find_by(id: params[:id])
        render :show
    end

    def create
        @answer ||= Answer.new(answer_params)

        if @answer.save
            render json: @answer
        else
            render json: { errors: @answer.errors.full_messages }, status: 422
        end
    end

    def update
        @answer = Answer.find_by(id: params[:id])
    
        if @answer.update(answer_params)
          render json: @answer
        else
          render json: { errors: @answer.errors.full_messages }, status: 422
        end
      end

    def destroy
        @answer = Answer.find_by(id: params[:id])
        @answer.delete
    end

    private
    def answer_params
        params.require(:answer).permit(:body, :user_id, :question_id)
    end
end
