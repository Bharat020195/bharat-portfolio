import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import Footer from  './footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bharat`s portfolio',
  description: 'I am a passionate developer',
};

const Layout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
        </head>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
};

export default Layout;
