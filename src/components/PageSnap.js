import { createBrowserHistory } from '@remix-run/router'
import React from 'react'
import CommentList from './CommentList'

export default function PageSnap( {url, boxes, onClickUser} ) {
    // for now lets just show 1 box per url
    const boxToShow = Object.entries(boxes)[0]
    return (
        <div className='PageSnap'>
            <div className='Content'>
                <CommentList comments={boxToShow[1]} onClickUser={onClickUser}/>
            </div>
            <div className='PageFooter'> 
                <a href={url} className='linkToPage'> {url} </a>
            </div>
        </div>
    )
}
