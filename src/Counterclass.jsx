import React, { Component } from 'react'
import './counterfunction.css'

class Counterclass extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    Increment(){
            this.setState({
                count : this.state.count + 1
            })
    }

    Decrement(){
        this.setState({
            count : this.state.count - 1
        }) 
    }

    Reset(){
        this.setState({
            count : this.state.count = 0
        })   
    }

  render() {
    return (
      <div className='app'>
        <div className='counter'>
            <h1>Counter App</h1>
        <h2>{this.state.count}</h2>

        <button onClick={() => this.Increment()}>+</button>

        {
            this.state.count == 0
            ? (
                <button disabled onClick={() => this.Decrement()}>-</button>
            )
            :(
                <button onClick={() => this.Decrement()}>-</button>
            )
        }
        {
           this.state.count == 0
           ? (
               <button disabled onClick={() => this.Reset()}>0</button>
           )
           :(
               <button onClick={() => this.Reset()}>0</button>
           ) 
        }

            

        </div>
      </div>
    )
  }
}

export default Counterclass
