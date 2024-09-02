import React from 'react'
import Banner from '../components/Banner'
import ArticleCard from '../components/ArticleCard'
import blogPosts from '../data/blogData'

const Home = () => {
  return (
    <div>
      <Banner/>
      {blogPosts.map((post) =>(
        <ArticleCard
        key={post.id}
        id={post.id}
        title={post.title}
        content={post.content}
        author={post.author}
        />
      ))}
    </div>
  )
}

export default Home