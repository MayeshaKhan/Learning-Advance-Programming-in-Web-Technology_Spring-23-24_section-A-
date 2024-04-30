
'use client'

import axios from "axios";
import { redirect, useRouter } from "next/navigation"
import { ChangeEvent, SyntheticEvent, useState } from "react";

export default function Register () {
  const router = useRouter();

  const home = () => {
    router.push("/");
 
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');

  const handleChangeName = (e : ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e : ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangeUsername= (e : ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e : ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  

  const handleSubmit = (e : SyntheticEvent) => {
    e.preventDefault();
    if (!name || !email || !username ||!password )
       {
      console.log(name, email, username, password);
      setError('All fields are required');
    } 
    
    else {
     
    try {
      postData()
      setError("user created successfully");
    } 
    catch (e : any) {
      setError(e);
    }
      setName('');
      setEmail('');
      setUsername('');
      setPassword('');
      setError('');
    }

  };
  async function postData() {
   try {
    const jsonData = {
      name:name,
      email: email,
      username: username,
      password: password
    }
    const response = await axios.post('http://localhost:3000/auth/register', jsonData);
    
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
          <label>Email: </label>
          <input type="email" name="email" value={email} onChange={handleChangeEmail} />
        </div>
        <br/><br/>
        <div>
          <label>Username: </label>
          <input type="text" name="username" value={username} onChange={handleChangeUsername} />
        </div>
        <br/><br/>
        <div>
          <label>Password: </label>
          <input type="password" name="password" value={password} onChange={handleChangePassword} />
        </div>
        <br/><br/>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
        <button onClick={home}>Back to home</button>
      </form>
    </>
  );

};