import React from 'react';
import brand from "../../assets/icons/brand.svg"
import "./header.css"
function HeaderComponent() {
     
  return (
    <>
    <header className='header_section'>
      <nav className='header_content'>
        <img className='logo' src={brand} alt="logo" />
      </nav>
    </header>
     
    </>
  );
}

export default HeaderComponent;