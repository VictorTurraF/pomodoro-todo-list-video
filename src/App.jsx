import Task from "./components/Task"

function App() {

  return (
    <div>
      <form>
        <input type="text" placeholder="Nome da tarefa"/>
        <input type="number" placeholder="Pomodoros estimados"/>
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        <Task name="Inicializar o projeto" actPomodoros={1} totalPomodoros={3} isFinished />
        <Task name="Implementar cabeçalho" actPomodoros={2} totalPomodoros={4} />
        <Task name="Implementar rodapé" actPomodoros={3} totalPomodoros={8} isFinished />
      </ul>
    </div>
  )
}

export default App
