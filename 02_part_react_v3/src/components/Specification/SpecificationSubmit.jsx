//***********  SpecificationSubmit.jsx **** */
import React from "react";
import StateSpecFormShowHelper from "../Helper/StateSpecFormShowHelper";
import SpecificationBanerStep1 from "./SpecificationBannerStep1";
import SpecificationBanerStep2 from "./SpecificationBannerStep2";
import SpecificationMailForm from "./SpecificationMailForm";
import SpecificationMailSender from "./SpecificationMailSender";

const SpecificationSubmit = (props) => {
  const { dataForm, picturePath, selectedModel, setStepsLevelFinish } = props;
  //window.bb = dataForm.inputValueStep2

  return (
    <>
      <SpecificationBanerStep1
        picturePath={picturePath}
        selectedModel={selectedModel}
        features={selectedModel.features}
      />

      <SpecificationBanerStep2 dataForm={dataForm} />
      <SpecificationMailSender 
      setStepsLevelFinish={setStepsLevelFinish}
      />
      {/* <SpecificationMailForm /> */}
    </>
  );
};

export default SpecificationSubmit;
