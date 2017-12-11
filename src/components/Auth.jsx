import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase';
import {redirect, saveData, editProfile} from '../actions/userActions';
import LogSignForm from './LogSignForm';
import { Forms, Modal, ModalContent, ModalHead, Close, ErrorMessage } from './Styles.jsx';

export class Auth extends Component {
  constructor() {
    super()
    this.state = {error: false};
  }


  validate = (values) => {
    this.setState({error: true});
    const email = values.loginEmail;
    const password = values.loginPassword;
    if (this.props.type === 'logIn') {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
      this.props.saveData(data);
      this.props.redirect(`/dashboard`);})
      .catch(() => {this.setState({error: true});
    })
    }
  else {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((data) => {
        this.props.redirect(`/dashboard`);
        this.props.saveData(data);})
        .then((data) => {
          this.props.editProfile(null, this.props.user);
        })
        .catch(() => {});

  }
}

showModal = (tag) => {
var modal = document.getElementById(tag);
modal.style.display = "block";
}

hideModal = (tag) => {
var modal = document.getElementById(tag);
modal.style.display = "none";
}

loginSignup = (tag) => {
this.props.redirect(`/${tag}`);
}

render() {
const {type, text} = this.props
return (
      <div>
        <button className="btn-success" onClick={() => this.loginSignup(type)} id="myBtn">{this.props.text}</button>
        <div id={type}>
          <ModalContent>
            <Close onClick={() => this.hideModal(type)}>&times;</Close> */}
              <ModalHead><br/>Please {text}</ModalHead>
              {this.state.error && text === "Log in" && <ErrorMessage>invalid email or password</ErrorMessage>}
              {this.state.error && text === "Sign up" && <ErrorMessage>password must be 8 characters minimum</ErrorMessage>}
            <Forms>
              <LogSignForm text={text} onSubmit={this.validate} />
            </Forms>
          </ModalContent>
        </div>
      </div>
);
}
}


const mapStateToProps = state => ({
user: state.user,
});

const mapDispatchToProps = {
redirect,
saveData,
editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
