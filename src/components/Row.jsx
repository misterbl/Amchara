import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

export class Row extends React.Component {

  mapRow = row =>
  row.array.split('').map((cell, index) => (
    <Cell key={index} x={row.x} y={index} value={cell} cells={this.props.grid.cells}/>
  ))

  render() {
    return(
  <div style={{ display: "flex"}}>
    {this.mapRow(this.props.row)}
      </div>
    )}
}

const mapStateToProps = state => ({
  grid: state.grid,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
