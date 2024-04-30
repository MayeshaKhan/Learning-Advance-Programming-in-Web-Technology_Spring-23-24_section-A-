import Link from "next/link"

const Navigation = () => {
  return (
    <div>
        <Link href='/'> Home</Link>
        <Link href='/login'> Login</Link>
        <Link href='/register'> Register</Link>
        
        
    </div>
  )
}

export default Navigation;
