import React from "react";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, userContext, cards, onCardClick }) {


    return (
        <main>

            <section className="profile">
                <div
                    className="profile__avatar"
                    onClick={onEditAvatar}
                    style={{ backgroundImage: `url(${userContext.userAvatar})` }}
                >
                </div>
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__title">{userContext.userName}</h1>
                        <button
                            type="button"
                            className="profile__edit-button"
                            onClick={onEditProfile}
                        >
                        </button>
                    </div>
                    <h2 className="profile__subtitle">{userContext.userDescription}</h2>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    onClick={onAddPlace}
                >
                </button>
            </section>

            <section className="elements">
                {cards.map((card) =>
                    <Card
                        key={card._id}
                        cards={card}
                        onCardClick={onCardClick}
                    />)}
            </section>
        </main>
    )
};

export default Main;