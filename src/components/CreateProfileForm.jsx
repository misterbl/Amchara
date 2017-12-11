import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import firebase from '../firebase';
import {redirect, createProfile} from '../actions/userActions';
import Logo from '../images/amchar_logo.png';
import { Form, InputField, Button, ErrorMessage, HomeContainer } from './Styles.jsx';

export const CreateProfileForm = ({ handleSubmit }) => (
       <HomeContainer>
       <div style={{ backgroundImage: `url(${Logo})`, height: '100%', backgroundRepeat: 'inherit', marginTop: '125px', marginLeft: '7%', color: 'white', textAlign: 'center'}} >
          <div>MY AMCHARA</div>
            <div>REGISTER YOUR APP</div>
              <div>COMPLETE THE DETAILS BELOW TO <br/>ACTIVATE AND REGISTER YOUR APP</div>
       <div>
        <Form onSubmit={handleSubmit}>
        <InputField
            className="form-control"
            component="input"
            type="text"
            name="firstName"
            label='First Name'
            placeholder='FIRST NAME'
          />
        <InputField
            className="form-control"
            component="input"
            type="text"
            name="surname"
            label='Surname'
            placeholder='SURNAME'
          />
        <InputField
            className="form-control"
            component="input"
            type="text"
            name="companyName"
            label='Company Name'
            placeholder='COMPANY NAME'
          />
        <InputField
            className="form-control"
            component="input"
            type="text"
            name="email"
            label='Email'
            placeholder='EMAIL'
          />
        <InputField
            className="form-control"
            component="input"
            type="text"
            name="telephone"
            label='Telephone'
            placeholder='TELEPHONE'
          />
        <InputField
            className="form-control"
            component="input"
            type="text"
            name="location"
            label='Location'
            placeholder='LOCATION'
          />
          <Button type="submit">CREATE PROFILE</Button>
        </Form>
        </div>
      </div>
      </HomeContainer>
    )

const mapStateToProps = state => ({
  form: state.form.CreateProfileForm,
  user: state.user,
});

const mapDispatchToProps = {
  redirect,
  createProfile,
};

export default reduxForm({
  form: 'CreateProfileForm',
  enableReinitialize : true
})(CreateProfileForm);
