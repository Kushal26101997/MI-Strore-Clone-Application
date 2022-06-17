import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PreNavBar from './components/PreNavBar';
import Slider from './components/Slider';
import data from './data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from "./components/ProductReviews"
import Videos from "./components/Videos"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import NavOptios from './components/NavOptios'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <PreNavBar />
        <NavBar />
        <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
        <Slider start={data.banner.start} />
        <Offers offers={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />

        <Routes>

          <Route path="/music"element={<HotAccessories key={0} item={data.hotAccessories.music} itemCover={data.hotAccessoriesCover.music} />}/>

          <Route path="/smartDevice" element={<HotAccessories key={1} item={data.hotAccessories.smartDevice} itemCover={data.hotAccessoriesCover.smartDevice} />} />

          <Route path="/home" element={<HotAccessories key={2} item={data.hotAccessories.home} itemCover={data.hotAccessoriesCover.home} />} />

          <Route path="/lifestyle" element={<HotAccessories key={3} item={data.hotAccessories.lifeStyle} itemCover={data.hotAccessoriesCover.lifeStyle} />} />

          <Route path="/mobileAccessories" element={<HotAccessories key={4} item={data.hotAccessories.mobileAccessories} itemCover={data.hotAccessoriesCover.mobileAccessories} />} />

        </Routes>

        <Heading text="PRODUCT REVIEWS" />

        <ProductReviews productReviews={data.productReviews} />

        <Heading text="VIDEOS" />

        <Videos videos={data.videos} />

        <Heading text="IN THE PRESS" />

        <Banner banner={data.banner} />

        <Footer footer={data.footer} />

    </>
  );
}

export default App;
