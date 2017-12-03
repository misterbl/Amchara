import React from 'react';
import { reduxForm } from 'redux-form';
import { Form, InputField, Button } from './Styles.jsx';

export const LogSignForm = ({ handleSubmit, text }) => (
        <Form onSubmit={handleSubmit}>
          <div className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="loginEmail"
            label='Email Address'
            placeholder='email address'
          /></div>
          <div className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
          <InputField
            className="form-control"
            component="input"
            type="password"
            name="loginPassword"
            label='Password'
            placeholder='password'
          /></div>
          <Button type="submit">{text}</Button>
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
