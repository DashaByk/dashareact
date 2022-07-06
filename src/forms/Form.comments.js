import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {formComments} from "../services/Form.comments.api.services";

const FormComments = () => {
    let {register, handleSubmit, formState:{errors}} = useForm({
        userId: 'userId',
        id: 'id',
        title: 'title',
        body:'body'
    })
    function submit(data){
       formComments(data)
            .then(({data}) => console.log(data))
    }


    return (
        <div>
            <form onSubmit={
                handleSubmit(submit)
            }>

                <input type={"text"} {...register('name', {required: true})} defaultValue={'name'}/>
                {errors.name && <span>ERROR</span>}
                <input type={"text"} {...register('title',{required:true})} defaultValue={'title'}/>
                {errors.title && <span>ERROR</span>}
                <input type={"text"} {...register('body', {required:true})} defaultValue={'body'}/>
                {errors.body && <span>ERROR</span>}
                <button>Save</button>

            </form>
        </div>
    );
};

export default FormComments;