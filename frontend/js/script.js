document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.search-input');
    const inputContainer = document.querySelector('.input');

    searchInput.addEventListener('focus', function () {
        inputContainer.classList.add('focused');
    });

    searchInput.addEventListener('blur', function () {
        inputContainer.classList.remove('focused'); 
    });
}); 
//efeito de foco no input

document.addEventListener('DOMContentLoaded', function() {
const dropdownButton = document.getElementById('dropdown-button');
const dropdownContent = document.getElementById('dropdown-content');
const options = dropdownContent.querySelectorAll('a');

dropdownButton.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
});

options.forEach(option => {
    option.addEventListener('click', function(e) {
        e.preventDefault(); 
        dropdownButton.textContent = option.textContent;
        options.forEach(opt => opt.classList.remove('selected')); 
        option.classList.add('selected');
        updateDropdown();
    });
});

function updateDropdown() {
    options.forEach(opt => {
        opt.innerHTML = opt.textContent;
    });

    const selectedOption = dropdownContent.querySelector('.selected');
    if (selectedOption) {
        selectedOption.innerHTML = '✔ ' + selectedOption.textContent;
    }
};

window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-button')) {
        dropdownContent.classList.remove('show');
    }
});
});
// alterações no dropdown, exibição de opções e adição do check

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, 100);
    });
});
// efeito ao recarregar página
