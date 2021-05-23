import React, {useContext, useState, useEffect} from 'react';
import {UserContext} from '../../../Contexts/UserContext';
import {  Modal, Button,OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'

const Users = ({user}) =>{
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [user])


    const {deleteUsers} =useContext(UserContext);
    return (
        <>
          <td>
            {user.id}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.age}
            </td>
            <td>
            {user.gender}
            </td>
            <td>
            {user.email}
            </td>
            <td>
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
                    <button onClick={ () => deleteUsers(user.id)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit user
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm theUser={user} />
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
export default Users;