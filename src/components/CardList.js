import React from 'react';
import Card from './Card';

export default ({cards}) => {

    return (
        <ul className="cards-list">
            {
                cards.map(card =>
                    <li>
                        <Card card={card} ></Card>
                    </li>
                )
            }
        </ul>
    )

}



