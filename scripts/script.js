$(document).ready(function(){
	//alert("probando script");
	show_nav();
	go_top();
});

function show_nav() {
	$(window).scroll(function(){
		// var x = $("#top").offset();
    // console.log("Top: " + x.top + " Left: " + x.left);
		if($('#top').offset().top > 150){
			$('#top').removeClass('menu_show');
			$('#top').addClass('menu_hide');
			$('#menu').removeClass('nav_hide');

			$('#header').removeClass('');
			$('#header').addClass('header_hide');

			$('#menu').show();
		}else{
			$('#top').removeClass('menu_hide');
			$('#top').addClass('menu_show');
			$('#header').removeClass('header_hide');
			$('#header').addClass('header_show');
			$('#menu').addClass('nav_hide');
			$('#navbarSupportedContent').collapse('hide');
		}
	});
}

function go_top() {
	$("#img_top").click(function(){
		var focalizar = $("#top").position().top;
		$('html,body').animate({scrollTop: focalizar}, 1000);
	});
}