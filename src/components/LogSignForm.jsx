import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Form, InputField, Button } from './Styles.jsx';

export const LogSignForm = ({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="loginEmail"
            label='Email Address'
            placeholder='email address'
          />
          <InputField
            className="form-control"
            component="input"
            type="password"
            name="loginPassword"
            label='Password'
            placeholder='password'
          />
          <Button type="submit">Log In</Button>
        </Form>
    );

const mapStateToProps = state => ({
  form: state.form.LogSignForm,
});

const mapDispatchToProps = {
};

export default reduxForm({
  form: 'LogSignForm',
  enableReinitialize : true
})(LogSignForm);
