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

import './App.css';
import Cats from "./components/cats/Cats";
import AnimalsInfo from "./components/animalsInfo/AnimalsInfo";
import Dogs from "./components/dogs/Dogs";
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";



function reducer(state, action) {
    switch (action.type) {
        case 'addCat':
            return { ...state, cats: [...state.cats, action.payload] };
        case 'addDog':
            return { ...state, dogs: [...state.dogs, action.payload] };
        case 'Delete':
            return { ...state,
                cats: state.cats.filter(cat => cat.id !== action.payload),
                dogs: state.dogs.filter(dog => dog.id !== action.payload)
            };
        default:
            return state;
    }
}

function App() {
    const [hidePosts, setHidePosts] = useState(true);
    const [hideComments, setHideComments] = useState(true);

    const [state, dispatch] = useReducer(reducer, { cats: [], dogs: [] });

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

            <div className="app-container">
                <Cats dispatch={dispatch} />
                <Dogs dispatch={dispatch} />
            </div>

            <div className="list-container">
                <AnimalsInfo pets={state.cats} dispatch={dispatch} />

                <AnimalsInfo pets={state.dogs} dispatch={dispatch} />
            </div>
        </div>
    );
}

export default App;




