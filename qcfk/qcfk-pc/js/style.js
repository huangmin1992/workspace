window.onload = function(){
	var myHomeSwiper = new Swiper(".home-banner",{
		autoplay:500000,
		loop:true,
		effect:'fade',
		pagination:'.swiper-pagination',
		paginationClickable:true,
		onTransitionEnd:function(swiper){
			$('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.animate-top').removeClass('tranT');
			$('.swiper-slide').eq(swiper.activeIndex).find('.animate-top').addClass('tranT');

			$('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.animate-scale').removeClass('tranC');
			$('.swiper-slide').eq(swiper.activeIndex).find('.animate-scale').addClass('tranC');

			$('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.animate-right').removeClass('tranR');
			$('.swiper-slide').eq(swiper.activeIndex).find('.animate-right').addClass('tranR');

			$('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.animate-left').removeClass('tranL');
			$('.swiper-slide').eq(swiper.activeIndex).find('.animate-left').addClass('tranL');
		}
	})
	// nav
	if(document.querySelector(".home-hover")!=null){
		var navTop = $('.home-hover').offset().top;
	}
	if(document.querySelector(".er-container")!=null){
		var navTop = $('.er-container').offset().top;
	}
	$(window).scroll(function(){
		navMove()
	})
	navMove()
	function navMove(){
		var scrollTop = $(window).scrollTop();
		// var navTop1 = $('.nav-hover').offset().top;
		if(document.querySelector(".home-hover")!=null){
			var navTop1 = $('.home-hover').offset().top;
			if(scrollTop>=navTop1){
				$('.home-hover').addClass('nav-shows')
				$('.er-bg').addClass('er-bgshows')
			}
			if(scrollTop<navTop){
				$('.home-hover').removeClass('nav-shows')
				$('.er-bg').removeClass('er-bgshows')
			}
		}
		if(document.querySelector(".er-container")!=null){
			var navTop1 = $('.er-container').offset().top;
			if(scrollTop>=navTop1){
				$('.er-bg').addClass('er-bgshows')
			}
			if(scrollTop<navTop){
				$('.er-bg').removeClass('er-bgshows')
			}
		}
		if (scrollTop>150){
			$('.all-btn-top').css({
				'opacity':"1",
				'transition':0.3
			})
			$('.show-topnav').css({
				'top':0,
				"opacity":1
			})
		}else{
			$('.all-btn-top').css({
				'opacity':"0",
			})
			$('.show-topnav').css({
				'top':"-60px",
				"opacity":0
			})
		}
	    if (scrollTop < $(window).height()) {
			$('.qcfk-erbanner').css('transform', "translate(0px," + (scrollTop) / 1.5 + "px)");
		};
    }
    $('.all-btn-top').on('click',function(){
    	$("html,body").animate({scrollTop:0},300)
    })

    $('.all-btn-wx').hover(function(){
    	$('.wx-box').css({
    		'display':'block'
    	})
    	setTimeout(function(){
	    	$('.wx-box .btn-info').css({
	    		'top':'0%',
	    		'opacity':1
	    	})
    	},10)
    },function(){
    	
    	$('.wx-box .btn-info').css({
    		'top':'95%',
    		'opacity':0
    	})
    	setTimeout(function(){
    		$('.wx-box').css({
	    		'display':'none'
	    	})
    	},100)
    })

	var video = document.getElementById('video');
	$('.video-btn').on('click',function(){
		$(this).fadeOut('fast')
		$('#video').attr('controls',true);
		video.play();
	})

	

	// 新闻轮播
	$('.news-list').width($('.nw-wraper').width());
	var $ct=$('.nw-box'),
		$items=$ct.children(),
		$pre=$('.news-prev'),
		$next=$('.news-next'),
		imgCount=$items.size(),
		imgWidth=$('.news-list').eq(0).width();
		$ct.append($items.first().clone());
		$ct.prepend($items.last().clone());
	var	newCount=$ct.children().size();
		$ct.css({left:0-imgWidth,width:newCount*imgWidth});
	$next.on('click',function(){
		playnext();

	})
	$pre.on('click',function(){
		playpre();
	})
	var curidx =0;
	var mov = 1;
	var lock=false;
	function playnext(){
		$ct.animate({left:'-='+mov*imgWidth},function(){
			curidx+=mov;
			if(curidx===imgCount){
				$ct.css({left:0-imgWidth});
				curidx=0;
			}
		})
	}

	function playpre(){
		$ct.animate({left:'+='+mov*imgWidth},function(){
			curidx-=mov;
			if(curidx===(-1)){
				$ct.css({left:0-imgWidth*imgCount});
				curidx=imgCount-1;
			}
		})
	}	
	timer=setInterval(init,3000);
	// 初始化
	function init(){
	   $next.trigger('click'); 
	} 
	// hover
	$(".nw-wraper").hover(function(){
		clearInterval(timer);
	},function(){
	    timer=setInterval(init,3000);
	});













	// 新闻list
	$('.nes-lsinfo').on('click',function(){
		$(this).addClass('active').siblings('.nes-lsinfo').removeClass('active');
		$(this).find('.news-indir').animate({left:100,opacity:0},300);
		$(this).siblings('.nes-lsinfo').find('.news-indir').animate({left:17,opacity:1},300)


		$(this).find('.news-more').fadeIn(500);
		$(this).siblings('.nes-lsinfo').find('.news-more').fadeOut(500);
		$(this).find('.news-info').animate({height:55,paddingTop:5,paddingBottom:5},500);
		$(this).siblings('.nes-lsinfo').find('.news-info').animate({height:0,padding:0},500);
	})
	// er-links
    var audio = document.getElementById('audio');
    $('.er-links li.er-links-info a').on('click',function(){
    	var index = $(this).parent().index();
    	$(this).toggleClass('active').parent().siblings('li.er-links-info').find("a").removeClass('active')
    	$('.san-nav-links li.san-links-info').eq(index).find('a').toggleClass('active');
    	$('.san-nav-links li.san-links-info').eq(index).siblings('li.san-links-info').find("a").removeClass('active');
    	if(index==0){
    		if(audio.paused){
    			audio.play();
    		}else{
    			audio.pause();
    		}
    	}else{
    		audio.pause();
    	}
    })
    $('.san-nav-links li.san-links-info a').on('click',function(){
    	var index = $(this).parent().index();
    	$(this).toggleClass('active').parent().siblings('li.san-links-info').find("a").removeClass('active')
    	$('.er-links li.er-links-info').eq(index).find('a').toggleClass('active');
    	$('.er-links li.er-links-info').eq(index).siblings('li.er-links-info').find("a").removeClass('active');
    	if($(this).parent().index()==0){
    		if(audio.paused){
    			audio.play();
    		}else{
    			audio.pause();
    		}
    	}else{
    		audio.pause();
    	}
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
	$('.all-btn-back').on('click',function(){
		var _iframe = window.parent;
        var _div =_iframe.document.getElementById('box');
        _div.style.left = '100%';
        console.log($(_div).find('#iframes'))
        $(_div).find('#iframes').attr('src','');
        $(_div).parent().css({
        	'overflow':'auto'
        })
	})
	// top
	$('.all-btn-top').on('click',function(){
		$("html,body").animate({scrollTop:0},800)
	})
}