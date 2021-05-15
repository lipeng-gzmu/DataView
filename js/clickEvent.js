$("#catalogue1").click(function(){
	$(".firstLetter").css("display","block")
})

$(".closeFirstLetter").click(function(){
	$(".firstLetter").css("display","none")
})

window.onload=function(){
	var body = $("#body")
	$(body).fadeToggle(0)
	$(body).fadeToggle(1500)
	
}

$(".catalogueBigBox a").mouseenter(function(){
	var font = $(this).css("font-size")
	font = parseInt(font)+3;
	$(this).css("font-size",font+"px")
})
$(".catalogueBigBox a").mouseleave(function(){
	var font = $(this).css("font-size")
	font = parseInt(font)-3;
	$(this).css("font-size",font+"px")
})
