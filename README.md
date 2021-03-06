# React Store App (React: 16.14.0)

E-commerce project DEMO:
- [vercel.app link](https://react-store-02.vercel.app)


---------------

## Firebase [module](https://www.npmjs.com/package/firebase)

- [console](https://console.firebase.google.com/?hl=ru&pli=1)
- Firebase => Create Project => Project Overview => Web => R-Store => Register App
- Copy <script>   var firebaseConfig = { ... } </script>
- Run ```npm i firebase```
- Create file ``` /firebase/firebase.utils.js```
- Firebase => Develop => Authentication => Sign-in method => Google => Enable => rename project => Save
- Firebase => Develop => Authentication => Sign-in method => Email & Password => Enable => Save
- Firebase => Develop => Authentication => Sign-in method => Authorized domains => Add domain => Add
- use it on SignIn component:
```
    import {signInWithGoogle} from "../../firebase/firebase.utils";
    <CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>
```
- [docs](https://firebase.google.com/docs/web/setup)

### Firestore

- [Firebase](https://console.firebase.google.com) => Cloud Firestore => Develop => Database => Create Database => Start in test mode => Enable
- Data => Add Collection => Start a collection => Collection ID: (users) => Next => Document ID (autogenerate) => Field (displayName: Tom) => Save
- TODO: Store Auth user to Cloud Firestore DB
- **firebase.utils.js:**
``` 
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDFrtyZ1g-BCvZN5t734kjPx3vFNvVoZh8",
    authDomain: "r-store-2020.firebaseapp.com",
    databaseURL: "https://r-store-2020.firebaseio.com",
    projectId: "r-store-2020",
    storageBucket: "r-store-2020.appspot.com",
    messagingSenderId: "1027074817941",
    appId: "1:1027074817941:web:2efe01b00a5abe5d83809c",
    measurementId: "G-8HFVZZ2QE6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    console.log(snapShot)

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('ERROR! (user creating in DB process ...)', error.message)
        }
    }

    return userRef
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
```

- **App.jsx**:
``` 
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

...
    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
                await createUserProfileDocument(user)
            }
        );
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }
```

---------------


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
