import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import './CookieConsent.css';

function CookieConsent() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowPopup(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowPopup(false);
    };

    const handleRejectCookies = () => {
        localStorage.setItem('cookieConsent', 'false');
        setShowPopup(true);
    };
    

    return (
        showPopup && (
            <div className="cookie-consent">
                <p>
                    This website uses cookies to ensure you get the best experience on our website.{' '}
                    <Link to ="/privacy-policy"  rel="noopener noreferrer">
                        Learn more
                    </Link>
                </p>
                <div className='cookieBtnDiv'>
                <button onClick={handleRejectCookies} className="reject-btn">
                    Reject
                </button>
                <button onClick={handleAcceptCookies} className="accept-btn">
                    Accept Cookies
                </button>
                </div>
            </div>
        )
    );
}

export default CookieConsent;
