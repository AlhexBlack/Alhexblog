import React from 'react'
import './ArticleCard.css'

function ArticleCard ({}) {
  return (
    <div className='articleCard'>
        <img src='' alt=''></img>
        <div>
            <h3>title</h3>
            <p>excerpt</p>
            <div className='aut_date'>
                <p>Author</p>
                <p>date</p>
            </div>
            
        </div>
    </div>
  )
}

export default ArticleCard