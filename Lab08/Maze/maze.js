"use strict";
$(document).ready(function (){
	let isStarted = false;
	let isOver = false;
	$("#maze .boundary").mouseover(mOver);
	$("#end").mouseover(mEnd);
	$("#start").click(mReset);
	$("#maze").mouseleave(mLeave);
	
	function mOver(){
		if (isOver === false) {
			$("#maze .boundary").addClass("youlose");
			$("#status").text("You lose!");
			isOver = true;
		}
	}
	
	function mReset(){
		isStarted = true;
		isOver = false;
		$("#maze .boundary").removeClass("youlose");
		$("#status").text("Restarted and Good luck!");
	}
	
	function mEnd(){
		if (isOver === false){
			$("#status").text("You win!");
			isOver = true;
		}
	}
	
	function mLeave(){
		if (isStarted === true && isOver === false){
			$("#maze .boundary").addClass("youlose");
			$("#status").text("You lose!");	
			isStarted = false;
			isOver = true;
		}
	}
	
});