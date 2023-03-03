import React, { useState } from 'react'
import './AddUser.css';
import { FaAdd, FaPlus } from 'react-icons/fa';

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.username) return

        props.addUser(user)
        setUser(initialFormState)
      }}
      className='form-table'
    >
      <label>Title</label> <br/>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        placeholder='Title...'
      />
      <br/>
      
      <label>Notes</label><br/>
      <textarea
      
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
        placeholder='Type your notes....'
      />
      <br/>
      <button><FaPlus/> Add note</button>
    </form>
  )
}

export default AddUserForm;