
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Aarya Gangakhedkar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
