﻿
function initNavi(){
	$("li[id^='m']").removeClass("active");
	$("div[id^='p']").hide();
}
$(function(){
	$("#n1").mouseenter(function(e){
		$("#m1").addClass("active");
		$("#p1").show();
	});
	$("#n2").mouseenter(function(e){
		$("#m2").addClass("active");
		$("#p2").show();
	});
	$("#n3").mouseenter(function(e){
		$("#m3").addClass("active");
		$("#p3").show();
	});
	$("#n4").mouseenter(function(e){
		$("#m4").addClass("active");
		$("#p4").show();
	});
	$("#n5").mouseenter(function(e){
		$("#m5").addClass("active");
		$("#p5").show();
	});
	$("#n6").mouseenter(function(e){
		$("#m6").addClass("active");
		$("#p6").show();
	});
	//************************************
	$("#m1").mouseenter(function(e){
		initNavi();
		$("#m1").addClass("active");
		$("#p1").show();
	});
	$("#m2").mouseenter(function(e){
		initNavi();
		$("#m2").addClass("active");
		$("#p2").show();
	});
	$("#m3").mouseenter(function(e){
		initNavi();
		$("#m3").addClass("active");
		$("#p3").show();
	});
	$("#m4").mouseenter(function(e){
		initNavi();
		$("#m4").addClass("active");
		$("#p4").show();
	});
	$("#m5").mouseenter(function(e){
		initNavi();
		$("#m5").addClass("active");
		$("#p5").show();
	});
	$("#m6").mouseenter(function(e){
		initNavi();
		$("#m6").addClass("active");
		$("#p6").show();
	});
	//************************************
	$("#mp").mouseenter(function(e){
		$(".naviMenuIconPanel").show();
		$(".naviMenuContentPanel").show();
	});
	$("#mp").mouseleave(function(e){
		$(".naviMenuIconPanel").hide();
		$(".naviMenuContentPanel").hide();
		initNavi();
	});
	//************************************
	$("#sc1").mouseenter(function(){
		$("#sc1").attr("src","./img/plaza/sc1_active.png");
	});
	$("#sc2").mouseenter(function(){
		$("#sc2").attr("src","./img/plaza/sc2_active.png");
	});
	$("#sc3").mouseenter(function(){
		$("#sc3").attr("src","./img/plaza/sc3_active.png");
	});
	$("#sc1").mouseleave(function(){
		$("#sc1").attr("src","./img/plaza/sc1.png");
	});
	$("#sc2").mouseleave(function(){
		$("#sc2").attr("src","./img/plaza/sc2.png");
	});
	$("#sc3").mouseleave(function(){
		$("#sc3").attr("src","./img/plaza/sc3.png");
	});
});