import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar1.css';
import SearchBar from './SearchBar';

function Navbar ({onSearchResults}) {

    const location = useLocation();
    const [selectedLink, setSelectedLink] = useState(null);

    useEffect(() => {
        switch (location.pathname) {
          case '/':
            setSelectedLink('Home');
            break;
          case '/car_reviews':
            setSelectedLink('CarReviews');
            break;
          case '/maintenance_tips':
            setSelectedLink('MaintenanceTips');
            break;
          case '/latest_news':
            setSelectedLink('LatestNews');
            break;
          case '/buying_guides':
            setSelectedLink('BuyingGuides');
            break;
          case '/electric_vehicles':
            setSelectedLink('ElectricVehicles');
            break;
          default:
            setSelectedLink(null);
        }
      }, [location.pathname]);

    const handleLinkClick = (linkText) => {
        setSelectedLink(linkText);
    };

  return (
    <div>
        <nav>
            <div>
            <h2><Link to="/" 
                className={selectedLink === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}
                >Motor<span>Mentor</span></Link>
            </h2>
            <ul>
                <li>
                    <Link to="/"
                    className={selectedLink === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}
                    >Home</Link>
                </li>
                <li>
                    <Link to="/car_reviews"
                    className={selectedLink === 'CarReviews' ? 'active' : ''} onClick={() => handleLinkClick('CarReviews')}
                    >Car Reviews</Link>
                </li>
                <li>
                    <Link to="/maintenance_tips"
                    className={selectedLink === 'MaintenanceTips' ? 'active' : ''} onClick={() => handleLinkClick('MaintenanceTips')}
                    >Maintenance Tips</Link>
                </li>
                <li>
                    <Link to="/latest_news"
                    className={selectedLink === 'LatestNews' ? 'active' : ''} onClick={() => handleLinkClick('LatestNews')}
                    >Latest News</Link>
                </li>
                <li>
                    <Link to="/buying_guides"
                    className={selectedLink === 'BuyingGuides' ? 'active' : ''} onClick={() => handleLinkClick('BuyingGuides')}
                    >Buying Guides</Link>
                </li>
                <li>
                    <Link to="/electric_vehicles"
                    className={selectedLink === 'ElectricVehicles' ? 'active' : ''} onClick={() => handleLinkClick('ElectricVehicles')}
                    >Electric Vehicles</Link>
                </li>
            </ul> 
            <SearchBar onSearchResults={onSearchResults}/>
            </div> 

        </nav>
    </div>
  )
}

export default Navbar