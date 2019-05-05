import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Checkbox
} from "semantic-ui-react";
import { Mutation } from "react-apollo";
import Error from "../../utilities/Error";
import { SIGNUP_USER } from "../../querries";
const itribeIcon = "../../itribe.png";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

class SignUpForm extends Component {
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
      console.log('ficus', data);
    //   localStorage.setItem("token", data.register.token);
    //   await this.props.refetch();
      this.clearState();
    //   this.props.history.push("/");
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
              <Image src={itribeIcon} size="large" /> Sign Up for iTribe
            </Header>
            <Mutation
              mutation={SIGNUP_USER}
              variables={{ firstName, lastName, email, password }}
            >
              {(register, { data, loading, error }) => {
                return (
                  <Form
                    onSubmit={e => this.handleSubmit(e, register)}
                    size="large"
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
                      />
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}
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
                      />
                      <Form.Field>
                        <Checkbox label="I agree to the Terms and Conditions" />
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
              Already Registered?<a href="#">Log In</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignUpForm;
