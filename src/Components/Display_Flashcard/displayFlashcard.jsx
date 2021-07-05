import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './displayFlashcard.css';

const DisplayFlashcard=(props)=>{
    const [collection, setCollection] = useState([]);
    setCollection(async()=>{
        let response = await axios.get(`http://127.0.0.1:8000/flashcards/`, {fk: props.collectionIndex});
        return response.data;
})

    useEffect(async()=>{

    });

    return(
        <div onClick="application.goToTargetView(event)" id="Flashcard">
            <h1 className="text">{collection[props.flashcardIndex].term}</h1>
        </div>
    )
}

export default DisplayFlashcard;