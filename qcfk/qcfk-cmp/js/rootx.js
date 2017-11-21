$('#bt35').click(function(){
        $(".ewm").delay(500).fadeIn('slow');
        $(".e-left").animate({'left':-190},"slow");
        $(".left").animate({'left':-190},"slow");
        $(".e-right").animate({'right':-150},"slow");
        $(".ecenter").fadeOut('slow');
        $('body').css({
            "z-index":-1
        })
        
    });
    $('.bigbgbox').click(function(){
        $(".ewm").fadeOut('slow');
        $(".e-left").delay(500).animate({'left':0},"slow");
        $(".left").delay(500).animate({'left':0},"slow");
        $(".e-right").delay(500).animate({'right':0},"slow");
        $(".ecenter").delay(500).fadeIn('slow');
        $('body').css({
            "z-index":0
        })
    });
    $('.bt45').click(function(){
        $(".ydewm").delay(500).fadeIn('slow');
        $(".e-left").animate({'left':-190},"slow");
        $(".left").animate({'left':-190},"slow");
        $(".e-right").animate({'right':-150},"slow");
        $(".ecenter").fadeOut('slow');
        $('body').css({
            'z-index':'-1'
        })
        
    });
    $('.ydewm').click(function(){
        $(".ydewm").fadeOut('slow');
        $(".e-left").delay(500).animate({'left':0},"slow");
        $(".left").delay(500).animate({'left':0},"slow");
        $(".e-right").delay(500).animate({'right':0},"slow");
        $(".ecenter").delay(500).fadeIn('slow');
        $('body').css({
            'z-index':'0'
        })
    });

//吃喝玩乐大选项卡
$('.clwl-btn>ul>li').on('click',function(){
    var index = $(this).index();
    $(this).addClass('active').siblings('li').removeClass('active')
    $('.chwl-box').eq(index).addClass('active').siblings('.chwl-box').removeClass('active')
})
//旅游出行选项卡
$('.lycx-tab>ul>li').on('click',function(){
    var index = $(this).index();
    $(this).addClass('active').siblings('li').removeClass('active')
    $('.lycx-tab-list').eq(index).addClass('active').siblings('.lycx-tab-list').removeClass('active')
})

// 轮播图
$(function(){
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
    var newCount=$ct.children().size();
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

    // 新闻tabs
    $('.nes-lsinfo').on('click',function(){
        $(this).addClass('active').siblings('.nes-lsinfo').removeClass('active');
        $(this).find('.news-indir').animate({left:100,opacity:0},300);
        $(this).siblings('.nes-lsinfo').find('.news-indir').animate({left:17,opacity:1},300)


        $(this).find('.news-more').fadeIn(500);
        $(this).siblings('.nes-lsinfo').find('.news-more').fadeOut(500);
        $(this).find('.news-info').animate({height:55,paddingTop:5,paddingBottom:5},500);
        $(this).siblings('.nes-lsinfo').find('.news-info').animate({height:0,padding:0},500);
    })
})
var myHomeSwiper = new Swiper(".home-banner",{
    autoplay:5000,
    loop:true,
    effect:'fade',
    pagination:'.swiper-pagination',
    paginationClickable:true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
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
var scenicSwiper = new Swiper('.animate-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 4,
    spaceBetween: 20,
    loop:true,
});
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
var audio = document.getElementById('audio');
$('.er-links li.er-links-info a').on('click',function(){
    var index = $(this).parent().index();
    $(this).toggleClass('active').parent().siblings('li.er-links-info').find("a").removeClass('active')
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
