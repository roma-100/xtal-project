//***********  SpecificationBannerStep2.jsx **** */
import React from "react";
import "./SpecificationBannerStep1.scss"

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const SpecificationBannerStep2 = (props) => {
      const {dataForm, emailData} = props

      const rows = []
/*       function createData(name, value) {
        return { name, value };
      }
      
      const rows = [
        createData("Model:", dataForm.selectedModel.name),
        createData("Packaging:", dataForm.selectedModel.packaging),
        createData("FrequencyType:", dataForm.selectedModel.frequencyType.toUpperCase()),
        createData("Frequency:", dataForm.inputValueStep2.nominalFrequency + ' MHz'),
        createData("Temperature Range:", dataForm.selectedModel.temperatureRangeSelected),
        createData("Stability vs Temperature:", dataForm.inputValueStep2.stabilityVsTemperature + ' ppb'),
        createData("Supply Voltage:", dataForm.inputValueStep2.voltage + ' V'),
        createData("Output Type:", dataForm.inputValueStep2.outputType.toUpperCase()),
      ];
      
      window.bbb = rowsEmailData
      window.bbc = rows
      
          if (!this.state.isDidMount) { 
      //decode data for transfer to mailSender
      for (const [key, value] of Object.entries(emailData)) {
        this.state.emailDataRows.push ({name: key, value: value})
      }
    } else this.state.isDidMount = true  //Let's Stop didMount twice
    */
   //decode data for transfer to mailSender
   for (const [key, value] of Object.entries(emailData)) {
    rows.push ({name: key, value: value})
  }

      return (
        <>
        <div className="speciication-selected__wrap">
              <div className="speciication__head-table">
              <p>Selected data</p> 
            </div> 
        <div className=".speciication-selected--size ">
   

            <TableContainer component={Paper}>
              <Table sx={{ maxWidth: 300}} size="normal" aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" sx={{color: "#962B00"}}>
                        {row.name}
                      </TableCell>
                      <TableCell align="right" sx={{color: "#084C81"}} >{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          </div>
        </>
      );
  }


export default SpecificationBannerStep2