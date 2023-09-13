import React from 'react'
import '../static/nav.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop Now</a></li>
                <li><a href="/portal">Distributor Portal</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
        </div>
        <div className="logo">
            <img style={{height:"3rem", width:"15rem"}} src="../assets/listpage/mainLogo.png" alt="" />
            {/* <span>BellyVoids</span> */}
        </div>
        <div className="info">
            <img src="../assets/contactpage/PhoneCall1.png" alt="" />
            <span>98172 65838</span>
            <img src="../assets/contactpage/Heart.png" alt="" />
            <img src="../assets/contactpage/user_31.png" alt="" />
        </div>
    </div>
  )
}

export default Navbar