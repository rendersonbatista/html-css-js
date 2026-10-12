let input = document.querySelector("#ipTarefa")
let button = document.querySelector("#btConfirmar")
let areaResult = document.querySelector("#areaResult")

let newCard = document.createElement("div")
let deleteBt = document.createElement("button")

button.addEventListener("click", ()=> {

    if (input.value.trim() === "") {
        alert("Digite alguma tarefa")
    } else {
        const cardResultado = input.value

        areaResult.appendChild(newCard)
    
        newCard.classList.add("newCard")
        newCard.textContent = cardResultado

        newCard.appendChild(deleteBt)

        deleteBt.classList.add("deleteBt")
        deleteBt.textContent = "Apagar tarefa"

        deleteBt.addEventListener("click", () => {
            newCard.remove()
        })
    } 
    
})