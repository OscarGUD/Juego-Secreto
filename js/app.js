let numeroSecreto
let intentos
let numeroSorteados = []
let numeroMaximo = 10

const generarNumeroSecreto = () => {
  const numero = parseInt(Math.random() * numeroMaximo) + 1
  const existNumber = numeroSorteados.includes(numero)
  console.log(numero)
  console.log(numeroSorteados)
  if (existNumber) {
    if (numeroSorteados.length === numeroMaximo) {
      asignarTextoELemento('p', 'Ya se sortearon todos los números')
      numeroSorteados = []
    }
    return generarNumeroSecreto()
  } else {
    numeroSorteados = [...numeroSorteados, numero]
    return numero
  }
}

const asignarTextoELemento = (query, texto) => {
  let element = document.querySelector(query)
  element.innerHTML = texto
}
const verificarIntento = () => {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)


  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoELemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`)
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoELemento('p', 'El número secreto es menor')
    } else {
      asignarTextoELemento('p', 'El número secreto es mayor')
    }
    limpiarInput()
    intentos++
  }
}

const condicionesInciales = () => {
  asignarTextoELemento('h1', 'Juego del número secreto')
  asignarTextoELemento('p', `Indica un número del 1 al ${numeroMaximo}`)
  numeroSecreto = generarNumeroSecreto()
  intentos = 1
}

const limpiarInput = () => {
  document.querySelector('#valorUsuario').value = ''
}

const reiniciarJuego = () => {
  limpiarInput()

  condicionesInciales()

  document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesInciales()