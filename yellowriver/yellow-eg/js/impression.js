// 全屏
function fullScreen() {

  var el = document.documentElement;

  var rfs = el.requestFullScreen || el.webkitRequestFullScreen || 

      el.mozRequestFullScreen || el.msRequestFullScreen;

  if(typeof rfs != "undefined" && rfs) {

    rfs.call(el);

  } else if(typeof window.ActiveXObject != "undefined") {

    //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏

    var wscript = new ActiveXObject("WScript.Shell");

    if(wscript != null) {

        wscript.SendKeys("{F11}");

    }

  }
}

function exitFullScreen() {

  var el = document;

  var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || 

      el.mozCancelFullScreen || el.exitFullScreen;

  if(typeof cfs != "undefined" && cfs) {

    cfs.call(el);

  } else if(typeof window.ActiveXObject != "undefined") {

    //for IE，这里和fullScreen相同，模拟按下F11键退出全屏

    var wscript = new ActiveXObject("WScript.Shell");

    if(wscript != null) {

        wscript.SendKeys("{F11}");

    }

  }
}
var full = false;
$('.nav-screen').on('click',function(){
  full = !full;
  if(full){
    fullScreen()
  }else{
    exitFullScreen()
  }
  
})














// 语言
$('.nav-lang').on('click',function(){
  $(this).find('.lang-info').slideToggle('fast')
})
$('.nav-navbar').on('click',function(){
  $(this).find('.nav-lan').toggleClass('active');
  $('.menu').toggleClass('active')
})
// 导航条显示
$(window).scroll(function(){
  // banner
  var windowTop = $(window).scrollTop();
  if (windowTop < $(window).height()) {
      $('.banner-box').css('transform', "translate(0px," + (windowTop) / 1.5 + "px)");
      $('.san-banner-box').css('transform', "translate(0px," + (windowTop) / 1.5 + "px)");
  };
})
// animate

  var w_height = document.documentElement.clientHeight;
  $('.san-banner').animate({'opacity':1},400)
  $('.logo').delay(300).animate({left:30,'opacity':1},500)
  $('.nav').delay(600).animate({right:30,'opacity':1},500)
  $('.banner-title').delay(1600).animate({'opacity':1,bottom:35},500)
  showAnim();
  $(window).scroll(function(){
    showAnim();
    // alert(111)
  })
  function showAnim(){
    var tops = $(window).scrollTop()
    if(tops>=$('.pages1').offset().top - w_height*0.7){
      $('.pages1 .txtdl1').addClass('animate-top');
      $('.pages1 .txtdl2').addClass('animate-top');
      $('.pages1 .txtdl3').addClass('animate-top');
      $('.pages1 .txtdl4').addClass('animate-top');
      $('.pages1 .txtdl5').addClass('animate-top');
      $('.pages1 .txtdl6').addClass('animate-top');
    }
    if(tops>=$('.pages2').offset().top - w_height*0.7){
      $('.pages2 .txtdl1').addClass('animate-top');
      $('.pages2 .txtdl2').addClass('animate-top');
      $('.pages2 .txtdl3').addClass('animate-top');
      $('.pages2 .txtdl4').addClass('animate-top');
      $('.pages2 .er-cul-circle').addClass('animate-scale')
      $('.pages2 .txtdl5').addClass('transL')
      $('.pages2 .txtdl6').addClass('transR')
      $('.pages2 .er-screen-box').addClass('transRk')
      $('.pages2 .er-screen-txt').addClass('transR')
    }
    if(tops>=$('.pages3').offset().top - w_height*0.7){
      $('.pages3 .txtdl1').addClass('animate-top');
      $('.pages3 .txtdl2').addClass('animate-top');
      $('.pages3 .txtdl3').addClass('animate-top');
      $('.pages3 .txtdl4').addClass('animate-top');
    }
    if($(window).scrollTop()>=300){
      $('#top').fadeIn('fast')
    }else{
      $('#top').fadeOut('fast')    
    }
  }  
// 返回顶部
  $('#top').on('click',function(){
      $("html,body").animate({scrollTop:0},800)
  })
