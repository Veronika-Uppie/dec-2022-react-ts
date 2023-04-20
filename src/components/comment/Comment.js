import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({item}) => {
    return (
        <div>

            <Link to={item.id.toString()} state={{...item}}>
                <div>{item.postId}</div>
                <div>{item.name}</div>

            </Link>

        </div>
    );
};

export default Comment;