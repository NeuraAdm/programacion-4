import { useState } from 'react';

function ToDoForm({ addTask }) {
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
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Agregar nueva tarea..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder-gray-500 transition-all duration-200"
        />
        <button 
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default ToDoForm;