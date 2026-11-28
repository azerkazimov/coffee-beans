// import { useEffect, useState } from "react"
export interface User {
  id: number,
  name: string,
  email: string,
  adress: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  }
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}


export default async function ProductPage() {

  const userData = await fetch("https://jsonplaceholder.typicode.com/users")
  const users: User[] = await userData.json()

  console.log(userData)
  console.log(users)


  return (
    <div className="min-h-screen mt-20">
      <div className="text-center text-4xl font-playfair text-white">Our team</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
        {users.map((user)=> (
          <div key={user.id} className="border-2 border-white p-4">
            <h2 className="text-2xl font-playfair text-white">{user.name}</h2>
            <p className="text-sm text-white">{user.email}</p>
            <p className="text-sm text-white">{user.phone}</p>
            <p className="text-sm text-white">{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  )
}