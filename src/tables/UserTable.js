import React from "react"
import './UserTable.css'
import { FaBeer, FaEdit, FaTrash } from 'react-icons/fa';

const UserTable=(props)=>(
    <div className="note">
        
        <div>
            {props.users.length>0?(
                props.users.map((user)  => (
                    <div key={user.id} className="note-body">
                        <h4>{user.name}</h4>
                        <div>{user.username}</div>
                   
                
                <div>
                    <button
                    onClick={() => {
                        props.editRow(user)
                      }}
                      className="button-edit"
                    >
                        <FaEdit/>
                    </button>
                    <button
                    onClick={()=>props.deleteUser(user.id)}
                    className="button muted-button"
                    >
                        <FaTrash/>
                    </button>
                </div>
            </div>
                ))
) : (
    <div>
        <div colSpan={3}>No notes!</div>
    </div>
)}
        </div>
    </div>
)
export default UserTable