import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackGround from '../images/HomePagebackground.png'
import {redirect} from '../actions/userActions';
import Logo from '../images/amchar_logo.png';
import Auth from './Auth';
import { HomeContainer, LogSign, LogSignButton } from './Styles.jsx';

export class Home extends Component {

  componentWillMount() {
    localStorage.clear();
  }

  loginSignup = (tag) => {
  this.props.redirect(`/${tag}`);
  }

  render() {
    return (
      <HomeContainer>
        <div style={{ backgroundImage: `url(${Logo})`, height: '100%', backgroundRepeat: 'inherit', marginTop: '125px', marginLeft: '7%'}} >
        <LogSign>
          <div style={{ textAlign: 'center', marginBottom: '120px'}}><p style={{fontSize: '20px', lineHeight: '5px'}}>WELCOME TO</p><p>MY AMCHARA</p></div>
          <LogSignButton onClick={() => this.loginSignup("login")}>LOGIN</LogSignButton>
          <LogSignButton onClick={() => this.loginSignup("register")}>REGISTER</LogSignButton>
        </LogSign>
      </div>
      </HomeContainer>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
redirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
