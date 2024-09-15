import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Kazuma Hirota. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
