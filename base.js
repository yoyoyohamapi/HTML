$(function(){
//浏览器内核判断
	var userAgent = navigator.userAgent.toLowerCase(); 

	// Figure out what browser is being used 

	jQuery.browser = { 

	version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1], 

	safari: /webkit/.test( userAgent ), 

	opera: /opera/.test( userAgent ), 

	msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ), 

	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ) 

	}; 

	//导航贴边自适应
	if($('.imgWrap').length>0)
		warpLoc();
		
	$(window).resize(function(){
		if($('.imgWrap').length>0)
			warpLoc();
	});

	// 头像拉出菜单
	$('.headPic').click(function(){
		if($('#settingsMenu').css('opacity')==0){
			$('#settingsMenu').show();
			$('.searchLi').fadeOut('normal',function(){
				$('.headPicLi').transit({
					x:-230
				},function(){
					$('#settingsMenu').transit({
						opacity:1
					});
				});
			});
		}
		else{
			$('#settingsMenu').transit({
				opacity:0
			},function(){
				$('#settingsMenu').hide();
				$('.headPicLi').transit({
					x:0
				},function(){
					$('.searchLi').fadeIn();
				});
			});	
		}
	});

	//拉出搜索框
	$('.search').click(function(){
		if($("#searchCon").css('opacity')==0){
			$('.search i').transit({
				y:-8,
				x:-5
			});
			$("#searchCon").show();
			$('.headPicLi').fadeOut(function(){
				$(".searchLi").transit({
					x:70
				},function(){
					$("#searchCon").transit({
						opacity:1
					});
				});
			});
		}
		else{
			$('.search i').transit({
				y:0,
				x:0
			});
			$('#searchCon').transit({
				opacity:0
			},function(){
				$('#searchCon').hide();
				$('.searchLi').transit({
					x:0
				},function(){
					$('.headPicLi').fadeIn();
				});
			});
		}
		
	});	
});

function warpLoc(){
	$(".imgWrap").each(function(){
		if($(".leftBar").length>0)
			top_css = parseInt($(".barItem.active").offset().top) - parseInt($(".leftBar ul").offset().top)+parseInt($(".leftBar .barItem").css("margin-top").replace('px',''))-10
		else
			top_css = parseInt($(".barItem.active").offset().top) - parseInt($(".navbar").css('height'));
		$(this).css("top",top_css);
	});
	
}