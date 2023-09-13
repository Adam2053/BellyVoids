import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../static/shop.css";
import { data } from "../data/data";

const ShopPage = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const a = data;
  //     setData(a);
  //   };
  //   getProducts();
  // }, []);
  return (
    <div className="container-list">
      {data.map((product, i) => {
        return (
          <Link style={{"display":"flex", "flexDirection":"row", "textDecoration":"none", "color": "grey"}} to={`/products/${product.id}`}>
            <div className="card-list" key={i}>
              <img src={product.img} alt="" />
              <div className="info-list">
                <div className="left-l">
                  <span>{product.name}</span>
                  <span style={{ fontWeight: "bold", fontSize: "1.2rem", color:"black" }}>
                    &#8377;{product.price}
                  </span>
                  <img src="../assets/homepage/Rating.png" alt="" />
                </div>
                <div className="right-l">
                  <img src="../assets/listpage/shop.png" alt="" />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ShopPage;
