import React, { useState } from 'react';
import Nav from '../Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Footer from '../Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio/>;
    }
    if (currentPage === 'Contact') {
      return <Contact/>;
    }
    if (currentPage === 'Resume') {
      return <Resume/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header className='header'>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}
      <footer className='container text-center'>
        <Footer/>
      </footer>
    </div>
  );
}
