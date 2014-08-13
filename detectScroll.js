/*
*	检测滑动条滑动到六边形DIV 触发showCourse()
*	
*/

$(window).scroll(function(){
	//alert(opt.max);
	var adjust=$(window).width()*0.3;
	var max = adjust+102+520+220+$("#courseRect").height();
	if(($(window).height()+$(window).scrollTop()) >= max){
		//print(max+"done");
    	showSexangleCourse(); // showCourse.js
		//print("done");
	}
});

$(window).resize(function(){
	//process here
	//print($("#regRect").height());
	//$("#regRect").css("padding-top",$("#regRect").height()*2/5+"px");
});

//debug tool funciton

/*
function print(info){
	$("title").text(info);
}

$(function(){
	//alert($(window).height());
	print($(window).width()+"*"+$(window).height()+";"+$("#introRect").height()+";"+$("#guideRect").height());
});
*/