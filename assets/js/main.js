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
  $('input').characterCounter();

  $(".calculate").click(function() {

      var h = $('input[name="h"]').val();
      var c = $('input[name="c"]').val();
      var a = $('input[name="a"]').val() / 100;

      var hTa = h * a;

      var week = '5';
      var year = '350';

      var hMhTa = h - hTa;
      var hMhTaC = hMhTa * c;

      var clpDay = hMhTaC;
      var clpWeek = hMhTaC * week;
      var clpYear = hMhTaC * year;

      $('.clpDay').html(Intl.NumberFormat('da-DK').format(clpDay));
      $('.clpWeek').html(Intl.NumberFormat('da-DK').format(clpWeek));
      $('.clpYear').html(Intl.NumberFormat('da-DK').format(clpYear));

      $( "#completeResult" ).slideToggle( "slow" );

  });


});
