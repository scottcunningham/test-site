$(document).ready(function(){
    $("#menu_icon").click(function(){
        $("#nav_menu").toggleClass("show_menu");
        return false;
    });

    $(".features").hide()
    $("#about").show()

    $("#nav_menu > ul > li > p").each(function() {
	$(this).click(function() {
		var section = $(this).attr("section");
		$(".features").hide()
	        $("#" + section).show()
	});
    });
});
