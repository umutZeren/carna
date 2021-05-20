import React from 'react';
import UserContextProvider from '../../src/Contexts/UserContext'
import UserList from '../App/components/UsersList'
const f=()=>{
    return(
    <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <UserContextProvider>
          <UserList/>
        </UserContextProvider>
      </div>
    </div>
  </div>
    )

    

}
export default f;