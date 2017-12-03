import firebase from '../firebase';
import { push } from 'react-router-redux';

export const redirect = (route, goTo = push) => (
  dispatch => (
    dispatch(goTo(route))
  )
);

export const saveUserDetails = (description, dob, email, gender, name, password, website, specialities, registered) => ({
  type: 'SAVE_USER_DETAILS',
  description,
  dob,
  email,
  gender,
  name,
  password,
  website,
  specialities: specialities ? specialities : [],
  registered,
});

export const saveData = (data) => ({
  type: 'SAVE_DATA',
  data,
  email: data.email,
  specialities: [],
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
      snapshot.val().email, snapshot.val().gender, snapshot.val().name,
      snapshot.val().password, snapshot.val().website, snapshot.val().specialities, snapshot.val().registered));
    }
       else{editProfile(null, props)}}, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
);
export const editProfile = (values, props) => (
  dispatch => {
    const {name, email, password, dob, gender, description, specialities, website} = props
    const editName = values && values.editName ? values.editName : name;
    const editEmail = values && values.editEmail ? values.editEmail : email;
    const editWebsite = values && values.editWebsite ? values.editWebsite : website;
    const editPassword = values && values.editPassword ? values.editPassword : password;
    const editDob = values && values.editDob ? values.editDob : dob;
    const editGender = values && values.editGender ? values.editGender : gender;
    const editDescription = values && values.editDescription ? values.editDescription : description;
    const editSpecialities = !specialities ? [] : specialities;
    if(props.data) {
      firebase.database().ref('users/' + props.data.uid).set({
        name: editName,
        email: editEmail,
        password: editPassword,
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
