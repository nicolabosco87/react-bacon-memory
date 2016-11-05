import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import CardList from './components/CardList'
import {flipCardAction,restartGameAction} from './actions/memory'
import './App.css';

const mapStateToProps = (state) => ({
    memory : state.memory
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        flipCard: (id) => {
            dispatch(flipCardAction(id))
        }
    }
});


class App extends Component {

    // static propTypes : {
    //     memory : PropTypes.array.isRequired,
    //     actions  : PropTypes.object
    // }

    render() {

        const { memory, actions  } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Bacon Memory Game?</h2>
          <h3>{memory.round}</h3>
        </div>
          <div>
              <CardList cards={memory.cards} flipCard={actions.flipCard} ></CardList>
          </div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);























