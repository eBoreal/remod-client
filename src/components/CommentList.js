import React from 'react'
import Comment from './Comment'

export default function CommentList({ comments, onClickUser }) {
  return (
    <>
        {comments.map(comment => {
          return <Comment key={comment.id} 
                          comment={comment}
                          onClickUser={onClickUser}/>
        })}
    </>
  )
}
