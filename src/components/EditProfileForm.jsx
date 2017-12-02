import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { redirect } from '../actions/routeActions';
import { Form, InputField, Flex } from './Styles.jsx';


export class EditProfileForm extends Component {
  cancel = () =>{
    redirect(`/dashboard`);
  }

  render() {
    const {description, dob, email, gender, name, password, website} = this.props.user
    return (
        <Form className="form-group" onSubmit={this.props.handleSubmit}>
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="editName"
            label='name'
            placeholder={`Name: ${name}`}
          />
          <InputField
            className="form-control"
            component="input"
            type="password"
            name="editPassword"
            label='Password'
            placeholder={`Password: ${password}`}
          />
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="editEmail"
            label='Email'
            placeholder={`Email: ${email}`}
          />
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="editWebsite"
            label='Website'
            placeholder={`Website: http://www.mywebsite.com ${website}`}
          />
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="editDob"
            label='Dob'
            placeholder={`Date of Birth dd/mm/yy: ${dob}`}
          />
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="editGender"
            label='Gender'
            placeholder={`Gender: ${gender}`}
          />
          <InputField
            className="form-control"
            component="input"
            type="textarea"
            name="editDescription"
            label='Gender'
            placeholder={`Description: ${description}`}
          />
          <Flex>
          <button type="submit" className="btn-info"><span className="fa fa-user"></span> Save </button>
          <button onClick={this.cancel} style={{marginLeft: '5%'}} className="btn-danger"><span className="fa fa-user"></span> Cancel </button>
        </Flex>
        </Form>
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
