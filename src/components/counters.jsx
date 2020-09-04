import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    /* cut and pasted in App component i.e parent component.
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
        */
    render() { 
        return ( 
            <div>
                <button 
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => (
                    <Counter 
                    key={counter.id}  // attribute used internally by react we cant use it
                    onIncrement = {this.props.onIncrement}
                    onDelete={this.props.onDelete} 
                    //value={counter.value} 
                    //id = {counter.id}
                    counter={counter} //value and id replaced by counter object for encapsulation
                    />
                    ))}
            </div>
         );
    }
}
 
export default Counters;