import React, {useEffect, useState} from 'react';
import Todo from "../todo/Todo";
import {Outlet} from "react-router-dom";
import {todoService} from "../../services/todo.service";

const Todos = () => {
    let [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll()
            .then(value => value.data)
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