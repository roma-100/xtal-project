//***********  SpecificationStep1.jsx **** */
import React from "react";
import { useForm, Controller  } from "react-hook-form";
import {TextField, Radio, FormLabel, RadioGroup, InputAdornment,OutlinedInput, 
  FormControl, FormControlLabel, FormHelperText
} from '@mui/material/';
import SpecificationBanerStep1 from "./SpecificationBannerStep1"


const SpecificationStep1 = (props) => {
    //console.log (props)
    const { control, handleSubmit, formState: { errors }  } = useForm({
      defaultValues: {
        nominalFrequency: '',
        stabilityVsTemperature: '',
        voltage: "3.3"
      }
    });

    const onSubmit = data => {
      props.specFormInputStep2(
        {inputValueStep2: {
        "nominalFrequency": data.nominalFrequency,
        "stabilityVsTemperature": data.stabilityVsTemperature,
        "voltage": data.voltage,
          }
        })
     // console.log(data)
    
    };
    const look = errors => console.log(errors.firstName?.message)
  
    return (
      <>
      <SpecificationBanerStep1 
      picturePath = {props.picturePath}
      selectedModel = {props.selectedModel}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="nominalFrequency"
            control={control}
            rules={{ required: "This is required", 
            maxLength: {
              value: 10,
              message: "Value is too long"
            },
            minLength: {
              value: 3,
              message: "Value is too short"
            }
          }}
            render={({ field }) => {
              return (
                <TextField sx={{ m: 1, width: '90%' }} 
                {...field} 
                label='Nominal Frequency'
                /* id="standard-size-small" */
                /* sx={{ m: 1, width: '25ch' }} */
                margin='dense'
                variant="outlined"
                error={errors.nominalFrequency ? true: false}
                placeholder = {errors.nominalFrequency ? errors.nominalFrequency.message : '8...150'}
                InputProps={{
                  startAdornment: <InputAdornment position="start">MHz</InputAdornment>
                }}
                /* onChange={handleChange('weight')} */
              />
              )
            }
          }
            
          />
          <p>{errors.nominalFrequency !== "This is required" && errors.nominalFrequency ?.message}</p>
        </div>
  
        <div>
          <Controller
          name="stabilityVsTemperature"
          control={control}
          rules={{ required: "This is required", 
            maxLength: {
              value: 8,
              message: "Value is too long"
            }
          }}
          render={({ field }) => {
            return (
              <TextField sx={{ m: 1, width: '90%' }} 
              {...field} 
              label='Stability vs. Temperature'
              /* id="standard-size-small" */
              /* sx={{ m: 1, width: '25ch' }} */
              margin='dense'
              variant="outlined"
              error={errors.nominalFrequency ? true: false}
              placeholder = {errors.nominalFrequency ? errors.nominalFrequency.message : '0.3'}
              InputProps={{
                startAdornment: <InputAdornment position="start">ppb to</InputAdornment>
              }}
              /* onChange={handleChange('weight')} */
            />
                  )
                }
              }
          />
        <p>{errors.stabilityVsTemperature !== "This is required" && errors.stabilityVsTemperature ?.message}</p>
        </div>

        <div>
        <Controller
          name="voltage"
          control={control}
          rules={{ required: true }}
          render={
              ({ field }) => {
              return (
                <FormControl sx={{ m: 1, width: '25ch' }} >
                <FormLabel id="demo-radio-buttons-group-label">Supply Voltage</FormLabel>
                    <RadioGroup 
                    {...field} 
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel value={3.3} control={<Radio />} label="3.3V" />
                    <FormControlLabel value={5} control={<Radio />} label="5V" />
                  </RadioGroup>
                  </FormControl>
              )
            }
        }
        />
      </div>


        <p>Error</p>
        {look(errors)}
        
        <input type="submit" />
        {/* <div><pre>{JSON.stringify(data, null, 2) }</pre></div>; */}
      </form>
      </>
    );

  }


export default SpecificationStep1