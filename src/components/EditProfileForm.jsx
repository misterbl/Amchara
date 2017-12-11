import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { redirect } from '../actions/userActions';
import { Form, InputField, Flex, Button } from './Styles.jsx';


export class EditProfileForm extends Component {
  cancel = () =>{
    redirect(`/dashboard`);
  }

  render() {
    const {description, dob, email, gender, firstName, surname, website} = this.props.user
    return (
        <Form className="form-group" onSubmit={this.props.handleSubmit}>
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="editFirstName"
            label='firstName'
            placeholder={`Firstname: ${firstName}`}
          />
          <InputField
            className="form-control"
            component="input"
            type="text"
            name="editSurname"
            label='surname'
            placeholder={`Surname: ${surname}`}
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
          <Button type="submit" >Save </Button>
          <Button onClick={this.cancel} style={{marginLeft: '5%'}}> Cancel </Button>
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
