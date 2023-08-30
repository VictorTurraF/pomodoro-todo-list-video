import { useState } from "react"
import Task from "./components/Task"

function App() {
  // React Hook useState
  const [taskName, setTaskName] = useState("")
  const [taskPomodoros, setTaskPomodoros] = useState(0)

  const tasks = [
    { id: "1", name: "Inicializar o projeto", actPomodoros: 1, totalPomodoros: 3, isFinished: true },
    { id: "2", name: "Implementar cabeçalho", actPomodoros: 2, totalPomodoros: 4, isFinished: false },
  ]

  function handleSubmit(event) {
    // Desabilitar comportamento padrão
    event.preventDefault();
  
    // Desestruturar elementos input
    const { target: [taskNameInput, taskPomodorosInput] } = event
  
    // Disparar atualizações de estado
    setTaskName(taskNameInput.value);
    setTaskPomodoros(taskPomodorosInput.value);
  }


  return (
    <div>
      Task name: {taskName} <br/>
      Task pomodoros: {taskPomodoros}

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
            totalPomodoros={tasks.totalPomodoros} 
            isFinished={task.isFinished}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
