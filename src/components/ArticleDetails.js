import React from 'react'
import './ArticleDetails.css'
import { useParams } from 'react-router-dom'
import blogData from '../data/blogData'
import ArticleCard from './ArticleCard'
import blogPosts from '../data/blogData'
import NotFound from '../pages/NotFound'
import ScrollToTop from './ScrollToTop'

const latestNews = blogPosts.filter(post => post.category === 'Latest News');

function ArticleDetails () {
  const {id} = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div><NotFound/></div>;
  }

  return (
    <div className='articleContainer'>
      <ScrollToTop/>
      <article>
        <img className='imgAd' src={post.imgSrc} alt={post.title} />
        <h1 className='titleAd'>{post.title}</h1>
        <h3 className='excerptAd'>{post.excerpt}</h3>
        <p className='articleContent'>{post.content}</p>
      </article>
      <aside className='sideCont'>
        <h1>Latest News</h1>
        <div className='cards'>
          {latestNews.map((post) => (
          <ArticleCard 
            key={post.id}
            id={post.id}
            imgSrc={post.imgSrc}
            title={post.title}
            size={'small'}
          />
          ))}
        </div>
      </aside>
    </div>
  )
}

export default ArticleDetails