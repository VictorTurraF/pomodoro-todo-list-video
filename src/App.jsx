import { useState } from "react";
import Task from "./components/Task"
import { rebootCss } from "./styles/reboot";
import { styled } from "@stitches/react";
import { List } from "./layouts/List";
import { Input } from './layouts/Input'
import { Button } from './layouts/Button'
import { Box } from "./layouts/Box";

const AppGrid = styled(Box, {
  maxWidth: "1000px",
  margin: "3rem auto",
});

const Form = styled("form", {
  display: "grid",
  gap: '.5rem',
  gridTemplateColumns: "1fr 11rem 160px",
  marginBottom: "1rem"
})

rebootCss();

function App() {
  const [activeTaskId, setActiveTaskId] = useState("");
  const [tasks, setTasks] = useState([
    { id: self.crypto.randomUUID(), name: "Inicializar o projeto", actPomodoros: 1, totalPomodoros: 3, isFinished: true },
    { id: self.crypto.randomUUID(), name: "Implementar cabeçalho", actPomodoros: 2, totalPomodoros: 4, isFinished: false },
  ])

  function handleSubmit(event) {
    // Desabilitar comportamento padrão
    event.preventDefault();
  
    // Desestruturar elementos input
    const { target: [taskNameInput, taskPomodorosInput] } = event
    
    // Disparar atualizações de estado
    const newTask = {
      id: self.crypto.randomUUID(),
      name: String(taskNameInput.value),
      actPomodoros: 0,
      totalPomodoros: Number(taskPomodorosInput.value),
      isFinished: false,
    }
  
    setTasks(prev => [...prev, newTask]);
  }

  function handleExcludeClick({ taskId }) {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  function handleActiveClick({ taskId }) {
    setActiveTaskId(taskId)
  }
  
  return (
    <AppGrid>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Nome da tarefa"/>
        <Input type="number" placeholder="Pomodoros estimados"/>
        <Button type="submit">Adicionar</Button>
      </Form>
      <List>
        {tasks.map(task => (
          <Task 
            id={task.id}
            key={task.id}
            name={task.name} 
            actPomodoros={task.actPomodoros} 
            totalPomodoros={task.totalPomodoros} 
            isFinished={task.isFinished}
            onExcludeClick={handleExcludeClick}

            isActive={task.id === activeTaskId}
            onActiveClick={handleActiveClick}
          />
        ))}
      </List>
    </AppGrid>
  )
}

export default App
