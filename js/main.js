$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .nav__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
  });