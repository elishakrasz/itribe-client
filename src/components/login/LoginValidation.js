import React, { Component } from "react";
import { Form } from "formsy-semantic-ui-react";
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
import { SIGNIN_USER } from "../../querries/";
const itribeIcon = "../../itribe.png";

const initialState = {
  email: "",
  password: ""
};

const styles = {
  root: {
    marginTop: 18
    // padding: '0 24px 24px 24px',
  },

  customErrorLabel: {
    color: "#f00",
    textAlign: "center"
  }
};

export default class LoginValidation extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e, login) => {
    e.preventDefault();
    login().then(async ({ data }) => {
      console.log("baked", data.login);
      // localStorage.setItem("token", data.login.token);
      //   await this.props.refetch();
      this.clearState();
      this.props.history.push("/");
    });
  };

  validateForm = () => {
    const { email, password } = this.state;
    const isInvalid = !email || !password;
    return isInvalid;
  };

  render() {
    const { email, password } = this.state;
    const errorLabel = <Label color="red" pointing="left" />;

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
              <Image src={itribeIcon} size="massive" /> Log-in to your account
            </Header>
            <Mutation mutation={SIGNIN_USER} variables={{ email, password }}>
              {(login, { data, loading, error }) => {
                return (
                  <Form
                    size="big"
                    onSubmit={e => this.handleSubmit(e, login)}
                  >
                    <Segment stacked>
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail address"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                        validations="isEmail"
                        validationErrors={{
                          isEmail: "This is not a valid email",
                          isDefaultRequiredValue: "Email is Required"
                        }}
                        errorLabel={errorLabel}
                        style={styles.formElement}
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
                          minLength: "Minimin of 8 characters",
                          isDefaultRequiredValue: "Password is Required"
                        }}
                        errorLabel={<div style={styles.customErrorLabel} />}
                        rootStyle={styles.formElement}
                      />

                      <Button color="teal" fluid size="large">
                        Login
                      </Button>
                      {error && <Error error={error} />}
                    </Segment>
                  </Form>
                );
              }}
            </Mutation>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
