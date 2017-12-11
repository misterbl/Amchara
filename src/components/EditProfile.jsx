import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import EditProfileForm from './EditProfileForm';
import NotLogedIn from './NotLogedIn';
import {redirect, editProfile} from '../actions/userActions';

export class EditProfile extends Component {
  backHome = () => {
    localStorage.clear();
    this.props.redirect(`/`);
  }

  editProfile = (values) => {
    this.props.editProfile(values, this.props.user);
    this.props.redirect(`/dashboard`);
  }

  render() {
    const {data} = this.props.user;
    return (
      <div className="main-container">
        <div className="background-image" style={{marginTop: '50px'}} >
          {data && <div>
            <EditProfileForm user={this.props.user} onSubmit={this.editProfile} />
          </div>}
          {!data && <NotLogedIn/>}
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
    editProfile,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
