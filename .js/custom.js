$(function() {
    $('html').niceScroll({
        cursorborder: 'none',
        cursorwodth: "10px",
        cursorborderradius: "none",
        cursorcolor: '#F7600E'
    });
    $('.header').height($(window).height());
    //$('.header').height(window.outerHeight);
    if(window.innerHeight > 400) {
        $('.header').height(window.innerHeight);
    } else {
        $('.header').height(window.outerHeight);
    }
    console.log($(window).height());
    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 700);
    });
    $('.hire').click(function () {
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        }, 700);
    });
    $(".show-more").click(function (){
        $('.our-work .item').fadeIn(1600);
    });
    var leftarrow = $('.testimo .fa-chevron-left'),
        rightarrow = $('.testimo .fa-chevron-right');
    function checkClients() {
        if($('.client:first').hasClass('active')) {
            leftarrow.fadeOut();
        } else {
            leftarrow.fadeIn();
        }
        $('.client:last').hasClass('active') ? rightarrow.fadeOut() : rightarrow.fadeIn();
    }
    checkClients();
    $('.testimo i').click(function (){
        if($(this).hasClass('fa-chevron-right')) {
            $('.testimo .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {
            $('.testimo .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });
});