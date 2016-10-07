
var color_in =$(".color");

var len = color_in.length ;

for (var i=0; i < len; i++) {

	var font= $(color_in[i]).data("color");

	$(color_in[i]).css("backgroundColor",font);

}

$(".color").click(function(){

	if (checked()){

		$(".main").css("color",$(this).data("color"));
	

	} else {

		$("body").css("backgroundColor",$(this).data("color"));
		
	}
});

function checked() {

	return $("#modify-texte").is(":checked");
}

















































// $(".color").click(function(){
// 	console.log(checked())
// 	if (checked() === true){
// 		$(".main").css("color",$(this).data("color"));
// 	} else {
// 		$("body").css("backgroundColor",$(this).data("color"));
// 	}

// });
