import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { updateGarment, getGarmentById } from './services/fetch-utils';

export default function UpdatePage() {

  const [style, setStyle] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [fabric, setFabric] = useState('');
  const [cost, setCost] = useState('');
  const [image, setImage] = useState('');
  const history = useHistory();    
  const { id } = useParams();

  useEffect(() => {
    async function fetchGarment() {
      const garment = await getGarmentById(id);
          //setting the form state based on an async call so that the come comes pre-filled
      setStyle(garment.style);
      setBrand(garment.brand);
      setType(garment.type);
      setDescription(garment.description);
      setFabric(garment.fabric);
      setCost(garment.cost);
      setImage(garment.image);
    }
    fetchGarment();
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    await updateGarment(id, {
      style: style,
      brand: brand,
      type: type,
      description: description,
      fabric: fabric,
      cost: cost,
      image: image
    });

      //redirect to wardrobe list page with updated garment info
    history.push('/wardrobe');
  }

  return (
    <div className='create'>
      <form onSubmit={handleUpdate}>
        <h2>Update My Garment</h2>
        <label>
            Style
          <input value={style} required name='style' onChange={e => setStyle(e.target.value)}/>
        </label>
        <label>
            Brand
          <input value={brand} required name='brand' onChange={e => setBrand(e.target.value)}/>
        </label>
        <label> 
          Type &nbsp;&nbsp;&nbsp;
          <select value={type} required onChange={e => setType(e.target.value)}>
            <option>Business Attire</option>
            <option>Casual Wear</option>
            <option>Formal Wear</option>
            <option>Lingerie</option>
            <option>Sports Wear</option>
            <option>Accessories</option>
          </select>
        </label>
        <label>
            Description
          <textarea value={description} required name='description' onChange={e => setDescription(e.target.value)}/>
        </label>
        <label>
            Fabric
          <input value={fabric} required name='fabric' onChange={e => setFabric(e.target.value)}/>
        </label>
        <label>
            Cost
          <input value={cost} required name='cost' placeholder='$' onChange={e => setCost(e.target.value)}/>
        </label>
        <label>
            Image URL
          <input value={image} required name='image' onChange={e => setImage(e.target.value)}/>
        </label>
        <button>Update Wardrobe</button>
      </form>

    </div>
  );
}
