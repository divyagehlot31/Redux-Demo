import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "../redux/reducers/languageReducer";
import "../styles/Header.scss";
import { BsTranslate } from "react-icons/bs";
import logo1 from '../assets/english.webp'
import logo2 from '../assets/japanese.jpg'
import logo3 from '../assets/india.jpg'
import logo4 from '../assets/german.jpg'



// import { FaGlobe} from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);
  const [showPopup, setShowPopup] = useState(false);

  const changeLanguage = (newLocale) => {
    dispatch(setLocale(newLocale));
    setShowPopup(false);
  };

  

  return (
    <>
      <header className="header">
        <div className="main">
          <h4 className="title">Kings Arms Cardington</h4>
          <p className="add">
            134 High Street, Kempston, Bedford,
            <br />
            Bedfordshire, MK42 7BN
          </p>
        </div>

        <div className="lang-toggle">
          <BsTranslate className="lang-icon" onClick={() => setShowPopup(true)} />
        </div>
      </header>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Select Language</h2>
            <button onClick={() => changeLanguage("en")}> <img className="logo1" src={logo1}/> English</button>
            <button onClick={() => changeLanguage("ja")}><img className="logo1" src={logo2}/>Japanese</button>
            <button onClick={() => changeLanguage("hi")}><img className="logo1" src={logo3}/>Hindi</button>
            <button onClick={() => changeLanguage("ga")}><img className="logo1" src={logo4}/>German</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
