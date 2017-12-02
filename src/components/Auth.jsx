import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redirect } from '../actions/routeActions';
import firebase from '../firebase';
import {saveData} from '../actions/userActions';
import LogSignForm from './LogSignForm';
import { Forms, Modal, ModalContent, ModalHead, Close } from './Styles.jsx';

export class Auth extends Component {
  validate = (values) => {
    const email = values.loginEmail;
    const password = values.loginPassword;
    if (this.props.type === 'logIn') {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
      this.props.saveData(data);
      this.props.redirect(`/dashboard`);})
      .catch(() => {})
    }
  else {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((data) => {
        this.props.redirect(`/dashboard`);
        this.props.saveData(data);})
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

render() {
const {type, text} = this.props
return (
      <div>
        <button className="btn-success" onClick={() => this.showModal(type)} id="myBtn">{this.props.text}</button>
        <Modal id={type}>
          <ModalContent>
            <Close onClick={() => this.hideModal(type)}>&times;</Close>
              <ModalHead><br/>Please {text}</ModalHead>
            <Forms>
              <LogSignForm text={text} onSubmit={this.validate} />
            </Forms>
          </ModalContent>
        </Modal>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
