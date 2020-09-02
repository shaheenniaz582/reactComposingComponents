import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        value: this.props.value
     };
     handleIncrement = () => {
         this.setState({ value: this.state.value + 1})
     }
     getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }
    
    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero': value;
    }  
    render() { 
        //console.log('props', this.props); //just to see props in browser
        return (  
            <div>
              <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
              <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Incement</button>
              </div>
        );
    }
}
 
export default Counter;