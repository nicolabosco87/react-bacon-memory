import React from 'react'


export default ({card}) => {

    return (
        <div className="card" id={card.id} coupleId={card.coupleId} >
            <img src={card.url} alt=""/>
        </div>
    )

}