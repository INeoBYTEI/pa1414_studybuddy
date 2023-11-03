import React, { useState } from "react";
import Logo from '../assets/sbLogo.webp';

export default function QCard({ card }) {
    const [result, setResult] = useState(null);
    const [userAnswer, setUserAnswer] = useState(""); // State for user's answer

    // Function to check if the submitted answer is correct
    function cardChecker() {
        // Replace this logic with your actual answer checking logic
        // For this example, let's assume the correct answer is "card.definition"
        if (userAnswer.trim().toLowerCase() === card.definition.trim().toLowerCase()) {
            setResult("right");
        } else {
            setResult("wrong");
        }
        const qType = document.getElementById("qtype");
        qType.style.display = "none";
    }

    function currentCardMastery(mastery_value) {
        let result;
        switch (Math.floor(mastery_value / 2)) {
            case 0:
                result = "✰✰✰";
                break;
            case 1:
                result = "✮✰✰";
                break;
            case 2:
                result = "✮✮✰";
                break;
            case 3:
                result = "✮✮✮";
                break;
            default:
                result = "? ? ?";
                break;
        }
        return result;
    }

    return (
        <div className={`card ${result ? result : "q"} `}>
            <img src={Logo} className="cardLogo" alt="Study Buddy Logo" />
            <small>
                <span>
                    Card Mastery<br />
                    {currentCardMastery(card.mastery)}
                </span>
                <b id="qtype">Define the Term:</b>
                <h2 className="o">Correct Answer!</h2>
                <h2 className="x">Wrong Answer!</h2>
            </small>
            <div className="front">
                <p>{card.term}</p>
                {/* Input field for the user's answer */}
                <input
                    type="text"
                    placeholder="Your Answer"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            cardChecker();
                        }
                    }}
                />
                {/* Submit button to check the answer */} <br />
                <button onClick={cardChecker}>Submit</button>
            </div>
            <small className="footer">
                <span>Study Buddy</span>
            </small>
        </div>
    );
}
