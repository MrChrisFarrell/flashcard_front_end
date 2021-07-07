import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import DisplayFlashcard from '../Display_Flashcard/displayFlashcard';
import DisplayCollections from '../Display_collections/displayCollections';
import CreateFlashcard from '../Forms/createFlashcard';
import EditFlashcard from '../Forms/editFlashcard';

function App() {
    const [collections, setCollections] = useState([]);
    const [collectionIndex, setCollectionIndex] = useState(1);
    const [flashcardIndex, setFlashcardIndex] = useState(0);

    useEffect(async()=> {
        let response = await axios.get('http://127.0.0.1:8000/collections/');
        setCollections(response.data);
    },[]);

    const changeFlashcardIndex=(flashcardIndex, collectionLength, change)=>{
        if(flashcardIndex === 0 && change < 0){
                return;
        }else if(flashcardIndex === collectionLength - 1 && change > 0){
                return;
        }
        else{
                setFlashcardIndex(flashcardIndex + change);
        }
    }

    const changeCollectionIndex=(index)=>{
            setCollectionIndex(index + 1);
    }

    const postFlashcard = async (flashcard)=>{
            await axios.post('http://127.0.0.1:8000/flashcards/', flashcard);
    }

    const putFlashcard = async (flashcard)=>{
            await axios.put(`http://127.0.0.1:8000/flashcards/${flashcardIndex + 1}/`, flashcard);
    }

    return(
            <div>
                <DisplayCollections collections={collections} changeCollectionIndex={changeCollectionIndex}/>
                <DisplayFlashcard collectionIndex={collectionIndex} flashcardIndex={flashcardIndex} changeFlashcardIndex={changeFlashcardIndex}/>
                <CreateFlashcard postFlashcard={postFlashcard} collectionIndex={collectionIndex}/>
                <EditFlashcard putFlashcard={putFlashcard} collectionIndex={collectionIndex}/>
            </div>
    );
  }
  
  export default App;
  