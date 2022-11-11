import * as React from "react";
import Box from "@mui/material/Box";
import {   TextField,
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
  const { formElementDecor, field } = props

            return (
                <div className="radiogroup--decor">
                <FormControl
                  sx={formElementDecor.radioGroupFormControl}
                >
                  <FormLabel
                    id="voltage-radio-buttons-group-label"
                    sx={formElementDecor.radioGroupLabel}
                  >
                    Supply Voltage
                  </FormLabel>
                  <RadioGroup
                    sx={formElementDecor.radioGroup}
                    {...field}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel
                      value="3.3"
                      control={<Radio />}
                      label="3.3V"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio color="secondary" />}
                      label="5V"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            );
}
