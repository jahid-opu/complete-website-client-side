import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import Google from '../../images/google.png';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)

}

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleClick = () => {

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user);
                const { displayName, email,photoURL } = result.user;
                const signedInUser = { userName: displayName, email,photoURL }
                console.log(signedInUser)
                setLoggedInUser(signedInUser);
                // setUserToken();
                history.replace(from)
            }).catch((error) => {
                var errorMessage = error.message;
                console.log((errorMessage));
            });

    }
    
// const setUserToken = () => {
//     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//         sessionStorage.setItem('token', idToken)
//       }).catch(function(error) {
//         // Handle error
//       });
      
// }

    return (
        <div className = "d-flex justify-content-center login-area">
            {/* <button className="btn btn-primary" onClick={handleClick}>Continue with Google</button> */}
            <div className="d-flex google-btn" onClick={handleClick}>
                <img src={Google} alt="" />
                <p><b>Continue With Google </b></p>
            </div>
        </div>
    );
};

export default Login;