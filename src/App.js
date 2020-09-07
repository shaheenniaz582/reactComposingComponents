import React, { Component } from 'react';

import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {

    state = {  
      //initializing counters property to render counters dynamically
      counters: [ 
          {id: 1, value: 4},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0}
      ]
  };
  // event handler for parent component event raised from child component
  handleIncrement = counter => {
      //console.log(counter);
      const counters = [...this.state.counters]; //spread operator used to clone the counters array
      //just to test
      // counters[0].value++;
      // console.log(this.state.counters[0]);
      const index = counters.indexOf(counter);
      counter[index] = {...counter}; //to have different object than in state
      counters[index].value++;
      this.setState({ counters });

  };

  handleDecrement = counter => {
    const counters = [...this.state.counters]; //spread operator used to clone the counters array
    const index = counters.indexOf(counter);
    counter[index] = {...counter}; //to have different object than in state
    counters[index].value--;
    this.setState({ counters });
 };

  // event handler for understanding of single source of truth
  handleReset = () => {
      const counters = this.state.counters.map( c=> {
          c.value = 0;
          return c;
      });
      this.setState({ counters });
  };
  // event hanler in parent Component event raised by child component
  handleDelete = counterId => {
      //console.log(counterId);
      const counters = this.state.counters.filter( c => c.id !== counterId );
      this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
      <NavBar 
        totalCounters={this.state.counters.filter(c => c.value > 0).length}
      />
      <main className="container">
        <Counters
          counters={this.state.counters} 
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
          />
      </main>
      </React.Fragment>
    );
  }  
}

export default App;
