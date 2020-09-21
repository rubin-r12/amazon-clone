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
            title="PlayStation 4 Pro 1TB Console"
            price={399.0}
            image="https://media.playstation.com/is/image/SCEA/playstation-4-pro-vertical-product-shot-01-us-21sep18?$native_t$"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="345"
            title="Fitbit SmartWatch Charge 3 Band Activity Tracker, Grpahite/Black"
            price={199.99}
            rating={3}
            image="https://cdn.shoplightspeed.com/shops/607644/files/17135537/image.jpg"
          />
          <Product
            id="456"
            title="Canon Eos 5d Mark Iv Dslr With 24-105mm Ii Lens"
            price={3599.99}
            rating={5}
            image="https://www.pngkey.com/png/full/88-889285_dslr-camera-transparent-background-canon-eos-5d-mark.png"
          />
          <Product
            id="567"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generator)"
            price={598.99}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553672276"
          />
        </div>
        <div className="home__row">
          <Product
            id="678"
            title="Logitech G910 Orion Spark RGB Mechanical Gaming Keyboard – 9 Programmable Buttons, Dedicated Media Controls"
            price={104.99}
            rating={4}
            image="https://pngriver.com/wp-content/uploads/2018/03/Download-Logitech-Gaming-Keyboard-PNG-282.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
