import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, FormControl, FormHelperText, InputAdornment } from "@mui/material";

export default function NominalFrequencyField (props) {
  const { decor, formHelperText, field } = props

            return (
              <FormControl  sx={decor}>
                <TextField
                  {...field}
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
                  {formHelperText}
                </FormHelperText>
              </FormControl>
            );
}
