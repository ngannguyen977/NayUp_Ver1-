
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.fixtop').css({
               "position": "fixed",
               "top": 0,
               "left": 0,
               "right": 0
            });
        } else {
            $('.fixtop').css("position", "relative");
        }
    });
    $(".dropdown").hover(            

        function() {

            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");

            $(this).toggleClass('open');        

        },
        function() {

            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");

            $(this).toggleClass('open');       
        }

    );

});