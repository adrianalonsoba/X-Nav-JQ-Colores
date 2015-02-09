

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

$(document).ready(function() {
	$("a").click(function( event ) {
		alert( "Hola" );
	});
});