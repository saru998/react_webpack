import React, { Component } from 'react';

class App extends Component {
  render() {

    const arr=["number1","number2","number3"]
    return (
      <div>
        { arr.map(x=> <div key={x}>options are {x}</div> ) }
      </div>
    );
  }
}

export default App;
