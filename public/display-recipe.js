const cards = document.querySelectorAll('.card')

for (const card of cards) {
    card.addEventListener('click', () => {
        const recipeId = card.getAttribute('id')
        window.location.href = `/recipe-details?id=${recipeId}`
    })
}
