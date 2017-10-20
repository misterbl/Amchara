import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './components/Input';
import Grid from './components/Grid';
import {Title} from './components/Title'
import {saveGameConfig, hideInputField} from './actions/gridActions'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { key: 1 };
  }

  submit = (values) => {
     this.props.hideInputField();
     const config = values.gameSpec.split(',');
     this.props.saveGameConfig(config, parseInt(config[0][0], 10), parseInt(config[0][config[0].length -1], 10));
     this.setState({ key: this.state.key + 1 })

 }

  render() {
    return (
      <div>
        <Title>Mine Sweeper</Title>
      <Input onSubmit={this.submit}/>
      <Grid key={this.state.key} cellsNumber={this.props.grid.configuration} />
    </div>
    );
  }
}


const mapStateToProps = state => ({
  grid: state.grid,
});

const mapDispatchToProps = {
  saveGameConfig,
  hideInputField,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
