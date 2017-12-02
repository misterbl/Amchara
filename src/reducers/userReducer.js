const INIT = {
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
};


export default (state = INIT, { type, data, description, dob, email, gender, name, password, specialities, editing , website, registered}) => {
  switch (type) {
    case 'SAVE_USER_DETAILS':
      return {
        ...state,
        description,
        dob,
        email,
        gender,
        name,
        password,
        website,
        specialities,
        registered,
      };
      case 'SAVE_DATA':
        return {
          ...state,
          data,
          email,
        };
      case 'UPDATE_SPECIALITIES':
        return {
          ...state,
          specialities,
        };
        case 'SIGN_OUT':
          return {};
    default:
      return state;
  }
};
