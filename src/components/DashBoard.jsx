import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import NotLogedIn from './NotLogedIn';
import { redirect, retrieveUserInfo, signOut } from '../actions/userActions';


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

  addSpeciality = () => {
    this.props.redirect('/add-specialities')
  }
  render() {
    const {data, telephone, website, email, description, firstName, surname, specialities, location} = this.props.user;
    return (
      <div className="main-container">
        {data && <div>
          <div className="profile-header" >
            <div>MY PROFILE</div>
            <div onClick={this.edit} className="edit-icon" />
          </div>
          <div className="profile-container">
            <div style={{display: 'flex'}}>
              <div className="profile-image"/>
              <div style={{marginLeft: '15px', display: 'flex', flexDirection: 'column'}}>
                <div className="details">NAME<br/><a className="black">{firstName}&nbsp;{surname}</a></div>
                <div className="details">AREA OF EXPERTISE<button className="add" onClick={() => {this.addSpeciality()}}>add</button><br/>
                {specialities && specialities.map(speciality => (
                  <div style={{ display: 'flex', flexWrap: 'wrap'}} key={speciality} >
                    <a className="black">{speciality}</a>
                  </div>
                ))}</div>
                <div className="details">LOCATION<br/><a className="black">{location}</a></div>
              </div>
            </div><br/>
            <div style={{marginTop: '10px'}}>ABOUT<br/><a className="black">{description}</a></div><br/>
            <div style={{display: 'flex'}}><div className="telephone"/><div className="profile-details">
              {telephone}</div></div>
              <div style={{display: 'flex'}}><div className="email"/><div className="profile-details">
                {email}</div></div>
                <div style={{display: 'flex'}}><div className="website"/><div className="profile-details">
                  {website}</div></div>
                  <div onClick={() => {this.props.signOut()}} className="sign-out">Sign out</div>
                </div>
              </div>}
              {!data && <NotLogedIn />}
              </div>
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
        };

        export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
