import React from 'react';
import Garment from './Garment';

export default function GarmentsList({ clothings }) {
  return (
    <div className='garment-list'>
      {
        clothings.map((garment, i) => <Garment key={`{garment.id}-${i}`} garment={garment}/>)
      }
    </div>
  );
}
  

