
import './App.css';
import React, { useState } from 'react'
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm'

const App = () => {
  const usersData = [
    // { id: 1, name: '', username: '' },
    // { id: 1, name: 'Ivan', username: 'Hunter' },
    // { id: 1, name: 'Ivan', username: 'Hunter' },
  ]
  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }
  return (
    <div className="container">
      <h1>Notes App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit note</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add Note</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Notes</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>

    </div>
  );
}

export default App;
