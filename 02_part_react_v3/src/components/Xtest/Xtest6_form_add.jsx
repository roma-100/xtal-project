import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, FormControl, FormHelperText, Button,
  FormGroup, FormControlLabel, Switch, Checkbox } from "@mui/material";

export default function App(props) {
  const { fieldParent, error } = props

  return (
    <div className="speciication-mail__wrap">

      {/* ++++++++ Start xx ++++++ */}

            return (
              <FormControl>
                <TextField
                  {...fieldParent}
                  label="Your phone"
                  id="standard-size-small"
                  //error="true"
                  /* defaultValue="Small" */
                  size="small"
                  variant="standard"
                />
                <FormHelperText
                  sx={error ? { color: "red" } : { color: "grey" }}
                  id="standard-weight-helper-text"
                >
                  {error ? error?.message : null}
                  {console.log(error)}
                </FormHelperText>
              </FormControl>
            );

      {/* ++++++++ End xx ++++++ */}


    </div>
  );
}
