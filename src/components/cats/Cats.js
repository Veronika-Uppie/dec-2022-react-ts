
import React, {useState} from 'react';


function Cats({ dispatch }) {
    const [catName, setCatName] = useState('');

    const handleCatNameChange = (e) => {
        setCatName(e.target.value);
    };

    const saveCat = () => {
        dispatch({ type: 'addCat', payload: catName });
        setCatName('');
    };

    return (
        <div>
             Add Cat:
            <input type="text" value={catName} onChange={handleCatNameChange} />
            <button onClick={saveCat}>Save</button>

        </div>

    );
}




export default Cats;
