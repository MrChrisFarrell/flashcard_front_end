import React from 'react';

const DisplayCollections =(props)=> {
    const collections = props.collections.map((collection, index)=>
        <span style={{margin: "4px"}}>
            <button onClick={()=>props.changeCollectionIndex(index)}>{collection.name}</button>
        </span>
    );

    return(
        <div style={{margin: "2px", border: "solid black 2px"}}>
            <h2>Collections</h2>
            {collections}
        </div>
    )
}

export default DisplayCollections;