import { shallow, mount } from 'enzyme';
import React from 'react';
import { assert, expect } from 'chai';
import { spy } from 'sinon';
import { Cell } from '../../../src/components/Cell';
import { ClickableCell} from '../../../src/components/Cell.styles';


describe('<Cell />', () => {
  const props = {
    grid: {configuration: '3 4,*...,..*.,....', table:[], cells: [
      {id: `${0}${0}`, x: 0, y: 0, count: 0, value: "*"},
      {id: `${0}${1}`, x: 0, y: 1, count: 0, value: "*"},
      {id: `${0}${2}`, x: 0, y: 2, count: 0, value: "."},
    ]},
    assignValue: sinon.spy(),
    convertValue: sinon.spy(),
    x: 0,
    y: 1,
    value: ".",
  }
  const testCell = shallow(<Cell {...props}/>);

  it('should start render ClickableCell when first loaded', () => {
    expect(testCell
      .find(ClickableCell))
      .to
      .have
      .length(1);
    });

  it('should assign the right value/count to the cells)', () => {
    expect(props.grid.cells).to.eql([
      {id: `${0}${0}`, x: 0, y: 0, count: 0, value: "*"},
      {id: `${0}${1}`, x: 0, y: 1, count: 1, value: "*"},
      {id: `${0}${2}`, x: 0, y: 2, count: 0, value: "."},
    ])
  });
  });
