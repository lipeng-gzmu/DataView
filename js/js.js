var hand = $("#hand")

/*$(hand).onload=function(){
	for(var count=0;count<10;count++){
		alert("ha")
		fadeview();
		if(count>7) count = 0;
	}
}*/


$(function(){
	window.setInterval('fadeview()',1500)
})

function fadeview(){
    $(hand).fadeToggle(1500)
	$(hand).fadeToggle(1500)
    
	
}

window.onload = function(){
    window.setInterval('countDown()',1000);
}
var sec = 15;
function countDown(){
	if(sec > 0){
		$(".timetiao span").text(sec--)
	}else{
		location = "catalogue.html"
	}
}
