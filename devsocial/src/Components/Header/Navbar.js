import React from 'react'
import BrandLogo from "../../assets/images/socials.svg";
const Navbar = () => {
  return (
    <>
        <nav className='navbar navbarMain navbar-expand-md'>
            <div className="brandBOx">
                <img src={BrandLogo} height="30" alt="" />
            </div>
            <div className="navLinks"></div>
        </nav>
    </>
  )
}

export default Navbar;
