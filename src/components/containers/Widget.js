import React from 'react'
import {ToggleBar} from '../presentation'
import Comment from '../presentation/Comment'

class Widget extends React.Component {
  constructor() {
    super()
    this.state = {
      showComments: false,
      comments: []
    }
  }
  submitComment(e) {
    if (e.keyCode != 13) {
      return
    }
    const comment = {
      text: e.target.value,
      timestamp: Math.round(Date.now() / 1000)
    }
    console.log(comment)
    let comments = Object.assign([], this.state.comments)
    comments.push(comment)
    console.log(comments)
    this.setState({comments: comments})
    e.target.value = '' //clear input
  }

  toggleComments() {
    console.log('toggle' + this.state.showComments)
    this.setState({
      showComments: !this.state.showComments
    })
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
                comment.timestamp
              }
              {
                ...comment
              } />
          })}

          <ToggleBar onToggle={this
            .toggleComments
            .bind(this)}/>
        </div>
      )
    return (<ToggleBar onToggle={this
      .toggleComments
      .bind(this)}/>)
  }
}
const style = {
  comments: {
    zIndex: 100,
    width: 333,
    height: '100%',
    position: 'fixed',
    top: 0,
    right: 0,
    background: 'grey'
  },
  input: {
    height: 32,
    padding: 5,
    width: 100 + '%',
    position: 'fixed',
    bottom: 30
  }
}
export default Widget;
