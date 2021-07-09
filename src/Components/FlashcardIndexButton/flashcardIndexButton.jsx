import React from 'react';

const FlashcardIndexButton = (props) =>{
    return(
        <div>
            <span>
                <button style={{margin: "2px", borderRadius: "25px", backgroundColor: "lightblue"}} onClick={()=>props.changeFlashcardIndex(props.flashcardIndex, props.collectionLength, -1)}>Prev</button>
            </span>
            <span>
                <button style={{margin: "2px", borderRadius: "25px", backgroundColor: "lightblue"}} onClick={()=>props.changeFlashcardIndex(props.flashcardIndex, props.collectionLength, 1)}>Next</button>
            </span>
        </div>
    )
}

export default FlashcardIndexButton;