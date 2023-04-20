import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const Post = () => {

    let [post, setPost] = useState(null);

    let {postId} = useParams();

    useEffect(()=> {
        postService.getById(postId)
            .then(value => value.data)
            .then(value => setPost(value));
    }, [postId]);

    return (
        <div>

            {
                post&&
                (<div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>


                </div>)

            }

        </div>
    );
};

export default Post;


