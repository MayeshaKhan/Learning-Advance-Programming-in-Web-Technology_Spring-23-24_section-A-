'use client'

import { ChangeEvent, SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Update() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
 
  
  const [error, setError] = useState('');

  const router = useRouter();
  const { userId } = router.query;

  const handleChangeName = (e : ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeprice = (e : ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  
  

  const handleSubmit = (e : SyntheticEvent) => {
    e.preventDefault();
    if (!name || !price  )
       {
      console.log(name, price);
      setError('All fields are required');
    } 
    
    else {
     
    try {
      updateData()
      setError("user created successfully");
    } 
    catch (e : any) {
      setError(e);
    }
      setName('');
      setPrice('');
      
      setError('');
    }

  };
  async function updateData() {
   try {
    const jsonData = {
      name:name,
      price: price,
     
    }
    const response = await axios.patch(`http://localhost:3000/price/{id}`, jsonData);
    //${id}
     const data = response.data;
     console.log(data);
     } catch (error) {
     console.error(error);
     }
    }

  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={name} onChange={handleChangeName} />
        </div>
        <br/><br/>
        <div>
          <label>price: </label>
          <input type="price" name="price" value={price} onChange={handleChangeprice} />
        </div>
        <br/><br/>
        {error && <p>{error}</p>}
        <button type="submit">Update User</button>
      </form>
    </>
  );

};