import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Comment = ({item}) => {
    let navigate = useNavigate();
    return (
        <div>

            {/*<Link to={item.id.toString()} state={{...item}}>*/}
                <div>{item.postId}</div>
                <div>{item.name}</div>

            {/*</Link>*/}

            <button onClick={()=> {
                navigate(item.id.toString());
            }}>Related post</button>

        </div>
    );
};

export default Comment;