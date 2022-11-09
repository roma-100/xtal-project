//***********  SpecificationStep3mult.jsx **** */
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

const SpecificationStep3fund = (props) => {
  const [backBtn, setBackBtn] = useState(false);
  const { dataForm, picturePath, filterInitTC } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nominalFrequency: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Step3mult data: " + data.nominalFrequency);

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

  //console.log('stabilityFromFrequencyBlur ++->: ' + props.stabilityFromFrequencyBlur)
  const validForm = () => {
    return (
      <>
        {/* END Banner +++++++++++ */}
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
                      value: dataForm.selectedModel.frequencyMin,
                      message:
                        "Min value is " +
                        dataForm.selectedModel.frequencyMin +
                        " MHz",
                    },
                    max: {
                      value: dataForm.selectedModel.frequencyMax,
                      message:
                        "Max value is " +
                        dataForm.selectedModel.frequencyMax +
                        " MHz",
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <FormControl
                        sx={formElementDecor.textField}
                        onBlur={handleOnBlur}
                      >
                        <TextField
                          {...field}
                          label="Nominal Frequency"
                          /* id="standard-size-small" */
                          /* sx={{ m: 1, width: '25ch' }} */
                          margin="dense"
                          variant="outlined"
                          error={errors.nominalFrequency ? true : false}
                          placeholder={
                            errors.nominalFrequency
                              ? errors.nominalFrequency.message
                              : props.frequencyRange
                          }
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                MHz
                              </InputAdornment>
                            ),
                          }}
                          /* onChange={handleChange('weight')} */
                        />
                        <FormHelperText
                          sx={{ color: "red" }}
                          id="standard-weight-helper-text"
                        >
                          {errors.nominalFrequency !== "This is required" &&
                            errors.nominalFrequency?.message}
                        </FormHelperText>
                      </FormControl>
                    );
                  }}
                />
              </div>
              {/* END nominalFrequency +++++++++++ */}

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
