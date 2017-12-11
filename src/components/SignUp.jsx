import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import firebase from '../firebase';
import {redirect, saveData} from '../actions/userActions';
import LogSignForm from './LogSignForm';
import Logo from '../images/amchar_logo.png';
import { Form, InputField, Button, ErrorMessage, HomeContainer } from './Styles.jsx';

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {error: false};
  }

  validate = (values) => {
    this.setState({error: false});
    const email = values.email;
    const password = values.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((data) => {
        this.props.redirect(`/create-profile`);
        this.props.saveData(data);})
        .then((data) => {
          this.props.editProfile(null, this.props.user);
        })
        .catch(() => {this.setState({error: true});
        });
}

render() {
   return (
     <div>
     <LogSignForm text="Sign up" onSubmit={this.validate}/>
     <div>
      {this.state.error && this.props.text === "Sign up" && <ErrorMessage>password must be 8 characters minimum</ErrorMessage>}
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  saveData,
  redirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
