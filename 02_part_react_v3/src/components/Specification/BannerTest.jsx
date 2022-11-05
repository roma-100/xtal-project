import React from "react";

const BannerTest = () => {

    return (
        <div className="speciication__wrap">
          <div className="speciication-model__title-name">
            <h1>Model: XBO8S </h1>
          </div>
          <div className="speciication-model__title-frequency">
            <h5>8-150 Fundamental</h5>
          </div>
          <div className="speciication-model__info-wrap">
            <div className="speciication-model__left-side">
              <div className="speciication-model__picture">
                <img
                  src="../../pimages/types200/type2_200px.png"
                  alt="OCXO pict"
                />
              </div>
              <div className="speciication-model__package">
                <span>Packaging</span>
                <p>DIP8 SMD</p>
              </div>
            </div>
            <div className="speciication-model__right-side">
              <h5>8-150 Fundamental</h5>
              <h5>3 ppb in -40 +85ºC range</h5>
              <h5>to 0.1 ppb/day, 15 ppb/year</h5>
              <h5>to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor</h5>
              <h5>to 0.3 ppb/G sensitivity</h5>
              <h5>to 75 mW consumption</h5>
              <h5>to 45s frequency warm-up</h5>
            </div>
          </div>
        </div>
        )
}

export default BannerTest