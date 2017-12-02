import * as actions from '../../../src/actions/userActions';

describe('User Actions', () => {
    const description =  "descriptionTest";
    const dob =  "dobTest";
    const email =  "emailTest";
    const gender =  "genderTest";
    const name =  "nameTest";
    const password =  "passwordTest";
    const website =  "websiteTest";
    const specialities = [];
  describe('saveUserDetails()', () => {
    it('should be a function', () => {
      expect(actions.saveUserDetails)
        .to
        .be
        .a('function')
    })

    it('should return an object', () => {
      expect(actions.saveUserDetails(description, dob, email, gender, name, password, website, specialities))
        .to
        .be
        .a('object')
    })

    it('SAVE_USER_DETAILS', () => {
      expect(actions.saveUserDetails(description, dob, email, gender, name, password, website, specialities).type)
        .to
        .equal('SAVE_USER_DETAILS')
    });
  })

  describe('saveData()', () => {
    const data = {email: "emailTest"};
    it('should be a function', () => {
      expect(actions.saveData)
        .to
        .be
        .a('function')
    })

    it('should return an object', () => {
      expect(actions.saveData(data))
        .to
        .be
        .a('object')
    })

    it('shoud have a type of SAVE_DATA', () => {
      expect(actions.saveData(data).type)
        .to
        .equal('SAVE_DATA')
    });
  })
  describe('signOut()', () => {
    it('should be a function', () => {
      expect(actions.signOut)
        .to
        .be
        .a('function')
    })

    it('should return an object', () => {
      expect(actions.signOut())
        .to
        .be
        .a('object')
    })

    it('shoud have a type of SIGN_OUT', () => {
      expect(actions.signOut().type)
        .to
        .equal('SIGN_OUT')
    });
  })
});
