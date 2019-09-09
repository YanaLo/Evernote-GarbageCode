import React, { Component } from "react"
import NoteList from "./NoteList"

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="master-detail-element sidebar">
        <NoteList noteChange={this.props.noteChange} />
        <button>New</button>
      </div>
    )
  }
}

export default Sidebar
