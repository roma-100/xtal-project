//***********  SpecificationMailSender.jsx **** */
import React, { useEffect, useState }  from 'react';
import SpecificationMailForm from "./SpecificationMailForm"
import emailjs from '@emailjs/browser';

import { useForm, Controller  } from "react-hook-form";



const SpecificationMailSender = (props) => {
  const {setStepsLevelFinish, emailData, filterInitTC} = props
  const [status, setStatus] = useState('');

  const SERVICE_ID = 'service_ewawoix'
  const TEMPLATE_ID = 'template_0h52w95'
  const PUBLIC_KEY = 'NiWNMvdX5IPRjrKF3'

  /* **** Start New Form****** */
  //const { control, handleSubmit, formState: { errors }  } = useForm();

  const onSubmit = data => { //fullName, email, phone, message
      const txData = {...data, ...emailData}

      console.log(txData);
      //console.log(txData);
      emailjs.send(SERVICE_ID, TEMPLATE_ID, txData, PUBLIC_KEY)
      .then(response => {
        console.log('SUCCESS!', response);
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
        setStatus('FAILED');
      });

  };

  const hadleCkick = () => {
    console.log('click')
    setStatus('SUCCESS');
    setStepsLevelFinish()
  }

  useEffect(() => {
    if(status) {
      setTimeout(() => {
        setStatus('');
        status === 'SUCCESS' && setStepsLevelFinish()
      }, 3000);
    }
  }, [status]);

  return (
    <div>
      {/* <button onClick={hadleCkick}>Click me</button> */}
      <SpecificationMailForm 
      onSubmit = {onSubmit} /* transport event */
      status = {status}
      filterInitTC = {filterInitTC}
      />
    </div>
  )
}

export default SpecificationMailSender