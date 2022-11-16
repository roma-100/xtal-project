//***********  SpecificationStep1.jsx **** */
import React, { useEffect, useState }  from 'react';
/* =====End cmponents ======== */


const Cofee = (props) => {
  function uid() {
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
  };
  function getRandomNumbers() {
    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    console.log(array)
    return array[0];
/*     for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    } */
  }

  function uid2() {
    let a = new Uint32Array(3);
    window.crypto.getRandomValues(a);
    return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
   };

/*    function uid3() {
    let a = new Uint32Array(1);
    window.crypto.getRandomValues(a);
    return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/./g,""+Math.random()+Intl.DateTimeFormat().resolvedOptions().timeZone+Date.now());
    }; */

    var uid3 = () => {
      let array = new Uint32Array(8)
      window.crypto.getRandomValues(array)
      let str = ''
      for (let i = 0; i < array.length; i++) {
        str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4)
      }
      return str
    }
    var uid4 = () => {

      return new Date().getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g,"");
    }
    const a1 = () => {
      if (true) return 1
    }
    const a2 = () => {
      if (true) {return 1}
    }
    const a3 = () => 1
    const a4 = () => {return 1}
    const a = () => {return (1)}

  return (
    <>
    <h1>Hello!</h1>
    <p>a: {a()}</p> 
    <p>uid: {uid()}</p> 
    <p>random number: {getRandomNumbers()}</p> 
    <p>uid2: {uid2()}</p>
    <p>uid3: {uid3()}</p>
    <p>uid4: {uid4()}</p>
    </>
  )
}


//export default ContactForm
export default Cofee