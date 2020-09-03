import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        //initializing counters property to render counters dynamically
        counters: [ 
            {id: 1, value: 4},
            {id: 2, value: 3},
            {id: 3, value: 1},
            {id: 4, value: 0}
        ]
    };
    // event hanler in parent Component event raised by child component
    handleDelete = counterId => {
        //console.log(counterId);
        const counters = this.state.counters.filter( c => c.id !== counterId );
        this.setState({ counters });
    };

    render() { 
        return ( 
            <div>
                {this.state.counters.map(counter => (
                    <Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    value={counter.value} 
                    id = {counter.id}
                    />
                    ))}
            </div>
         );
    }
}
 
export default Counters;