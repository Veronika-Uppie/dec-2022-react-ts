import React, {useEffect, useState} from 'react';
import {userService} from "../../servises/user.service";
import user from "../user/User";
import User from "../user/User";
import UserForm from "../userForm/UserForm";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.create().then(value => value.data).then(value => setUsers(value));
    }, []);
    return (
        <div>
            <UserForm/>
            {/*{users.map(user=> <User key={user.id} user={user}/>)}*/}
        </div>
    );
};

export default Users;