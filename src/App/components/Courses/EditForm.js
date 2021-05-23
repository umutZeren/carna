import { CourseContext } from "../../../Contexts/CourseContext";
import React,{useContext, useState} from 'react';
import { Form, Button } from "react-bootstrap"

const EditForm = ({theUser}) =>{

    const id = theUser.id;

    const [coursename, setCoursename] = useState(theUser.coursename);
    const [publisher, setPublisher] = useState(theUser.publisher);
    const [subject_diffuculty, setSubjectDiffuculty] = useState(theUser.subject_diffuculty);
    const [subject, setSubject] = useState(theUser.subject);
    console.log(theUser);
    const {updateCourse} = useContext(CourseContext);

    const updatedUser = {id,coursename, publisher, subject_diffuculty, subject}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCourse( updatedUser);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="coursename *"
                    name="coursename"
                    value={coursename}
                    onChange={(e)=> setCoursename(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="publisher"
                    name="publisher"
                    value={publisher}
                    onChange={(e)=> setPublisher(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="subject_diffuculty"
                    name="subject_diffuculty"
                    value={subject_diffuculty}
                    onChange={(e)=> setSubjectDiffuculty(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="subject"
                    name="subject"
                    value={subject}
                    onChange={(e)=> setSubject(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Course
            </Button>
        </Form>

     )
}

export default EditForm;