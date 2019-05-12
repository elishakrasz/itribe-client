import React, { Component } from "react";
import {
  Form,
  Checkbox
} from "formsy-semantic-ui-react";
import {
  Button,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label
} from "semantic-ui-react";
import { Mutation } from "react-apollo";
import Error from "../../utilities/Error";
import { SIGNUP_USER } from "../../querries";
import { Link } from 'react-router-dom'
const itribeIcon = "../../itribe.png";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

const styles = {
    root: {
      marginTop: 18,
      // padding: '0 24px 24px 24px',
    },
  
    customErrorLabel: {
      color: '#f00',
      textAlign: 'center',
    },
  };
class SignUpValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log('state', this.state)
  };

  handleSubmit = (e, register) => {
    e.preventDefault();
    register().then(async ({ data }) => {
      // console.log('ficus', data.register.data);
    //   localStorage.setItem("token", data.register.token);
      // await this.props.refetch();
      this.clearState();
    this.props.history.push("/await-confirmation");
    });
  };

  validateForm = () => {
    const { firstName, email, password, passwordConfirmation } = this.state;
    const isInvalid =
      !firstName || !email || !password || password !== passwordConfirmation;
    return isInvalid;
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation
    } = this.state;

    const errorLabel = <Label color="red" pointing="left"/>;
    return (
      <div className="login-form">
        {/*
                Heads up! The styles below are necessary for the correct render of this example.
                You can do same with CSS, the main idea is that all the elements up to the `Grid`
                below must have a height of 100%.
              */}
        <style>
          {`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                  height: 100%;
                }
              `}
        </style>
        <Grid
          textAlign="center"
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#004D8A"
          }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h1" color="teal" textAlign="center">
              <Image as="a" href="http://localhost:3000" src={itribeIcon} size="massive" /> Sign Up for iTribe
            </Header>
            <Mutation
              mutation={SIGNUP_USER}
              variables={{ firstName, lastName, email, password }}
            >
              {(register, { data, loading, error }) => {
                return (
                  <Form
                    ref={ ref => this.form = ref }
                    onSubmit={e => this.handleSubmit(e, register)}
                    size="large"
                    name="test"
                  >
                    <Segment stacked>
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                        required
                        validations="isWords"
                        errorLabel={ <Label color="red" pointing/> }
                        validationErrors={{
                          isWords: 'No numbers or special characters allowed',
                          isDefaultRequiredValue: 'First Name is Required',
                        }}
                      />
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}
                        required
                        validations="isWords"
                        errorLabel={ <Label color="red" pointing/> }
                        validationErrors={{
                        isWords: 'No numbers or special characters allowed',
                        isDefaultRequiredValue: 'Last Name is Required',
                        }}
                      />
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail address"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                            validations="minLength:8"
                            validationErrors={{
                            minLength: 'Minimin of 8 characters',
                            isDefaultRequiredValue: 'Password is Required',
                            }}
                            errorLabel={ <div style={ styles.customErrorLabel }/> }
                            rootStyle={ styles.formElement }
                        />
                      <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Confirm Password"
                        type="password"
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        onChange={this.handleChange}
                        required
                            validations="minLength:8"
                            validationErrors={{
                            minLength: 'Minimin of 8 characters',
                            isDefaultRequiredValue: 'Password is Required',
                            }}
                            errorLabel={ <div style={ styles.customErrorLabel }/> }
                            rootStyle={ styles.formElement }
                      />
                      <Form.Field>
                        <Checkbox 
                            name="confirmation"
                            label="I agree to the Terms and Conditions"
                            validations="isTrue"
                            errorLabel={ <Label color="red" pointing="left"/> }
                            validationErrors={{
                                isTrue: 'You\'ll have to agree to the Terms and Conditions',
                            }} 
                        />
                      </Form.Field>
                      <Button color="teal" fluid size="large">
                        Sign Up
                      </Button>
                      {error && <Error error={error} />}
                    </Segment>
                  </Form>
                );
              }}
            </Mutation>
            <Message>
              Already Registered?<Link to='/login'>Log In</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignUpValidation;
