const INIT = {
  configuration: null,
  row: null,
  column: null,
  count: 0,
  bombsNumber: null,
  cells: [],
  table: [],
  showInput: true,
};


export default (state = INIT, { type, configuration, row, column, bombsNumber, showInput }) => {
  switch (type) {
    case 'HIDE_INPUT_FIELD':
      return {
        ...state,
        showInput,
      };
    case 'SAVE_GAME_CONFIG':
      return {
        ...state,
        configuration,
        row,
        column,
      };
      case 'SAVE_BOMBS_NUMBER':
        return {
          ...state,
          bombsNumber,
        };
    default:
      return state;
  }
};
