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

    return (
        showPopup && (
            <div className="cookie-consent">
                <p>
                    This website uses cookies to ensure you get the best experience on our website.{' '}
                    <Link to ="/privacy-policy" target="_blank" rel="noopener noreferrer">
                        Learn more
                    </Link>
                </p>
                <button onClick={handleAcceptCookies} className="accept-btn">
                    Accept Cookies
                </button>
            </div>
        )
    );
}

export default CookieConsent;
