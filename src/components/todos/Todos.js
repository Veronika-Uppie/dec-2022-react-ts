import React, {useEffect, useState} from 'react';
import Todo from "../todo/Todo";
import {Outlet} from "react-router-dom";

const Todos = () => {
    let [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => {
                setTodos([...value]);
            });

        return () => {
            console.log('done');
        }

    }, []);
    return (
        <div>
            <h4>todoDetails</h4>
            <Outlet/>

            {
                todos.map(value => <Todo key={value.id} item={value}/>)
            }




        </div>
    );
};

export default Todos;