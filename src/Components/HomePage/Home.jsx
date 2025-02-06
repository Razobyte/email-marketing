import React from "react";
import homebnner from "../../Images/Website Maintenance 1.png";

function Home() {
  return (
    <>
    <div className="home-container">
      <div className="banner ">
        <img src={homebnner} alt="homebanner" className="home-banner-image" />
        <div
          className="banner-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "5%",
            transform: "translateY(-50%)", 
            textAlign: "left", 
            color: "white", 
          }}
        >
        
        </div>
      </div>

    </div>
    <div>
      
    </div>
      </>
  );
}

export default Home;
