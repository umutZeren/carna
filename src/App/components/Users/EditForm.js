import { UserContext } from "../../../Contexts/UserContext";
import React,{useContext, useState} from 'react';
import { Form, Button } from "react-bootstrap"

const EditForm = ({theUser}) =>{

    const id = theUser.id;

    const [username, setUsername] = useState(theUser.username);
    const [age, setAge] = useState(theUser.age);
    const [gender, setGender] = useState(theUser.gender);
    const [email, setEmail] = useState(theUser.email);
    const [password, setPassword] = useState(theUser.password);
    console.log(theUser);
    const {updateUser} = useContext(UserContext);

    const updatedUser = {id,username,password, age, gender, email}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser( updatedUser);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Username *"
                    name="username"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="Age "
                    name="Age"
                    value={age}
                    onChange={(e)=> setAge(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Gender"
                    name="gender"
                    value={gender}
                    onChange={(e)=> setGender(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>

     )
}

export default EditForm;