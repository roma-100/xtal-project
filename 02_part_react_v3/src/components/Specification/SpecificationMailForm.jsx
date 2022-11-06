/* SpecificationMailForm.jsx */
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, FormControl, FormHelperText, Button, Alert } from "@mui/material";

 const SpecificationMailForm =(props) => {
   const {onSubmit, status} = props
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  //const onSubmit = (data) => console.log(data);
  //const look = (errors) => console.log(errors.fullName?.message);

  const formElementDecor = {
    textField: {

      width: "300px",
      display: "flex",
      justifyContent: "center",
    },
  }
  const infoSubmitted = () => <div className="speciication-mail_title--success" >Information submitted</div>
  const submittedField = (status) => {
    if (!status){ 
    return (
      <div className="button-specification_wrap" >
      <div className="button-specification_btn">
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </div>
    </div>
    )}
    if (status==='SUCCESS'){
      return (
        <Alert severity="success" color="info" sx={{width: 300}}>
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

  return (
    <div className="speciication-mail__wrap">
    <div className="speciication-mail_title">
        
        <p>Contact information</p>
     </div>

    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ++++++++ Start Field fullName ++++++ */}
      <div className="specification-mail__field">
        <Controller
          name="fullName"
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
                  label="Full Name"
                  id="standard-size-small"
                  error={errors.fullName ? true : false}
                  size="small"
                  variant="standard"
                />
                <FormHelperText
                  sx={errors.fullName ? { color: "red" } : { color: "grey" }}
                  id="standard-weight-helper-text"
                >
                  {errors.fullName ? errors.fullName?.message : null}
                </FormHelperText>
              </FormControl>
            );
          }}
        />
        <p>{errors.fullName?.message}</p>
      </div>
      {/* ++++++++ END Field fullName ++++++ */}

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
                  sx={errors.fullName ? { color: "red" } : { color: "grey" }}
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
          name="message"
          control={control}
          rules={{}}
          render={({ field }) => {
            return (
              <FormControl sx={formElementDecor.textField}>
                <TextField
                  {...field}
                  label="Label message"
                  id="outlined-multiline-flexible"
                  //error="true"
                  /* defaultValue="Small" */
                  size="small"
                  variant="standard"
                  multiline
                  maxRows={6}
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
  );
}

export default SpecificationMailForm