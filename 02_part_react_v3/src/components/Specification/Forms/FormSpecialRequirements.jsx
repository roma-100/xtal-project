/* Father: SpecificationStep3.jsx */
/* FormSpecialRequirements.jsx */
import React from "react";
import { Navigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
/* import '../SpecificationLoader/SpecificationLoader.scss' */
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
  Switch,
  Checkbox,
} from "@mui/material/";

const FormSpecialRequirements = (props) => {
  //const [backBtn, setBackBtn] = useState(false);
  //const {onSubmit, status, filterInitTC} = props
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      specialRequirements: "",
    },
  });

  //console.log(props.decor.tableWidth.width)
  //console.log(props.decor.tableWidth.screenWidth)
  const onSubmit = (data) => props.clickHandlerAddSpecialRequirementsTC(data);

  return (
    <>
    <div className="specification-requirement__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ++++++++ Start Field message ++++++ */}
          {/* <div className="specification-mail__field"> */}
          
            <Controller
              name="specialRequirements"
              control={control}
              rules={{}}
              render={({ field }) => {
                return (
                  <FormControl sx={{width: window.innerWidth *.48}}>
                    <TextField
                      {...field}
                      id="outlined-textarea"
                      label="Special requirements"
                      placeholder="Define your main requirements"
                      rows={4}
                      variant="filled"
                      multiline
                    />
                    <FormHelperText
                      sx={{ color: "grey" }}
                      id="standard-weight-helper-text"
                    >
                      
                    </FormHelperText>
                  </FormControl>
                );
              }}
            />
            
         {/*  </div> */}
          {/* ++++++++ End Field message ++++++ */}

{/*           <div className="button-specification_wrap">
            <div className="button-specification_btn"> */}
            <div className="specification-requirement__form--btn">
{/*               <Button variant="contained" color="success" type="submit">
                Add your special requirements.
              </Button> */}
              <button className="specification-download-btn" role="button" /* onClick={props.clickHandlerAddSpecialRequirementsTC} */ >
          <span className="text">
          Confirm specification data</span></button>
              </div>
{/*             </div>
          </div> */}
        </form>
        </div>
    </>
  );
};

export default FormSpecialRequirements;
