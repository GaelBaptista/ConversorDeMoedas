function Converter() {
    var valorElemento = document.getElementById("valor").value;
   
    

    var valorEmDolarNumerico =  parseFloat(valorElemento  );
    var valorEmEuroNumerico = parseFloat(valorElemento );
    if (valorElemento) {
        ConvertidoEmDolar(valorEmDolarNumerico)
    } if (valorElemento ) {
        ConvertidoEmEuro(valorEmEuroNumerico)
    }

}



function ConvertidoEmDolar(valorEmDolar) {
    var type = document.getElementsByName("moeda")
    if (type[0].checked){
        var valorEmReal = valorEmDolar * 5;
        var elementoValorconvertido = document.getElementById("valorConvertido");
        var valorConvertido = "Valor em R$ é " + valorEmReal;
    
        elementoValorconvertido.innerHTML = valorConvertido
    }
    
}


function ConvertidoEmEuro(valorEmEuro){
    var type = document.getElementsByName("moeda")
    if (type[1].checked){
        var valorEmReal = valorEmEuro * 6;
        var elementoValorconvertido = document.getElementById("valorConvertido");
        var valorConvertido = "Valor em R$ é " + valorEmReal;
    
        elementoValorconvertido.innerHTML = valorConvertido
    }
   
}



