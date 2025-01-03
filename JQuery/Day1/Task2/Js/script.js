$(".tab-container").click(function() {
    $('.tabs li').click(function() {
      var tabid = $(this).find('a').attr('href');
      $('.tabs li').removeClass('active');
      $('.tab-content .tab').removeClass('active');
      $(this).addClass('active');
      $(tabid).addClass('active');
      return false;
    });
  }); 