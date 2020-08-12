console.log('The house always wins')

const setId = document.getElementById('idInput')

const setColor = document.getElementById('colorInput')

function setCard() {
    const card = document.getElementById(setId.value)
    card.style.color = setColor.value
}