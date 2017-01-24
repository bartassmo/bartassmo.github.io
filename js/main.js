'use strict'; 
$(document).ready(function() {	
        
    new WOW({ mobile: false }).init();
  
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
             if ($(window).width() < 768) {
                 $('.nav-menu').slideUp();
             }
        });
            
        $(this).addClass('active');
      
        var target = this.hash,
        //menu = target;
        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top-85
        }, 500, 'swing', function () {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    });
        
        
        function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-90 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
        
    $(window).scroll(function() {				
    var scroll = $(window).scrollTop();
    var homeheight = $(".home").height() -86;			

    if (scroll > homeheight ) {												
        $("nav").slideDown(100);
        } else {
        $("nav").slideUp(100);
        }
     }); 
         
$('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
    });
    
    
    function centerInit() {
        var hometext = $('.home')

        hometext.css({
            "height": $(window).height() + "px"
        });
    }
    centerInit();
    $(window).resize(centerInit);
    
    
     $(function(){
      $(".element").typed({
        strings: ["Bartłomiej", "Front-End Developer"],
        typeSpeed: 10,
        loop:true,
        backDelay: 2000
      });
  });
    
    
});


(function($){
   'use strict'; 
   
   $(".contact-form").on('submit', function(e){
        e.preventDefault();
        
        var uri = $(this).attr('action');
        $("#submit").val('Czekaj...');
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        
        var required = 0;
        $(".requie", this).each(function() {
            if ($(this).val() == '')
            {
                $(this).addClass('reqError');
                required += 1;
            }
            else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0)
        {
            $.ajax({
                type: "POST",
                url: 'mail.php',
                data: {name: name, email: email, message: message},
                success: function(data)
                {
                    $(".contact-form input, .contact-form textarea").val('');
                    $("#submit").val('Zrobione!');
					$("#submit").addClass("ok");
                }
            });
        }
        else
        {
            $("#submit").val('Failed!');
        }
   });
   $(".requie").keyup(function() {
        $(this).removeClass('reqError');
    });
   
})(jQuery);

$(document).ready(function ($) {

            var jssor_1_options = {
              $AutoPlay: true,
              $Idle: 0,
              $AutoPlaySteps: 4,
              $SlideDuration: 2500,
              $SlideEasing: $Jease$.$Linear,
              $PauseOnHover: 4,
              $SlideWidth: 200,
              $Cols: 7
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 809);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
        });