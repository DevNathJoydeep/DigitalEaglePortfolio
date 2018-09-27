$(document).ready(function(){

	$('#nav').click(function(){
        $(this).toggleClass('open');
        $('.navOverlay').fadeToggle( 400, "swing" );
    });

});