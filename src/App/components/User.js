import React from 'react'
const Users = ({users}) =>{
    return (
        <>
          <td>
            {users.id}
            </td>
            <td>
                {users.username}
            </td>
            <td>
                {users.age}
            </td>
            <td>
            {users.gender}
            </td>
            <td>
            {users.email}
            </td>
            <td>
            </td>
            <td>
                    <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
			</td>
        </>

    )

}
export default Users;