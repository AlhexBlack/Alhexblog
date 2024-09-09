import React, { useState, useEffect } from 'react';
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
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                        Learn more
                    </a>
                </p>
                <button onClick={handleAcceptCookies} className="accept-btn">
                    Accept Cookies
                </button>
            </div>
        )
    );
}

export default CookieConsent;
