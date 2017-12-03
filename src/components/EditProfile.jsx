import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditProfileForm from './EditProfileForm';
import AddSpeciality from './AddSpeciality';
import {createSpecialities, redirect, editProfile, addSpeciality, retrieveUserInfo} from '../actions/userActions';
import { Container, Speciality, Flex, Div, ErrorMessage } from './Styles.jsx';

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

    if((typeof this.props.user.specialities !== "undefined") && (typeof newSpeciality !== "undefined")){
    if(this.props.user.specialities.indexOf(newSpeciality) === -1){
      this.props.addSpeciality(newSpeciality, this.props.user.specialities)
    }
    else if (this.props.user.specialities.indexOf(newSpeciality) >  -1) {
      this.setState({alreadySelected: true});
    }
    else {this.setState({selected: false});}
  }
  else if ((typeof this.props.user.specialities === "undefined") && (typeof newSpeciality !== "undefined")) {
    this.props.createSpecialities();
    this.addfirstSpeciality(newSpeciality)
  }
}
addfirstSpeciality = (newSpeciality) => {
  if((typeof this.props.user.specialities !== "undefined") && (typeof newSpeciality !== "undefined")){
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
      <Container style={{width: '150%', marginLeft: '8%', marginTop: '57px'}}>
        {data &&
          <div className="row">
            <Div className="col-md-6">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row">
                    <Container className="col-xs-12 col-sm-8">
                      <div style={{display: 'flex'}}>
                        <AddSpeciality onSubmit={this.addSpeciality} specialitiesList={specialitiesList}/>
                        <Flex><div className="speciality">Specialities:</div>
                        {specialities && specialities.map(speciality => (
                          <div key={speciality} >
                            <Speciality  className="label label-info tags">{speciality}</Speciality>
                          </div>
                        ))}</Flex>
                      </div>
                      {!this.state.selected &&
                        <div className="red"><strong>Please select a speciality </strong></div>
                      }
                      {this.state.alreadySelected &&
                        <ErrorMessage><strong>Speciality already in your list </strong></ErrorMessage>}
                        <EditProfileForm user={this.props.user} onSubmit={this.editProfile} />
                      </Container>
                    </div>
                  </div>
                </div>
              </Div>
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
        redirect,
        addSpeciality,
        editProfile,
        createSpecialities,
        retrieveUserInfo,
      };

      export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
