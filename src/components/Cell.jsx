import React from 'react';
import { connect } from 'react-redux';
import {Bomb, ClickableCell, ClickedCell, Flag} from './Cell.styles.jsx';


export class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 1, clicked: false};
  }

  componentWillMount() {
    //on page loading, the app assign a value to each cell depending on
    //how many bombs are around it
    if(this.props.grid.cells) this.assignValue(this.props)
  }

  onClick = () => {
    this.props.grid.count ++
    this.setState({ key: this.state.key + 1, clicked: !this.state.clicked });//updating the state.key allow the component to refresh
    this.checkResult(this.props)
  }

  checkResult = (props) => {
    const {grid, value} = props;
    const {count, row, column, bombsNumber} = grid;
    if(count === ((row * column) - bombsNumber)) this.resultMessage("Congratulation!!! You've Won!!!");
    if(value === "*") this.resultMessage("Game Over!!!");
  }

  resultMessage = (message) => {
    setTimeout(function(){alert(message); window.location.reload()}, 500);

  }

  updateValue(props) {
    const {x, y, grid} = props;
    grid.cells.filter(v => {
    return v.id === `${x}${y}`;
    })[0].count ++;
  }

   assignValue = props => {
   //the app compare the position of the current cell with every single cell
   //in the game in order to assign the right value to that cell
   const {x, y, value, grid} = props;
    grid.cells.filter(c => {
    if((value !== "*") && (c.value  === "*")){
      if((c.x === x) && (c.y === y - 1)) this.updateValue(props)
      else if ((c.x === x) && (c.y === y + 1)) this.updateValue(props)
      else if ((c.y === y) && (c.x === x - 1)) this.updateValue(props)
      else if ((c.y === y) && (c.x === x + 1)) this.updateValue(props)
      else if ((c.y === y - 1) && (c.x === x - 1)) this.updateValue(props)
      else if ((c.y === y - 1) && (c.x === x + 1)) this.updateValue(props)
      else if ((c.y === y + 1) && (c.x === x - 1)) this.updateValue(props)
      else if ((c.y === y + 1) && (c.x === x + 1))this.updateValue(props)
    }
    return grid.cells
  });
}


  convertValue = (props) => {
    const {x, y, grid} = props
    //the value of the cell converted to a number, a bomb or a flag for the user to see
    const result = grid.cells.filter(v => {
    return v.id === `${x}${y}`;
    });
    if(result[0].count && result[0].value !== "*" ) return  <ClickedCell key={this.state.key}>{result[0].count}</ClickedCell>
    else if(!result[0].count && result[0].value !== "*" ) return <Flag src={require('../images/green-flag.png')} alt=""/>
    else{return <Bomb src={require('../images/bomb.png')} alt=""/>}
  };
  render(){
    return(
      <div>
        {!this.state.clicked &&
          <ClickableCell key={this.state.key} onClick={this.onClick}></ClickableCell>}

          {this.state.clicked &&
            <div>{this.convertValue(this.props)}</div>}
        </div>
          )
        }
      }

      const mapStateToProps = state => ({
        grid: state.grid,
      });

      const mapDispatchToProps = {
      };

      export default connect(mapStateToProps, mapDispatchToProps)(Cell);
