class CommentsController < ApplicationController
  before_action :get_article_and_comments
  before_action :authenticate_user!, only: :create

  respond_to :html, :json

  def index
    @comment = Comment.new
  end

  def show
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.article = @article
    @comment.user = current_user

    if @comment.save
      flash.now[:notice] = 'Comment added!'
      respond_with(@comment)
    else
      flash.now[:alert] = @comment.errors.full_messages.join(', ')
      render :index
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def get_article_and_comments
    @article = Article.find(params[:article_id])
    @comments = @article.comments.order(score: :desc)
  end

  def default_serializer_options
    {root: false}
  end
end
