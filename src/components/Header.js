import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {restartGameAction} from '../actions/memory'

const mapStateToProps = (state) => ({
    memory : state.memory
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        restartGame: () => {
            dispatch(restartGameAction())
        }
    }
});

class Header extends Component {

    render() {

        const { memory, actions  } = this.props;

        return (
            <div className="App-header">
                <h2>Bacon Memory Game?</h2>
                <h3>Round n°{Math.ceil(memory.round / 2)} - <button onClick={() => actions.restartGame()}>Restart Game?</button></h3>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Header);


