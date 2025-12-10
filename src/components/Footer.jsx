import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
  <div className="container">
    <div className="text-center">
      <img 
        src="logo.png" 
        alt="Logo" 
        height="30" 
        className="mb-3 opacity-75"
      />
      <p className="mb-0 text-white-50">
        © 2024 Interior Design Portfolio. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;