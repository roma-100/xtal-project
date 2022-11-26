//***********  SpecificationContainer.jsx ****** */
//http://localhost:3000/specification
import React from "react";
import StateSpecFormShowHelper from "../Helper/StateSpecFormShowHelper";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  specFormInputStep2TC,
  //specFormInputStep3,
  setFrequencyBlurTC,
  setstabilityVsTemperatureBlurValueBlurTC,
  updateVoltageBlurTC,
  updateOutputTypeBlurTC,
  initSelectedModel,
  setEmailDataAC,
  setStepsLevelFinish,
  resetSpecFormDataAC,
  phaseNoiseSwitchToggleAC,
  clickHandlerAddSpecialRequirementsTC

} from "../../redux/reducer-spec-form";
import {filterInitTC} from "../../redux/reducer-gen_models"


//import SpecificationBannerStep1 from "./SpecificationBannerStep1"
import SpecificationBannerStep1 from "./SpecificationBannerStep1"
import SpecificationBannerStep2 from "./SpecificationBannerStep2"

import SpecificationStep2 from "./SpecificationStep2";

import SpecificationStep3 from "./SpecificationStep3";
import SpecificationMailSender from "./SpecificationMailSender"
/* import SpecificationStep3mult from "./SpecificationStep3mult"; */

import {
  Navigate, // == redirect
  useLocation,
  useNavigate,
  useParams,
  useMatch,
} from "react-router-dom";

class SpecificationContainer extends React.Component {

  flexStyleXlsTbl = () => {
    const style = {
      screenWidth: window.innerWidth,
      tableWidth: {width: 300},
      pdfOffset: 0,
      pdfWidth: window.innerWidth,
      margin: 10
    }
    const tableWidthMin = 300
    const tableWidthMax = 650
    //console.log('screen width: ' + window.innerWidth)
  
    if (style.screenWidth > tableWidthMin) { 
      style.tableWidth.width = style.screenWidth - style.margin
      if (style.screenWidth > tableWidthMax) {
        style.tableWidth.width = tableWidthMax - style.margin
      }
    }
  
    style.pdfOffset = (style.screenWidth - style.tableWidth.width)/9
    style.pdfWidth = 0.6 * style.tableWidth.width * (style.screenWidth / style.tableWidth.width)
  
    return style
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
      //Crash test
      if (!this.props.stSpecForm.selectedModel.frequencyMin) {
       filterInitTC()
        return <Navigate to='/home'  />
      }
      return (
        <div>
          {specBannerStep1()}

{/*           <SpecificationBannerStep2
            dataForm={this.props.stSpecForm}
          />     */}
          
          <SpecificationStep2
            specFormInputStep2TC={this.props.specFormInputStep2TC}
            picturePath={picturePath}
            dataForm={this.props.stSpecForm}
            setFrequencyBlurTC={this.props.setFrequencyBlurTC}
            setstabilityVsTemperatureBlurValueBlurTC= {this.props.setstabilityVsTemperatureBlurValueBlurTC}
            updateVoltageBlurTC={this.props.updateVoltageBlurTC}
            updateOutputTypeBlurTC={this.props.updateOutputTypeBlurTC}
            frequencyRange={`${this.props.stSpecForm.selectedModel.frequencyMin}...${this.props.stSpecForm.selectedModel.frequencyMax}`}
            filterInitTC = {this.props.filterInitTC}
            phaseNoiseSwitchToggleAC = {this.props.phaseNoiseSwitchToggleAC}

          />
        </div>
      );
    };
    // +++ End Form Step 2 Component ++++++

    // +++ Start Form Step 3 Component ++++++
    //SpecificationStep3
    const specStep3 = () => {
      return (
        <div>
          {specBannerStep1()}
{/* 
        <SpecificationBannerStep2
          dataForm={this.props.stSpecForm}
        />   */} 

        <SpecificationStep3
            emailData={this.props.stSpecForm.emailData}
            xlsData={this.props.stSpecForm.xlsData}
            flexStyleXlsTbl = {this.flexStyleXlsTbl()}
            clickHandlerAddSpecialRequirementsTC = {this.props.clickHandlerAddSpecialRequirementsTC}
        />
        </div>
      );

    };

    const specStep4 = () => {
      return (
        <div>
          {specBannerStep1()}
{/* 
        <SpecificationBannerStep2
          dataForm={this.props.stSpecForm}
        />   */} 

        <SpecificationMailSender
        setStepsLevelFinish={this.props.setStepsLevelFinish}
        emailData={this.props.stSpecForm.emailData}
        xlsData={this.props.stSpecForm.xlsData}
        filterInitTC={this.props.filterInitTC}
        />
        </div>
      );

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
        return specStep4()
      }
 /*      if (this.props.stSpecForm.stepsLevel === 3) {
        return (
          <>
          {specBannerStep1()}

          <SpecificationBannerStep2
            dataForm={this.props.stSpecForm}
          />   
          
        <SpecificationMailSender
          setStepsLevelFinish={this.props.setStepsLevelFinish}
          emailData={this.props.stSpecForm.emailData}
          xlsData={this.props.stSpecForm.xlsData}
          filterInitTC={this.props.filterInitTC}
        />

          </>
        );
      } */
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
  specFormInputStep2TC,
  //specFormInputStep3,
  setFrequencyBlurTC,
  setstabilityVsTemperatureBlurValueBlurTC,
  updateVoltageBlurTC,
  updateOutputTypeBlurTC,
  initSelectedModel,
  setEmailDataAC,
  setStepsLevelFinish,
  resetSpecFormDataAC,
  filterInitTC,
  phaseNoiseSwitchToggleAC, 
  clickHandlerAddSpecialRequirementsTC
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