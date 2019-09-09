import React, { Component, Fragment } from "react"
import Search from "./Search"
import Sidebar from "./Sidebar"
import Content from "./Content"

class NoteContainer extends Component {
  state = { instructionNote: "" }
  noteChange = this.noteChange.bind(this)

  noteChange(note) {
    this.setState({
      instructionNote: note
    })
    console.log(note)
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className="container">
          <Sidebar noteChange={this.noteChange} />
          <Content instructionNote={this.state.instructionNote} />
        </div>
      </Fragment>
    )
  }
}

export default NoteContainer
