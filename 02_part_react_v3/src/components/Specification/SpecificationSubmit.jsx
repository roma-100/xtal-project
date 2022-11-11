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

  componentDidMount() {
    const { dataForm, setEmailDataAC } = this.props;

    const emailData = () => {
      if (dataForm.selectedModel.frequencyType === "with multiplication") {
        return {
          Model: dataForm.selectedModel.name,
          Packaging: dataForm.selectedModel.packaging,
          FrequencyType: "MULTIPLICATION",
          Frequency: dataForm.inputValueSteps.nominalFrequency + " MHz",
          "Temperature Range": dataForm.selectedModel.temperatureRangeSelected,
          "Stability vs Temperature":
            dataForm.inputValueSteps.stabilityVsTemperature + " ppb",
          "Supply Voltage": dataForm.inputValueSteps.voltage + " V",
          "Output Type": dataForm.inputValueSteps.outputType.toUpperCase(),
        };
      }
      return {
        Model: dataForm.selectedModel.name,
        Packaging: dataForm.selectedModel.packaging,
        Frequency: dataForm.inputValueSteps.nominalFrequency + " MHz",
        "Temperature Range": dataForm.selectedModel.temperatureRangeSelected,
        "Stability vs Temperature":
          dataForm.inputValueSteps.stabilityVsTemperature + " ppb",
        "Supply Voltage": dataForm.inputValueSteps.voltage + " V",
        "Output Type": dataForm.inputValueSteps.outputType.toUpperCase(),
      };
    };

    setEmailDataAC(emailData());
  }

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
        <SpecificationBanerStep1
          picturePath={picturePath}
          selectedModel={selectedModel}
          features={selectedModel.features}
        />

        <SpecificationBanerStep2
          dataForm={dataForm}
          emailData={dataForm.emailData}
        />
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
const SpecificationSubmit1 = (props) => {
  const {
    dataForm,
    picturePath,
    selectedModel,
    setEmailDataAC,
    setStepsLevelFinish,
    filterInitTC,
  } = props;
  //create MessageData object
  const emailData = {
    Model: dataForm.selectedModel.name,
    Packaging: dataForm.selectedModel.packaging,
    FrequencyType: +dataForm.selectedModel.frequencyType.toUpperCase(),
    Frequency: dataForm.inputValueSteps.nominalFrequency + " MHz",
    "Temperature Range": dataForm.selectedModel.temperatureRangeSelected,
    "Stability vs Temperature":
      dataForm.inputValueSteps.stabilityVsTemperature + " ppb",
    "Supply Voltage": dataForm.inputValueSteps.voltage + " V",
    "Output Type": dataForm.inputValueSteps.outputType.toUpperCase(),
  };
  //setEmailDataAC (emailData)

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
        filterInitTC={filterInitTC}
      />
      {/* <SpecificationMailForm /> */}
    </>
  );
};

export default SpecificationSubmit;
