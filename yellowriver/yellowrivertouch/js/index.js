$(function(){
	function autoPlay(){
		this.init();
	}
	autoPlay.prototype={
		time:null,
		index:0,
		len:$('.wraper-list').length,
		init(){//初始化
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
			$('.wraper').on('mouseover',function(){
				clearInterval(_this.time)
			})
			$('.wraper').on('mouseout',function(){
				_this.play()
			})
			//pages
			$('.wraper-pages>ul>li').on('mouseover',function(){
				_this.index = $(this).index();
				_this.shows(_this.index)
			})
		},
		play(){//轮播
			var _this = this;
			this.time = setInterval(function(){
				_this.shows(_this.index);
				_this.index++;
				if(_this.index>=_this.len){
					_this.index=0;
				}
			},5000)
		},
		shows(num){//轮播图显示
			$('.wraper-pages>ul>li').eq(num).addClass('active').siblings('li').removeClass('active');
			$('.wraper-list').eq(num).fadeIn(1000).siblings('.wraper-list').fadeOut(700);
		}
	}
	new autoPlay()
})

window.onload=function(){
	// console.log($('input[type=text]').focus())
	$('.tc-inp').on('click',function(){
		$(this).focus()
	})
/*	$('.tc-inptxt').on('click',function(){
		$(this).prop('checked',true)
		console.log($(this).prop('checked'))
	})*/
}

// 音频播放
$('.san-audio').on('click',function(){
  var audios = document.getElementById('audio')
  $(this).toggleClass('active')
  // audios.play();
  if(audios.paused){
    audios.play();
  }else{
    audios.pause()
  }
})

// 旅游出行
$('.er-rnav>li').on('click',function(){
  var index = $(this).index();
  $(this).addClass('active').siblings('li').removeClass('active');
  $('.er-tour-info').eq(index).delay(500).fadeIn('fast').siblings('.er-tour-info').fadeOut('fast')
})

// 微信弹层

$('.tc-wchart').on('click',function(){
	$('.mask').fadeIn('fast');
	$('.wx-imgs').delay(300).fadeIn('fast');
	$(this).addClass('active');
	$('.tc-nav').animate({left:'-15%'},700);
	$('.tc-direct').animate({left:'10%'},700);
	$('.tc-center').animate({"opacity":0},700);
})

$('.mask').on('click',function(){
	$(this).fadeOut('fast');
	$('.wx-imgs').css({
		'display':'none'
	});
	$('.tc-nav').animate({left:0},700);
	$('.tc-direct').animate({left:0},700);
	$('.tc-center').animate({"opacity":1},700);
	$('.wx-imgs').removeClass('wxh-imgs')
	$('.tc-wchart').removeClass('active')
})

$('.san-search').on('click',function(){
	$('.mask').fadeIn('fast');
	$('.wx-imgs').delay(300).fadeIn('fast').addClass('wxh-imgs');
	$(this).addClass('active');
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
       
    }
};
var end = {
    format:"YYYY-MM-DD",
    isinitVal:true,
    // minDate: $.nowDate({DD:0}), //设定最小日期为当前日期
    //festival:true,
    maxDate: $.nowDate({DD:0}), //最大日期
    choosefun: function(elem,datas){
        start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
    }
};
// 游客量查询
function endDates() {
    end.trigger = false;
    $("#numend").jeDate(end);
}
$("#numstart").jeDate(start);
$("#numend").jeDate(end);






























































































































