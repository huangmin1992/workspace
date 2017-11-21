window.onload = function(){
	var myHomeSwiper = new Swiper(".home-banner",{
		autoplay:500000,
		loop:true,
		pagination:'.swiper-pagination',
		paginationClickable:true,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next'
	})
	var scenicSwiper = new Swiper('.scenic-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        spaceBetween: 30,
        loop:true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
	// nav
	if(document.querySelector(".eg-container")!=null){
		var navTop = $('.eg-container').offset().top;
	}
	$(window).scroll(function(){
		navMove()
	})
	navMove()
	function navMove(){
		var scrollTop = $(window).scrollTop();
		if(document.querySelector(".eg-container")!=null){
			var navTop1 = $('.eg-container').offset().top;
		}
		if(scrollTop>=navTop1){
			$('.eg-container .eg-bg').css({
				'position':'fixed'
			})
		}
		if(scrollTop<navTop){
			$('.eg-container .eg-bg').css({
				'position':'absolute'
			})
		}
		if (scrollTop>150){
			$('.all-btn-top').css({
				'opacity':"1",
				'transition':0.3
			})
			$('.san-nav').css({
				'top':0,
				"opacity":1
			})
		}else{
			$('.all-btn-top').css({
				'opacity':"0",
			})
			$('.san-nav').css({
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