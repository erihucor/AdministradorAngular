$(document).ready(function() {
    $.ajax({
        url: 'datos/provincias.xml',
        success: function(respuesta) {

            $(respuesta).find('provincias').each(function() {
            	$(this).find('provincia').each(function(){
           
            	let nombre_provincia = $(this).find('nombre').text();

            	let elemento = $('<li>' + nombre_provincia +'</li>')

            	$('.combo_provincias').append(elemento);
				
				console.log(elemento);

            	 	})
					

            })
			
			///////////////// Logica de funcion clic
			$(".combo_provincias li").click(function(){
					var nombre = $(this).text();
					let nombreDiv = $('<input type="text" id="provincia_seleccionada" class="form-control" value= "' + nombre + '">');
					$('#provincia_seleccionada').replaceWith($(nombreDiv));
			});
        }		
		
    })
})