
$(".menu-icon").click(function(){
	$(this).toggleClass("open");
	$(".nav").toggleClass("abre");
})


$(".square").click(function(){
	$(this).closest(".fold2").toggleClass("open");});

$(".button-container").click(function(){
	$(this).closest(".fold2").toggleClass("open");
	});
$(".close-icon").click(function(){
	$(this).closest(".fold2").toggleClass("open");
})


var wscroll = 0;
var fold = $(".fold").first().height();

window.onscroll = function myFunction() {
	if ( window.scrollY < wscroll) {
			$("#arrowtop").removeClass("scroll");
	}
	else if (window.scrollY > fold+200) {
			$("#arrowtop").addClass("scroll");
	}
	wscroll = window.scrollY;
};

$("#arrowtop").click(function(){
	 $("html, body").animate({scrollTop: 0}, 1000);
})


