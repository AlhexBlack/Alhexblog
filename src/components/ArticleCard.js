import React from 'react'
import './ArticleCard.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function ArticleCard ({id, title, size, imgSrc, excerpt, author, date}) {
  return (
    <div className={`articleCard ${size}`}>
      <div className='img'>
        <Link to={`/blog/${id}`}>
          <img src={imgSrc} alt={title}></img>
        </Link>
      </div>

      <div className='articleInfo'>
        <h3 className='title'>{title}</h3>
        <p className='excerpt'>{excerpt}</p>
        <div className='autDate'>
           <p className='author'>{author}</p>
           <p className='date'>{date}</p>
        </div>
      </div>
      
      <div className='readmore'>
        <Link to={`/blog/${id}`}>
          Read More < FontAwesomeIcon icon={faAngleRight} className='faRight'/>
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard