//***********  SpecificationStep1.jsx **** */
import React, { useEffect, useState }  from 'react';
import ReportTemplate from "./Xtest7_template"
/* =====End cmponents ======== */
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

const Cofee = (props) => {
  const reportTemplateRef = useRef(null);
  
  const sStyle = ssStyle()
/*   const style = {
    tableWidth: 360,
    pdfOffset: 0,
  } */

  const handleGeneratePdf = () => {
    window.html2canvas = html2canvas;
    const doc = new jsPDF({
      format: "a4",
      unit: "px"
    });

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
       // doc.setFont("Roboto-Black", 'normal');
       //doc.addFont('Roboto-Black-normal.ttf', 'Roboto-Black', 'normal');
         doc.save("document");
      },
      x: sStyle.pdfOffset,
      y: 15,
      width: sStyle.tableWidth.width, //target width in the PDF document
      windowWidth: sStyle.screenWidth //window width in CSS pixels
    });
 
  };

  console.log(ssStyle())
  



  return (
    <>
      <div className="spec-pdf__doc-wrap">
        <button className="button" onClick={handleGeneratePdf}>
          Generate PDF
        </button>
        <p>{`screen: ${sStyle.screenWidth} tableWidth: ${sStyle.tableWidth.width} pdfOffset: ${sStyle.pdfOffset}`}</p>
        <div ref={reportTemplateRef} >
          <ReportTemplate 
          decor = {sStyle.tableWidth}
          />
  
        </div>
      </div>
    </>
  )
}

const ssStyle = () => {
  const style = {
    screenWidth: window.innerWidth,
    tableWidth: {width: 300},
    pdfOffset: 0,
    margin: 10
  }
  const tableWidthMin = 300
  const tableWidthMax = 650
  console.log('screen width: ' + window.innerWidth)

  if (style.screenWidth > tableWidthMin) { 
    style.tableWidth.width = style.screenWidth - style.margin
    if (style.screenWidth > tableWidthMax) {
      style.tableWidth.width = tableWidthMax - style.margin
    }
  }

  style.pdfOffset = (style.screenWidth - style.tableWidth.width)/10

  return style
}

//export default ContactForm
export default Cofee