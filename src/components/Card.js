import React from 'react'
var classNames = require('classnames');

export default ({card,flipCard}) => {

    var cardClasses = classNames({
        'card': true,
        'card--flipped': card.flipped,
        'card--guessed': card.guessed
    });

    return (
        <div className={cardClasses} id={card.id} coupleId={card.coupleId} onClick={() => flipCard(card.id)}>
            <div className="card__front"><span>BM</span></div>
            <img src={card.url} alt=""/>
        </div>
    )

}






