import { useState } from 'react';


function Cats({ dispatch }) {
    const [catName, setCatName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'addCat', payload: { name: catName, id: Date.now() } });
        setCatName('');
    };

    const isFormValid = catName !== '';

    return (
        <div>
            Add Cat:
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter cat name" value={catName} onChange={e => setCatName(e.target.value)}/>
                <button type="submit" disabled={!isFormValid}>Save</button>
            </form>
        </div>
    );
}

export default Cats;



// import React, {useState} from 'react';
//
// function Cats({ dispatch }) {
//     const [catName, setCatName] = useState('');
//
//     const CatNameInput = (e) => {
//         setCatName(e.target.value);
//     };
//
//
//     const saveCat = (e) => {
//         dispatch({ type: 'addCat', payload: catName });
//         setCatName('');
//     };
//
//     return (
//         <div>
//              Add Cat:
//             <input type="text" value={catName} onChange={CatNameInput} required={true} />
//             <button onClick={saveCat}>Save</button>
//         </div>
//
//     );
// }
//
//
// export default Cats;
