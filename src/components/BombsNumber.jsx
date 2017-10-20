import React from 'react';
import { connect } from 'react-redux';
import {BombCount} from './Cell.styles.jsx';
import styled from 'styled-components';


const H1 = styled.h1`
  font-size: 43px;
  color: #CCCCCC;
  position: relative;
  top: 40px;
  left: 41%
`
export class BombNumber extends React.Component {
  render(){
    return(
      <H1>{this.props.grid.bombsNumber}<span> </span>
         <BombCount style={{}}src={require('../images/bomb.png')} alt=""/> in this game
      </H1>
          )
        }
      }

      const mapStateToProps = state => ({
        grid: state.grid,
      });

      const mapDispatchToProps = {
      };

      export default connect(mapStateToProps, mapDispatchToProps)(BombNumber);
