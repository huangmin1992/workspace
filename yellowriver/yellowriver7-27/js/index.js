$(function(){
	function autoPlay(){
		this.init();
	}
	autoPlay.prototype={
		time:null,
		index:0,
		len:$('.wraper-list').length,
		init:function(){//初始化
			var _this = this;
			this.play()
			//左点击
			$('.wraper-left').on('click',function(){
				_this.index--;
				if(_this.index<0){
					_this.index=_this.len-1;
				}
				_this.shows(_this.index)
			})
			//右点击
			$('.wraper-right').on('click',function(){
				_this.index++;
				if(_this.index>=_this.len){
					_this.index=0;
				}
				_this.shows(_this.index)
			})
			$('.wraper-dir').on('mouseover',function(){
				clearInterval(_this.time)
			})
			$('.wraper-dir').on('mouseout',function(){
				_this.play()
			})
			//pages
			$('.wraper-pages>ul>li').on('mouseover',function(){
				_this.index = $(this).index();
				_this.shows(_this.index)
				clearInterval(_this.time)
			})
			$('.wraper-pages>ul>li').on('mouseout',function(){
				_this.play()
			})
		},
		shows:function(num){//轮播图显示
			$('.wraper-pages>ul>li').eq(num).addClass('active').siblings('li').removeClass('active');
			$('.wraper-list').eq(num).fadeIn(1000).siblings('.wraper-list').fadeOut(700);
		},
		play:function(){//轮播
			var _this = this;
			this.time = setInterval(function(){

				_this.index++;
				if(_this.index>=_this.len){
					_this.index=0;
				}
				_this.shows(_this.index);
			},7000)
		},
		
	}
	new autoPlay()
})

// 语言显示
$('nav .nav-lang').on('click',function(){
	$('.lang-info').slideToggle('fast');
})
$('.nav-navbar').on('click',function(){
	$(this).toggleClass('navbar-shows');
	$('nav .nav-info ul').toggleClass('shows');
})
// 弹层切换
$('.content-nav>ul>li').on('click',function(){
	var index = $(this).index();
	$(this).addClass('active').siblings('li').removeClass('active');
	$('.con-list').eq(index).addClass('active').siblings('.con-list').removeClass('active');
})

// 最新动态
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
			$('.news-animate').on('mouseover',function(){
				clearInterval(_this.time)
			})
			$('.news-animate').on('mouseout',function(){
				_this.play();
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
// 新闻tab
$('.news-title').on('click',function(){
	$(this).next().slideDown('fast');
	$(this).parent().addClass('active');
	$(this).parent().siblings('li').removeClass('active');
	$(this).parent().siblings('li').find('.news-info').slideUp('fast');
})

// 弹层
$('.foot-right').on('click',function(){
	$('footer').delay(50).animate({
		'bottom':'-105px'
	},400)
	$('.wraper-pages').delay(50).animate({
		'bottom':'-10px'
	},400)
	$('.slider').delay(200).animate({
		'left':'-80px',
		'opacity':0
	},400)
	$('.mask').delay(300).animate({
		'opacity':1,
		'z-index':1111
	})
	$('.content').delay(500).animate({
		'top':'50%',
		'margin-top':-250,
		'z-index':1112
	},500)
	$('.con-nav').delay(900).animate({
		'opacity':1
	},'slow')
	$('.con-info').delay(1100).animate({
		'opacity':1,
		'margin-top':0
	},500)
	
})
$('.content-close').on('click',function(){
	$('.con-info').animate({
		'opacity':0,
		'margin-top':30
	},500)
	$('.con-nav').delay(200).animate({
		'opacity':0
	},'fast')
	$('.mask').delay(900).animate({
		'opacity':0,
		'z-index':'-1'
	})
	$('.content').delay(500).animate({
		'top':'100%',
		'margin-top':0,
	},600)
	$('footer').delay(1000).animate({
		'bottom':'0px'
	})
	$('.wraper-pages').delay(900).animate({
		'bottom':'50px'
	},400)
	$('.slider').delay(1000).animate({
		'left':'25px',
		'opacity':1
	})
})
$('.center-list').on('click',function(){
	var name = $(this).attr('name');
	var index = $(this).index();
	$('.content-nav>ul>li').eq(index).addClass('active').siblings('li').removeClass('active');
	$('.con-list').eq(index).addClass('active').siblings('.con-list').removeClass('active');
	$('footer').delay(50).animate({
		'bottom':'-105px'
	},400)
	$('.wraper-pages').delay(50).animate({
		'bottom':'-10px'
	},400)
	$('.slider').delay(200).animate({
		'left':'-80px',
		'opacity':0
	},400)
	$('.mask').delay(300).animate({
		'opacity':1,
		'z-index':1111
	})
	$('.content').delay(500).animate({
		'top':'50%',
		'margin-top':-250,
		'z-index':1112
	},500)
	$('.con-nav').delay(900).animate({
		'opacity':1
	},'slow')
	$('.con-info').delay(1100).animate({
		'opacity':1,
		'margin-top':0
	},500)
})
// 版权
$('.foot-left').on('click',function(){
	$('.foot-copy').toggleClass('active');
})
$('.copy-ins').on('mouseover',function(){
	$('.copy-img').addClass('active')
})
$('.copy-ins').on('mouseout',function(){
	$('.copy-img').removeClass('active')
})

// 美图没事
window.onload = function () {
	var oBtnLeft = document.getElementById("goleft");
	var oBtnRight = document.getElementById("goright");
	var oDiv = document.getElementById("indexmaindiv");
	var oDiv1 = document.getElementById("maindiv1");
	var oUl = oDiv.getElementsByTagName("ul")[0];
	var aLi = oUl.getElementsByTagName("li");
	var now = -5 * (aLi[0].offsetWidth + 13);
	oUl.style.width = aLi.length * (aLi[0].offsetWidth + 13) + 'px';
	oBtnRight.onclick = function () {
		var n = Math.floor((aLi.length * (aLi[0].offsetWidth + 13) + oUl.offsetLeft) / aLi[0].offsetWidth);

		if (n <= 5) {
			move(oUl, 'left', 0);
		}
		else {
			move(oUl, 'left', oUl.offsetLeft + now);
		}
	}
	oBtnLeft.onclick = function () {
		var now1 = -Math.floor((aLi.length / 5)) * 5 * (aLi[0].offsetWidth + 13);

		if (oUl.offsetLeft >= 0) {
			move(oUl, 'left', now1);
		}
		else {
			move(oUl, 'left', oUl.offsetLeft - now);
		}
	}
	var timer = setInterval(oBtnRight.onclick, 5000);
	oDiv.onmouseover = function () {
		clearInterval(timer);
	}
	oDiv.onmouseout = function () {
		timer = setInterval(oBtnRight.onclick, 5000);
	}

};

function getStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	}
	else {
		return getComputedStyle(obj, false)[name];
	}
}

function move(obj, attr, iTarget) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function () {
		var cur = 0;
		if (attr == 'opacity') {
			cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
		}
		else {
			cur = parseInt(getStyle(obj, attr));
		}
		var speed = (iTarget - cur) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if (iTarget == cur) {
			clearInterval(obj.timer);
		}
		else if (attr == 'opacity') {
			obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
			obj.style.opacity = (cur + speed) / 100;
		}
		else {
			obj.style[attr] = cur + speed + 'px';
		}
	}, 30);
}  
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
$('#screen').on('click',function(){
	full = !full;
	if(full){
		fullScreen()
	}else{
		exitFullScreen()
	}
	
})
// 播放器
var music = document.getElementById('music');
$('.music-box').on('click',function(){
	$(this).toggleClass('active');
	if(music.paused){
		music.play();
	}else{
		music.pause();
	}
})
































































































































