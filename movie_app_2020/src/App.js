import React from 'react';

// React.Component 클래스를 상속 받음.
class App extends React.Component {
  state ={
    count: 0,
  };

  add= () =>{
    // current 에는 현재 state 가 넘어온다. 
    this.setState(current => ({
      count: current.count +1,
    }));
  };

  minus = () => {
    this.setState(current =>({
      count: current.count-1,
    }));
  };

  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>  
    );
  }
}

export default App;
