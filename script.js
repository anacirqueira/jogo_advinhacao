// Função que captura o número digitado e o guarda

function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  console.log(inputNumber.value)
}