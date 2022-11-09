import React from "react";
import '../../assets/lib/animate.min.css'

const HeaderHero = (props) => {

  return (
    <>
  <div className="hero-line">
  <h1 className="hello-name">Extraordinary Frequency Control <br />
  <span>solutions</span></h1>
  <div className="hero-line__circle-wrap animate__animated animate__bounceInRight">
    <div className="hero-line__circle"><img className="hero-line__circle-img" src="./pimages/types200/type1_200px.png" alt="xtall" /></div>
    <div className="hero-line__circle"><img className="hero-line__circle-img" src="./pimages/types200/type2_200px.png" alt="xtall" /></div>
    <div className="hero-line__circle"><img className="hero-line__circle-img" src="./pimages/types200/type3_200px.png" alt="xtall" /></div>

    <div className="hero-line__circle"><img className="hero-line__circle-img" src="./pimages/types200/type10_200px.png" alt="xtall" /></div>
  </div>
</div>
    </>
  );
};


export default HeaderHero
