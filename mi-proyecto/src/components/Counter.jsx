import { useState } from 'react';

function Counter() {
  const [counter, setcounter] = useState(0);
  const [message, setmessage] = useState('');

  const incrementar = () => {
    setcounter(prev => prev + 1);
    setmessage(`Has clickeado ${counter + 1} veces`);
  };

  return (
    <div className="counter-app">
      <h2>counter Interactivo</h2>
      <p className="numero">{counter}</p>
      <button 
        onClick={incrementar}
        className="btn-primary"
      >
        Incrementar
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Counter