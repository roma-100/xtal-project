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
} from "@mui/material/";
import SpecificationBanerStep1 from "./SpecificationBannerStep1";
import NominalFrequencyField from "./FieldComponent/NominalFrequencyField"
import StabilityVsTemperatureField from "./FieldComponent/StabilityVsTemperatureField"
import VoltageField from "./FieldComponent/VoltageField"
import OutputTypeField from "./FieldComponent/OutputTypeField"

const SpecificationStep1 = (props) => {
  const {dataForm} = props
  const [backBtn, setBackBtn] = useState(false);

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
    },
  });

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
  };

  const onSubmit = (data) => {
    //const myObject = dataForm.continuousCurrentData.continuousCurrent
    //Object.keys(myObject).forEach(key => console.log(key + ': ' + myObject[key]))
    //console.log(continuousCurrentDataSelected)

    props.specFormInputStep2({
      inputValueSteps: {
        nominalFrequency: data.nominalFrequency,
        stabilityVsTemperature: data.stabilityVsTemperature,
        voltage: data.voltage,
        outputType: data.outputType
      },
    });
    console.log(data);
  };
  const look = (errors) => console.log(errors.firstName?.message);

  const handleOnBlur = (e) => {
    props.setStabilituVsTemperature(e);
  };

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
                      value: props.selectedModel.frequencyMin,
                      message:
                        "Min value is " +
                        props.selectedModel.frequencyMin +
                        " MHz",
                    },
                    max: {
                      value: props.selectedModel.frequencyMax,
                      message:
                        "Max value is " +
                        props.selectedModel.frequencyMax +
                        " MHz",
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <NominalFrequencyField 
                      field = {field}
                      error = {errors.nominalFrequency}
                      decor = {formElementDecor.textField}
                      handleOnBlur={handleOnBlur}
                      frequencyRange = {props.frequencyRange}
                      />
                    );
                  }}
                />
              </div>
              {/* END nominalFrequency +++++++++++ */}

              {/* Start stabilityVsTemperature +++++++++++ */}
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
                      value: props.stabilityFromFrequencyBlur,
                      message:
                        "Min value is " +
                        props.stabilityFromFrequencyBlur +
                        " ppb",
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <StabilityVsTemperatureField 
                      field = {field}
                      error = {errors.stabilityVsTemperature}
                      decor = {formElementDecor.textField}
                      temperatureRangeSelected = {props.selectedModel.temperatureRangeSelected}
                      stabilityFromFrequencyBlur = {props.stabilityFromFrequencyBlur}
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
                      />
                    );
                  }}
                />
              </div>
              {/* END Output Type +++++++++++ */}

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
