# Mélange

Smooth and functional React application that records and determines words-per-minute. \

All code is split into respective folders inside the 'src' folder. If you have any questions send me a message over on my [LinkedIn](https://www.linkedin.com/in/trevor-marshall-0b17121b2/)

## Database used

Firebase was used and if you are going to use this app you are going to have to come up with your own api key and project in firebase to run the app without it crashing. \

## Firebase Setup

Directions to start an application in Firebase can be found [here](https://firebase.google.com/docs/web/setup). \

Make sure to have an account set up with firebase before trying to make a project with firebase.\

Make sure to add the code below to the bottom of the firebase config file to export and allow usage of the data from the firebase to the rest of the app

```
// store firebase data in "db"
export const db = firebase.firestore();

// google authentification
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

```

Everything below is the normal React directions that come with create-react-app.

## Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
