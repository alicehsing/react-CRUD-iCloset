import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGarmentById } from './services/fetch-utils';


export default function DetailPage() {
  const [garment, setGarment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchGarment() {
      const response = await getGarmentById(id);
      setGarment(response);
    }
    fetchGarment();
  }, [id]);
  
  return (
    <div className='garment-detail'>DetailPage
      <h2>{garment.description}{garment.style}</h2>
      <h3>Style: {garment.style}</h3>
      <p>Brand: {garment.brand} </p>
      <p>Fabric: {garment.fabric}</p>
      <p>Bought for: {garment.cost}</p>
      <img src={garment.image}/>
    </div>
  );
}
