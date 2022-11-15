//***********  SpecificationStep1.jsx **** */
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
  Switch, Checkbox
} from "@mui/material/";
import SubharmonicsLevelField from "./FieldComponent/SubharmonicsLevelField";
import PhaseNoiseField from "./FieldComponent/PhaseNoiseField"
import UniversalLevelField from "./FieldComponent/UniversalLevelField"

const SpecificationStep3fund = (props) => {
  const [backBtn, setBackBtn] = useState(false);
  const { dataForm, picturePath, filterInitTC, 
    phaseNoiseSwitchToggleAC, specFormInputStep3 } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
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



  const onSubmit = (data) => {
    console.log(data);
    specFormInputStep3 (
      { inputValueSteps: {
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
    }
    )
    //window.bb = errors
  };
  const look = (errors) => console.log(errors.firstName?.message);

  const handleOnBlur = (e) => {
    /* props.setStabilituVsTemperature(e); */
  };

  const handleClickBtnReset = () => {
    props.filterInitTC();
    setBackBtn(true);
    //console.log('clicked!')
  };

  const PhaseNoiseDecor = {
    width: '120px',
    display: !dataForm.phaseNoiseSwitch && "none"
  }


  const formElementDecor = {
    textField: {
      p: 1,
      m: 0,
      marginBottom: -1,
      marginTop: '.5rem',
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },

  };

  const subharmonicsLevelDispaly = {
    //...formElementDecor.textField, 
    display: dataForm.selectedModel.frequencyType !== "with multiplication" && "none"
    //display: "none"
  }
  //console.log (dataForm.selectedModel.frequencyType !== "with multiplication")

  //console.log('stabilityFromFrequencyBlur ++->: ' + props.stabilityFromFrequencyBlur)
  const validForm = () => {
    return (
      <>
        {/* END Banner +++++++++++ */}
        <div className="specification-form__wrap--position">
          {/* Start Form  +++++++++++ */}
          <div className="specification-form__wrap">
            <form onSubmit={handleSubmit(onSubmit)}>

{/* Start Subharmonics level +++++++++++ */}
<div style={subharmonicsLevelDispaly}> {/* //style={{display: "none"}} visibility:hidden */}
              <Controller
                  name="subharmonicsLevel"
                  control={control}
/*                   rules={{
                    required: "This is required",
                    dataForm.selectedModel.frequencyType === "with multiplication" && {required: "This is required"}
                  }} */
                  rules={dataForm.selectedModel.frequencyType === "with multiplication" && {required: "This is required"}}
                  render={({ field }) => {
                    return (
                      <SubharmonicsLevelField 
                      field = {field}
                      error = {errors.subharmonicsLevel}
                      label = {'Subharmonics Level'}
                      decor = {formElementDecor.textField} //subharmonicsLevelDecor dataForm.selectedModel.frequencyType === "with multiplication"
                      endAdornment = {'dBc'}
                      helperText = {null}
                      />
                    );
                  }}
                />
                </div>
 {/* END Subharmonics level +++++++++++ */}

{/* Start aginPerDay level +++++++++++ */}
              <div>
              <Controller
                  name="aginPerDay"
                  control={control}
                  rules={{
                    required: "This is required",
                  }}
                  render={({ field }) => {
                    return (
                      <UniversalLevelField 
                      field = {field}
                      error = {errors.aginPerDay}
                      label = {'Agin per Day'}
                      placeholder = {'Max: 10'}
                      decor = {formElementDecor.textField}
                      endAdornment = {'ppb'}
                      helperText = {''}
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
                    required: "This is required",
                  }}
                  render={({ field }) => {
                    return (
                      <UniversalLevelField 
                      field = {field}
                      error = {errors.continuousCurrent}
                      label = {'Continuous current max limit'}
                      decor = {formElementDecor.textField}
                      placeholder = { errors.continuousCurrent? errors.continuousCurrent.message : null}
                      endAdornment = {'mA'}
                      helperText = {'Typical: ' + dataForm.inputValueSteps.continuousCurrentTypical + 'mA'}
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
                decor = {PhaseNoiseDecor}
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
                decor = {PhaseNoiseDecor}
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
                decor = {PhaseNoiseDecor}
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
                decor = {PhaseNoiseDecor}
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
                decor = {PhaseNoiseDecor}
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
                decor = {PhaseNoiseDecor}
                formHelperText= {'Offset 100KHz'}
                />
              );
            }}
          />
        </div>
        {/* ++++++++ End phaseNoise1Hz ++++++ */}

       </div>
{/* ++++++++ End row phaseNoise 100Hz 100KHz  ++++++ */}


              {/*         <div className="button-specification_wrap">
                <input className="button-specification" type="submit" />
              </div> */}

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

export default SpecificationStep3fund;
