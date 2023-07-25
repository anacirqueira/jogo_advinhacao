const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
let xTentativas = 1

// Função Callback - Será chamada de volta em outra func

function handleTryClick(event) {
  event.preventDefault() // não faça o padrão (não envie o form)

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    screen2.querySelector("h2").innerText = `Você acertou em ${xTentativas} tentativas`
  }

  inputNumber.value = ""
  xTentativas++
}

function handleAgainClick() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")

  xTentativas = 1
  randomNumber = Math.round(Math.random() * 10)
}

function pressEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleAgainClick()
  }
}

// Eventos - Clique

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener('keydown', pressEnter)

