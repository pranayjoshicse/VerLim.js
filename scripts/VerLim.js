/*!
	VerLim.js v2.0.1 (http://thoughts2Share.in) /(http://pranayjoshi.thoughts2Share.in) 
	Copyright 2014-2015 Thoughts2Share.in
	Licensed under MIT (http://opensource.org/licenses/mit-license.php)
*/
(function($) {
    $.fn.VerLim = function(options) {
        options = $.extend({}, defaults, options);
        if (options.active === "on") {
            $('body').prepend('<div id="scroller" scroller-width="" style="width: 1px;height: 10px;z-index: 2000;left:0px;position: fixed;"><div id="VerLimTheme"></div></div>');
            var $window = $(window);
            var documentHeight = $(document).height();
            var windowHeight = $window.height();
            var scrollTop = $window.scrollTop();
            var target = $('#scroller');
            var themeTarger = $('#VerLimTheme');
            var timer;

            $window.on("resize", function() {
                windowHeight = $window.height();
                documentHeight = $(document).height();
                scrollTop = $window.scrollTop();
                calculate();
            }).resize();

            $window.on("scroll", function() {
                calculate();
            });
        }
        function calculate() {
            clearTimeout(timer);
            if (options.autoHide === "on") {
                target.css('opacity', '');
                autoHide();
                target.fadeIn('slow');
            }
            scrollTop = $(window).scrollTop();
            var scrollPercent = (scrollTop) / (documentHeight - windowHeight);
            target.css('background-color', options.color);
            target.css('width', scrollPercent * 100 + "%");
            target.css('height', options.thickness);
            target.attr('scroller-width', (isNaN(scrollPercent)) ? 0 : Math.round(scrollPercent * 100));
            if (options.theme === "on") {
                themeTarger.removeClass().addClass("VerLim");
                themeTarger.css('height', options.thickness);
                themeTarger.css('width', scrollPercent * 100 + "%");
            }
            if (options.shadow === "on") {
                target.css('box-shadow', "0 0 10px #29d, 0 0 5px #29d");
            }
            switch (options.position) {
                case "top":
                    target.css('top', '0px');
                    themeTarger.css('top', '0px');
                    target.css('margin-top', '0px');
                    themeTarger.css('margin-top', '0px');
                    break;
                case "bottom":
                    target.css('bottom', '0px');
                    themeTarger.css('margin-top', 'auto');
                    themeTarger.css('bottom', '0px');
                    break;
            }
        }
        function autoHide() {
            target.clearQueue();
            target.stop();
            timer = setTimeout(function() {
                target.fadeOut('slow');
            }, options.autoHideTime * 1000);
        }
    };

    $.fn.scrollTo = function(target, options, callback) {
        var $window = $(window);
        var documentHeight = $(document).height();
        var windowHeight = $window.height();
        if (target > 0 && target <= 100) {
            if($(this)[0].tagName=="BODY")
            {targetOrPer = ((documentHeight - windowHeight) * target) / 100}
            else
            {
              targetOrPer = (($(this)[0].scrollHeight) * target) / 100;
            }
        } else targetOrPer = target;
        if (typeof options == 'function' && arguments.length == 2) {
            callback = options;
            options = target;
        }
        var settings = $.extend({
            scrollTarget: targetOrPer,
            duration: 500,
            easing: 'swing'
        }, options);
        return this.each(function() {
            var scrollPane = ($(this)[0].tagName=="BODY")?$('body,html'):$(this);
            var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
            var scrollY = (typeof scrollTarget == "number") ? scrollTarget : Math.abs(scrollTarget.position().top);
            scrollPane.animate({
                scrollTop: scrollY
            }, parseInt(settings.duration), settings.easing, function() {
                if (typeof callback == 'function' && $(this)[0].tagName!="HTML") {
                    callback.call(this);
                }
            });
        });
    }
    var defaults = {
        active: "on",
        autoHide: "off",
        autoHideTime: "2",
        color: "#52bad5",
        position: "top",
        thickness: "5px",
        theme: "off",
        shadow: "on"
    };
})(jQuery);