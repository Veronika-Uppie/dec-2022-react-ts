import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Comment from "../comment/Comment";
import {commentService} from "../../services/comments.service";

const Comments = () => {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll()
            .then(value => value.data)
            .then(value => {
                setComments([...value]);
            });

        return () => {
            console.log('done');
        }

    }, []);




    return (
        <div>
            <h4>Post Details</h4>
            <Outlet/>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }

        </div>



    );
};

export default Comments;
