import { createContext } from "react";

import React, {useState,useEffect} from 'react'
import axios from 'axios'
//import { response } from "express";
import {getUsers} from "../Demo/Login/TokenAction";
import t from "../Demo/Login/Login"
import {connect} from 'react-redux'





export const  UserContext = createContext();

const UserContextProvider = (props) =>{

    //get all users list via db on the cloud using rest-api via axios
    const  [users, setUsers]=useState();
    let tk =window.localStorage.getItem("token");

    var config = {
      headers: {
        "Authorization":"Token "+tk,
      }
    }
    
  let url='https://db-users.herokuapp.com/rest-api/users/';
       
        useEffect( ()=>{
              console.log((t));
                axios.get(url,config)
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
            "email": email},config).then(response=> {
              window.location.reload();
            }).catch((error) => {
              if(error.response)
                console.log(error);
            }))
           });
        
           const  deleteUsers=((id) => {
            setUsers(users,
            axios.delete(url+`${id}/`,config)
            .then(response=> {
              window.location.reload();
            })
            .catch((error) => {console.log(error);} )
          )});
            
          const  updateUser=((user) => {
            
            setUsers(users,
            axios.put(url+`${user.id}/`,user,config)
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




//const mapStateToProps  = (state) => ({token:state.token})

//export default connect(mapStateToProps, {getUsers})(UserContextProvider)
export default UserContextProvider;