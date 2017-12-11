import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './styles.css';

export const AddSpeciality = ({ handleSubmit, specialitiesList }) => (
        <form className="form" onSubmit={handleSubmit}>
          <Field
            className="form-control field"
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
        </Field>
            <button className="button" type="submit" >Add</button>
        </form>
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
