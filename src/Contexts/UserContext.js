import { createContext } from "react";

import React, {useState,useEffect} from 'react'
import axios from 'axios'
//import { response } from "express";

export const  UserContext = createContext();

const UserContextProvider = (props) =>{

    //get all users list via db on the cloud using rest-api via axios
    const  [users, setUsers]=useState();

  let url='https://db-users.herokuapp.com/rest-api/users/';
       /* if(!isAll)
            url+=`${index}/`*/
        useEffect( ()=>{
                axios.get(url)
                .then(response=> setUsers(response.data))
                .catch(error=> console.log(error));
            },[]);

           const  addUsers=((name, email, age, gender) => {
            console.log("inside this bro");
            setUsers(users,
            axios.post(url,{ "username": name,
            "password": "defaultpass",
            "gender": gender,
            "age": age,
            "email": email}).then(response=> {
              window.location.reload();
            }).catch((error) => {
              if(error.response)
                console.log(error);
            }))
           });
        
           const  deleteUsers=((id) => {
            console.log("inside delte bro,id", id);
            setUsers(users,
            axios.delete(url+`${id}/`)
            .then(response=> {
              window.location.reload();
            })
            .catch((error) => {console.log(error);} )
          )});
            
          const  updateUser=((user) => {
            
            setUsers(users,
            axios.put(url+`${user.id}/`,user)
            .then(response=> {
              window.location.reload();
            })
            .catch((error) => {console.log(error);} )
          )});
          
     return(
        <UserContext.Provider value={{users , addUsers, deleteUsers, updateUser}}>
            {props.children}
        </UserContext.Provider>)

}

export default UserContextProvider;