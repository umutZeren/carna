import React, {useContext, useState, useEffect} from 'react';
import {CourseContext} from '../../../Contexts/CourseContext';
import {  Modal, Button,OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'

const Course = ({course}) =>{
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [course])


    const {deleteCourses} =useContext(CourseContext);
    return (
   
        <>
            <td>
            {course.id}
            </td>
          <td>
            {course.coursename}
            </td>
            <td>
                {course.publisher}
            </td>
            <td>
            {course.subject_diffuculty}
            </td>
            <td>
                {course.subject}
            </td>
       
           
         
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={ () => deleteCourses(course.id)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit course
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm theUser={course} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
        
        </>

    )

}
export default Course;