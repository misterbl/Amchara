import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import AddSpecialityForm from './AddSpecialityForm';
import NotLogedIn from './NotLogedIn';
import {createSpecialities, redirect, addSpeciality} from '../actions/userActions';

export class AddSpecialities extends Component {

  constructor() {
    super()
    this.state = {selected: true, alreadySelected: false };
  }
  backHome = () => {
    localStorage.clear();
    this.props.redirect(`/`);
  }

  backDashboard = () => {
    this.props.redirect(`/dashboard`);
  }

  addSpeciality = (values) => {
    this.setState({selected: true, alreadySelected: false})
    const newSpeciality = values.editSpecialities;
    if((typeof newSpeciality !== "undefined")){
      if(this.props.user.specialities.indexOf(newSpeciality) === -1){
        this.props.addSpeciality(newSpeciality, this.props.user)
      }
      else if (this.props.user.specialities.indexOf(newSpeciality) >  -1) {
        this.setState({alreadySelected: true});
      }
      else {this.setState({selected: false});}
    }
  }

  render() {
    const {data, specialities} = this.props.user;
    const specialitiesList = ['Weight Management', 'Arthritis', 'Gut Health', 'Female Hormones', 'Diabetes', 'Adrenal Stress', 'Fertility'];
    return (
      <div className="main-container">
        <div className="background-image" style={{marginTop: '140px'}} >
          <div className="block">{data && <div>
            <div style={{backgroundColor: '#F1F1F1', width: '93%'}}>
              <AddSpecialityForm onSubmit={this.addSpeciality} specialitiesList={specialitiesList}/>
              <div className="specialities"><div className="green">YOUR AREAS OF EXPERTISE:</div><br/>
              {specialities && specialities.map(speciality => (
                <div key={speciality} >
                  <div style={{marginRight: '6px'}}>{speciality}</div><br/>
                </div>
              ))}</div>
            </div>
            <div>{!this.state.selected &&
              <div className="red"><strong>Please select a speciality </strong></div>
            }</div>
            <div>{this.state.alreadySelected &&
              <div className="error-message"><strong>Speciality already in your list </strong></div>
            }</div>
            <button style={{marginLeft: '0px'}} className="button" onClick={this.backDashboard}> Done </button>
          </div>}
          {!data && <NotLogedIn />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  redirect,
  addSpeciality,
  createSpecialities,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSpecialities);
