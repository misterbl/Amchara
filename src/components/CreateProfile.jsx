import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import firebase from '../firebase';
import {redirect, createProfile} from '../actions/userActions';
import CreateProfileForm from './CreateProfileForm';
import Logo from '../images/amchar_logo.png';
import { Form, InputField, Button, ErrorMessage, HomeContainer } from './Styles.jsx';

export class CreateProfile extends Component {
  constructor() {
    super()
    this.state = {error: false};
  }

  validate = (values) => {
    this.props.createProfile(values, this.props.user);
    this.props.redirect(`/dashboard`);
}


render() {
   return (
       <CreateProfileForm onSubmit={this.validate}/>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  redirect,
  createProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
