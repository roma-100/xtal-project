//***********  SpecificationStep1.jsx **** */
import React from "react";

const Test = (props) => {
  return (
    <div className="speciication__wrap--position">
      <div className="speciication-selected-banner_wrap--decor">
        <div className="speciication-model__title-name">
          <h1>Model: XBO8S </h1>
        </div>
        <div className="speciication-model__title-frequency">
          <p>8-150 Fundamental</p>
        </div>
        <div className="speciication-model__info-wrap">
          <div className="speciication-model__picture">
            <img src="../../pimages/types200/type2_200px.png" alt="OCXO pict" />
          </div>
          <div className="speciication-model__package">
            <span>Packaging: </span>DIP8 SMD
          </div>

          <div className="speciication-model__features">
            <h5>3 ppb in -40 +85ºC range</h5>
            <h5>to 0.1 ppb/day, 15 ppb/year</h5>
            <h5>to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor</h5>
            <h5>to 0.3 ppb/G sensitivity</h5>
            <h5>to 75 mW consumption</h5>
            <h5>to 45s frequency warm-up</h5>
          </div>
        </div>
      </div>
      <div className="button-specification_wrap">
          <input className="button-specification" type="submit" />
        </div>
    </div>
  );
};

export default Test;
