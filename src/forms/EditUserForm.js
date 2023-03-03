import React, { useState } from 'react'
import './AddUser.css';

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
        
      }}
      className='form-table'
    >
      <label>Title</label> <br/>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      /><br/>
      <label>Notes</label><br/>
      <textarea
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      /><br/>
      <button>Update note</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button-muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm