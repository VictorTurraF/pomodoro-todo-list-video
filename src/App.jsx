import { useState } from "react";
import Task from "./components/Task"

function App() {
  const [tasks, setTasks] = useState([
    { id: "1", name: "Inicializar o projeto", actPomodoros: 1, totalPomodoros: 3, isFinished: true },
    { id: "2", name: "Implementar cabeçalho", actPomodoros: 2, totalPomodoros: 4, isFinished: false },
  ])

  function handleSubmit(event) {
    // Desabilitar comportamento padrão
    event.preventDefault();
  
    // Desestruturar elementos input
    const { target: [taskNameInput, taskPomodorosInput] } = event
    
    // Disparar atualizações de estado
    const newTask = {
      name: String(taskNameInput.value),
      actPomodoros: 0,
      totalPomodoros: Number(taskPomodorosInput.value),
      isFinished: false,
    }
  
    setTasks(prev => [...prev, newTask]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome da tarefa"/>
        <input type="number" placeholder="Pomodoros estimados"/>
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map(task => (
          <Task 
            key={task.id}
            name={task.name} 
            actPomodoros={task.actPomodoros} 
            totalPomodoros={task.totalPomodoros} 
            isFinished={task.isFinished}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
