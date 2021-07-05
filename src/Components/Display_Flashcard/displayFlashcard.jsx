import React from 'react';
import './displayFlashcard.css';

function DisplayFlashcard(){
    return(
        <div onClick="application.goToTargetView(event)" id="Flashcard">
            <h1 className="text">Term</h1>
        </div>
    )
}

export default DisplayFlashcard;