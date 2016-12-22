$(document).ready(function(){
	show_notif2();
    
});

function show_notif2(){
	var opened = false; // on va préparer un booleen pour savoir si le menu est ouvert par default il ne l'est pas

	var $click = $('.show2');

	var $notif = $('.notif2');  // on stock le burger dans une variable

	$click.on('mousedown', function(evt){ // au click sur le burger ...

		if(opened === false){// si le menu est fermer

			$notif.addClass('showNotif2');// alors on ajoute la classe que j'ai crée dans le css 'showMenu'

			opened = true; // et on previent que le menu est ouvert
		}
		else{//si le menu est ouvert

			$notif.removeClass('showNotif2');//alors lorsque lon va reclicker on retire la class show menu
			
			opened = false; // et on previent que le menu est de nouveau fermer
		}		
	}) 
}