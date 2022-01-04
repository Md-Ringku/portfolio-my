$(window).scroll(function(){
 $("a.navbar-brand").toggleClass("scrolled",$(this).scrollTop()>20);
});
$(window).scroll(function(){
 $("nav").toggleClass("nav-shadow",$(this).scrollTop()>40);
});
$(document).ready(function () {
$('.counter').counterUp({
                delay: 10,
                time: 1000
            });



});
var mixer = mixitup('.mymixit');

