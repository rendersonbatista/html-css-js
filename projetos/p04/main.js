//mostrar usuários
const ipNewUser = document.getElementById("ipname")
const btNewUser = document.getElementById("btNewUser")

btNewUser.addEventListener("click", ()=> {
    const dados = ipNewUser.value
    console.log(dados)

    const respose = fetch("http://localhost:9090/user", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(dados)
    })

    const result = respose.json()
    console.log(result)

    const newCard = document.createElement("div")
    newCard.classList.add("newCard")

    document.body.appendChild(newCard)
    newCard.textContent = dados
})