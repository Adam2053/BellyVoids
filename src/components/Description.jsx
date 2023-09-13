import React, { useEffect, useState } from "react";
import axios, { AxiosError, isAxiosError } from "axios";
import { Link, useParams } from "react-router-dom";
import "../static/des.css";
import { data } from "../data/data";

const Description = () => {
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

  return (
    <div className="parent">
      <div className="top-parent">
        <span style={{ borderBottom: "1px solid green" }}>Description</span>
        <span>Additional Information</span>
      </div>
      <div className="bot-parent" key={data[params.proId-1].id}>
        <div className="lp">
          <p>{data[params.proId-1].des}</p>
          <br />
          <p>{data[params.proId-1].des2}</p>
          <br />
          <ul style={{ listStyle: "none" }}>
            <li>
              <i className="fas fa-check-circle" style={{ color: "#00B207" }}></i>{" "}
              {data[params.proId-1].feat1}
            </li>
            <li>
              <i className="fas fa-check-circle" style={{ color: "#00B207" }}></i>{" "}
              {data[params.proId-1].feat2}
            </li>
            <li>
              <i className="fas fa-check-circle" style={{ color: "#00B207" }}></i>{" "}
              {data[params.proId-1].feat3}
            </li>
            <li>
              <i className="fas fa-check-circle" style={{ color: "#00B207" }}></i>{" "}
              {data[params.proId-1].feat4}
            </li>
            <li>
              <i className="fas fa-check-circle" style={{ color: "#00B207" }}></i>{" "}
              {data[params.proId-1].feat5}
            </li>
          </ul>
          <br />
          <p>{data[params.proId-1].more} </p>
        </div>
        <div className="rp">
          <img src="../assets/listpage/Video.png" alt="" />
          <div className="more">
            <div className="m1">
              <img src="../assets/listpage/tag1.png" alt="" />
              <div>
                <span className="bld">Pocket Friendly</span>
                <span>Affordable Healthy Snacks</span>
              </div>
            </div>
            <div className="m1">
              <img src="../assets/listpage/leaf.png" alt="" />
              <div>
                <span className="bld">100% Organic</span>
                <span>100% Organic Mushrooms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
