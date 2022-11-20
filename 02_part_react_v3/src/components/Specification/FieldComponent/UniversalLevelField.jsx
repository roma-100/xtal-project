import * as React from "react";
import Box from "@mui/material/Box";
import {
  TextField,
  FormControl,
  FormHelperText,
  InputAdornment,
} from "@mui/material";

export default function SubharmonicsLevelField(props) {
  const { decor, label, placeholder, helperText, helperTextDecor, 
    disabledStatus, endAdornment, field, error, handleOnBlur } = props;

  return (
    <FormControl>
      <TextField
        {...field}
        label={label}
        handleOnBlur={handleOnBlur}
        disabled = {disabledStatus}
        /* id="standard-size-small" */
        sx={decor}
        margin="dense"
        variant="outlined"
        /* size='small' */
        error={error ? true : false}
        placeholder={placeholder}
        InputProps={{
          endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
        }}
        /* onChange={handleChange('weight')} */
      />
      <FormHelperText sx={helperTextDecor} id="standard-weight-helper-text" disabled = {disabledStatus}>
        {helperText}
        {/* { error ? error.message : helperText} */}
      </FormHelperText>
    </FormControl>
  );
}
