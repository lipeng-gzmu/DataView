
$("#catalogue1").click(function(){
	createMove("0px","150px","left",$("#windows02"))
})
function createMove(marginLeft, marginTop,floatdirec,object){
	var tar={
    left: 0,
    top: 0,
	width: "470px",
	height: "300px",
	lineHeight: "200px",
	boxShadow: "10px 10px 10px rgba(0,0,0,.5)",
	float: "left",
	marginLeft: "700px",
	marginTop: "150px",
	opacity: 1
	}
	
	$(object).css({
	width: "470px",
	height: "300px",
	lineHeight: "200px",
	boxShadow: "10px 10px 10px rgba(0,0,0,.5)",
	position:"absolute",
	float: floatdirec,
	marginLeft: marginLeft,
	marginTop: marginTop,
	opacity: 0.1
	})
	$(object).animate(tar, 1000,"linear")
}
