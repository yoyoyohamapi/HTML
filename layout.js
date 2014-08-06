$(function(){
	// 头像拉出菜单
	$('.headPic').click(function(){
		if($('#search_content').width()!=0)
			$("#search_content").animate({
				width:0,
				opacity:0
			},'slow',function(){
				$("#search_content").hide();
			});
		if($('#settingsMenu').width()==0){
			$('.search').fadeOut();
			$('#settingsMenu').fadeTo('fast',0,function(){
				$('#settingsMenu').animate({
					width:250,
					opacity:1
				},'slow');
			});
		}
		else{
			$('#settingsMenu').animate({
				width:0,
				opacity:0
			},'slow',function(){
				$('.search').fadeIn();
			});
		}	
	});

	//拉出搜索框
	$('.search').click(function(){
		if($("#search_content").width()==0){
			$("#search_content").fadeTo('fast',0,function(){
				$("#search_content").animate({
					width:200,
					opacity:1
				},'slow');
			});
			
		}
		else{
			$("#search_content").animate({
				width:0,
				opacity:0
			},'slow',function(){
				$("#search_content").hide();
			});
		}
	});

	//右侧面板导航元素宽度自适应
	if($(".conPanelNav").length>0){
		var ratio = 1 / $(".conPanelNav li").length;
		var ratioStr = ratio*100+"%";
		$(".conPanelNav li").css("width",ratioStr);
	}
});