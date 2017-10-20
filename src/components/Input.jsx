import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {Form} from './Form.styles';

class Input extends React.Component {

  render() {
    const { handleSubmit } = this.props;
    return(
      <Form onSubmit={handleSubmit}>
        {this.props.grid.showInput &&
          <div style={{width: "500px", fontSize: "22px"}}>
          <div>Enter your game's configuration and press Enter</div><br/>
        <Field style={{width: "500px", fontSize: "30px", textAlign: "center"}} component="input" type="text" placeholder="Game's configuration" name="gameSpec"/>
      </div>}
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  form: state.form.Input,
  grid: state.grid,
});

const mapDispatchToProps = {}

const inputSpecification =  connect(mapStateToProps, mapDispatchToProps)(Input)

export default reduxForm({
  form: 'Input',
  enableReinitialize : true
})(inputSpecification);
