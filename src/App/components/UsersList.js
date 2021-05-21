import React , {useContext,useEffect,useState } from 'react'
import { Modal, Button, Alert} from 'react-bootstrap';
import User from './User';
import {UserContext} from '../../../src/Contexts/UserContext'
import AddForm from './AddForm';
import Pagination from './Pagination';
const UserList=() =>{
    const {users}=useContext(UserContext);

    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(5);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [users]);

    

    if(!users)
    return(<div></div>)
    else{
        
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentUsers= users.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(users.length / employeesPerPage);
        return(
    <   > 
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Manage Users</h2>
                </div>
                <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success float-right" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New User</span></Button>					
                </div>
            </div>
        </div>
        <Alert show={showAlert} variant="success">
            User List Updated Succefully!
        </Alert>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
            {
                        currentUsers.map(usr => (
                                <tr key={usr.id}>
                                    <User users={usr}/>
                                </tr>
                            ) )
            }
                
            </tbody>
        </table>  

        <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentUsers ={currentUsers}
                users = {users} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    </>  
    ) }
}

export default UserList;
