import * as actions from '../../../src/actions/gridActions';

describe('Grid Actions', () => {
  describe('saveGameConfig()', () => {
    const configuration = '3 4,*...,..*.,....';
    const row = 3;
    const column = 4;

    it('should be a function', () => {
      expect(actions.saveGameConfig)
        .to
        .be
        .a('function')
    })

    it('should return an object', () => {
      expect(actions.saveGameConfig(configuration, row, column))
        .to
        .be
        .a('object')
    })

    it('shoud have a type of SAVE_GAME_CONFIG', () => {

      expect(actions.saveGameConfig(configuration, row, column).type)
        .to
        .equal('SAVE_GAME_CONFIG')
    });
  })

  describe('saveBombsNumber()', () => {
  const configuration = ['3 4','*...','..*.','....'];

    it('should be a function', () => {
      expect(actions.saveBombsNumber)
        .to
        .be
        .a('function')
    })
    
    it('should return an object', () => {

      expect(actions.saveBombsNumber(configuration))
        .to
        .be
        .a('object')
    })

    it('shoud have a type of SAVE_BOMBS_NUMBER', () => {
      expect(actions.saveBombsNumber(configuration).type)
        .to
        .equal('SAVE_BOMBS_NUMBER')
    });
  })
});
