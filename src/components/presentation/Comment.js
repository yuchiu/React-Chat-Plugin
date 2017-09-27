import React from 'react'
import Moment from 'react-moment'

export default(props) => {
    const comment =props
  return (
    <div style ={style.comment}>
    {comment.text}<br/>
    <Moment style ={style.moment}format="MMM d, YYYY" date={comment.timestamp}/>
    </div>

  )
}

const style = {
  comment: {
    padding: 12,
    borderBottom: '1px dotted grey'
  },
  moment:{
      color: '#777',
      fontSize: 12,
      fontWeight: 100
  }
}