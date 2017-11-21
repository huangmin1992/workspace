(function(){
var supportOrientation = (typeof window.orientation === 'number' &&
typeof window.onorientationchange === 'object');
    var init = function(){
         var htmlNode = document.body.parentNode,
        orientation;
        var updateOrientation = function(){
            if(supportOrientation){
                orientation = window.orientation;
                switch(orientation){
                case 90:
                case -90:
                orientation = 'landscape';//横屏
                break;
                default:
                orientation = 'portrait';//竖屏
                break;
                }
            }else{
                orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
            }
                htmlNode.setAttribute('class',orientation);
        };
        if(supportOrientation){
            window.addEventListener('orientationchange',updateOrientation,false);
        }else{
            //监听resize事件
            window.addEventListener('resize',updateOrientation,false);
        }
        updateOrientation();
    };
    window.addEventListener('DOMContentLoaded',init,false);
})();
window.onload = function(){
    // 首页
    var swiper = new Swiper('.container',{
        autoplay:5000,
        loop:true,
        pagination : '.swiper-pagination',
        effect : 'fade',
        autoplayDisableOnInteraction : false,
        paginationClickable: true,
        fade: {
          crossFade: false,
        },
        onTransitionStart: function(swiper){
        },
        onTransitionEnd: function(swiper){
            // 向右
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.zi-anim').removeClass('tranL')
            $('.swiper-slide').eq(swiper.activeIndex).find('.zi-anim').addClass('tranL')
            // 向左
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.zi-cir').removeClass('tranR')
            $('.swiper-slide').eq(swiper.activeIndex).find('.zi-cir').addClass('tranR')
            // 向上
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.zi-top').removeClass('tranT')
            $('.swiper-slide').eq(swiper.activeIndex).find('.zi-top').addClass('tranT')
            // 向下
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.zi-bom').removeClass('tranB')
            $('.swiper-slide').eq(swiper.activeIndex).find('.zi-bom').addClass('tranB')

        }
    });
    // 新闻
    var swiperNews = new Swiper('.news-animate',{
        autoplay:5000,
        loop:true,
        pagination :'.swiper-pagination',
        autoplayDisableOnInteraction : false,
        paginationClickable: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper  
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
    })    
    // 旅游服务
    var swiperNews = new Swiper('.move-nav',{
        autoplay:false,
        slidesPerView: 5,
        autoplayDisableOnInteraction : false,
        paginationClickable: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper  
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
    }) 
    // 吃喝玩乐
    function createSwiper(index){
        var swiper = new Swiper('.plays-0'+index,{
            autoplay:1000,
            loop:true,
            paginationClickable: true,
            autoplayDisableOnInteraction : false,
            pagination :'.swiper-pagination',
            observer:true,//修改swiper自己或子元素时，自动初始化swiper  
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
        })
        return swiper;
    }
    
    var swiper1,swiper2,swiper3,swiper4,swiper5;
    swiper1 = createSwiper(1);
    $('.plays-navlist').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        // $('.plays-content').eq(index).delay(500).fadeIn('fast').siblings('.plays-content').fadeOut('fast')
        $('.plays-content').eq(index).addClass('active').siblings('.plays-content').removeClass('active')
        if(index==0){
            if(swiper1!=undefined){
                swiper1.destroy();
            }
            swiper1 = createSwiper(1)
        }else if(index==1){
            if(swiper2!=undefined){
                swiper2.destroy();
            }
            swiper2 = createSwiper(2)
        }else if(index==3){
            if(swiper3!=undefined){
                swiper3.destroy();
            }
            swiper3 = createSwiper(3)
        }else if(index==4){
            if(swiper4!=undefined){
                swiper4.destroy();
            }
            swiper4 = createSwiper(4)
        }else if(index==5){
            if(swiper5!=undefined){
                swiper5.destroy();
            }
            swiper5 = createSwiper(5)
        }
    })

	$('.nav-icons').on('click',function(){
		$('.navbar').fadeIn('fast')
	})
	$('.back').on('click',function(){
		$('.navbar').fadeOut('fast')
	})
    // $('.news-right').height($('.news-left').height())
    // 省略号
    function overHidden(elm,num){
        var str = $(elm).text();
        if(str.length>num){
            $(elm).text(str.substring(0,num-3)+'...')
        }
    }
    overHidden('.txt-info',284);
    overHidden('.cul-txt',145);
    overHidden('.news-yimg .nw-cinfo',40)
    overHidden('.news-noimg .nw-cinfo',60)
    overHidden('.view-txtinfo',51)
    $(window).scroll(function(){
        moveTop();
    })
    // topnav
    function moveTop(){
       if($(window).scrollTop()>45){
            $('nav').css({
                'top':'0',
                'opacity':1
            })
       }else{
            $('nav').css({
                'top':'-1rem',
                'opacity':0
            })
       }
    }
    moveTop();
    // news
    var show = false;
    $('.news-navshow').on('click',function(){
        var lH = 0;
        if($('.news-navinfo a').length>3){
            lH = $('.news-navinfo a').eq(0).height()*(Math.ceil($('.news-navinfo a').length/3));
            console.log(lH)
        }else{
            lH = $('.news-navinfo a').eq(0).height();
        }
        show  = !show;
        if(show){
            $('.news-navinfo').css({
                'height':lH
            })
            $(this).find('.news-more').addClass('show-more')
        }else{
            $('.news-navinfo').css({
                'height':0
            })
            $(this).find('.news-more').removeClass('show-more')
        }
    })
    // 视频
    var video = document.getElementById('vides');
    $('.san-video').on('click',function(){
        $('#vides').attr('controls',true)
        video.play()
        $(this).find('.san-bar').fadeOut('fast')
    })
    // 旅游服务
    $('.tour-nav .swiper-slide').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('.swiper-slide').removeClass('active');
        $('.tour-content').eq(index).addClass('active').siblings('.tour-content').removeClass('active')
    })
    // 留言回复
    $('.zi-tabs a').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.zi-langs').eq(index).addClass('active').siblings('.zi-langs').removeClass('active')
    })
    // 投诉建议
    $('.ts-tabs a').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.ts-langs').eq(index).addClass('active').siblings('.ts-langs').removeClass('active')
    })
    // 调查问卷
    $('.dc-tabs a').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.dc-langs').eq(index).addClass('active').siblings('.dc-langs').removeClass('active')
    })
    // 预定中心
     $('.order-nav li').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.order-content').eq(index).addClass('active').siblings('.order-content').removeClass('active')
    })

    //查询结果
    $('.tour-surs').on('click',function(){
        var str = '';
        $('.tour-reslut').empty()
            str+='<table class="tour-table"><tr>'
                +'<td rowspan="2">1</td><td>2</td></tr>'         
                +'<tr><td>3</td></tr>'                
                +'<tr><td rowspan="2">1</td><td>2</td></tr>'       
                +'<tr><td>3</td></tr>'            
                +'</table>'
        $('.tour-reslut').append(str)           
    })



    //实现日期选择联动
        $('#numstart').mobiscroll().date({
        theme:'android-ics light',
        lang:'zh',
        display:'bottom',
        dateFormat:'yy-mm-dd',
        onSelect:function(valueText,inst){
            //选择后触发
        }
    })
     $('#numend').mobiscroll().date({
        theme:'android-ics light',
        lang:'zh',
        display:'bottom',
        dateFormat:'yy-mm-dd',
        onSelect:function(valueText,inst){
            //选择后触发
        }
    })
     // 票务预订
    //实现日期选择联动
        $('#timestart').mobiscroll().date({
        theme:'android-ics light',
        lang:'zh',
        display:'bottom',
        dateFormat:'yy-mm-dd',
        onSelect:function(valueText,inst){
            //选择后触发
        }
    })
     $('#timeend').mobiscroll().date({
        theme:'android-ics light',
        lang:'zh',
        display:'bottom',
        dateFormat:'yy-mm-dd',
        onSelect:function(valueText,inst){
            //选择后触发
        }
    })
}