//***********  SpecificationContainer.jsx ****** */
//http://localhost:3000/specification
import React from "react";
import SpecificationSubmit from "./SpecificationSubmit";
import StateSpecFormShowHelper from "../Helper/StateSpecFormShowHelper";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  specFormInputStep2,
  setStabilituVsTemperature,
  initFrequencyBlurAC,
  specFormInitStep2TC,
  initSelectedModel,
  setStepsLevelFinish
} from "../../redux/reducer-spec-form";

//import SpecificationBannerStep1 from "./SpecificationBannerStep1"
import SpecificationStep1 from "./SpecificationStep1";
import {
  Navigate, // == redirect
  useLocation,
  useNavigate,
  useParams,
  useMatch,
} from "react-router-dom";

class SpecificationContainer extends React.Component {

  componentDidMount() {
    //Getting selected model from reducer-gen_models  -> to step2 (reducer-spec-form)
    const selectedModel = this.props.stGenModels.models.filter(
      (value, index) => {
        //console.log(JSON.stringify(value.id, null, 2))
        return value.id === this.props.router.params.generatorId;
        //return value.id === "5"
      }
    )[0];
    /* Object { id: "2", name: "XBO8S", frequencyRange: "8-150 Fundamental", frequencyMin: "8", frequencyMax:  */

    // Get array StabilityVsTemperature from reducer-gen_models  -> to step2 (reducer-spec-form)
    const selectedModelStabilityVsTemperature =
      this.props.stGenModels.temperatureRange
        .filter((value, index) => {
          //console.log(JSON.stringify(value.id, null, 2))
          return value.range === this.props.stGenModels.filterTemperatureRange;
        })[0]
        .modelsStability.filter((value, index) => {
          return value.modelId === this.props.router.params.generatorId;
        })[0].stabilityVsTemperature;
    /*         stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[5, 10, 20],
        } */

    this.props.specFormInitStep2TC(
      selectedModel,
      selectedModelStabilityVsTemperature
    );
  }
  
  render() {
    const picturePath = "../../pimages/types200/"+
    this.props.stSpecForm.selectedModel.pictureTag +
    "_200px.png"
    // +++ Start Form Step 1 Component ++++++
    const specStep1 = () => {
    
      return (
        <div>
          <SpecificationStep1
            specFormInputStep2={this.props.specFormInputStep2}
            picturePath={picturePath}
            selectedModel={this.props.stSpecForm.selectedModel}
            stabilityVsTemperature={
              this.props.stSpecForm.stabilityVsTemperature
            }
            setStabilituVsTemperature={this.props.setStabilituVsTemperature}
            stabilityFromFrequencyBlur={
              this.props.stSpecForm.stabilityFromFrequencyBlur
            }
            frequencyRange={`${this.props.stSpecForm.selectedModel.frequencyMin}...${this.props.stSpecForm.selectedModel.frequencyMax}`}
          />
        </div>
      );
    };
    // +++ End Form Step 1 Component ++++++

    /*  === main Render ==== */
    const renderComponent = () => {
      if (this.props.stSpecForm.stepsLevel === 1) {
        return specStep1();
      }
      if (this.props.stSpecForm.stepsLevel === 2) {
        return (
          <SpecificationSubmit
            dataForm={this.props.stSpecForm}
            picturePath={picturePath}
            selectedModel={this.props.stSpecForm.selectedModel}
            setStepsLevelFinish= {this.props.setStepsLevelFinish}
          />
        );
      }
      if (this.props.stSpecForm.stepsLevel === 10) { //Finish step
        return (
          <Navigate to="/gen_models_hello" />
        );
      }
      
    };
    return (
      <>
        {renderComponent()};
        <StateSpecFormShowHelper stSpecForm={this.props.stSpecForm} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stGenModels: state.gen_modelsReducer,
    stSpecForm: state.specFormReducer,
  };
};

const mapDispatchToProps = {
  specFormInputStep2,
  setStabilituVsTemperature,
  initFrequencyBlurAC,
  specFormInitStep2TC,
  initSelectedModel,
  setStepsLevelFinish
  /*     filterFrequencyTypeTC,
    filterInitTC,
    filterTemperatureRangeTC */
};

/* 
const ComplexDialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsContainer) */

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    let match = useMatch("/profile/25714");
    return (
      <Component {...props} router={{ location, navigate, params, match }} />
    );
  }

  return ComponentWithRouterProp;
}

const ComplexSpecificationContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter //, withAuthRedirect
)(SpecificationContainer);

export default ComplexSpecificationContainer;
