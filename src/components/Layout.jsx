// src/components/Layout.jsx
import React from 'react';
import Footer from './Footer';
// import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-1 bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
