//***********  SpecificationMailSender.jsx **** */
import React, { useEffect, useState }  from 'react';
import emailjs from '@emailjs/browser';

import { useForm, Controller  } from "react-hook-form";
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
  Box
} from "@mui/material/";



const SpecificationMailSender = () => {
  const [backBtn, setBackBtn] = useState(false);

  const SERVICE_ID = 'service_ewawoix'
  const TEMPLATE_ID = 'template_0h52w95'
  const PUBLIC_KEY = 'NiWNMvdX5IPRjrKF3'

  /* **** Start New Form****** */
  const { control, handleSubmit, formState: { errors }  } = useForm();
  const onSubmit = data => console.log(data);
  const look = errors => console.log(errors.fullName?.message)
  /* **** End New Form****** */

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit1 = (e) => {
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
      .then(response => {
        console.log('SUCCESS!', response);
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  return (
    <div>
      {status && renderAlert()}


/* ************* Start New Form****** */
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
{/* ****** START Full Name Field ***** */}        
      <Controller
                  name="fullName"
                  control={control}
                  rules={{
                    required: "This is required",
                  }}
                  render={({ field }) => {
                    return (
                      <FormControl>
                        <TextField
                          {...field}
                          label="Full Name"
                          margin="dense"
                          variant="outlined"
                          error={false}
                          placeholder={'vvvvv'}
                          /* onChange={handleChange('weight')} */
                        />
                        <FormHelperText
                          sx={{ color: "red" }}
                          id="standard-weight-helper-text"
                        >
                        </FormHelperText>
                      </FormControl>
                    );
                  }}
                />
{/* ****** END Full Name Field ***** */}   
 
      <div className="button-specification_wrap">
                <div className="button-specification_btn">
                  <Button variant="contained" onClick={() => setBackBtn(true)}>
                    Reset
                  </Button>
                </div>
                <div className="button-specification_btn">
                  <Button variant="contained" color="success" type="submit">
                    Submit Specification
                  </Button>
                </div>
              </div>
    </form>
      </div>
/* *************** End New Form****** */

    </div>
  )
}

const renderAlert = () => (
  <div>
    <p>your message submitted successfully</p>
  </div>
)



/* =====Start cmponents ======== */
const InputField = (props) => {
  const { handleChange, label, name, type, value } = props;
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      <input type={type} onChange={handleChange} value={value} name={name} required />
    </div>
  )
}

const SelectField = (props) => {
  const { label, handleChange, name } = props;
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      <select onChange={handleChange} defaultValue="role" name={name}>
        <option value="role" disabled>Choose Role</option>
        <option value="frontEnd">Front End</option>
        <option value="backEnd">Back End</option>
        <option value="qa">QA</option>
      </select>
    </div>
  )
}

const TextareaField = (props) => {
  const { handleChange, label, name, value } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea onChange={handleChange} name={name} rows="4" value={value}></textarea>
    </div>
  )
}


//export default ContactForm
export default SpecificationMailSender