import React from 'react';
import { connect } from 'react-redux';
import Routes from './routes';

class App extends React.Component {
  render(){
    return(
        <Routes user={this.props.user} />
      )
    }
  }

const mapStateToProps = state => ({
user: state.user,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
