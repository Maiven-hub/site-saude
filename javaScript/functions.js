function imc(){
    var altura = document.getElementById('altura').value;
    var idade = document.getElementById('peso').value;
    var imc;
    var a;
    altura = altura*altura;
    imc = idade/altura; 
    a = imc.toFixed(2);    
    document.getElementById('res').innerHTML="Seu IMC é: "+a;
    
    if(a<18.5){
        document.getElementById('magreza').innerHTML="Magreza - Grau de obesidade 0";
        
        }
            if (a>18.6 && a<24.9){
                document.getElementById('magreza').innerHTML="Normal - Grau de obesidade 0";
                
            }
                if (a>25.0 && a<29.9){
                    document.getElementById('magreza').innerHTML="Sobrepeso";
                
                }
                    if (a>30.0 && a<39.9){
                        document.getElementById('magreza').innerHTML="Obesidade - Grau de obesidade 2";
                        
                    }
                        if (a>40.0){
                            document.getElementById('magreza').innerHTML="Obesidade - Grave grau de obesidade 3";
                            
                        }

                    }

function danone() {
    const copia = document.getElementById('cpf');
                            
        if(copia.value.length == 3 ) {
             document.getElementById('cpf').type="text";
                copia.value += ".";
} 
            else if(copia.value.length == 7){
                document.getElementById('cpf').type="text";
                    copia.value += ".";
}
                        else if(copia.value.length == 11){
                            document.getElementById('cpf').type="text";
                              copia.value += "-";
    }
}

function CEP() {
    const cep = document.getElementById('cep');
        if(cep.value.length == 5) {
            cep.value += "-";
    }
    
} 