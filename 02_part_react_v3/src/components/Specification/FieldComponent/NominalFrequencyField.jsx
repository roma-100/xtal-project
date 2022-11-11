import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, FormControl, FormHelperText, InputAdornment } from "@mui/material";

export default function NominalFrequencyField (props) {
  const { handleOnBlur, decor, frequencyRange, field, error } = props

            return (
                <FormControl
                sx={decor}
                onBlur={handleOnBlur}
              >
                <TextField
                  {...field}
                  label="Nominal Frequency"
                  /* id="standard-size-small" */
                  /* sx={{ m: 1, width: '25ch' }} */
                  margin="dense"
                  variant="outlined"
                  error={error ? true : false}
                  placeholder={
                    error
                      ? error.message
                      : frequencyRange
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
                  {error !== "This is required" &&
                    error?.message}
                </FormHelperText>
              </FormControl>
            );
}
