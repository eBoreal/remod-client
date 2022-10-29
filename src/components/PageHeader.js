import React, { useState } from 'react'
import Logo from "../assets/logo-remod48.png"

export default function PageHeader( {currentUserId, onClickUser} ) {
    function handleClickButton() {
        onClickUser(null)
    }

    return (
        <div className='app-main-header'>
            <img src={Logo}></img>
            <div className='app-nav-bar'> 
                <a onClick={handleClickButton}>Feed</a>
                <a onClick={handleClickButton}>{currentUserId}</a>

            </div>
            <div className='app-ext-links'> 
                <a href='https://github.com/eBoreal/remod-browser-extension'>Github</a>
                <a href='/'>Notion</a>
            </div>
        </div>
    )
    }


    // <h1 className='pink-font'> Welcome to Remod [Beta] ! </h1>
    // <div className='Instructions'>
    //   <h2 className='white-font'> A couple things you can do here... </h2>
    //   <ul className='white-font'>
    //     <li> Browse the list of web pages that were commented via remod </li>
    //     <li> Navigate to their profile page (click on their names)</li>
    //     <li> Navigate to the website where these comments are injected  (click on url at the bottom of each comment box)
    //     </li>
    //   </ul>
    //   <ul className='pink-font'>
    //     <li> You will need to install the chrome extension to see those boxes on the page </li>
    //     <li> Create an account via the extension pop-up to contribute ;) </li>
    //   </ul>
    //   <ul className='white-font'>
    //     <li> <a className='white-font'  href='https://github.com/eBoreal/remod-browser-extension'>Github</a></li>
    //     <li> <a className='white-font' >Notion</a> </li>
    //   </ul>

    // </div>