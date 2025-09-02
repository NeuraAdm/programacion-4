import ToDoItem from './ToDoItem'

function ToDoList({ tasks, toggleComplete, deleteTask }) {
  // Si no hay tareas, muestra un mensaje.
  if (tasks.length === 0) {
    return <p>No hay tareas pendientes.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        // Por cada tarea, renderizamos un componente `ToDoItem`.
        <ToDoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;