var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('table');
tabela.addEventListener('dblclick', function(event) {
    var alvo = event.target;
    var paiDoAlvo = alvo.parentNode;
    if (alvo.tagName == 'TD') {
        paiDoAlvo.classList.add('fadeOut');
        setTimeout(function() {
            paiDoAlvo.remove();
        }, 500)
    }
});
