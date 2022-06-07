const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')
const close = document.querySelector('.close-modal')

for (let card of cards) {
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active')
        // //Exibi a tag <img> dentro do modal
        const cardImg = card.children[0].getAttribute('src')
        modal.querySelector('img').src = `${cardImg}`

        //Exibi a tag <H3> dentro do modal
        const cardTitle = card.children[1].textContent
        modal.querySelector('h3').innerHTML = cardTitle

        //Exibi a tag <p> dentro do modal
        const cardSubTitle = card.children[2].textContent
        modal.querySelector('p').innerHTML = cardSubTitle

        console.log(modalOverlay)
    })
}

close.addEventListener('click', () => {
    modalOverlay.classList.remove('active')
})
