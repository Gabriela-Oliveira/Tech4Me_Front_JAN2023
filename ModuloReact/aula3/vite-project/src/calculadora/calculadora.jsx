import './calculadora.css'

function Calculadora() {
    let soma = 20 + 40
    
    return (
      <div className="calculadora">
        <div className="display" id="display">{soma}</div>
        <div className="calculadora-botons">
            <button id="limparDisplay">CE</button>
            <button id="limparCalculo">C</button>
            <button id="backspace">del</button>
            <button id="operadorDividir">/</button>
            <button id="tecla7">7</button>
            <button id="tecla8">8</button>
            <button id="tecla9">9</button>
            <button id="operadorMultiplicar">*</button>
            <button id="tecla4">4</button>
            <button id="tecla5">5</button>
            <button id="tecla6">6</button>
            <button id="operadorSubtrair">-</button>
            <button id="tecla1">1</button>
            <button id="tecla2">2</button>
            <button id="tecla3">3</button>
            <button id="operadorAdicionar">+</button>
            <button id="inverter">+-</button>
            <button id="tecla0">0</button>
            <button id="decimal">,</button>
            <button id="igual">=</button>
        </div>
      </div>
    )
  }
  
  export default Calculadora