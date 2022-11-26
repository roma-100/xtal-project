/* Father: SpecificationContainer.jsx */
//***********  SpecificationStep3.jsx **** */
/* 
1/ Banner Step 1
2/ Step 3 (Specification + Special requiremens) -> email data
*/
import React, { useState } from "react";
import ReportTemplate from "./SpecificationLoader/SpecTemplate"
import FormSpecialRequirements from './Forms/FormSpecialRequirements'

const SpecificationStep3 = (props) => {

  return (
    <>
      <div className="spec-pdf__doc-wrap">
        <ReportTemplate 
        decor = {props.flexStyleXlsTbl}/* {sStyle.tableWidth} */
        xlsData = {props.xlsData}
        />

      </div>
      <FormSpecialRequirements 
        decor = {props.flexStyleXlsTbl}
        clickHandlerAddSpecialRequirementsTC = {props.clickHandlerAddSpecialRequirementsTC}
        />
    </>
  )

};

export default SpecificationStep3;
