import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({item}) => {
    let navigate = useNavigate();
    return (
        <div>
            {item.title}

            <button onClick={() => {
                navigate(item.id.toString());
            }}>details</button>
        </div>
    );
};

export default Post;