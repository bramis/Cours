import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the stuff I've done:</p>
        <Link to="/portfolio/42">item 42</Link>
        <Link to="/portfolio/10">item 10</Link>
    </div>
);

export default PortfolioPage;