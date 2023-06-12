import React, {useState,useEffect} from "react";
import '../App';
import {API_URL} from '../Api';
import axios from 'axios';
const SneakersList = () => {


    const [sneakers,setSneakers] = useState([]);

    useEffect(() => { 
        axios.get(API_URL).then(res=> {
            console.log(res.data)
            setSneakers(res.data)
        }).catch(err=>console.log(err))
    },[])

    return (
            <div className ='sneakers-list'> 
            SneakersList
            </div>
               
    )
}

export default SneakersList