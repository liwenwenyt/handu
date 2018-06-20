$(function(){
	//显示隐藏网站导航
	$(".location").mouseenter(function(){
	$(".header_hid").css("display","block");
 
    })
	$(".location").mouseleave(function(){
	$(".header_hid").css("display","none");
    })
	$(".header_hid").mouseenter(function(){
    $(".header_hid").css("display","block");
	})
	$(".header_hid").mouseleave(function(){
    $(".header_hid").css("display","none");
	})
	//文本框获得焦点 失去焦点 改变value
	
	$("#text").focus(function(){
		$(this).attr("value","");
	})
    $("#text").blur(function(){
		$(this).attr("value","时髦连衣裙");
	})
})
//选项卡
 $(function() {
	$('.select').on('mouseenter', function() {
		$(".sel_right").removeClass('hide');
	}).on('mouseleave', function(){
		$(".sel_right").addClass('hide');
		$(".sub").addClass('hide');
	}).on('mouseenter', 'li', function(e) {
		var li_data = $(this).attr('data-id');
		$(".sub").addClass('hide');
		$('.sub[data-id="' + li_data + '"]').removeClass('hide');
	})
})
 //选项卡出现隐藏
 $(function(){
 	$(".but_left").mouseenter(function(){
 	$(".select").show();
    })
    $(".but_left").mouseleave(function(){
 	$(".select").hide();
    })
    /*$(".li_top:parent").mouseenter(function(){
    	$(".li_top:parent").css({"background":"#333333","color":"white"})
    })*/
 })