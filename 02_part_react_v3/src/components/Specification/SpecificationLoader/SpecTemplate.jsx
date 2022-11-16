import React from "react";

const ReportTemplate = (props) => {
  const {decor,xlsData} = props
//console.log('row16subHarmonicsVisible: '+xlsData.row16subHarmonicsVisible)
  const row8__10_waveForm = () => {
    if (xlsData.row8__10_waveFormVisible) {
    return (
      <>
      {/* row8 */}<tr>
      <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.2" sdnum="1033;" height={18} align="center">2.2</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Level</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={7} sdnum="1033;" align="center">7</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">dBm</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center">+</td>
        </tr>
  {/* row9 */} <tr>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.3" sdnum="1033;" height={18} align="center">2.3</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Harmonics level</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={-25} sdnum="1033;" align="center">-25</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">dBc</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
        </tr>
  {/* row10 */} <tr>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.4" sdnum="1033;" height={17} align="center">2.4</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Load</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={45} sdnum="1033;" align="center">45</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={50} sdnum="1033;" align="center">50</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={55} sdnum="1033;" align="center">55</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">Ohm</td>
          <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
        </tr>
      </>
      )
    }
  }

  const row11__15_waveForm = () => {
    if (xlsData.row11__15_waveFormVisible) {
    return (
      <>
{/* row11 */} <tr>
<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.2" sdnum="1033;" height={17} align="center">2.2</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> High -Voltage</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="3.8" sdnum="1033;" align="center">3.8</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">V</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
{/* row12 */}<tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.3" sdnum="1033;" height={17} align="center">2.3</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Low - Voltage</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="0.4" sdnum="1033;" align="center">0.4</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">V</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
{/* row13 */}<tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.4" sdnum="1033;" height={34} align="center">2.4</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Load</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={10} sdnum="1033;" align="center">10</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={15} sdnum="1033;" align="center">15</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">kOhm<br />pF</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
{/* row14 */}<tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.5" sdnum="1033;" height={17} align="center">2.5</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left">Duty Cycle</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={45} sdnum="1033;" align="center">45</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={55} sdnum="1033;" align="center">55</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">%</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
{/* row15 */}<tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.6" sdnum="1033;" height={18} align="center">2.6</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left">Rise &amp; Fall time</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">10, 90 %</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={10} sdnum="1033;" align="center">10</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ns</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      </>
      )
    }
  }

  const row16subHarmonics = () => {
   /*  if (xlsData.row16subHarmonicsVisible) { */
   //console.log('row16subHarmonicsVisible' + xlsData.row16subHarmonicsVisible )
   if (xlsData.row16subHarmonicsVisible) { 
    return (
      <>
     <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} height={18} align="center">2.5/2.7</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Sub-harmonics level*</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">fsh=f0±(n*f0/5)  n=1,2,3...</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
{/* cellH16 */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={-40} sdnum="1033;" align="center">{xlsData.cellH16subHarmonicsValue}</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">dBc</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      </>
      )
    }
  }

/* @@@@@@@@@@ MAIN RETURN @@@@@@@@@@@@@@@@@@@@@@ */
	 return (
		<div>

		  <div className="spec-pdf__doc--size" style={decor} >
        <h2>Specification</h2>
      <div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t\tbody,div,table,thead,tbody,tfoot,tr,th,td,p { font-family:\"Arial\"; font-size:x-small }\n\t\ta.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em;  } \n\t\ta.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em;  } \n\t\tcomment { display:none;  } \n\t" }} />
  <table cellSpacing={0} border={0}>
    <colgroup width={53} />
    <colgroup width={189} />
    <colgroup width={62} />
    <colgroup width={85} />
    <colgroup width={134} />
    <colgroup width={43} span={2} />
    <colgroup width={42} />
    <colgroup width={69} />
    <colgroup width={85} />
    <tbody><tr>
{/* row1modelNameCode */}<td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={4} height={17} align="left">{xlsData.row1modelNameCode}</td>
        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={6} align="right">Rev. 14.11.2022</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} height={34} align="center">#</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">OCXO<br />Specification</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br />Conditions</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={3} align="center">Value</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">Unit</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><font color="#000000">Included in <br />the test data </font></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} height={18} align="left"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">Min.</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">Typ.</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">Max.</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="left"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="left"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="1.1" sdnum="1033;" height={18} align="center">1.1</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"><b>Nominal Frequency, f0</b></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
{/* cellG7waveFormValue */} <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={3} sdval={10} sdnum="1033;" align="center">{xlsData.cellG5nominalFrequencyValue}</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">MHz</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="1.2" sdnum="1033;" height={18} align="center">1.2</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left">Initial tolerance, (f- f0)/f0</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">at +25°C, Vc=Vc0</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><font face="Times New Roman">±0.1</font></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ppm</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center">+</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={10} height={17} align="left"><b>             RF output</b></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.1" sdnum="1033;" height={17} align="center">2.1</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Wave form</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
{/* cellG5nominalFrequencyArray */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={3} align="center">{xlsData.cellG7waveFormValue[0]}</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>    
{row8__10_waveForm()}
{row11__15_waveForm()}
{row16subHarmonics()}
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={10} height={17} align="left"><b>             Frequency control</b></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="3.1" sdnum="1033;" valign="middle" height={34} align="center">3.1</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" align="left"> Input impedance</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} valign="middle" align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} valign="middle" align="center">11<br />5</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} valign="middle" align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} valign="middle" align="center">kOhm<br />pF</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="3.2" sdnum="1033;" height={17} align="center">3.2</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Input BW</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">-3dB level</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={160} sdnum="1033;" align="center">160</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">Hz</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="3.3" sdnum="1033;" height={17} align="center">3.3</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Voltage range</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={0} sdnum="1033;" align="center">0</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="4.2" sdnum="1033;" align="center">4.2</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">V</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="3.4" sdnum="1033;" height={18} align="center">3.4</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Preset control voltage</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">disconnected Vc pin</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="1.9" sdnum="1033;" align="center">1.9</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.1" sdnum="1033;" align="center">2.1</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="2.3" sdnum="1033;" align="center">2.3</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">V</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="3.5" sdnum="1033;" height={17} align="center">3.5</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Slope</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={3} align="center">positive</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="3.6" sdnum="1033;" height={17} align="center">3.6</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Linearity </td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={10} sdnum="1033;" align="center">10</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">%</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="3.7" sdnum="1033;" height={18} align="center">3.7</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} rowSpan={3} valign="middle" align="left"> Frequency turning range<br /> (According to 10 years aging)</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">(fL- f)/f</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">Vc=0 V</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="-0.35" sdnum="1033;" align="center">-0.35</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ppm</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center">+</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} height={18} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">(f-f)/f</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">Vc=Vc0</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={3} sdval={0} sdnum="1033;" align="center">0</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ppm</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="3.8" sdnum="1033;" height={18} align="center">3.8</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">(fH- f)/f</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">Vc= Vref</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="0.35" sdnum="1033;" align="center">0.35</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ppm</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center">+</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdnum="1033;0;@" height={17} align="center">3.10</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Reference voltage</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={4} sdnum="1033;" align="center">4</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="4.2" sdnum="1033;" align="center">4.2</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="4.3" sdnum="1033;" align="center">4.3</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">V</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="3.11" sdnum="1033;" height={18} align="center">3.11</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left">Output resistance of Vref</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={91} sdnum="1033;" align="center">91</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">Ohm</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={10} height={17} align="left"><b>             Power supply</b></td>
      </tr>
{/* row30inputVoltage */}<tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="4.1" sdnum="1033;" height={17} align="center">4.1</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Input Voltage</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="4.75" sdnum="1033;" align="center">{xlsData.row30inputVoltageArray[0]}</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={5} sdnum="1033;" align="center">{xlsData.row30inputVoltageArray[1]}</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="5.25" sdnum="1033;" align="center">{xlsData.row30inputVoltageArray[2]}</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">V</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="4.2" sdnum="1033;" height={18} align="center">4.2</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Warm-up current*</td>
{/* cellD31warmUpCurrent */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">{xlsData.cellD31warmUpCurrentValue}</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">240</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">mA</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="4.3" sdnum="1033;" height={18} align="center">4.3</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Continuous current</td>
{/* cellG32continuousCurrent */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">{xlsData.cellG32continuousCurrentValue}</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
{/* cellH32continuousCurrentValue */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={30} sdnum="1033;" align="center">{xlsData.cellH32continuousCurrentValue}</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">mA</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="4.4" sdnum="1033;" height={18} align="center">4.4</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> Frequency warm-up time</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">to df/f=1e-7 at +25°C ref at 15 min</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={90} sdnum="1033;" align="center">90</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">s</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={10} height={17} align="left"><b>             Frequency stability</b></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="5.1" sdnum="1033;" height={18} align="center">5.1</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> vs. temperature</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">ref 25°C</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
{/* cellH35stabilityVsTemperatureValue */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><font face="Times New Roman">{xlsData.cellH35stabilityVsTemperatureValue}</font></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ppb</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center">+</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="5.2" sdnum="1033;" height={18} align="center">5.2</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> vs. supply voltage</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">ref Vcc typ.</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">±2</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ppb</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="5.3" sdnum="1033;" height={18} align="center">5.3</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> vs. load</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">5 % change</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">±2</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ppb</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval="5.4" sdnum="1033;" height={18} align="center">5.4</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="left"> G-sensitivity*</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">worst axis, 0 – 1 kHz vibration freq.</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><font face="Times New Roman">±1</font></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ppb/G</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} rowSpan={6} sdval="6.1" sdnum="1033;" valign="middle" height={103} align="center">6.1</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} rowSpan={6} valign="middle" align="left"><b>SSB Phase noise</b></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">1 Hz</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
{/* cellH39PhazeNoise1HzValue */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={-105} sdnum="1033;" align="center">{xlsData.cellH39PhazeNoise1HzValue}</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} rowSpan={6} valign="middle" align="center">dBc/Hz</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} rowSpan={6} valign="middle" align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">10 Hz</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
{/* cellH39PhazeNoise10HzValue */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={-137} sdnum="1033;" align="center">{xlsData.cellH39PhazeNoise10HzValue}</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">100 Hz</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
{/* cellH40PhazeNoise100HzValue */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={-156} sdnum="1033;" align="center">{xlsData.cellH40PhazeNoise100HzValue}</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">1 kHz</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
{/* cellH41PhazeNoise1KHzValue */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={-164} sdnum="1033;" align="center">{xlsData.cellH41PhazeNoise1KHzValue}</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">10 kHz</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
{/* cellH42PhazeNoise10KHzValue */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={-170} sdnum="1033;" align="center">{xlsData.cellH42PhazeNoise10KHzValue}</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} align="center">100 kHz</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
{/* cellH43PhazeNoise100KHzValue */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} sdval={-170} sdnum="1033;" align="center">{xlsData.cellH43PhazeNoise100KHzValue}</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} rowSpan={2} sdval="7.1" sdnum="1033;" valign="middle" height={36} align="center">7.1</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} rowSpan={2} valign="middle" align="left"><b>Aging</b></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="left">per day</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} rowSpan={2} valign="middle" align="center">after 30 days of operation</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><br /></td>
{/* cellH45stabilityVsTemperatureValue */}<td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><font face="Times New Roman">{xlsData.cellH45stabilityVsTemperatureValue}</font></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ppb</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="left">first year</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="left"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="left"><br /></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center"><font face="Times New Roman">±50</font></td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} align="center">ppb</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="left"><br /></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={10} height={17} align="left"><b>Maximum ratings, environmental, mechanical conditions.</b></td>
      </tr>
      <tr>
        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" height={17} align="left">Power voltage</td>
        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={8} valign="middle" align="left"><font color="#000000">-0.5 to 6V</font></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" height={17} align="left">Control voltage</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={8} valign="middle" align="left"><font color="#000000">-1.0 to 6.0 V</font></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" height={17} align="left">Air flow velocity</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={8} valign="middle" align="left"><font color="#000000">0.5 m/s maximum</font></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" height={18} align="left">Operating temperature range</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={8} valign="middle" align="left"><font color="#000000">-40°C to +85°C</font></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" height={18} align="left">Storage temperature range</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={8} valign="middle" align="left"><font color="#000000">-60°C to +85°C</font></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" height={17} align="left">Humidity</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={8} valign="middle" align="left"><font color="#000000">Non-condensing 95%</font></td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" height={17} align="left">Mechanical Shock</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={8} valign="middle" align="left">Per MIL-STD-202, 30G, 11ms</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" height={17} align="left">Vibration</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={8} valign="middle" align="left">Per MIL-STD-202, 10G swept sine 0 to 2000Hz</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" height={18} align="left">Soldering Conditions</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={8} valign="middle" align="left">Hand solder only – not reflow compatible 260°C 10s (on pins)</td>
      </tr>
      <tr>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000'}} colSpan={2} valign="middle" height={17} align="left">Washing Conditions</td>
        <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} colSpan={8} valign="middle" align="left">Washing with water or alcohol based detergent allowed only with final enough drying stage</td>
      </tr>
    </tbody></table>
</div>
<p>* For a lower value, please consult the factory.</p>

		  {/* ************************************************************************** */}
		</div>
		<img className="hero-line__circle-img" src="./pimages/types200/type1_200px.png" alt="xtall" />

		</div>
	  );
};
 



export default ReportTemplate;