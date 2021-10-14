import "./App.css";
import Banner from "./components/Banner";
import BestADIDAS from "./components/BestADIDAS";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";
import FooterBelow from "./components/FooterBelow";
import MainNavbar from "./components/MainNavbar";
import Offer from "./components/Offer";
import Popular from "./components/Popular";
import SmallNavbar from "./components/SmallNavbar";
import StillInterested from "./components/StillInterested";
import VideoBrand from "./components/VideoBrand";
import WhatHot from "./components/WhatHot";
import WhoYouShoppingFor from "./components/WhoYouShoppingFor";

function App() {
  return (
    <div>
      <SmallNavbar />
      <MainNavbar />
      <Banner />
      <Popular />
      <VideoBrand />
      <StillInterested />
      <WhoYouShoppingFor />
      <WhatHot />
      <BestADIDAS />
      <Disclaimer />
      <Offer />
      <FooterBelow />
      <Footer />
    </div>
  );
}

export default App;
