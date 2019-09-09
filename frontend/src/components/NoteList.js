import React, { Component } from "react"
import NoteItem from "./NoteItem"

class NoteList extends React.Component {
  state = { noteArray: [] }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/notes`)
      .then(data => data.json())
      .then(noteList => this.setState({ noteArray: noteList }))
  }

  render() {
    // console.log(this.setState)
    let getNoteList = this.state.noteArray.map(note => (
      <NoteItem note={note} key={note.id} noteChange={this.props.noteChange} />
    ))
    return (
      <ul>
        {getNoteList}
        {/* <NoteItem noteArray={this.state.noteArray} /> */}
      </ul>
    )
  }
}
export default NoteList
