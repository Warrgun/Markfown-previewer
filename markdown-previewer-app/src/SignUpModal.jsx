import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AlertComponent from './Alert/AlertComponent';


function SignUpModal(props) {
  const [signAlert, setSignAlert] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    bool: false
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setSignAlert(false);
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      setValidated(false);

      setTimeout(() => {
        setSignAlert(true);
      }, 200);

      setTimeout(() => {
        setSignAlert(false);
      }, 2500);

      console.log('Name', formData.firstName);
      console.log('Email', formData.email);
      console.log('Password', formData.password);
      console.log('Signed', formData.bool);

      setFormData({
        firstName: '',
        email: '',
        password: '',
        bool: false
      })

      props.onHide()
    }
  }

  return (
    <>
      <Modal {...props} className=' text-bg-light  bg-dark-subtle' centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' name='firstName' pattern='[A-Za-z]{1,}' className=' input-border rounded-0 bg-transparent' placeholder='Enter first name' value={formData.firstName} onChange={handleChange} autoFocus required />
              <Form.Control.Feedback type="invalid">
                Provide a valid Name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label >Email adress</Form.Label>
              <Form.Control className=" input-border rounded-0 bg-transparent" pattern="[a-zA-Z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" type="email" name="email" placeholder="Enter email adress" value={formData.email} onChange={handleChange} required />
              <Form.Control.Feedback type="invalid">
                Provide a valid Email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control className=" input-border rounded-0 bg-transparent" pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange} required />
              <Form.Control.Feedback type="invalid">
                Your password must be at least 8 characters long, include a capital letter and a number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" name='bool' className='custom-checkbox' label="Keep me signed." checked={formData.bool} onChange={handleChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button className='button-one rounded-0 m-lg-2 me-2 fw-bold  input-focus' onClick={props.onHide}>
              Close
            </Button>
            <Button type='submit' className='button-two rounded-0 m-lg-2 fw-bold input-focus'>
              Sign Up
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <AlertComponent state={signAlert} message={'Succesfully signed up.'} />
    </>
  );
}

export default SignUpModal;