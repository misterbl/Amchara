export const saveGameConfig = (configuration, row, column) => ({
  //this function saves in the store the user's input for the game's configuration
  // and the number of rows and columns that the game will contain
  type: 'SAVE_GAME_CONFIG',
  configuration,
  row,
  column,
});

export const saveBombsNumber = (configuration, bombsNumber) => ({
  //going through the user input for gane's configuration, this function
  //calculate how many bombs are in the game by counting the "*"
  type: 'SAVE_BOMBS_NUMBER',
  bombsNumber: (configuration.join().match(/[*]/g) || []).length,
});

export const hideInputField = () => ({
  type: 'HIDE_INPUT_FIELD',
  showInput: false,
});
