import './App.css';
import Navbar1 from './components/NavBar1';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarReviews from './pages/CarReviews';
import MaintenanceTips from './pages/MaintenanceTips';
import LatestNews from './pages/LatestNews';
import BuyingGuides from './pages/BuyingGuides';
import ElectricVehicles from './pages/ElectricVehicles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useState } from 'react';


function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };  
  
  return (
    <Router>
    <div className='app'>
        <Navbar1 onSearchResults={handleSearchResults}/>
            <main>
              {searchResults !== null ? (
              searchResults.length > 0 ? (
              <ul>
                {searchResults.map((post) => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
              ) : (
                <p>No results found</p>
              )
              ) : (
                <></> 
              )}
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/car_reviews' element={<CarReviews/>}/>
                <Route path='/maintenance_tips' element={<MaintenanceTips/>}/>
                <Route path='/latest_news' element={<LatestNews/>}/>
                <Route path='/buying_guides' element={<BuyingGuides/>}/>
                <Route path='/electric_vehicles' element={<ElectricVehicles/>}/>
                <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
                <Route path='/terms-of-service' element={<TermsOfService/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
            </main>
          <Footer onSearchResults={handleSearchResults}/>  
          </div>
          </Router>
  );
}

export default App;
