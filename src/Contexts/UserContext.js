import { createContext } from "react";

import React, {useState,useEffect} from 'react'
import axios from 'axios'

export const  UserContext = createContext();

const UserContextProvider = (props) =>{

    //get all users list via db on the cloud using rest-api via axios
    const  [users, setUsers]=useState(null);
    let url='https://db-users.herokuapp.com/rest-api/users/';
       /* if(!isAll)
            url+=`${index}/`*/
        useEffect( ()=>{
                axios.get(url)
                .then(response=> setUsers(response.data))
                //.then(response =>(console.log("this USEEER",response)))
              // .catch(error=> console.log(error));
            },[url]);
          //  console.log("this is users",users);
          //useEffect();
     return(
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>)

}

export default UserContextProvider;