let body = document.querySelector('body');

function changeTextColor() {
    body.style.color = 'red';
}

body.addEventListener('click', changeTextColor)