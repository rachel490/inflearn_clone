import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap'
import Logo from '../Logo/Logo'
import {Button as StButton} from '../style/style'

function SignInModal({show, onHide}) {
  return (
    <Modal
      show = {show}
      onHide = {onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <Logo />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <form >
        <input type='text' placeholder='이메일 또는 아이디 입력'></input>
        <input type='password' placeholder='비밀번호'></input>
        <StButton bgColor='#00c471'>로그인</StButton>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignInModal;
