import * as React from "react";
import Box from "@mui/material/Box";
import {    TextField,
    Radio,
    FormLabel,
    RadioGroup,
    InputAdornment,
    OutlinedInput,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Button,} from "@mui/material";

export default function StabilityVsTemperatureField (props) {
  const { formElementDecor, field, onChange } = props

            return (
                <div className="radiogroup--decor">
                <FormControl
                  sx={formElementDecor.radioGroupFormControl}
                  onChange={onChange}
                >
                  <FormLabel
                    id="outputType-radio-buttons-group-label"
                    sx={formElementDecor.radioGroupLabel}
                  >
                    Output Type
                  </FormLabel>
                  <RadioGroup
                    sx={formElementDecor.radioGroup}
                    {...field}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel
                      value="Sine-wave"
                      control={<Radio />}
                      label="Sine-wave"
                    />
                    <FormControlLabel
                      value="HCMOS"
                      control={<Radio />}
                      label="HCMOS"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            );
}
