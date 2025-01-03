$(".container").click(function() {
    $('#add-item').click(function() {
      var newItem = $('#new-item').val();
      if (newItem !== '') {
        $('#todo-list').append('<li>' + newItem + '<button class="remove-item">Remove</button></li>');
        $('#new-item').val('');
      }
    });
    
    $(".container").on('click', '.remove-item', function() {
      $(this).parent().remove();
    });
  });