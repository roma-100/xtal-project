//***********  SpecificationStep1.jsx **** */
import React, { useEffect, useState }  from 'react';
import emailjs from '@emailjs/browser';
import {Navigate} from 'react-router-dom';

const ContactForm = () => {
  
  const SERVICE_ID = 'service_ewawoix'
  const TEMPLATE_ID = 'template_0h52w95'
  const PUBLIC_KEY = 'NiWNMvdX5IPRjrKF3'

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, 'NiWNMvdX5IPRjrKF3')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          role: '',
          message: ''
        });
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

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div>
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3>Send us message</h3>
        <InputField value={values.fullName} handleChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="John Doe" />
        <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
        <SelectField handleChange={handleChange} name="role" label="Role" />
        <TextareaField value={values.message} handleChange={handleChange} label="Your message here" name="message" />
        <button type="submit">Send 
        </button>
      </form>
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

/* =====End cmponents ======== */

const Cofee = (props) => {
  return (
    <>
    <ContactForm />
    {/* <Navigate to="/gen_models_hello" /> */}
    </>
  )
}


//export default ContactForm
export default Cofee