import React, { useState, useEffect } from 'react';
import { getWardrobe } from './services/fetch-utils';
import GarmentsList from './GarmentsList';

export default function ListPage() {
  // state to hold onto the array of clothings
  const [clothings, setClothings] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredGarment, setFilteredGarment] = useState([]);
  //fetch the clothings on load and inject them into state
  useEffect(() => {
    async function fetchWardrobe() {
      const data = await getWardrobe();
      setClothings(data);
    }
    fetchWardrobe();
  }, []);

  // filter/search bar
  useEffect(() => {
    const currentFilter = clothings.filter(garment => garment.description.includes(search));
    setFilteredGarment(currentFilter);
  }, [search, clothings]);

  return (
    <div className='wardrobe-list-page'>
      <input value={search} placeholder='Search Wardrobe' type='text' onChange={e => setSearch(e.target.value)}/>
      <div>
        <GarmentsList clothings={
          filteredGarment.length
            ? filteredGarment
            : clothings
        } />
      </div>
    </div>
  );
}