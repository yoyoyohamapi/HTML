/*
*	处理formPanel的显示，切换login和register
*
*/


function showFormPanel(action){
	if(!$("#introVideo").is(":hidden")){
		//alert($("#introVideo").is(":hidden"));
		$("html,body").animate({
			scrollTop:$("#logoRect").offset().top
		},500,function(){
			if(action==1){
				$("#formTitle").text("登陆账号");
				$("#formAction").text("");
				$("#formAction").append('注册 <i class="fa fa-arrow-circle-o-right"></i>');
				$("input[name=action]").val("1");
				$("#doAction").text("登陆");
				//*
				$("#formCheckBox").show();
				$("#doAction").css("margin-top","0px");
			}
			if(action==2){
				$("#formTitle").text("马上注册");
				$("#formAction").text("");
				$("#formAction").append('登陆 <i class="fa fa-arrow-circle-o-right"></i>');
				$("input[name=action]").val("2");
				$("#doAction").text("注册");
				//*
				//*
				$("#formCheckBox").hide();
				$("#doAction").css("margin-top","25px");
			}
			$("#introVideo").fadeOut(500,function(){
				$(".regLog").fadeIn();
			});
		});
	}else{
		//alert(action); //是现在form的对立action
		
		//此刻可以异步滚动
		$("html,body").animate({
			scrollTop:$("#logoRect").offset().top
		},500);
		
		if(action==$("input[name=action]").val()){
			return;
		}
		if(action==1){
			$("#formAction").fadeOut(200,function(){
				$("#formAction").text("");
				$("#formAction").append('注册 <i class="fa fa-arrow-circle-o-right"></i>');
				$("#formAction").fadeIn();
			});
			$("#formTitle").fadeOut(500,function(){
				$("#formTitle").text("登陆账号");
				$("#formTitle").fadeIn();
			});
			$("#doAction").fadeOut(500,function(){
				$("#doAction").text("登陆");
				$("#doAction").css("margin-top","0px");
				$("#formCheckBox").fadeIn(400,function(){$("#doAction").fadeIn(600);});
			});
			$("input[name=action]").val("1");
		}
		if(action==2){
			$("#formAction").fadeOut(200,function(){
				$("#formAction").text("");
				$("#formAction").append('登陆 <i class="fa fa-arrow-circle-o-right"></i>');
				$("#formAction").fadeIn();
			});
			$("#formTitle").fadeOut(500,function(){
				$("#formTitle").text("马上注册");
				$("#formTitle").fadeIn();
			});
			$("#formCheckBox").fadeOut(500);
			$("#doAction").fadeOut(500,function(){
				$("#doAction").text("注册");
				$("#doAction").css("margin-top","25px");
				$("#doAction").fadeIn();
			});
			$("input[name=action]").val("2");
				//*
		}
	}
}

$(function(){
	//************************tologinXX
	$("#toLogin").click(function(){showFormPanel(1);});
	$("#toLogin1").click(function(){showFormPanel(1);});
	//************************toRegXX
	$("#regRect p").click(function(){showFormPanel(2);});
	$("#toReg").click(function(){showFormPanel(2);});
	//************************formAction
	$("#formAction").click(function(){showFormPanel($("input[name=action]").val()==1?2:1);});
});