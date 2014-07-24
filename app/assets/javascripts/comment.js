var Comment = {
  initialize: function(){
    $('#new_comment').submit(this.submitComment.bind(this));
  },

  submitComment: function(event){
    var $form = $(event.currentTarget);
    var $body = $form.find('#comment_body');
    var newComment;

    body_value = $body.val();

    if(body_value === '') {
      $(document).find('.alert').text("Body can't be blank");
    }
    $body.val('');

    event.preventDefault();
    $.ajax({
    url: $(this).attr('action'),
    type: 'POST',
    dataType: 'json',
    data: { comment: {body: body_value}}
    })
    .done(this.addComment.bind(this));
  },

  addComment: function(comment) {
    $(document).find('body').append(HandlebarsTemplates.comment_post(comment));
  }
};


