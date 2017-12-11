import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../images/amchar_logo.png';
import EditIcon from '../images/edit.png';
import BottomButtons from './BottomButtons';
import UserDetails from './UserDetails';
import { redirect, retrieveUserInfo, signOut, editProfile } from '../actions/userActions';
import {HomeContainer, Edit, SignOut} from './Styles.jsx'

export class Dashboard extends Component {

  componentWillMount() {
    if(this.props.user.data && this.props.user.data.uid) this.props.retrieveUserInfo(this.props.user);
  }

  edit = () => {
    this.props.redirect(`/edit`);
  }

  backHome = () => {
    localStorage.clear();
    this.props.redirect(`/`);
  }

  render() {
    const {data, description, firstName, surname, specialities, location} = this.props.user
    return (
        <HomeContainer>
            {data && <div>
              <div style={{marginTop: '50px', padding: '20px', color: 'white', display: 'flex', justifyContent: 'space-between', fontSize: '24px', letterSpacing: '3px'}}>
            <div onClick={() => {this.props.signOut()}} style={{position: 'absolute', top: '0', right: '0', backgroundColor: '#9E9E9E', height: '20px', width: '73px', texAlign: 'center', fontSize: '12px'}}>Sign out</div>
            <div>MY PROFILE</div>
            <div onClick={this.edit} style={{backgroundImage: `url(${EditIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '10%'}}></div>
          </div>
          <div style={{padding: '10px', color: '#8BC34A', height: '100%', backgroundColor: '#F1F1F1'}}>
            <div style={{display: 'flex'}}>
              <div style={{backgroundImage: `url(${Logo})`, width: '30%', border: 'solid 4px white'}}/>
              <div style={{marginLeft: '15px', display: 'flex', flexDirection: 'column'}}>
                <div>NAME<br/><a style={{color: 'black'}}>{firstName}{surname}</a></div>
                <div>AREA OF EXPERTISE<br/><a style={{color: 'black'}}>{specialities}</a></div>
                <div>LOCATION<br/><a style={{color: 'black'}}>{location}</a></div>
              </div>
            </div>
            <div style={{marginTop: '10px'}}>ABOUT<br/><a style={{color: 'black'}}>{description}</a></div>
          </div>
        </div>}
        {!data &&
          <div>
            <h3><strong>You must be logged in the view this page</strong> {description}</h3><br/>
            <button onClick={this.backHome} className="btn-success"><span className="fa fa-user"></span> Back home</button>
          </div>}
      </HomeContainer>
        );
      }
    }

    const mapStateToProps = state => ({
      user: state.user,
    });

    const mapDispatchToProps = {
      redirect,
      retrieveUserInfo,
      signOut,
      editProfile,
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
