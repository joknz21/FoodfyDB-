const Modaloverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card') /* tava .cards */
const modal = document.querySelector('.modal')
const contenthide = document.querySelector('.content_text_hide')

for(let card of cards){
    card.addEventListener("click",function(){
    Modaloverlay.classList.add("active")
    const image = card.getAttribute("image")
    const title = card.querySelector('.card_title').textContent
    const description = card.querySelector('.card_description').textContent
    modal.querySelector('h1').innerHTML = title
    modal.querySelector('p').innerHTML = description
    Modaloverlay.querySelector('img').src = `${image}`
    document.querySelector('.details').addEventListener('click', function(){
        window.location.href = `/Receitas/${id}`
    })
    })
}

document.querySelector('.fechar').addEventListener('click', function(){
    Modaloverlay.classList.remove('active')
})

document.querySelector('.fechar').addEventListener('click', function(){
    Modaloverlay.classList.remove('active')
})

