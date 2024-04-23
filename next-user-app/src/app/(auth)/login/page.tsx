'use client'

import { redirect, useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter();

  const newAccount = () => {
    router.push("/register");
    
    
  }
  const login = () => {
    router.push("/home");

  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required /><br /><br />
      
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required /><br /><br />
      
      <button onClick={login}>Login</button>
    </form>
      
      <button onClick={newAccount}>Create New Account</button>
    </div>
  )
}

export default Login;

