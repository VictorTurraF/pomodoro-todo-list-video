import React from 'react'
import { styled } from "@stitches/react"
import { schema } from "../utils/theme"
import { Button } from "../layouts/Button"

const Row = styled('li', {
  display: "grid",
  gridTemplateColumns: "auto 1fr auto auto",
  gridGap: "1rem",
  alignItems: "center",
  padding: '.75rem',
  background: "#fff",
  borderRadius: ".5rem",
  cursor: "pointer",
  transition: "border .3s ease-in-out",
  variants: {
    isActive: {
      [true]: {
        border: `4px solid ${schema.primary}`
      },
      [false]: {
        border: `4px solid transparent`
      }
    }
  }
})

const DescriptionCol = styled('span', {
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: "nowrap",
  variants: {
    isFinished: {
      [true]: {
        textDecoration: "line-through"
      },
      [false]: {
        textDecoration: "none"
      }
    }
  }
})

function Task(props) {
  const { 
    id,
    isFinished, 
    name, 
    actPomodoros, 
    totalPomodoros,
    onExcludeClick = () => {},

    isActive = false,
    onActiveClick = () => {},
  } = props

  function handleExcludeClick(event) {
    onExcludeClick({ event, taskId: id })
  }

  function handleActiveClick(event) {
    const checkboxEl = event.currentTarget.querySelector('input[type=checkbox]')
  
    if (checkboxEl.contains(event.target) || checkboxEl === event.target) {
      return;
    }
  
    onActiveClick({ event, taskId: id })
  }

  return (
    <Row onClick={handleActiveClick} isActive={isActive}>
      <span><input type="checkbox" checked={isFinished} /></span>
      <DescriptionCol>{name}</DescriptionCol>
      <span>{actPomodoros}/{totalPomodoros}</span>
      <Button onClick={handleExcludeClick}>Excluir</Button>
    </Row>
  )
}

export default Task