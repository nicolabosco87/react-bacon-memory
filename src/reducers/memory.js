import { FLIP_CARD, RESTART_GAME } from '../costants/memory';
import generateCards from '../data/cards';
import update from 'immutability-helper';

const initialState = {
    round : 1,
    guess1CardId : null,
    guess1CoupleId : null,
    cards : generateCards()
};

export default function memory(state = initialState, action) {
    switch (action.type) {
        case FLIP_CARD:
            let newState;
            if (state.round % 2 != 0) {
                //first pick
                console.log("First pick " + action.cardId);
                newState = Object.assign({},state,{
                    round: state.round + 1,
                    cards: state.cards.map((card) => {
                        return (card.id === action.cardId) ?
                            Object.assign({}, card, { flipped : true }) :
                            Object.assign({}, card, { flipped : false })
                    }),
                    guess1CardId: action.cardId,
                    guess1CoupleId: state.cards.find(x => x.id == action.cardId).coupleId
                });
            } else {

                //first pick
                console.log("Second pick " + action.cardId);
                console.log("Comparing couple ids: "+state.guess1CoupleId+" === "+ state.cards.find(x => x.id == action.cardId).coupleId);

                if (state.guess1CardId == action.cardId) {
                    //doing nothing
                    newState = Object.assign({},state, {
                        round: state.round,
                    });
                } else {
                    if (state.guess1CoupleId == state.cards.find(x => x.id == action.cardId).coupleId ) {
                        console.log("FOUNDED!");

                        newState = Object.assign({},state, {
                            round: state.round + 1,
                            cards: state.cards.map((card) => {
                                let isFlipped = (card.id == action.id || card.id == state.guess1CardId);
                                return (card.coupleId === state.guess1CoupleId ) ?
                                    Object.assign({}, card, { guessed : true, flipped: isFlipped }) :
                                    Object.assign({}, card, { flipped: isFlipped })
                            })
                        });
                    } else {
                        console.log("NOT FOUNDED!");
                        newState = Object.assign({},state, {
                            round: state.round + 1,
                            guess1CardId: null,
                            guess1CoupleId: null,
                            cards: state.cards.map((card) => {
                                return (card.id === state.guess1CardId || card.id === action.cardId ) ?
                                    Object.assign({}, card, { flipped: true }) :
                                    Object.assign({}, card, { flipped: false })
                            })
                        });
                    }
                }
            }

            // console.log(newState);

            return newState;
        default:
            return state;
    }
}

