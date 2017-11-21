

// 轮播图
$(function(){
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
var myBannerSwiper = new Swiper(".lsw-swiper",{
    autoplay : 2000,
    speed:800,
    loop:true,
    effect : 'fade',
    fade: {
      crossFade: false,
    },
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
})
