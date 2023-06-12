import React, { useState, useEffect } from 'react';
import '../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SNEAKER_DETAILS_URL } from '../Api';

const SneakersDetails = () => {
  const [sneaker, setSneaker] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${SNEAKER_DETAILS_URL}/${id}`)
      .then((res) => {
        setSneaker(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="sneaker-details">
      <div>
        <h1>{sneaker?.title}</h1>
        {sneaker?.media && <img src={sneaker.media.thumbUrl} alt="#" />}
      </div>
      <div>
        <h2>Description</h2>
        <h3>{sneaker?.title}</h3>
        <h4>Brand: {sneaker?.brand}</h4>
        <h4>Price: {sneaker?.retailPrice}</h4>
        <h4>Release year: {sneaker?.year}</h4>
      </div>
    </div>
  );
};

export default SneakersDetails;