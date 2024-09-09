import './App.css';
import Navbar1 from './components/NavBar1';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarReviews from './pages/CarReviews';
import MaintenanceTips from './pages/MaintenanceTips';
import LatestNews from './pages/LatestNews';
import BuyingGuides from './pages/BuyingGuides';
import ElectricVehicles from './pages/ElectricVehicles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from './pages/NotFound';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ArticleDetails from './components/ArticleDetails';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };  

  const handleClearSearch = () => {
    setSearchResults(null);
  }
  
  return (
    <Router>
      <ScrollToTop/>
    <div className='app'>
        <Navbar1 onSearchResults={handleSearchResults}/>
            <main>
            <SearchBar onSearchResults={handleSearchResults}/>
            <div className='searchResults'>
                  {searchResults !== null ? (
                  searchResults.length > 0 ? (
                  <ul className='searchList'>
                  <div className='clearDiv'>
                    <h3>Search Results:</h3>
                    <button className='clearButton' onClick={handleClearSearch}>Clear</button>
                  </div>
                    {searchResults.map((post) => (
                      <li key={post.id}>
                        <Link to={`/blog/${post.id}`} onClick={handleClearSearch}>{post.title}</Link>
                      </li>
                    ))}
                  </ul>
                  ) : (
                    <div className='noResults'>
                    <p>No results found</p>
                    <button className='clearButton' onClick={handleClearSearch}>Close</button>
                    </div>
                  )
                  ) : (
                    <></> 
                  )}
            </div>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/car_reviews' element={<CarReviews/>}/>
                <Route path='/maintenance_tips' element={<MaintenanceTips/>}/>
                <Route path='/latest_news' element={<LatestNews/>}/>
                <Route path='/buying_guides' element={<BuyingGuides/>}/>
                <Route path='/electric_vehicles' element={<ElectricVehicles/>}/>
                <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
                <Route path='/terms-of-service' element={<TermsOfService/>}/>
                <Route path='/blog/:id' element={<ArticleDetails/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
            </main>
          <Footer onSearchResults={handleSearchResults}/>  
          <CookieConsent/>
          </div>
          </Router>
  );
}

export default App;
