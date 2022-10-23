import React, { useState } from 'react'

export default function PageHeader( {currentUserId, onClickUser} ) {
    const [navButtons, setNavButtons] = useState(
        [
            {name:"Feed", value:"Feed", current:true}, 
            {name:"Users", value:currentUserId, current:false},
        ]
    )
    const [extButtons, setExtButtons] = useState(
        [
            {name:"Github", value:"Github", current:true, href:'https://github.com/eBoreal/remod-browser-extension'}, 
            {name:"Notion", value:"Notion", current:false, href:'/'},
        ]
    )

    function handleClickButton() {
        onClickUser(null)
    }

    return (
        <div className='app-main-header'>
            <div>Icon</div>
            <div className='app-nav-bar'> 
                {
                    navButtons.map(button => {
                        return <a key={button.name}
                                onClick={handleClickButton}
                                > {button.value}</a>
                    })
                }  
            </div>
            <div className='app-ext-links'> 
                {
                    extButtons.map(button => {
                        return <a key={button.name}
                                href={button.href}
                                > {button.value}</a>
                    })
                }  
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