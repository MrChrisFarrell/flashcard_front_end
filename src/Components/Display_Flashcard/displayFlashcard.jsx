import React from 'react';
import './displayFlashcard.css';

function DisplayFlashcard(){
    return(
        <div onClick="application.goToTargetView(event)" id="Flashcard" className="Flashcard">
            <svg className="Flashcard_i">
                <rect onClick="application.goToTargetView(event)" id="Flashcard_i" rx="64" ry="64" x="0" y="0" width="558" height="624"></rect>
            </svg>
        </div>
    )
}

export default DisplayFlashcard;