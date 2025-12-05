// Variável para controlar o modo (login ou cadastro)
let isLoginMode = true;

// Elementos do DOM
const form = document.getElementById('auth-form');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const toggleLink = document.getElementById('toggle-link');
const toggleText = document.getElementById('toggle-text');
const nameGroup = document.getElementById('name-group');
const confirmPasswordGroup = document.getElementById('confirm-password-group');

// Event Listener para alternar entre Login e Cadastro
if (toggleLink) {
    toggleLink.addEventListener('click', function(e) {
        e.preventDefault();
        isLoginMode = !isLoginMode;
        
        if (isLoginMode) {
            // Modo Login
            formTitle.textContent = 'Entrar';
            submitBtn.textContent = 'Entrar';
            toggleText.innerHTML = 'Não tem uma conta? <a href="#" id="toggle-link">Cadastre-se</a>';
            nameGroup.style.display = 'none';
            confirmPasswordGroup.style.display = 'none';
        } else {
            // Modo Cadastro
            formTitle.textContent = 'Criar Conta';
            submitBtn.textContent = 'Cadastrar';
            toggleText.innerHTML = 'Já tem uma conta? <a href="#" id="toggle-link">Entrar</a>';
            nameGroup.style.display = 'block';
            confirmPasswordGroup.style.display = 'block';
        }
        
        // Reaplica o event listener no novo link
        document.getElementById('toggle-link').addEventListener('click', arguments.callee);
    });
}

// Event Listener para o formulário
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (isLoginMode) {
            // Validação básica de login
            if (email && password) {
                console.log('Login realizado:', email);
                // Redireciona para a página home
                window.location.href = 'home.html';
            } else {
                alert('Por favor, preencha todos os campos!');
            }
        } else {
            // Validação de cadastro
            const name = document.getElementById('name').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (!name || !email || !password || !confirmPassword) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }
            
            if (password.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres!');
                return;
            }
            
            console.log('Cadastro realizado:', { name, email });
            // Redireciona para a página home
            window.location.href = 'home.html';
        }
    });
}

// Função de logout
function logout() {
    if (confirm('Deseja realmente sair?')) {
        window.location.href = 'index.html';
    }
}

// Animação suave ao carregar a página
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});