import {shuffle} from '../lib/utility'

export default () => {

    let cards = [];

    for (let i=0, coupleId=0;i < 16; i+=2,coupleId++) {

        cards.push({
            id: i,
            coupleId: coupleId,
            url: "http://baconmockup.com/" + (198 + coupleId) +"/200/"
        });

        cards.push({
            id: i + 1,
            coupleId: coupleId,
            url: "http://baconmockup.com/" + (198 + coupleId) +"/200/"
        });

    }

    shuffle(cards);

    return cards;
}






