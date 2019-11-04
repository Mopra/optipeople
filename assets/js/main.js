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

      h = $('input[name="h"]').val();
      c = $('input[name="c"]').val();
      a = $('input[name="a"]').val() / 100;

      hTa = h * a;

      week = '5';
      year = '350';

      hMhTa = h - hTa;
      hMhTaC = hMhTa * c;

      clpDay = hMhTaC;
      clpWeek = hMhTaC * week;
      clpYear = hMhTaC * year;

      $('.clpDay').html(Intl.NumberFormat('da-DK').format(clpDay));
      $('.clpWeek').html(Intl.NumberFormat('da-DK').format(clpWeek));
      $('.clpYear').html(Intl.NumberFormat('da-DK').format(clpYear));

    //  $( "#completeResult" ).slideToggle( "slow" );

  });


  $(".fcalculate").click(function() {

      fa = $('input[name="fa"]').val() / 100;

      var fhTa = h * fa;

      var fhMhTa = h - fhTa;
      var fhMhTaC = fhMhTa * c;

      var fclpDay = fhMhTaC;
      var fclpWeek = fhMhTaC * week;
      var fclpYear = fhMhTaC * year;

      var fclpDayGainTrue = fclpDay - clpDay;
      var fclpDayGainFalse = fclpDay - clpDay;

      var fclpWeekGainTrue = fclpWeek - clpWeek;
      var fclpWeekGainFalse = clpWeek - fclpWeek;

      var fclpYearGainTrue = fclpYear - clpYear;
      var fclpYearGainFalse = fclpYear - clpYear;

      $('.fclpDay').html(Intl.NumberFormat('da-DK').format(fclpDay));
      $('.fclpWeek').html(Intl.NumberFormat('da-DK').format(fclpWeek));
      $('.fclpYear').html(Intl.NumberFormat('da-DK').format(fclpYear));


      if (fclpDay > clpDay) {
        $('.fclpDayGain').html(Intl.NumberFormat('da-DK').format(fclpDayGainFalse));
      }else{
        $('.fclpDayGain').html(Intl.NumberFormat('da-DK').format(fclpDayGainTrue));
      }

      if (fclpWeek > clpWeek) {
        $('.fclpWeekGain').html(Intl.NumberFormat('da-DK').format(fclpWeekGainTrue));
      }else{
        $('.fclpWeekGain').html(Intl.NumberFormat('da-DK').format(fclpWeekGainFalse));
      }

      if (fclpDay > clpDay) {
        $('.fclpYearGain').html(Intl.NumberFormat('da-DK').format(fclpYearGainTrue));
      }else{
        $('.fclpYearGain').html(Intl.NumberFormat('da-DK').format(fclpYearGainFalse));
      }

    //  $( "#completeResult" ).slideToggle( "slow" );

  });




});
