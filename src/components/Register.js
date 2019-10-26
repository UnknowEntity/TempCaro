import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Form as ReduxForm, Control } from 'react-redux-form';

const bootstrapFormControl = props => {
  return <Form.Control {...props} />;
};

const Register = () => {
  const handleSubmit = data => {
    console.log(data);
    return fetch(`/user/register`, {
      method: 'post',
      body: data,
      redirect: 'follow'
    }).then(
      response => response.json(),
      // eslint-disable-next-line no-console
      error => console.log('An error occurred.', error)
    );
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="border border-primary p-2 col-4">
          <ReduxForm model="userFormData" onSubmit={v => handleSubmit(v)}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Control.text
                model=".username"
                component={bootstrapFormControl}
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Control.text
                model=".email"
                component={bootstrapFormControl}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Control.text
                model=".password"
                component={bootstrapFormControl}
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <a href="/user/login">Register</a>
          </ReduxForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
