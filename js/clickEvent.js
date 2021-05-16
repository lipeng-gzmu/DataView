//点击打开/关闭信封
//1
$("#catalogue1").click(function(){
	$(".firstLetter").css("display","block")
})

$(".firstLetter .closeFirstLetter").click(function(){
	$(".firstLetter").css("display","none")
})
//2
$(".catalogue2 a").click(function(){
	$(".secondLetter").css("display","block")
})
$(".secondLetter .closeFirstLetter").click(function(){
	$(".secondLetter").css("display","none")
})
//3
$(".catalogue3 a").click(function(){
	$(".thirdLetter").css("display","block")
})
$(".thirdLetter .closeFirstLetter").click(function(){
	$(".thirdLetter").css("display","none")
})
//4
$(".catalogue4 a").click(function(){
	$(".fourthLetter").css("display","block")
})
$(".fourthLetter .closeFirstLetter").click(function(){
	$(".fourthLetter").css("display","none")
})
//5
$(".catalogue5 a").click(function(){
	$(".fifthLetter").css("display","block")
})
$(".fifthLetter .closeFirstLetter").click(function(){
	$(".fifthLetter").css("display","none")
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
