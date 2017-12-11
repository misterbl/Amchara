import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './styles.css';


export const LogSignForm = ({ handleSubmit, text }) => (
  <div className="main-container">
    <div className="background-image" >
      <div style={{ position: 'relative', top: '-12%'}}>
        <form className="form" onSubmit={handleSubmit}>
          <Field
            className="form-control field"
            component="input"
            type="text"
            name="email"
            label='Email Address'
            placeholder='EMAIL ADDRESS'
          />
          <Field
            className="form-control field"
            component="input"
            type="password"
            name="password"
            label='Password'
            placeholder='PASSWORD'
          />
          <button style={{marginLeft: '0px'}} className="button" type="submit" >{text}</button>
        </form>
      </div>
    </div>
  </div>
)


const mapStateToProps = state => ({
  form: state.form.LogSignForm,
  user: state.user,
});

const mapDispatchToProps = {
};

export default reduxForm({
  form: 'LogSignForm',
  enableReinitialize : true
})(LogSignForm);
