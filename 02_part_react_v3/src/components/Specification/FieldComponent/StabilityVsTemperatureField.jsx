import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, FormControl, FormHelperText, InputAdornment } from "@mui/material";

export default function StabilityVsTemperatureField (props) {
  const { temperatureRangeSelected, stabilityFromFrequencyBlur, 
        decor, field, error } = props

            return (
                <FormControl sx={decor}>
                <TextField
                  {...field}
                  label={
                    temperatureRangeSelected
                      ? `Stability vs Temperature`
                      : "Error. Temperature range has not been selected!"
                  }
                  /* id="standard-size-small" */
                  /* sx={{ m: 1, width: '25ch' }} */
                  margin="dense"
                  variant="outlined"
                  error={error ? true : false}
                  placeholder={stabilityFromFrequencyBlur + ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        ppb
                      </InputAdornment>
                    ),
                  }}

                  /* onChange={handleChange('weight')} */
                />
                <FormHelperText
                  sx={
                    error
                      ? { color: "red" }
                      : { color: "grey" }
                  }
                  id="standard-weight-helper-text"
                >
                  {error
                    ? error?.message
                    : `Temperature range: ${temperatureRangeSelected}`}
                </FormHelperText>
              </FormControl>
            );
}
