$(function(){
	// 头像拉出菜单
	$('.headPic').click(function(){
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
		// if($('.headPic').is(':visible')==true){
		// 	$('.search').fadeToggle('fast',function(){
		// 		$('.headPic').fadeOut('fast',function(){
		// 			$('.search').fadeToggle('fast',function(){
		// 				$('#search_content').fadeToggle();
		// 			});
		// 		});
		// 	});
		// }else{
		// 	$('#search_content').fadeToggle('fast',function(){
		// 		$('.search').fadeToggle('fast',function(){
		// 			$('.headPic').fadeIn('fast',function(){
		// 				$('.search').fadeToggle();
		// 			});
		// 		});
		// 	});
		// }
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
});