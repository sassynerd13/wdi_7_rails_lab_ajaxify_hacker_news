class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :score, :time_ago, :creator

  def creator
    "#{object.user.email}"
  end

  def time_ago
    "#{time_ago_in_words(object.created_at)}"
  end

end
