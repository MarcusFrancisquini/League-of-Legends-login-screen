// selecionando os elementos
const inputs = document.querySelectorAll('.login_input');
const button = document.querySelector('.login_button');

//* acionar o input
function adicionarFoco({ target }) {
    const span = target.previousElementSibling;
    span.classList.add('active')
}

//* desativar o input
function removerFoco({ target }) {
    if (target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('active')
    }
}

//* habilitar botão de login
function habilitarBtn() {
    const [username, senha] = inputs;
    if (username.value && senha.value.length >= 8) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

// linkando as funções
inputs.forEach((input) => input.addEventListener('focus', adicionarFoco));
inputs.forEach((input) => input.addEventListener('focusout', removerFoco));
inputs.forEach((input) => input.addEventListener('input', habilitarBtn));