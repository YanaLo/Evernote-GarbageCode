import React from "react"

const NoteItem = props => {
  return (
    <li onClick={() => props.noteChange(props.note)}>
      <h2>{props.note.title}</h2>
      <p>{props.note.body}</p>
    </li>
  )
}
export default NoteItem
