//***********  SpecificationStep1.jsx **** */
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData("Model:", "22"),
  createData("Packaging:", "22"),
  createData("frequencyType:", "22"),
  createData("Frequency:", "22"),
  createData("Temperature Range:", "22"),
  createData("Stability vs Temperature:", "22"),
  createData("Supply Voltage:", "22"),
  createData("Output Type:", "22"),
];

/* const rows = [
  {'Model': '22'},
  {'frequency': '22'},
  {'frequencyType': '22'},
  {'temperatureRange': '22'},
  {'stabilityVsTemperature': '22'},
  {'Supply Voltage': '22'},
  {'Output Type': '22'},
]; */

const Test = (props) => {
  return (
    <div className="speciication__wrap--position">
      <div className="speciication-selected-banner_wrap--decor">
        <div className="speciication-model__title-name">
          <h1>Model: XBO8S </h1>
        </div>
        <div className="speciication-model__title-frequency">
          <p>8-150 Fundamental</p>
        </div>
        <div className="speciication-model__info-wrap">
          <div className="speciication-model__picture">
            <img src="../../pimages/types200/type2_200px.png" alt="OCXO pict" />
          </div>
          <div className="speciication-model__package">
            <span>Packaging: </span>DIP8 SMD
          </div>

          <div className="speciication-model__features">
            <h5>3 ppb in -40 +85ºC range</h5>
            <h5>to 0.1 ppb/day, 15 ppb/year</h5>
            <h5>to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor</h5>
            <h5>to 0.3 ppb/G sensitivity</h5>
            <h5>to 75 mW consumption</h5>
            <h5>to 45s frequency warm-up</h5>
          </div>
        </div>
      </div>

      <div className="speciication__wrap--position">
        <div className="speciication__head-table">
          <p>Selected data</p> 
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300}} size="normal" aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{color: "#521700"}}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>





    </div>
  );
};

export default Test;
