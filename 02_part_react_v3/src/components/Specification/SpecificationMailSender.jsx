//***********  SpecificationMailSender.jsx **** */
import React, { useEffect, useState }  from 'react';
import SpecificationMailForm from "./SpecificationMailForm"
import emailjs from '@emailjs/browser';
import SpecificationLoader from "./SpecificationLoader/SpecificationLoader"
import { useForm, Controller  } from "react-hook-form";
import axios from 'axios'


const SpecificationMailSender = (props) => {
  const {setStepsLevelFinish, emailData, filterInitTC} = props
  const [status, setStatus] = useState('');
  const [ip, setIP] = useState('');
  const [xlsHtmlSpec, setXlsHtmlSpec] = useState('');

  const SERVICE_ID = 'service_ewawoix'
  const TEMPLATE_ID = 'template_0h52w95'
  const PUBLIC_KEY = 'NiWNMvdX5IPRjrKF3'

  /* **** Start New Form****** */
  //const { control, handleSubmit, formState: { errors }  } = useForm();

  const onSubmit = data => { //fullName, email, phone, message
    
      const messageHTML = data.specialRequirements.replace(/\r?\n/g, '<br />')
      const txData = {...data, message: messageHTML,
        ...emailData, params: convertEmailDataHTML({...emailData}),
         xlsHtmlSpec: xlsHtmlSpec,
         ipInfo: convertEmailDataHTML({...ip})}

      //console.log(txData.message.replace(/\r?\n/g, '<br />')); //text = text.replace(/\r?\n/g, '<br />');
      //console.log(txData);


      emailjs.send(SERVICE_ID, TEMPLATE_ID, txData, PUBLIC_KEY)
      .then(response => {
        console.log('SUCCESS!', response);
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
        setStatus('FAILED');
      });


       //debugger
  };


  const handleHtmlXlsForm = (htmlXlsFormCode) => {setXlsHtmlSpec(htmlXlsFormCode)}

  const hadleCkick = () => {
    console.log('click')
/*     setStatus('SUCCESS');
    setStepsLevelFinish() */
    convertEmailDataHTML({...emailData})
  }
  useEffect( () => { visitorAdditionalInfo()}, []) //like did mount
  const visitorAdditionalInfo = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    //console.log(res.data);//setIP(<pre>{JSON.stringify(res.data, null, 2) }</pre>)
    setIP(res.data)
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
      <SpecificationLoader 
      xlsData = {props.xlsData}
      handleHtmlXlsForm = {handleHtmlXlsForm}
      />
      <SpecificationMailForm 
      onSubmit = {onSubmit} /* transport event */
      status = {status}
      filterInitTC = {filterInitTC}
      />

    </div>

    
  )
}

const convertEmailDataHTML = (emailData) => {
  let output = ''
  for (const [key, value] of Object.entries(emailData)) {
    //console.log(`${key}: ${value}`);
    output = output + `<p><b>${key}:</b> ${value}</p>`
  }
/*   console.log(output)
  console.log(emailData) */
  return output
}





export default SpecificationMailSender