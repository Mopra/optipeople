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
      week = $('input[name="week"]').val();
      year = week * 52;

      hTa = h * a;

      hMhTa = h - hTa;
      hMhTaC = hMhTa * c;

      clpDay = hMhTaC;
      clpWeek = hMhTaC * week;
      clpYear = hMhTaC * year;

      $('.clpDay').html(Intl.NumberFormat('da-DK').format(clpDay));
      $('.clpWeek').html(Intl.NumberFormat('da-DK').format(clpWeek));
      $('.clpYear').html(Intl.NumberFormat('da-DK').format(clpYear));

      $( "#completeResult" ).slideDown( "slow" );

  });


  $(".fcalculate").click(function() {

      fa = $('input[name="fa"]').val() / 100;

      var fhTa = h * fa;

      var fhMhTa = h - fhTa;
      var fhMhTaC = fhMhTa * c;

      var fclpDay = fhMhTaC;
      var fclpWeek = fhMhTaC * week;
      var fclpYear = fhMhTaC * year;

      var fclpDayGainTrue = clpDay - fclpDay;
      var fclpDayGainFalse = fclpDay - clpDay;

      var fclpWeekGainTrue = clpWeek - fclpWeek;
      var fclpWeekGainFalse = fclpWeek - clpWeek;

      var fclpYearGainTrue = clpYear - fclpYear;
      var fclpYearGainFalse = fclpYear - clpYear;

      $('.fclpDay').html(Intl.NumberFormat('da-DK').format(fclpDay));
      $('.fclpWeek').html(Intl.NumberFormat('da-DK').format(fclpWeek));
      $('.fclpYear').html(Intl.NumberFormat('da-DK').format(fclpYear));

      if (clpDay > fclpDay) {
        $('.fclpDayGain').html(Intl.NumberFormat('da-DK').format(fclpDayGainTrue));
        $(".fclpDayGain").removeClass("fclpFalse");
        $(".fclpDayGain").addClass("fclpTrue");
      }else{
        $('.fclpDayGain').html(Intl.NumberFormat('da-DK').format(fclpDayGainFalse));
        $(".fclpDayGain").removeClass("fclpTrue");
        $(".fclpDayGain").addClass("fclpFalse");
      }

      if (clpDay > fclpDay) {
        $('.fclpWeekGain').html(Intl.NumberFormat('da-DK').format(fclpWeekGainTrue));
        $(".fclpWeekGain").removeClass("fclpFalse");
        $(".fclpWeekGain").addClass("fclpTrue");
      }else{
        $('.fclpWeekGain').html(Intl.NumberFormat('da-DK').format(fclpWeekGainFalse));
        $(".fclpWeekGain").removeClass("fclpTrue");
        $(".fclpWeekGain").addClass("fclpFalse");
      }

      if (clpDay > fclpDay) {
        $('.fclpYearGain').html(Intl.NumberFormat('da-DK').format(fclpYearGainTrue));
        $(".fclpYearGain").removeClass("fclpFalse");
        $(".fclpYearGain").addClass("fclpTrue");
      }else{
        $('.fclpYearGain').html(Intl.NumberFormat('da-DK').format(fclpDayGainFalse));
        $(".fclpYearGain").removeClass("fclpTrue");
        $(".fclpYearGain").addClass("fclpFalse");
      }

      $( "#fcompleteResult" ).slideDown( "slow" );

  });




});
