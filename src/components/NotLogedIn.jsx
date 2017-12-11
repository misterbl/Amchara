import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import {redirect} from '../actions/userActions';

export class NotLogedIn extends Component {

  backHome = () => {
    localStorage.clear();
    this.props.redirect(`/`);
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h3><strong>You must be logged in the view this page</strong></h3><br/>
        <button style={{marginLeft: '0px'}} onClick={this.backHome} className="button"> Back home</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  redirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotLogedIn);
