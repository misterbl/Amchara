import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import firebase from '../firebase';
import Logo from '../images/amchar_logo.png';
import { Form, InputField, Button, ErrorMessage, HomeContainer } from './Styles.jsx';

export const LogSignForm = ({ handleSubmit, text }) => (
     <HomeContainer>
     <div style={{ backgroundImage: `url(${Logo})`, height: '100%', backgroundRepeat: 'inherit', marginTop: '125px', marginLeft: '7%'}} >
       <div style={{ position: 'relative', top: '40%'}}>
        <Form onSubmit={handleSubmit}>
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="email"
            label='Email Address'
            placeholder='EMAIL ADDRESS'
          />
          <InputField
            className="form-control"
            component="input"
            type="password"
            name="password"
            label='Password'
            placeholder='PASSWORD'
          />
          <Button type="submit" >{text}</Button>
        </Form>
        </div>
      </div>
      </HomeContainer>
    )


const mapStateToProps = state => ({
  form: state.form.LogSignForm,
  user: state.user,
});

const mapDispatchToProps = {
};

export default reduxForm({
  form: 'LogSignForm',
  enableReinitialize : true
})(LogSignForm);
