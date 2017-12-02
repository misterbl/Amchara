import userReducer from '../../../src/reducers/userReducer'

describe('userReducer', () => {
  const data = {email: 'emailTest'};
  const description =  "descriptionTest";
  const dob =  "dobTest";
  const email =  "emailTest";
  const gender =  "genderTest";
  const name =  "nameTest";
  const password =  "passwordTest";
  const website =  "websiteTest";
  const specialities = [];
  const registered = false;
  it('should return the correct initial state', () => {
    expect(userReducer(undefined, {type: null}))
    .to
    .deep
    .equal({
      data: null,
      description: 'not provided',
      dob: 'not provided',
      email: 'not provided',
      gender: 'not provided',
      name: 'not provided',
      password: 'not provided',
      website: 'not provided',
      specialities: [],
      registered: false,
    });
  });

  it('should return an updated state with user on SAVE_USER_DETAILS', () => {
    const Action = {type: 'SAVE_USER_DETAILS', description, dob, email, gender, name, password, website, specialities, registered}
    expect(userReducer({}, Action))
    .to
    .deep
    .equal({ description, dob, email, gender, name, password, website, specialities, registered});
  });
});
