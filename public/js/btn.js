const content = document.getElementsByClassName('recipe-description')

for (let i = 0; i < content.length; i++) {
    const btn = content[i].querySelector('.btn')
    const display = content[i].querySelector('.display')
    console.log(display)
    btn.addEventListener('click', function () {
        if (btn.innerHTML == 'Esconder') {
            display.classList.add('hide')
            btn.innerHTML = 'Mostrar'
        } else {
            btn.innerHTML = 'Esconder'
            display.classList.remove('hide')
        }
    })
}
