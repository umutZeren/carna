import React from 'react';
import { Form, Button } from "react-bootstrap"

import {UserContext} from '../../Contexts/UserContext';
import {useContext, useState} from 'react';



const AddForm = () =>{
    const {addEmployee} = useContext(UserContext);

    const [newEmployee, setNewEmployee] = useState({
        name:"", email:"", phone:"", address:""
    });

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
    }

    const {name, email, phone, address} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("type ",typeof addEmployee);
        addEmployee(name,email,phone,address);
        console.log("AFTER ",typeof addEmployee);

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
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
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