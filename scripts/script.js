$(document).ready(function(){
	//alert("probando script");
	show_nav();
	go_top();
	see_more();
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

function see_more(){
	$('.socio-text-description-div').css({"height": 150, "overflow": "hidden"})
	$('.see-more').click(function(){
		var val = $(this).text()
		if(  val == 'Ver mas'){
			$('.socio-text-description-div').css({"height": "auto", "overflow": "hidden"})
			$('.see-more').text('Ver menos')
		}
		else{
			var focalizar = $(".title-component").position().top;
			$('html,body').animate({scrollTop: focalizar}, 1000);
			$('.socio-text-description-div').css({"height": 150})
			$('.see-more').text('Ver mas')
		}
	});
}
