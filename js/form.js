//#adicionar-paciente
var botaoAdicionar = document.querySelector('#adicionar-paciente');
    botaoAdicionar.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Olha só... posso chamar uma função anônima.");
        var formAdiciona = document.querySelector('#form-adiciona');
        
        var paciente = obtemPacienteDoFormulario(formAdiciona);
        var erros = validaPaciente(paciente);

        if(erros.length >0) {
                exibeMensagemDeErros(erros);
                return;
        }
        
        adicionaPacienteNaTabela(paciente);

        formAdiciona.reset();
        var mensagemDeErro = document.querySelector('#mensagens-erro');
        mensagemDeErro.innerHTML='';
});

function adicionaPacienteNaTabela(paciente) {
        var pacienteTr = montaTr(paciente);
        var tabela = document.querySelector('#tabela-pacientes');
        tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
        var paciente = {
                nome: form.nome.value,
                peso: form.peso.value,
                altura: form.altura.value,
                gordura: form.gordura.value,
                imc: calculaImc(peso, altura)
        }

        return paciente;
}

function montaTr(paciente) {

        var pacienteTr = document.createElement('tr');
        pacienteTr.classList.add('paciente');

        //cuidado com a ordem do form
        pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'));
        pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
        pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
        pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'));
        pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'));

        return pacienteTr;
}

function montaTd(dado, classe) {
        // preenche form
        var td = document.createElement('td');
        td.textContent = dado; 
        td.classList.add(classe);

        return td;
}

function validaPaciente(paciente) {
        var erros = [];
        if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco");
        if(!validaPeso(paciente.peso)) erros.push('Peso é inválido!');
        if(!validaAltura(paciente.altura)) erros.push('Altura é inválida!');
        if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");
        if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");
        if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco");
        return erros;
}

function exibeMensagemDeErros(erros) {
        var ul = document.querySelector('#mensagens-erro');
        ul.innerHTML='';
        erros.forEach(function(erro){
                var li = document.createElement('li');
                li.textContent = erro;
                ul.appendChild(li);                
        });
}