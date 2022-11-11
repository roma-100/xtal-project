//***********  SpecificationSubmit.jsx **** */
import React from "react";
import StateSpecFormShowHelper from "../Helper/StateSpecFormShowHelper";
import SpecificationBanerStep1 from "./SpecificationBannerStep1";
import SpecificationBanerStep2 from "./SpecificationBannerStep2";
import SpecificationMailForm from "./SpecificationMailForm";
import SpecificationMailSender from "./SpecificationMailSender";

class SpecificationSubmit extends React.Component {
  state = {
    emailDataRows: [],
    isDidMount: false,
  };


  render() {
    const {
      dataForm,
      picturePath,
      selectedModel,
      setStepsLevelFinish,
      filterInitTC,
    } = this.props;

    return (
      <>
        <SpecificationMailSender
          setStepsLevelFinish={setStepsLevelFinish}
          emailData={dataForm.emailData}
          filterInitTC={filterInitTC}
        />
        {/* <SpecificationMailForm /> */}
      </>
    );
  }
}


export default SpecificationSubmit;
