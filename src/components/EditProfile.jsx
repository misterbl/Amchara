import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../images/amchar_logo.png';
import EditProfileForm from './EditProfileForm';
import AddSpeciality from './AddSpeciality';
import {createSpecialities, redirect, editProfile, addSpeciality, retrieveUserInfo} from '../actions/userActions';
import { HomeContainer, Container, Speciality, Specialities, Div, ErrorMessage } from './Styles.jsx';

export class EditProfile extends Component {

  constructor() {
    super()
    this.state = {selected: true, alreadySelected: false };
  }
  backHome = () => {
    localStorage.clear();
    this.props.redirect(`/`);
  }

  editProfile = (values) => {
    this.props.editProfile(values, this.props.user);
    this.props.redirect(`/dashboard`);
  }

  addSpeciality = (values) => {
    this.setState({selected: true, alreadySelected: false})
    const newSpeciality = values.editSpecialities;
    if((typeof newSpeciality !== "undefined")){
    if(this.props.user.specialities.indexOf(newSpeciality) === -1){
      this.props.addSpeciality(newSpeciality, this.props.user.specialities)
    }
    else if (this.props.user.specialities.indexOf(newSpeciality) >  -1) {
      this.setState({alreadySelected: true});
    }
    else {this.setState({selected: false});}
  }
 }

  render() {
    const {data, description, specialities} = this.props.user;
    const specialitiesList = ['Weight Management', 'Arthritis', 'Gut Health', 'Female Hormones', 'Diabetes', 'Adrenal Stress', 'Fertility'];
    return (

      <HomeContainer>
      <div style={{ backgroundImage: `url(${Logo})`, height: '100%', backgroundRepeat: 'inherit', marginTop: '50px', marginLeft: '7%'}} >
        {data && <div>
            <div style={{display: 'flex', backgroundColor: '#F1F1F1', width: '93%'}}>
              <AddSpeciality onSubmit={this.addSpeciality} specialitiesList={specialitiesList}/>
              <Specialities><div className="speciality">Specialities:</div>
              {specialities && specialities.map(speciality => (
                <div key={speciality} >
                  <Speciality>{speciality}</Speciality>
                </div>
              ))}</Specialities>
            </div>
            <div>{!this.state.selected &&
              <div className="red"><strong>Please select a speciality </strong></div>
            }</div>
            <div>{this.state.alreadySelected &&
              <ErrorMessage><strong>Speciality already in your list </strong></ErrorMessage>
            }</div>
              <EditProfileForm user={this.props.user} onSubmit={this.editProfile} />
          </div>}
            {!data &&
              <div>
                <h3><strong>You must be logged in the view this page</strong> {description}</h3><br/>
                <button onClick={this.backHome} className="btn-success"><span className="fa fa-user"></span> Back home</button>
              </div>}
                </div>
            </HomeContainer>
          );
        }
      }

      const mapStateToProps = state => ({
        user: state.user,
      });

      const mapDispatchToProps = {
        redirect,
        addSpeciality,
        editProfile,
        createSpecialities,
        retrieveUserInfo,
      };

      export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
