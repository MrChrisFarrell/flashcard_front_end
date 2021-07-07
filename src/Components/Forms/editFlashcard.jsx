import React, {useEffect} from 'react';
import useForm from './useForm';
import './forms.css';

const EditFlashcard = (props) => {
    const { values, handleChange, handleSubmit } = useForm(flashcardEdited)

    function flashcardEdited(){
        const flashcard = {
            term: values.term,
            definition: values.definition,
            collection: props.collectionIndex
        };
        props.putFlashcard(flashcard);
        alert('Flashcard edited!');
    }

    useEffect(()=>{

    },[flashcardEdited])

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
                <button type="submit">Edit Flashcard</button>
            </form>
        </div>
    );
};

export default EditFlashcard;