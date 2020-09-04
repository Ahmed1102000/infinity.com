$(document).ready(function () {
    $(".carousel").carousel({
        interval : 6000
    });



    $("html").niceScroll();



    // wow animate 
    new WOW().init();

    // show color option 
    $(".gear-check").click(function () {
        $(".option-color").fadeToggle(1000);
    });



    // change color box
    $(".option-color ul li").
    eq(0).css("backgroundColor","#F6f6f6").end()
    .eq(1).css("backgroundColor","#EFFA00").end()
    .eq(2).css("backgroundColor","#080").end()
    .eq(3).css("backgroundColor","#00F").end()
    .eq(4).css("backgroundColor","#FF0066");

    $(".option-color ul li").click(function(){

        console.log($(this).attr("data-value"));

       $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });

    // button scroll to top

    $(window).scroll(function () {
        if($(this).scrollTop() > 700){
            $(".scroll-top").show();
        }
        else {
            $(".scroll-top").hide();
        }


        
    });

    $(".scroll-top").click(function () {
        $("body , html").animate({
            scrollTop : 0
        }, 1000)
    })


    console.log("Ahmed Abdrabou")

})

$(window).on("load", function () {
    $(".overlay-loading .spinner").fadeOut(3000 , function (){
        $(this).parent().fadeOut(2000 , function () {
            $("body").css("overflow","auto");
            $(this).remove();
        })
    });
})