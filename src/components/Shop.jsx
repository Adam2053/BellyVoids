import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ScrollToTop from "./Scroll";
import { data } from "../data/data";

const Shop = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const a = data;
  //     setData(a);
  //   };
  //   getProducts();
  // }, [data]);

  // console.log(data)
  return (
    <>
      <div
        
        style={{
          margin: "4rem auto 0rem auto",
          width: "75vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="top-pro"
      >
        <h1 style={{borderBottom:"2px solid #00B207"}} >Our Products</h1>
        <Link
          style={{ textDecoration: "underline", color: "#00B207" }}
          to="/shop"
        >
          View All
        </Link>
        
      </div>
      <div
        className="container-list"
        style={{ height: "max-content", margin: "1rem 0" }}
      >
        {data.map((product, i) => {
          return (
            <Link
              style={{
                display: "flex",
                flexDirection: "row",
                textDecoration: "none",
                color: "grey",
              }}
              to={`/products/${product.id}`}
            >
              <div className="card-list" key={i}>
                <img src={product.img} style={{ height: "12rem" }} alt="" />
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
    </>
  );
};

export default Shop;
