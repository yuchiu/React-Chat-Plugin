import React from 'react'

export default(props) => {
    const comment =props
  return (
    <div style ={style.comment}>
    {comment.text}
    {comment.timestamp}
    </div>

  )
}

const style = {
  comment: {
    padding: 12,
    borderBottom: '1px dotted #ddd'
  }
}