import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createGarment } from './services/fetch-utils';

export default function CreatePage() {
    //set state: 
  const [style, setStyle] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [fabric, setFabric] = useState('');
  const [cost, setCost] = useState('');
  const [image, setImage] = useState('');
  const history = useHistory();
  
  async function handleSubmit(e) {
    e.preventDefault();

    await createGarment({
      style: style,
      brand: brand,
      type: type,
      description: description,
      fabric: fabric,
      cost: cost,
      image: image
    });

    //use history.push to send the user to the wardrobe list page
    history.push('/wardrobe');
  }

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Add new garment</h2>
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
        <button>Add to Wardrobe</button>
      </form>

    </div>
  );
}
