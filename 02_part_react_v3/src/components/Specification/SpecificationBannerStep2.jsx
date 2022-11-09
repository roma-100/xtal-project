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

   //decode data for transfer to mailSender
   for (const [key, value] of Object.entries(dataForm.emailData)) {
     rows.push ({name: key, value: value})
    //rows.push (`</p><span>${key}: </span> ${value} </p>`)
  }

//window.bb = rows

      return (
        <>
          <div className="speciication-banner2__wrap--position">
            <div className="speciication-banner2-selected_wrap--decor">
              <div className="speification-banner2__title">Selected</div>
              {rows.map((row) => (
                <div className="speification-banner2__row" key={row.name}>
                  <div className="speification-banner2__row--name">
                    {" "}
                    {row.name + ": "}{" "}
                  </div>
                  <div className="speification-banner2__row--value">
                    {" "}
                    {row.value}{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
  }


export default SpecificationBannerStep2