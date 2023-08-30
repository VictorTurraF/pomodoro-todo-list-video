import React from 'react'

function Task(props) {
  const { 
    isFinished, 
    name, 
    actPomodoros, 
    totalPomodoros 
  } = props

  return (
    <li>
      <span><input type="checkbox" checked={isFinished} /></span>
      <span>{name}</span>
      <span>{actPomodoros}/{totalPomodoros}</span>
      <button>Excluir</button>
    </li>
  )
}

export default Task