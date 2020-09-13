import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123"
            title="New Apple Macbook Pro(16-Inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9)- Space Gray"
            price={2928}
            image="https://m.media-amazon.com/images/G/01/appcore/laptop/MacBook-Pro-16inch_240x160._CB448721043_.png"
            rating={5}
          />
          <Product
            id="234"
            title="Kenwood kMix Stand Mixer for Baking, Styling Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre  Glass Bowl"
            price={239.0}
            image="https://www.costco.co.uk/medias/sys_master/images/hae/h6f/31246442135582.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="345"
            title="Fitbit SmartWatch Charge 3 Band Activity Tracker, Grpahite/Black"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="456"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdgfBB1zBMg1AMP72Zb-Qyk1zXHhpHYLEKgw&usqp=CAU"
          />
          <Product
            id="567"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generator)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="678"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
