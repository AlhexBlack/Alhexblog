import React, { useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import Pagination from '../components/pagination'
import blogPosts from '../data/blogData'
import AdSense from 'react-adsense';

const ARTICLES_PER_PAGE = 10;

const carReviews = blogPosts.filter(post => post.category === 'Car Reviews');

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = carReviews.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(carReviews.length / ARTICLES_PER_PAGE);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const shouldShowAd = currentArticles.length > 6;

  return (
    <div>
      <div className='cardCont'>
        {currentArticles.map((post, index) => (
          <React.Fragment key={post.id}>
            <ArticleCard
              id={post.id}
              imgSrc={post.imgSrc}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              date={post.date}
            />

            {/* Insert AdSense after 6 articles, but only if there are more than 6 articles */}
            {index === 5 && shouldShowAd && (
              <div className="adsense-container">
                <AdSense.Google
                  client="ca-pub-xxxxxxxxxx"
                  slot="xxxxxxx"
                  style={{ display: 'block' }}
                  format="auto"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {/*ad at the bottom of the articles */}
      <AdSense.Google
        client='ca-pub-XXXXXX'
        slot='XXXXXX'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange} />
    </div>
  )
}

export default Home