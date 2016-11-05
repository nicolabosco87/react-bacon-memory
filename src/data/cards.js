import {shuffle} from '../lib/utility'

export default () => {

    let cards = [];

    for (let i=0, coupleId=0;i < 16; i+=2,coupleId++) {

        cards.push({
            id: i,
            coupleId: coupleId,
            url: "http://baconmockup.com/" + (198 + coupleId) +"/200/",
            guessed: false,
            flipped: false
        });

        cards.push({
            id: i + 1,
            coupleId: coupleId,
            url: "http://baconmockup.com/" + (198 + coupleId) +"/200/",
            guessed: false,
            flipped: false
        });

    }

    shuffle(cards);

    return cards;
}






