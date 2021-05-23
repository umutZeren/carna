import React from 'react';
import CourseContextProvider from '../Contexts/CourseContext'
import CourseList from '../App/components/Courses/CourseList'
const f=()=>{
    return(
    <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <CourseContextProvider>
          <CourseList/>
        </CourseContextProvider>
      </div>
    </div>
  </div>
    )

    

}
export default f;