import React, { useEffect, useState } from 'react'
import PageSnap from '../components/PageSnap';
import '../styles/Content.css';
import { useParams } from 'react-router-dom'




export default function Profile() {
  const [backendData, setbackendData] = useState([{}])
  const { userId } = useParams()

  useEffect( () => {
    console.log(userId)
    if (userId) {
        getUserComments()
    }
  }, [userId])

  function onClickUser(userId) {
    window.location.href = `/${userId}`
  }

  async function getUserComments() {
    const res = await fetch(`/api/comments/getByUser/${userId}`)
    const comments = await res.json()
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
  console.log("rebderub")
  return (
    <div className="Home">
        <h1> Check out <span className='userName'> {userId}</span>'s contributions to Remod [Beta] ! </h1>
      {backendData.byUrlandBoxes && Object.entries(backendData.byUrlandBoxes).map(
        ([url, pageBoxes]) => {
            return <PageSnap key={url} 
                    url={url} boxes={pageBoxes} 
                    onClickUser={onClickUser}/>
        }
      )
      }
    </div>
  )
}
