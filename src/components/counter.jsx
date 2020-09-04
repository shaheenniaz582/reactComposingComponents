import React, { Component } from 'react';
class Counter extends Component {
    // this state is deleted to form single source of truth : no more private state in  each component
    // state = { 
    //     value: this.props.counter.value //props used to initialize state of counter 
    //  };
    // dlete this method as no more private state in this component
    //  handleIncrement = () => {
    //      this.setState({ value: this.state.value + 1})
    //  }
     getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
    
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero': value;
    }  
    render() { 
        //console.log('props', this.props); //just to see props in browser
        return (  
            <div>
              <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
              <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Incement</button>
              <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2" 
              >
                Delete
              </button>
              </div>
              
        );
    }
}
 
export default Counter;