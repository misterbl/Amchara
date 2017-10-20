import React from 'react';
import { connect } from 'react-redux';
import {BombCount} from './Cell.styles.jsx';


export class BombNumber extends React.Component {
  render(){
    return(
      <h1 style={{fontSize: '40px', color: "#CCCCCC", position: "relative", top: "40px", left: "41%"}}>{this.props.grid.bombsNumber} <BombCount style={{}}src={require('../images/bomb.png')} alt=""/> in this game</h1>
          )
        }
      }

      const mapStateToProps = state => ({
        grid: state.grid,
      });

      const mapDispatchToProps = {
      };

      export default connect(mapStateToProps, mapDispatchToProps)(BombNumber);
