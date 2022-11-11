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
  setEmailDataAC,
  setStepsLevelFinish,
  resetSpecFormDataAC,
  phaseNoiseSwitchToggleAC

} from "../../redux/reducer-spec-form";
import {filterInitTC} from "../../redux/reducer-gen_models"


//import SpecificationBannerStep1 from "./SpecificationBannerStep1"
import SpecificationBannerStep1 from "./SpecificationBannerStep1"
import SpecificationBannerStep2 from "./SpecificationBannerStep2"

import SpecificationStep2 from "./SpecificationStep2";

import SpecificationStep3 from "./SpecificationStep3";
/* import SpecificationStep3mult from "./SpecificationStep3mult"; */

import {
  Navigate, // == redirect
  useLocation,
  useNavigate,
  useParams,
  useMatch,
} from "react-router-dom";

class SpecificationContainer extends React.Component {
  state = {
    isDidMount: false
  }
  componentDidMount() {
    if (this.state.isDidMount) { return 1 } else { this.state.isDidMount = true; }

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
        const continuousCurrent =
        this.props.stGenModels.temperatureRange
          .filter((value, index) => {
            //console.log(JSON.stringify(value.id, null, 2))
            return value.range === this.props.stGenModels.filterTemperatureRange;
          })[0]
          .modelsStability.filter((value, index) => {
            return value.modelId === this.props.router.params.generatorId;
          })[0].continuousCurrent

    this.props.specFormInitStep2TC(
      selectedModel,
      selectedModelStabilityVsTemperature,
      continuousCurrent
    );

    //this.state.isDidMount = true //Let's Stop didMount twice
  }
  
 
  render() {
    const picturePath = "../../pimages/types200/"+
    this.props.stSpecForm.selectedModel.pictureTag +
    "_200px.png"
    
    const specBannerStep1 = () => {
      return (
        <SpecificationBannerStep1
        picturePath={picturePath}
        selectedModel={this.props.stSpecForm.selectedModel}
        features={this.props.stSpecForm.selectedModel.features}
      />
      )
    }
    // +++ Start Form Step 2 Component ++++++
    const specStep2 = () => {
    
      return (
        <div>
          {specBannerStep1()}

          <SpecificationStep2
            specFormInputStep2={this.props.specFormInputStep2}
            picturePath={picturePath}
            dataForm={this.props.stSpecForm}
            selectedModel={this.props.stSpecForm.selectedModel}
            formFieldsRules={this.props.stSpecForm.formFieldsRules}
            stabilityVsTemperature={
              this.props.stSpecForm.stabilityVsTemperature
            }
            setStabilituVsTemperature={this.props.setStabilituVsTemperature}
            stabilityFromFrequencyBlur={
              this.props.stSpecForm.stabilityFromFrequencyBlur
            }
            frequencyRange={`${this.props.stSpecForm.selectedModel.frequencyMin}...${this.props.stSpecForm.selectedModel.frequencyMax}`}
            filterInitTC = {this.props.filterInitTC}

          />
        </div>
      );
    };
    // +++ End Form Step 2 Component ++++++

    // +++ Start Form Step 3 Component ++++++
    const specStep3 = () => {
      return (
        <div>
          {specBannerStep1()}

          <SpecificationBannerStep2
            dataForm={this.props.stSpecForm}
          />          

          <SpecificationStep3
            dataForm={this.props.stSpecForm}
            setEmailDataAC = {this.props.setEmailDataAC}
            filterInitTC = {this.props.filterInitTC}
            phaseNoiseSwitchToggleAC = {this.props.phaseNoiseSwitchToggleAC}
          />
        </div>
      );

/* 
    if (this.props.stSpecForm.selectedModel.frequencyType === 'with multiplication') {
      return (
        <div>haseNoiseSwitchToggleAC
          {specBannerStep1()}

          <SpecificationBannerStep2
            dataForm={this.props.stSpecForm}
          />          

          <SpecificationStep3mult
            dataForm={this.props.stSpecForm}
            setEmailDataAC = {this.props.setEmailDataAC}
            filterInitTC = {this.props.filterInitTC}
          />
        </div>
      ); 
    }*/

    };
    // +++ End Form Step 2 Component ++++++
    
    /*  === main Render ==== */
    const renderComponent = () => {
      if (this.props.stSpecForm.stepsLevel === 1) {
        //this.props.resetSpecFormDataAC()
        return specStep2();
      }
      if (this.props.stSpecForm.stepsLevel === 2) {
        return specStep3()
      }

      if (this.props.stSpecForm.stepsLevel === 3) {
        return (
          <SpecificationSubmit
            dataForm={this.props.stSpecForm}
            picturePath={picturePath}
            selectedModel={this.props.stSpecForm.selectedModel}
            setEmailDataAC = {this.props.setEmailDataAC}
            setStepsLevelFinish= {this.props.setStepsLevelFinish}
            filterInitTC = {this.props.filterInitTC}
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
  setEmailDataAC,
  setStepsLevelFinish,
  resetSpecFormDataAC,
  filterInitTC,
  phaseNoiseSwitchToggleAC
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
