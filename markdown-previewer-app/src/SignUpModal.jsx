import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SignUpModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className='button-one rounded-0 m-lg-2 me-2 fw-bold input-control'>Sign Up</Button>
      <Modal show={show} onHide={handleClose} data-bs-theme="light" className=' text-bg-light  bg-dark-subtle' centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className=''>
            <Form.Group controlId='formName'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' name='name' className='input-control rounded-0 bg-transparent' style={{border:"solid 2px var(--folly)"}} placeholder='Enter first name' autoFocus required/>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label >Email address</Form.Label>
              <Form.Control className="input-control rounded-0 bg-transparent" style={{border:"solid 2px var(--folly)"}} type="emial" name="email" placeholder="Enter email adress" required/>
              <Form.Control.Feedback type="invalid">
                  Provide correct Email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className="input-control rounded-0 bg-transparent" type="password" style={{border:"solid 2px var(--folly)"}} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" className='custom-checkbox' label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='button-one rounded-0 m-lg-2 me-2 fw-bold input-control' onClick={handleClose}>
            Close
          </Button>
          <Button className='button-two rounded-0 m-lg-2 fw-bold input-control' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUpModal;