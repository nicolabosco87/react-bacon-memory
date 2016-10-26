import React from 'react'


export default ({card,flipCard}) => {

    return (
        <div className="card" id={card.id} coupleId={card.coupleId} onClick={() => flipCard(card.id)}>
            <img src={card.url} alt=""/>
        </div>
    )

}

