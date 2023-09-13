import React, { useEffect, useState } from "react";
import axios, { AxiosError, isAxiosError } from "axios";
import { Link, useParams } from "react-router-dom";
import "../static/shopComp.css";
import Description from "../components/Description";
import { data } from "../data/data";

const ProductPage = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  const params = useParams();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await axios.get(`/api/products/${params.proId}`);
  //       const a = response.data;
  //       setData(a);
  //     } catch (error) {
  //       console.log(error);
  //       setError(error);
  //     }
  //   };
  //   getProducts();
  // }, [params.proId]);

  // console.log(data[params.proId-1].des);

  // if (error) {
 
  // } else {

  if (params.proId >2){
    return (
      <div style={{ height: "80vh", fontSize: "10rem" }}>404: not found</div>
    );
  }
    return (
      <>
        <div className="single-page">
          <div className="top-p">
            <div className="left-p">
              <img style={{height:"inherit"}} src={data[params.proId-1].proImg} alt="img" />
            </div>
            <div className="right-p">
              <h1>
                {data[params.proId-1].name}{" "}
                <span
                  style={{
                    fontSize: "small",
                    fontWeight: "lighter",
                    color: "green",
                  }}
                >
                  In stock
                </span>
              </h1>
              <div className="ext">
                <img src="../assets/homepage/Rating.png" alt="" />{" "}
                <span>4 review</span> <span>SKU: 2,51,594</span>
              </div>
              <h1>
                &#8377; {data[params.proId-1].price}{" "}
                <span
                  style={{
                    fontSize: "small",
                    fontWeight: "lighter",
                    color: "red",
                  }}
                >
                  SALE
                </span>
              </h1>
              <p>{data[params.proId-1].des}</p>
              <button className="btn-shop">
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: "1rem 4rem",
                  }}
                  href="https://wa.me/p/5665503406894536/919817265838"
                >
                  Buy Now
                </a>
              </button>
            </div>
          </div>
          <div className="bottom-p"></div>
        </div>
        <Description />
      </>
    );
  }
// };

export default ProductPage;
