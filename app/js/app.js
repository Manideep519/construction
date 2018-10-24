// Nav button code click
$(document).ready(function(){
  $('.nav__bar-btn').click(function(){
    $('.nav__bar-list').toggleClass('active');
    $('.nav__bar-btn').toggleClass('active');
  })
})


// Fixed nav at scroll
$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
    $('.nav').addClass('fixed-nav');
  }
  else {
    $('.nav').removeClass('fixed-nav');
  }
});
