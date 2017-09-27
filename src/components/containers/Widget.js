import React from 'react'
import {ToggleBar} from '../presentation'
import Comment from '../presentation/Comment'
import firebase from 'firebase'
import {Base64} from 'js-base64'

import actions from '../../actions'
import {connect} from 'react-redux'

class Widget extends React.Component {
  constructor() {
    super()
    this.state = {
      showComments: false,
      comments: [],
      firebase: null
    }
  }

  componentDidMount() {
    const fbApp = firebase.initializeApp({
      apiKey: "AIzaSyCInPa7aF1jnJQ6rkWpnm_8AKPi-iO70DU",
      authDomain: "react-chat-app-caf05.firebaseapp.com",
      databaseURL: "https://react-chat-app-caf05.firebaseio.com",
      projectId: "react-chat-app-caf05",
      storageBucket: "react-chat-app-caf05.appspot.com",
      messagingSenderId: "703234059280"
    })
    this.setState({firebase: fbApp})
    const path = Base64.encode(window.location.href) + '/comments'

    fbApp
      .database()
      .ref(path)
      .on('value', (snapshot) => {
        const data = snapshot.val()
        console.log('comments updated' + JSON.stringify(data))

        if (data == null) {
          return
        }
        this.setState({
          comments: data.reverse()
        })
      })
  }

  toggleComments() {
    console.log('toggle' + this.state.showComments)
    this.setState({
      showComments: !this.state.showComments
    })
  }

  submitComment(e) {
    if (e.keyCode != 13) {
      return
    }

    const comment = {
      text: e.target.value,
      timestamp: Date.now()
    }
    let comments = Object.assign([], this.state.comments)

    const path = Base64.encode(window.location.href) + '/comments/' + comments.length

    this
      .state
      .firebase
      .database()
      .ref(path)
      .set(comment)
    e.target.value = ''

  }

  render() {
    if (this.state.showComments) 
      return (
        <div style ={style.comments}>
          <div>
            <input
              onKeyDown={this
              .submitComment
              .bind(this)}
              type="text"
              placeholder="Enter Comment"
              style={style.input}/>
          </div>

          {this
            .state
            .comments
            .map((comment, i) => {
              return < Comment key = {
                i
              }
              {
                ...comment
              } />
          })}

          <ToggleBar label= 'Hide Comments'onToggle={this
            .toggleComments
            .bind(this)}/>
        </div>
      )
    return (<ToggleBar  label = 'Show Comments'onToggle={this
      .toggleComments
      .bind(this)}/>)
  }
}
const style = {
  comments: {
    zIndex: 100,
    height: '100%',
    width: 333,
    position: 'fixed',
    top: 0,
    right: 0,
    background: '#eaf2ff',
    borderLeft: '2px solid grey',
    overflowY: 'scroll',
    paddingBottom: 64
  },
  input: {
    height: 36,
    padding: 9,
    width: '100%',
    border:'none',
    borderBottom: '1px solid #ddd'
  }
}

const stateToProps = (state)=>{
    return {
      comments : state.comments
    }
}

const dispatchToProps = (dispatch)=>{
  return{
    submitComment : (newComment)=>{
      dispatch(actions.submitComment(newComment))
    }
  }

}



export default connect(stateToProps, dispatchToProps)(Widget);
