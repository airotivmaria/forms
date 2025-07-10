document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formId').addEventListener('submit', registerUser);
});

async function registerUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    });

    if (response.ok) {
        const data = await response.json();
        alert('Usuário cadastrado com sucesso!');
    } else {
        const errorData = await response.json();
        alert('Erro ao cadastrar: ' + errorData.error);
    }
}