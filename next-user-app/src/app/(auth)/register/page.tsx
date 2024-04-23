 
import { redirect, useRouter } from "next/navigation"
import router from "next/router";
 const signup = () => {
  router.push("/home");

}
 
 const Register = () => {
    
  const router = useRouter();
    return (
      <div>
        <h1>Signup Page</h1>
        <form >
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required /><br /><br />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br /><br />
  
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required /><br /><br />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required /><br /><br />
  
          <button onClick={signup}>Sign Up</button>
        </form>
      </div>
    );
  };
  
  export default Register;
  
  export const generateMetadata = () => {
    return {
      title: 'Register Page',
      description: 'This is the registration page created by the app owner.'
    };
  };
  