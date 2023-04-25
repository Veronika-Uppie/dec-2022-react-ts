import React, {useState} from 'react';

function Dogs({ dispatch }) {
    const [dogName, setDogName] = useState('');

    const handleDogNameChange = (e) => {
        setDogName(e.target.value);
    };

    const handleSaveDog = () => {
        dispatch({ type: 'addDog', payload: dogName });
        setDogName('');
    };

    return (
        <div>
            Add Dog:
            <input type="text" value={dogName} onChange={handleDogNameChange} />
            <button onClick={handleSaveDog}>Save</button>
        </div>
    );
}

export default Dogs;