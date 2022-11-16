//***********  SpecificationStep1.jsx **** */
import React, { useEffect, useState }  from 'react';
import ReportTemplate from "./SpecTemplate"
import './SpecificationLoader.scss'
import html2canvas from 'html2canvas';

/* =====End cmponents ======== */
import { useRef } from "react";
import jsPDF from "jspdf";

const SpecificationLoader = (props) => {
  const reportTemplateRef = useRef(null);
 
  const handleGeneratePdf = () => {
    window.html2canvas = html2canvas;
    const doc = new jsPDF({
      format: "a4",
      unit: "pt"
    });


    doc.html(reportTemplateRef.current, {
      async callback(doc) {
       // doc.setFont("Roboto-Black", 'normal');
       //doc.addFont('Roboto-Black-normal.ttf', 'Roboto-Black', 'normal');
         doc.save("document");
      },
      x: ssStyle().pdfOffset,
      y: 20,
      width: ssStyle().pdfWidth, //target width in the PDF document
      windowWidth: ssStyle().screenWidth //window width in CSS pixels
    });
 
  };
  //console.log(ssStyle())
  
  return (
    <>
      <div className="spec-pdf__doc-wrap">
{/*         <button className="button" onClick={handleGeneratePdf}>
          Generate PDF
        </button> */}
        
        <button className="specification-download-btn" role="button" onClick={handleGeneratePdf} ><span className="text">Download Specification</span></button>
        
        {/* <div className="specification-download-btn" onClick={handleGeneratePdf}> Generate PDF </div> */}
        {/* <p>{`screen: ${ssStyle().screenWidth} tableWidth: ${ssStyle().tableWidth.width} pdfOffset: ${ssStyle().pdfOffset}`}</p> */}
        
        <div ref={reportTemplateRef} >
          <ReportTemplate 
          decor = {ssStyle().tableWidth}/* {sStyle.tableWidth} */
          xlsData = {props.xlsData}
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
    pdfWidth: window.innerWidth,
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

  style.pdfOffset = (style.screenWidth - style.tableWidth.width)/9
  style.pdfWidth = 0.6 * style.tableWidth.width * (style.screenWidth / style.tableWidth.width)

  return style
}

//export default ContactForm
export default SpecificationLoader