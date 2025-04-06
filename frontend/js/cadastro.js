document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await registerUser(name, email, password);
        alert('Cadastro realizado com sucesso!');
    } catch (error) {
        console.error(error);
        alert('Erro ao cadastrar usuário: ' + error.message);
    }
});

async function registerUser(name, email, password) {
    const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário: ' + response.statusText);
    }

    const data = await response.text();
    return data;
}