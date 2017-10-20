import gridReducer from '../../../src/reducers/gridReducer'

describe('gridReducer', () => {
  it('should return the correct initial state', () => {
    expect(gridReducer(undefined, {type: null}))
    .to
    .deep
    .equal({
      configuration: null,
      row: null,
      column: null,
      count: 0,
      bombsNumber: null,
      cells: [],
      table: [],
      showInput: true,
    });
  });

  it('should return an updated state with user on SAVE_CELLS', () => {
    const Action = {type: 'SAVE_GAME_CONFIG', configuration: '3 4,*...,..*.,....', row: 3, column: 4}
    expect(gridReducer({}, Action))
    .to
    .deep
    .equal({ configuration: '3 4,*...,..*.,....', row: 3, column: 4 });
  });

  it('should return an updated state with user on SAVE_BOMBS_NUMBER', () => {
    const Action = {type: 'SAVE_BOMBS_NUMBER', bombsNumber: 2}
    expect(gridReducer({}, Action))
    .to
    .deep
    .equal({ bombsNumber: 2 });
  });
});
