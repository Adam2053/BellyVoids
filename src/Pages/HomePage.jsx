import React from "react";
import "../static/homepage.css";
import Shop from "../components/Shop";

const HomePage = () => {
  return (
    <div className="container">
      <div className="back">
        <div className="left-h">
          <span style={{ color: "#00B207", paddingLeft: "3px" }}>
            BELLYVOIDS
          </span>
          <h1>Fresh & Healthy</h1>
          <h1>Mushroom Snacks</h1>
          <h2 style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
            Priced at <span style={{ color: "#FF8A00" }}>&#8377;20 only</span>
          </h2>
          <span>Free shipping on all your order we deliver you enjoy</span>
          <button style={{ margin: "1rem 0" }}>
            <a href="/shop">
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </a>
          </button>
          <button style={{ backgroundColor: "#2C742F" }}>
            <a href="/portal">
              Distributor Portal{" "}
              <i
                className="fa-solid fa-arrow-right"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
          </button>
        </div>
        <div className="right-h">
          <img src="../assets/homepage/products1.png" alt="" />
        </div>
        <div className="bot">
          <div className="sec">
            <div className="l">
              <img src="../assets/homepage/heart.png" alt="" />
            </div>
            <div className="r">
              <span className="bld">Contains healthy elements</span>
              <span>Magnesium,Zinc,Phosphorus</span>
            </div>
          </div>
          <div className="sec">
            <div className="l">
              <img src="../assets/homepage/oil.png" alt="" />
            </div>
            <div className="r">
              <span className="bld">No palm oil used</span>
              <span>Fried in world's healthiest oil</span>
            </div>
          </div>
          <div className="sec">
            <div className="l">
              <img src="../assets/homepage/shopping-bag.png" alt="" />
            </div>
            <div className="r">
              <span className="bld">Mouthwatering flavours</span>
              <span>Flavours that will fill your bellyvoids</span>
            </div>
          </div>
          <div className="sec">
            <div className="l">
              <img src="../assets/homepage/cube.png" alt="" />
            </div>
            <div className="r">
              <span className="bld">Order Fulfillment Guarantee</span>
              <span>15 Day Order Fulfillment Guarantee</span>
            </div>
          </div>
        </div>
      </div>
      <Shop />
      <div className="rev">
        <h1>Customer Reviews</h1>
        <div className="cards">
          <div className="card-r">
            <img src="../assets/homepage/quotes.png" alt="" />
            <p style={{ margin: "1rem 0" }}>
              I am absolutely blown away by the deliciousness of Bellyvoids
              organic mushroom snacks! As a health-conscious individual, I'm
              always on the lookout for nutritious and tasty snacks. These
              mushroom-based treats exceeded my expectations. Not only are they
              a guilt-free option, but they also satisfy my cravings for
              something savory. I can't get enough of them!
            </p>
            <div className="bot-c">
              <div className="name">
                <img src="../assets/listpage/pfp1.png" alt="" />
                <div style={{ marginLeft: "1rem" }} className="cont">
                  <div style={{ fontWeight: "bold", width: "6rem" }}>
                    Manish Yadav
                  </div>
                  <div>Customer</div>
                </div>
              </div>
              <div className="stars">
                <img src="../assets/homepage/Rating.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-r">
            <img src="../assets/homepage/quotes.png" alt="" />
            <p style={{ margin: "1rem 0" }}>
              Bellyvoids has truly revolutionized snacking for me. Their organic
              mushroom snacks are a game-changer. I've struggled to find a snack
              that's both healthy and satisfying, but Bellyvoids nailed it. The
              umami flavor of these mushroom bites is incredible, and I love
              knowing that I'm enjoying a nutritious snack that's good for me
              and the planet. I'm hooked!
            </p>
            <div className="bot-c">
              <div className="name">
                <img src="../assets/listpage/pfp2.png" alt="" />
                <div style={{ marginLeft: "1rem" }} className="cont">
                  <div style={{ fontWeight: "bold", width: "6rem" }}>
                    Vishal Singh
                  </div>
                  <div>Customer</div>
                </div>
              </div>
              <div className="stars">
                <img src="../assets/homepage/Rating.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-r">
            <img src="../assets/homepage/quotes.png" alt="" />
            <p style={{ margin: "1rem 0" }}>
              BellyVoids has truly nailed it with their mushroom-based snacks.
              I've always been a fan of mushrooms, and these snacks are a dream
              come true for me. They're convenient, healthy, and
              oh-so-delicious. Whether I'm snacking at work or watching a movie
              at home, BellyVoids is my top choice! Highly Recommend!
            </p>
            <div className="bot-c">
              <div className="name">
                <img src="../assets/listpage/pfp3.png" alt="" />
                <div style={{ marginLeft: "1rem" }} className="cont">
                  <div style={{ fontWeight: "bold", width: "6rem" }}>
                    Aakash Gupta
                  </div>
                  <div>Customer</div>
                </div>
              </div>
              <div className="stars">
                <img src="../assets/homepage/Rating.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature">
        <img className="ab one" src="../assets/homepage/plant.png" alt="" />

        <img className="ab two" src="../assets/homepage/Group8.png" alt="" />

        <img className="ab three" src="../assets/homepage/MUSH.png" alt="" />

        <div className="card">
          <h1>5K+</h1>
          <span>Years of Work</span>
        </div>
        <div className="card">
          <h1>5K+</h1>
          <span>Happy Customer</span>
        </div>
        <div className="card">
          <h1>5K+</h1>
          <span>Monthly Orders</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
