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

// 登录
$('.login-sign').on('click',function(){
  $('.mask').fadeIn('fast')
  $('.login-pop').delay(200).fadeIn('fast')
})
// 登录关闭
$('.login-close').on('click',function(){
  $('.mask').delay(200).fadeOut('fast')
  $('.login-pop').fadeOut('fast')
})
// 注册成功
$('.resize').on('click',function(e){
  e.preventDefault();
  var num = 5;
  $('.resize-over').fadeIn('fast')
  setInterval(function(){
    num--;
    if(num<=0){
      console.log('页面跳转')
      num=0;
    }
    $('.resize-seconds').text(num)
  },1000)
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
  $('.nav-box').css({
    'opacity':0
  })
  $('nav').css({
    'top':0,
    'opacity':1
  })
  if($(this).scrollTop()<=100){
    $('.nav-box').css({
      'opacity':1,
      'transition-delay':'0.2s'
    })
    $('nav').css({
      'top':'-80px',
      'opacity':0
    })
  }
  // banner
  var windowTop = $(window).scrollTop();
  if (windowTop < $(window).height()) {
      $('.banner-box').css('transform', "translate(0px," + (windowTop) / 1.5 + "px)");
      $('.san-banner-box').css('transform', "translate(0px," + (windowTop) / 1.5 + "px)");
  };
})
// 图片弹层
$(function(){
  function autoPlay(){
    this.init();
  }
  autoPlay.prototype={
    time:null,
    index:0,
    len:$('.er-wraper-list').length,
    init:function(){//初始化
      var _this = this;
      $('.er-bea-list').on('click',function(){
        $('.mask').show('slow');
        $('.er-img-box').delay(500).fadeIn('slow')
        _this.shows($(this).index())
        _this.index = $(this).index()
        console.log(_this.index)
      })

      // mask
      $('.mask').on('click',function(){
        $('.mask').delay(500).hide('slow');
        $('.er-img-box').fadeOut('slow')
      })

      //左点击
      $('.er-img-left').on('click',function(){
        _this.index--;
        if(_this.index<0){
          _this.index=_this.len-1;
        }
        _this.shows(_this.index)
      })
      //右点击
      $('.er-img-right').on('click',function(){
        _this.index++;
        if(_this.index>=_this.len){
          _this.index=0;
        }
        _this.shows(_this.index)
      })

      //pages
      $('.er-pages-total').text($('.er-bea-list').length)
    },
    shows:function(num){//轮播图显示
      $('.er-pages-num').text(num+1)
      $('.er-wraper-list').eq(num).fadeIn(1000).siblings('.er-wraper-list').fadeOut(700);
    }
    
  }
  new autoPlay()
})
// 锚点跳转
$('.er-nav').on('click',function(){
  var num = $(this).attr('name')
  $("html,body").animate({scrollTop:$('#'+num).offset().top-$('nav').height()},1000)
  console.log(num)
})
// 地图显示
$('.san-maps-btn').on('click',function(){
  $('.mask').fadeIn('fast');
  $('.san-maps').delay(500).fadeIn('fast');
})
$('.mask').on('click',function(){
  $('.mask').delay(500).fadeOut('fast');
  $('.san-maps').fadeOut('fast');
})
// 附近选择
$('.ilist-btns>a').on('click',function(){
  var index = $(this).index();
  $(this).addClass('active').siblings('a').removeClass('active');
  $('.ilist-icontent').fadeIn('fast');
  $('.back').addClass('active');
  $('.ilist-lines').fadeOut('fast');
  $('.ilist-inews').eq(index).delay(500).fadeIn('fast').siblings('.ilist-inews').fadeOut('fast')
})
// 查询路线
  $('.ilist-fund').on('click',function(){
    $('.lines-news').eq(0).addClass('active');
    $('.ilist-box').fadeOut(100);
    $('.iback').addClass('active');
    $('.ilist-lines-btns').fadeIn();
    $('.ilist-lines-btns>a').on('click',function(){
      var index = $(this).index();
      $(this).addClass('active').siblings('a').removeClass('active');
      $('.lines-news').eq(index).addClass('active').siblings('.lines-news').removeClass('active')
    })
  })

// 关闭
$('.san-iclose').on('click',function(){
  $('.san-info').toggleClass('active');
  $('.san-iframes').toggleClass('active');
})
$('.back').on('click',function(){
  $('.no-shows').fadeOut('fast');
  $('.ilist-lines').delay(500).fadeIn('fast');
  $('.ilist-inews').fadeOut('fast');
  $(this).removeClass('active');

})
$('.iback').on('click',function(){
  $('.ilist-lines-btns').fadeOut();
  $('.ilist-box').fadeIn();
  $('.lines-news').removeClass('active')
})



// 吃喝玩乐--酒店住宿
$('.er-hotel-list').on('mouseenter',function(){
  $(this).find($('.er-hotel-txt')).animate({bottom:-35},300);
  $(this).find($('.er-hotel-info')).delay(300).animate({left:0},300);
})
$('.er-hotel-list').on('mouseleave',function(){
  $(this).find($('.er-hotel-txt')).delay(300).animate({bottom:0},300);
  $(this).find($('.er-hotel-info')).animate({left:'100%'},300);
})
// 旅游出行
$('.er-rnav>li').on('click',function(){
  var index = $(this).index();
  $(this).addClass('active').siblings('li').removeClass('active');
  $('.er-tour-info').eq(index).delay(500).fadeIn('fast').siblings('.er-tour-info').fadeOut('fast')
})
// 新闻
$('.news-right>ul>li').on('click',function(){
  var _this = this;
  $(this).addClass('active').siblings('li').removeClass('active');
  $(this).find('.news-info').animate({height:80,paddingTop:5,paddingBottom:5},300);
  // $(this).find('.news-info').slideDown('fast')
  // $(this).siblings('li').find('.news-info').slideUp('fast');
  $(this).siblings('li').find('.news-info').animate({height:0,paddingTop:0,paddingBottom:0},300);
})
// 音频播放
$('.san-audio').on('click',function(){
  var audios = document.getElementById('audio')
  // audios.play();
  if(audios.paused){
    audios.play();
  }else{
    audios.pause()
  }
  console.log(1)
})
$(function(){
  function newsPlay(){
    this.init()
  }
  newsPlay.prototype={
    time:null,
    index:0,
    len:$('.news-animate>ul>li').length,
    init:function(){//初始化
      var _this = this;
      this.play()
      $('.news-animate').on('mouseenter',function(){
        clearInterval(_this.time)
        $('.news-mao').fadeIn('fast')
        $('.news-txt').animate({height:'100%',paddingLeft:50,paddingRight:50},500);
        $('.news-txt-info').addClass('active');
      })
      $('.news-animate').on('mouseleave',function(){
        _this.play();
        $('.news-mao').fadeOut('fast')
        $('.news-txt').animate({height:70,paddingLeft:8,paddingRight:5},500);
        $('.news-txt-info').removeClass('active');
      })
      //左点击
      $('.news-lefts').on('click',function(){
        _this.index--;
        if(_this.index<0){
          _this.index=_this.len-1;
        }
        _this.shows(_this.index)
      })
      //右点击
      $('.news-rights').on('click',function(){
        _this.index++;
        if(_this.index>=_this.len){
          _this.index=0;
        }
        _this.shows(_this.index)
      })
    },
    play:function(){//轮播
      var _this = this;
      this.time = setInterval(function(){
        _this.shows(_this.index);
        _this.index++;
        if(_this.index>=_this.len){
          _this.index=0;
        }
      },3000)
    },
    shows:function(num){//轮播图显示
      $('.news-animate>ul>li').eq(num).fadeIn(1000).siblings('li').fadeOut(700);
    }
  }
  new newsPlay();
})
// 点赞
$('.san-likes').on('click',function(){
  $(this).css({'color':'#fff','background':'#00a4b3'})
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
    if(tops>=$('.pages4').offset().top - w_height*0.7){
      $('.pages4 .txtdl1').addClass('animate-top');
      $('.pages4 .txtdl2').addClass('animate-top');
      $('.pages4 .txtdl3').addClass('animate-top');
      $('.pages4 .txtdl4').addClass('animate-top');
    }
    if(tops>=$('.pages5').offset().top - w_height*0.7){
      $('.pages5 .txtdl1').addClass('animate-top');
      $('.pages5 .txtdl2').addClass('animate-top');
      $('.pages5 .txtdl3').addClass('animate-top');
    }
    if(tops>=$('.pages6').offset().top - w_height*0.7){
      $('.pages6 .txtdl1').addClass('animate-top');
      $('.pages6 .txtdl2').addClass('animate-top');
      $('.pages6 .txtdl3').addClass('animate-top');
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

//实现日期选择联动
var start = {
    format: 'YYYY-MM-DD',
    isinitVal:true,
    minDate: '2014-06-16 23:59:59', //设定最小日期为当前日期
    //festival:true,
    maxDate: $.nowDate({DD:0}), //最大日期
    choosefun: function(elem,datas){
        end.minDate = datas; //开始日选好后，重置结束日的最小日期
        endDates();
    },
    okfun:function (elem,datas) {
        alert(datas)
    }
};
var end = {
    format:"YYYY-MM-DD",
    isinitVal:true,
    minDate: $.nowDate({DD:0}), //设定最小日期为当前日期
    //festival:true,
    maxDate: '2099-06-16 23:59:59', //最大日期
    choosefun: function(elem,datas){
        start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
    }
};
// 酒店预订
function endDates() {
    end.trigger = false;
    $("#inpend").jeDate(end);
}
$("#inpstart").jeDate(start);
$("#inpend").jeDate(end);
// 游客量查询
function endDates() {
    end.trigger = false;
    $("#numend").jeDate(end);
}
$("#numstart").jeDate(start);
$("#numend").jeDate(end);