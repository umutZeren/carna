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
                .catch(error=> console.log(error));
            },[]);

           const  addEmployee=((name, email, address, phone) => {
            console.log("inside this bro");
            setUsers(users,
            axios.post(url,{ "username": name,
            "password": "edf",
            "gender": "M",
            "age": 49,
            "email": email}).then(response=> {
            users.push(response.data);
            }).catch((error) => {
              if(error.response)
                console.log(error);
           
            }))
           });
        

     return(
        <UserContext.Provider value={{users ,addEmployee}}>
            {props.children}
        </UserContext.Provider>)

}

export default UserContextProvider;