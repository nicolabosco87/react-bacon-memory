import { FLIP_CARD, RESTART_GAME } from '../costants/memory'

function flipCardAction (id) {
    return {
        type: FLIP_CARD,
        id
    };
}

function restartGameAction() {
    return {
        type: RESTART_GAME
    }
};


export {flipCardAction, restartGameAction}


