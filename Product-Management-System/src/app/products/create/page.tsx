'use client'

import { ChangeEvent, SyntheticEvent, useState } from 'react';
import axios from 'axios';

export default function Create() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleChangeName = (e : ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e : ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
 
  
const handleSubmit = (e : SyntheticEvent) => {
    e.preventDefault();
    if (!name || !price )
       {
      console.log(name, price);
      setError('All fields are required');
    } 
    
    else {
     
    try {
      postData()
      setError("product created successfully");
    } 
    catch (e : any) {
      setError(e);
    }
      setName('');
      setPrice('');
      
      setError('');
    }

  };
  async function postData() {
   try {
    const jsonData = {
      name:name,
      price: price,
      
    }
    const response = await axios.post('http://localhost:3000/product', jsonData);
    
     const data = response.data;
     console.log(data);
     } catch (error) {
     console.error(error);
     }
    }

  return (
    <>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={name} onChange={handleChangeName} />
        </div>
        <br/><br/>
        <div>
          <label>Email: </label>
          <input type="number" name="price" value={price} onChange={handleChangePrice} />
        </div>
        <br/><br/>
        
        {error && <p>{error}</p>}
        <button type="submit">Create User</button>
      </form>
    </>
  );

};