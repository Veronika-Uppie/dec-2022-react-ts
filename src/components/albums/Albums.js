import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Album from "../album/Album";

const Albums = () => {
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => {
                setAlbums([...value]);
            });

        return () => {
            console.log('done');
        }

    }, []);
    return (
        <div>
            <h4>Albums Details</h4>
            <Outlet/>

            {
                albums.map(value => <Album key={value.id} item={value}/>)
            }


        </div>
    );
};

export default Albums;