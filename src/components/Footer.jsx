import React from "react";
import "../static/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left-f">
          <div className="logo-f">
            <img style={{height:"2rem", width:"8rem"}} src="../assets/listpage/mainLogo5.png" alt="" />
          </div>
          <p style={{"fontSize":"12px"}}>
          Looking for a delicious, guilt-free snack that's perfect for any time of day? Look no further!
          </p>
          <div className="comp">
          <span className="underline" >98172 65838</span> <span id="gry">or</span>
          <span className="underline" >Bellyvoids@gmail.com</span>
          </div>
          
        </div>
        <div className="right-f">
          <div className="helps">
            <span>Helps</span>
            <a href="/portal">Contact</a>
            <a href="#">Faqs</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left-b">
          <span>BellyVoids Pvt Ltd &copy; 2023. All Rights Reserved</span>
        </div>
        <div className="right-b">
          <img src="../assets/listpage/Method=Visa.png" alt="" />
          <img src="../assets/listpage/Method=Discover.png" alt="" />
          <img src="../assets/listpage/Method=Mastercard.png" alt="" />
          <img src="../assets/listpage/Cart.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
