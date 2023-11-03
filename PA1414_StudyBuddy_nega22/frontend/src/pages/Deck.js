import { useEffect, useState } from "react";
import "../styles/CardsStyles.css";
import Card from "../components/Card";
import QCard from "../components/QCard";
import { useParams } from 'react-router-dom';

function Deck() {
    const { deckID } = useParams();
    const [cards, setCards] = useState([]);
    const [current, setCurrent] = useState(0);
    const [mode, setMode] = useState('Study'); // 'study' or 'quiz'

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch(`//localhost:5000/api/cards/deck/${deckID}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch cards');
                }
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        }
        fetchCards();
    }, [deckID]);
    const switchModes = () => {
        if (mode === 'Study'){
            setMode('Quiz');
        }
        else {
            const confirmMessage = "Are you sure you want to switch to Study Mode?\n\n" +
                                    "If you haven't finished, you will lose your progress on this quiz.";
            if (window.confirm(confirmMessage)) {
                setMode('Study');
            }
        }
        setCurrent(0);
    }
    const previousCard = () => {
        setCurrent(Math.max(current - 1, 0));
    }

    const nextCard = () => {
        setCurrent(Math.min(current + 1, cards.length - 1));
    }

    return (
        <div className="studyMode">
            <div className="modeButtons">
                <h3>{mode} Mode</h3>
                <button onClick={switchModes}>Swtich Mode</button>
            </div>
            <div className="flashCard" id="deckContent">
                {mode === 'Study' && (
                    // Study Mode Content
                    <>
                        {cards.length > 0 && (
                            <div className="cardNumber">
                                Card {current + 1} of {cards.length}
                            </div>
                        )}
                        {cards.length > 0 ? (
                            <Card card={cards[current]} key={cards[current]._id} />
                        ) : (
                            <div className="loading">Loading flashcard content...</div>
                        )}
                        <div className="deckNav">
                            <button onClick={previousCard} id="deckNavText" disabled={current === 0}>Previous card</button>
                            <button onClick={nextCard} id="deckNavText" disabled={current === cards.length - 1}>Next card</button>
                            <button onClick={previousCard} id="deckNavArrow" disabled={current === 0}>🢀</button>
                            <button onClick={nextCard} id="deckNavArrow" disabled={current === cards.length - 1}>🢂</button>
                        </div>
                    </>
                )}
                {mode === 'Quiz' && (
                    // Quiz Mode Content
                    <>
                        {cards.length > 0 && (
                            <div className="cardNumber">
                                Question {current + 1} of {cards.length}
                            </div>
                        )}
                        {cards.length > 0 ? (
                            <QCard card={cards[current]} key={cards[current]._id} />
                        ) : (
                            <div className="loading">Loading quiz content...</div>
                        )}
                        <div className="deckNav">
                            <button onClick={previousCard} id="deckNavText" disabled={current === 0}>Previous card</button>
                            <button onClick={nextCard} id="deckNavText" disabled={current === cards.length - 1}>Next card</button>
                            <button onClick={previousCard} id="deckNavArrow" disabled={current === 0}>🢀</button>
                            <button onClick={nextCard} id="deckNavArrow" disabled={current === cards.length - 1}>🢂</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Deck;
