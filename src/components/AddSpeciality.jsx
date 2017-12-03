import React from 'react';
import { reduxForm } from 'redux-form';
import { Form, InputField } from './Styles.jsx';

export const AddSpeciality = ({ handleSubmit, specialitiesList }) => (
        <Form onSubmit={handleSubmit}>
          <InputField
            component="select"
            type="text"
            name="editSpecialities"
            label='Specialities'
            hinttext="Select..."
          >
            <option label="Choose a speciality"></option>
          {specialitiesList && specialitiesList.map(speciality => (
            <option key={speciality} value={`${speciality}`}>{speciality}</option>
          ))}
          </InputField>
            <button type="submit" className="btn-info"><span className="fa fa-user"></span> Add </button>
        </Form>
    );

const mapStateToProps = state => ({
  form: state.form.AddSpeciality,
});

const mapDispatchToProps = {
};

export default reduxForm({
  form: 'AddSpeciality',
  enableReinitialize : true
})(AddSpeciality);
