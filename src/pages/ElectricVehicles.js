import React, { useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import Pagination from '../components/pagination'
import blogPosts from '../data/blogData'

const ARTICLES_PER_PAGE = 10;

const electricVehicle = blogPosts.filter(post => post.category === 'Electric Vehicle');

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = electricVehicle.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(electricVehicle.length / ARTICLES_PER_PAGE);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <div className='cardCont'>
        {currentArticles.map((post) => (
          <ArticleCard
            key={post.id}
            id={post.id}
            imgSrc={post.imgSrc}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange} />
    </div>
  )
}

export default Home