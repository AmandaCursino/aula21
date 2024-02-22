import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import './Calculator.css';



function Calculator() {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(input + e.target.name);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  const clear = () => {
    setInput('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <form>
        <input type="text" value={input} readOnly />
      </form>
      <div className="keypad">
        {/* Números de 1 a 9 */}
        <div className="numbers">
          <button name="7" onClick={handleInput}>7</button>
          <button name="8" onClick={handleInput}>8</button>
          <button name="9" onClick={handleInput}>9</button>
          <button name="4" onClick={handleInput}>4</button>
          <button name="5" onClick={handleInput}>5</button>
          <button name="6" onClick={handleInput}>6</button>
          <button name="1" onClick={handleInput}>1</button>
          <button name="2" onClick={handleInput}>2</button>
          <button name="3" onClick={handleInput}>3</button>
        </div>

        {/* Zero e ponto decimal */}
        <div className="bottom-row">
        </div>

        {/* Operações */}
        <div className="operations">
         
          
        </div>

        {/* Controles */}
        <div className="controls">
          <button name="0" onClick={handleInput}>0</button>
          <button name="." onClick={handleInput}>.</button>
          <button name="+" onClick={handleInput}>+</button>
          <button name="-" onClick={handleInput}>-</button>
          <button name="*" onClick={handleInput}>&times;</button>
          <button name="/" onClick={handleInput}>&divide;</button>
          <button onClick={clear} id="clear">Limpar</button>
          <button onClick={backspace} id="backspace">C</button>
          <button onClick={calculate} id="result">=</button>
          
        </div>
      </div>
    </div>
  );
}


export default Calculator;