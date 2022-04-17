import React from 'react';
import Navbar from './Navbar';

function Layout({ children }: { children: React.ReactChild }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
export default Layout;
