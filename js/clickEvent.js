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
