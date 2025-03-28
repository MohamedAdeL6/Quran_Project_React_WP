import React from "react";
import "./App.css";

import HeaderPage from "./Components/Header/HeaderPage";
import Login from "./Components/Header/login/Login";
import LoginChoos from "./Components/Header/login/LoginChoos";
import { Route, Routes } from "react-router-dom";
import HomePages from "./Components/HomePages/HomePages";
import BrowseQuran from "./Components/HomePages/BrowseQuran/BrowseQuran";
import TafseerQuran from "./Components/HomePages/TafserQuran/TafserQuran";
import QuranReciters from "./Components/HomePages/SoundsQuran/QuranReciters/QuranReciters";
import SoundQuranSoura from "./Components/HomePages/SoundsQuran/SoundQuranSoura/SoundQuranSoura";
import RadioPage from "./Components/HomePages/RadioPage/RadioPage";
import RosaryOnline from "./Components/HomePages/RosaryOnline/RosaryOnline";
import Azkar from "./Components/HomePages/Azkar/Azkar";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <HeaderPage />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginChoose" element={<LoginChoos />} />
        <Route path="/BrowseQuran" element={<BrowseQuran />} />
        <Route path="/TafserQuran" element={<TafseerQuran />} />
        <Route path="/SoundsQuran" element={<QuranReciters />} />
        <Route path="/SoundsuranSoura/:name_style" element={<SoundQuranSoura />} />
        <Route path="/radioFm" element={<RadioPage />} />
        <Route path="/SpeceficAzkar" element={<Azkar />} />
        <Route path="/RosaryOnline" element={<RosaryOnline />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;




/*


<Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginChoose" element={<LoginChoos />} />
        <Route path="/BrowseQuran" element={<BrowseQuran />} />
        <Route path="/TafserQuran" element={<TafseerQuran />} />
        <Route path="/SoundsQuran" element={<QuranReciters />} />
        <Route path="/SoundsQuranSoura/:name" element={<SoundQuranSoura />} />
        <Route path="/radioFm" element={<RadioPage />} />
        <Route path="/SpeceficAzkar" element={<Azkar />} />
        <Route path="/RosaryOnline" element={<RosaryOnline />} />
      </Routes>




import HelpToReatrivesouraData from "./Components/Data/SoundQuran/helpToReatrivesouraData";
  <HelpToReatrivesouraData />
  

  <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginChoose" element={<LoginChoos />} />
        <Route path="/BrowseQuran" element={<BrowseQuran />} />
        <Route path="/TafserQuran" element={<TafseerQuran />} />
        <Route path="/SoundsQuran" element={<QuranReciters />} />
        <Route path="/SoundsQuranSoura/:name" element={<SoundQuranSoura />} />
        <Route path="/radioFm" element={<RadioPage />} />
      </Routes>





  #ebf9fa

Section1

<HeaderPage />
      <HeaderBottom />
      <Section1 />
      <Section2PrayerTimes />
      <Section3QuranSura />


<Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginChoose" element={<LoginChoos />} />
        </Routes>






      <Header />
      <Section1Search />
      <Login />
 
      <HeaderTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <HeaderBottom /> <HomePage />{" "}
            </>
          }
        />
        <Route path="/download" element={<DownloadQuranPage />} />
        <Route path="/ReadQuran" element={<QuranSelectionsPage />}>
          <Route
            path="/ReadQuran/quranReading"
            element={<QuranReading />}
          />
          <Route
            path="/ReadQuran/quranTafser"
            element={<QuranTafser />}
          />
          <Route
            path="/ReadQuran/quranSounds"
            element={<QuranSounds />}
          />
        </Route>
      </Routes>

*/