"use client"
import Link from "next/link";
export default function customerHome() {

  return (
    <>
      <h1>Welcome Admin</h1>
      <Link href="/allUsers">See all user</Link>
      <Link href="/create">Create user</Link>
      <Link href="/update">Update user</Link>
      <Link href="/delete">Delete user</Link>
      
    </>



  );
}
