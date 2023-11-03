import React, { useState, useEffect } from "react";

import "../styles/CardsStyles.css";
import Card from "./Card.js";
// https://www.youtube.com/watch?v=hEtZ040fsD8&feature=youtu.be&t=719 (flashcards)
// https://www.youtube.com/watch?v=vs6usnS5OTE (slider)


export default function Cards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setData(data.Cards);
            }, []);
    });

    // https://www.debuggr.io/react-map-of-undefined/
    const cards = data.map((card) => {
        return <Card card={card} key={card.Card_ID} />;
    });

    const loading = <div className="loading">Loading flashcard content...</div>;

    // navigation in cards
    const [current, setCurrent] = useState(0);
    function previousCard() {
        setCurrent(current - 1);
    }
    function nextCard() {
        setCurrent(current + 1);
    }

    // if (data) {
    //   return (
    //     <div>
    //       <div>The number of cards is: {data.length}</div>
    //       {cards[0]}
    //     </div>
    //   );
    // } else {
    //   return <div>Loading...</div>;
    // }
    return (
        <div className="flashCard">
            {/* number of cards */}
            {data && data.length > 0 ? (
                <div className="cardNumber">
                    Card {current + 1} of {data.length}
                </div>
            ) : (
                ""
            )}
            {/* /number of cards */}

            {/* render cards */}
            {data && data.length > 0 ? cards[current] : loading}
            {/* /render cards */}

            {/* render nav buttons */}
            <div className="deckNav">
                {current > 0 ? (
                    <button onClick={previousCard} id="deckNavText">Previous card</button>
                ) : (
                    <button className="disabled" disabled id="deckNavText">
                        Previous card
                    </button>
                )}
                {current < data.length - 1 ? (
                    <button onClick={nextCard} id="deckNavText">Next card</button>
                ) : (
                    <button className="disabled" disabled id="deckNavText">
                        Next card
                    </button>
                )}
                {/* When the width of the browser is less than 400px*/}
                {current > 0 ? (
                    <button onClick={previousCard} id="deckNavArrow">🢀</button>
                ) : (
                    <button className="disabled" disabled id="deckNavArrow">
                        🢀
                    </button>
                )}
                {current < data.length - 1 ? (
                    <button onClick={nextCard} id="deckNavArrow">🢂</button>
                ) : (
                    <button className="disabled" disabled id="deckNavArrow">
                        🢂
                    </button>
                )}
                {/* /render nav buttons */}
            </div>
        </div>
    );
}
