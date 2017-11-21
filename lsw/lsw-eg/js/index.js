
// 新闻轮播
$('.news-list').width($('.nw-wraper').width());
var timer = null;
var nwidth = $('.news-list').eq(0).width()//元素宽度
var lens = $('.news-list').length;//元素长度
$(".nw-box").prepend($('.news-list').last().clone());
$(".nw-box").append($('.news-list').first().clone());
var imgCount = $('.news-list').length;//元素的长度
$(".nw-box").css({
	left:0-nwidth,
	width:imgCount*nwidth
})
var curidx = 0;
var move = 1;
var lock = false;
function playNext(){
	$('.nw-box').animate({
		left:'-='+move*nwidth,
	},function(){
		curidx+=move;
		if(curidx==lens){
			$('.nw-box').css({
				left:0-nwidth
			});
			curidx=0;
		}
	})
}
function playPre(){
	$('.nw-box').animate({
		left:'+='+move*nwidth
	},function(){
		curidx-=move;
		if(curidx==(-1)){
			$('.nw-box').css({left:0-nwidth*lens});
			curidx=lens-1;
		}
	})
}

timer=setInterval(init,3000);
// 初始化
function init(){
    $(".news-next").trigger('click'); 
} 
// hover
$(".nw-wraper").hover(function(){
	clearInterval(timer);
},function(){
    timer=setInterval(init,3000);
});

//前一个
$('.news-prev').on('click',function(){
	playPre();
})
//后一个
$('.news-next').on('click',function(){
	playNext();
})








window.onload = function(){
	// 默认样式
	function mStyle(){
		$('.san-zbox').css({
			'margin-top':'-'+$('.san-zbox').height()/2+'px'
		})
	}
	mStyle();
	// yuyan
	$('.nav-iclng').on('click',function(){
		$(this).toggleClass('lanshow');
		// $(this).animate({width:118},500)
	})
	// 新闻
	$('.nes-lsinfo').on('click',function(){
		$(this).addClass('active').siblings('.nes-lsinfo').removeClass('active');
		$(this).find('.news-indir').animate({left:100,opacity:0},300);
		$(this).siblings('.nes-lsinfo').find('.news-indir').animate({left:17,opacity:1},300)


		$(this).find('.news-more').fadeIn(500);
		$(this).siblings('.nes-lsinfo').find('.news-more').fadeOut(500);
		$(this).find('.news-info').animate({height:55,paddingTop:5,paddingBottom:5},500);
		$(this).siblings('.nes-lsinfo').find('.news-info').animate({height:0,padding:0},500);
	})
	// 二级导航条
	var w_height = $('body').height();
	$(window).scroll(function(){
		moveTo();
		// banner
		if ($(window).scrollTop() < $(window).height()) {/*
		    $('.baner-top').css('transform', "translate(0px," + ($(window).scrollTop()) / 1.5 + "px)");
		    $('.baner-top').css('transform', "translate(0px," + ($(window).scrollTop()) / 1.5 + "px)");*/
		};
	})
	function moveTo(){
		$('.er-nav').css({
			'top':0,
			'opacity':1
		})
		$('.baner-top .logo').css({
			'left':'-10%',
			'opacity':'0'
		})
		$('.baner-top .nav').css({
			'right':'-50%;',
			'opacity':'0'
		})
		if($(window).scrollTop()<=100){
			$('.er-nav').css({
				'top':'-80px',
				'opacity':0
			})
			$('.baner-top .logo').css({
				'left':'20px',
				'opacity':'1',
				'transition-delay':'0.3s'
			})
			$('.baner-top .nav').css({
				'right':'20px;',
				'opacity':'1',
				'transition-delay':'0.3s'
			})
		}
		if($(window).scrollTop()>w_height+$('.view-gk').height()+$('.news-center').height()){
			$('.bg-01').css({
				'opacity':'0'
			})
			$('.bg-02').css({
				'opacity':'1',
				'transition-delay':'0.3s'
			})
		}else{
			$('.bg-01').css({
				'opacity':'1',
				'transition-delay':'0.3s'
			})
			$('.bg-02').css({
				'opacity':'0'
			})
		}
				// 三级导航显示
		
		if($(window).scrollTop()>=$('.san-head').outerHeight()){
			$('.san-nav').css({
				'top':0,
				'opacity':1
			})
		}else{
			$('.san-nav').css({
				'top':'-15%',
				'opacity':0
			})
		}
	}
	moveTo();
	// 视频
	var video = document.getElementById('vides');
	$('.san-bar').on('click',function(){
		$('#vides').attr('controls',true)
		video.play()
		$(this).fadeOut('fast')
	})
	// 弹窗

	$('.tcbtns').on('click',function(){
		$('#iframes').attr('src',$(this).find('a').attr('href'));
		$('body').css({
			'overflow':'hidden'
		})
		setTimeout(function(){
			$('.info-box').css({
				'left':0
			})
		},500)
	})





	// fanhui
	$('.back').on('click',function(){
		var _iframe = window.parent;
        var _div =_iframe.document.getElementById('box');
        _div.style.left = '100%';
        console.log($(_div).parent())
        $(_div).parent().css({
        	'overflow':'auto'
        })
	})
	// top
	$('.top').on('click',function(){
		$("html,body").animate({scrollTop:0},800)
	})


}