import React from 'react';
import { Link } from 'react-router-dom';


export default function Garment({ garment }) {
 
  return (
// wrap Link component in a react-router link that takes the user to the correct detail page
    <Link to={`/wardrobe/${garment.id}`}>
      <div className='garment'>
        <p>{garment.style}</p>
        <p>{garment.description}</p>
        <img className='garment-img' src={garment.image}/>
      </div>
    </Link>
    
  );
}
