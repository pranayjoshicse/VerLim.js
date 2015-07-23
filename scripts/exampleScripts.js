jQuery(document).ready(function () {
	$().VerLim(
		{
			color: "#dd2266",
			autoHide: "off",
			autoHideTime: "2",
			theme: "on",
			position: "top",
			thickness: "5px",
			shadow: "on"
		});
	});
    jQuery(document).ready(function () {
            $('#letsgo').click(function(){
            $('body').scrollTo($('#scrollToInput').val());
        });
            $('#letsgo1').click(function(){
            $('body').scrollTo($('#scrollToInput1').val(),{duration:3000});
        });
        $('#letsgo2').click(function(){
            $('body').scrollTo($('#scrollToInput2').val(),{duration:3000},function(){alert('Hello World!!!')});
        });
        $('#letsgo3').click(function(){
            $('body').scrollTo($('#scrollToInput3').val(),{duration:3000, easing:"easeOutBounce"});
        });
        $('#bottom').click(function(){
            $('#mainDiv').scrollTo(78,{duration:3000, easing:"easeOutBounce"});
        });
        $('#top').click(function(){
            $('#mainDiv').scrollTo(0,{duration:3000, easing:"easeOutBounce"});
        });
        $('#center').click(function(){
            $('#mainDiv').scrollTo(40,{duration:3000, easing:"easeOutBounce"});
        });
        
        $('#top1').click(function(){
            $('#mainDiv1').scrollTo(0);
        });
        $('#bottom1').click(function(){
            $('#mainDiv1').scrollTo(78);
        });
        $('#chap2').click(function(){
            $('#mainDiv1').scrollTo(10);
        });
        $('#chap4').click(function(){
            $('#mainDiv1').scrollTo(30);
        });
        $('#chap6').click(function(){
            $('#mainDiv1').scrollTo(50);
        });
        $('#chap8').click(function(){
            $('#mainDiv1').scrollTo(70);
        });
        
        $('#show').click(function(){
            $('#scrollPer').html($('#scroller').attr('scroller-width'));
        });
        $('.backToTop').click(function(){
            $('body').scrollTo(0,{duration:3000, easing:"easeOutBounce"});
            $('.backToTop').fadeOut("fast");
        });
        
        $(window).on("scroll", function() {
                if($('#scroller').attr('scroller-width')>=80)
                $('.backToTop').fadeIn(1000);
            else
                $('.backToTop').fadeOut(1000);
            });
        
        $("#demoLink1").click(function(){
            $("body").scrollTo("#demo1");
        });
        $('#demoLink2').click(function(){
            $('body').scrollTo("#demo2");
        });
        $('#demoLink3').click(function(){
            $('body').scrollTo("#demo3");
        });
        $('#demoLink4').click(function(){
            $('body').scrollTo("#demo4");
        });
        $('#demoLink5').click(function(){
            $('body').scrollTo("#demo5");
        });
        $('#demoLink6').click(function(){
            $('body').scrollTo("#demo6");
        });
        $('#demoLink7').click(function(){
            $('body').scrollTo("#demo7");
        });
        $('#demoLink8').click(function(){
            $('body').scrollTo("#demo8");
        });
        $('#demoLink9').click(function(){
            $('body').scrollTo("#demo9");
        });
        $('#beforeYouGoLink').click(function(){
            $('body').scrollTo("#beforeYouGo");
        });
    });