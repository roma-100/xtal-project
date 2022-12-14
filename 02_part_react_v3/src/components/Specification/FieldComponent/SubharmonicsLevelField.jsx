import * as React from "react";
import Box from "@mui/material/Box";
import {
  TextField,
  FormControl,
  FormHelperText,
  InputAdornment,
} from "@mui/material";

export default function SubharmonicsLevelField(props) {
  const { decor, label, helperText, helperTextDecor, endAdornment, field, error } = props;

  return (
    <FormControl>
      <TextField
        {...field}
        label={label}
        /* id="standard-size-small" */
        sx={decor}
        margin="dense"
        variant="outlined"
        /* size='small' */
        error={error ? true : false}
        placeholder={
          error
            ? error.message
            : null
        }
        InputProps={{
          endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
        }}
        /* onChange={handleChange('weight')} */
      />
      <FormHelperText sx={helperTextDecor} id="standard-weight-helper-text">
        {helperText}
        {/* { error ? error.message : helperText} */}
      </FormHelperText>
    </FormControl>
  );
}
