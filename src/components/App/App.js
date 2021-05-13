import React, { Component } from "react"
import Board from "../Board/Board"
import "./App.css"

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <h1>Shakira Memory Match</h1>
        <h3>Click on a card to see its picture, then try to guess where its match is and click on it!</h3>
        <Board />
      </main>
    )
  }
}

export default App
