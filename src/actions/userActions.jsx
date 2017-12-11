import firebase from '../firebase';
import { push } from 'react-router-redux';

export const redirect = (route, goTo = push) => (
  dispatch => (
    dispatch(goTo(route))
  )
);

export const saveUserDetails = (description, dob, email, gender, firstName,
  surname, companyName, telephone, location, website, specialities, registered) => ({
  type: 'SAVE_USER_DETAILS',
  description,
  dob,
  email,
  gender,
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
  specialities: [],
  description: 'not provided',
  dob: 'not provided',
  gender: 'not provided',
  name: 'Your name here',
  password: 'not provided',
  website: 'not provided',
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
      snapshot.val().email, snapshot.val().gender, snapshot.val().firstName, snapshot.val().surname,
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
      firstName: values.firstName,
      surname: values.surname,
      companyName: values.companyName,
      email: values.email,
      telephone: values.telephone,
      location: values.location,
      registered: true,
    })
  }
)

export const editProfile = (values, props) => (
  dispatch => {
    const {firstName, surname, email, dob, gender, description, specialities, website} = props
    const editFirstName = values && values.editFirstName ? values.editFirstName : firstName;
    const editSurname = values && values.editSurname ? values.editSurname : surname;
    const editEmail = values && values.editEmail ? values.editEmail : email;
    const editWebsite = values && values.editWebsite ? values.editWebsite : website;
    const editDob = values && values.editDob ? values.editDob : dob;
    const editGender = values && values.editGender ? values.editGender : gender;
    const editDescription = values && values.editDescription ? values.editDescription : description;
    const editSpecialities = !specialities ? [] : specialities;
    if(props.data) {
      firebase.database().ref('users/' + props.data.uid).set({
        firstName: editFirstName,
        surname: editSurname,
        email: editEmail,
        website: editWebsite,
        dob: editDob,
        gender: editGender,
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



  export const addSpeciality = (newSpeciality, specialities) => (
    dispatch => {
      if(newSpeciality) specialities.push(newSpeciality);
      dispatch({type: 'UPDATE_SPECIALITIES', specialities});
    });
