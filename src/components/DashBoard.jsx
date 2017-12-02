import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redirect } from '../actions/routeActions';
import Logo from '../images/amchar_logo.png'
import EditProfile from './EditProfile';
import BottomButtons from './BottomButtons'
import { saveUserDetails, retrieveUserInfo, signOut, editProfile } from '../actions/userActions';
import {Container, Specialities, Speciality, Edit, Quarter, SignOut} from './Styles.jsx'

export class Dashboard extends Component {

  componentWillMount() {
    if(this.props.user.data && this.props.user.data.uid) this.props.retrieveUserInfo(this.props.user.data.uid)
    else if (!this.props.user.registered){
      this.props.editProfile(null, this.props.user);
    }
  }

  edit = () => {
    this.props.redirect(`/edit`);
  }

  signOut = () => {
    localStorage.clear();
    this.props.signOut();
    this.props.redirect(`/`);
  }

  backHome = () => {
    localStorage.clear();
    this.props.redirect(`/`);
  }

  render() {
    const {data, description, dob, email, gender, name, password, website, specialities} = this.props.user
    return (
      <Container style={{width: '150%', marginLeft: '8%'}}>
        {data &&
          <div className="row">
            <div className="col-md-6">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row">
                    <Container className="col-xs-12 col-sm-8">
                      <div>
                        <h2>{name}</h2>
                        <p><strong>About me: </strong> {description}</p>
                        <p><strong>Gender: </strong> {gender}</p>
                        <p><strong>Date of birth: </strong> {dob}</p>
                        <p><strong>Email: </strong> <a href={`mailto:${email}`}>{email}</a></p>
                        <p><strong>Website: </strong><a href={website}>{website}</a></p>
                        <p><strong>Specialities: </strong><br/>
                        <Specialities>
                          {specialities && specialities.map(speciality => (
                            <div>
                              <Speciality className="label label-info tags">{speciality}</Speciality>
                              <br/></div>
                            ))}
                          </Specialities>
                        </p>
                        <Edit onClick={this.edit} className="btn-success"><span className="fa fa-user"></span> Edit Profile</Edit>
                      </div>
                    </Container>
                    <Quarter className="col-xs-12 col-sm-4 text-center">
                      <img src={Logo} alt="" className="center-block img-responsive" />
                    </Quarter>
                    <SignOut onClick={this.signOut} className="btn-danger signOut"><span className="fa fa-user"></span> Sign out </SignOut>
                  </div>
                  <BottomButtons />
                </div>
              </div>
            </div>
          </div>}
          {!data &&
            <div>
              <h3><strong>You must be logged in the view this page</strong> {description}</h3><br/>
              <button onClick={this.backHome} className="btn-success"><span className="fa fa-user"></span> Back home</button>
            </div>}
          </Container>
        );
      }
    }

    const mapStateToProps = state => ({
      user: state.user,
    });

    const mapDispatchToProps = {
      saveUserDetails,
      redirect,
      retrieveUserInfo,
      signOut,
      editProfile,
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
