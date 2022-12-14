import React from "react";
import { Link } from "react-router-dom";
 
const GenModel = (props) => {
    const filterInfo = () => {
      if (props.genModelTemperatureRange) {
        return (
          <div className="gen-model__tempr-add-info">
          <div className="gen-model__tempr-stability">to {props.genModelStabilityLimit} ppb</div>
        </div>
        )
      }
      return ''
    }


    return (
    <>
        {props.genModelIsActive ? modelActive(props, filterInfo()) : modelDisabled(props, filterInfo())}
    </>
    )    
}

const modelActive =(props, filterInfo) => {
    
  const handleClick = () => {
/*     console.log('ccclicked'+props.genModelId)
    console.log(props) */
    props.handleClickSelectedModel(props.genModelId)
  }
  //props.genModelId
  return (
      <div className="gen-model">
      <div className="gen-model__title"><h4>{props.genModelTitle}</h4></div>
      <div className="gen-model__info">{props.genModelFrequencyRange}</div>
      {filterInfo}
      <div className="gen-model__picture"><img className="gen-model__picture--decor" 
      src={props.genModelPicture} alt={props.genModelTitle} /></div> 
      <div className="gen-model__info">{props.genModelPackaging}</div>
      {props.genModelTemperatureRange ? 
        <div className="gen-model__btn" onClick={handleClick}>
        <Link to={`/specification/${props.genModelId}`}>Specification</Link>
        </div>
       : <p></p>}
{/*       <div className="gen-model__btn">
      <Link to={`/specification/${props.genModelId}`}>Specification</Link>
      </div> */}
      {/* {isTempRangeButtonOn(props)} */}
{/*       <div className="gen-model__btn">
      <Link to={`/specification/${props.genModelId}`}>Specification</Link>
      </div> */}
  </div>
)
}

const isTempRangeButtonOn  = (props) => {
  if (props.genModelTemperatureRange) {
    return (
      <div className="gen-model__btn">
      <Link to={`/specification/${props.genModelId}`}>Specification</Link>
      </div>
    )
  }
  return ''
}

const modelDisabled =(props, filterInfo) => {
  return (
    <div className="gen-model gen-model--disabled">
      <div className="gen-model__title">
        <h4>{props.genModelTitle}</h4>
      </div>
      <div className="gen-model__info">{props.genModelFrequencyRange}</div>
      {filterInfo}
      <div className="gen-model__picture"><img className="gen-model__picture--decor" 
      src={props.genModelPicture} alt="xtal XBO37/8" /></div> 
      <div className="gen-model__info">{props.genModelPackaging}</div>
      {props.genModelTemperatureRange ? 
        <div className="gen-model__btn--disabled">Specification</div>
       : <p></p>}
      {/* <div className="gen-model__btn--disabled">Specification</div> */}
    </div>
  );
}

export default GenModel