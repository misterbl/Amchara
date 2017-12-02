import React, { Component } from 'react';
import firebase from '../firebase';
import BackGround from '../images/HomePagebackground.png'
import Auth from './Auth';
import { HomeContainer, LogSign } from './Styles.jsx';

export class Home extends Component {

  componentWillMount() {
    localStorage.clear();
  }

  render() {
    return (
      <HomeContainer style = {{backgroundImage: `url(${BackGround}`}} >
        <LogSign>
          <Auth type="logIn" text="Log in" />
          <Auth type="signUp" text="Sign up" />
        </LogSign>
      </HomeContainer>
    );
  }
}


export default (Home);
