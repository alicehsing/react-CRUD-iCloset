import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getGarmentById } from './services/fetch-utils';


export default function DetailPage() {
  const [garment, setGarment] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchGarment() {
      const response = await getGarmentById(id);
      setGarment(response);
    }
    fetchGarment();
  }, [id]);

  function handleRedirect() {
    history.push(`/wardrobe/update/${id}`);
  }
  
  return (
    <div className='garment-detail'>
      <h2>{garment.description} {garment.style}</h2>
      <p>{garment.type}</p>
      <p>Brand: {garment.brand} </p>
      <p>Fabric: {garment.fabric}</p>
      <p>Bought for: {garment.cost}</p>
      <img className='garment-img-detail' src={garment.image}/>
      <div>
        <button onClick={handleRedirect}>Update</button>
      </div>
      
    </div>
  );
}
