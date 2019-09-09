console.log("Fui carregado por arquivo externo.");
alert('Alô Mundo!');
console.log('Oie!');
var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutricionista';
console.log(titulo);
console.log(titulo.textContent);

// recebendo todos os pacientes
var pacientes = document.querySelectorAll('.paciente')

console.log(pacientes);
console.log(pacientes[1]); // é um vetor de pacientes

// calculando imc para todos vetor
for (var index = 0; index < pacientes.length; index++) {
    console.log(pacientes[index]);
    var paciente = pacientes[index];
    
    // cálculo imc de um paciente
    //var paciente = document.querySelector("#primeiro-paciente"); // uso quando sem for
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if(!pesoValido) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdPeso.textContent = 'Peso inválido!';
        paciente.classList.add('paciente-invalido');
        //tdImc
    }    

    if(!alturaValido) {
        console.log("Altura inválida!");
        alturaValido = false;
        tdAltura.textContent = "Altura inválida!";
        paciente.classList.add('paciente-invalido');
        //tdImc
    }
    if(alturaValido && pesoValido) {
        console.log('Altura valido: ' + alturaValido + ' Peso valido: '+pesoValido);
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = 'Altura e/ou peso inválida(os)';
        paciente.classList.add('paciente-invalido');
    }
    console.log(paciente.textContent);    
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

calculaImc();
