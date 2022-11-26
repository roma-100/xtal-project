//***********  SpecificationStep1.jsx **** */
import React, { useEffect, useState }  from 'react';
import ReportTemplate from "./SpecTemplate"
import './SpecificationLoader.scss'
import html2canvas from 'html2canvas';
import ReactDOMServer from 'react-dom/server';

/* =====End cmponents ======== */
import { useRef } from "react";
import jsPDF from "jspdf";

class SpecificationLoader extends React.Component {
  constructor(props) {
    super(props);
    this.reportTemplateRef = React.createRef();
  }
  
  state = {
    isDidMount: false
  };

  componentDidMount() {
    /* Send data Up to  SpecificationMailSender */
    if (!this.state.isDidMount) {
      const htmlXlsData = ReactDOMServer.renderToStaticMarkup(
        <ReportTemplate 
        decor = {this.ssStyle().tableWidth}/* {sStyle.tableWidth} */
        xlsData = {this.props.xlsData}
        />
      );

      this.props.handleHtmlXlsForm(htmlXlsData)
    }
    this.state.isDidMount = true;
  }

  handleGeneratePdf = () => {
    window.html2canvas = html2canvas;
    const doc = new jsPDF({
      format: "a4",
      unit: "pt"
    });


    doc.html(this.reportTemplateRef.current, {
      async callback(doc) {
       // doc.setFont("Roboto-Black", 'normal');
       //doc.addFont('Roboto-Black-normal.ttf', 'Roboto-Black', 'normal');
         doc.save("document");
      },
      x: this.ssStyle().pdfOffset,
      y: 20,
      width: this.ssStyle().pdfWidth, //target width in the PDF document
      windowWidth: this.ssStyle().screenWidth //window width in CSS pixels
    });
    
    //this.props.handleHtmlXlsForm(htmlXlsData)
  };
  
  ssStyle = () => {
    const style = {
      screenWidth: window.innerWidth,
      tableWidth: {width: 300},
      pdfOffset: 0,
      pdfWidth: window.innerWidth,
      margin: 10
    }
    const tableWidthMin = 300
    const tableWidthMax = 650
    //console.log('screen width: ' + window.innerWidth)
  
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

  render() {
    return <>
         <div className="spec-pdf__doc-wrap">

        <button className="specification-download-btn" role="button" onClick={this.handleGeneratePdf} >
          <span className="text">
          Save specification on your device</span></button>
        {/* <p>{`screen: ${this.ssStyle().screenWidth}  tableWidth: ${this.ssStyle().tableWidth.width} pdfOffset: ${this.ssStyle().pdfOffset}`}</p> */}
        <div ref={this.reportTemplateRef} >
          <ReportTemplate 
          decor = {this.ssStyle().tableWidth}/* {sStyle.tableWidth} */
          xlsData = {this.props.xlsData}
          />

        </div>
        </div>
    </>
  }

}



//export default ContactForm
export default SpecificationLoader