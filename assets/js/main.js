$(document).ready(function () {
  skrollr.init({
    smoothScrolling: true,
  });
  $( ".section-nav" ).addClass( "pushpin table-of-contents" );
  $( ".toc-entry" ).addClass( "toc-arrow" );
  $('.scrollspy').scrollSpy();
  $('.pushpin').pushpin({
    top: 530
  });
  $('.advert').pushpin({
    top: 570
  });
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('#nav-content').toggleClass('active');
  });
  $('.modal').modal();
  $('.collapsible').collapsible();


  $(".calculate").click(function() {

      var h = $('input[name="h"]').val();
      var c = $('input[name="c"]').val();
      var a = $('input[name="a"]').val() / 100;

      var hTa = h * a;

      var week = h * '7';
      var year = h * '365';

      var clpDay = (h - hTa) * c;
      var clpWeek = (week - hTa) * c;
      var clpYear = (year - hTa) * c;


      $('.clpDay').html(Intl.NumberFormat('da-DK').format(clpDay));
      $('.clpWeek').html(Intl.NumberFormat('da-DK').format(clpWeek));
      $('.clpYear').html(Intl.NumberFormat('da-DK').format(clpYear));

  });

});
