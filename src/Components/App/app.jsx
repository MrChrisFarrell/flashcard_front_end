import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import DisplayFlashcard from '../Display_Flashcard/displayFlashcard';
import DisplayCollections from '../Display_collections/displayCollections';
import FlashcardIndexButton from '../FlashcardIndexButton/flashcardIndexButton';

function App() {
    const [collections, setCollections] = useState([]);
    const [collectionIndex, setCollectionIndex] = useState(1);
    const [flashcardIndex, setFlashcardIndex] = useState(0);

    useEffect(async()=> {
        let response = await axios.get('http://127.0.0.1:8000/collections/');
        setCollections(response.data);
    },[]);

    function changeFlashcardIndex(flashcardIndex, change){
        if(flashcardIndex === 0 && change < 0){
                return;
        }else{
                setFlashcardIndex(flashcardIndex + change);
        }
    }

    return(
            <div>
                <DisplayCollections collections={collections}/>
                <DisplayFlashcard collectionIndex={collectionIndex} flashcardIndex={flashcardIndex}/>
                <FlashcardIndexButton flashcardIndex={flashcardIndex} changeFlashcardIndex={changeFlashcardIndex}/>
            </div>
    );
  }
  
  export default App;
  