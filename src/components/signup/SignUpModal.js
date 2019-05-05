import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SignUpForm from './SignUpForm';

const SignUpModal = () => (
  <Modal size='small' 
  style={{
      background:'null'
  }}
  trigger={<Button inverted={false} style={{ marginLeft: '0.5em' }}>Sign Up</Button>}>
    <SignUpForm />
  </Modal>
)

export default SignUpModal
