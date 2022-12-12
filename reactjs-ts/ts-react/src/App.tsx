import React, { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import UserForm, { UserFormString } from './components/forms/Users'

type User = UserFormString & { id: number }

function App() {
  const [users, setUsers] = useState<User[]>([])
  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: User[] = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className='App'>
      <ul>
        {users.map((user) => (
          <li key={user.id} >{user.name}</li>
        ))}
      </ul>
      <UserForm
        handleSubmit={(user) => {
          setUsers([...users, {...user, id: Date.now()}])
        }}
      />
    </div>
  )
}

export default App
