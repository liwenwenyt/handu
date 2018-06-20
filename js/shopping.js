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