import React from 'react';
import './Footer.css'
import { Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
    <footer>
        <div className="footer-content">

        <div className='logo'> 
        <p>Motor<span>MentorHub</span></p>      
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
 


        </div>
        <div className='contact-us'>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <p>Contact us: <a href="mailto:motormentorhub@gmail.com">motormentorhub@gmail.com</a></p>
          <p>&copy; 2024 MotorMentor. All rights reserved.</p>
        </div> 
    </footer>
    </div>
  )
}

export default Footer