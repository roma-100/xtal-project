import React from "react";
import GenModel from "./GenModel/GenModel";
import FilterFrequencyType from "./GenFilter/FlterFrequencyType";
import FilterTemperatureRange from "./GenFilter/FlterTemperatureRange";
import StateSpecFormShowHelper from "../Helper/StateSpecFormShowHelper";

/* https://mui.com/material-ui/react-radio-button/#api */

const GenModelsHello = (props) => {
  const handleClickSelectedModel = (idModel) => {
    const selectedModel = props.gen_models.models.filter((value, index) => {
      //console.log(JSON.stringify(value.id, null, 2))
      return value.id === idModel;
      //return value.id === "5"
    })[0];
    /* Object { id: "2", name: "XBO8S", frequencyRange: "8-150 Fundamental", frequencyMin: "8", frequencyMax:  */

    // Get array StabilityVsTemperature from reducer-gen_models  -> to step2 (reducer-spec-form)
    const selectedModelStabilityVsTemperature =
      props.gen_models.temperatureRange
        .filter((value, index) => {
          //console.log(JSON.stringify(value.id, null, 2))
          return value.range === props.gen_models.filterTemperatureRange;
        })[0]
        .modelsTemperatureData.filter((value, index) => {
          return value.modelId === idModel;
        })[0].stabilityVsTemperature;
    /*         stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[5, 10, 20],
        } */
    const continuousCurrentArraySet = props.gen_models.temperatureRange
      .filter((value, index) => {
        //console.log(JSON.stringify(value.id, null, 2))
        return value.range === props.gen_models.filterTemperatureRange;
      })[0]
      .modelsTemperatureData.filter((value, index) => {
        return value.modelId === idModel;
      })[0].continuousCurrent;

      //agingPerDay
      const agingPerDayArraySet = props.gen_models.temperatureRange
      .filter((value, index) => {
        //console.log(JSON.stringify(value.id, null, 2))
        return value.range === props.gen_models.filterTemperatureRange;
      })[0]
      .modelsTemperatureData.filter((value, index) => {
        return value.modelId === idModel;
      })[0].agingPerDay;

    /* console.log("!!!!" + idModel)
   console.log(selectedModel)
   console.log(selectedModelStabilityVsTemperature)
   console.log(continuousCurrent) */
   //console.log(continuousCurrentArraySet)

    props.specFormInitStep2TC(
      selectedModel,
      selectedModelStabilityVsTemperature,
      continuousCurrentArraySet,
      agingPerDayArraySet
    );
  };

  const genModel = props.gen_models.models.map((x, index) => {
    return (
      <GenModel
        key={x.id}
        genModelId={x.id}
        genModelTitle={x.name}
        genModelFrequencyRange={x.frequencyRange}
        genModelPackaging={x.packaging}
        genModelPicture={"./pimages/types200/" + x.pictureTag + "_200px.png"}
        genModelIsActive={x.isActive}
        genModelTemperatureRange={x.temperatureRangeSelected}
        genModelStabilityLimit={x.stabilityLimit}
        specFormInitStep2TC={x.specFormInitStep2TC}
        handleClickSelectedModel={handleClickSelectedModel}
      />
    );
  });
  /* const modelsTemperatureDataArray */
  return (
    <>
      <div className="gen-models-filter__wrap">
        <h2>Define your main requirements</h2>
        <div className="gen-models-filter">
          <div className="gen-models-filter__title">
            <span>Frequency Type</span>
          </div>
          <div className="gen-models-filter__source">
            <FilterFrequencyType
              filterFrequencyTypeTC={props.filterFrequencyTypeTC}
            />
          </div>
        </div>
        <div className="gen-models-filter">
          <div className="gen-models-filter__title">
            <span>Temperature Range</span>
          </div>
          <div className="gen-models-filter__source">
            <FilterTemperatureRange
              filterTemperatureRangeTC={props.filterTemperatureRangeTC}
              temperatureRangeArray={props.gen_models.temperatureRangeArray}
            />
          </div>
        </div>

        {/* {temperatureRange()} */}
      </div>
      <div className="gen-models__wrap">
        <h2>OCXO Models</h2>
        <div className="gen-models">{genModel}</div>
      </div>

      <StateSpecFormShowHelper stSpecForm={props} />
    </>
  );
};

export default GenModelsHello;
