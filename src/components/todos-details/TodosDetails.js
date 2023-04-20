import React from 'react';
import {useLocation} from "react-router-dom";

const TodosDetails = () => {

    let {state} = useLocation();

    return (
        <div>
            <div>UserId: {state.userId}</div>
            <div>Title: {state.title}</div>
            <div>Completed: {state.completed}</div>
        </div>
    );
};

export default TodosDetails;