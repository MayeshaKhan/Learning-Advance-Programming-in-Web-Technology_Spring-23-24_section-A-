import Link from "next/link"

const Navigation = () => {
  return (
    <div>
        <Link href='/'> Home</Link>
        <Link href='/search'> Search Employee</Link>
        <Link href='/register'> Register</Link>
        <Link href='/update'> Update</Link>
        <Link href='/delete'> Delete</Link>
        
    </div>
  )
}

export default Navigation;
