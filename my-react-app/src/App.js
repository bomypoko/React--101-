import React, { Component } from 'react'

class MyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }

  }

  showData = (element) => {
    this.setState({username: element.target.value})
  }




  render() {
    return (
      <>

        <form>
          <h1> Hello Mr. {this.state.username}</h1>
          <p> Please enter your name below</p>
          <input type="text" onChange={this.showData}></input>
        </form>


        
      </>
    )
  }

}

function App() {
  return (
    <div className='App'>
      <MyForm />

    </div>
  )
}

export default App


