//***********  SpecificationStep1.jsx **** */
import React, { useEffect, useState }  from 'react';
import axios from 'axios';
/* =====End cmponents ======== */
import '../Specification/SpecificationBannerStep1.scss';
/* import fs from 'fs' */

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

    axios.get(`http://localhost/wwwl/test/89/api.php`)
    .then(res => {
      const persons = res.data;
      console.log(res.data)

    })


  return (
    <>
    <h1>Hello!</h1>
    <p>a: {a()}</p> 
    <p>uid: {uid()}</p> 
    <p>random number: {getRandomNumbers()}</p> 
    <p>uid2: {uid2()}</p>
    <p>uid3: {uid3()}</p>
    <p>uid4: {uid4()}</p>
    <div className="specification-image__wrap">
      <img className="specification-image" src="./pimages/spec_1.png" alt="xtall" />
      <img className="specification-image" src="./pimages/spec_2.png" alt="xtall" />
    </div>
    </>
  )
}

const Xtest = (props) => {
  
  /* const fs = require('fs') */
/*   const fs = require('fs')
  module.exports = fs.readFileSync(require.resolve('./greeting.txt'), 'utf8') */
/*   const fs = require('fs');
  const jsonData= {"name":"John", "age":30, "car":null};
  const jsonString = JSON.stringify(jsonData);
  
  fs.writeFile("./foo.json", jsonString, 'utf8', function (err) {
      if (err) {
          return console.log(err);
      }
      console.log("file saved!");
  });  */

  return (1)
}

//export default ContactForm
export default Cofee