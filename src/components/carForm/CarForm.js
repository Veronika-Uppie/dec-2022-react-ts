import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../servises/car.cervice";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode:'all', resolver:joiResolver(carValidator) });
    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})

        }
    }, [carForUpdate])
    const save = async (car)=>{
        const {data} = await carService.create(car);
        setAllCars(prev=>!prev)
        reset()
    }

    const update = async (car) =>{

    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input  placeholder={'brand'} {...register('brand')}/>
            {errors.brand&&<span>{errors.brand.message}</span>}
            <input  placeholder={'price'} {...register('price')}/>
            {errors.price&& <span>{errors.price.message}</span>}
            <input  placeholder={'year'} {...register('year')} />
            {errors.year&& <span>{errors.year.message}</span>}

            <input type={"submit"} value={carForUpdate?'Update':'Create'} disabled={!isValid}/>
        </form>
    );
};

export default CarForm;