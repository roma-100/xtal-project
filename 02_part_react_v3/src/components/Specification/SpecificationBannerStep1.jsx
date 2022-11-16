//***********  SpecificationBannerStep1.jsx **** */
import React from "react";
import "./SpecificationBannerStep1.scss"

const SpecificationBannerStep1 = (props) => {
  
  const {picturePath} = props
  
/*     const picturePath = "../../pimages/types200/"+
          props.selectedModel.pictureTag +
          "_200px.png" */
          //console.log (picturePath)
/*     const extractFeatures = props.selectedModel.features.map((feature,index) =>{
      <p>hello</p>
    })   */

/*     const extractFeatures =   props.features.map((x, index) => {
      return <h5 key={index}>{x}</h5>;
    })
    window.bb  = props.features */

/* window.bb = props.features.forEach((element, index) => {
  console.log(element, index)
}) */
let myArray = []
const extractFeatures = (a) => {
  //window.bc = myArray
  if (a) {
    return a.map((x, index) => {
      return <h5 key={index}>{x}</h5>;
    })
  }
}
//window.bb = extractFeatures(props.features)

      return (
<div className="speciication__wrap--position">
      <div className="speciication-selected-banner_wrap--decor">
        <div className="speciication-model__title-name">
          <h1>{props.selectedModel.name}</h1>
        </div>
        <div className="speciication-model__title-frequency">
          <p>{props.selectedModel.frequencyRange}</p>
        </div>
        <div className="speciication-model__info-wrap">
          <div className="speciication-model__picture">
            <img src={picturePath} />
          </div>
          <div className="speciication-model__package">
            <span>Packaging: </span>{props.selectedModel.packaging}
          </div>

          <div className="speciication-model__features">
            <h4>Features:</h4>
            {extractFeatures(props.features)}
          </div>
        </div>
      </div>
    </div>
      )
  }


export default SpecificationBannerStep1