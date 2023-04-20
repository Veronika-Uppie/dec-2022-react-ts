import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Post from "../post/Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value]);
            });

        return () => {
            console.log('done');
        }

    }, []);




    return (
        <div>
            <h4>Related post</h4>
            <Outlet/>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }

        </div>



    );
};

export default Posts;