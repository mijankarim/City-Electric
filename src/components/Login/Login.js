import React, { useState, useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => { 
  const [user, setUser] = useState({
    isSignedIn: false,
    userName: "",
    email: ""
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
       
        const signedInUser = {
          isSignedIn: true,
          userName: displayName,
          email: email,
          image: photoURL
        };
        
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const signedInUser = {
          isSignedIn: false,
          userName: "",
          email: "",
        };
        setUser(signedInUser);
      });
  };

  return ( 
      <div className="text-center my-5 py-5 login-area shadow p-3 mb-5 bg-body rounded">
        <h3 className="mb-5 fw-bold">City Electric</h3>
        <h4 className="text-center mb-4">Login With</h4>
        <button onClick={handleGoogleSignIn} className="google-btn">
          <FcGoogle /> Continue
          With Google
        </button>
      </div>
  );
};

export default Login;