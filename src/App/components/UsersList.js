import React , {useContext} from 'react'
import User from './User';
import {UserContext} from '../../../src/Contexts/UserContext'

const UserList=() =>{
    const {users}=useContext(UserContext);
    console.log(users);
    return(
    <   > 
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Manage Users</h2>
                </div>
                <div className="col-sm-6">
                    <a href="#addEmployeeModal" className="btn btn-success float-sm-right" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New User</span></a>					
                </div>d
            </div>
        </div>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
            {
                        users["users"].map(usr => (
                                <tr key={usr.user_id}>
                                    <User users={usr}/>
                                </tr>
                            ) )
            }
                
            </tbody>
        </table>  
    </>  
    ) 
}

export default UserList;
