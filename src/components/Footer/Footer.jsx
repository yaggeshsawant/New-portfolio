import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  const emailadress= 'yaggeshsawant@gmail.com';
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      <a style={{color: 'white'}} href={`mailto:${emailadress}`}>
      <span>yaggeshsawant@gmail.com</span>
      </a>
        
        <div className="f-icons">

        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <Insta color="white" size={"3rem"} />
        </a>
          
          <a href="https://linkedin.com/in/yaggesh-sawant-b88794257" target="_blank" rel="noopener noreferrer">
          <Linkedin color="white" size={"3rem"} />  
          </a>
          
          <a href="https://github.com/yaggeshsawant" target="_blank" rel="noopener noreferrer">
            <Gitub color="white" size={"3rem"} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
