var hand = $("#hand")
$(hand).onload(fadeview())

function fadeview(){
//	$("#hand").fadeOut(1000);
   
      $(hand).fadeToggle(1500)
	  $(hand).fadeToggle(1500)
    fadeview()
	
}
	
$(".catalogue1").click(funtion(){
	alert("第一封信")
})
