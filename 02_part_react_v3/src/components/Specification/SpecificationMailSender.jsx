//***********  SpecificationMailSender.jsx **** */
import React, { useEffect, useState }  from 'react';
import SpecificationMailForm from "./SpecificationMailForm"
import emailjs from '@emailjs/browser';

import { useForm, Controller  } from "react-hook-form";



const SpecificationMailSender = (props) => {
  const {setStepsLevelFinish} = props

  const SERVICE_ID = 'service_ewawoix'
  const TEMPLATE_ID = 'template_0h52w95'
  const PUBLIC_KEY = 'NiWNMvdX5IPRjrKF3'

  /* **** Start New Form****** */
  const { control, handleSubmit, formState: { errors }  } = useForm();
  const onSubmit = data => {

      console.log(data);
      emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      .then(response => {
        console.log('SUCCESS!', response);
        setStepsLevelFinish()
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
        setStatus('FAILED');
      });

  };

  const [status, setStatus] = useState('');

  useEffect(() => {
    if(status) {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  return (
    <div>
      <SpecificationMailForm 
      onSubmit = {onSubmit} /* transport event */
      status = {status}
      />
    </div>
  )
}

export default SpecificationMailSender