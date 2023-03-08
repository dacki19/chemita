function setValoresPopUp(id, mensaje){
	var ID = id;
    $('#confirmButton').data('id', ID); // set the data attribute on the modal button
    $('#mensajeConfirmacion').text(mensaje);
}

function setValoresPopUpConfirm(id, mensaje, action){
    var ID = id;
    $('#confirmButton').data('id', ID); // set the data attribute on the modal button
    $('#mensajeConfirmacion').text(mensaje);
    $('#confirmButton').data('action',action);
}

// Lanza el formulario "Pop-up" de confirmación de borrados
function confirmarBorrado(id){
	$('#borrarModalId').modal('show');
	$("#idEntidadHidden").val(id);
}

function getAbsolutePath() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}

function limpiaForm(miForm) {
	// recorremos todos los campos que tiene el formulario
	$(':input', miForm).each(function() {
		var type = this.type;
		var tag = this.tagName.toLowerCase();
		//limpiamos los valores de los campos…
		if (type == 'text' || type=='number' || type == 'password'	|| tag == 'textarea' || type == 'email'){
			this.value = "";
		}
		// excepto de los checkboxes y radios, le quitamos el checked
		// pero su valor no debe ser cambiado
		else if (type == 'checkbox' || type == 'radio'){
			this.checked = false;
		}
		// los selects le ponemos el indice a -
		else if (tag == 'select'){
			//this.selectedIndex = -1;
			var id = this.id;
			$("#"+id).val($("#"+id+" option:first").val());
		}
	});
}

function posicion(data, campo) {
	var pos='0000';
	for (var clave in data){
		if (data.hasOwnProperty(clave)) {
			if (data[clave][campo]>pos){
				pos = data[clave][campo];
			}
		}
	}
	pos = parseInt(pos)+1;
	pos = pad (pos, 4, '0');
	return pos;
}

function pad(input, length, padding) { 
	var str = input + "";
	return (length <= str.length) ? str : pad(padding+str, length, padding);
}

function volverConContador(){
	var iRet = -1;
	if ($("#contadorVolver").val()){
		var cont = $("#contadorVolver").val();
		iRet = iRet - cont;
	}
	//alert(iRet);
	window.history.go(iRet);
}

function aMayusculas(e) {
	e.value = e.value.toUpperCase(); 
}


//funcion aSoloNumeros (evt) {
//	// Only ASCII character in that range allowed
//    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
//    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
//        return false;
//    return true;
//	
//}

