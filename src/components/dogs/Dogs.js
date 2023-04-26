import { useState } from 'react';

function Dogs({ dispatch }) {
    const [dogName, setDogName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'addDog', payload: { name: dogName, id: Date.now() } });
        setDogName('');
    };

    const isFormValid = dogName !== '';

    return (
        <div>
            Add Dog:
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter dog name" value={dogName} onChange={event => setDogName(event.target.value)}/>
                <button type="submit" disabled={!isFormValid}>Save</button>
            </form>
        </div>
    );
}

export default Dogs;



// import React, {useState} from 'react';
//
// function Dogs({ dispatch }) {
//     const [dogName, setDogName] = useState('');
//
//     const handleDogNameChange = (e) => {
//         setDogName(e.target.value);
//     };
//
//     const saveDog = () => {
//         dispatch({ type: 'addDog', payload: dogName });
//         setDogName('');
//     };
//
//     return (
//         <div>
//             Add Dog:
//             <input type="text" value={dogName} onChange={handleDogNameChange} />
//             <button onClick={saveDog}>Save</button>
//         </div>
//     );
// }
//
// export default Dogs;