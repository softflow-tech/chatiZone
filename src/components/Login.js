import React from 'react'
import firebase from 'firebase'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import '../css/Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider"
import db , { auth , provider}  from '../firebase'
import logoimg from './logo.png'; 
import google from './icon-google.png';

var firebaseui = require('firebaseui');
const ui = new firebaseui.auth.AuthUI(firebase.auth());

export default function Login(){
    const classes = useStyles();
    const createUser = (uid,email, displayName, photoURL) => {
        db.collection('users').doc(email).set({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: `https://avatars.dicebear.com/api/gridy/${avataImage(email)}.svg?background=%23ebf1ff`,
            friends: [],
            messages: [],
        }).then(() => {
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    };

    const [{u} , dispatch ]  = useStateValue();
    console.log(u)

    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: authResult.user,
                });
                // if (!db.collection('users').doc(authResult.user.uid)){
                    createUser(authResult.user.uid,authResult.user.email, authResult.user.displayName, authResult.user.photoURL)
                // };
                return true;
            },
            uiShown: function() {
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        // signInSuccessUrl: '/account',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        // tosUrl: '<your-tos-url>',
        // Privacy policy url.
        // privacyPolicyUrl: '<your-privacy-policy-url>'
    };
    
    ui.start('#firebaseui-auth-container', uiConfig);

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) =>{
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                // if (db.collection('users').doc(result.user.email) == null || db.collection('users').doc(result.user.email) == undefined){
                createUser(result.user.email,result.user.email, result.user.displayName, result.user.photoURL)
                // }

            })
            .catch((error) => alert(error.message));
    };
    return(
        <div className='login'>
            <div className='login__container'>
                <div className='login__text'>
                <div className={classes.root}>
                    <img src={logoimg} alt='ChatiZone Logo' style={{width:200, height:200}}/>                </div>
                    <h1>ChatiZone</h1>
                </div>
                <div id="firebaseui-auth-container" style={{fontFamily:"monospace"}}></div>
                <div id="loader">Loading...</div>
                <br/>
                <p>Alternative Login Methods</p>

                <div onClick={signIn} id="googleLog">
                    <img src={google} alt="Google Login" />
                </div>
				
            </div>
        </div>
    );
}

function avataImage(params) {
    var sequence = params
    var matches = sequence.match(/[A-z]/g);
    return(matches.join(''));
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));