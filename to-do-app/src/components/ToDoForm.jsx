import { useState } from 'react';

function TodoForm({ addTask }) {
  // Estado para el valor del input.
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue.
    addTask(inputValue); // Llama a la función del padre para agregar la tarea.
    setInputValue(''); // Limpiamos el input después de agregar.
  };

  const handleInputChange = (e) => {
    // Actualizamos el estado del input con lo que el usuario escribe.
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Agregar nueva tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TodoForm;