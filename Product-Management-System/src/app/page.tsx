
import Link from "next/link";



export default function Home() {

  return (
    <>
      <h1>Welcome Admin!</h1>


      <ul>
        
        <li><Link href="/customers/allUsers">See All Users</Link></li>
        <li><Link href="/customers/create">Register Employee</Link></li>
        <li><Link href="/product/update">Update Employee</Link></li>
        <li><Link href="/delete">Delete Employee</Link></li>
        


      </ul>
      
    </>



  );
}




