// === reducer-spec-form.js ===
const RESET_SPEC_FORM_DATA = "RESET_SPEC_FORM_DATA";
const INPUT_SET_STEP2 = "INPUT_SET_STEP2";
const INPUT_SET_STEP3 = "INPUT_SET_STEP3";
const SET_STEPS_LEVEL_FINISH = "SET_STEPS_LEVEL_FINISH"; //stepsLevel=10
const INIT_SELECTED_MODEL = "INIT_SELECTED_MODEL";
const INIT_SELECTED_STABILITY_VS_TEMPERATURE ="INIT_SELECTED_STABILITY_VS_TEMPERATURE";
const INIT_CONTINUOUS_CURRENT= "INIT_CONTINUOUS_CURRENT";
const SET_FREQUENCY_BLUR = "SET_FREQUENCY_BLUR";
const SET_STABILITY_VS_TEMPERATURE_BLUR = "SET_STABILITY_VS_TEMPERATURE_BLUR";
const SET_EMAIL_DATA = "SET_EMAIL_DATA";
const UPDATE_EMAIL_DATA = "UPDATE_EMAIL_DATA";
const PHASE_NOISE_SWITCH_TOGGLE = "PHASE_NOISE_SWITCH_TOGGLE";
const INIT_BLUR_DATASET = "INIT_BLUR_DATASET"
const UPDATE_CONTINUOUS_CURRENT_DATA_SET = "UPDATE_CONTINUOUS_CURRENT_DATA_SET"
const UPDATE_STABILITY_VS_TEMPERATURE_DATA_SET = "UPDATE_STABILITY_VS_TEMPERATURE_DATA_SET"
const SET_VOLTAGE_BLUR = "SET_VOLTAGE_BLUR";
const SET_OUTPUT_TYPE_BLUR = "SET_OUTPUT_TYPE_BLUR";

const initialState = {
  selectedModel: {},
  blurDataset: {
    temperatureRange: '',
    frequencyBlur: 0,
    stabilityVsTemperature: 0,
    voltageBlur: "3.3", //default value
    outputTypeBlur: "Sine-wave", //default value
    continuousCurrentResult: 0,

    continuousCurrent: 0,
    subharmonicsLevel: -40,
    aginPerDay: 0,
    phaseNoise1Hz: 0,
    phaseNoise10Hz: 0,
    phaseNoise100Hz: 0,
    phaseNoise1KHz: 0,
    phaseNoise10KHz: 0,
    phaseNoise100KHz: 0,  
  },
  stepsLevel: 1,
  inputValueSteps: {
    /*       "nominalFrequency": "",
            "stabilityVsTemperature": "",
            "voltage": "", */
  },
  emailData: {},
};

const specFormReducer = (state = initialState, action) => {
  if (action.type === RESET_SPEC_FORM_DATA) {
    //debugger
    const stateCopy = {
      ...initialState,
    };
    //debugger
    return stateCopy;
  }

  if (action.type === INPUT_SET_STEP2) {
    const submitData = action.submitDataArr.inputValueSteps;
    //Update blurDataset
    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, 
        frequencyBlur: submitData.nominalFrequency,
        stabilityVsTemperature: submitData.stabilityVsTemperature,
        voltageBlur: submitData.voltage, //default value
        outputTypeBlur: submitData.outputType, //default value
    
        continuousCurrent: submitData.continuousCurrent,
        subharmonicsLevel: submitData.subharmonicsLevel,
        aginPerDay: submitData.aginPerDay,
        phaseNoise1Hz: submitData.phaseNoise1Hz,
        phaseNoise10Hz: submitData.phaseNoise10Hz,
        phaseNoise100Hz: submitData.phaseNoise100Hz,
        phaseNoise1KHz: submitData.phaseNoise1KHz,
        phaseNoise10KHz: submitData.phaseNoise10KHz,
        phaseNoise100KHz: submitData.phaseNoise100KHz, 
      }
    };
    //debugger
    return stateCopy;
  }

  /* if (action.type === INPUT_SET_STEP2) {
    //console.log("ffooo")
    const submitData = action.submitDataArr.inputValueSteps;

    const emailData = () => {
      const part1 = {
        Model: state.selectedModel.name,
        Packaging: state.selectedModel.packaging,
      }
      const part2 = {
        Frequency: submitData.nominalFrequency + " MHz",
        "Temperature Range": state.selectedModel.temperatureRangeSelected,
        "Stability vs Temperature":
          submitData.stabilityVsTemperature + " ppb",
        "Supply Voltage": submitData.voltage + " V",
        "Output Type": submitData.outputType.toUpperCase(),

      }      
      if (state.selectedModel.frequencyType === "with multiplication") {
        return {
          ...part1,  
          FrequencyType: "MULTIPLICATION",
          ...part2
        };
      }
      return { ...part1, ...part2};
    };

    //debugger
    const stateCopy = {
      ...state,
      inputValueSteps: {...action.submitDataArr.inputValueSteps},
      emailData: emailData(),
      stepsLevel: 1,
      //continuousCurrentData: {}
    };
    //debugger
    return stateCopy;
  }
 */

  if (action.type === INIT_CONTINUOUS_CURRENT) {
    //console.log(action.continuousCurrent)
    //action.selectedModel
    const stateCopy = {
      ...state,
      continuousCurrentData: action.continuousCurrent,
    };
    //debugger
    return stateCopy;
  }

  if (action.type === SET_STABILITY_VS_TEMPERATURE_BLUR) {
    //console.log(action.continuousCurrent)
    //action.selectedModel
    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, stabilityVsTemperature: action.stabilityVsTemperatureBlurValue}
    };
    //debugger
    return stateCopy;
  }

//UPDATE_EMAIL_DATA
if (action.type === UPDATE_EMAIL_DATA) {
  let emailData = {}
  const a = state.blurDataset

  if (a.temperatureRange) 
    {emailData = {...emailData, ...{["Temperature Range"]: a.temperatureRange,}}}

  if (a.frequencyBlur) 
    {emailData = {...emailData, ...{["Frequency"]: a.frequencyBlur + ' MHz',}}}

  if (state.selectedModel.frequencyType === "with multiplication")
    {emailData = {...emailData, ...{["FrequencyType"]: 'MULTIPLICATION',}}}

    if (a.stabilityVsTemperature) 
    {emailData = {...emailData, ...{["Stability vs Temperature"]: a.stabilityVsTemperature + ' ppb',}}}

    if (a.voltageBlur ) 
    {emailData = {...emailData, ...{["Supply Voltage"]: a.voltageBlur + ' V',}}}

  if (a.outputTypeBlur) 
  {emailData = {...emailData, ...{["Output Type"]: a.outputTypeBlur.toUpperCase(),}}}

  if (state.selectedModel.frequencyType === "with multiplication")
    {emailData = {...emailData, ...{["Subharmonics Level"]: a.subharmonicsLevel + ' dBc',}}}

    if (a.continuousCurrent) 
    {emailData = {...emailData, ...{["Continuous current max limit"]: a.continuousCurrent + ' mA',}}}

    if (a.aginPerDay) 
    {emailData = {...emailData, ...{["Agin per Day"]: a.aginPerDay + ' ppb',}}}

    if (a.phaseNoise1Hz) 
    {emailData = {...emailData, ...{["Phase noise 1Hz"]: a.phaseNoise1Hz + ' dBc/Hz',}}}

    if (a.phaseNoise10Hz) 
    {emailData = {...emailData, ...{["Phase noise 10Hz"]: a.phaseNoise10Hz + ' dBc/Hz',}}}

    if (a.phaseNoise100Hz) 
    {emailData = {...emailData, ...{["Phase noise 100Hz"]: a.phaseNoise100Hz + ' dBc/Hz',}}}

    if (a.phaseNoise1KHz) 
    {emailData = {...emailData, ...{["Phase noise 1KHz"]: a.phaseNoise1KHz + ' dBc/Hz',}}}

    if (a.phaseNoise10KHz) 
    {emailData = {...emailData, ...{["Phase noise 10KHz"]: a.phaseNoise10KHz + ' dBc/Hz',}}}

    if (a.phaseNoise100KHz) 
    {emailData = {...emailData, ...{["Phase noise 100KHz"]: a.phaseNoise100KHz + ' dBc/Hz',}}}


  const stateCopy = {
    ...state,
    emailData: emailData, 
  };
  //debugger
  return stateCopy;
}

  if (action.type === INPUT_SET_STEP3) {
    const submitData = action.submitDataArr.inputValueSteps;

    let emailData = {}

    if (submitData.subharmonicsLevel) 
    {emailData = {...emailData, ...{["Subharmonics Level"]: submitData.subharmonicsLevel + ' dBc',}}}

    if (submitData.continuousCurrent) 
    {emailData = {...emailData, ...{["Continuous current max limit"]: submitData.continuousCurrent + ' mA',}}}

    if (submitData.aginPerDay) 
    {emailData = {...emailData, ...{["Agin per Day"]: submitData.aginPerDay + ' ppb',}}}

    if (submitData.phaseNoise1Hz) 
    {emailData = {...emailData, ...{["Phase noise 1Hz"]: submitData.phaseNoise1Hz + ' dBc/Hz',}}}

    if (submitData.phaseNoise10Hz) 
    {emailData = {...emailData, ...{["Phase noise 10Hz"]: submitData.phaseNoise10Hz + ' dBc/Hz',}}}

    if (submitData.phaseNoise100Hz) 
    {emailData = {...emailData, ...{["Phase noise 100Hz"]: submitData.phaseNoise100Hz + ' dBc/Hz',}}}

    if (submitData.phaseNoise1KHz) 
    {emailData = {...emailData, ...{["Phase noise 1KHz"]: submitData.phaseNoise1KHz + ' dBc/Hz',}}}

    if (submitData.phaseNoise10KHz) 
    {emailData = {...emailData, ...{["Phase noise 10KHz"]: submitData.phaseNoise10KHz + ' dBc/Hz',}}}

    if (submitData.phaseNoise100KHz) 
    {emailData = {...emailData, ...{["Phase noise 100KHz"]: submitData.phaseNoise100KHz + ' dBc/Hz',}}}


    //debugger
    const stateCopy = {
      ...state,
      inputValueSteps: { ...state.inputValueSteps,
        ...action.submitDataArr.inputValueSteps },
      emailData: {...state.emailData, ...emailData}, 
      stepsLevel: 3,
    };
    //debugger
    return stateCopy;
  }

  
  if (action.type === INIT_SELECTED_MODEL) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      selectedModel: action.selectedModel,
      stepsLevel: 1,
      phaseNoiseSwitch: false,
    };
    //debugger
    return stateCopy;
  }

  if (action.type === INIT_SELECTED_STABILITY_VS_TEMPERATURE) {
    const stateCopy = {
      ...state,
      stabilityVsTemperature: action.selectedModelStabilityVsTemperature,
    };
    //debugger
    return stateCopy;
  }

  if (action.type === INIT_BLUR_DATASET) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, 
        temperatureRange: state.selectedModel.temperatureRange}
    };
    //debugger
    return stateCopy;
  }
  
  if (action.type === UPDATE_CONTINUOUS_CURRENT_DATA_SET) {
    //console.log('Hello')
    const nominalFrequency = state.blurDataset.frequencyBlur
    const voltage = state.blurDataset.voltageBlur
    const outputType = state.blurDataset.outputTypeBlur

    const getContinuousCurrentArray = () => {

      if (nominalFrequency > 0) {

        const frequencyType = state.selectedModel.frequencyType
        // if (voltage === "3.3" && outputType === "Sine-wave" && frequencyType === 'with multiplication' &&  )
        if (frequencyType === 'with multiplication' ) {
          if (nominalFrequency < 40) {
            if (voltage === "3.3" && outputType === "Sine-wave") {
              return state.continuousCurrentData.ccM.sWave3p3V
            }
            if (voltage === "5" && outputType === "Sine-wave") {
              return state.continuousCurrentData.ccM.sWave5V
            }
            if (voltage === "3.3" && outputType === "HCMOS") {
              return state.continuousCurrentData.ccM.hsmos3p3V
            }
            if (voltage === "5" && outputType === "HCMOS") {
              return state.continuousCurrentData.ccM.hsmos5V
            }
          }
          if (nominalFrequency >= 40) {
            if (voltage === "3.3" && outputType === "Sine-wave") {
              return state.continuousCurrentData.ccM40.sWave3p3V
            }
            if (voltage === "5" && outputType === "Sine-wave") {
              return state.continuousCurrentData.ccM40.sWave5V
            }
            if (voltage === "3.3" && outputType === "HCMOS") {
              return state.continuousCurrentData.ccM40.hsmos3p3V
            }
            if (voltage === "5" && outputType === "HCMOS") {
              return state.continuousCurrentData.ccM.hsmos5V
            }
          }
        }

        if (frequencyType === 'fundamental' ) {
          if (voltage === "3.3" && outputType === "Sine-wave") {
            return state.continuousCurrentData.ccF.sWave3p3V
          }
          if (voltage === "5" && outputType === "Sine-wave") {
            return state.continuousCurrentData.ccF.sWave5V
          }
          if (voltage === "3.3" && outputType === "HCMOS") {
            return state.continuousCurrentData.ccF.hsmos3p3V
          }
          if (voltage === "5" && outputType === "HCMOS") {
            return state.continuousCurrentData.ccF.hsmos5V
          }
        }
      }
      //default value
      return 0      
    }

    const continuousCurrentTypical = () => {
      const a = getContinuousCurrentArray()
      if (!a) {
        if (voltage === "3.3") { return  37 }
        if (voltage === "5") { return  31 }
      }
      const cc = ((a[3]-a[1])*(nominalFrequency-a[0])/(a[2]-a[0])+a[1])+a[4]
      return cc.toFixed(2)
    }
    //console.log(continuousCurrentTypical())

    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, continuousCurrentResult: continuousCurrentTypical()}
    };
    //debugger
    return stateCopy;
  }

  if (action.type === UPDATE_STABILITY_VS_TEMPERATURE_DATA_SET) {
      const frequency = state.blurDataset.frequencyBlur;
      let frequencyArr = state.stabilityVsTemperature.frequency;
      let stabilityArr = state.stabilityVsTemperature.stability;
      if (
        state.selectedModel.frequencyType === "with multiplication" &&
        frequency >= 40
      ) {
        frequencyArr = state.stabilityVsTemperature.frequency40;
        stabilityArr = state.stabilityVsTemperature.stability40;
      }

      const getStability = () => {
        if (frequency < frequencyArr[0]) return stabilityArr[0];
        if (frequency < frequencyArr[1]) {
          const result =
            ((stabilityArr[1] - stabilityArr[0]) *
              (frequency - frequencyArr[0])) /
              (frequencyArr[1] - frequencyArr[0]) +
            stabilityArr[0];
          return result;
        }
        if (frequency <= frequencyArr[2]) {
          const result =
            ((stabilityArr[2] - stabilityArr[1]) *
              (frequency - frequencyArr[1])) /
              (frequencyArr[2] - frequencyArr[1]) +
            stabilityArr[1];
          return result;
        }
        return state.selectedModel.stabilityLimit;
      };
      //console.log("getStability->: " + getStability())
      //debugger
      const stateCopy = {
        ...state,
        blurDataset: { ...state.blurDataset, stabilityVsTemperature: getStability().toFixed(1)}
      };
      //debugger
      return stateCopy;
    }

  if (action.type === SET_FREQUENCY_BLUR) {
    //console.log("ffooo")
    const frequencyBlurValue = action.frequencyBlurValue;
    //debugger
    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, frequencyBlur: frequencyBlurValue}
    };
    //debugger
    return stateCopy;
  }

 if (action.type === SET_VOLTAGE_BLUR) {

    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, voltageBlur: action.value}
    };
    return stateCopy;
  }

  if (action.type === SET_OUTPUT_TYPE_BLUR) {
    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, outputTypeBlur: action.value}
    };
    return stateCopy;
  }

  if (action.type === SET_EMAIL_DATA) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      emailData: action.emailData,
    };
    //debugger
    return stateCopy;
  }
  
  if (action.type === PHASE_NOISE_SWITCH_TOGGLE) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      phaseNoiseSwitch: !state.phaseNoiseSwitch,
    };
    //debugger
    return stateCopy;
  }
  
  if (action.type === SET_STEPS_LEVEL_FINISH) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      stepsLevel: 10,
    };
    //debugger
    return stateCopy;
  }

  //debugger
  return state;
};

const specFormInputStep2AC = (submitDataArr) => ({ type: INPUT_SET_STEP2, submitDataArr});
export const specFormInputStep3 = (submitDataArr) => ({ type: INPUT_SET_STEP3, submitDataArr});

const updateContinuousCurrentDataSetAC = () => ({ type: UPDATE_CONTINUOUS_CURRENT_DATA_SET });
const updateStabilityVsTemperatureDataSetAC = () => ({ type: UPDATE_STABILITY_VS_TEMPERATURE_DATA_SET });

const initBlurDataSetSetAC = () => ({ type: INIT_BLUR_DATASET });
const setFrequencyBlurAC = (frequencyBlurValue) => ({ type: SET_FREQUENCY_BLUR, frequencyBlurValue,
});
const setStabilityVsTemperatureBlurAC = (stabilityVsTemperatureBlurValue) => ({ type: SET_STABILITY_VS_TEMPERATURE_BLUR, 
  stabilityVsTemperatureBlurValue, });
const setVoltageBlurAC = (value) => ({ type: SET_VOLTAGE_BLUR, value });
const setOutputTypeBlurAC = (value) => ({ type: SET_OUTPUT_TYPE_BLUR, value });

export const initSelectedModel = (selectedModel) => ({ type: INIT_SELECTED_MODEL, selectedModel, });
export const initcontinuousCurrent= (continuousCurrent) => ({ type: INIT_CONTINUOUS_CURRENT, continuousCurrent, });
export const initsselectedModelStabilityVsTemperature = ( selectedModelStabilityVsTemperature ) => ({
  type: INIT_SELECTED_STABILITY_VS_TEMPERATURE,
  selectedModelStabilityVsTemperature,
});
export const setEmailDataAC = (emailData) => ({ type: SET_EMAIL_DATA, emailData, });
export const updateEmailData = () => ({ type: UPDATE_EMAIL_DATA });
export const setStepsLevelFinish = () => ({ type: SET_STEPS_LEVEL_FINISH });
export const resetSpecFormDataAC = () => ({ type: RESET_SPEC_FORM_DATA });
export const phaseNoiseSwitchToggleAC = () => ({ type: PHASE_NOISE_SWITCH_TOGGLE });

/* ========= THUNK PART ================ */
// FRom GenModelsHello.jsx
export const specFormInitStep2TC = (
  selectedModel,
  selectedModelStabilityVsTemperature,
  continuousCurrent
) => {
  return (dispatch) => {
    dispatch(initSelectedModel(selectedModel));
    dispatch(
      initsselectedModelStabilityVsTemperature(
        selectedModelStabilityVsTemperature
      )
    );
    dispatch(initcontinuousCurrent(continuousCurrent));
    dispatch(initBlurDataSetSetAC());
    dispatch(updateContinuousCurrentDataSetAC());
    dispatch(updateStabilityVsTemperatureDataSetAC());
    dispatch(updateEmailData());
  };
};


export const setFrequencyBlurTC = (event) => {
  return (dispatch) => {
    dispatch(setFrequencyBlurAC(event.target.value | 0));
    dispatch(updateContinuousCurrentDataSetAC());
    dispatch(updateStabilityVsTemperatureDataSetAC());
    dispatch(updateEmailData());
  };
};

//stabilityVsTemperatureBlurValue
export const setstabilityVsTemperatureBlurValueBlurTC = (event) => {
  //console.log(event.target.value)
  return (dispatch) => {
    dispatch(setStabilityVsTemperatureBlurAC(event.target.value));
    dispatch(updateEmailData());
  };
};

export const updateVoltageBlurTC = (event) => {
  //console.log(event.target.value)
  return (dispatch) => {
    dispatch(setVoltageBlurAC(event.target.value));
    dispatch(updateEmailData());
  };
};

//stabilityVsTemperatureBlurValue
export const updateOutputTypeBlurTC = (event) => {
  //console.log(event.target.value)
  return (dispatch) => {
    dispatch(setOutputTypeBlurAC(event.target.value));
    dispatch(updateEmailData());
  };
};

export const specFormInputStep2TC = (submitDataArr) => {
  //console.log(event.target.value)
  return (dispatch) => {
    dispatch(specFormInputStep2AC(submitDataArr))
    dispatch(updateEmailData())
/*     dispatch(specFormInputStep2AC(submitDataArr));
    dispatch(updateEmailData()); */
  };
};

export default specFormReducer;
