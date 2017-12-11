import React, { Component } from 'react';
import './styles.css';
import { reduxForm, Field } from 'redux-form';
import { redirect } from '../actions/userActions';


export class EditProfileForm extends Component {
  cancel = () =>{
    redirect(`/dashboard`);
  }

  render() {
    const {description, dob, email, telephone, firstName, surname, website, location} = this.props.user
    return (
      <form className="form-group form" onSubmit={this.props.handleSubmit}>
        <Field
          className="form-control field"
          component="input"
          type="text"
          name="editFirstName"
          label='firstName'
          placeholder={`Firstname: ${firstName}`}
        />
        <Field
          className="form-control field"
          component="input"
          type="text"
          name="editSurname"
          label='surname'
          placeholder={`Surname: ${surname}`}
        />
        <Field
          className="form-control field"
          component="input"
          type="text"
          name="editEmail"
          label='Email'
          placeholder={`Email: ${email}`}
        />
        <Field
          className="form-control field"
          component="input"
          type="text"
          name="editWebsite"
          label='Website'
          placeholder={`Website: http://www.mywebsite.com ${website}`}
        />
        <Field
          className="form-control field"
          component="input"
          type="text"
          name="editDob"
          label='Dob'
          placeholder={`Date of Birth dd/mm/yy: ${dob}`}
        />
        <Field
          className="form-control field"
          component="input"
          type="text"
          name="editTelephone"
          label='Telephone'
          placeholder={`Telephone: ${telephone}`}
        />
        <Field
          className="form-control field"
          component="input"
          type="text"
          name="editLocation"
          label='Location'
          placeholder={`Location: ${location}`}
        />
        <Field
          className="form-control field"
          component="input"
          type="textarea"
          name="editDescription"
          label='Description'
          placeholder={`Description: ${description}`}
        />
        <div style={{display: 'flex'}}>
          <button className="button" type="submit" >Save </button>
          <button className="button" onClick={this.cancel} style={{marginLeft: '5%'}}> Cancel </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form.EditProfileForm,
});

const mapDispatchToProps = {
  redirect,
};

export default reduxForm({
  form: 'EditProfileForm',
  enableReinitialize : true
})(EditProfileForm);
