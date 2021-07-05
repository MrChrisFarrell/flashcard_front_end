import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayCollections =(props)=> {
    const collections = props.collections.map((collection, index)=>
        <div>
            <h1>Collection Name - {collection.name}   Collection Index - {index}</h1>
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