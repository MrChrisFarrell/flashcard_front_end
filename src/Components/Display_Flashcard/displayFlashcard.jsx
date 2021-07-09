import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './displayFlashcard.css';
import FlashcardIndexButton from '../FlashcardIndexButton/flashcardIndexButton';
import { render } from '@testing-library/react';

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
        
    }

    function toggleViewTerm(viewTerm){
        if (viewTerm){
            setViewTerm(false);
        }else{
            setViewTerm(true);
        }
    }

    useEffect(()=>{
        let terms = collection.map((flashcard, index)=>
            <div>
                <h1>{flashcard.term}</h1>
                <h2>{index + 1}/{collection.length}</h2>
            </div>
        );
        setFlashcardTerms(terms);
        let defs = collection.map((flashcard, index)=>
            <div>
                <h1>{flashcard.definition}</h1>
                <h2>{index + 1}/{collection.length}</h2>
            </div>
        );
        setFlashcardDefinitions(defs);
    },[collection])

    useEffect(()=>{
        getCollection();
    }, [props.collectionIndex, viewTerm]);

    if (viewTerm){
        return(
            <div>
                <div onClick={()=>toggleViewTerm(viewTerm)} id="Flashcard">
                    <h1 className="text">{flashcardTerms[props.flashcardIndex]}</h1>
                </div>
                <div className="flashcardIndexButton">
                <FlashcardIndexButton changeFlashcardIndex={props.changeFlashcardIndex} flashcardIndex={props.flashcardIndex} collectionLength={collection.length}/>
                </div>
            </div>
        );
    }else{
        return(
            <div>
                <div onClick={()=>toggleViewTerm(viewTerm)} id="Flashcard">
                    <h1 className="text">{flashcardDefinitions[props.flashcardIndex]}</h1>
                </div>
                <FlashcardIndexButton changeFlashcardIndex={props.changeFlashcardIndex} flashcardIndex={props.flashcardIndex} collectionLength={collection.length}/>
            </div>
        )
    }
    
}

export default DisplayFlashcard;