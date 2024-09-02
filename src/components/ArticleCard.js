import React from 'react'
import './ArticleCard.css'
import { Link } from 'react-router-dom'

function ArticleCard ({id, title, size, imgSrc, excerpt, author, date}) {
  return (
    <div className={`articleCard ${size}`}>
        <img src={imgSrc} alt={title}></img>
        <div>
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <div className='aut_date'>
                <p>{author}</p>
                <p>{date}</p>
            </div>
            <Link to={`/blog/${id}`} className='readmore'>Read More</Link>
        </div>
    </div>
  )
}

export default ArticleCard