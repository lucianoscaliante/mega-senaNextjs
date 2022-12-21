import { useState } from 'react'
import { mega } from '../functions/mega'
import NumeroMega from '../components/NumeroMega'

export default function megasena() {
  const [quant, setQuant] = useState(6)
    const [numeros, setNumeros] = useState(mega(quant))
    

    function renderNum (){
        return numeros.map(
            numero => <NumeroMega key={numero} numero={numero} />
        )
    }

    return (
        <div style={{
            display: "flex", 
            flexDirection: "column",
            alignItems: "center",
          }}>
              <h1>Mega Sena</h1>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                  {renderNum()}
              </div>
              <div>
                <input type="number" min={6} max={20} value={quant}
                  onChange={ev => setQuant(ev.target.value)} />
                <button onClick={() => setNumeros(mega(quant))}>
                    Gerar Aposta
                </button>
              </div>
        </div>
    )
}