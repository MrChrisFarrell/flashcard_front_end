import React, { useState, useEffect } from 'react';

const FlashcardIndexButton = (props) =>{
    return(
        <div>
            <span>
                <button onClick={()=>props.changeFlashcardIndex(props.flashcardIndex, -1)}>Prev</button>
                <button onClick={()=>props.changeFlashcardIndex(props.flashcardIndex, 1)}>Next</button>
                </span>
        </div>
    )
}

export default FlashcardIndexButton;