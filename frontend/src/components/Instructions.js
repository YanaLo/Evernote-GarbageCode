import React from "react"

const Instructions = props => {
  if (props.note !== null) {
    return (
      <div>
        <h1 className="instructions">{props.note.title}</h1>
        <p className="instructions">{props.note.body}</p>
      </div>
    )
  } else {
    return <p className="instructions">Select a note.</p>
  }
}

export default Instructions
