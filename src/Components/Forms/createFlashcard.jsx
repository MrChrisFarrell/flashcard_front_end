import React, {useEffect} from 'react';
import useForm from './useForm';
import './forms.css';

const CreateFlashcard = (props) => {
    const { values, handleChange, handleSubmit } = useForm(flashcardCreated)

    function flashcardCreated(){
        const flashcard = {
            term: values.term,
            definition: values.definition,
            collection: props.collectionIndex
        };
        props.postFlashcard(flashcard);
        alert('Flashcard added to this collection!');
    }

    useEffect(()=>{

    },[flashcardCreated])

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>
                    Term:
                    <input
                        type="text"
                        name="term"
                        onChange={handleChange}
                        value={values.term}
                        required={true}
                    />
                </label>
                <label>
                    Definition:
                    <input
                        type="text"
                        name="definition"
                        onChange={handleChange}
                        value={values.definition}
                        required={true}
                    />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateFlashcard;