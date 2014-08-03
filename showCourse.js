$(function(){
	//判断是否是移动设备 
	var isMobile = {
    	Android: function() {
        	return navigator.userAgent.match(/Android/i) ? true : false;
    	},
    	BlackBerry: function() {
        	return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    	},
    	iOS: function() {
        	return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    	},
    	Windows: function() {
        	return navigator.userAgent.match(/IEMobile/i) ? true : false;
    	},
    	any: function() {
        	return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    	}
    };
	iden=isMobile; //lcx-debug
	/*
    if( isMobile.any() ){
    	alert("移动设备");
    }else{
    	alert("pc");
    	showSexangleCourse(); 
    }
	*/
});

//六边形课程显示
function showSexangleCourse(){
	$("#imgOne").animate({
		opacity:1
	},"slow",function(){
		$("#imgTwo").animate({
			opacity:1
		},"slow",function(){
			$("#imgThree").animate({
				opacity:1
			},"slow",function(){
				$("#imgFour").animate({
					opacity:1
				},"slow",function(){
					$("#imgFive").animate({
						opacity:1
					},"slow",function(){
						$("#imgSix").animate({
							opacity:1
						},"slow",function(){
							$("#imgSeven").animate({
								opacity:1
							},"slow");
						})
					})
				})
			})
		})
	});
}

