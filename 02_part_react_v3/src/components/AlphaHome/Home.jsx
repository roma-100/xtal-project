//**** Home.jsx  */
import React from 'react';
import { NavLink } from "react-router-dom";

const Home =()=> {

    return (
        <>
        <p className='home-intro'>Xtal Ball presents a new generation of the frequency control and timing products possessing extraordinary combination of high precision performances with small sizes and extremely low power consumption.</p>

        <div className="hello-article">
    <h4 className="hello-article__title">Low Power High Stability Oven Control Crystal Oscillators <span>(LP OCXO)</span></h4>
    <div className="hello-article__collage">
        <div className="collage__circle"> <img src="./pimages/types200/type1_200px.png" alt="OCXO pict" /></div>
        <div className="collage__circle"> <img src="./pimages/types200/type2_200px.png" alt="OCXO pict" /></div>
        <div className="collage__circle"> <img src="./pimages/types200/type3_200px.png" alt="OCXO pict" /></div>
        <div className="collage__circle"> <img src="./pimages/types200/type4_200px.png" alt="OCXO pict" /></div>
    </div>
    <p className="hello-article__content">
        L<span>ow Power Oven Control Crystal Oscillators (LP OCXOs).</span> These extraordinary frequency references are built on the Internally Heated Resonators (IHR) integrating in the vacuum holder the crystal plate with miniature heating structure. Recent achievements in the IHR technology and usage of sophisticated oscillator circuitry provide to the OCXOs as high as <span>0.005 ppb/˚C</span> frequency stability, as low as <span>0.05 ppb/day</span> aging, less than <span>150 mW</span> consumption, very low phase-noise level and <span>DIP8 or DIP14</span> compatible sizes.
Owing to the extraordinary performances the LP OCXOs have become unreplaceable part of a variety of portable or/and battery fed equipment such as high-end mobile radio, mobile radars, synthesizers, precision clocks, GPS navigation, portable instrumentation and others.
        </p>

    <div className="hello-article__more">
    <NavLink to="/gen_models_hello">Select your OCXO model</NavLink>
        {/* <a href="#">Select your OCXO model</a> */}
    </div>

</div>   

<div className="hello-article">
    <h4 className="hello-article__title">High Precision Low Power Real-Time Clock/Calendar</h4>
    <div className="hello-article__collage">
        <div className="collage__circle--large"> <img  src="../../pimages/types200/type9_200px.png" alt="Real-Time Clock/Calendar" /></div>
    </div>
    <p className="hello-article__content">Basing on the LP OCXOs operating at 8.192 MHz or 16.384 MHz frequency these clocks ensure very high precision of 1 s time intervals at very low power consumption and small sizes. Owing to the very attractive combination of properties these clocks are now very demanded part of different modern equipment with battery supply, for instance, of  the underwater geological exploration equipment providing its long service-free period at high precision of the geological data.</p>
    <div className="hello-article__more">
        <a href="#">Load spec example to edit and order</a>
    </div>
</div>  

<div className="hello-article">
    <h4 className="hello-article__title">Ultra stable Low Noise Low Power Frequency Reference </h4>
    <div className="hello-article__collage">
        <div className="collage__circle--large"> <img  src="../../pimages/types200/type10_200px.png" alt="Real-Time Clock/Calendar" /></div>
    </div>
    <p className="hello-article__content">These miniature frequency standards using high stability LP OCXO together with PLL discipline option from external GPS or PSS signals provide very high short-term and long-term stability reaching the “atomic” rank of 0.03 ppb/day during long hold-over period. Owing to these excellent performances the references can be successfully used at high-end portable instrumentation and other modern high precision battery supply equipment.</p>
    <div className="hello-article__more">
        <a href="#">Load spec example to edit and order</a>
    </div>
</div>  
</>
    )

}

export default Home