import { createContext } from "react";

import React, {useState,useEffect} from 'react'
import axios from 'axios'

export const  CourseContext = createContext();

const CourseContextProvider = (props) =>{

    //get all courses list via db on the cloud using rest-api via axios
    const  [courses, setCourses]=useState();

    let url='https://db-users.herokuapp.com/rest-api/courses/';
       /* if(!isAll)
            url+=`${index}/`*/
        useEffect( ()=>{
                axios.get(url)
                .then(response=> setCourses(response.data))
                .catch(error=> console.log(error));
            },[]);

           const  addCourses=((coursename, subject, publisher, subject_diffuculty) => {
        
            setCourses(courses,
            axios.post(url,{ "coursename": coursename,
            "subject":subject,
            "publisher": publisher,
            "subject_diffuculty": subject_diffuculty
            }).then(response=> {
              window.location.reload();
            }).catch((error) => {
              if(error.response)
                console.log(error);
            }))
           });
        
           const  deleteCourses=((id) => {
            setCourses(courses,
            axios.delete(url+`${id}/`)
            .then(response=> {
              window.location.reload();
            })
            .catch((error) => {console.log(error);} )
          )});
            
          const  updateCourse=((user) => {
            
            setCourses(courses,
            axios.put(url+`${user.id}/`,user)
            .then(response=> {
              window.location.reload();
            })
            .catch((error) => {console.log(error);} )
          )});
          console.log(courses ,"courses");
     return(
        <CourseContext.Provider value={{courses , addCourses, deleteCourses, updateCourse}}>
            {props.children}
        </CourseContext.Provider>)

}

export default CourseContextProvider;