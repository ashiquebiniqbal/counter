import React, { Component } from 'react';
import Navbar from './navbar.component';
import Counters from './counters.component';
import Reset from './reset.component';

class App extends Component {
    state = { 
        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
          ],
     }

    handleReset = () => {
        const allCounterReset = this.state.counters.map((counter, idx) => {
          const obj = { id: idx, value: 0 };
          return obj;
        });
        this.setState({ counters: allCounterReset });
      };
      
    handleIncrement = (id) => {
        const counters = this.state.counters.map((counter, idx) => {
          if (counter.id === id) return { id: idx, value: counter.value + 1 };
            return counter;
        });
    
        this.setState({ counters: counters });
      };
    handleDecrement = (id) => {
        const counters = this.state.counters.map((counter, idx) => {
          if (counter.id == id && counter.value > 0) return { id: idx, value: counter.value - 1 };
            return counter;
        });
    
        this.setState({ counters: counters });
      };
    NonZeroItems = () => {
        let cnt = 0;
        this.state.counters.forEach((counter) => {
          if (counter.value > 0) return cnt++;
        });
        return cnt;
      };
    
    handleDelete = (id) => {
        const counters = this.state.counters.filter((counter) => counter.id !== id);
            this.setState({ counters: counters });
      };  
    render() { 
        return ( 
            <>
                <Navbar nonZeroItems={this.NonZeroItems()}/>
                <Reset onReset={this.handleReset}/>
                <Counters
                    counters={this.state.counters}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                />
            </>
         );
    }
}
 
export default App;