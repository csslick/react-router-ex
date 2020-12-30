import React from 'react'

export default function Customers({users}) {
  console.log(users);
  return (
    <div>
      <h1>Customers</h1>
      <section>
        {users.map(user=> {
          return (
            <>
            <h3>{user.name}</h3>
            <img width="200" src={user.img} alt={user.name} />
            <p>{user.age}</p>
            </>
          )
        })}
      </section>
    </div>
  )
}
