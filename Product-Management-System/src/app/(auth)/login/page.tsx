'use client'
import axios from "axios";
import { redirect, useRouter } from "next/navigation"
import { ChangeEvent, SyntheticEvent, useState } from "react";

const Login = () => {
  const router = useRouter();

  const newAccount = () => {
    router.push("/register");
  }
    const logged = () => {
      router.push("/customerHome");
  
}

const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangeEmail = (e : ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e : ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
 
  
const handleSubmit = (e : SyntheticEvent) => {
    e.preventDefault();
    if (!email || !password )
       {
      console.log(email, password);
      setError('All fields are required');
    } 
    
    else {
     
    try {
      postData()
      setError("Logged in");
    } 
    catch (e : any) {
      setError(e);
    }
      setEmail('');
      setPassword('');
      
      setError('');
    }

  };
  async function postData() {
   try {
    const jsonData = {
      email:email,
      password: password,
      
    }
    const response = await axios.post('http://localhost:3000/auth/login', jsonData);
    
     const data = response.data;
     console.log(data);
     } catch (error) {
     console.error(error);
     }
    }
  return (
    <div>
    
      <h1>Login Page</h1>
      <form >
        
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={email} onChange={handleChangeEmail} />
        </div>
        <br/><br/>
        <div>
          <label>Password: </label>
          <input type="password" name="password" value={password} onChange={handleChangePassword} />
        </div>
        <br/><br/>
        
        
        {error && <p>{error}</p>}
        <button onClick={logged}>Login</button>
      </form>
      <p>Create New account? </p>
      <button onClick={newAccount}>Click Here</button>
    </div>
  )
}

export default Login;
