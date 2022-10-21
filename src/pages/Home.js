import React, { useEffect, useState } from 'react'
import PageSnap from '../components/PageSnap';
import '../styles/Content.css';


export default function Home() {
  const [backendData, setbackendData] = useState([{}])
  
  useEffect( () => {
    getAllComments()
  }, [])

  function onClickUser(userId) {
    window.location.href = `/${userId}`
  }

  async function getAllComments() {
    const res = await fetch("/api/comments/getAll")
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

  return (
    <div className="Home">
      <h1 className='pink-font'> Welcome to Remod [Beta] ! </h1>
      <div className='Instructions'>
        <h2 className='white-font'> A couple things you can do here... </h2>
        <ul className='white-font'>
          <li> Browse the list of web pages that were commented via remod </li>
          <li> Navigate to their profile page (click on their names)</li>
          <li> Navigate to the website where these comments are injected  (click on url at the bottom of each comment box)
          </li>
        </ul>
        <ul className='pink-font'>
          <li> You will need to install the chrome extension to see those boxes on the page </li>
          <li> Create an account via the extension pop-up to contribute ;) </li>
        </ul>
        <ul className='white-font'>
          <li> <a className='white-font'  href='https://github.com/eBoreal/remod-browser-extension'>Github</a></li>
          <li> <a className='white-font' >Notion</a> </li>
        </ul>

      </div>
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
