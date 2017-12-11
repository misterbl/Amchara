import React, { Component } from 'react';
import { connect } from 'react-redux';
import {redirect, createProfile} from '../actions/userActions';
import CreateProfileForm from './CreateProfileForm';

export class CreateProfile extends Component {
  validate = (values) => {
    this.props.createProfile(values, this.props.user);
    this.props.redirect(`/dashboard`);
}

render() {
  const {data} = this.props.user
   return (
     <div>
     {data &&
       <CreateProfileForm onSubmit={this.validate}/>
     }
       {!data &&
         <div style={{textAlign: 'center'}}>
           <h3><strong>You must be logged in the view this page</strong></h3><br/>
           <button onClick={this.backHome} className="button"> Back home</button>
         </div>}
    </div>
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
