import { shallow, render } from 'enzyme';
import React from 'react';
import { assert } from 'chai';
import { Provider } from 'react-redux';
import { spy } from 'sinon';
import Grid2, { Grid } from '../../../src/components/Grid';
import Row  from '../../../src/components/Row';
import {Game} from '../../../src/components/Grid.styles';
import {store} from '../../../src/store/configureStore';

describe('<Grid />', () => {
  const props = {
    grid: {configuration: '3 4,*...,..*.,....', table:[], cells: []},
    cellsNumber: ["3 4", "*...", "..*.", "...."],
    saveBombsNumber: sinon.spy(),
    store: store
  }

  const testGrid = shallow(<Grid {...props}/>);

  it('should start render an empty div when first loaded', () => {
      expect(testGrid
         .find(Game))
          .to
          .have
          .length(1);
  });

  it('should update table (the length of table is the number of Rows rendered)', () => {
      expect(props.grid.table.length).to.equal(3)
  });

  it('should update cells (the length of cells is the number of Cells rendered)', () => {
      expect(props.grid.cells.length).to.equal(12)
  });
});
