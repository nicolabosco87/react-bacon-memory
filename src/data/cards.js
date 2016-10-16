export default () => {

    let cards = [];

    for (let i=0, coupleId=0;i < 16; i+=2,coupleId++) {

        cards.push({
            id: i,
            coupleId: coupleId,
            url: "http://baconmockup.com/" + (199 + coupleId) +"/200/"
        });

        cards.push({
            id: i + 1,
            coupleId: coupleId,
            url: "http://baconmockup.com/" + (199 + coupleId) +"/200/"
        });

    }

    return cards;
}



