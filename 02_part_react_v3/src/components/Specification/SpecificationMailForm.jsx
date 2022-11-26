/* SpecificationMailForm.jsx */
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TextField, FormControl, FormHelperText, Button, Alert } from "@mui/material";

 const SpecificationMailForm =(props) => {
  const [backBtn, setBackBtn] = useState(false);
   const {onSubmit, status, filterInitTC} = props
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: "",
      email: "",
      phone: "",
      enquireNotation: "",
    },
  });
  //const onSubmit = (data) => console.log(data);
  //const look = (errors) => console.log(errors.companyName?.message);

  const formElementDecor = {
    textField: {

      width: "330px",
      ml: 2,
      display: "flex",
      justifyContent: "center",
    },
  }
  const handleClickBtnReset = () => {
    filterInitTC() //resset store filter
    setBackBtn(true)
    //console.log('clicked!')
  }

  const infoSubmitted = () => <div className="speciication-mail_title--success" >Information submitted</div>
  const submittedField = (status) => {
    if (!status){ 
    return (
      <div className="button-specification_wrap">
      <div className="button-specification_btn">
        <Button variant="contained" onClick={handleClickBtnReset}>
          Reset
        </Button>
      </div>
      <div className="button-specification_btn">
        <Button variant="contained"  type="submit">
          Submit Specification
        </Button>
      </div>
    </div>
    )}
    if (status==='SUCCESS'){
      return (
        <Alert severity="success" color="info" sx={{width: 380, ml:1, mb: 2}}>
          Information submitted
        </Alert>
      )
     }
     if (status==='FAILED'){
      return (
        <Alert variant="filled" severity="error" sx={{width: 300}}>
          Connection failed. Please try again.
        </Alert>
      )
     }

  }

const validForm = () => {
  return (
    <div className="speciication-mail__wrap">
    <div className="speciication-mail_title">
        
        <p>Contact information</p>
     </div>

    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ++++++++ Start Field companyName ++++++ */}
      <div className="specification-mail__field">
        <Controller
          name="application"
          control={control}
          rules={{
            required: "This is required",
            maxLength: {
              value: 100,
              message: "This is too long",
            },
          }}
          render={({ field }) => {
            return (
              <FormControl sx={formElementDecor.textField} >
                <TextField
                  {...field}
                  label="Application"
                  id="standard-size-small"
                  error={errors.application ? true : false}
                  size="small"
                  variant="standard"
                />
                <FormHelperText
                  sx={errors.application ? { color: "red" } : { color: "grey" }}
                  id="standard-weight-helper-text"
                >
                  {errors.application ? errors.application?.message : null}
                </FormHelperText>
              </FormControl>
            );
          }}
        />
        <p>{errors.companyName?.message}</p>
      </div>
      {/* ++++++++ END Field companyName ++++++ */}

      {/* ++++++++ Start Field email ++++++ */}
      <div className="specification-mail__field">
        <Controller
          name="email"
          type="email"
          control={control}
          rules={{
            required: "This is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email",
            },
          }}
          render={({ field }) => {
            return (
              <FormControl sx={formElementDecor.textField}>
                <TextField
                  {...field}
                  label="E-mail"
                  id="standard-size-small"
                  error={errors.email ? true : false}
                  size="small"
                  variant="standard"
                />
                <FormHelperText
                  sx={errors.companyName ? { color: "red" } : { color: "grey" }}
                  id="standard-weight-helper-text"
                >
                  {errors.email ? errors.email?.message : null}
                </FormHelperText>
              </FormControl>
            );
          }}
        />
        <p>{errors.email?.message}</p>
      </div>
      {/* ++++++++ Start Field email ++++++ */}

      {/* ++++++++ Start Field phone ++++++ */}
      <div className="specification-mail__field">
        <Controller
          name="phone"
          control={control}
          rules={{ maxLength: 12 }}
          render={({ field }) => {
            return (
              <FormControl sx={formElementDecor.textField}>
                <TextField
                  {...field}
                  label="Your phone"
                  id="standard-size-small"
                  //error="true"
                  /* defaultValue="Small" */
                  size="small"
                  variant="standard"
                />
                <FormHelperText
                  sx={{ color: "grey" }}
                  id="standard-weight-helper-text"
                >
                  Optional
                </FormHelperText>
              </FormControl>
            );
          }}
        />
      </div>
      {/* ++++++++ Start Field phone ++++++ */}

      {/* ++++++++ Start Field message ++++++ */}
      <div className="specification-mail__field">
        <Controller
          name="enquireNotation"
          control={control}
          rules={{}}
          render={({ field }) => {
            return (
              <FormControl sx={{...formElementDecor.textField, mt: 2}}>
                <TextField
                  {...field}
                  label="Enquire notation"
                  id="outlined-multiline-flexible"
                  //error="true"
                  /* defaultValue="Small" */
                  size="small"
                  variant="filled"
                  multiline
                  rows={4}
                />
                <FormHelperText
                  sx={{ color: "grey" }}
                  id="standard-weight-helper-text"
                >
                  Optional
                </FormHelperText>
              </FormControl>
            );
          }}
        />
      </div>
      {/* ++++++++ Start Field message ++++++ */}
      {/* Buttons show */}
      { submittedField(status)} 

    </form>
    </div>
  )
}

  return ( !backBtn ? validForm() : <Navigate to="/gen_models_hello" />);
}

export default SpecificationMailForm