import React from 'react';
import {Link} from "react-router-dom";

const Post = ({item}) => {
    return (
        <div>

            <Link to={item.id.toString()} state={{...item}}>

                <div>{item.title}</div>
            </Link>

        </div>
    );
};

export default Post;


