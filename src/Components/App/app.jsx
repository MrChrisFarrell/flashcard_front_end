import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import DisplayFlashcard from '../Display_Flashcard/displayFlashcard';
import DisplayCollections from '../Display_collections/displayCollections';

function App() {
    const [collections, setCollections] = useState([]);

    useEffect(async()=> {
        let response = await axios.get('http://127.0.0.1:8000/collections/');
        setCollections(response.data)
    });

    return(
            <div>
                <DisplayCollections collections={collections}/>

            </div>
    );
  }
  
  export default App;
  