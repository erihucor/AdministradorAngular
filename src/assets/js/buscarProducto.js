$(document).ready(function() {
            ///////////////// Logica de funcion clic
            $(".boton-buscador").click(function(){
                    var nombre = $('.buscador-input').val();
					$('.combo_productos').empty();
					
					if(nombre.toLowerCase() == 'agua'){
                        let elemento = $('<li class = "text-center"> <a href="agua.html" >agua</a> </li>')
                        $(".combo_productos").append(elemento);
                    }
                    if ((nombre.toLowerCase() == 'bebida') || (nombre.toLowerCase() == 'bebidas') ){
                        let elementoB = $('<li class = "text-center"> <a href="energizantes.html" >bebida energetica </a> </li>')
                        $(".combo_productos").append(elementoB);
                        let elementoB2 = $('<li class = "text-center"> <a href="bsaborizadas.html" > bebida saborizada </li>')
                        $(".combo_productos").append(elementoB2);

                    }
            })
})