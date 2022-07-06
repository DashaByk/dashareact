import React from 'react';
import {postFetch} from "../services/Form.users.api.services";
import {useForm} from "react-hook-form";


const FormUser = () => {
    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            id: 'id',
            name: 'name',
            email: 'email',
            address: {
                street: 'street',
                suite: 'suite',
                city: 'city',
                zipcode: 'zipcode',
                geo: {
                    lat: 'lat',
                    lng: 'lng'
                }
            }
        }
    })

    function submit(value) {
        postFetch(value)
            .then(value => console.log(value))
    }

    return (
        <div>
            <form onSubmit={
                handleSubmit(submit)
            }>

                <input type={"text"}{...register('name', {required: true})}/><br/>
                {errors.name && <span>ERROR</span>}
                <input type={"text"}{...register('email', {required: true})}/><br/>
                {errors.email && <span>ERROR</span>}
                <input type={"text"}{...register('street', {required: true})} defaultValue={'street'}/><br/>
                {errors.street && <span>ERROR</span>}
                <input type={"text"}{...register('suite', {required: true})} defaultValue={'suite'}/><br/>
                {errors.suite && <span>ERROR</span>}
                <input type={"text"}{...register('city', {required: true})} defaultValue={'city'}/><br/>
                {errors.city && <span>ERROR</span>}
                <input type={"text"}{...register('zipcode', {required: true})} defaultValue={'zipcode'}/><br/>
                {errors.zipcode && <span>ERROR</span>}
                <input type={"text"}{...register('lat', {required: true})} defaultValue={'lat'}/><br/>
                {errors.lat && <span>ERROR</span>}
                <input type={"text"}{...register('lng', {required: true})} defaultValue={'lng'}/><br/>
                {errors.lng && <span>ERROR</span>}
                <button>
                    save
                </button>


            </form>

        </div>
    );
};

export default FormUser;
