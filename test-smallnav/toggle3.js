$(document).ready(function(){
	show_notif2();
    
});

function show_notif2(){

	$( ".show2" ).toggle(function() {

	    $( this ).addClass( ".showNotif2" );
	  	}, function() {
	    $( this ).removeClass( ".showNotif2" );
  }) 
}