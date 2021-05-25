import { createContext } from "react";

import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUsers} from "../Demo/Login/TokenAction";
export const  CourseContext = createContext();


const CourseContextProvider = (props) =>{

  let tk =window.localStorage.getItem("token");

  var config = {
    headers: {
      "Authorization":"Token "+tk,
    }
  }

    //get all courses list via db on the cloud using rest-api via axios
    const  [courses, setCourses]=useState();
    console.log(props.token);
    let url='https://db-users.herokuapp.com/rest-api/courses/';
  
    
 
        useEffect( ()=>{
                axios.get(url,config)
                .then(response=> setCourses(response.data))
                .catch(error=> console.log(error));
            },[]);

           const  addCourses=((coursename, subject, publisher, subject_diffuculty) => {
        
            setCourses(courses,
            axios.post(url,{ "coursename": coursename,
            "subject":subject,
            "publisher": publisher,
            "subject_diffuculty": subject_diffuculty
            },config).then(response=> {
              window.location.reload();
            }).catch((error) => {
              if(error.response)
                console.log(error);
            }))
           });
        
           const  deleteCourses=((id) => {
            setCourses(courses,
            axios.delete(url+`${id}/`,config)
            .then(response=> {
              window.location.reload();
            })
            .catch((error) => {console.log(error);} )
          )});
            
          const  updateCourse=((user) => {
            
            setCourses(courses,
            axios.put(url+`${user.id}/`,user,config)
            .then(response=> {
              window.location.reload();
            })
            .catch((error) => {console.log(error);} )
          )});
     return(
        <CourseContext.Provider value={{courses , addCourses, deleteCourses, updateCourse}}>
            {props.children}
        </CourseContext.Provider>)

}


const mapStateToProps  = (state) => ({token:state.token})

export default connect(mapStateToProps, {getUsers})(CourseContextProvider)
//export default CourseContextProvider;