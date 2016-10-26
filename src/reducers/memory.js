import { FLIP_CARD, RESTART_GAME } from '../costants/memory';
import generateCards from '../data/cards';

const initialState = {
    round : 1,
    guess1 : null,
    guess2 : null,
    cards : generateCards()
};

export default function memory(state = initialState, action) {
    switch (action.type) {
        case FLIP_CARD:

            if (state.round % 2 != 0) {
                //first pick
                console.log("First pick " + action.id);
            } else {
                //first pick
                console.log("Second pick " + action.id);
            }


            return state;
        default:
            return state;
    }
}
















