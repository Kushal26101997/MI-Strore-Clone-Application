
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
import App from './App';
import HotAccessories from './components/HotAccessories';
// import reportWebVitals from './reportWebVitals';
import data from './data/data.json'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>

          <Route path="/music" key={0} element={<HotAccessories item={data.hotAccessories.music} itemCover={data.hotAccessoriesCover.music}/>}/>
          
          <Route path="/smartDevice" key={1} element={<HotAccessories item={data.hotAccessories.smartDevice} itemCover={data.hotAccessoriesCover.smartDevice} />} />

          <Route path="/home" key={2} element={<HotAccessories item={data.hotAccessories.home} itemCover={data.hotAccessoriesCover.home} />} />

          <Route path="/lifestyle" key={3} element={<HotAccessories item={data.hotAccessories.lifeStyle} itemCover={data.hotAccessoriesCover.lifeStyle} />} />

          <Route path="/mobileAccessories" key={4} element={<HotAccessories item={data.hotAccessories.mobileAccessories} itemCover={data.hotAccessoriesCover.mobileAccessories} />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();