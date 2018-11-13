// Check of Specific todos by clicking 

var sound = new Howl({
  			src: ['assets/sounds/zig-zag.mp3']
			});

var sound2 = new Howl({
  			src: ['assets/sounds/confetti.mp3']
			});

var sound3 = new Howl({
  			src: ['assets/sounds/glimmer.mp3']
  			});
			

var sound4 = new Howl({
  			src: ['assets/sounds/piston-2.mp3']
			});



$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	sound3.play();
});

$("ul").on("click", "span", function(e){
	e.stopPropagation(); 
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
		sound.play();
		});   
});

$("input[type=text]").keypress(function(e){
	if(e.which==13){
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i>  </span>" +todoText + "</li>");
		$(this).val("");
		sound2.play();
	}
	
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
	sound4.play();

});

