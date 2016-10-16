// import { FLIP_CARD, RESTART_GAME } from '../constants/memory';
import generateCards from '../data/cards';

const initialState = {
    round : 10,
    guess1 : null,
    guess2 : null,
    cards : generateCards()
};

export default function memory(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}





