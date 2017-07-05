/* LOGIN
------------------------------------------------------- */
function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
    
}
$(function() {
    function onScrollInit(items, trigger) {
        items.each(function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay');

            osElement.css({
                '-webkit-animation-delay': osAnimationDelay,
                '-moz-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay
            });
            var osTrigger = (trigger) ? trigger : osElement;

            osTrigger.waypoint(function() {
                osElement.addClass('animated').addClass(osAnimationClass);
            }, {
                triggerOnce: true,
                offset: '90%'
            });
        });
    }
    onScrollInit($('.os-animation'));
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));
});

$(document).ready(function () {
        $("body").css("display", "none"); $("body").fadeIn(500);
        $(".smooth-redirect").click(function (event) {
            event.preventDefault(); linkLocation = this.href;
            $("body").fadeOut(300, redirectPage);
        });
        function redirectPage() { window.location = linkLocation; }});

        $(window).load(function () {
            "use strict";
            $(".page-loading").delay(2000).fadeOut(500);
});


$(document).ready(function () {

    $(".next-step").click(function (e) {

        var $active = $('.nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.nav-tabs li.active');
        prevTab($active);

    });
});
function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
// PLACE HOLDER
var addClass = function(el, className) {
        if (el.classList) {
              el.classList.add(className);
        } else {
              el.className += ' ' + className;
        }
    },
    hasClass = function(el, className) {
        return el.classList ?
            el.classList.contains(className) :
            new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    },
    removeClass = function(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    },
    updateSelectPlaceholderClass = function(el) {
        var opt = el.options[el.selectedIndex];
        if(hasClass(opt, "placeholder")) {
            addClass(el, "placeholder");
        } else {
            removeClass(el, "placeholder");
        }             
    },
    selectList = document.querySelectorAll("select");
//Simulate placeholder text for Select box
for(var i = 0; i < selectList.length; i++) {
    var el = selectList[i];
    updateSelectPlaceholderClass(el);
    el.addEventListener("change", function() {
        updateSelectPlaceholderClass(this);
    });
}
var viewportHeight = $(window).height();
    if( viewportHeight <= 400){
            
        $('#banner-main').css('margin-bottom', '220px')
    }