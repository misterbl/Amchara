import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Form, InputField, Button } from './Styles.jsx';

export const LogSignForm = ({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="loginEmail"
            label='Email Address'
            placeholder='email address'
          /></div>
          <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
          <InputField
            className="form-control"
            component="input"
            type="password"
            name="loginPassword"
            label='Password'
            placeholder='password'
          /></div>
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
