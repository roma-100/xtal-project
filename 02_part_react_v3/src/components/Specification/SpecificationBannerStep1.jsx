//***********  SpecificationBannerStep1.jsx **** */
import React from "react";
import imgType1 from "../../assets/img/types200/type1_200px.png"
import imgType2 from "../../assets/img/types200/type2_200px.png"
import imgType3 from "../../assets/img/types200/type3_200px.png"
import imgType4 from "../../assets/img/types200/type4_200px.png"
import imgType5 from "../../assets/img/types200/type5_200px.png"

const SpecificationBannerStep1 = (props) => {
  //window.bb = props
    const picturePath = "../../pimages/types200/"+
          props.selectedModel.pictureTag +
          "_200px.png"
          console.log (picturePath)
      return (
          <div className="speciication__wrap">
        <div className="speciication-model__name"><h1>Model: {props.selectedModel.name} </h1></div>
        <div className="speciication-model__info-wrap">
          <div className="speciication-model__left-side">
            <div className="speciication-model__picture">
              <img src={picturePath} alt="OCXO pict" />
            </div>
            <div className="speciication-model__package">
              <span>Packaging</span>
              <p>{props.selectedModel.packaging}</p> 
            </div>
          </div>
          <div className="speciication-model__right-side">
            <h5>{props.selectedModel.frequencyRange}</h5>
            <p>description</p>
            <h5>{props.selectedModel.temperatureRangeSelected}</h5>
            <p>description</p>
          </div>
        </div>
      </div>
      )
  }


export default SpecificationBannerStep1