$(document).ready(function () {
  skrollr.init({
    smoothScrolling: true,
  });
  $( ".section-nav" ).addClass( "pushpin table-of-contents" );
  $( ".toc-entry" ).addClass( "truncate toc-arrow" );
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
});
