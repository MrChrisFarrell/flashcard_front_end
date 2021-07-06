import React from 'react';
import useForm from './useForm';
import './forms.css';

const CreateFlashcard = (props) => {
    const { values, handleChange, handleSubmit } = useForm(flashcardCreated)

    function flashcardCreated(){
        const flashcard = {
            term: values.term,
            definition: values.definition,
            collection: parseInt(values.collection)
        };
        props.postFlashcard(flashcard);
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Collection</label>
                <select name={values.collection}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
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