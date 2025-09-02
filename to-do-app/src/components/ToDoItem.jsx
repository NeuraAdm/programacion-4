function ToDoItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 group">
      {/* Custom Checkbox */}
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="sr-only"
        />
        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
          task.completed 
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500' 
            : 'border-gray-300 hover:border-purple-400'
        }`}>
          {task.completed && (
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </label>

      {/* Task Text */}
      <span className={`flex-1 text-left transition-all duration-200 ${
        task.completed 
          ? 'text-gray-500 line-through' 
          : 'text-gray-800'
      }`}>
        {task.text}
      </span>

      {/* Delete Button */}
      <button 
        onClick={() => deleteTask(task.id)}
        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        title="Eliminar tarea"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}

export default ToDoItem;