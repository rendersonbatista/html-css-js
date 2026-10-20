//Formulário de cor (color)
const ipColor = document.getElementById("ipColor")

ipColor.addEventListener("input", (event)=> {
    const corSelect = event.target.value
    
    document.body.style.backgroundColor = corSelect
})

//Fomulário de senha com checkbox
const ipSenha = document.getElementById("ipSenha")
const checkbox = document.getElementById("mostrarSenha")

checkbox.addEventListener("change", ()=> {

    if (checkbox.checked) {
        ipSenha.type = "text"
    } else {
        ipSenha.type = "password"
    }
})

//formulário Email
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', () => {
  
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Ops! Esse formato de e-mail não parece correto.");

  } else if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity("Por favor, preencha este campo.");

  } else {
    // IMPORTANTE: Limpar o erro para permitir o envio do formulário
    emailInput.setCustomValidity(""); 
  }
});

//Formulário URL
const url = document.getElementById("url")
const link = document.getElementById("linkUrl")
const textLink = document.getElementById("textLink")

url.addEventListener("input", ()=> {
    const dominio = url.value

    link.href = dominio
    textLink.textContent = dominio
})