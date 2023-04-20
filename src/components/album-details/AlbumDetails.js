import React from 'react';
import {useLocation} from "react-router-dom";

const AlbumDetails = () => {

    let {state} = useLocation();

    return (
        <div>
            <div>UserId: {state.userId}</div>
            <div>Title: {state.title}</div>
        </div>
    );
};

export default AlbumDetails;