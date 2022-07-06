import React from 'react';
import axios from "axios";

    let axiosComment= axios.create({
            baseURL: 'http://jsonplaceholder.typicode.com/comments',
            headers:{'Content-Type': 'application/json; charset=UTF-8'}
        }
    )
   let formComments= (data)=> axiosComment.post('',{data:data})


export {formComments};