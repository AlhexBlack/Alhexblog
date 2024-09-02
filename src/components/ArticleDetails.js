import React from 'react'
import './ArticleDetails.css'
import { useParams } from 'react-router-dom'
import blogData from '../data/blogData'

function ArticleDetails () {
  const {id} = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.imgSrc} alt={post.title}/>
      <p>{post.content}</p>
    </div>
  )
}

export default ArticleDetails