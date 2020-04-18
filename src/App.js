import React, { useState, useEffect } from "react"

import Botao from "./components/Botao"
import MostraTempo from "./components/MostraTempo"
import MostraVoltas from "./components/MostraVoltas"

import "./global.css"

function App() {
  const [numVoltas, setNumVoltas] = useState(0)
  const [rodando, setRodando] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let temporizador = null
    if (rodando) {
      temporizador = setInterval(() => {
        setTempo((anterior) => anterior + 1)
      }, 1000)
    }
    return () => {
      if (temporizador) {
        clearInterval(temporizador)
      }
    }
  }, [rodando])

  const toggleRunning = () => {
    setRodando(!rodando)
  }

  const incrementar = () => {
    setNumVoltas(numVoltas + 1)
  }

  const decrementar = () => {
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1)
    }
  }

  const resetar = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div className="App">
      <MostraVoltas voltas={numVoltas} />
      <Botao texto="+" className="bigger" onClick={incrementar} />
      <Botao texto="-" className="bigger" onClick={decrementar} />
      {numVoltas > 0 && <MostraTempo tempo={Math.round(tempo / numVoltas)} />}
      <Botao texto={rodando ? "Pausar" : "Iniciar"} onClick={toggleRunning} />
      <Botao texto="Reiniciar" onClick={resetar} />
    </div>
  )
}

export default App
