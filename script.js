const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
let users = {};

// Evento de Cadastro
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();

    // Verifica se o nome de usuário já existe
    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (users[username]) {
        alert('Usuário já cadastrado!');
    } else {
        users[username] = password;
        alert('Cadastro realizado com sucesso!');
        registerForm.reset();
    }
});

// Evento de Login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // Verifica se o nome de usuário e a senha estão corretos
    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (users[username] && users[username] === password) {
        alert('Login bem-sucedido! Bem-vindo(a), ' + username + '!');
        loginForm.reset();
    } else {
        alert('Nome de usuário ou senha inválidos!');
    }
});