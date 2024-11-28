import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Success.css';

const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="success-page">
            <h1>Order Successfully Placed!</h1>
            <p>Thank you for your choice! We will be in touch with you shortly :)</p>
            <button className="home-button" onClick={() => navigate('/catalog')}>
                Return to Catalog
            </button>
        </div>
    );
};

export default SuccessPage;
