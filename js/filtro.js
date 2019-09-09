var campoFiltro = document.querySelector('#filtrar-tabela');
var pacientes = document.querySelectorAll('.paciente');



campoFiltro.addEventListener('input', function(event) {
    for (let index = 0; index < pacientes.length; index++) {
        var paciente = pacientes[index];
        var tdNome = paciente.querySelector('.info-nome');
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value, 'i');
        

        //var comparavel = nome.substr(0, this.value.length);
        //if (!(this.value == comparavel))
        if(!expressao.test(nome) && this.value.length > 0) {
            paciente.classList.add('invisivel');
        } else {
            paciente.classList.remove('invisivel');
        }
    }
})