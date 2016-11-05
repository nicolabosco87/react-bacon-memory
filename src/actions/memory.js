import { FLIP_CARD, RESTART_GAME } from '../costants/memory'

function flipCardAction (cardId) {
    return {
        type: FLIP_CARD,
        cardId
    };
}

function restartGameAction() {
    return {
        type: RESTART_GAME
    }
};


export {flipCardAction, restartGameAction}


