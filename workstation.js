$(function(){
	//左侧操作栏过度
	$(".leftControls a").mouseenter(function(){
		$(this).next().transit({
			opacity:1
		},500);
	});
	$(".leftControls a").mouseleave(function(){
		$(this).next().transit({
			opacity:0
		},500);
	});
});