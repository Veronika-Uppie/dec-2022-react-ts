import React from 'react';
import {useLocation} from "react-router-dom";

const PostDetails = () => {

    let {state} = useLocation();

    return (
        <div>
            <div>UserId: {state.userId}</div>
            <div>Title: {state.title}</div>
            <div>Title: {state.body}</div>
        </div>
    );
};

export default PostDetails;