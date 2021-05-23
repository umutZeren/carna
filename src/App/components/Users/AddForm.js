import React from 'react';
import { Form, Button } from "react-bootstrap"

import {UserContext} from '../../../Contexts/UserContext';
import {useContext, useState} from 'react';



const AddForm = () =>{
    const {addUsers} = useContext(UserContext);

    const [newEmployee, setNewEmployee] = useState({
       
        name:"", email:"", age:"", gender:""
    });

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
    }

    const {name, email, age, gender} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        addUsers(name,email,age,gender);

    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                   // required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                   // required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Age"
                    name="age"
                    value={age}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Gender"
                    name="gender"
                    value={gender}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New User
            </Button>
        </Form>

     )
}

export default AddForm;