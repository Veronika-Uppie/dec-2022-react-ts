
import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Comment = ({item}) => {
    let navigate = useNavigate();
    return (
        <div>
            <div>{item.id}</div>
            <div>{item.postId}</div>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <div>{item.body}</div>

            <button onClick={()=> {
                navigate(`${item.postId}`)
            }}>Related post</button>

        </div>
    );
};

export default Comment;