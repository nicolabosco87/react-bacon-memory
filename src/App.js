import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import CardList from './components/CardList'


const mapStateToProps = (state) => ({
    memory : state.memory
});

class App extends Component {


    render() {

    var { memory } = this.props;

      console.log(memory);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Bacon Memory Game?</h2>
          <h3>{memory.round}</h3>
        </div>
          <div>
              <CardList cards={memory.cards} ></CardList>
          </div>
      </div>

    );
  }
}

export default connect(mapStateToProps)(App);