import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase';
import {redirect, saveData} from '../actions/userActions';
import LogSignForm from './LogSignForm';
import Logo from '../images/amchar_logo.png';
import { Form, InputField, Button, ErrorMessage, HomeContainer } from './Styles.jsx';

export class Login extends Component {
  constructor() {
    super()
    this.state = {error: false};
  }

  validate = (values) => {
    this.setState({error: false});
    const email = values.email;
    const password = values.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
      this.props.saveData(data);
      this.props.redirect(`/dashboard`);})
      .catch(() => {this.setState({error: true});
    })
}

render() {
   return (
     <div>
     <LogSignForm text="Log in" onSubmit={this.validate}/>
     <div>
      {this.state.error &&  <ErrorMessage>invalid email or password</ErrorMessage>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
