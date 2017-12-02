# Amchara Dashboard
*This app is build using Javascript, React and Redux. Enzyme and Chai are used for testing.*
##### You can use the app by clicking here:  [Amchara](https://amchara.herokuapp.com)
##### To use the app locally:
To start, clone this Repo, then on the command line navigate to the containing folder.
You need React JS installed on your computer to run this game. Check the official react documentation for more information: https://reactjs.org

Then type:

`$ npm install`

Once all the dependencies are installed, type:

`$ npm run start`

The app should open automatically in your browser (if it doesn't happen, go to http://localhost:3000/ in your browser)

If you want to run the tests, run:

`$ npm run test:unit`


### Functionnalities
1. Users can sign up clicking the "Sign up" button in the header
2.  Users can log in clicking the "Log in" button in the header
3. Once logged in / signed up, the user's dashboard is showing the user details and information. User can see as well buttons to access their contacts, activities and messages (the button are currently for show and don't redirect to other parts of the app)
4. User can edit their profile in clicking the "Edit" button
5. The edit page allow the user to add / change their name, email, webbsie address, date of birth, gender and description
