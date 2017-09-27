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
      showComments: false
    }
  }

  componentDidMount() {
    this
      .props
      .fetchComments()
  }

  toggleComments() {
    this.setState({
      showComments: !this.state.showComments
    })
  }

  submitComment(e) {
    if (e.keyCode != 13) {
      return
    }
    const newComment = {
      text: e.target.value,
      timestamp: Date.now()
    }
    this
      .props
      .fetchSubmit(newComment, this.props.comments.comments.length)
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
            .props
            .comments
            .comments
            .map((comment, i) => {
              return < Comment key = {
                i
              }
              {
                ...comment
              } />
          })}

          <ToggleBar
            label='Hide Comments'
            onToggle={this
            .toggleComments
            .bind(this)}/>
        </div>
      )
    return (<ToggleBar
      label='Show Comments'
      onToggle={this
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
    border: 'none',
    borderBottom: '1px solid #ddd'
  }
}

const stateToProps = (state) => {
  return {comments: state.comments}
}

const dispatchToProps = (dispatch) => {
  return {
    fetchSubmit: (newComment, length) => {
      dispatch(actions.fetchSubmit(newComment, length))
    },
    fetchComments: () => {
      dispatch(actions.fetchComments())
    }
  }
}
export default connect(stateToProps, dispatchToProps)(Widget);
