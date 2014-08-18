$(function(){
	//左侧操作栏过度
	$(".leftControls a").mouseenter(function(){
		$(this).next().next().transit({
			opacity:1
		},300);
	});
	$(".leftControls a").mouseleave(function(){
		$(this).next().next().transit({
			opacity:0
		},300);
	});
});