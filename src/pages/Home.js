import React, { useEffect, useState } from 'react'
import Feed from '../components/Feed'
import '../styles/Content.css';
import PageHeader from '../components/PageHeader'
import CommentList from '../components/CommentList';

export default function Home() {
  const [backendData, setbackendData] = useState([{}])
  const [userId, setUserId] = useState(null)
  const [route, setRoute] = useState(null)

  useEffect( () => {
    console.log(route)
    if (route) getComments(route);
  }, [route])
  
  useEffect( () => {
    if (userId) {
      setRoute(`/api/comments/getByUser/${userId}`)
    } else {
      setRoute("/api/comments/getAll")
    }
  }, [userId])

  function onClickUser(userId) {
    setUserId(userId)
  }

  async function getComments(route) {
    const res = await fetch(route, 
      {mode:'no-cors'})
    const comments = await res.json()
    console.log(comments)
    const byUrlandBoxes = mapToBoxes(comments)
    setbackendData({byUrlandBoxes})
  }

  function mapToBoxes(comments) {
    const byUrlandBoxes = {}
    comments.forEach(comment => {
        if (!(comment.url in byUrlandBoxes)) {
            byUrlandBoxes[comment.url] = {[comment.boxId]: [comment]}
            return
        }
        if (!(comment.boxId in byUrlandBoxes[comment.url])) {
            byUrlandBoxes[comment.url][comment.boxId] = [comment]
            return
        }
        byUrlandBoxes[comment.url][comment.boxId].push(comment)
    })
    return byUrlandBoxes
  }
  
  if (!(backendData.byUrlandBoxes)) return (<p>loading...</p>)

  return (
    <div className='AppContainer'>
      <PageHeader isHomeCurrent={true} currentUserId={userId}
      onClickUser={onClickUser}/>
      {backendData.byUrlandBoxes && <Feed data={backendData.byUrlandBoxes} 
      onClickUser={onClickUser}></Feed>
      }
    </div>
  )
}
