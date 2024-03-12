import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = ({ totalVotes }) => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container text-center">
        <p>Συνολικοί Ψήφοι: {totalVotes}</p>
         <p>
          Web Dev from Ioannina 2023 - Built with love using{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

