import constants from '../constants'
import firebase from 'firebase'
import {
    Base64
} from 'js-base64'


const fbApp = firebase.initializeApp({
    apiKey: "AIzaSyCInPa7aF1jnJQ6rkWpnm_8AKPi-iO70DU",
    authDomain: "react-chat-app-caf05.firebaseapp.com",
    databaseURL: "https://react-chat-app-caf05.firebaseio.com",
    projectId: "react-chat-app-caf05",
    storageBucket: "react-chat-app-caf05.appspot.com",
    messagingSenderId: "703234059280"
})

const path = Base64.encode(window.location.href) + '/comments'

    // let comments = Object.assign([], this.state.comments)

    // const path = Base64.encode(window.location.href) + '/comments/' + comments.length

    // this
    //   .state
    //   .firebase
    //   .database()
    //   .ref(path)
    //   .set(comment)


export default {

    submitComment: (newComment) => {
        return (dispatch)=>{
            
            dispatch({
                type: constants.SUBMIT_COMMENT,
                payload: newComment
            })
        }
    },
    fetchComments: () => {
        return (dispatch) => {
            fbApp
                .database()
                .ref(path)
                .on('value', (snapshot) => {
                    const data = snapshot.val()
                    console.log('inside actions, comments updated' + JSON.stringify(data))
                    if (data == null) {
                        return
                    }
                    dispatch({
                        type: constants.FETCH_COMMENTS,
                        payload:  data.reverse()
                    })
                })

        }
    }

}