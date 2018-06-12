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
//淡入淡出的轮播图
let imgs=["timg 3.jpg","timg 4.jpg"];
let ord = 0;//表示下标
let myTimer =null; 
//let fadeTimer=null;//淡入淡出效果的定时器；

//初始化界面的函数
function initUI(){
	$(".ban_fot a:first").css({"background-color":"#333333","color":"white"});	
		
	$(".banner img").slice(1).css({"display":"none"});
}

//动态改变图片
function changeImg(){
	myTimer = setInterval(function(){
		//一、数据处理
		//1、改变图片序号
		let outOrd = ord;//定义淡出（消失）的图片序号
		ord=ord+1;
		//2、改变外观（显示对应的图片）
		showImg(outOrd,ord);
	},2000);
}

//显示指定的图片（根据指定的图片序号）
function showImg(outOrd,transOrd){//2,4
	//一、数据处理
	//1、数据改变
	ord=transOrd;
	//2、边界（数据合法性）
	if(ord>imgs.length-1 || ord<0){
		ord=0;
	}
	//二、外观
	//调用淡入淡出函数就行了
	fadeInOut(outOrd,ord);//2,4
	
	//把所有豆豆都变成原始颜色。
	//把当前豆豆变成高亮颜色。
	$(".ban_fot a").css({"backgroundColor":"white","color":"black"});
	$(".ban_fot a").eq(ord).css({"background-color":"#333333","color":"white"});	
}

//淡入淡出效果
function fadeInOut(outOrd,inOrd){//2,4
	if(outOrd==inOrd){
		return;
	}
	/*console.log("outOrd:"+outOrd);
	console.log("inOrd:"+inOrd);*/
	$(".banner img").eq(outOrd).fadeOut(1000);
	$(".banner img").eq(inOrd).fadeIn(1000);
}
$(function(){
    initUI();
	
	//循环给每个img标记增加onclick事件，目的是跳转到对应的连接
	/*$(".banner img").mouseenter(function(){
		let index = $(".banner img").index(this);
		window.location.href = hrefs[index];
	});	*/

	changeImg();
	
	$(".banner img").mouseenter(function(){
		clearInterval(myTimer);
	});
	
	$(".banner img").mouseleave(function(){
		changeImg();
	});
	
	$(".ban_fot a").mouseenter(function(){
		clearInterval(myTimer);
		$(".banner img").eq(ord).stop(true,true);
		/*
		//清除当前淡入淡出的定时器
		if(fadeTimer!=null){
			clearInterval(fadeTimer);			
		}
		*/
		let index = $(".ban_fot a").index(this);
		showImg(ord,index);//showImg(2,4);
		
	});

})
//选项卡

	/*$(".sel_li").each(function(i){
       $(this).mouseenter(function()
         {
       	 //$(this).css({})
       	 $(".right").each(function(i){
       	 	$(this).show();
         })
      /* $(this).mouseleave(function(){
       	 $(".right")[i].hide();
       })

   })*/
   /*let arr=$(".sel_li");
   let right=$(".right");
   for(let i=0;i<arr.length;i++){
   	 for(let j=0;j<right.length;j++){
   	 	arr[i].onmouseenter(function(){
            right[i].css({"display":"block"})
   	   })
   	 }
   	 
   }*/
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


//底部友情链接移动

