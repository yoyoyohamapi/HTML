/*
*	检测滑动条滑动到六边形DIV 触发showCourse()
*	
*/

$(window).scroll(function(){
	//alert(opt.max);
	var adjust=$(window).width()*0.6;
	var max = adjust+$("#logoRect").height()+$("#courseRect").height();
	if(($(window).height()+$(window).scrollTop()) >= max){
		//print(max+"done");
    	showSexangleCourse(); // showCourse.js
	}
});

$(window).resize(function(){
	//process here
	//print($("#regRect").height());
	$("#regRect").css("padding-top",$("#regRect").height()*2/5+"px");
});

//debug tool funciton

/*
function print(info){
	$("title").text(info);
}

$(function(){
	//alert($(window).height());
	print($(window).width()+"*"+$(window).height()+";"+$("#logoRect").height()+";"+$("#courseRect").height());
});
*/