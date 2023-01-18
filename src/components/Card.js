import React from "react";

function Card(props) {

    function handleClick() {
        props.onCardClick(props.cards);
      }  

    return (
        <div id="element-template">
            <div className="element">
                <button className="element__trash" type="button"></button>
                <img 
                className="element__image" 
                src={props.cards.link} 
                alt={props.cards.name}
                onClick={handleClick}
                />
                <div className="element__container">
                    <h2 className="element__title">{props.cards.name}</h2>
                    <div className="element__like">
                        <button className="element__like-button" type="button"></button>
                        <p className="element__counter-like">{props.cards.likes.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card