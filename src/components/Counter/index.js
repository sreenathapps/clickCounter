import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    this.setState(prevState => {
      const {count} = prevState
      return {count: count - 1}
    })
  }

  onIncrement = () => {
    this.setState(prevState => {
      const {count} = prevState
      return {count: count + 1}
    })
  }

  render() {
    const {count} = this.state

    console.log(count)

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onDecrement} type="button">
          Increase
        </button>
        <button className="button" onClick={this.onIncrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
