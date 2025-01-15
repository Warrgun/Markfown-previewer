import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function SignUpModal(props) {
  const [formData, setFormData] = useState({
    firstName:'',
    email:'',
    password:'',
    bool: false
  });

  const handleChange = e =>{
    const {name, value, type, checked} = e.target;

    setFormData(prev => ({...prev, [name]:type === 'checkbox'? checked : value}));

  };

  const handleSubmit = e =>{
    e.preventDefault();

    console.log('Name', formData.firstName);
    console.log('Email', formData.email);
    console.log('Password', formData.password);
    console.log('Ads', formData.bool);

    setFormData({
      firstName:'',
      email:'',
      password:'',
      bool: false
    })
  }

  return (
    <>
      <Modal {...props} className=' text-bg-light  bg-dark-subtle' centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' name='firstName' className=' input-border rounded-0 bg-transparent' placeholder='Enter first name' value={formData.firstName} onChange={handleChange} autoFocus required/>
            </Form.Group>
            <Form.Group>
              <Form.Label >Email address</Form.Label>
              <Form.Control className=" input-border rounded-0 bg-transparent" type="emial" name="email" placeholder="Enter email adress" value={formData.email} onChange={handleChange} required/>
              <Form.Control.Feedback type="invalid">
                  Provide correct Email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control className=" input-border rounded-0 bg-transparent" type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" name='bool' className='custom-checkbox' label="Keep you signed." checked={formData.bool} onChange={handleChange} />
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
    </>
  );
}

export default SignUpModal;