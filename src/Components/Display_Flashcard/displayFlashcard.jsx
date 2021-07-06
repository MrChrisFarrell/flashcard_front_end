import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './displayFlashcard.css';

const DisplayFlashcard=(props)=>{
    const [collection, setCollection] = useState([]);
    const [loadingFlashcards, setLoadingFlashcards] = useState(true);
    const [flashcardTerms, setFlashcardTerms] = useState([]);
    const [flashcardDefinitions, setFlashcardDefinitions] = useState([]);
    const [viewTerm, setViewTerm] = useState(true);
    async function getCollection(){
        try {
            setLoadingFlashcards(true);
            const response = await axios.get(`http://127.0.0.1:8000/flashcards/?collection_id=${props.collectionIndex}`);
            setCollection(response.data);

        }finally{
            setLoadingFlashcards(false);
        }
        let terms = collection.map((flashcard)=>
            <h1>{flashcard.term}</h1>
        );
        setFlashcardTerms(terms);
        let defs = collection.map((flashcard)=>
            <h1>{flashcard.definition}</h1>
        );
        setFlashcardDefinitions(defs);
    }

    function toggleViewTerm(viewTerm){
        if (viewTerm){
            setViewTerm(false);
        }else{
            setViewTerm(true);
        }
    }

    useEffect(()=>{
        getCollection();
    }, [viewTerm]);

    if (viewTerm){
        return(
            <div onClick={()=>toggleViewTerm(viewTerm)} id="Flashcard">
                <h1 className="text">{flashcardTerms[props.flashcardIndex]}</h1>
            </div>
        )
    }else{
        return(
            <div onClick={()=>toggleViewTerm(viewTerm)} id="Flashcard">
                <h1 className="text">{flashcardDefinitions[props.flashcardIndex]}</h1>
            </div>
        )
    }
    
}

export default DisplayFlashcard;