// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти
//
// Використовуючи хук useReducer в якому початковий стейт буде {cats: [], dogs:[]}
// Реалізвути збереження окремо нового кота, та окремо собаку (приклад на зображенні)
//
// Advance
// реалізувати видалення для кожного при натисканні на кнопку delete


import React, {useReducer, useState} from 'react';
import './App.css';
// import Cats from "./components/cats/Cats";
// import Dogs from "./components/dogs/Dogs";
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";

// function reducer(state, action) {
//     switch (action.type) {
//         case 'addCat':
//             return {...state, cats: [...state.cats, action.payload]};
//         case 'addDog':
//             return {...state, dogs: [...state.dogs, action.payload]};
//         case 'deleteCat':
//             return { ...state, cats: state.cats.filter(cat => cat !== action.payload) };
//         case 'deleteDog':
//             return { ...state, dogs: state.dogs.filter(dog => dog !== action.payload) };
//         default:
//             return state;
//     }
// }

function App() {
    const [hidePosts, setHidePosts] = useState(true);
    const [hideComments, setHideComments] = useState(true);

    // const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>

            <div>
                <button onClick={()=> setHidePosts(prevState => !prevState)}>Posts</button>
                {hidePosts&&<Posts/>}
            </div>
            <div>
                <button onClick={()=> setHideComments(prevState => !prevState)}>Comments</button>
                {hideComments&&<Comments/>}
            </div>



            {/*<div className="app-container">*/}
            {/*    <Cats dispatch={dispatch} />*/}
            {/*    <Dogs dispatch={dispatch} />*/}
            {/*</div>*/}

            {/*<div className="list-container">*/}
            {/*    <div className="animals_info">*/}
            {/*        <h2>Cats:</h2>*/}
            {/*        <ul>*/}
            {/*            {state.cats.map((cat, index) => (*/}
            {/*                <li key={cat}>*/}
            {/*                    {cat}*/}
            {/*                    <button onClick={()=> dispatch({ type: 'deleteCat', payload: cat})}>Delete</button>*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*    <div className="animals_info">*/}
            {/*        <h2>Dogs:</h2>*/}
            {/*        <ul>*/}
            {/*            {state.dogs.map((dog, index) => (*/}
            {/*                <li key={index}>*/}
            {/*                    {dog}*/}
            {/*                    <button onClick={()=> dispatch({ type: 'deleteDog', payload: dog})}>Delete</button>*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </div>*/}

            {/*</div>*/}



        </div>

    );
}
export default App;
