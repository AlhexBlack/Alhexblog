import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState(null);
  const [isSidenavVisible, setIsSidenavVisible] = useState(false);

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

  const links = [
    { path: '/', label: 'Home', id: 'Home' },
    { path: '/car_reviews', label: 'Car Reviews', id: 'CarReviews' },
    { path: '/maintenance_tips', label: 'Maintenance Tips', id: 'MaintenanceTips' },
    { path: '/latest_news', label: 'Latest News', id: 'LatestNews' },
    { path: '/buying_guides', label: 'Buying Guides', id: 'BuyingGuides' },
    { path: '/electric_vehicles', label: 'Electric Vehicles', id: 'ElectricVehicles' },
  ];

  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId);
    setIsSidenavVisible(false); // Close sidenav when a link is clicked
  };

  const toggleSidenav = () => {
    setIsSidenavVisible(!isSidenavVisible);
  };

  return (
    <div>
      <nav>
        <div>
          <h2>
            <Link to="/" className={selectedLink === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}>
              Motor<span>MentorHub</span>
            </Link>
          </h2>
          {/* Top Links */}
          <ul className="topLinks">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={selectedLink === link.id ? 'active' : ''}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div onClick={toggleSidenav} className="hamburger">
            <FontAwesomeIcon icon={faBars} className='bar' />
          </div>

          {/* Side Navigation Links */}
          <ul className={`sideLinks ${isSidenavVisible ? 'active' : ''}`}>
            <li onClick={toggleSidenav} className="cancel">
              <FontAwesomeIcon icon={faXmark} />
            </li>
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={selectedLink === link.id ? 'active' : ''}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
