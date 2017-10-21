import React from 'react';
import { connect } from 'react-redux';
import {saveBombsNumber} from '../actions/gridActions';
import Row from './Row';
import {Game, NewGameButton} from './Grid.styles';


export class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 1 };
  }

  componentWillMount() {
    this.saveCells(this.props);
  }

  componentDidMount() {
    if(this.props.grid.configuration) this.props.saveBombsNumber(this.props.grid.configuration)
  }

  saveCells(props) {
    const{cellsNumber, grid} =  props;
    if(cellsNumber && cellsNumber[1]){
      for(var i=1; i < cellsNumber.length;i++){
        //cellsNumber being the user input for the game's configuration, we ignore
        //the first element (i=0) as it only refers to the number of rows and columns in the game
        this.setState({ key: this.state.key + 1 });
        grid.table.push({array: cellsNumber[i], x: i-1});
        for(var j=0; j < cellsNumber[i].length; j++){
          grid.cells.push({
            id: `${i-1}${j}`,
            value: cellsNumber[i][j],
            x: i-1,
            y: j,
            count: 0,
          })
        }
      }
    }
  }

  mapTable = (table, cells) =>
  table.map((row, index) => (
    <Row key={index} row={row} cells={cells}/>
  ))

  onClick() {
    window.location.reload();
  }
  render() {
    return(
      <div>
      <Game>{this.mapTable(this.props.grid.table, this.props.grid.cells)}</Game>
      {this.props.grid.bombsNumber && <NewGameButton onClick={this.onClick}>New game</NewGameButton>}
      </div>
    )}
  }

  const mapStateToProps = state => ({
    grid: state.grid,
  });

  const mapDispatchToProps = {
    saveBombsNumber,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Grid);
