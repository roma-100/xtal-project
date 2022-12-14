/* Sender SpecificationContainer.jsx */
//***********  SpecificationStep2.jsx **** */
/* 
1/ Banner Step 1
2/ Input data Step 2  -> Step 3 (Specification + Special requiremens)
*/

import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Radio,
  FormLabel,
  RadioGroup,
  InputAdornment,
  OutlinedInput,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Button,
  Switch
} from "@mui/material/";
import NominalFrequencyField from "./FieldComponent/NominalFrequencyField"
import StabilityVsTemperatureField from "./FieldComponent/xdStabilityVsTemperatureField"
import VoltageField from "./FieldComponent/VoltageField"
import OutputTypeField from "./FieldComponent/OutputTypeField"
import SubharmonicsLevelField from "./FieldComponent/SubharmonicsLevelField";
import PhaseNoiseField from "./FieldComponent/PhaseNoiseField"
import UniversalLevelField from "./FieldComponent/UniversalLevelField"

const SpecificationStep1 = (props) => {
  const {dataForm, updateVoltageBlurTC, updateOutputTypeBlurTC, 
        phaseNoiseSwitchToggleAC, specFormInputStep3} = props
  const {selectedModel } = dataForm

  const [backBtn, setBackBtn] = useState(false);
/*   const [continuousCurrentS, setContinuousCurrentS] = useState('')
  
  const xx = () => {
    if (dataForm.blurDataset.frequency !== 0 ) return dataForm.blurDataset.continuousCurrentResult + 5
    if (dataForm.blurDataset.frequency === 0 ) return 44
    return 11
  }
  setContinuousCurrentS(xx()) */

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nominalFrequency: "",
      stabilityVsTemperature: "",
      voltage: "3.3",
      outputType: "Sine-wave",
      phaseNoiseSwitch: dataForm.phaseNoiseSwitch,
      subharmonicsLevel: dataForm.selectedModel.frequencyType === "with multiplication" ? '-40' : '',
      continuousCurrent: '',
      //gSensitivity: '1',
      aginPerDay: '',
      phaseNoise1Hz: '',
      phaseNoise10Hz: '',
      phaseNoise100Hz: '',
      phaseNoise1KHz: '',
      phaseNoise10KHz: '',
      phaseNoise100KHz: '',
    },
  });
 // window.bb = control
  //window.bc = {...field}
//console.log(dataForm.blurDataset.continuousCurrentResult + 5)
  const formElementDecor = {
    textField: {
      p: 1,
      m: 1,
      width: "93%",
      display: "flex",
      justifyContent: "center",
    },

    radioGroupFormControl: {
      p: 1,
      width: "93%",
      display: "flex",
      justifyContent: "center",
    },
    radioGroupLabel: {
      color: "#084C81",
      display: "flex",
      justifyContent: "center",
    },
    radioGroup: { width: "100%", display: "flex", justifyContent: "center" },
    PhaseNoise: {
      width: '120px',
      display: !dataForm.phaseNoiseSwitch && "none"
    },
    helperText: {
      color: "grey",
      mt: -1 
    },
    subharmonicsLeve: {

    }
  };

  const onSubmit = (data) => {
    //const myObject = dataForm.continuousCurrentData.continuousCurrent
    //Object.keys(myObject).forEach(key => console.log(key + ': ' + myObject[key]))
    //console.log(continuousCurrentDataSelected)

    props.specFormInputStep2TC({
      submitData: {
        nominalFrequency: data.nominalFrequency,
        stabilityVsTemperature: data.stabilityVsTemperature,
        voltage: data.voltage,
        outputType: data.outputType,
        "subharmonicsLevel": data.subharmonicsLevel,
        "continuousCurrent": data.continuousCurrent,
        //"gSensitivity": data.gSensitivity,
        "aginPerDay": data.aginPerDay,
        "phaseNoise1Hz": data.phaseNoise1Hz,
        "phaseNoise10Hz": data.phaseNoise10Hz,
        "phaseNoise100Hz": data.phaseNoise100Hz,
        "phaseNoise1KHz": data.phaseNoise1KHz,
        "phaseNoise10KHz": data.phaseNoise10KHz,
        "phaseNoise100KHz": data.phaseNoise100KHz
      },
    });
    //console.log(data);
  };
  const look = (errors) => console.log(errors.firstName?.message);

  const subharmonicsLevelDispaly = {
    //...formElementDecor.textField, 
    display: dataForm.selectedModel.frequencyType !== "with multiplication" && "none"
    //display: "none"
  }

  const handleClickBtnReset = () => {
    props.filterInitTC();
    setBackBtn(true);
    //console.log('clicked!')
  };
  //console.log('stabilityFromFrequencyBlur ++->: ' + props.stabilityFromFrequencyBlur)
  const validForm = () => {
    return (
      <>
        <div className="speciication__wrap--position">
          {/* Start Form  +++++++++++ */}
          <div className="specification-form__wrap">
          <div className="specification-title__define-main-requirements" >
            Define your main requirements
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                {/* Start nominalFrequency +++++++++++ */}
                <Controller
                  name="nominalFrequency"
                  control={control}
                  rules={{
                    required: "This is required",
                    maxLength: {
                      value: 10,
                      message: "Value is too long",
                    },
                    min: {
                      value: selectedModel.frequencyMin,
                      message:
                        "Min value is " +
                        selectedModel.frequencyMin +
                        " MHz",
                    },
                    max: {
                      value: selectedModel.frequencyMax,
                      message:
                        "Max value is " +
                        selectedModel.frequencyMax +
                        " MHz",
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <NominalFrequencyField 
                      field = {field}
                      error = {errors.nominalFrequency}
                      decor = {formElementDecor.textField}
                      handleOnBlur={props.setFrequencyBlurTC}
                      frequencyRange = {props.frequencyRange}
                      />
                    );
                  }}
                />
              </div>
              {/* END nominalFrequency +++++++++++ */}

              {/* Start stabilityVsTemperature +++++++++++ */}
{/*               <div>
                <Controller
                  name="stabilityVsTemperature"
                  control={control}
                  rules={{
                    required: "This is required",
                    maxLength: {
                      value: 8,
                      message: "Value is too long",
                    },
                    min: {
                      value: dataForm.blurDataset.stabilityVsTemperature,
                      message:
                        "Min value is " +
                        dataForm.blurDataset.stabilityVsTemperature +
                        " ppb",
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <StabilityVsTemperatureField 
                      field = {field}
                      error = {errors.stabilityVsTemperature}
                      decor = {formElementDecor.textField}
                      handleOnBlur={props.setstabilityVsTemperatureBlurValueBlurTC}
                      temperatureRangeSelected = {selectedModel.temperatureRangeSelected}
                      stabilityFromFrequencyBlur = {dataForm.blurDataset.stabilityVsTemperature}
                      />
                    );
                  }}
                />
              </div> */}
                            <div>
              <Controller
                  name="stabilityVsTemperature"
                  control={control}
                  rules={{
                    required: "This is required",
                    maxLength: {
                      value: 8,
                      message: "Value is too long",
                    },
                    min: {
                      value: dataForm.blurDataset.stabilityVsTemperature,
                      message:
                        "Min value is " +
                        dataForm.blurDataset.stabilityVsTemperature +
                        " ppb",
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <UniversalLevelField 
                      disabledStatus = {dataForm.blurDataset.frequency ? false : true}
                      field = {field}
                      handleOnBlur={props.setstabilityVsTemperatureBlurValueBlurTC}
                      error = {errors.stabilityVsTemperature}
                      label = {"Stability vs Temperature"}
                      placeholder = {dataForm.blurDataset.stabilityVsTemperature + ''}
                      decor = {{...formElementDecor.textField, width: "98%"}}
                      endAdornment = {'ppb'}
                      helperText = {errors.stabilityVsTemperature
                        ? errors.stabilityVsTemperature.message
                        : 'to ' + dataForm.blurDataset.stabilityVsTemperature + ' ppb (' + selectedModel.temperatureRangeSelected + ')'
                        } 
                      helperTextDecor = {{color: "grey", mt: -1}}
                      />
                    );
                  }}
                />
            </div>
              {/* END stabilityVsTemperature +++++++++++ */}

              {/* Start voltage +++++++++++ */}
              <div>
                <Controller
                  name="voltage"
                  control={control}
                  render={({ field }) => {
                    return (
                      <VoltageField 
                      field = {field}
                      formElementDecor= {formElementDecor}
                      onChange = {updateVoltageBlurTC}
                      />
                    );
                  }}
                />
              </div>
              {/* END voltage +++++++++++ */}

              {/* Start Output Type +++++++++++ */}
              <div>
                <Controller
                  name="outputType"
                  control={control}
                  render={({ field }) => {
                    return (
                      <OutputTypeField 
                      field = {field}
                      formElementDecor= {formElementDecor}
                      onChange = {updateOutputTypeBlurTC}
                      />
                    );
                  }}
                />
              </div>
              {/* END Output Type +++++++++++ */}

{/* @@@@@@@@@@@@@@@@@ Step 3 Fields @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

{/* Start Subharmonics level +++++++++++ */}
{/* <div style={subharmonicsLevelDispaly}> */} {/* //style={{display: "none"}} visibility:hidden */}
              <Controller
                  name="subharmonicsLevel"
                  control={control}
/*                   rules={{
                    required: "This is required"
                  }} */
/*                   rules={{
                    required: "This is required",
                    dataForm.selectedModel.frequencyType === "with multiplication" && {required: "This is required"}
                  }} */
                  rules={dataForm.selectedModel.frequencyType === "with multiplication" && {required: "This is required"}}
                  render={({ field }) => {
                    return (
                      <SubharmonicsLevelField 
                      field = {field}
                      placeholder = { errors.subharmonicsLevel? errors.subharmonicsLevel.message : null}
                      error = {errors.subharmonicsLevel}
                      label = {'Subharmonics Level'}
                      decor = {dataForm.selectedModel.frequencyType === "with multiplication" ?
                      {...formElementDecor.textField, width: "98%"}:
                      {display: "none"}} //subharmonicsLevelDecor dataForm.selectedModel.frequencyType === "with multiplication"
                      endAdornment = {'dBc'}
                      helperTextDecor = {formElementDecor.helperText}
                      helperText = {errors.subharmonicsLevel? 'Default value: -40 dbc' :null}
                      />
                    );
                  }}
                />
                {/* </div> */}
 {/* END Subharmonics level +++++++++++ */}

{/* Start aginPerDay level +++++++++++ */}
              <div>
              <Controller
                  name="aginPerDay"
                  control={control}
                  rules={{
                    min: {
                      value: dataForm.blurDataset.agingPerDayMinResult,
                      message:
                        "Min value is " +
                        dataForm.blurDataset.agingPerDayMinResult +
                        " ppb",
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <UniversalLevelField 
                      disabledStatus = {dataForm.blurDataset.agingPerDayMinResult ? false : true}
                      field = {field}
                      handleOnBlur={()=>{}}
                      error = {errors.aginPerDay}
                      label = {'Aging per Day'}
                      placeholder = {errors.aginPerDay? errors.aginPerDay.message : dataForm.blurDataset.agingPerDayDefResult + ''}
                      decor = {{...formElementDecor.textField, width: "98%"}}
                      endAdornment = {'ppb'}
                      helperText = {errors.aginPerDay
                        ? errors.aginPerDay.message + ', Min: to ' + dataForm.blurDataset.agingPerDayResult + ' ppb; Max: to 10 ppb'
                        : dataForm.blurDataset.agingPerDayResult
                          ? 'can be reduced to: ' + dataForm.blurDataset.agingPerDayMinResult + ' ppb'
                          : ''} 
                      helperTextDecor = {{color: "grey", mt: -1}}
                      />
                    );
                  }}
                />
            </div>
 {/* END aginPerDay level +++++++++++ */}

{/* Start continuousCurrent +++++++++++ */}
          <div>
              <Controller
                  name="continuousCurrent"
                  control={control}
                  rules={{
                    min: {
                      value: dataForm.blurDataset.continuousCurrentResult,
                      message:
                        "Min value is " +
                        dataForm.blurDataset.continuousCurrentResult +
                        " mA",
                    },
                  }}

                  render={({ field }) => {
                    return (
                      <UniversalLevelField 
                       disabledStatus = {dataForm.blurDataset.frequency ? false : true}
                      field = {field}
                      handleOnBlur={()=>{}}
                      error = {errors.continuousCurrent}
                      label = {'Continuous current max'}
                      /* decor = {{...formElementDecor.textField, width: "98%"}} */
                      /* decor = {{...formElementDecor.textField, continuousCurrentDispaly}} */
                      decor = {{...formElementDecor.textField, width: "100%"}}
                      /*                       formElementDecor= {{...formElementDecor,
                        //display: !dataForm.blurDataset.frequencyBlur ? "none" : null
                        continuousCurrentDispaly
                      }} */

                      placeholder = { errors.continuousCurrent? errors.continuousCurrent.message : (dataForm.blurDataset.continuousCurrentResult + 5) + ''}
                      endAdornment = {'mA'}
                      //helperText = {errors.continuousCurrent? errors.continuousCurrent.message : 'Typical: ' + dataForm.blurDataset.continuousCurrentResult + 'mA'}
                      helperText = {errors.continuousCurrent 
                         ? errors.continuousCurrent.message
                         : dataForm.blurDataset.frequency
                          ? 'can be reduced to: ' + dataForm.blurDataset.continuousCurrentResult + 'mA'
                          : ''}
                      helperTextDecor = {{color: "grey", mt: -1}}
                      />
                    );
                  }}
                />
            </div>
 {/* END aginPerDay level +++++++++++ */}

{/* Start G-sensitivity +++++++++++ */}

 {/* END aginPerDay G-sensitivity +++++++++++ */}

 {/* ++++++++ Start phaseNoiseSwitch ++++++ */}
      <div className="specification-mail__field">
        <Controller
          name="phaseNoiseSwitch"
          control={control}
          render={({ field }) => {
            return (
                <FormControlLabel 
                sx={{marginLeft: 0, color: '#1F69A2'}}
                {...field}
                control={<Switch onClick={phaseNoiseSwitchToggleAC} />}
                label="Phase-noise params" 
                labelPlacement="end"
                />
            );
          }}
        />
      </div>
{/* ++++++++ End phaseNoiseSwitch ++++++ */}


{/* ++++++++ start row phaseNoise 1Hz 1KHz  ++++++ */}
       <div className="specification-phaseNoise__row">
        {/* ++++++++ start phaseNoise1Hz  ++++++ */}
        <div className="specification-mail__field">
          <Controller
            name="phaseNoise1Hz"
            control={control}
            rules={{}}
            render={({ field }) => {
              return (
                <PhaseNoiseField 
                field = {field}
                decor = {formElementDecor.PhaseNoise}
                formHelperText= {'Offset 1Hz'}
                />
              );
            }}
          />
        </div>
        {/* ++++++++ End phaseNoise1Hz ++++++ */}

                {/* ++++++++ start phaseNoise1Hz  ++++++ */}
                <div className="specification-mail__field">
          <Controller
            name="phaseNoise1KHz"
            control={control}
            rules={{}}
            render={({ field }) => {
              return (
                <PhaseNoiseField 
                field = {field}
                decor = {formElementDecor.PhaseNoise}
                formHelperText= {'Offset 1KHz'}
                />
              );
            }}
          />
        </div>
        {/* ++++++++ End phaseNoise1Hz ++++++ */}

       </div>
{/* ++++++++ End row phaseNoise 1Hz 1KHz  ++++++ */}

{/* ++++++++ start row phaseNoise 10Hz 10KHz  ++++++ */}
      <div className="specification-phaseNoise__row">
        {/* ++++++++ start phaseNoise1Hz  ++++++ */}
        <div className="specification-mail__field">
          <Controller
            name="phaseNoise10Hz"
            control={control}
            rules={{}}
            render={({ field }) => {
              return (
                <PhaseNoiseField 
                field = {field}
                decor = {formElementDecor.PhaseNoise}
                formHelperText= {'Offset 10Hz'}
                />
              );
            }}
          />
        </div>
        {/* ++++++++ End phaseNoise1Hz ++++++ */}

                {/* ++++++++ start phaseNoise1Hz  ++++++ */}
                <div className="specification-mail__field">
          <Controller
            name="phaseNoise10KHz"
            control={control}
            rules={{}}
            render={({ field }) => {
              return (
                <PhaseNoiseField 
                field = {field}
                decor = {formElementDecor.PhaseNoise}
                formHelperText= {'Offset 10KHz'}
                />
              );
            }}
          />
        </div>
        {/* ++++++++ End phaseNoise1Hz ++++++ */}

       </div>
{/* ++++++++ End row phaseNoise 10Hz 10KHz  ++++++ */}

{/* ++++++++ start row phaseNoise 100Hz 100KHz  ++++++ */}
<div className="specification-phaseNoise__row">
        {/* ++++++++ start phaseNoise1Hz  ++++++ */}
        <div className="specification-mail__field">
          <Controller
            name="phaseNoise100Hz"
            control={control}
            rules={{}}
            render={({ field }) => {
              return (
                <PhaseNoiseField 
                field = {field}
                decor = {formElementDecor.PhaseNoise}
                formHelperText= {'Offset 100Hz'}
                />
              );
            }}
          />
        </div>
        {/* ++++++++ End phaseNoise1Hz ++++++ */}

                {/* ++++++++ start phaseNoise1Hz  ++++++ */}
                <div className="specification-mail__field">
          <Controller
            name="phaseNoise100KHz"
            control={control}
            rules={{}}
            render={({ field }) => {
              return (
                <PhaseNoiseField 
                field = {field}
                decor = {formElementDecor.PhaseNoise}
                formHelperText= {'Offset 100KHz'}
                />
              );
            }}
          />
        </div>
        {/* ++++++++ End phaseNoise1Hz ++++++ */}

       </div>
{/* ++++++++ End row phaseNoise 100Hz 100KHz  ++++++ */}




{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

              <div className="button-specification_wrap">
                <div className="button-specification_btn">
                  <Button variant="contained" onClick={handleClickBtnReset}>
                    Reset
                  </Button>
                </div>
                <div className="button-specification_btn">
                  <Button variant="contained" type="submit">
                    Submit Specification
                  </Button>
                </div>
              </div>
              {/* <div><pre>{JSON.stringify(data, null, 2) }</pre></div>; */}
            </form>
          </div>
          {/* END Form  +++++++++++ */}
        </div>
      </>
    );
  };

  return !backBtn ? validForm() : <Navigate to="/gen_models_hello" />;
  //return validForm()
};

export default SpecificationStep1;
