$(function(){
    $('#srcoll-content').fullpage({
        // sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#f90']
        afterRender:function(){
        	$('.all-btns .all-btn-top').on('click',function(){
        		$('#srcoll-content').css({
					"transform": "translate3d(0px, 0px, 0px)"
        		})
        		$("html,body").animate({scrollTop:0},300)
        		$('.fp-section').eq(0).addClass('active').siblings('.fp-section').removeClass('active')
        		$(this).css({
        			"opacity":0
        		})
        	})
        },
        afterLoad:function(anchorLink,index){
        	if(index>1){
        		$('.all-btns .all-btn-top').css({opacity:'1'})
        		// $('.lsw-content').eq(index-2).addClass('shows')
        	}else{
        		$('.all-btns .all-btn-top').css({opacity:'0'})
        	}
        	console.log(index,$('.lsw-content').eq(index-2))
        }
    });

    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww = $(window).width();
        var $hh = $(window).height();
        console.log($hh)
        if($ww < 1024||($ww <1024&& $hh <= 1366)){
            $.fn.fullpage.setAutoScrolling(false);
            $(".section").addClass("noscroll")
            $('.logo').css({
                'display':'none'
            })
            $('.navbar').addClass('noshow')
        } else {
            $.fn.fullpage.setAutoScrolling(true);
            $(".section").removeClass("noscroll")
            $('.logo').css({
                'display':'block'
            })
            $('.navbar').removeClass('noshow') 
        }
    }

    autoScrolling();
});
window.onload = function(){
    var myBannerSwiper = new Swiper(".lsw-swiper",{
        autoplay : 5000,
        speed:300,
        effect : 'fade',
        fade: {
          crossFade: false,
        },
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
    })
    //news
    var myNewSwiper = new Swiper('.lsw-news-swiper',{
        autoplay:5000,
        paginationClickable:true,
        pagination:".swiper-pagination"
    })
    $('.lsw-newsinfo>ul>li').on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active')
    })
    var myErNewSwiper = new Swiper('.er-newsContainer', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop:true
    });
    //er
    $(window).scroll(function(){
    	moveScroll();
    })
	moveScroll();
    function moveScroll(){
    	var windowTop = $(window).scrollTop();
		if (windowTop < $(window).height()) {
		    $('.lsw-erbanner').css('transform', "translate(0px," + (windowTop) / 1.5 + "px)");
		};
		if (windowTop>250){
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
    	
    }
    $('.all-btn-top').on('click',function(){
    	$("html,body").animate({scrollTop:0},300)
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