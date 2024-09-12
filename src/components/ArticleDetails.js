import React from 'react'
import './ArticleDetails.css'
import { useParams } from 'react-router-dom'
import blogData from '../data/blogData'
import ArticleCard from './ArticleCard'
import blogPosts from '../data/blogData'
import NotFound from '../pages/NotFound'
import ScrollToTop from './ScrollToTop'
import AdSense from 'react-adsense'

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
        {/*ad at the top of article */}
        <AdSense.Google
          client='ca-pub-XXXXXX'
          slot='XXXXXX'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
        />
        <p className='articleContent'>{post.content}</p>
        {/*ad at the bottom of the article */}
        <AdSense.Google
          client='ca-pub-XXXXXX'
          slot='XXXXXX'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
        />
      </article>
      <aside className='sideCont'>
        <h1>Latest News</h1>
        <div className='cards'>
          {/*ad at the top of the sidenav */}
          <AdSense.Google
            client='ca-pub-XXXXXX'
            slot='XXXXXX'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
          />
          {latestNews.map((post) => (
          <ArticleCard 
            key={post.id}
            id={post.id}
            imgSrc={post.imgSrc}
            title={post.title}
            size={'small'}
          />
          ))}
          {/*ad at the bottom of sidenav */}
          <AdSense.Google
            client='ca-pub-XXXXXX'
            slot='XXXXXX'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
          />
        </div>
      </aside>
    </div>
  )
}

export default ArticleDetails