import firebase from '../firebase';


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

export const signOut = () => ({
  type: 'SIGN_OUT',
});

export const retrieveUserInfo = (id) => (
  dispatch => {
    firebase.database().ref('users/' + id).on("value", function(snapshot) {
      if(snapshot) {
        dispatch(saveUserDetails(snapshot.val().description, snapshot.val().dob,
      snapshot.val().email, snapshot.val().gender, snapshot.val().name,
      snapshot.val().password, snapshot.val().website, snapshot.val().specialities, snapshot.val().registered));
    }}, function (errorObject) {
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
    const editDob = values && values.editDob ? values.editDob : password;
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

  export const addSpeciality = (newSpeciality, specialities) => (
    dispatch => {
      specialities.push(newSpeciality);
      dispatch({type: 'UPDATE_SPECIALITIES', specialities});
    });
