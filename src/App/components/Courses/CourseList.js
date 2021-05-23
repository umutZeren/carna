import React , {useContext,useEffect,useState } from 'react'
import { Modal, Button, Alert} from 'react-bootstrap';
import Course from './Course';
import {CourseContext} from '../../../Contexts/CourseContext'
import AddForm from './AddForm';
import Pagination from '../Pagination';

const CourseList=() =>{
    const {courses}=useContext(CourseContext);
    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(5);

    useEffect(() =>{
        handleClose();
    },[courses]) 
    
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
    }, [courses]);

    

    if(!courses)
    return(<div></div>)
    else{
    courses.sort(function(a, b){
        return a.id - b.id;
    });

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentcourses= courses.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(courses.length / employeesPerPage);
    console.log("whaat !!",courses, totalPagesNum);
    
    return(

    <   > 
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Manage courses</h2>
                </div>
                <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success float-right" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Course</span></Button>					
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
                    <th>coursename</th>
                
                    <th>Publisher</th>
                    <th>Subject_diffuculty</th>
                    <th>Subject</th>
                  
                </tr>
            </thead>
            <tbody>
            {
                        currentcourses.map(usr => (
                                <tr key={usr.id}>
                                    <Course course={usr}/>
                                </tr>
                            ) )
            }
                
            </tbody>
        </table>  

        <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentUsers ={currentcourses}
                users = {courses} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Course
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

export default CourseList;
