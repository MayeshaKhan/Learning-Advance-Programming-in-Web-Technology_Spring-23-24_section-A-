'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllProduct() {
  const [product, setProduct] = useState<any[]>([]); 

  useEffect(() => {
   
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product');
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers(); 
  }, []); 

  return (
    <div>
      <h1>Products List</h1>
      <ul>
        {product.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}


