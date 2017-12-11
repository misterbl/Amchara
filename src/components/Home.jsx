import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import {redirect} from '../actions/userActions';

export class Home extends Component {

  componentWillMount() {
    localStorage.clear();
  }

  loginSignup = (tag) => {
    this.props.redirect(`/${tag}`);
  }
  
  render() {
    return (
      <div className="main-container">
        <div className="background-image" >
          <div className="log-sign" >
            <div style={{ textAlign: 'center', marginBottom: '120px'}}><p style={{fontSize: '20px', lineHeight: '5px'}}>WELCOME TO</p><p>MY AMCHARA</p></div>
            <button className="log-sign-button" onClick={() => this.loginSignup("login")}>LOGIN</button>
            <button className="log-sign-button" onClick={() => this.loginSignup("register")}>REGISTER</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  redirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
