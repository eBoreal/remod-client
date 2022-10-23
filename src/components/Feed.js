import React from 'react'
import PageSnap from './PageSnap';


export default function Feed( {data, onClickUser} ) {
  return (
    <div className='Feed'>
        {Object.entries(data).map(
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
