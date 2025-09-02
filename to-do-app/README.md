# ✅ Aplicación de Lista de Tareas

Una aplicación moderna e interactiva de lista de tareas construida con React y TailwindCSS. Este proyecto implementa funcionalidades CRUD básicas (Crear, Leer, Actualizar, Eliminar) y demuestra principios fundamentales de React.

## 📝 Descripción

Esta aplicación permite a los usuarios gestionar sus tareas diarias a través de una interfaz intuitiva y visualmente atractiva. Los usuarios pueden añadir nuevas tareas, marcarlas como completadas y eliminarlas. La aplicación muestra el estado visual de cada tarea, permitiendo distinguir fácilmente entre tareas completadas y pendientes.

## ✨ Características Principales

- ✨ **Añadir tareas**: Formulario simple y elegante para crear nuevas tareas
- ✅ **Marcar como completadas**: Sistema de checkbox personalizado con animaciones
- 🗑️ **Eliminar tareas**: Botón de eliminación que aparece al hacer hover
- 📊 **Estadísticas en tiempo real**: Contador de tareas totales y completadas
- 🎨 **Diseño moderno**: Interfaz glassmorphism con gradientes y efectos visuales
- 📱 **Responsive**: Diseño que se adapta perfectamente a cualquier dispositivo
- ⚡ **Animaciones suaves**: Transiciones y efectos que mejoran la experiencia
- 🎯 **Estado visual claro**: Tareas tachadas y con cambio de color al completarse

## 🛠️ Tecnologías Utilizadas

- [React](https://react.dev/) - Biblioteca para construir interfaces de usuario
- [Vite](https://vitejs.dev/) - Herramienta de desarrollo frontend de nueva generación
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utilitario para estilos modernos
- [ESLint](https://eslint.org/) - Herramienta para calidad y consistencia del código

## 🚀 Instalación y Configuración

Sigue estos pasos para configurar el proyecto en tu máquina local:

```bash
# Clonar el repositorio
git clone [repository-url]

# Navegar al directorio del proyecto
cd programacion-4/to-do-app

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## 💻 Uso

La aplicación es muy intuitiva de usar:

1. **Agregar una tarea**: Escribe en el campo de texto y presiona el botón "+" o Enter
2. **Marcar como completada**: Haz clic en el checkbox al lado de la tarea
3. **Eliminar una tarea**: Haz hover sobre la tarea y clic en el botón de eliminar
4. **Ver estadísticas**: Observa el contador de tareas totales y completadas

### Ejemplo de integración

```jsx
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTasks = (newTask) => {
    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTasks([...tasks, task]);
  }
  
  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <ToDoForm addTask={addTasks} />
      <ToDoList 
        tasks={tasks} 
        toggleComplete={toggleComplete}
        deleteTask={deleteTask} 
      />
    </div>
  )
}
```

## 🧩 Estructura del Componente

### Gestión de Estado

La aplicación utiliza el hook `useState` de React para gestionar la lista de tareas:

```jsx
// Estado principal en App.jsx
const [tasks, setTasks] = useState([]);

// Función para agregar una nueva tarea
const addTasks = (newTask) => {
  if (!newTask.trim()) return;
  
  const task = {
    id: Date.now(),
    text: newTask.trim(),
    completed: false,
  };
  
  setTasks([...tasks, task]);
};
```

### Manejadores de Eventos

Los componentes incluyen manejadores para gestionar tareas:

```jsx
// Marcar como completada o no completada
const toggleComplete = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

// Eliminar una tarea
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};
```

### Arquitectura de Componentes

La aplicación se divide en cuatro componentes principales:

1. **App.jsx**: Componente principal que gestiona el estado y las funciones
2. **ToDoForm.jsx**: Formulario para añadir nuevas tareas
3. **ToDoList.jsx**: Lista que renderiza los items de tareas
4. **ToDoItem.jsx**: Componente individual para cada tarea

## 📸 Capturas de Código

### Estructura Principal de la Aplicación

![Estructura de App](screenshots/app-structure.png)

### Implementación del Formulario

![Implementación del Formulario](screenshots/form-implementation.png)

### Implementación de la Lista de Tareas

![Implementación de la Lista](screenshots/list-implementation.png)

### Componente Individual de Tarea

![Componente de Tarea](screenshots/item-component.png)

## 🎨 Detalles de Estilo

La aplicación utiliza TailwindCSS para crear una interfaz moderna y atractiva:

- **Esquema de Colores**: Gradientes púrpura y rosa con acentos de color
- **Glassmorphism**: Efectos de cristal esmerilado y transparencias
- **Tipografía**: Fuente Inter para máxima legibilidad
- **Animaciones**: Transiciones suaves y efectos hover
- **Responsive**: Diseño adaptable a todos los tamaños de pantalla
- **Accesibilidad**: Contraste adecuado y elementos claramente identificables

### Características de Diseño

- Fondo con gradiente animado
- Contenedor principal con efecto glassmorphism
- Botones con gradientes y efectos hover
- Checkbox personalizado con animaciones
- Sistema de grid responsivo
- Scrollbar personalizada

## 📋 Scripts Disponibles

- `npm run dev` - Iniciar el servidor de desarrollo
- `npm run build` - Construir la aplicación para producción
- `npm run lint` - Ejecutar ESLint para verificar problemas de calidad del código
- `npm run preview` - Previsualizar la compilación de producción localmente

## 🔍 Detalles de Implementación

Esta aplicación demuestra varias buenas prácticas de desarrollo con React:

1. **Componentes Modulares**: Separación clara de responsabilidades
2. **Gestión de Estado**: Uso eficiente de React hooks
3. **Props**: Paso correcto de datos entre componentes
4. **Renderizado Condicional**: Diferentes vistas según el estado
5. **Inmutabilidad**: Manipulación correcta del estado
6. **Accesibilidad**: Elementos semánticamente correctos
7. **Performance**: Uso de keys únicas en listas

## 🎯 Conceptos de React Demostrados

- ✅ Componentes funcionales
- ✅ useState para gestión de estado
- ✅ Manejo de eventos (onClick, onChange, onSubmit)
- ✅ Renderizado condicional
- ✅ Mapeo de listas con keys únicas
- ✅ Props y comunicación entre componentes
- ✅ Formularios controlados
