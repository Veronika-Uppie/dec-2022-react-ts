import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../servises/user.service";

const UserForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode:'all'});

    const onSubmit = (data) => {
        // const {data} =  userService.create(user);
        console.log(data);
    }


    return (

        <div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input  placeholder={'name'} {...register('name',  {required:true})}/>
            <input  placeholder={'username'} {...register('username',  {required:true})}/>
            <input  placeholder={'email'} {...register('email',  {required:true})}/>

            <input type={"submit"} value={'Save'} disabled={!isValid}/>
        </form>

        </div>
    );
};

export default UserForm;