

function registerCallback(callbackEnabled, callbackSeconds, actionbackEnabled, actionbackSeconds) {

    var self = this;

    self.popup_happened = false;
    self.mobile = false;

    self.initcallback = function(timeout) {
        if ($(window).width() < 586)
            self.mobile = true;
        else {
            setTimeout(function() {
                $('#zzzcpa').show();
            }, timeout);
        }
    };

    self.popup_show_once = function(e) {
        if (!self.popup_happened && !self.mobile && (e.clientY < 0 || e.clientX < 0 || e.clientY > ($(window).height() - 5) || e.clientX > ($(window).width() + 5) )){
            $('.l-layout').show();
            $('#zzzcpa-form').show();
            self.popup_happened = true;
        }
    };

    self.popup_show = function() {
        $('.l-layout').show();
        $('#zzzcpa-form').show();
    };

    self.popup_hide = function() {
        $('#zzzcpa-form').hide();
        $('.l-layout').hide();
    };

    $('#zzzcpa').click(function () {
        self.popup_show();
    });

    $('.icon-close, .l-layout').click(function (e) {
        self.popup_hide();
    });

    if(callbackEnabled) {
        self.initcallback(parseInt(callbackSeconds) * 1000);
    }

    if(actionbackEnabled) {
        setTimeout(function() {
            $(document).mouseleave(function(e) {
                self.popup_show_once(e);
            });
        }, parseInt(actionbackSeconds) * 1000);
    }


};

var delivery = function(){
  var random_delivery_timer = (10 + Math.floor(10*Math.random()))*1000;
  var MAX_cities = $('.cities span').length;
  var MAX_f_names = $('.female_names span').length;
  var MAX_m_names = $('.male_names span').length;


  var random_city = Math.floor(MAX_cities*Math.random());
  var random_city_name = $('.cities span:nth-child('+(random_city+1)).text();

  var random_gender = Math.floor(2*Math.random());
  if (random_gender) {
    var random_name_number = Math.floor(MAX_m_names*Math.random());
    var random_name =$('.male_names span:nth-child('+(random_name_number+1)).text();
  }
  else{
    var random_name_number = Math.floor(MAX_f_names*Math.random());
    var random_name =$('.female_names span:nth-child('+(random_name_number+1)).text();
  }


  var random_packs = 2 + Math.floor(4*Math.random());
  $('#JScity').html('(' + random_city_name+')');
  $('#JSname').html(random_name);
  $('.purCnt').html(random_packs);
    function getRandom(min, max) {
        var res = Math.floor(Math.random() * (max - min + 1) + min);
        return res;
    }
    var b1 = $('.b1');
    var b2 = $('.b2');
    var b3 = $('.b3');
    var delay1 = getRandom(8, 10) * 1000;
    var delay2 = getRandom(8, 10) * 1000;
    var delay3 = getRandom(8, 10) * 1000;
    var delay4 = delay1 + delay2 + delay3;

    b3.fadeOut(function () {
        b2.fadeIn();
    });

    setTimeout(function () {
        b2.fadeOut(function () {
            b1.fadeIn();
        });
        setTimeout(function () {
            b1.fadeOut(function () {
                b3.fadeIn();
            });
        }, delay2);
    }, delay1);

    setTimeout(delivery, delay4);
};
      
 var online = function(){
   $('#peoples').hide();
   var random_online = 172 + Math.floor(30*Math.random());
   $('#peoples').html(random_online);
   $('#peoples').fadeIn();
   var random_timer = (10 + Math.floor(10*Math.random()))*1000;
   setTimeout(online,random_timer);
 };




window.onload = function () {
  var first_show_delay = (10 + Math.floor(10*Math.random()))*1000;
  setTimeout(delivery,first_show_delay);
  online();
  registerCallback(1, 20, 1, 0);
  
  
  $("a.scroll").click(function() {
        var id = $(this).attr("href");
        var pos = $(id).position().top;
        $("html, body").animate({
            scrollTop: pos
        }, 1500);
        return false;
    });
}