import React from 'react';
import Card from './Card';

export default ({cards, flipCard}) => {

    console.log(flipCard);

    return (
        <ul className="cards-list">
            {
                cards.map(card =>
                    <li>
                        <Card card={card} flipCard={flipCard} ></Card>
                    </li>
                )
            }
        </ul>
    )

}


