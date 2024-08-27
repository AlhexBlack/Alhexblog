import React from 'react';
import './Footer.css'
import { Link} from 'react-router-dom';
import SearchBar from './SearchBar';

function Footer ({onSearchResults}) {
  return (
    <div>
    <footer>
        <div className="footer-content">

        <div> 
        <h2>Motor<span>Mentor</span></h2>      
        </div>

          <div className='footer-content-div'>   
              <ul className="footer-links">
              <li>
                          <Link to="/"
                          >Home</Link>
                      </li>
                      <hr/>
                      <li>
                          <Link to="/car_reviews"
                          >Car Reviews</Link>
                      </li>
                      <hr/>
                      <li>
                          <Link to="/maintenance_tips"
                          >Maintenance Tips</Link>
                      </li>
                      <hr/>
                      <li>
                          <Link to="/latest_news"
                          >Latest News</Link>
                      </li>
                      <hr/>
                      <li>
                          <Link to="/buying_guides"
                          >Buying Guides</Link>
                      </li>
                      <hr/>
                      <li>
                          <Link to="/electric_vehicles"
                          >Electric Vehicles</Link>
                      </li> 
              </ul>
         </div>  
 

        <div>
        <ul className="legal-links">
            <SearchBar onSearchResults={onSearchResults}/>
        </ul>
        </div>
        </div>
        <div className='contact-us'>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
          <p>Contact us: <a href="mailto:motormentor@gmail.com">motormentor@gmail.com</a></p>
          <p>&copy; 2024 MotorMentor. All rights reserved.</p>
        </div> 
    </footer>
    </div>
  )
}

export default Footer