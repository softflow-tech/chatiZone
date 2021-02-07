import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { IconButton } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import EmailIcon from '@material-ui/icons/Email';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import db from '../firebase'
import '../css/Account.css'
import { useStateValue } from "../components/StateProvider";

export default function Account() {

    let { accountId } = useParams();
    const [{ user }, dispatch] = useStateValue();
    const [userDetails, setUserDetails] = useState("");
    const [friends, setFriends] = useState("");
    const [exist, setExists] = useState(true);
    console.log(dispatch)
    if (accountId === undefined) {
        accountId = user.email
    }

    db.collection('users').doc(accountId).get().then((doc) => {
        setExists(doc.exists);
        // console.log('HELLOOO', doc)
    })

    db.collection('users').doc(user.email).collection('friends').doc(accountId).get().then((doc) => {
        if (doc.data()) {
            setFriends("true");
        } else {
            setFriends("false");
        }
    })
    const slideRight = () => {
        document.getElementById('root').style.left = '-100%';
        document.getElementById('root').style.animation = 'slide-in 1s';

        //get the text by id or predefined or however you wish or passed to function
        var txt = userDetails.email;


        setTimeout(() => { document.getElementById("new-chat-username").focus(); }, 1300);
        document.getElementById("new-chat-username").value = txt;
    };


    useEffect(() => {
        const unsubscribe = db.collection('users').doc(accountId).onSnapshot((snapshot) => setUserDetails(snapshot.data()));

        return () => {
            unsubscribe();
        }
    }, [accountId]);


    const addFriend = () => {
        db.collection('users').doc(user.email).collection('friends').doc(accountId).set({
            friends: true,
        })
        setFriends('true');
    }
    const removeFriend = () => {
        db.collection('users').doc(user.email).collection('friends').doc(accountId).delete();
        setFriends('false');
    }

    if (!exist) {
        return (
            <div className='account'>
                <div className='account__header'>
                    <div className='imgContainer'>
                        <img src='https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg' alt='profile_picture' />
                    </div>
                    <h1> </h1>

                </div>
                <div className='account__info'>
                    <br />
                    <h1>User does not exist</h1>
                    <h3>{accountId}</h3>
                </div>
            </div>
        )
    } else if (accountId !== user.email && exist) {
        return (
            <div className='account'>
                <div className='account__header'>
                    <div className='imgContainer'>
                        <img src={userDetails?.photoURL} alt='profile_picture' />
                    </div>
                    <h1> </h1>

                </div>
                <div className='account__info'>
                    <br />
                    <h1>{userDetails.displayName}</h1>
                    <br />
                    {/* <h2>Account information: </h2> */}
                    <div className='account__userinfo'>
                        <div className='account__email'>
                            <p><b><EmailIcon style={{ marginRight: '5px' }} /></b> {userDetails.email}</p>
                        </div>
                        <div className='account__icons'>
                            <IconButton>
                                <PersonAddIcon onClick={addFriend} style={friends === 'false' ? { fontSize: 40 } : { display: 'none' }} />
                                <PersonAddDisabledIcon onClick={removeFriend} style={friends === 'true' ? { fontSize: 40 } : { display: 'none' }} />
                            </IconButton>
                        </div>
                    </div>
                    <div style={{textAlign:'center', marginTop: '20%'}}>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ChatIcon style={{color:'inherit'}} />}
                        onClick={slideRight}
                    >
                        Send New Message
                    </Button>

                    </div>
                </div>

            </div>
        )
    } else {
        return (
            <div className='account'>
                <div className='account__header'>
                    <div className='imgContainer'>
                        <img src={userDetails?.photoURL} alt='profile_picture' />
                    </div>
                    <h1> </h1>

                </div>
                <div className='account__info'>
                    <br />
                    <h1>{userDetails.displayName}</h1>
                    <br />
                    <div className='account__email'>
                        <p><b><EmailIcon style={{ fontSize: 200 }} /> </b>{userDetails.email}</p>
                        <p><b>Last Login: </b>{user.metadata.lastSignInTime}</p>
                    </div>
                </div>
            </div>
        )
    }
}
