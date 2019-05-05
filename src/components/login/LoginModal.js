import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import LoginForm from './LoginForm';

const LoginModal = () => (
  <Modal size='small' 
  style={{
      background:'null'
  }}
  trigger={<Button inverted={false}>Log In</Button>}>
    <LoginForm />
  </Modal>
)

export default LoginModal
