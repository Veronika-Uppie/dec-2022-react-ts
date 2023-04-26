import React, {useState} from 'react';

function Cats({ dispatch }) {
    const [catName, setCatName] = useState('');

    const CatNameInput = (e) => {
        setCatName(e.target.value);
    };


    const saveCat = (e) => {
        dispatch({ type: 'addCat', payload: catName });
        setCatName('');
    };

    return (
        <div>
             Add Cat:
            <input type="text" value={catName} onChange={CatNameInput} required={true} />
            <button onClick={saveCat}>Save</button>
        </div>

    );
}


export default Cats;
