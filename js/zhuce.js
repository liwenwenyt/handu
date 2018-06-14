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
	/*if ($("#text").val()=="时髦连衣裙") {
		$("#text").focus(function(){
    	$(this).val()="";
        })
        $("#text").blur(function(){
    	$(this).val()="时髦连衣裙";
     })
	}*/
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
 //注册方式切换
 /*$("#btn_email").on("click",function(){
 	$(".change1").css("display","none");
 	$(".change2").css("display","block");
 })
 $("#btn_phone").on("click",function(){
 	$(".change1").css("display","block");
 	$(".change2").css("display","none");
 })*/
 $(function(){
 	 $("#btn_email").click(function(){
    $(".change1").css("display","none");
 	$(".change2").css("display","block");
 	$(this).css({
 		"background": "#b00a2a",
			"border":"1px solid #a90024",
			"color": "white"});
    $("#btn_phone").css({
 		"background": "#d9d7d7",
			"border":"1px solid #cccccc",
			"color": "black"});
 	});
 	$("#btn_phone").click(function(){
    $(".change1").css("display","block");
 	$(".change2").css("display","none");
 	$(this).css({
 		"background": "#b00a2a",
			"border":"1px solid #a90024",
			"color": "white"});
    $("#btn_email").css({
 		"background": "#d9d7d7",
			"border":"1px solid #cccccc",
			"color": "black"});
 	});

 	
 })
 //注册正则验证
 //正则封装
 function checkAll(type,value){
	var reg=null;
	switch(type){
		case "username":reg=/^[a-zA-Z_]\w{5,15}$/;break;
		case "email":reg=/^\w+@[a-zA-Z0-9]+\.(com|cn|net)$/;break;
		case "phoneNumber": reg=/^1[^0126][0-9]{9}$/;break;
		case "personId": reg=/^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[012])([012][1-9]|3[01])\d{3}[0-9xX]$/;break;
		case "date":reg=/^(19|20)\d{2}[\.\-\/](0[1-9]|1[012])[\.\-\/]([012][1-9]|3[01])$/;break;
		case "ipCheck":reg=/^((\d|\d{2}|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(\d|\d{2}|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;break;
		case "chinese":reg=/^[\u4e00-\u9fa5]+$/;break;
		default:;
	}
	if(reg!=null){
		if(reg.test(value)){
			return true;
		}
	}
	return false;
}
 $(function(){
   $("#phone").blur()
 })
