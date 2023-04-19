import Joi from "joi";

const carValidator = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Бренд має складатись з літер та містити 1-20 символів',
        'string.required':'Це поле обов\'язкове'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'Мінімальне значення 0',
        'number.max':'Максимальне значення 1000000',
        'number.required':'Це поле обов\'язкове'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'Мінімум 1990 рік',
        'number.max':'Максімум поточний рік',
        'number.required':'Це поле обов\'язкове'
    })
});

export {
    carValidator
}