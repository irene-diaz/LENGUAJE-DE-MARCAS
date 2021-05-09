/*HOJA DE JAVA SCIPT DE LA PAGIAN DE UBICACION-CONTACTO, EN CONCRETO DE LA VENTANA EMERGENTE*/
/*CREACION DE VARIABLES*/
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

/*al presionar el boton de abrir se nos abre la ventana emergente*/
btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

/*al presionar ek boton de cerrar, se cierra la ventana emergente */
btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});
