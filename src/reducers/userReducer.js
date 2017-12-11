const INIT = {
  data: null,
  firstName: '',
  surname: '',
  companyName: '',
  telephone: '',
  location: '',
  description: 'not provided',
  dob: 'not provided',
  email: 'not provided',
  gender: 'not provided',
  website: 'not provided',
  specialities: [],
};

export default (state = INIT, { type, data, companyName, location, telephone, description, dob, email, gender, surname, firstName, password, specialities, editing , website, registered}) => {
  switch (type) {
    case 'SAVE_USER_DETAILS':
      return {
        ...state,
        description,
        dob,
        email,
        gender,
        surname,
        firstName,
        telephone,
        location,
        companyName,
        website,
        specialities,
      };
      case 'SAVE_DATA':
        return {
          ...state,
          data,
          description,
          dob,
          email,
          gender,
          surname,
          firstName,
          telephone,
          location,
          companyName,
          website,
          specialities,
        };
      case 'UPDATE_SPECIALITIES':
        return {
          ...state,
          specialities,
        };
        case 'CREATE_SPECIALITIES_ARRAY':
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
