import React from 'react';
import { Form, Button } from "react-bootstrap"

import {CourseContext} from '../../../Contexts/CourseContext';
import {useContext, useState} from 'react';



const AddForm = () =>{
    const {addCourses} = useContext(CourseContext);

    const [newCourse, setnewCourse] = useState({
      
            coursename:"", subject:"", publisher:"", subject_diffuculty:""
    });

    const onInputChange = (e) => {
        setnewCourse({...newCourse,[e.target.name]: e.target.value})
    }

    const {coursename, subject, publisher, subject_diffuculty} = newCourse;

    const handleSubmit = (e) => {
        e.preventDefault();
        addCourses(coursename,subject,publisher,subject_diffuculty);

    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Coursename *"
                    name="coursename"
                    value={coursename}
                    onChange = { (e) => onInputChange(e)}
                   // required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="subject *"
                    name="subject"
                    value={subject}
                    onChange = { (e) => onInputChange(e)}
                   // required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="publisher"
                    name="publisher"
                    value={publisher}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="subject_diffuculty *"
                    name="subject_diffuculty"
                    value={subject_diffuculty}
                    onChange = { (e) => onInputChange(e)}
                   // required
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New  Course
            </Button>
        </Form>

    )
}

export default AddForm;