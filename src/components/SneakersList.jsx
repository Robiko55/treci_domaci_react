import React, {useState,useEffect} from "react";
import '../App';
import {API_URL} from '../Api'; 
import axios from 'axios';
import { useAppContext } from "./context/appContext";
import {useNavigate} from 'react-router-dom';

const SneakersList = () => {


    const [sneakers,setSneakers] = useState([]);

    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();

    const navigate = useNavigate();


    const favoritesChecker = (id) => {

        const boolean = favorites.some((sneaker)=> sneaker.id === id);
        return boolean;

    };

    useEffect(() => { 
        axios.get(API_URL).then(res=> {
            console.log(res.data)
            setSneakers(res.data)
        }).catch(err=>console.log(err))
    },[])

    
    return (   
    <div className ='sneakers-list'> 
           {sneakers.map((sneaker)=>(
        <div key={sneaker.id} className="sneaker">
                <div>
                    <h3>{sneaker.title}</h3>
                    </div>
                <div>
                    <img src={sneaker.media.thumbUrl} alt="#" onClick={()=>navigate(`/sneakers/${sneaker.id}`)}/>
                    </div> {/* Prikaz slika patika na sajtu preuzet sa apia*/}
                <div>
                {favoritesChecker(sneaker.id) ? (

                    <button onClick={()=> removeFromFavorites(sneaker.id)}>
                        Remove from Favorites
                        </button>
                ) : (
                    <button onClick={()=> addToFavorites(sneaker)}>
                        Add to Favorites
                        </button>
                )}
            </div>
            </div>
        ))}
            </div>
    );
    
};

export default SneakersList