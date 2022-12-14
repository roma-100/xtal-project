import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import { TextField, FormControl, FormHelperText, Button,
  FormGroup, FormControlLabel, Switch, Checkbox, InputAdornment } from "@mui/material";
  

export default function App() {
  const [toggle, setToggle] = useState(false);
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
      xx: false,
      x1: "",
      x2: ""
    },
  });
  const isVisibleElement = toggle ? {display: "none"} : null
  const fieldDecor = {
    width: '100px',
    display: !toggle && "none"
  }

  const onSubmit = (data) => console.log(data);
  //const look = (errors) => console.log(errors.fullName?.message);
  const handleClick= (e) => {
    console.log('clicked')
  };
  return (
    <div /* className="speciication-mail__wrap" */>
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
            /* required: "This is required", */
            maxLength: {
              value: 5,
              message: "This is too long",
            },
          }}
          render={({ field }) => {
            return (
              <FormControl>
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
            /* required: "This is required", */
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email",
            },
          }}
          render={({ field }) => {
            return (
              <FormControl>
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
      <div className="specification-mail__field" >
        <Controller
          name="phone"
          control={control}
          rules={{ maxLength: 12 }}
          render={({ field }) => {
            return (
              <FormControl>
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
              <FormControl>
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

      {/* ++++++++ Start xx ++++++ */}
      <div className="specification-mail__field">
        <Controller
          name="xx"
          control={control}
          rules={{ maxLength: 12 }}
          render={({ field }) => {
            return (
                <FormControlLabel 
                {...field}
                control={<Switch onClick={(e) => setToggle(e.target.checked)} />}
                label="Label" 
                labelPlacement="end"
                />
            );
          }}
        />
      </div>
      {/* ++++++++ End xx ++++++ */}

      {toggle ? <p>toggle On</p> : <p>toggle Off</p>}  
<div className="xtest">
      {/* ++++++++ start x1  ++++++ */}
      <div className="specification-mail__field">
        <Controller
          name="x1"
          control={control}
          rules={{}}
          render={({ field }) => {
            return (
              <FormControl  sx={fieldDecor}>
                <TextField
                  {...field}
                  /* label="1Hz" */
                  size="small"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        dBc/Hz
                      </InputAdornment>
                    ),
                  }}
                />
                <FormHelperText
                  sx={{ color: "grey" }}
                  id="standard-weight-helper-text"
                >
                  Offset 1Hz
                </FormHelperText>
              </FormControl>
            );
          }}
        />
      </div>
      {/* ++++++++ End x1 ++++++ */}

      {/* ++++++++ start x2  ++++++ */}
      <div className="specification-mail__field">
        <Controller
          name="x2"
          control={control}
          render={({ field }) => {
            return (
              <FormControl sx={fieldDecor}>
                <TextField
                  {...field}
                  /* label="1KHz" */
                  size="small"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        dBc/Hz
                      </InputAdornment>
                    ),
                  }}
                />
                <FormHelperText
                  sx={{ color: "grey" }}
                  id="standard-weight-helper-text"
                >
                  Offset 1KHz
                </FormHelperText>
              </FormControl>
            );
          }}
        />
      </div>
      {/* ++++++++ End x2 ++++++ */}
</div>
      <div className="button-specification_wrap">
        <div className="button-specification_btn">
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
    </div>
  );
}
