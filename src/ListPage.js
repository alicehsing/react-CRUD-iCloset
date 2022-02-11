import React, { useState, useEffect } from 'react';
import { getWardrobe } from './services/fetch-utils';
import Garment from './Garment';
import './ListPage.css';

export default function ListPage() {
  // state to hold onto the array of clothings
  const [clothings, setClothings] = useState([]);
  //fetch the clothings on load and inject them into state
  useEffect(() => {
    async function fetchWardrobe() {
      const data = await getWardrobe();
      setClothings(data);
    }
    fetchWardrobe();
  }, []);

  return (
    <div className='wardrobe-list-page'>
      {
        clothings.map(garment => <Garment key={garment.id} garment={garment}/>)
      }
    </div>
  );
}
