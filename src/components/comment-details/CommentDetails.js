import React from 'react';
import {useLocation} from "react-router-dom";

const CommentDetails = () => {

    let {state} = useLocation();

    return (
        <div>
            <div>PostId: {state.postId}</div>
            <div>Name: {state.name}</div>
            <div>Email: {state.email}</div>
            <div>Body: {state.body}</div>
        </div>
    );
};

export default CommentDetails;

