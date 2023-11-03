import React, { useState } from "react";
import Logo from '../assets/sbLogo.webp'



export default function Card({ card }) {
    const [side, setSide] = useState();

    function handleClick() {
        console.log("clicked!");
        setSide(!side);
        console.log(side);
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
        <div className={`card ${side ? "side" : ""}`} onClick={handleClick}>
            <img src={Logo} className="cardLogo" alt="Study Buddy Logo"></img>
            {<small>
                <span>
                    Card Mastery<br></br>
                    {currentCardMastery(card.mastery)}
                </span>
            </small>
            }
            {/* {side ? card.fields.side1 : card.fields.side2} */}
            <div className="front">{card.term}</div>
            <div className="back">{card.definition}</div>
            {<small className="footer">
                <span>
                    Study Buddy
                </span>
            </small>}
        </div>
    );
}
