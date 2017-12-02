import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redirect } from '../actions/routeActions';
import EditProfileForm from './EditProfileForm';
import AddSpeciality from './AddSpeciality';
import { editProfile, addSpeciality } from '../actions/userActions';
import { Container, Speciality, Flex, Red } from './Styles.jsx';

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
    if(newSpeciality && this.props.user.specialities && (this.props.user.specialities.indexOf(newSpeciality) === -1)){
      this.props.addSpeciality(newSpeciality, this.props.user.specialities)
    }
    else if (this.props.user.specialities.indexOf(newSpeciality) >  -1) {
      this.setState({alreadySelected: true});
    }
    else {this.setState({selected: false});}
  }

  render() {
    const {data, description, specialities} = this.props.user;
    const specialitiesList = ['Weight Management', 'Arthritis', 'Gut Health', 'Female Hormones', 'Diabetes', 'Adrenal Stress', 'Fertility'];
    return (
      <Container style={{width: '150%', marginLeft: '8%', marginTop: '57px'}}>
        {data &&
          <div className="row">
            <div className="col-md-6">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row">
                    <Container className="col-xs-12 col-sm-8">
                      <div style={{display: 'flex'}}>
                        <AddSpeciality onSubmit={this.addSpeciality} specialitiesList={specialitiesList}/>
                        <Flex><div className="speciality">Specialities:</div>
                        {specialities && specialities.map(speciality => (
                          <div >
                            <Speciality  className="label label-info tags">{speciality}</Speciality>
                          </div>
                        ))}</Flex>
                      </div>
                      {!this.state.selected &&
                        <div className="red"><strong>Please select a speciality </strong></div>
                      }
                      {this.state.alreadySelected &&
                        <Red><strong>Speciality already in your list </strong></Red>}
                        <EditProfileForm user={this.props.user} onSubmit={this.editProfile} />
                      </Container>
                    </div>
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
        redirect,
        addSpeciality,
        editProfile,
      };

      export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
