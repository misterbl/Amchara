import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './styles.css';
import {redirect, createProfile} from '../actions/userActions';

export const CreateProfileForm = ({ handleSubmit }) => (
  <div className="main-container">
    <div className="background-image" style={{color: 'white', textAlign: 'center'}} >
      <div>MY AMCHARA</div>
      <div>REGISTER YOUR APP</div>
      <div>COMPLETE THE DETAILS BELOW TO <br/>ACTIVATE AND REGISTER YOUR APP</div>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <Field
            className="form-control field"
            component="input"
            type="text"
            name="firstName"
            label='First Name'
            placeholder='FIRST NAME'
          />
          <Field
            className="form-control field"
            component="input"
            type="text"
            name="surname"
            label='Surname'
            placeholder='SURNAME'
          />
          <Field
            className="form-control field"
            component="input"
            type="text"
            name="companyName"
            label='Company Name'
            placeholder='COMPANY NAME'
          />
          <Field
            className="form-control field"
            component="input"
            type="text"
            name="email"
            label='Email'
            placeholder='EMAIL'
          />
          <Field
            className="form-control field"
            component="input"
            type="text"
            name="telephone"
            label='Telephone'
            placeholder='TELEPHONE'
          />
          <Field
            className="form-control field"
            component="input"
            type="text"
            name="location"
            label='Location'
            placeholder='LOCATION'
          />
          <button className="button" type="submit">CREATE PROFILE</button>
        </form>
      </div>
    </div>
  </div>
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
