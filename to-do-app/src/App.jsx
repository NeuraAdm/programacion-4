import { useState } from 'react'
import ToDoList from "./components/ToDoList"
import ToDoForm from "./components/ToDoForm"
import './App.css'

function App() {
  // El estado de nuestra lista de tareas. Es un array de objetos.
  const [tasks, setTasks] = useState([]);

  const addTasks = (newTask) => {
    // Si el texto está vacío, no hacemos nada.
    if (!newTask.trim()){
      return;
    }

    // Creamos un nuevo objeto de tarea con un ID único, el texto y un estado de "completed" en false.
    const task = {
      id: Date.now(), // Usamos la fecha actual como un ID único
      text: newTask.trim(),
      completed: false,
    };

    // Actualizamos el estado de la lista de tareas, agregando la nueva tarea.
    setTasks([...tasks, task]);
  }

  // Función para marcar una tarea como completada o no completada.
  const toggleComplete = (id) => {
    setTasks(
      // Recorremos el array de tareas.
      tasks.map((task) =>
        // Si el ID de la tarea coincide, cambiamos su estado de "completed".
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar una tarea.
  const deleteTask = (id) => {
    // Actualizamos el estado filtrando y devolviendo solo las tareas que no coinciden con el ID.
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
    <div>
      <h1>Lista de Tareas</h1>
      {/* Pasamos la función `addTask` al componente `TodoForm` */}
      <ToDoForm addTask={addTasks} />
      {/* Pasamos la lista de tareas y las funciones a `TodoList` */}
      <ToDoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
    </>
  );
}

export default App;
