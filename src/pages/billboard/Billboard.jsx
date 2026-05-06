import React from 'react';
import TopNavBar from '../../components/TopNavBar';
import './Billboard.css';

const Billboard = () => {
    return (
        <div className="billboard-page">
            <TopNavBar />
            <div className="billboard-content">
                <h2>준비중</h2>
            </div>
        </div>
    );
};

export default Billboard;