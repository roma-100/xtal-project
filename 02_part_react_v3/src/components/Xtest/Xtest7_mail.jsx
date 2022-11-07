//***********  SpecificationStep1.jsx **** */
import React, { useEffect, useState }  from 'react';

/* =====End cmponents ======== */

const Cofee = (props) => {

  const emailData = {
    "Model": "XBO8S",
    "Packaging": "DIP8 SMD",
    "FrequencyType": "FUNDAMENTAL",
    "Frequency": "55 MHz",
    "Temperature Range": "-10..60ºC",
    "Stability vs Temperature": "55 ppb",
    "Supply Voltage": "3.3 V",
    "Output Type": "SINE-WAVE"
  }

  const rows = [
    
  ]
 
    for (const [key, value] of Object.entries(emailData)) {
      rows.push ({name: key, value: value})
    }
    //window.bb = rows

  //console.log (xx)

  return (
    <>
  <h1>Hello</h1>
    </>
  )
}


//export default ContactForm
export default Cofee