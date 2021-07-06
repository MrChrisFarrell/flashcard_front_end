import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayCollections =(props)=> {
    const collections = props.collections.map((collection, index)=>
        <div>
            <button onClick={()=>props.changeCollectionIndex(index)}>{collection.name}</button>
        </div>
    );

    return(
        <div>
            <h2>Collections</h2>
            {collections}
        </div>
    )
}

export default DisplayCollections;