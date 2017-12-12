import firebase from '../firebase';
import { push } from 'react-router-redux';

export const redirect = (route, goTo = push) => (
  dispatch => (
    dispatch(goTo(route))
  )
);

export const saveUserDetails = (description, dob, email, firstName,
  surname, companyName, telephone, location, website, specialities, registered) => ({
  type: 'SAVE_USER_DETAILS',
  description,
  dob,
  email,
  firstName,
  surname,
  companyName,
  telephone,
  location,
  website,
  specialities: specialities ? specialities : [],
  registered,
});

export const saveData = (data) => ({
  type: 'SAVE_DATA',
  data,
  email: data.email,
  firstName: '',
  surname: '',
  companyName: '',
  telephone: '',
  location: '',
  description: 'not provided',
  dob: 'not provided',
  website: 'not provided',
  specialities: []
});


export const signOut = () => (
dispatch => {
  localStorage.clear();
  dispatch({type: 'SIGN_OUT'});
  dispatch(push('/'))
}
);

export const retrieveUserInfo = (props) => (
  dispatch => {
    firebase.database().ref('users/' + props.data.uid).on("value", function(snapshot) {
      if(snapshot.val()) {
        dispatch(saveUserDetails(snapshot.val().description, snapshot.val().dob,
      snapshot.val().email, snapshot.val().firstName, snapshot.val().surname,
      snapshot.val().companyName, snapshot.val().telephone, snapshot.val().location,
      snapshot.val().website, snapshot.val().specialities, snapshot.val().registered));
    }
       else{editProfile(null, props)}}, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
);

export const createProfile = (values, props) => (
  dispatch => {
    firebase.database().ref('users/' + props.data.uid).set({
      description: 'not specified',
      dob: 'not specified',
      website: 'not specified',
      firstName: values.firstName ? values.firstName : 'not specified',
      surname: values.surname ? values.surname : 'not specified',
      companyName: values.companyNam ? values.companyName : 'not specified',
      email: values.email ? values.email : 'not specified',
      telephone: values.telephone ? values.telephone : 'not specified',
      location: values.location ? values.location : 'not specified',
      registered: true,
    })
  }
)

export const editProfile = (values, props) => (
  dispatch => {
    const {firstName, surname, email, dob, telephone, description, specialities, website, location} = props
    const editFirstName = values && values.editFirstName ? values.editFirstName : firstName;
    const editSurname = values && values.editSurname ? values.editSurname : surname;
    const editEmail = values && values.editEmail ? values.editEmail : email;
    const editWebsite = values && values.editWebsite ? values.editWebsite : website;
    const editDob = values && values.editDob ? values.editDob : dob;
    const editTelephone = values && values.editTelephone ? values.editTelephone : telephone;
    const editLocation = values && values.editLocation ? values.editLocation : location;
    const editDescription = values && values.editDescription ? values.editDescription : description;
    const editSpecialities = !specialities ? [] : specialities;
    if(props.data) {
      firebase.database().ref('users/' + props.data.uid).set({
        firstName: editFirstName,
        surname: editSurname,
        email: editEmail,
        website: editWebsite,
        dob: editDob,
        telephone: editTelephone,
        location: editLocation,
        description: editDescription,
        specialities: editSpecialities,
        registered: true,
      })
    }
  })

  export const createSpecialities = () => ({
    type: 'CREATE_SPECIALITIES_ARRAY',
    specialities: [],
  });


const saveSpeciality = (specialities, props) => {
  firebase.database().ref('users/' + props.data.uid).set({
    description: props.description,
    dob: props.dob,
    email: props.email,
    firstName: props.firstName,
    surname: props.surname,
    companyName: props.companyName,
    telephone: props.telephone,
    location: props.location,
    website: props.website,
    specialities: specialities,
    })
}

  export const addSpeciality = (newSpeciality, props) => (
    dispatch => {
      const {specialities} = props;
      if(newSpeciality) specialities.push(newSpeciality);
      dispatch({type: 'UPDATE_SPECIALITIES', specialities});
      saveSpeciality(specialities, props);
    });
