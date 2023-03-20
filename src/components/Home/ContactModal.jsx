import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './ContactModal.css'




export function ContactModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);


    const form = useRef(null);

    const [version, setVersion] = useState(0);

    function handleReset() {
      setVersion(version + 1);
    }

  const sendEmail = (e) => {
    e.preventDefault();


    //in order for process.env to work, variables must start with REACT_APP both where they are being used and in the .env

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        alert('Message sent successfully!')
          console.log(result.text)
          handleReset();
      }, (error) => {
        alert(JSON.stringify(error))
          console.log(error.text);
      });
  };

    return (
        <>
        <Button id='contactModal' variant="primary" onClick={handleShow}>
            Contact Me
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Contact Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form key={version} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send"/>
    </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}