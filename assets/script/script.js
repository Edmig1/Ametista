let forme = document.getElementById("form")
forme.addEventListener("submit",dados)
function dados(event){
    event.preventDefault()
    let data = new FormData(this)
    let nome = data.get("name")

    let popup = document.getElementById("popup")
    let popNome = document.getElementById("popnome")
    popNome.innerHTML = "Nome: "+nome
    popup.style.display = "block"
    setTimeout(() => popup.style.top = '0', 1)
    
    escuro = document.getElementById("escuro").style.display = "block"
}

function fechar(btn){
    pai = btn.parentElement
    popup.style.top = '-20%'
    setTimeout(() => pai.style.display = "none", 10000)
    escuro = document.getElementById("escuro").style.display = "none"
}